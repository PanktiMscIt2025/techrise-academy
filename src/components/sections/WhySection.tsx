'use client'

import { motion } from 'framer-motion'

const reasons = [
  {
    icon: '🧑‍🏫',
    title: 'Mentors from Industry',
    desc: 'Learn from engineers who build real products — not career trainers reading slides.',
    color: '#E8652A',
  },
  {
    icon: '🛠️',
    title: 'Project-First Learning',
    desc: 'Every module ends with a portfolio project. You graduate with proof, not just a certificate.',
    color: '#3B82F6',
  },
  {
    icon: '🎯',
    title: 'Placement Until Placed',
    desc: 'Mock interviews, referrals, and drive alerts continue until you sign your offer letter.',
    color: '#10B981',
  },
  {
    icon: '💬',
    title: 'Doubt Support in Hours',
    desc: 'WhatsApp + community forum. No question waits more than a few hours for an answer.',
    color: '#8B5CF6',
  },
  {
    icon: '💰',
    title: 'Honest, Student Pricing',
    desc: 'Courses from ₹8,000 with EMI options. No hidden fees, no upsells mid-course.',
    color: '#F59E0B',
  },
  {
    icon: '🔄',
    title: 'Switch Modes Anytime',
    desc: 'Start with videos, upgrade to group or 1:1 whenever you need more support — pay only the difference.',
    color: '#06B6D4',
  },
]

export default function WhySection() {
  return (
    <section className="py-20 bg-white" id="why-techrise">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Why Students Choose TechRise</h2>
          <p className="section-subtitle mx-auto">
            We built the academy we wish existed when we were job hunting.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group rounded-2xl border border-gray-100 bg-white shadow-card card-hover p-6"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${r.color}15` }}
              >
                {r.icon}
              </div>
              <h3 className="font-heading font-bold text-navy text-lg mb-2">{r.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
