import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const payload = await getPayload({ config })

    await payload.create({
      collection: 'enquiries',
      data: {
        name: body.name,
        phone: body.phone,
        email: body.email || undefined,
        course: body.course || undefined,
        learningMode: body.learningMode || undefined,
        qualification: body.qualification || undefined,
        message: body.message || undefined,
      },
    })

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (err) {
    console.error('Enquiry create error:', err)
    return NextResponse.json({ error: 'Failed to save enquiry' }, { status: 500 })
  }
}
