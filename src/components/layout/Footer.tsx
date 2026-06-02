import Link from 'next/link'
import Logo from '@/components/shared/Logo'

const courses = [
  { label: '💻 Full-Stack Web Dev', href: '/courses#web-dev' },
  { label: '🤖 AI & Machine Learning', href: '/courses#ai-ml' },
  { label: '📊 Data Science & Analytics', href: '/courses#data-science' },
  { label: '☁️ Cloud Computing', href: '/courses#cloud' },
  { label: '⚙️ DevOps & Automation', href: '/courses#devops' },
  { label: '🔒 Cybersecurity', href: '/courses#cybersecurity' },
  { label: '🎯 Placement Prep Bootcamp', href: '/courses#placement-prep' },
]

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'All Courses', href: '/courses' },
  { label: 'Learning Modes', href: '/learning-modes' },
  { label: 'About TechRise', href: '/about' },
  { label: 'Hiring Partners', href: '/about#hiring-partners' },
  { label: 'Contact Us', href: '/contact' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0D1B3E' }} className="text-gray-300">
      <div className="max-w-7xl mx-auto px-5 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Logo size={40} />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Learn Today. Place Tomorrow.
              <br />
              Industry-ready tech education with real mentors and proven outcomes.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="https://wa.me/918160049448"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <span>📱</span> +91 81600 49448
              </a>
              <a
                href="mailto:techrisewithai@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <span>✉️</span> techrisewithai@gmail.com
              </a>
              <a
                href="https://www.youtube.com/@TechRiseAcademy-w3k"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <span>▶️</span> YouTube Channel
              </a>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">
              Our Courses
            </h4>
            <ul className="space-y-2">
              {courses.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-gray-400 hover:text-saffron transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning modes */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">
              Learning Modes
            </h4>
            <ul className="space-y-2 mb-6">
              {[
                { label: '🎓 1:1 Mentorship — ₹38,000', href: '/learning-modes#one-on-one' },
                { label: '👥 Group Batch — ₹18,000', href: '/learning-modes#group' },
                { label: '🎬 Video Library — ₹8,000', href: '/learning-modes#video' },
              ].map((m) => (
                <li key={m.href}>
                  <Link
                    href={m.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {m.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="btn-primary inline-flex text-sm px-5 py-2.5"
            >
              Enrol Now →
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} TechRise Academy. All rights reserved.</p>
          <p>
            Made with ❤️ for aspiring developers &nbsp;·&nbsp; Ahmedabad, Gujarat
          </p>
        </div>
      </div>
    </footer>
  )
}
