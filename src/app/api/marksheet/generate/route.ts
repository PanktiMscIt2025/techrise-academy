import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import { exec } from 'child_process'
import { promisify } from 'util'
import path from 'path'
import os from 'os'

const execAsync = promisify(exec)

export const runtime = 'nodejs'
// Allow large file uploads
export const maxDuration = 120

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()

    const batchPdf = formData.get('batchPdf') as File | null
    const docx = formData.get('docx') as File | null
    const outputDir = (formData.get('outputDir') as string) || 'provisional_output'

    if (!batchPdf || !docx) {
      return NextResponse.json({ error: 'batchPdf and docx required' }, { status: 400 })
    }

    // Save uploaded files to a workspace dir
    const workspace = path.join(process.cwd(), 'marksheet-workspace')
    await mkdir(workspace, { recursive: true })

    const batchPdfPath = path.join(workspace, batchPdf.name)
    const docxPath = path.join(workspace, docx.name)
    const outPath = path.join(workspace, outputDir)

    await writeFile(batchPdfPath, Buffer.from(await batchPdf.arrayBuffer()))
    await writeFile(docxPath, Buffer.from(await docx.arrayBuffer()))

    const scriptPath = path.join(process.cwd(), 'scripts', 'generate_pdfs.py')
    const cmd = `python "${scriptPath}" --batch-pdf "${batchPdfPath}" --docx "${docxPath}" --output-dir "${outPath}"`

    const { stdout, stderr } = await execAsync(cmd, { timeout: 100_000 })
    const output = [stdout, stderr].filter(Boolean).join('\n')

    return NextResponse.json({ success: true, output, outputDir: outPath })
  } catch (err: any) {
    const output = [err.stdout, err.stderr, err.message].filter(Boolean).join('\n')
    return NextResponse.json({ success: false, output }, { status: 500 })
  }
}
