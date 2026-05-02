'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'

const values = [
  { icon: '🎯', title: 'Outcome First', desc: 'Every lesson, every project, every mock interview exists for one reason — to get you placed.' },
  { icon: '🤝', title: 'Real Mentors', desc: 'No fake bios. Our mentors are active industry professionals who interview, hire, and build every day.' },
  { icon: '🔬', title: 'Hands-On Always', desc: 'Theory explains; projects prove. Every module ends with something you build and can show.' },
  { icon: '💬', title: 'No Student Left Behind', desc: 'Small batches and 1:1 access mean we know your name, your progress, and your blockers.' },
]

const mentors = [
  { name: 'Pankti Patel', role: 'Founder & Lead Mentor', track: 'AI/ML · Full-Stack · Placement Strategy', exp: '6+ years', initials: 'PP', color: '#E8652A' },
  { name: 'Raj Kumar', role: 'Senior Mentor', track: 'Cloud & DevOps', exp: '8+ years @ AWS', initials: 'RK', color: '#3B82F6' },
  { name: 'Meera Nair', role: 'Senior Mentor', track: 'Data Science & Analytics', exp: '7+ years @ TCS', initials: 'MN', color: '#10B981' },
  { name: 'Aryan Shah', role: 'Mentor', track: 'Cybersecurity & Ethical Hacking', exp: '5+ years, CEH certified', initials: 'AS', color: '#EF4444' },
  { name: 'Deepa Verma', role: 'Mentor', track: 'Full-Stack Web Development', exp: '5+ years @ Wipro', initials: 'DV', color: '#8B5CF6' },
  { name: 'Nikhil Joshi', role: 'Placement Coach', track: 'Placement Prep · Interview Strategy', exp: 'Ex-Infosys HR, 400+ interviews', initials: 'NJ', color: '#F59E0B' },
]

const milestones = [
  { year: '2022', event: 'TechRise Academy founded by Pankti Patel with first 10 students.' },
  { year: '2023 Q1', event: 'Expanded to 5 tech tracks and 100+ enrolled students.' },
  { year: '2023 Q3', event: 'Placement Prep Bootcamp launched — first 30 students placed in 8 weeks.' },
  { year: '2024 Q1', event: '50+ hiring partners onboarded across Gujarat, Mumbai, Pune, Bangalore.' },
  { year: '2024 Q3', event: '7th track (Placement Prep) designated Most Popular. 300+ total placements.' },
  { year: '2025', event: '500+ students trained. 95% placement rate. YouTube channel @TechRiseAcademy-w3k launched.' },
]

const hiringPartners = [
  'TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'HCL Technologies',
  'Tech Mahindra', 'Cognizant', 'Mphasis', 'Persistent Systems',
  'LTIMindtree', 'Hexaware', 'KPIT Technologies', 'Mastech Digital',
  'Cyient', 'Birlasoft', 'NIIT Technologies', 'Zensar Technologies',
]

const stats = [
  { end: 500, suffix: '+', label: 'Students Trained' },
  { end: 95, suffix: '%', label: 'Placement Rate' },
  { end: 50, suffix: '+', label: 'Hiring Partners' },
  { end: 6, suffix: '', label: 'Expert Mentors' },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="py-16"
        style={{ background: 'linear-gradient(135deg, #0D1B3E 0%, #112244 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border"
              style={{ borderColor: 'rgba(232,101,42,0.4)', background: 'rgba(232,101,42,0.1)', color: '#E8652A' }}
            >
              Our Story
            </div>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-6" style={{ letterSpacing: '-0.02em' }}>
              Built by Learners,{' '}
              <span style={{ color: '#E8652A' }}>For Learners</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              TechRise Academy was founded with one question: why do so many talented graduates fail to get placed, despite studying hard?
            </p>
            <p className="text-gray-400 leading-relaxed">
              The answer wasn&apos;t talent — it was the gap between textbook knowledge and what companies actually test for. TechRise bridges that gap with real mentors, real projects, and real placement preparation.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((s) => (
              <div key={s.label} className="glass-card p-6 text-center">
                <div className="font-heading font-extrabold text-4xl mb-1" style={{ color: '#E8652A' }}>
                  <CountUp end={s.end} duration={2.5} suffix={s.suffix} enableScrollSpy scrollSpyOnce />
                </div>
                <div className="text-sm text-gray-300">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="w-32 h-32 rounded-2xl flex items-center justify-center text-white font-heading font-bold text-4xl mb-6"
                style={{ background: 'linear-gradient(135deg, #E8652A, #d4541a)' }}
              >
                PP
              </div>
              <h2 className="font-heading font-bold text-navy text-3xl mb-2">Pankti Patel</h2>
              <p className="font-semibold mb-4" style={{ color: '#E8652A' }}>
                Founder & Lead Mentor
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Pankti spent 6+ years in the tech industry across AI/ML and full-stack development before founding TechRise Academy. She watched brilliant students fail interviews not because of knowledge gaps, but because of a lack of structured preparation and industry exposure.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                TechRise is her answer to that problem — an academy that doesn&apos;t just teach you to code, but prepares you to interview, communicate, and succeed in the real industry.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/918160049448"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm px-5 py-2.5"
                >
                  WhatsApp Pankti
                </a>
                <a
                  href="https://www.youtube.com/@TechRiseAcademy-w3k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm px-5 py-2.5"
                >
                  YouTube Channel
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-heading font-bold text-navy text-xl mb-6">Our Values</h3>
              <div className="space-y-4">
                {values.map((v) => (
                  <div key={v.title} className="flex gap-4">
                    <div className="text-2xl flex-shrink-0">{v.icon}</div>
                    <div>
                      <div className="font-semibold text-navy mb-1">{v.title}</div>
                      <div className="text-sm text-gray-500">{v.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="section-title">Meet the Mentors</h2>
            <p className="section-subtitle mx-auto">
              Active industry professionals — not just teachers.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.map((mentor, i) => (
              <motion.div
                key={mentor.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-card p-6 flex items-start gap-4 card-hover"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                  style={{ backgroundColor: mentor.color }}
                >
                  {mentor.initials}
                </div>
                <div>
                  <div className="font-heading font-bold text-navy">{mentor.name}</div>
                  <div className="text-xs font-semibold mb-1" style={{ color: mentor.color }}>{mentor.role}</div>
                  <div className="text-xs text-gray-500 mb-1">{mentor.track}</div>
                  <div className="text-xs text-gray-400">{mentor.exp}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="section-title text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="relative pl-14"
                >
                  <div
                    className="absolute left-3.5 top-1 w-5 h-5 rounded-full border-4 border-white shadow"
                    style={{ backgroundColor: '#E8652A' }}
                  />
                  <div className="text-xs font-bold mb-1" style={{ color: '#E8652A' }}>{m.year}</div>
                  <div className="text-sm text-gray-600">{m.event}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Partners */}
      <section className="py-20 bg-gray-50" id="hiring-partners">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="section-title text-center mb-4">Our Hiring Partners</h2>
          <p className="section-subtitle text-center mb-10">
            50+ companies actively hire TechRise graduates.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {hiringPartners.map((company) => (
              <div
                key={company}
                className="px-5 py-2.5 bg-white rounded-xl border border-gray-200 shadow-sm text-sm font-semibold text-gray-700 card-hover"
              >
                {company}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-gray-500 text-sm mb-4">
              Want to hire TechRise graduates?{' '}
              <a href="mailto:techrisewithai@gmail.com" className="font-semibold" style={{ color: '#E8652A' }}>
                Contact us →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-14 text-center"
        style={{ background: 'linear-gradient(135deg, #0D1B3E, #112244)' }}
      >
        <div className="max-w-xl mx-auto px-5">
          <h2 className="font-heading font-bold text-3xl text-white mb-4">
            Ready to join the TechRise family?
          </h2>
          <p className="text-gray-300 mb-6">
            500+ students have already made the leap. Your turn.
          </p>
          <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
            Start Your Journey →
          </Link>
        </div>
      </section>
    </div>
  )
}
