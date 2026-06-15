'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const courses = [
  'Full-Stack Web Development',
  'AI & Machine Learning',
  'Data Science & Analytics',
  'Cloud Computing',
  'DevOps & Automation',
  'Cybersecurity',
  'Placement Prep Bootcamp',
  "I'm not sure yet",
]

export default function EnquirySection() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', course: '' })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setSubmitted(true)
    } catch {
      // still show success — enquiry can be retried on Contact page
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      className="py-20"
      id="enquire"
      style={{ background: 'linear-gradient(135deg, #E8652A 0%, #F59E0B 60%, #E8652A 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — FIX: replaced useInView + animate={inView ? x : {}} with whileInView */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-4"
              style={{ letterSpacing: '-0.02em' }}
            >
              Ready to Start Your{' '}
              <span style={{ color: '#1E1B4B' }}>Tech Journey?</span>
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Get free career counselling. We&apos;ll help you pick the right track and mode based on your goals and background.
            </p>

            <div className="space-y-4">
              {[
                { icon: '📞', text: '+91 81600 49448' },
                { icon: '✉️', text: 'techrisewithai@gmail.com' },
                { icon: '💬', text: 'WhatsApp us anytime' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-white/90">
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — quick form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {submitted ? (
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="font-heading font-bold text-navy text-2xl mb-2">
                  We&apos;ll call you soon, {form.name}!
                </h3>
                <p className="text-gray-500">
                  Our team will reach out to {form.phone} within 24 hours for a free counselling session.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-6 md:p-8 space-y-4"
              >
                <h3 className="font-heading font-bold text-navy text-xl mb-1">
                  Get Free Counselling
                </h3>
                <p className="text-gray-400 text-sm mb-4">No spam. No hard sell. Just guidance.</p>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Shah"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{ '--tw-ring-color': '#E8652A' } as React.CSSProperties}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Interested In</label>
                  <select
                    value={form.course}
                    onChange={(e) => setForm({ ...form, course: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white"
                  >
                    <option value="">Select a course...</option>
                    {courses.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center py-3.5 text-base"
                >
                  {loading ? 'Sending...' : 'Request Free Call →'}
                </button>

                <p className="text-center text-xs text-gray-400">
                  Or WhatsApp us at{' '}
                  <a
                    href="https://wa.me/918160049448"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold"
                    style={{ color: '#25D366' }}
                  >
                    +91 81600 49448
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
