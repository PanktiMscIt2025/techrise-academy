'use client'

import { useState, useRef } from 'react'

type Step = 'idle' | 'generating' | 'generated' | 'sending' | 'sent'

export default function MarksheetPage() {
  // File refs
  const batchPdfRef = useRef<HTMLInputElement>(null)
  const docxRef = useRef<HTMLInputElement>(null)
  const excelRef = useRef<HTMLInputElement>(null)

  // Config
  const [outputDir, setOutputDir] = useState('sem_provisional')
  const [emailCol, setEmailCol] = useState('E Mail ID')
  const [uidCol, setUidCol] = useState('UIDNumber')
  const [sender, setSender] = useState('')
  const [password, setPassword] = useState('')
  const [delay, setDelay] = useState('3')

  // State
  const [step, setStep] = useState<Step>('idle')
  const [genLog, setGenLog] = useState('')
  const [sendLog, setSendLog] = useState('')
  const [resolvedOutputDir, setResolvedOutputDir] = useState('')
  const [error, setError] = useState('')

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setGenLog('')
    const batchPdf = batchPdfRef.current?.files?.[0]
    const docx = docxRef.current?.files?.[0]
    if (!batchPdf || !docx) {
      setError('Select both Batch PDF and Format DOCX')
      return
    }

    setStep('generating')
    const fd = new FormData()
    fd.append('batchPdf', batchPdf)
    fd.append('docx', docx)
    fd.append('outputDir', outputDir)

    try {
      const res = await fetch('/api/marksheet/generate', { method: 'POST', body: fd })
      const data = await res.json()
      setGenLog(data.output || '')
      if (data.success) {
        setResolvedOutputDir(data.outputDir)
        setStep('generated')
      } else {
        setError('Generation failed — see log below')
        setStep('idle')
      }
    } catch (err) {
      setError(String(err))
      setStep('idle')
    }
  }

  async function handleSend(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setSendLog('')
    const excel = excelRef.current?.files?.[0]
    if (!excel) { setError('Select Student Excel file'); return }
    if (!sender || !password) { setError('Enter Gmail sender and App Password'); return }

    setStep('sending')
    const fd = new FormData()
    fd.append('excel', excel)
    fd.append('pdfDir', resolvedOutputDir)
    fd.append('emailCol', emailCol)
    fd.append('uidCol', uidCol)
    fd.append('sender', sender)
    fd.append('password', password)
    fd.append('delay', delay)

    try {
      const res = await fetch('/api/marksheet/send', { method: 'POST', body: fd })
      const data = await res.json()
      setSendLog(data.output || '')
      setStep(data.success ? 'sent' : 'generated')
      if (!data.success) setError('Email send failed — see log below')
    } catch (err) {
      setError(String(err))
      setStep('generated')
    }
  }

  const isGenerating = step === 'generating'
  const isSending = step === 'sending'
  const canSend = step === 'generated' || step === 'sent'

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <div className="max-w-3xl mx-auto space-y-8">

        {/* Header */}
        <div className="border-b border-gray-800 pb-4">
          <h1 className="text-2xl font-bold text-white">Provisional Marksheet Generator</h1>
          <p className="text-gray-400 text-sm mt-1">
            Generate PDFs from batch result PDF + send via Gmail
          </p>
        </div>

        {/* Step 1 — Generate PDFs */}
        <form onSubmit={handleGenerate} className="space-y-5">
          <SectionTitle num={1} title="Generate PDFs" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FileInput label="Batch Result PDF" accept=".pdf" inputRef={batchPdfRef} hint="All students, 1 page each" />
            <FileInput label="Format DOCX" accept=".docx" inputRef={docxRef} hint="College letterhead template" />
          </div>

          <div className="flex gap-4 items-end">
            <Field label="Output Folder Name" className="flex-1">
              <input
                className={inputCls}
                value={outputDir}
                onChange={e => setOutputDir(e.target.value)}
                placeholder="sem6_provisional"
              />
            </Field>
            <button
              type="submit"
              disabled={isGenerating}
              className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-50 font-semibold transition-colors whitespace-nowrap"
            >
              {isGenerating ? '⏳ Generating…' : '▶ Generate PDFs'}
            </button>
          </div>
        </form>

        {/* Gen log */}
        {genLog && (
          <LogBox title="Generate Output" log={genLog} success={step !== 'idle'} />
        )}

        {/* Step 2 — Send Emails */}
        <form onSubmit={handleSend} className="space-y-5">
          <SectionTitle num={2} title="Send Emails" dimmed={!canSend && step === 'idle'} />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FileInput label="Student Excel" accept=".xlsx,.xls" inputRef={excelRef} hint="Must have UIDNumber + email cols" />
            <Field label="Email Column Name">
              <input className={inputCls} value={emailCol} onChange={e => setEmailCol(e.target.value)} placeholder="E Mail ID" />
            </Field>
            <Field label="UID Column Name">
              <input className={inputCls} value={uidCol} onChange={e => setUidCol(e.target.value)} placeholder="UIDNumber" />
            </Field>
            <Field label="Delay Between Emails (sec)">
              <input className={inputCls} type="number" min="1" value={delay} onChange={e => setDelay(e.target.value)} />
            </Field>
            <Field label="Gmail Sender Address">
              <input className={inputCls} type="email" value={sender} onChange={e => setSender(e.target.value)} placeholder="you@gmail.com" />
            </Field>
            <Field label="Gmail App Password">
              <input className={inputCls} type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="xxxx xxxx xxxx xxxx" />
            </Field>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={!canSend || isSending}
              className="px-6 py-2 rounded-lg bg-green-600 hover:bg-green-500 disabled:opacity-50 font-semibold transition-colors"
            >
              {isSending ? '⏳ Sending…' : '✉ Send Emails'}
            </button>
            {!canSend && (
              <span className="text-gray-500 text-sm">Generate PDFs first</span>
            )}
          </div>
        </form>

        {/* Send log */}
        {sendLog && (
          <LogBox title="Email Output" log={sendLog} success={step === 'sent'} />
        )}

        {/* Error */}
        {error && (
          <div className="rounded-lg bg-red-950 border border-red-800 p-4 text-red-300 text-sm">
            {error}
          </div>
        )}

        {/* App password help */}
        <div className="rounded-lg bg-gray-900 border border-gray-800 p-4 text-sm text-gray-400">
          <p className="font-semibold text-gray-300 mb-1">Gmail App Password setup</p>
          <p>Google Account → Security → 2-Step Verification → App Passwords → Create</p>
          <p className="mt-1">Regular Gmail password will NOT work — you need the 16-char App Password.</p>
        </div>

      </div>
    </div>
  )
}

// ── Sub-components ────────────────────────────────────────────────────────────

const inputCls = 'w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500'

function SectionTitle({ num, title, dimmed }: { num: number; title: string; dimmed?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${dimmed ? 'bg-gray-800 text-gray-500' : 'bg-blue-600 text-white'}`}>
        {num}
      </span>
      <h2 className={`text-lg font-semibold ${dimmed ? 'text-gray-500' : 'text-white'}`}>{title}</h2>
    </div>
  )
}

function Field({ label, children, className }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`space-y-1 ${className ?? ''}`}>
      <label className="text-xs text-gray-400 font-medium uppercase tracking-wide">{label}</label>
      {children}
    </div>
  )
}

function FileInput({
  label, accept, inputRef, hint,
}: {
  label: string
  accept: string
  inputRef: React.RefObject<HTMLInputElement | null>
  hint?: string
}) {
  const [fileName, setFileName] = useState('')
  return (
    <Field label={label}>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        style={{ position: 'absolute', width: 0, height: 0, opacity: 0, overflow: 'hidden' }}
        onChange={e => setFileName(e.target.files?.[0]?.name || '')}
      />
      <div
        onClick={() => inputRef.current?.click()}
        className="flex flex-col items-center justify-center w-full h-20 border-2 border-dashed border-gray-700 rounded-lg cursor-pointer hover:border-blue-500 transition-colors bg-gray-900"
      >
        {fileName ? (
          <span className="text-green-400 text-sm font-medium px-2 text-center truncate w-full text-center">{fileName}</span>
        ) : (
          <>
            <span className="text-gray-400 text-sm">Click to upload</span>
            {hint && <span className="text-gray-600 text-xs mt-1">{hint}</span>}
          </>
        )}
      </div>
    </Field>
  )
}

function LogBox({ title, log, success }: { title: string; log: string; success: boolean }) {
  return (
    <div className={`rounded-lg border ${success ? 'border-green-800 bg-green-950' : 'border-red-800 bg-red-950'}`}>
      <div className={`px-4 py-2 text-xs font-semibold uppercase tracking-wide ${success ? 'text-green-400' : 'text-red-400'}`}>
        {title}
      </div>
      <pre className="px-4 pb-4 text-xs text-gray-300 whitespace-pre-wrap break-words max-h-64 overflow-y-auto">
        {log}
      </pre>
    </div>
  )
}
