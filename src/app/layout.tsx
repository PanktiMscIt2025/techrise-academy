import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | TechRise Academy',
    default: 'TechRise Academy — Learn Today. Place Tomorrow.',
  },
  description:
    'TechRise Academy offers industry-ready tech courses with 1:1 mentorship, group batches, and video learning. 7 flagship tracks covering Web Dev, AI/ML, Data Science, Cloud, DevOps, Cybersecurity, and Placement Prep.',
  keywords: [
    'TechRise Academy',
    'tech courses India',
    'web development course',
    'AI ML course',
    'placement preparation',
    'MCA placement',
    'BCA course',
    'online tech training',
    'Pankti Patel',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  )
}
