import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact & Enrol',
  description:
    'Enrol at TechRise Academy or book a free counselling call. WhatsApp +91 81600 49448 or fill the form. Response within 24 hours.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
