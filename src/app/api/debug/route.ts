import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const payload = await getPayload({ config })
    return NextResponse.json({ ok: true, collections: Object.keys(payload.collections) })
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error(String(err))
    return NextResponse.json({
      ok: false,
      error: error.message,
      stack: error.stack?.split('\n').slice(0, 5),
    }, { status: 500 })
  }
}
