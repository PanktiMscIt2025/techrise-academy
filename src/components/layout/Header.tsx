'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from '@/components/shared/Logo'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/courses', label: 'Courses' },
  { href: '/learning-modes', label: 'Learning Modes' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Announce bar */}
      <div className="announce-bar text-center py-2 px-4 text-xs sm:text-sm font-medium text-white">
        🚀 New batch starting July 2026 &nbsp;·&nbsp; Limited seats&nbsp;
        <Link href="/contact" className="underline underline-offset-2 font-bold hover:text-saffron transition-colors">
          Enrol Now →
        </Link>
      </div>

      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <nav className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
          <Logo />

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'text-saffron bg-saffron/5'
                    : 'text-gray-600 hover:text-navy hover:bg-gray-50'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link href="/contact" className="btn-primary hidden md:inline-flex text-sm px-5 py-2.5">
              Enrol Now
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden flex flex-col justify-center gap-1.5 p-2 rounded-lg hover:bg-gray-50 transition-colors"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <span className={cn('block w-5 h-0.5 rounded-full bg-gray-700 transition-transform duration-200', open && 'rotate-45 translate-y-2')} />
              <span className={cn('block w-5 h-0.5 rounded-full bg-gray-700 transition-opacity duration-200', open && 'opacity-0')} />
              <span className={cn('block w-5 h-0.5 rounded-full bg-gray-700 transition-transform duration-200', open && '-rotate-45 -translate-y-2')} />
            </button>
          </div>
        </nav>

        {/* Mobile nav */}
        {open && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-md">
            <div className="max-w-7xl mx-auto px-5 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'px-4 py-3 rounded-xl text-sm font-semibold transition-colors',
                    pathname === link.href
                      ? 'text-saffron bg-saffron/5'
                      : 'text-gray-700 hover:bg-gray-50'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 mt-1 border-t border-gray-100">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary block text-center mt-2"
                >
                  Enrol Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
