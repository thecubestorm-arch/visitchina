import Link from 'next/link'

interface FooterCTAProps {
  title: string
  subtitle?: string
  href: string
  label: string
  icon?: string
}

export default function FooterCTA({ title, subtitle, href, label, icon = '→' }: FooterCTAProps) {
  return (
    <div className="rounded-2xl bg-[#1a3a4a] p-8 text-center md:p-12">
      <h2 className="font-serif text-2xl md:text-3xl text-white">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-white/70 max-w-lg mx-auto">{subtitle}</p>
      )}
      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#af5d32] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#8f431c]"
      >
        {icon} {label}
      </Link>
    </div>
  )
}