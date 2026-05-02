import type { Metadata } from 'next'
import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import config from '@payload-config'
import { importMap } from '@/app/(payload)/admin/importMap'

export const dynamic = 'force-dynamic'

type PageParams = Promise<{ segments: string[] }>
type SearchParams = Promise<{ [key: string]: string | string[] }>

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: PageParams
  searchParams: SearchParams
}): Promise<Metadata> {
  return generatePageMetadata({ config, params, searchParams })
}

export default async function Page({
  params,
  searchParams,
}: {
  params: PageParams
  searchParams: SearchParams
}) {
  return RootPage({ config, params, searchParams, importMap })
}
