"""
Generate provisional marksheet PDFs from batch result PDF + DOCX letterhead.
Usage:
  python generate_pdfs.py --batch-pdf "results.pdf" --docx "format.docx" --output-dir "output"
"""

import argparse
import os
import sys
import zipfile
import shutil
import pdfplumber
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from reportlab.lib.units import mm
from reportlab.lib.utils import ImageReader
from PIL import Image
import io


def extract_letterhead(docx_path: str, tmp_dir: str) -> str:
    """Extract image1.jpeg from docx word/media/ and return path."""
    with zipfile.ZipFile(docx_path, 'r') as z:
        media = [n for n in z.namelist() if n.startswith('word/media/')]
        if not media:
            raise FileNotFoundError("No images found in DOCX word/media/")
        # prefer image1.jpeg / image1.jpg / image1.png
        preferred = [m for m in media if os.path.basename(m).lower().startswith('image1')]
        chosen = preferred[0] if preferred else media[0]
        dest = os.path.join(tmp_dir, os.path.basename(chosen))
        with z.open(chosen) as src, open(dest, 'wb') as dst:
            dst.write(src.read())
    return dest


def parse_student_page(page) -> dict | None:
    """Parse a single pdfplumber page into student dict. Returns None on failure."""
    import re

    text_lines = page.extract_text(x_tolerance=3, y_tolerance=3)
    if not text_lines:
        return None
    lines = [l.strip() for l in text_lines.split('\n') if l.strip()]

    student = {
        'name': '',
        'enrollment': '',
        'courses': [],
        'spi': '',
        'cgpa': '',
        'class': '',
        'semester': '',
        'mooc_courses': [],  # list of (title, platform, university)
        'programme': '',
        'exam_period': '',
    }

    # ── From table: enrollment, name, programme, semester, courses, SPI, CGPA, class ──
    tables = page.extract_tables()
    for table in tables:
        for row in table:
            if not row:
                continue
            cells = [str(c).strip() if c else '' for c in row]
            first = cells[0]

            # Header rows with label in col0, value in col3
            if first == 'Enrollment No.':
                # col3 has enrollment
                val = cells[3] if len(cells) > 3 else ''
                student['enrollment'] = val.strip()
            elif first == 'Name':
                val = cells[3] if len(cells) > 3 else ''
                student['name'] = val.strip()
            elif first == 'Programme':
                val = cells[3] if len(cells) > 3 else ''
                student['programme'] = val.strip()
            elif first == 'Exam Period':
                val = cells[3] if len(cells) > 3 else ''
                student['exam_period'] = val.strip()
                # Semester is in col14
                sem = cells[14] if len(cells) > 14 else ''
                student['semester'] = sem.strip()

            # Course data row: col0 has newline-joined course codes like "150020601\n150020611\n..."
            # col2 has course titles, col10 has credits, col13 has CCE, col15 has SEE(T), col17 has SEE(P), col19 has Grade
            elif re.match(r'^\d{6,}', first) and '\n' in first:
                codes = first.split('\n')
                titles_cell = cells[2] if len(cells) > 2 else ''
                titles = titles_cell.split('\n')
                credits_cell = cells[10] if len(cells) > 10 else ''
                credits_list = credits_cell.split('\n')
                grades_cell = cells[19] if len(cells) > 19 else ''
                grades = grades_cell.split('\n')
                cce_cell = cells[13] if len(cells) > 13 else ''
                cce_list = cce_cell.split('\n')

                for idx, code in enumerate(codes):
                    code = code.strip()
                    if not code:
                        continue
                    student['courses'].append({
                        'code': code,
                        'name': titles[idx].strip() if idx < len(titles) else '',
                        'credits': credits_list[idx].strip() if idx < len(credits_list) else '',
                        'grade': grades[idx].strip() if idx < len(grades) else '',
                        'cce': cce_list[idx].strip() if idx < len(cce_list) else '',
                    })

            # SPI row: "Credits Offered : X" in col0, "SPI : X.XX" in col18
            elif 'Credits Offered' in first:
                for cell in cells:
                    m = re.search(r'SPI\s*:\s*(\d+\.\d+)', cell)
                    if m:
                        student['spi'] = m.group(1)

            # CGPA/CLASS row: "SPI" in col0, CGPA in col12, CLASS in col16
            elif first == 'SPI' and len(cells) > 12:
                cgpa = cells[12].strip() if len(cells) > 12 else ''
                if re.match(r'^\d+\.\d+$', cgpa):
                    student['cgpa'] = cgpa
                cls = cells[16].strip() if len(cells) > 16 else ''
                if cls:
                    student['class'] = cls.replace('\n', ' ')

            # MOOC rows: title in col0, platform in col7, university in col11
            elif first and 'MOOC' not in first and 'Platform' not in first and 'University' not in first:
                platform = cells[7].strip() if len(cells) > 7 else ''
                uni = cells[11].strip() if len(cells) > 11 else ''
                if platform in ('Coursera', 'edX', 'Swayam', 'NPTEL', 'Udemy', 'LinkedIn Learning'):
                    student['mooc_courses'].append((first, platform, uni))

    # ── Fallback from plain text ──
    for line in lines:
        if not student['enrollment']:
            m = re.search(r'Enrollment No\.\s+(\d{8,})', line)
            if m:
                student['enrollment'] = m.group(1)
        if not student['name']:
            m = re.search(r'^Name\s+(.+)$', line)
            if m:
                student['name'] = m.group(1).strip()
        if not student['spi']:
            m = re.search(r'SPI\s*[:\s]\s*(\d+\.\d+)', line)
            if m:
                student['spi'] = m.group(1)
        if not student['cgpa']:
            m = re.search(r'CGPA\s*(\d+\.\d+)', line)
            if m:
                student['cgpa'] = m.group(1)

    return student if student['enrollment'] else None


def generate_pdf(student: dict, letterhead_path: str, output_path: str):
    """Render one provisional marksheet PDF."""
    W, H = A4  # 595.27 x 841.89 pts
    c = canvas.Canvas(output_path, pagesize=A4)

    # Draw letterhead as background
    img = ImageReader(letterhead_path)
    c.drawImage(img, 0, 0, width=W, height=H, preserveAspectRatio=False, mask='auto')

    # ── Typography helpers ──────────────────────────────────────────────────
    def bold(size=10):
        c.setFont('Helvetica-Bold', size)

    def regular(size=10):
        c.setFont('Helvetica', size)

    def center(text, y, size=10, is_bold=False):
        (bold if is_bold else regular)(size)
        c.drawCentredString(W / 2, y, text)

    def left(text, x, y, size=10, is_bold=False):
        (bold if is_bold else regular)(size)
        c.drawString(x, y, text)

    # ── Content positioning (tweak these if letterhead shifts) ──────────────
    top_y = H - 80 * mm   # start below letterhead header area

    center('PROVISIONAL MARKSHEET', top_y, size=13, is_bold=True)
    top_y -= 8 * mm

    # Student info block
    col1_x = 20 * mm
    col2_x = 110 * mm
    line_h = 6 * mm

    pairs = [
        ('Student Name', student['name']),
        ('Enrollment No.', student['enrollment']),
        ('Programme', student['programme'] or '—'),
        ('Exam Period', student['exam_period'] or '—'),
        ('Semester', student['semester'] or '—'),
    ]
    for label, val in pairs:
        bold(9)
        c.drawString(col1_x, top_y, f"{label}:")
        regular(9)
        c.drawString(col2_x, top_y, val)
        top_y -= line_h

    top_y -= 4 * mm

    # ── Course table ────────────────────────────────────────────────────────
    if student['courses']:
        headers = ['Course Code', 'Course Name', 'Credits', 'CCE', 'Grade']
        col_widths = [30 * mm, 75 * mm, 20 * mm, 20 * mm, 20 * mm]
        col_xs = [col1_x]
        for w in col_widths[:-1]:
            col_xs.append(col_xs[-1] + w)

        row_h = 5.5 * mm
        table_w = sum(col_widths)

        # Header row background
        c.setFillColorRGB(0.2, 0.4, 0.7)
        c.rect(col1_x, top_y - 1 * mm, table_w, row_h, fill=1, stroke=0)
        c.setFillColorRGB(1, 1, 1)
        bold(8)
        for i, h in enumerate(headers):
            c.drawString(col_xs[i] + 1 * mm, top_y + 1 * mm, h)
        c.setFillColorRGB(0, 0, 0)
        top_y -= row_h + 1 * mm

        for ri, course in enumerate(student['courses']):
            if ri % 2 == 0:
                c.setFillColorRGB(0.95, 0.95, 0.95)
                c.rect(col1_x, top_y - 1 * mm, table_w, row_h, fill=1, stroke=0)
                c.setFillColorRGB(0, 0, 0)
            regular(8)
            vals = [course['code'], course['name'], course['credits'], course.get('cce',''), course['grade']]
            for i, v in enumerate(vals):
                c.drawString(col_xs[i] + 1 * mm, top_y + 1 * mm, str(v)[:30])
            top_y -= row_h

        top_y -= 6 * mm

    # ── Summary ─────────────────────────────────────────────────────────────
    summary = [
        ('SPI', student['spi'] or '—'),
        ('CGPA', student['cgpa'] or '—'),
        ('Class', student['class'] or '—'),
    ]
    for label, val in summary:
        bold(9)
        c.drawString(col1_x, top_y, f"{label}:")
        regular(9)
        c.drawString(col2_x, top_y, val)
        top_y -= line_h

    # ── Signature line ──────────────────────────────────────────────────────
    sig_y = 35 * mm
    c.line(W - 60 * mm, sig_y, W - 15 * mm, sig_y)
    regular(8)
    c.drawRightString(W - 15 * mm, sig_y - 4 * mm, 'Authorized Signatory')

    c.save()


def main():
    parser = argparse.ArgumentParser(description='Generate provisional marksheet PDFs')
    parser.add_argument('--batch-pdf', required=True, help='Path to batch result PDF')
    parser.add_argument('--docx', required=True, help='Path to format DOCX with letterhead')
    parser.add_argument('--output-dir', required=True, help='Output directory for PDFs')
    args = parser.parse_args()

    os.makedirs(args.output_dir, exist_ok=True)
    tmp_dir = os.path.join(args.output_dir, '.tmp_letterhead')
    os.makedirs(tmp_dir, exist_ok=True)

    print(f"Extracting letterhead from: {args.docx}")
    try:
        letterhead = extract_letterhead(args.docx, tmp_dir)
        print(f"  Letterhead: {letterhead}")
    except Exception as e:
        print(f"ERROR extracting letterhead: {e}", file=sys.stderr)
        sys.exit(1)

    print(f"Parsing batch PDF: {args.batch_pdf}")
    success = 0
    failed = 0

    with pdfplumber.open(args.batch_pdf) as pdf:
        total = len(pdf.pages)
        print(f"  Total pages: {total}")
        for i, page in enumerate(pdf.pages, 1):
            try:
                student = parse_student_page(page)
                if not student:
                    print(f"  Page {i}: SKIP — could not parse student data")
                    failed += 1
                    continue
                safe_name = student['name'].replace('/', '-').replace('\\', '-')
                filename = f"{safe_name} - {student['enrollment']}.pdf"
                out_path = os.path.join(args.output_dir, filename)
                generate_pdf(student, letterhead, out_path)
                print(f"  Page {i}: OK — {filename}")
                success += 1
            except Exception as e:
                print(f"  Page {i}: FAIL — {e}", file=sys.stderr)
                failed += 1

    shutil.rmtree(tmp_dir, ignore_errors=True)
    print(f"\nDone. Success: {success}  Failed: {failed}")
    print(f"PDFs saved to: {os.path.abspath(args.output_dir)}")


if __name__ == '__main__':
    main()
