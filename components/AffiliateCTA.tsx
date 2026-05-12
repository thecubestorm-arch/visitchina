interface AffiliateCTAProps {
  title: string
  description: string
  href: string
  label: string
  icon?: string
  variant?: 'primary' | 'secondary'
}

export default function AffiliateCTA({ title, description, href, label, icon = '🔗', variant = 'primary' }: AffiliateCTAProps) {
  return (
    <div className="my-8 rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="text-2xl">{icon}</span>
        <div className="flex-1">
          <h3 className="font-serif text-lg text-[var(--foreground)]">{title}</h3>
          <p className="mt-1 text-sm text-[var(--muted)] leading-relaxed">{description}</p>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className={`mt-3 inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
              variant === 'primary'
                ? 'bg-[#af5d32] text-white hover:bg-[#8f431c]'
                : 'border border-[var(--line)] bg-white text-[var(--foreground)] hover:border-[#af5d32] hover:text-[#af5d32]'
            }`}
          >
            {label}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}