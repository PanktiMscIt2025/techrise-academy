import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D1B3E',
          50: '#e8ecf4',
          100: '#c5cfe3',
          200: '#9aaed0',
          300: '#6f8dbc',
          400: '#4d73ad',
          500: '#2b589e',
          600: '#1e4080',
          700: '#162e5c',
          800: '#0d1d3a',
          900: '#0D1B3E',
        },
        saffron: {
          DEFAULT: '#E8652A',
          50: '#fdf1ea',
          100: '#f9d9c4',
          200: '#f4b896',
          300: '#ef9768',
          400: '#ec7d46',
          500: '#E8652A',
          600: '#c94f1a',
          700: '#a63b10',
          800: '#832e0d',
          900: '#67230a',
        },
        blue: {
          DEFAULT: '#3B82F6',
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3B82F6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        heading: ['Plus Jakarta Sans', ...fontFamily.sans],
      },
      fontSize: {
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        '7xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.04em' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0D1B3E 0%, #112244 40%, #0D2050 100%)',
        'saffron-gradient': 'linear-gradient(135deg, #E8652A, #d4541a)',
        'card-gradient': 'linear-gradient(135deg, rgba(232,101,42,0.08) 0%, rgba(59,130,246,0.08) 100%)',
      },
      boxShadow: {
        'glow-saffron': '0 0 30px rgba(232, 101, 42, 0.3)',
        'glow-blue': '0 0 30px rgba(59, 130, 246, 0.3)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 20px 48px rgba(0, 0, 0, 0.16)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'whatsapp-ping': 'whatsappPing 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        whatsappPing: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.12)' },
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}

export default config
