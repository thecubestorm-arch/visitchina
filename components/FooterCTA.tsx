import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface FooterCTAProps {
  title: string
  subtitle?: string
  href?: string
  label?: string
  quickInfo?: {
    icon: React.ElementType
    title: string
    description: string
    link?: { href: string; label: string }
  }[]
  trustText?: string
}

export default function FooterCTA({
  title,
  subtitle,
  href,
  label,
  quickInfo,
  trustText = 'Kostenlose Guides · Regelmässig aktualisiert · Für Erstreisende nach China',
}: FooterCTAProps) {
  // Simple CTA mode: just title + subtitle + link button
  if (href && !quickInfo) {
    return (
      <section className="rounded-xl overflow-hidden border border-[#ebe4d8]">
        <div className="bg-[#1a3a4a] p-6 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#af5d32] mb-3">
            Reise planen
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="text-white/70 text-sm md:text-base max-w-md mb-6">
              {subtitle}
            </p>
          )}
          <Link
            href={href}
            className="inline-flex items-center gap-2 text-[#f5f1ea] hover:text-white font-semibold text-sm transition-colors py-2 px-3 min-h-[44px]"
          >
            {label || 'Mehr erfahren'} <ArrowRight size={16} />
          </Link>
        </div>
        <div className="bg-[#1a3a4a] border-t border-white/10 px-6 py-3 text-center">
          <p className="text-white/50 text-xs">{trustText}</p>
        </div>
      </section>
    )
  }

  // Full CTA mode: title + subtitle + quickInfo cards
  if (!quickInfo) return null
  return (
    <section className="rounded-xl overflow-hidden border border-[#ebe4d8]">
      <div className="grid md:grid-cols-5 gap-0">
        {/* Left: Main CTA */}
        <div className="md:col-span-3 bg-[#1a3a4a] p-6 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#af5d32] mb-3">
            Reise planen
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            {title}
          </h2>
          <p className="text-white/70 text-sm md:text-base max-w-md mb-6">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/reise-planen"
              className="inline-flex items-center gap-2 text-[#f5f1ea] hover:text-white font-semibold text-sm transition-colors py-2 px-3 min-h-[44px]"
            >
              Reiserouten ansehen <ArrowRight size={16} />
            </Link>
            <Link
              href="/china-basics"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white font-semibold text-sm transition-colors py-2 px-3 min-h-[44px]"
            >
              China-Basics <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Right: Quick Reference */}
        <div className="md:col-span-2 bg-white border-l border-[#ebe4d8] p-6 md:p-10 flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#64748b] mb-5">
            Kurzinfos
          </p>
          <div className="space-y-4">
            {quickInfo.map((info, i) => {
              const Icon = info.icon
              return (
                <div key={i}>
                  {i > 0 && (
                    <div className="border-t border-[#ebe4d8] mb-4" />
                  )}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#f5f1ea] flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-[#af5d32]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1a3a4a]">
                        {info.title}
                      </p>
                      <p className="text-xs text-[#64748b]">
                        {info.link ? (
                          <>
                            {info.description}{' '}
                            <Link
                              href={info.link.href}
                              className="text-[#af5d32] hover:underline inline-flex items-center py-2 px-1 min-h-[44px]"
                            >
                              {info.link.label}
                            </Link>
                          </>
                        ) : (
                          info.description
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="bg-[#1a3a4a] border-t border-white/10 px-6 py-3 text-center">
        <p className="text-white/50 text-xs">{trustText}</p>
      </div>
    </section>
  )
}
