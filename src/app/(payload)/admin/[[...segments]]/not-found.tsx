import { NotFoundPage } from '@payloadcms/next/views'
import config from '@payload-config'

export default async function NotFound() {
  // @ts-expect-error — NotFoundPage params/searchParams not required at build time
  return NotFoundPage({ config })
}
