import Link from 'next/link'
import TrustBar from '@/components/TrustBar'
import PhotoCard from '@/components/PhotoCard'
import SectionHeader from '@/components/SectionHeader'
import FAQAccordion from '@/components/FAQAccordion'
import FooterCTA from '@/components/FooterCTA'

const big3 = [
  {
    href: '/china-basics/bezahlung',
    image: 'https://picsum.photos/seed/china-alipay-pay/400/300',
    icon: '💳',
    name: 'Bezahlen',
    subtitle: 'Alipay, WeChat Pay und Bargeld — so bezahlst du in China als Schweizer:in.',
    chips: ['Alipay', 'WeChat Pay', 'Bargeld'],
  },
  {
    href: '/china-basics/esim',
    image: 'https://picsum.photos/seed/china-esim-phone/400/300',
    icon: '📶',
    name: 'Internet & VPN',
    subtitle: 'eSIM, WLAN und VPN — bleib in China verbunden, ohne teure Roaming-Kosten.',
    chips: ['eSIM', 'VPN', 'WLAN'],
  },
  {
    href: '/china-basics/vpn',
    image: 'https://picsum.photos/seed/china-vpn-laptop/400/300',
    icon: '📱',
    name: 'Apps',
    subtitle: 'Welche Apps du vor der Reise brauchst und wie du sie einrichtest.',
    chips: ['WeChat', 'Alipay', 'DiDi'],
  },
]

const cities = [
  {
    name: 'Peking',
    image: 'https://picsum.photos/seed/china-beijing-great-wall/400/300',
    href: 'https://www.trailofchina.com/destinations/beijing',
    highlights: ['Verbotene Stadt', 'Grosse Mauer', 'Pekingente'],
  },
  {
    name: 'Shanghai',
    image: 'https://picsum.photos/seed/china-shanghai-bund/400/300',
    href: 'https://www.trailofchina.com/destinations/shanghai',
    highlights: ['The Bund', 'Nanjing Road', 'French Concession'],
  },
  {
    name: "Xi'an",
    image: 'https://picsum.photos/seed/china-xian-warriors/400/300',
    href: 'https://www.trailofchina.com/destinations/xian',
    highlights: ['Terrakotta-Armee', 'Stadtmauer', 'Muslimisches Viertel'],
  },
  {
    name: 'Chengdu',
    image: 'https://picsum.photos/seed/china-chengdu-panda/400/300',
    href: 'https://www.trailofchina.com/destinations/chengdu',
    highlights: ['Pandas', 'Sichuan-Küche', 'Jinli-Strasse'],
  },
  {
    name: 'Chongqing',
    image: 'https://picsum.photos/seed/china-chongqing-skyline/400/300',
    href: 'https://www.trailofchina.com/destinations/chongqing',
    highlights: ['Hotpot', '3D-Stadt', 'Yangtze-Kreuzfahrt'],
  },
  {
    name: 'Shenzhen',
    image: 'https://picsum.photos/seed/china-shenzhen-tech/400/300',
    href: 'https://www.trailofchina.com/destinations/shenzhen',
    highlights: ['Tech-Hub', 'Huaqiangbei', 'Ping An Finance Centre'],
  },
  {
    name: 'Guangzhou',
    image: 'https://picsum.photos/seed/china-guangzhou-food/400/300',
    href: 'https://www.trailofchina.com/destinations/guangzhou',
    highlights: ['Dim Sum', 'Canton Tower', 'Shamian Island'],
  },
]

const decisionCards = [
  {
    icon: '🇨🇳',
    title: 'Erstmals in China?',
    subtitle: 'Dein Startpunkt: Visum, eSIM, VPN, Bezahlen — alles kompakt.',
    href: '/china-basics',
  },
  {
    icon: '🗺️',
    title: 'Bereit zu planen?',
    subtitle: 'Reiserouten, Budget in CHF und beste Reisezeit entdecken.',
    href: '/reise-planen',
  },
  {
    icon: '📱',
    title: 'Welche Apps?',
    subtitle: 'WeChat, Alipay, DiDi — die Apps, die du brauchst.',
    href: '/china-basics/esim',
  },
  {
    icon: '🎓',
    title: 'China-Grundlagen',
    subtitle: 'Sicherheit, Züge, Sprache und Kultur — die Basis-Wissen.',
    href: '/china-basics',
  },
]

const faqItems = [
  {
    question: 'Brauche ich als Schweizer:in ein Visum für China?',
    answer: 'Nein! Seit November 2024 können Schweizer Staatsbürger:innen bis zu 30 Tage visumfrei nach China reisen. Für längere Aufenthalte brauchst du ein Visum — alle Infos im Visum-Guide.',
  },
  {
    question: 'Wie bezahle ich in China als Schweizer:in?',
    answer: 'In China bezahlt fast alles mit Alipay oder WeChat Pay. Als Schweizer:in kannst du beide Apps mit deiner Kreditkarte verknüpfen. Bargeld funktioniert auch, ist aber unbequemer. Details im Bezahlen-Guide.',
  },
  {
    question: 'Brauche ich eine eSIM oder VPN für China?',
    answer: 'Ja, beides ist empfohlen. Eine eSIM (z.B. Airalo) spart Roaming-Kosten, und ein VPN ist nötig, um Google, WhatsApp, Instagram und andere blockierte Dienste zu nutzen. Setup-Anleitungen in den Guides.',
  },
  {
    question: 'Ist China sicher für Touristen?',
    answer: 'Ja, China ist für Touristen sehr sicher. Gewaltkriminalität ist selten, und in Grossstädten kannst du dich auch nachts frei bewegen. Vorsicht vor Touristen-Strafzetteln und Taxibetrug — mehr im Sicherheits-Guide.',
  },
  {
    question: 'Wie komme ich in China von A nach B?',
    answer: 'Chinas Hochgeschwindigkeitszüge sind fantastisch: schnell, pünktlich und günstig. Buche am besten über Trip.com oder 12306. Für die Stadt: DiDi (Chinas Uber) oder Metro. Details im Zug-Guide.',
  },
  {
    question: 'Was kostet eine China-Reise für Schweizer?',
    answer: 'Eine 2-wöchige Reise kostet ca. 1\'800–3\'200 CHF (ohne Flug), je nach Komfort. Flüge ab Zürich ab ca. 600 CHF (Economy). Detaillierte Budget-Breakdowns unter Reise planen.',
  },
]

export default function HomePage() {
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'VisitChina.ch',
    url: 'https://visitchina.ch',
    description: 'Der Schweizer Reiseführer für China — Praktische Guides, eSIM-Tipps, VPN-Empfehlungen und Visa-Infos.',
    inLanguage: 'de-CH',
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a3a4a] via-[#1f4a5a] to-[#af5d32]/30 py-16 md:py-24 text-center">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/china-hero-great-wall/1600/800')] bg-cover bg-center opacity-15" />
        <div className="container-px relative mx-auto max-w-4xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            China-Reise planen?{' '}
            <span className="text-[#e8a87c]">Kein Stress.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Praktische Guides, eSIM-Tipps, VPN-Empfehlungen und Visa-Infos — alles, was du als Schweizer:in für deine China-Reise brauchst.
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
              className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              Reise planen
            </a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Big 3 Section */}
      <section className="container-px mx-auto max-w-7xl py-16 md:py-20">
        <SectionHeader title="Das Wichtigste auf einen Blick" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {big3.map((card) => (
            <PhotoCard key={card.name} {...card} />
          ))}
        </div>
      </section>

      {/* Visa-Free Banner */}
      <section className="bg-white border-y border-[#ebe4d8] py-12">
        <div className="container-px mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#1a3a4a]/5 px-4 py-2 text-sm font-medium text-[#1a3a4a] mb-4">
            🇨🇭 Schweizer Pass
          </div>
          <h2 className="font-serif text-2xl md:text-3xl text-[var(--foreground)]">
            30 Tage visumfrei nach China
          </h2>
          <p className="mt-3 text-[var(--muted)] max-w-lg mx-auto">
            Seit November 2024 gilt die visumfreie Einreise für Schweizer Staatsbürger:innen — bis 30 Tage pro Aufenthalt. Kein Visum, keine Einladung, kein Stress.
          </p>
          <a
            href="/china-basics/visa"
            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[#af5d32] hover:text-[#8f431c] transition-colors"
          >
            Alle Infos zum Visum →
          </a>
        </div>
      </section>

      {/* Decision Helper */}
      <section className="container-px mx-auto max-w-7xl py-16 md:py-20">
        <SectionHeader title="Wo möchtest du starten?" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {decisionCards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="group flex flex-col items-start rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-[#af5d32]/40 hover:-translate-y-0.5"
            >
              <span className="text-3xl mb-3">{card.icon}</span>
              <h3 className="font-serif text-lg text-[var(--foreground)] group-hover:text-[#af5d32] transition-colors">
                {card.title}
              </h3>
              <p className="mt-1 text-sm text-[var(--muted)] leading-relaxed">{card.subtitle}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Destinations */}
      <section className="container-px mx-auto max-w-7xl py-16 md:py-20 border-t border-[var(--line)]">
        <SectionHeader
          title="Beliebte Reiseziele"
          seeAllHref="/ziele"
          seeAllLabel="Alle Ziele →"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {cities.map((city) => (
            <a
              key={city.name}
              href={city.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="relative h-32 md:h-40 overflow-hidden">
                <img
                  src={city.image}
                  alt={city.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-3 md:p-4">
                <h3 className="font-serif text-base md:text-lg text-[var(--foreground)] group-hover:text-[#af5d32] transition-colors">
                  {city.name}
                </h3>
                <ul className="mt-1.5 text-xs text-[var(--muted)] space-y-0.5">
                  {city.highlights.map((h) => (
                    <li key={h}>• {h}</li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
        <p className="mt-4 text-center text-sm text-[var(--muted)]">
          Detaillierte Stadtführer auf{' '}
          <a href="https://www.trailofchina.com/destinations" className="text-[#af5d32] hover:underline" target="_blank" rel="noopener noreferrer">
            trailofchina.com
          </a>
        </p>
      </section>

      {/* FAQ */}
      <section className="container-px mx-auto max-w-4xl py-16 md:py-20 border-t border-[var(--line)]">
        <SectionHeader title="Häufige Fragen" />
        <FAQAccordion items={faqItems} />
      </section>

      {/* Footer CTA */}
      <section className="container-px mx-auto max-w-4xl pb-16">
        <FooterCTA
          title="Bereit für dein China-Abenteuer?"
          subtitle="Von der eSIM bis zum Visum — wir haben alles, was du brauchst."
          href="/china-basics"
          label="China-Basics starten"
        />
      </section>
    </div>
  )
}