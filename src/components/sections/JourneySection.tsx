'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const steps = [
  {
    n: '01',
    icon: '📞',
    title: 'Free Counselling',
    desc: 'Tell us your background and goals. We recommend the right track and mode — no pressure, no sales pitch.',
  },
  {
    n: '02',
    icon: '📚',
    title: 'Learn & Build',
    desc: 'Live sessions or videos, weekly assignments, and a real portfolio project at the end of every module.',
  },
  {
    n: '03',
    icon: '🎤',
    title: 'Interview Prep',
    desc: 'DSA practice, resume polish, LinkedIn makeover, and brutal-but-kind mock interviews with feedback.',
  },
  {
    n: '04',
    icon: '🏆',
    title: 'Get Placed',
    desc: 'Drive alerts, referrals to 50+ hiring partners, and support that continues until you sign the offer.',
  },
]

export default function JourneySection() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      id="journey"
      style={{ background: 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 55%, #7C3AED 100%)' }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.25) 0%, transparent 55%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">
            Your Journey, <span style={{ color: '#E8652A' }}>Step by Step</span>
          </h2>
          <p className="text-gray-300 text-lg mt-3 max-w-2xl mx-auto">
            From first call to first paycheck — here&apos;s exactly how it works.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative glass-card p-6"
            >
              <div
                className="font-heading font-extrabold text-5xl mb-4 opacity-30"
                style={{ color: '#E8652A' }}
              >
                {s.n}
              </div>
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className="font-heading font-bold text-white text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{s.desc}</p>

              {/* Connector arrow between cards on desktop */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:flex absolute top-1/2 -right-5 w-10 items-center justify-center text-xl z-10"
                  style={{ color: '#E8652A' }}
                >
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
            Start with a Free Call →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
