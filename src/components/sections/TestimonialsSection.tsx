'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Rohan Mehta',
    role: 'Software Engineer, Infosys',
    course: 'Full-Stack Web Dev · Group Batch',
    quote:
      'TechRise completely changed my career trajectory. The projects were real-world and the mentors gave honest feedback — not just encouragement. Placed in 2 months after completing the track.',
    rating: 5,
    initials: 'RM',
    color: '#3B82F6',
  },
  {
    name: 'Priya Shah',
    role: 'Data Analyst, TCS',
    course: 'Data Science · 1:1 Mentorship',
    quote:
      'I had zero coding background. My mentor built a custom roadmap and was available whenever I got stuck. The placement mock drives were incredibly realistic — I felt ready on interview day.',
    rating: 5,
    initials: 'PS',
    color: '#10B981',
  },
  {
    name: 'Karan Patel',
    role: 'Cloud Engineer, Wipro',
    course: 'Cloud Computing · Group Batch',
    quote:
      "The AWS labs and hands-on projects are what set TechRise apart. By module 4, I was deploying real infrastructure. Got my first cloud role within 6 weeks of finishing.",
    rating: 5,
    initials: 'KP',
    color: '#06B6D4',
  },
  {
    name: 'Sneha Joshi',
    role: 'ML Engineer, Startup',
    course: 'AI & ML · 1:1 Mentorship',
    quote:
      "Pankti ma'am's guidance on LLM APIs and fine-tuning was exceptional. The 1:1 sessions meant I could ask every question without hesitation. Best investment I've made in my career.",
    rating: 5,
    initials: 'SJ',
    color: '#8B5CF6',
  },
  {
    name: 'Arjun Desai',
    role: 'Campus Placed — Accenture',
    course: 'Placement Prep Bootcamp',
    quote:
      '5 on-campus drives attended, 3 offers in hand. The mock interviews were brutal (in a good way). DSA sessions and GD practice sessions made all the difference.',
    rating: 5,
    initials: 'AD',
    color: '#E8652A',
  },
  {
    name: 'Nisha Verma',
    role: 'Security Analyst, Cybersecurity Firm',
    course: 'Cybersecurity · Video Library',
    quote:
      'Even the self-paced video track is incredibly structured. I completed it at night after work and cracked the CEH certification on my first attempt. Worth every rupee.',
    rating: 5,
    initials: 'NV',
    color: '#EF4444',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: '#F59E0B' }}>★</span>
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-5">
        {/* FIX: replaced useInView + animate={inView ? x : {}} with whileInView */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">What Our Students Say</h2>
          <p className="section-subtitle mx-auto">
            Real outcomes. Real people. No stock photos.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-card card-hover p-6 flex flex-col"
            >
              <StarRating count={t.rating} />
              <p className="text-gray-600 text-sm leading-relaxed mt-4 mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-navy text-sm">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                  <div className="text-xs mt-0.5" style={{ color: t.color }}>{t.course}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
