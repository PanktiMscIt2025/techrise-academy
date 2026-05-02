'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const filters = [
  { id: 'all', label: 'All Tracks' },
  { id: 'web-dev', label: 'Web Dev' },
  { id: 'ai-ml', label: 'AI & ML' },
  { id: 'data-science', label: 'Data Science' },
  { id: 'cloud', label: 'Cloud' },
  { id: 'devops', label: 'DevOps' },
  { id: 'cybersecurity', label: 'Cybersecurity' },
  { id: 'placement-prep', label: 'Placement Prep' },
]

const courses = [
  {
    id: 'web-dev',
    icon: '💻',
    title: 'Full-Stack Web Development',
    tagline: 'Build modern web apps end-to-end',
    description:
      'From HTML fundamentals to deploying full-stack applications on AWS. You will master React, Node.js, Express, MongoDB, REST APIs, and real-world deployment pipelines.',
    level: 'Beginner → Advanced',
    duration: '4 months',
    modules: 12,
    color: '#3B82F6',
    skills: ['HTML / CSS / JS', 'React.js', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'AWS Basics', 'Git & GitHub'],
    priceVideo: 8000,
    priceGroup: 18000,
    price1on1: 38000,
    mostPopular: false,
    offCampus: false,
  },
  {
    id: 'ai-ml',
    icon: '🤖',
    title: 'AI & Machine Learning',
    tagline: 'Build intelligent systems with Python',
    description:
      'Cover the full ML stack — from EDA and classical algorithms to deep learning, NLP, and working with modern LLM APIs. Build 3+ capstone projects with real datasets.',
    level: 'Intermediate',
    duration: '5 months',
    modules: 14,
    color: '#8B5CF6',
    skills: ['Python', 'Pandas / NumPy', 'Scikit-learn', 'TensorFlow / PyTorch', 'NLP', 'LLM APIs', 'OpenAI / Gemini', 'Model Deployment'],
    priceVideo: 8000,
    priceGroup: 18000,
    price1on1: 38000,
    mostPopular: false,
    offCampus: false,
  },
  {
    id: 'data-science',
    icon: '📊',
    title: 'Data Science & Analytics',
    tagline: 'Turn data into decisions',
    description:
      'Master data wrangling, statistical analysis, visualisation, and business intelligence. Work with SQL, Python, Excel, Power BI, and Tableau on real business datasets.',
    level: 'Beginner → Intermediate',
    duration: '4 months',
    modules: 11,
    color: '#10B981',
    skills: ['SQL', 'Python', 'Power BI', 'Tableau', 'Excel', 'Statistics', 'EDA', 'Data Storytelling'],
    priceVideo: 8000,
    priceGroup: 18000,
    price1on1: 38000,
    mostPopular: false,
    offCampus: false,
  },
  {
    id: 'cloud',
    icon: '☁️',
    title: 'Cloud Computing',
    tagline: 'AWS, Azure, GCP — build for scale',
    description:
      'Learn cloud infrastructure design, deployment, and cost optimisation across AWS, Azure, and GCP. Includes Docker, Kubernetes, and cloud security fundamentals.',
    level: 'Intermediate',
    duration: '4 months',
    modules: 10,
    color: '#06B6D4',
    skills: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Cloud Security', 'Serverless'],
    priceVideo: 8000,
    priceGroup: 18000,
    price1on1: 38000,
    mostPopular: false,
    offCampus: false,
  },
  {
    id: 'devops',
    icon: '⚙️',
    title: 'DevOps & Automation',
    tagline: 'Build, ship, monitor — continuously',
    description:
      'Master the DevOps lifecycle: version control, CI/CD pipelines, infrastructure as code, containerisation, and monitoring. Hands-on with real pipelines.',
    level: 'Intermediate',
    duration: '4 months',
    modules: 10,
    color: '#F59E0B',
    skills: ['Git / GitHub', 'Jenkins', 'Docker', 'Kubernetes', 'Ansible', 'Linux', 'Prometheus', 'Grafana'],
    priceVideo: 8000,
    priceGroup: 18000,
    price1on1: 38000,
    mostPopular: false,
    offCampus: false,
  },
  {
    id: 'cybersecurity',
    icon: '🔒',
    title: 'Cybersecurity',
    tagline: 'Defend. Detect. Respond.',
    description:
      'Learn ethical hacking, VAPT, network security, web app pentesting, and SOC operations. Prepares for CEH and CompTIA Security+ certifications.',
    level: 'Intermediate → Advanced',
    duration: '4 months',
    modules: 12,
    color: '#EF4444',
    skills: ['Ethical Hacking', 'VAPT', 'Kali Linux', 'Wireshark', 'Metasploit', 'OWASP', 'SOC', 'Incident Response'],
    priceVideo: 8000,
    priceGroup: 18000,
    price1on1: 38000,
    mostPopular: false,
    offCampus: false,
  },
  {
    id: 'placement-prep',
    icon: '🎯',
    title: 'Placement Preparation Bootcamp',
    tagline: 'For MCA · MSc IT · BCA · BE (CS/IT)',
    description:
      'A comprehensive bootcamp covering every aspect of on-campus and off-campus placements — DSA, system design, resume building, mock interviews, aptitude, GD, and offer negotiation.',
    level: 'All Levels',
    duration: '3 months',
    modules: 10,
    color: '#E8652A',
    skills: [
      'DSA & Problem Solving',
      'System Design',
      'Resume & LinkedIn Optimisation',
      'Mock Interviews',
      'Aptitude & Reasoning',
      'Group Discussion',
      'On-Campus Strategy',
      'Off-Campus Strategy',
      'Offer Negotiation',
      'Communication Skills',
    ],
    priceVideo: 8000,
    priceGroup: 18000,
    price1on1: 38000,
    mostPopular: true,
    offCampus: true,
  },
]

const faqs = [
  {
    q: 'Can I switch tracks after enrolling?',
    a: 'Yes — if you change your mind within the first 7 days, we will help you switch to a better-fit track at no extra cost.',
  },
  {
    q: 'Do I need prior coding experience?',
    a: 'Beginner tracks (Web Dev, Data Science) require no prior experience. Intermediate and Advanced tracks expect basic programming knowledge.',
  },
  {
    q: 'Are the courses self-paced or live?',
    a: 'Depends on the mode — Video Library is fully self-paced; Group Batch has 3 live sessions per week; 1:1 Mentorship is scheduled between you and your mentor.',
  },
  {
    q: 'Will I get a certificate?',
    a: 'Yes — every student receives a TechRise Academy certificate on completing all modules and submitting the capstone project.',
  },
  {
    q: 'Is EMI available?',
    a: 'Yes — we offer 3-month and 6-month no-cost EMI on Group Batch and 1:1 Mentorship plans. WhatsApp us to set it up.',
  },
]

export default function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const filtered =
    activeFilter === 'all' ? courses : courses.filter((c) => c.id === activeFilter)

  return (
    <div>
      {/* Hero */}
      <section
        className="py-16 text-center"
        style={{ background: 'linear-gradient(135deg, #0D1B3E 0%, #112244 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-5">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-4">
            7 Flagship Technology Tracks
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Industry-designed, mentor-led, outcome-focused. Pick a track and start building your tech career today.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {[
              { icon: '🎓', text: '500+ students placed' },
              { icon: '⏱️', text: '3–5 month tracks' },
              { icon: '💰', text: 'Starting ₹8,000' },
              { icon: '📜', text: 'Certificate included' },
            ].map((s) => (
              <div
                key={s.text}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-white"
                style={{ background: 'rgba(255,255,255,0.1)' }}
              >
                <span>{s.icon}</span>
                <span>{s.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                style={
                  activeFilter === f.id
                    ? { background: '#E8652A', color: '#fff' }
                    : { background: '#f3f4f6', color: '#374151' }
                }
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Course cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered
              .filter((c) => !c.mostPopular)
              .map((course, i) => (
                <motion.div
                  key={course.id}
                  id={course.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="bg-white rounded-2xl border border-gray-100 shadow-card card-hover overflow-hidden flex flex-col"
                  style={{ scrollMarginTop: '130px' }}
                >
                  <div className="h-1.5" style={{ backgroundColor: course.color }} />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                        style={{ background: `${course.color}15` }}
                      >
                        {course.icon}
                      </div>
                      <div className="text-right text-xs">
                        <div className="font-semibold text-gray-600">{course.duration}</div>
                        <div className="text-gray-400">{course.modules} modules</div>
                        <div className="text-gray-400 mt-1">{course.level}</div>
                      </div>
                    </div>
                    <h2 className="font-heading font-bold text-navy text-lg mb-1">{course.title}</h2>
                    <p className="text-sm text-gray-500 mb-3">{course.tagline}</p>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{course.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-5 flex-1">
                      {course.skills.map((s) => (
                        <span
                          key={s}
                          className="text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{ background: `${course.color}12`, color: course.color }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    {/* Pricing */}
                    <div className="rounded-xl p-4 mb-4" style={{ background: '#f8fafc' }}>
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        Choose Your Mode
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center text-xs">
                        {[
                          { mode: 'Video', price: `₹${(course.priceVideo / 1000).toFixed(0)}K` },
                          { mode: 'Group', price: `₹${(course.priceGroup / 1000).toFixed(0)}K` },
                          { mode: '1:1', price: `₹${(course.price1on1 / 1000).toFixed(0)}K` },
                        ].map((p) => (
                          <div key={p.mode} className="bg-white rounded-lg py-2 border border-gray-100">
                            <div className="text-gray-400">{p.mode}</div>
                            <div className="font-bold text-navy">{p.price}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Link href="/contact" className="btn-primary w-full justify-center text-sm py-3">
                      Enrol in This Track →
                    </Link>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Placement Prep — full width */}
          {(activeFilter === 'all' || activeFilter === 'placement-prep') && (
            <motion.div
              id="placement-prep"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 relative rounded-2xl overflow-hidden border-2 bg-white"
              style={{ borderColor: '#E8652A', scrollMarginTop: '130px' }}
            >
              <div
                className="py-2 text-center text-xs font-extrabold tracking-widest uppercase text-white"
                style={{ background: 'linear-gradient(90deg,#E8652A,#d4541a)' }}
              >
                ⭐ Most Popular Track
              </div>
              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">🎯</span>
                      <div>
                        <div className="flex flex-wrap gap-2 mb-1">
                          <span className="text-xs px-2 py-0.5 rounded-full font-bold text-white" style={{ background: '#E8652A' }}>
                            Most Popular
                          </span>
                          <span className="text-xs px-2 py-0.5 rounded-full font-bold border" style={{ borderColor: '#3B82F6', color: '#3B82F6' }}>
                            On-Campus + Off-Campus
                          </span>
                        </div>
                        <h2 className="font-heading font-bold text-navy text-2xl">
                          Placement Preparation Bootcamp
                        </h2>
                      </div>
                    </div>
                    <p className="text-gray-500 mb-2">For MCA · MSc IT · BCA · BE (CS/IT) students</p>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                      A comprehensive bootcamp covering every aspect of on-campus and off-campus placements — DSA, system design, resume, mock interviews, aptitude, GD practice, and offer negotiation.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {courses.find((c) => c.id === 'placement-prep')!.skills.map((s) => (
                        <span
                          key={s}
                          className="text-xs px-2.5 py-1 rounded-full font-medium"
                          style={{ background: 'rgba(232,101,42,0.1)', color: '#E8652A' }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    {/* Pricing */}
                    <div className="rounded-xl p-4 mb-4" style={{ background: '#fff8f5' }}>
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        Choose Your Mode
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center text-xs">
                        {[
                          { mode: 'Video', price: '₹8K' },
                          { mode: 'Group', price: '₹18K' },
                          { mode: '1:1', price: '₹38K' },
                        ].map((p) => (
                          <div key={p.mode} className="bg-white rounded-lg py-2 border" style={{ borderColor: '#E8652A' }}>
                            <div className="text-gray-400">{p.mode}</div>
                            <div className="font-bold" style={{ color: '#E8652A' }}>{p.price}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Link href="/contact" className="btn-primary inline-flex text-sm px-6 py-3">
                      Join the Bootcamp →
                    </Link>
                  </div>
                  {/* Right — stats */}
                  <div className="grid grid-cols-2 gap-4 content-start">
                    {[
                      { v: '500+', l: 'Mock Interviews Conducted' },
                      { v: '50+', l: 'Companies Covered' },
                      { v: '3 Months', l: 'Intensive Program' },
                      { v: '95%', l: 'Placement Success Rate' },
                    ].map((s) => (
                      <div
                        key={s.l}
                        className="rounded-xl p-4 text-center"
                        style={{ background: 'rgba(232,101,42,0.06)' }}
                      >
                        <div className="font-heading font-extrabold text-2xl" style={{ color: '#E8652A' }}>
                          {s.v}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="section-title text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-navy text-sm hover:bg-gray-50 transition-colors"
                >
                  {faq.q}
                  <span className="ml-4 text-gray-400 text-lg leading-none">
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-sm text-gray-500 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-14 text-center"
        style={{ background: 'linear-gradient(135deg, #0D1B3E, #112244)' }}
      >
        <div className="max-w-2xl mx-auto px-5">
          <h2 className="font-heading font-bold text-3xl text-white mb-4">
            Not sure which track is right for you?
          </h2>
          <p className="text-gray-300 mb-6">
            Book a free 20-minute counselling call. We&apos;ll assess your background and recommend the best track and mode.
          </p>
          <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
            Book Free Counselling →
          </Link>
        </div>
      </section>
    </div>
  )
}
