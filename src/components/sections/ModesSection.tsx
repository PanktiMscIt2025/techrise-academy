'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const modes = [
  {
    id: 'one-on-one',
    icon: '🎓',
    title: '1:1 Mentorship',
    price: '₹38,000',
    tagline: 'Dedicated expert, your pace',
    color: '#E8652A',
    features: [
      'Dedicated industry mentor',
      'Custom learning roadmap',
      'Unlimited doubt sessions',
      'Resume & LinkedIn review',
      'Mock interviews with feedback',
      'Placement referrals',
    ],
    badge: 'Best Results',
  },
  {
    id: 'group',
    icon: '👥',
    title: 'Group Batch',
    price: '₹18,000',
    tagline: 'Learn with peers, grow together',
    color: '#3B82F6',
    features: [
      'Live sessions (3×/week)',
      'Batch of 10–15 students',
      'Peer project collaboration',
      'Weekly doubt Q&A',
      'Placement mock drives',
      'Community access',
    ],
    badge: 'Most Popular',
  },
  {
    id: 'video',
    icon: '🎬',
    title: 'Video Library',
    price: '₹8,000',
    tagline: 'Learn anytime, at your pace',
    color: '#10B981',
    features: [
      'Lifetime access to recordings',
      'Structured module-by-module path',
      'Downloadable resources',
      'Community forum access',
      'Certificate on completion',
      'Course updates included',
    ],
    badge: 'Best Value',
  },
]

export default function ModesSection() {
  return (
    <section className="py-20 bg-white" id="modes">
      <div className="max-w-7xl mx-auto px-5">
        {/* FIX: replaced useInView + animate={inView ? x : {}} with whileInView.
            The old pattern passed animate={} (empty object) when off-screen, causing
            Framer Motion to render elements as fully visible with no animation. */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">3 Learning Modes, Your Choice</h2>
          <p className="section-subtitle mx-auto">
            Pick the mode that fits your schedule, budget, and learning style. Switch any time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {modes.map((mode, i) => (
            <motion.div
              key={mode.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-white rounded-2xl border border-gray-100 shadow-card card-hover overflow-hidden flex flex-col"
            >
              <div className="h-1.5" style={{ backgroundColor: mode.color }} />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: `${mode.color}15` }}
                  >
                    {mode.icon}
                  </div>
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full text-white"
                    style={{ backgroundColor: mode.color }}
                  >
                    {mode.badge}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-navy text-xl mb-1">{mode.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{mode.tagline}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {mode.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-0.5 text-xs" style={{ color: mode.color }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gray-400">Per course</div>
                    <div className="font-heading font-extrabold text-2xl text-navy">{mode.price}</div>
                  </div>
                  <Link
                    href={`/learning-modes#${mode.id}`}
                    className="text-sm font-semibold px-4 py-2 rounded-lg text-white transition-colors"
                    style={{ backgroundColor: mode.color }}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link href="/learning-modes" className="btn-outline inline-flex">
            Compare All Modes in Detail →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
