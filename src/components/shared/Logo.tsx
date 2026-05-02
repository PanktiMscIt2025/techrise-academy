'use client'

import Link from 'next/link'

export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <svg
        width={size}
        height={size}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Graduation cap board */}
        <rect x="9" y="3.5" width="18" height="3" rx="0.8" fill="#3B82F6" />
        {/* Cap top */}
        <rect x="15" y="1" width="6" height="3" rx="0.8" fill="#0D1B3E" />
        {/* Triangle body */}
        <polygon points="18,6 9,18 27,18" fill="#0D1B3E" />
        {/* Stem */}
        <rect x="14" y="17" width="8" height="16" rx="1" fill="#0D1B3E" />
        {/* Arrow up-right */}
        <path
          d="M27 5 L32 5 L32 12"
          stroke="#3B82F6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="32" cy="13" r="1.5" fill="#3B82F6" />
        {/* Data lines */}
        <line x1="14" y1="20" x2="8" y2="20" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="7" cy="20" r="1.5" fill="#3B82F6" />
        <line x1="14" y1="24" x2="8" y2="24" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="7" cy="24" r="1.5" fill="#3B82F6" />
        <line x1="14" y1="28" x2="8" y2="28" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="7" cy="28" r="1.5" fill="#3B82F6" />
        <line x1="14" y1="32" x2="8" y2="32" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="7" cy="32" r="1.5" fill="#3B82F6" />
      </svg>
      <div className="leading-none">
        <span
          className="font-heading font-bold text-lg text-navy group-hover:text-saffron transition-colors"
          style={{ letterSpacing: '-0.02em' }}
        >
          TechRise
        </span>
        <span className="block text-xs font-medium text-gray-400 tracking-wider uppercase">
          Academy
        </span>
      </div>
    </Link>
  )
}
