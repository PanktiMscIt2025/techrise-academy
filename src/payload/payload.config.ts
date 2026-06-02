import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

import { Courses } from './collections/Courses'
import { Testimonials } from './collections/Testimonials'
import { Enquiries } from './collections/Enquiries'
import { Media } from './collections/Media'
import { Users } from './collections/Users'

import { SiteSettings } from './globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '— TechRise Academy CMS',
    },
  },
  collections: [Courses, Testimonials, Enquiries, Media, Users],
  globals: [SiteSettings],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'techrise-default-secret-change-in-production',
  typescript: {
    outputFile: path.resolve(dirname, '../types/payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.TURSO_DATABASE_URL || 'file:./techrise.db',
      authToken: process.env.TURSO_AUTH_TOKEN,
    },
  }),
  upload: {
    limits: {
      fileSize: 5000000,
    },
  },
})
