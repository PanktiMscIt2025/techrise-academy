'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const tracks = [
  {
    id: 'web-dev',
    icon: '💻',
    title: 'Full-Stack Web Development',
    tagline: 'React · Node.js · MongoDB · AWS',
    duration: '4 months',
    modules: 12,
    color: '#3B82F6',
    skills: ['HTML/CSS/JS', 'React.js', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
  },
  {
    id: 'ai-ml',
    icon: '🤖',
    title: 'AI & Machine Learning',
    tagline: 'Python · TensorFlow · NLP · LLMs',
    duration: '5 months',
    modules: 14,
    color: '#8B5CF6',
    skills: ['Python', 'Pandas', 'TensorFlow', 'Scikit-learn', 'NLP', 'LLM APIs'],
  },
  {
    id: 'data-science',
    icon: '📊',
    title: 'Data Science & Analytics',
    tagline: 'SQL · Python · Power BI · Statistics',
    duration: '4 months',
    modules: 11,
    color: '#10B981',
    skills: ['SQL', 'Python', 'Power BI', 'Tableau', 'Excel', 'Statistics'],
  },
  {
    id: 'cloud',
    icon: '☁️',
    title: 'Cloud Computing',
    tagline: 'AWS · Azure · GCP · Docker',
    duration: '4 months',
    modules: 10,
    color: '#06B6D4',
    skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Cloud Security'],
  },
  {
    id: 'devops',
    icon: '⚙️',
    title: 'DevOps & Automation',
    tagline: 'CI/CD · Jenkins · Ansible · Kubernetes',
    duration: '4 months',
    modules: 10,
    color: '#F59E0B',
    skills: ['Git', 'Jenkins', 'Docker', 'Kubernetes', 'Ansible', 'Linux'],
  },
  {
    id: 'cybersecurity',
    icon: '🔒',
    title: 'Cybersecurity',
    tagline: 'Ethical Hacking · VAPT · SOC · CEH',
    duration: '4 months',
    modules: 12,
    color: '#EF4444',
    skills: ['Ethical Hacking', 'VAPT', 'Wireshark', 'Kali Linux', 'SOC', 'OWASP'],
  },
]

const placement = {
  id: 'placement-prep',
  icon: '🎯',
  title: 'Placement Preparation Bootcamp',
  tagline: 'For MCA · MSc IT · BCA · BE(CS/IT) students',
  duration: '3 months',
  modules: 10,
  color: '#E8652A',
  stats: [
    { v: '500+', l: 'Mock Interviews' },
    { v: '50+', l: 'Companies Covered' },
    { v: '3 Months', l: 'Intensive Program' },
    { v: '95%', l: 'Success Rate' },
  ],
  topics: [
    'DSA & Problem Solving',
    'System Design',
    'Resume & LinkedIn',
    'Mock Interviews',
    'Aptitude & Reasoning',
    'Group Discussions',
    'On-Campus & Off-Campus Strategy',
    'Offer Negotiation',
  ],
}

// FIX: Use framer-motion's built-in whileInView instead of react-intersection-observer.
// The old pattern `animate={inView ? x : {}}` passed an empty object when not in view,
// which caused Framer Motion to skip the animation entirely — elements appeared instantly visible.
function TrackCard({ track, index }: { track: typeof tracks[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="bg-white rounded-2xl border border-gray-100 shadow-card card-hover overflow-hidden flex flex-col"
    >
      <div className="h-1.5 w-full" style={{ backgroundColor: track.color }} />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
            style={{ background: `${track.color}15` }}
          >
            {track.icon}
          </div>
          <div className="text-right text-xs text-gray-400">
            <div className="font-semibold text-gray-600">{track.duration}</div>
            <div>{track.modules} modules</div>
          </div>
        </div>
        <h3 className="font-heading font-bold text-navy text-lg mb-1">{track.title}</h3>
        <p className="text-sm text-gray-500 mb-4">{track.tagline}</p>
        <div className="flex flex-wrap gap-1.5 mb-5 flex-1">
          {track.skills.map((s) => (
            <span
              key={s}
              className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{ background: `${track.color}12`, color: track.color }}
            >
              {s}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <span className="text-xs text-gray-400">Starting from</span>
            <div className="font-bold text-navy text-lg">₹8,000</div>
          </div>
          <Link
            href={`/courses#${track.id}`}
            className="text-sm font-semibold px-4 py-2 rounded-lg transition-colors text-white"
            style={{ backgroundColor: track.color }}
          >
            View Track →
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default function TracksSection() {
  return (
    <section className="py-20 bg-gray-50" id="tracks">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">7 Flagship Technology Tracks</h2>
          <p className="section-subtitle mx-auto">
            Each track is designed with industry mentors to give you job-ready skills,
            hands-on projects, and real placement support.
          </p>
        </motion.div>

        {/* 6 regular tracks */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {tracks.map((track, i) => (
            <TrackCard key={track.id} track={track} index={i} />
          ))}
        </div>

        {/* Track 7 — Most Popular full-width */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative rounded-2xl overflow-hidden border-2 shadow-lg"
          style={{ borderColor: '#E8652A' }}
        >
          <div
            className="absolute top-0 left-0 right-0 py-2 text-center text-xs font-extrabold tracking-widest uppercase text-white"
            style={{ background: 'linear-gradient(90deg,#E8652A,#d4541a)' }}
          >
            ⭐ Most Popular Track
          </div>
          <div className="bg-white pt-10 p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Left */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{placement.icon}</span>
                  <div>
                    <div className="flex gap-2 mb-1 flex-wrap">
                      <span className="text-xs px-2 py-0.5 rounded-full font-bold text-white" style={{ background: '#E8652A' }}>
                        Most Popular
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full font-bold border" style={{ borderColor: '#3B82F6', color: '#3B82F6' }}>
                        On-Campus + Off-Campus
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-navy text-xl md:text-2xl">
                      {placement.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-500 mb-4">{placement.tagline}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {placement.topics.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{ background: 'rgba(232,101,42,0.1)', color: '#E8652A' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <span className="text-xs text-gray-400">Starting from</span>
                    <div className="font-bold text-navy text-xl">₹8,000</div>
                  </div>
                  <Link
                    href="/courses#placement-prep"
                    className="btn-primary text-sm px-5 py-2.5"
                  >
                    View Bootcamp →
                  </Link>
                </div>
              </div>
              {/* Right — stats */}
              <div className="grid grid-cols-2 gap-4">
                {placement.stats.map((s) => (
                  <div
                    key={s.l}
                    className="rounded-xl p-4 text-center"
                    style={{ background: 'rgba(232,101,42,0.06)' }}
                  >
                    <div
                      className="font-heading font-extrabold text-2xl"
                      style={{ color: '#E8652A' }}
                    >
                      {s.v}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
