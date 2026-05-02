import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Learning Modes — 1:1, Group Batch, Video',
  description:
    'Choose your learning mode at TechRise Academy. 1:1 Mentorship (₹38K), Group Batch (₹18K), or Video Library (₹8K). All include certificate and placement support.',
}

export default function LearningModesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
