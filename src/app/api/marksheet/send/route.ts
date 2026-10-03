import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import { exec } from 'child_process'
import { promisify } from 'util'
import path from 'path'

const execAsync = promisify(exec)

export const runtime = 'nodejs'
export const maxDuration = 300

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()

    const excel = formData.get('excel') as File | null
    const pdfDir = formData.get('pdfDir') as string
    const emailCol = formData.get('emailCol') as string
    const sender = formData.get('sender') as string
    const password = formData.get('password') as string
    const uidCol = (formData.get('uidCol') as string) || 'UIDNumber'
    const delay = (formData.get('delay') as string) || '3'

    if (!excel || !pdfDir || !emailCol || !sender || !password) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const workspace = path.join(process.cwd(), 'marksheet-workspace')
    await mkdir(workspace, { recursive: true })

    const excelPath = path.join(workspace, excel.name)
    await writeFile(excelPath, Buffer.from(await excel.arrayBuffer()))

    const scriptPath = path.join(process.cwd(), 'scripts', 'send_emails.py')
    const cmd = [
      `python "${scriptPath}"`,
      `--pdf-dir "${pdfDir}"`,
      `--excel "${excelPath}"`,
      `--email-col "${emailCol}"`,
      `--sender "${sender}"`,
      `--password "${password}"`,
      `--uid-col "${uidCol}"`,
      `--delay ${delay}`,
    ].join(' ')

    const { stdout, stderr } = await execAsync(cmd, { timeout: 280_000 })
    const output = [stdout, stderr].filter(Boolean).join('\n')

    return NextResponse.json({ success: true, output })
  } catch (err: any) {
    const output = [err.stdout, err.stderr, err.message].filter(Boolean).join('\n')
    return NextResponse.json({ success: false, output }, { status: 500 })
  }
}
