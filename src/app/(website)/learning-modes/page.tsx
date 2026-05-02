'use client'

import { useState } from 'react'
import Link from 'next/link'

const modes = [
  {
    id: 'one-on-one',
    icon: '🎓',
    title: '1:1 Mentorship',
    price: '₹38,000',
    priceNote: 'per course',
    tagline: 'A dedicated industry expert, your pace, your goals.',
    color: '#E8652A',
    badge: 'Best Results',
    description:
      'The most intensive mode. You get paired with an industry mentor who has worked at top companies. Every session is customised to your pace, your gaps, and your career goals. Unlimited doubt sessions, resume reviews, and active placement referrals.',
    features: [
      { icon: '👤', text: 'Dedicated industry mentor (5+ years exp.)' },
      { icon: '🗓️', text: 'Flexible scheduling — weekdays or weekends' },
      { icon: '♾️', text: 'Unlimited doubt sessions via chat & video' },
      { icon: '📝', text: 'Custom learning roadmap built for you' },
      { icon: '📄', text: '1:1 resume, LinkedIn & portfolio review' },
      { icon: '🎤', text: 'Mock interviews with detailed feedback' },
      { icon: '🤝', text: "Placement referrals to mentor's network" },
      { icon: '📜', text: 'Certificate of completion' },
    ],
    idealFor: ['Working professionals', 'Career switchers', 'Students who need personalised attention', 'Those with specific timelines (interviews in 2–3 months)'],
  },
  {
    id: 'group',
    icon: '👥',
    title: 'Group Batch',
    price: '₹18,000',
    priceNote: 'per course',
    tagline: 'Live sessions, peer energy, and expert guidance.',
    color: '#3B82F6',
    badge: 'Most Popular',
    description:
      'Our most popular mode. Small batches of 10–15 students so the instructor knows every student by name. Three live sessions per week with recordings available. Peer collaboration on projects, weekly doubt-clearing sessions, and mock placement drives.',
    features: [
      { icon: '📡', text: 'Live sessions 3×/week (recorded)' },
      { icon: '👥', text: 'Small batch — 10 to 15 students' },
      { icon: '🤝', text: 'Peer project collaboration' },
      { icon: '❓', text: 'Weekly doubt Q&A with instructor' },
      { icon: '🏆', text: 'Placement mock drives for the batch' },
      { icon: '💬', text: 'Private batch WhatsApp community' },
      { icon: '📄', text: 'Group resume workshop' },
      { icon: '📜', text: 'Certificate of completion' },
    ],
    idealFor: ['Recent graduates', 'Students who prefer structure', 'Those who want peer motivation', 'Budget-conscious learners who want live guidance'],
  },
  {
    id: 'video',
    icon: '🎬',
    title: 'Video Library',
    price: '₹8,000',
    priceNote: 'per course',
    tagline: 'Self-paced. Lifetime access. Learn on your schedule.',
    color: '#10B981',
    badge: 'Best Value',
    description:
      'Pre-recorded, structured video content with lifetime access. Perfect for those who prefer learning at their own pace — at night, on weekends, or between commitments. Includes all resources, downloadable notes, and community forum access.',
    features: [
      { icon: '♾️', text: 'Lifetime access to all videos' },
      { icon: '🗂️', text: 'Structured module-by-module path' },
      { icon: '📥', text: 'Downloadable notes & resources' },
      { icon: '💬', text: 'Community forum access' },
      { icon: '🔄', text: 'Course updates included free' },
      { icon: '📜', text: 'Certificate on project submission' },
      { icon: '⏱️', text: 'No schedule — learn anytime' },
      { icon: '📱', text: 'Mobile-friendly player' },
    ],
    idealFor: ['Working professionals with limited time', 'Self-motivated learners', 'Those with tight budgets', 'Students supplementing college coursework'],
  },
]

const comparison = [
  { feature: 'Price per course', oneOnOne: '₹38,000', group: '₹18,000', video: '₹8,000' },
  { feature: 'Live sessions', oneOnOne: '✓ Custom schedule', group: '✓ 3×/week', video: '✗ Recorded only' },
  { feature: 'Recordings', oneOnOne: '✓', group: '✓', video: '✓ Lifetime access' },
  { feature: 'Mentor access', oneOnOne: '✓ Dedicated 1:1', group: '✓ Shared (batch)', video: '✗ Forum only' },
  { feature: 'Doubt resolution', oneOnOne: '✓ Unlimited, instant', group: '✓ Weekly Q&A', video: '✗ Forum only' },
  { feature: 'Mock interviews', oneOnOne: '✓ Personalised', group: '✓ Batch drives', video: '✗' },
  { feature: 'Resume review', oneOnOne: '✓ 1:1', group: '✓ Group workshop', video: '✗' },
  { feature: 'Placement referrals', oneOnOne: '✓', group: '✓ (batch)', video: '✗' },
  { feature: 'Certificate', oneOnOne: '✓', group: '✓', video: '✓' },
  { feature: 'EMI available', oneOnOne: '✓', group: '✓', video: '✗' },
]

const quizQuestions = [
  {
    q: 'How much time can you dedicate per week?',
    options: [
      { label: '< 5 hours (very busy)', score: { video: 2, group: 1, oneOnOne: 0 } },
      { label: '5–10 hours', score: { video: 1, group: 2, oneOnOne: 1 } },
      { label: '10+ hours (focused)', score: { video: 0, group: 1, oneOnOne: 2 } },
    ],
  },
  {
    q: 'What best describes your learning style?',
    options: [
      { label: 'I learn best alone, at my own pace', score: { video: 2, group: 0, oneOnOne: 1 } },
      { label: 'I love learning in groups', score: { video: 0, group: 2, oneOnOne: 1 } },
      { label: 'I need direct, personal guidance', score: { video: 0, group: 1, oneOnOne: 2 } },
    ],
  },
  {
    q: 'What is your placement timeline?',
    options: [
      { label: 'I have 6+ months', score: { video: 2, group: 2, oneOnOne: 1 } },
      { label: '3–6 months', score: { video: 1, group: 2, oneOnOne: 1 } },
      { label: 'Under 3 months — urgent', score: { video: 0, group: 1, oneOnOne: 2 } },
    ],
  },
]

type ScoreKey = 'video' | 'group' | 'oneOnOne'

export default function LearningModesPage() {
  const [answers, setAnswers] = useState<(number | null)[]>([null, null, null])
  const [result, setResult] = useState<string | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  function handleAnswer(qIdx: number, oIdx: number) {
    const updated = [...answers]
    updated[qIdx] = oIdx
    setAnswers(updated)
  }

  function showResult() {
    const totals: Record<ScoreKey, number> = { video: 0, group: 0, oneOnOne: 0 }
    quizQuestions.forEach((q, qIdx) => {
      const aIdx = answers[qIdx]
      if (aIdx !== null) {
        const scores = q.options[aIdx].score as Record<ScoreKey, number>
        ;(Object.keys(totals) as ScoreKey[]).forEach((k) => {
          totals[k] += scores[k]
        })
      }
    })
    const best = (Object.keys(totals) as ScoreKey[]).reduce((a, b) => (totals[a] >= totals[b] ? a : b))
    setResult(best)
  }

  function resetQuiz() {
    setAnswers([null, null, null])
    setResult(null)
  }

  const resultMode = result ? modes.find((m) => m.id === (result === 'oneOnOne' ? 'one-on-one' : result)) : null

  return (
    <div>
      {/* Hero */}
      <section
        className="py-16 text-center"
        style={{ background: 'linear-gradient(135deg, #0D1B3E 0%, #112244 100%)' }}
      >
        <div className="max-w-3xl mx-auto px-5">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-4">
            Choose Your Learning Mode
          </h1>
          <p className="text-gray-300 text-lg">
            Three modes, one goal — job-ready in the shortest time possible. Pick what fits your life.
          </p>
        </div>
      </section>

      {/* Mode cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-3 gap-8">
            {modes.map((mode) => (
              <div
                key={mode.id}
                id={mode.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-card card-hover overflow-hidden flex flex-col"
                style={{ scrollMarginTop: '90px' }}
              >
                <div className="h-1.5" style={{ backgroundColor: mode.color }} />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl"
                      style={{ background: `${mode.color}15` }}
                    >
                      {mode.icon}
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ backgroundColor: mode.color }}>
                      {mode.badge}
                    </span>
                  </div>

                  <h2 className="font-heading font-bold text-navy text-2xl mb-1">{mode.title}</h2>
                  <p className="text-gray-400 text-sm mb-4">{mode.tagline}</p>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">{mode.description}</p>

                  <ul className="space-y-2 mb-6 flex-1">
                    {mode.features.map((f) => (
                      <li key={f.text} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <span className="text-base leading-none mt-0.5">{f.icon}</span>
                        {f.text}
                      </li>
                    ))}
                  </ul>

                  <div className="rounded-xl p-4 mb-5" style={{ background: `${mode.color}08` }}>
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Ideal for</div>
                    <ul className="space-y-1">
                      {mode.idealFor.map((who) => (
                        <li key={who} className="text-xs text-gray-600 flex items-center gap-1.5">
                          <span style={{ color: mode.color }}>•</span> {who}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-400">{mode.priceNote}</div>
                      <div className="font-heading font-extrabold text-2xl text-navy">{mode.price}</div>
                    </div>
                    <Link
                      href="/contact"
                      className="text-sm font-semibold px-5 py-2.5 rounded-xl text-white transition-colors"
                      style={{ backgroundColor: mode.color }}
                    >
                      Enrol →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="section-title text-center mb-10">Compare Modes Side-by-Side</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-card">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: '#0D1B3E' }}>
                  <th className="text-left px-6 py-4 text-gray-300 font-medium">Feature</th>
                  <th className="px-6 py-4 text-center font-bold text-white">
                    <div className="text-base">🎓</div>1:1 Mentorship
                  </th>
                  <th className="px-6 py-4 text-center font-bold text-white">
                    <div className="text-base">👥</div>Group Batch
                  </th>
                  <th className="px-6 py-4 text-center font-bold text-white">
                    <div className="text-base">🎬</div>Video Library
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-3.5 text-gray-600 font-medium">{row.feature}</td>
                    <td className="px-6 py-3.5 text-center text-gray-700">{row.oneOnOne}</td>
                    <td className="px-6 py-3.5 text-center text-gray-700">{row.group}</td>
                    <td className="px-6 py-3.5 text-center text-gray-700">{row.video}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Quiz */}
      <section className="py-16 bg-gray-50" id="quiz">
        <div className="max-w-2xl mx-auto px-5">
          <h2 className="section-title text-center mb-3">Not Sure Which Mode to Pick?</h2>
          <p className="section-subtitle text-center mb-10">Answer 3 quick questions.</p>

          {result ? (
            <div className="bg-white rounded-2xl border border-gray-200 shadow-card p-8 text-center">
              <div className="text-5xl mb-4">{resultMode?.icon}</div>
              <h3 className="font-heading font-bold text-navy text-2xl mb-2">
                We recommend: {resultMode?.title}
              </h3>
              <p className="text-gray-500 mb-6">{resultMode?.tagline}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href={`/learning-modes#${resultMode?.id}`}
                  className="btn-primary px-6 py-3"
                >
                  See Full Details →
                </Link>
                <button onClick={resetQuiz} className="btn-outline px-6 py-3">
                  Retake Quiz
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {quizQuestions.map((q, qIdx) => (
                <div key={qIdx} className="bg-white rounded-2xl border border-gray-200 shadow-card p-6">
                  <p className="font-semibold text-navy mb-4">
                    {qIdx + 1}. {q.q}
                  </p>
                  <div className="space-y-2">
                    {q.options.map((opt, oIdx) => (
                      <button
                        key={oIdx}
                        onClick={() => handleAnswer(qIdx, oIdx)}
                        className="w-full text-left px-4 py-3 rounded-xl text-sm border-2 transition-all font-medium"
                        style={
                          answers[qIdx] === oIdx
                            ? { borderColor: '#E8652A', background: 'rgba(232,101,42,0.06)', color: '#E8652A' }
                            : { borderColor: '#e5e7eb', color: '#374151' }
                        }
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              <button
                onClick={showResult}
                disabled={answers.some((a) => a === null)}
                className="btn-primary w-full justify-center py-3.5 text-base"
                style={{ opacity: answers.some((a) => a === null) ? 0.5 : 1 }}
              >
                Show My Recommendation →
              </button>
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="section-title text-center mb-10">FAQs About Learning Modes</h2>
          <div className="space-y-3">
            {[
              { q: 'Can I switch modes after starting?', a: 'Yes — within the first 7 days you can switch modes. After that, upgrades (e.g. Video → Group) are available at a prorated difference.' },
              { q: 'What if I miss a live session in Group Batch?', a: 'Every session is recorded and uploaded within 4 hours. You will never miss content — the recording is yours for the duration of the course.' },
              { q: 'How are 1:1 sessions scheduled?', a: 'After enrolment, you and your mentor agree on a weekly schedule that suits both of you. Sessions can be weekday evenings or weekends.' },
              { q: 'Is EMI available?', a: 'Yes — 3-month and 6-month no-cost EMI on Group Batch and 1:1 plans. WhatsApp us to set it up.' },
              { q: 'Do all modes include the certificate?', a: 'Yes — all three modes include a TechRise Academy certificate on completion of modules and capstone project submission.' },
            ].map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-navy text-sm hover:bg-gray-50 transition-colors"
                >
                  {faq.q}
                  <span className="ml-4 text-gray-400 text-lg leading-none">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-sm text-gray-500 leading-relaxed">{faq.a}</div>
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
        <div className="max-w-xl mx-auto px-5">
          <h2 className="font-heading font-bold text-3xl text-white mb-4">
            Ready to enrol?
          </h2>
          <p className="text-gray-300 mb-6">
            Pick a track, pick a mode, and get started. Free counselling available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses" className="btn-primary text-base px-7 py-3.5">
              Browse All Courses →
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold text-base text-white border-2 border-white/20 hover:border-white/50 transition-colors"
            >
              Free Counselling
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
