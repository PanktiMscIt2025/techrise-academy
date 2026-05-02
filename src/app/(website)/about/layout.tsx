import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us — Our Story & Team',
  description:
    'Meet the TechRise Academy team. Founded by Pankti Patel, built for aspiring developers. 500+ students placed, 95% placement rate, 50+ hiring partners.',
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
