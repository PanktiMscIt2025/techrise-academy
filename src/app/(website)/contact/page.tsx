'use client'

import { useState } from 'react'
import Link from 'next/link'

type Step = 1 | 2 | 3

const courses = [
  { value: 'web-dev', label: 'Full-Stack Web Development' },
  { value: 'ai-ml', label: 'AI & Machine Learning' },
  { value: 'data-science', label: 'Data Science & Analytics' },
  { value: 'cloud', label: 'Cloud Computing' },
  { value: 'devops', label: 'DevOps & Automation' },
  { value: 'cybersecurity', label: 'Cybersecurity' },
  { value: 'placement-prep', label: 'Placement Prep Bootcamp' },
  { value: 'undecided', label: "I'm not sure yet" },
]

const qualifications = [
  { value: 'bca', label: 'BCA' },
  { value: 'mca', label: 'MCA' },
  { value: 'be-cs', label: 'B.E. / B.Tech (CS/IT)' },
  { value: 'bsc-it', label: 'BSc IT' },
  { value: 'msc-it', label: 'MSc IT' },
  { value: 'other', label: 'Other' },
]

const modes = [
  { value: '1on1', label: '🎓 1:1 Mentorship — ₹38,000', desc: 'Personal mentor, custom pace' },
  { value: 'group', label: '👥 Group Batch — ₹18,000', desc: 'Live sessions, small batch' },
  { value: 'video', label: '🎬 Video Library — ₹8,000', desc: 'Self-paced, lifetime access' },
]

const faqs = [
  { q: 'How soon will someone contact me?', a: 'Within 24 hours on weekdays. WhatsApp is fastest — usually under 2 hours.' },
  { q: 'Is the counselling session really free?', a: 'Yes — completely free, no obligation. We just want to help you pick the right track.' },
  { q: 'Can I enrol the same day?', a: 'Yes. Once you choose a track and mode, payment link is sent immediately and access starts within 2 hours.' },
  { q: 'Do you offer group discounts?', a: 'Yes — enrol 2+ friends together and get 10% off each. WhatsApp us to set it up.' },
  { q: 'Is EMI available?', a: '3-month and 6-month no-cost EMI on Group Batch and 1:1 plans. WhatsApp us.' },
]

export default function ContactPage() {
  const [step, setStep] = useState<Step>(1)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    learningMode: '',
    qualification: '',
    message: '',
  })

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function canProceed(currentStep: Step) {
    if (currentStep === 1) return form.name.trim() && form.phone.trim()
    if (currentStep === 2) return !!form.course
    return true
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
    } catch {
      // fail silently — show success regardless
    } finally {
      setLoading(false)
      setSubmitted(true)
    }
  }

  const inputClass =
    'w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition-all'

  return (
    <div>
      {/* Hero */}
      <section
        className="py-16 text-center"
        style={{ background: 'linear-gradient(135deg, #0D1B3E 0%, #112244 100%)' }}
      >
        <div className="max-w-2xl mx-auto px-5">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-4">
            Let&apos;s Get You Placed
          </h1>
          <p className="text-gray-300 text-lg">
            Fill in the form below or WhatsApp us directly. Free counselling, no hard sell.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Form — 2 cols */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-2xl shadow-card p-10 text-center">
                  <div className="text-6xl mb-5">🎉</div>
                  <h2 className="font-heading font-bold text-navy text-3xl mb-3">
                    Thanks, {form.name}!
                  </h2>
                  <p className="text-gray-500 text-lg mb-2">
                    We&apos;ll call you on{' '}
                    <span className="font-semibold text-navy">{form.phone}</span> within 24 hours.
                  </p>
                  <p className="text-gray-400 text-sm mb-8">
                    For faster response, WhatsApp us directly at +91 81600 49448
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://wa.me/918160049448"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary px-6 py-3"
                    >
                      WhatsApp Us Now
                    </a>
                    <Link href="/courses" className="btn-outline px-6 py-3">
                      Browse Courses
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-card overflow-hidden">
                  {/* Step indicator */}
                  <div className="px-8 pt-8 pb-0">
                    <div className="flex items-center gap-3 mb-8">
                      {([1, 2, 3] as Step[]).map((s) => (
                        <div key={s} className="flex items-center gap-3 flex-1">
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-all"
                            style={
                              step === s
                                ? { background: '#E8652A', color: '#fff' }
                                : step > s
                                ? { background: '#10B981', color: '#fff' }
                                : { background: '#f3f4f6', color: '#9ca3af' }
                            }
                          >
                            {step > s ? '✓' : s}
                          </div>
                          <span className="text-xs font-medium hidden sm:block" style={{ color: step === s ? '#E8652A' : '#9ca3af' }}>
                            {s === 1 ? 'Your Info' : s === 2 ? 'Course Prefs' : 'Final Details'}
                          </span>
                          {s < 3 && <div className="flex-1 h-0.5 bg-gray-100 ml-1" />}
                        </div>
                      ))}
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="px-8 pb-8">
                    {/* Step 1 */}
                    {step === 1 && (
                      <div className="space-y-4">
                        <h2 className="font-heading font-bold text-navy text-xl mb-5">Your Details</h2>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Priya Shah"
                            value={form.name}
                            onChange={(e) => update('name', e.target.value)}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                          <input
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            value={form.phone}
                            onChange={(e) => update('phone', e.target.value)}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                          <input
                            type="email"
                            placeholder="priya@email.com"
                            value={form.email}
                            onChange={(e) => update('email', e.target.value)}
                            className={inputClass}
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          disabled={!canProceed(1)}
                          className="btn-primary w-full justify-center py-3.5 mt-2"
                          style={{ opacity: canProceed(1) ? 1 : 0.5 }}
                        >
                          Continue →
                        </button>
                      </div>
                    )}

                    {/* Step 2 */}
                    {step === 2 && (
                      <div className="space-y-4">
                        <h2 className="font-heading font-bold text-navy text-xl mb-5">Course Preferences</h2>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Which course interests you? *</label>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {courses.map((c) => (
                              <button
                                key={c.value}
                                type="button"
                                onClick={() => update('course', c.value)}
                                className="text-left px-4 py-3 rounded-xl text-sm border-2 font-medium transition-all"
                                style={
                                  form.course === c.value
                                    ? { borderColor: '#E8652A', background: 'rgba(232,101,42,0.06)', color: '#E8652A' }
                                    : { borderColor: '#e5e7eb', color: '#374151' }
                                }
                              >
                                {c.label}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Preferred learning mode</label>
                          <div className="space-y-2">
                            {modes.map((m) => (
                              <button
                                key={m.value}
                                type="button"
                                onClick={() => update('learningMode', m.value)}
                                className="w-full text-left px-4 py-3 rounded-xl text-sm border-2 font-medium transition-all flex justify-between items-center"
                                style={
                                  form.learningMode === m.value
                                    ? { borderColor: '#E8652A', background: 'rgba(232,101,42,0.06)', color: '#E8652A' }
                                    : { borderColor: '#e5e7eb', color: '#374151' }
                                }
                              >
                                <span>{m.label}</span>
                                <span className="text-xs font-normal opacity-60">{m.desc}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-3 mt-2">
                          <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="btn-outline px-5 py-3 flex-1"
                          >
                            ← Back
                          </button>
                          <button
                            type="button"
                            onClick={() => setStep(3)}
                            disabled={!canProceed(2)}
                            className="btn-primary flex-1 justify-center py-3"
                            style={{ opacity: canProceed(2) ? 1 : 0.5 }}
                          >
                            Continue →
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 3 */}
                    {step === 3 && (
                      <div className="space-y-4">
                        <h2 className="font-heading font-bold text-navy text-xl mb-5">Almost Done!</h2>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Highest qualification</label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {qualifications.map((q) => (
                              <button
                                key={q.value}
                                type="button"
                                onClick={() => update('qualification', q.value)}
                                className="px-3 py-2.5 rounded-xl text-sm border-2 font-medium transition-all"
                                style={
                                  form.qualification === q.value
                                    ? { borderColor: '#E8652A', background: 'rgba(232,101,42,0.06)', color: '#E8652A' }
                                    : { borderColor: '#e5e7eb', color: '#374151' }
                                }
                              >
                                {q.label}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Message / Query (optional)</label>
                          <textarea
                            rows={3}
                            placeholder="Any questions, specific goals, or things you'd like us to know..."
                            value={form.message}
                            onChange={(e) => update('message', e.target.value)}
                            className={inputClass}
                          />
                        </div>

                        {/* Summary */}
                        <div className="rounded-xl p-4 bg-gray-50 text-sm space-y-1">
                          <div className="font-semibold text-navy mb-2">Your Enquiry Summary</div>
                          <div className="text-gray-600">👤 {form.name} · {form.phone}</div>
                          {form.email && <div className="text-gray-600">✉️ {form.email}</div>}
                          <div className="text-gray-600">📚 {courses.find((c) => c.value === form.course)?.label || '—'}</div>
                          {form.learningMode && (
                            <div className="text-gray-600">🎓 {modes.find((m) => m.value === form.learningMode)?.label || '—'}</div>
                          )}
                        </div>

                        <div className="flex gap-3 mt-2">
                          <button
                            type="button"
                            onClick={() => setStep(2)}
                            className="btn-outline px-5 py-3 flex-1"
                          >
                            ← Back
                          </button>
                          <button
                            type="submit"
                            disabled={loading}
                            className="btn-primary flex-1 justify-center py-3"
                          >
                            {loading ? 'Submitting...' : 'Submit Enquiry →'}
                          </button>
                        </div>
                      </div>
                    )}
                  </form>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact methods */}
              <div className="bg-white rounded-2xl shadow-card p-6">
                <h3 className="font-heading font-bold text-navy text-lg mb-5">Contact Us Directly</h3>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/918160049448"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-xl" style={{ background: '#25D366' }}>
                      💬
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">WhatsApp (Fastest)</div>
                      <div className="font-semibold text-navy text-sm group-hover:text-saffron transition-colors">
                        +91 81600 49448
                      </div>
                    </div>
                  </a>
                  <a
                    href="tel:+918160049448"
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: 'rgba(232,101,42,0.1)' }}>
                      📞
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Call Us</div>
                      <div className="font-semibold text-navy text-sm group-hover:text-saffron transition-colors">
                        +91 81600 49448
                      </div>
                    </div>
                  </a>
                  <a
                    href="mailto:techrisewithai@gmail.com"
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: 'rgba(59,130,246,0.1)' }}>
                      ✉️
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Email</div>
                      <div className="font-semibold text-navy text-sm group-hover:text-saffron transition-colors">
                        techrisewithai@gmail.com
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://www.youtube.com/@TechRiseAcademy-w3k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: 'rgba(239,68,68,0.1)' }}>
                      ▶️
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">YouTube</div>
                      <div className="font-semibold text-navy text-sm group-hover:text-saffron transition-colors">
                        @TechRiseAcademy-w3k
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Response time */}
              <div className="rounded-2xl p-5" style={{ background: 'rgba(232,101,42,0.06)', border: '1px solid rgba(232,101,42,0.2)' }}>
                <div className="font-semibold text-navy mb-3">Response Times</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">WhatsApp</span>
                    <span className="font-semibold" style={{ color: '#10B981' }}>Under 2 hrs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Form / Email</span>
                    <span className="font-semibold text-gray-700">Within 24 hrs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Phone</span>
                    <span className="font-semibold text-gray-700">Mon–Sat, 9am–7pm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="section-title text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
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
    </div>
  )
}
