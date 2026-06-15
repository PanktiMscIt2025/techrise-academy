'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'

const stats = [
  { end: 500, suffix: '+', label: 'Students Trained' },
  { end: 95, suffix: '%', label: 'Placement Rate' },
  { end: 7, suffix: '', label: 'Tech Tracks' },
  { end: 50, suffix: '+', label: 'Hiring Partners' },
]

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: 'linear-gradient(135deg, #0D1B3E 0%, #112244 50%, #0D2050 100%)' }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 60% 40%, rgba(232,101,42,0.35) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border"
              style={{ borderColor: 'rgba(232,101,42,0.4)', background: 'rgba(232,101,42,0.1)', color: '#E8652A' }}
            >
              🚀 Industry-Ready Tech Education
            </div>

            <h1
              className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-6"
              style={{ lineHeight: '1.1', letterSpacing: '-0.03em' }}
            >
              Learn Today.{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #E8652A, #f59e0b)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Place Tomorrow.
              </span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
              Master in-demand tech skills with expert mentors. 7 flagship tracks, 3 flexible
              learning modes, and real placement support — from first lesson to first paycheck.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="/courses" className="btn-primary text-base px-7 py-3.5">
                Explore Courses →
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base text-white border-2 border-white/20 hover:border-white/50 transition-colors"
              >
                Free Counselling
              </Link>
            </div>

            {/* Trust row — avatars + rating */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex -space-x-2.5">
                {[
                  { initials: 'RM', color: '#3B82F6' },
                  { initials: 'PS', color: '#10B981' },
                  { initials: 'KP', color: '#06B6D4' },
                  { initials: 'SJ', color: '#8B5CF6' },
                  { initials: 'AD', color: '#E8652A' },
                ].map((a) => (
                  <div
                    key={a.initials}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold border-2"
                    style={{ backgroundColor: a.color, borderColor: '#0D1B3E' }}
                  >
                    {a.initials}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm" style={{ color: '#F59E0B' }}>★★★★★ <span className="text-white font-bold">4.9/5</span></div>
                <div className="text-xs text-gray-400">from 500+ students placed in top companies</div>
              </div>
            </div>

            {/* Stats row — animated CountUp */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div
                    className="font-heading font-extrabold text-2xl"
                    style={{ color: '#E8652A' }}
                  >
                    <CountUp end={s.end} duration={2} suffix={s.suffix} enableScrollSpy scrollSpyOnce />
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — floating card grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {[
              { icon: '💻', title: 'Full-Stack Dev', sub: '4 months · ₹18K+' },
              { icon: '🤖', title: 'AI & ML', sub: '5 months · ₹18K+' },
              { icon: '📊', title: 'Data Science', sub: '4 months · ₹18K+' },
              { icon: '🎯', title: 'Placement Prep', sub: '3 months · ₹18K+', popular: true },
              { icon: '☁️', title: 'Cloud & DevOps', sub: '4 months · ₹18K+' },
              { icon: '🔒', title: 'Cybersecurity', sub: '4 months · ₹18K+' },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.07 }}
                /* Alternate even/odd cards with a float offset so they bob at different phases */
                className={`glass-card p-4 relative ${i % 2 === 0 ? 'animate-float' : 'animate-float [animation-delay:1.5s]'}`}
              >
                {card.popular && (
                  <span
                    className="absolute -top-2 left-3 text-xs font-bold px-2 py-0.5 rounded-full text-white"
                    style={{ background: '#E8652A' }}
                  >
                    ⭐ Popular
                  </span>
                )}
                <div className="text-2xl mb-2">{card.icon}</div>
                <div className="font-heading font-bold text-white text-sm">{card.title}</div>
                <div className="text-xs text-gray-400 mt-0.5">{card.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
