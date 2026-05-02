import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import TracksSection from '@/components/sections/TracksSection'
import ModesSection from '@/components/sections/ModesSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import EnquirySection from '@/components/sections/EnquirySection'

export const metadata: Metadata = {
  title: 'TechRise Academy — Learn Today. Place Tomorrow.',
  description:
    'Master in-demand tech skills with expert mentors. 7 flagship tracks, 3 flexible learning modes, real placement support.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TracksSection />
      <ModesSection />
      <TestimonialsSection />
      <EnquirySection />
    </>
  )
}
