import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '7 Flagship Tech Tracks',
  description:
    "Browse TechRise Academy's 7 technology tracks — Full-Stack Web Dev, AI/ML, Data Science, Cloud, DevOps, Cybersecurity, and Placement Prep. Starting ₹8,000.",
}

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
