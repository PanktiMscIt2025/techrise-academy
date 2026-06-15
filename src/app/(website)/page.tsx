import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import PartnersMarquee from '@/components/sections/PartnersMarquee'
import TracksSection from '@/components/sections/TracksSection'
import WhySection from '@/components/sections/WhySection'
import ModesSection from '@/components/sections/ModesSection'
import JourneySection from '@/components/sections/JourneySection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import FAQSection from '@/components/sections/FAQSection'
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
      <PartnersMarquee />
      <TracksSection />
      <WhySection />
      <ModesSection />
      <JourneySection />
      <TestimonialsSection />
      <FAQSection />
      <EnquirySection />
    </>
  )
}
