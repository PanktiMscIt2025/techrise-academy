'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'I have no coding background. Can I still join?',
    a: 'Absolutely. Every track starts from fundamentals, and the free counselling call helps us place you at the right starting point. Many of our placed students — including career switchers from commerce and arts — started from zero.',
  },
  {
    q: 'How does placement support actually work?',
    a: "It's not a one-time resume forward. You get mock interviews with detailed feedback, resume and LinkedIn reviews, aptitude and GD practice, drive alerts, and referrals to 50+ hiring partners. Support continues until you sign an offer letter.",
  },
  {
    q: "What's the difference between the three learning modes?",
    a: 'Video Library (₹8,000) is fully self-paced with lifetime access. Group Batch (₹18,000) adds live sessions 3×/week with 10–15 peers. 1:1 Mentorship (₹38,000) gives you a dedicated mentor, custom roadmap, and unlimited doubt sessions. You can upgrade anytime by paying only the difference.',
  },
  {
    q: 'Do I get a certificate?',
    a: 'Yes — every track includes a completion certificate. But what gets you hired is the portfolio: every module ends with a real project you can show in interviews.',
  },
  {
    q: 'Are classes online or offline?',
    a: 'All live sessions run online in the evening (7–9 PM IST) so they fit around college or a job. Recordings are shared after every session, so you never miss anything.',
  },
  {
    q: 'Can I pay in instalments?',
    a: 'Yes. All courses support EMI-style instalments with no extra cost. Discuss your situation on the free counselling call — we keep pricing student-friendly.',
  },
]

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-card overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-heading font-bold text-navy text-base md:text-lg">{q}</span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-lg transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
          style={{ background: '#E8652A' }}
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="px-5 pb-5 text-sm md:text-base text-gray-500 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 bg-gray-50" id="faq">
      <div className="max-w-3xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle mx-auto">
            Everything students ask us before joining. Still unsure?{' '}
            <Link href="/contact" className="font-semibold underline underline-offset-2" style={{ color: '#E8652A' }}>
              Ask us directly
            </Link>
            .
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <FAQItem
                q={f.q}
                a={f.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
