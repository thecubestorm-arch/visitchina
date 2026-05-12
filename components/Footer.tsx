import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-24 bg-[#f5f1ea]">
      <div className="container-px mx-auto max-w-7xl py-10 pb-[calc(env(safe-area-inset-bottom)+2.5rem)]">
        {/* Top row: brand + nav */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-2xl text-[var(--foreground)]">VisitChina.ch</p>
          <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[var(--muted)]">
            <Link href="/china-basics" className="inline-flex min-h-[44px] items-center rounded-md px-2 hover:bg-[var(--surface-strong)] hover:text-[#af5d32] transition-colors">
              China-Basics
            </Link>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <Link href="/ziele" className="inline-flex min-h-[44px] items-center rounded-md px-2 hover:bg-[var(--surface-strong)] hover:text-[#af5d32] transition-colors">
              Ziele
            </Link>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <Link href="/reise-planen" className="inline-flex min-h-[44px] items-center rounded-md px-2 hover:bg-[var(--surface-strong)] hover:text-[#af5d32] transition-colors">
              Reise planen
            </Link>
          </nav>
        </div>

        {/* Divider */}
        <hr className="my-8 border-[#ddd5c8]" />

        {/* Second row: description */}
        <p className="max-w-md text-sm leading-7 text-[var(--muted)]">
          Praktischer Reiseführer für Schweizerinnen und Schweizer, die zum ersten Mal nach China reisen — mit klaren Tipps, ruhiger Vorbereitung und smarten Routen.
        </p>

        {/* Divider */}
        <hr className="my-8 border-[#ddd5c8]" />

        {/* Bottom row: copyright + legal */}
        <div className="flex flex-col gap-3 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} VisitChina.ch</p>
          <p>nDSG-konform · Schweizer Datenschutzgesetz anwendbar</p>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <Link href="/impressum" className="inline-flex min-h-[44px] items-center rounded-md px-2 hover:bg-[var(--surface-strong)] hover:text-[#af5d32] transition-colors">
              Impressum
            </Link>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <Link href="/datenschutz" className="inline-flex min-h-[44px] items-center rounded-md px-2 hover:bg-[var(--surface-strong)] hover:text-[#af5d32] transition-colors">
              Datenschutz
            </Link>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <Link href="/cookie-richtlinie" className="inline-flex min-h-[44px] items-center rounded-md px-2 hover:bg-[var(--surface-strong)] hover:text-[#af5d32] transition-colors">
              Cookie-Richtlinie
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
