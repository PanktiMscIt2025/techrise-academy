const companies = [
  'Infosys',
  'TCS',
  'Wipro',
  'Accenture',
  'Cognizant',
  'Capgemini',
  'Tech Mahindra',
  'HCLTech',
  'LTIMindtree',
  'IBM',
  'Deloitte',
  'Amazon',
]

export default function PartnersMarquee() {
  return (
    <section className="py-10 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-gray-400 mb-6">
          Our students work at
        </p>
      </div>
      <div className="relative">
        {/* Edge fade */}
        <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
        <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

        <div className="flex w-max animate-marquee gap-14 pr-14">
          {/* Duplicate list so loop is seamless at -50% translate */}
          {[...companies, ...companies].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-heading font-bold text-xl md:text-2xl text-gray-300 whitespace-nowrap select-none hover:text-navy transition-colors"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
