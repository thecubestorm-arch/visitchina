import TrustBar from '@/components/TrustBar'

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="container-px mx-auto max-w-4xl py-16 md:py-24 text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--foreground)] leading-tight">
          China-Reise planen?{' '}
          <span className="text-[#af5d32]">Kein Stress.</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto">
          Praktische Guides, eSIM-Tipps, VPN-Empfehlungen und Visa-Infos — alles, was du als Schweizer China-Reisende:r brauchst.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/china-basics"
            className="inline-flex items-center rounded-full bg-[#af5d32] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#8f431c]"
          >
            China-Basics entdecken
          </a>
          <a
            href="/reise-planen"
            className="inline-flex items-center rounded-full border border-[var(--line)] bg-white px-8 py-3.5 text-base font-semibold text-[var(--foreground)] transition-colors hover:border-[#af5d32] hover:text-[#af5d32]"
          >
            Reise planen
          </a>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Coming Soon Section */}
      <section className="container-px mx-auto max-w-4xl py-16 md:py-24 text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-[var(--foreground)]">
          Mehr Inhalte folgen bald
        </h2>
        <p className="mt-4 text-[var(--muted)] max-w-lg mx-auto">
          Wir arbeiten daran, dir die besten Tipps für deine China-Reise aus Schweizer Perspektive zu geben. Schau bald wieder vorbei!
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-[var(--muted)]">
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl">📱</span>
            <span>eSIM-Guide</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl">🔒</span>
            <span>VPN-Tipps</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl">📋</span>
            <span>Visa-Infos</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl">🗺️</span>
            <span>Reiserouten</span>
          </div>
        </div>
      </section>

      {/* Visa-Free Notice for Swiss */}
      <section className="bg-white border-y border-[#ebe4d8] py-10">
        <div className="container-px mx-auto max-w-4xl text-center">
          <p className="font-serif text-xl md:text-2xl text-[#1a3a4a]">
            🇨🇭 Schweizer können bis zu 30 Tage visumfrei nach China reisen
          </p>
          <p className="mt-3 text-sm text-[var(--muted)]">
            Seit Dezember 2023 gilt die visumfreie Einreise für Schweizer Staatsbürger — bis 30 Tage pro Aufenthalt.
          </p>
        </div>
      </section>
    </div>
  )
}