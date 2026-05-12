'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  ChevronDown,
  Globe,
  Map,
  MoveRight,
  Route,
  Smartphone,
  Wifi,
  CreditCard,
  TrainFront,
  Lightbulb,
} from 'lucide-react'
import FooterCTA from '@/components/FooterCTA'

const trustSignals = [
  '.ch Domain — Vertrauenswürdig & sicher',
  'Aktualisiert 2026',
  'nDSG-konform',
  'Kostenlos & werbefrei',
]

const decisionCards = [
  {
    title: 'Erstmals in China?',
    description: 'Starte mit einer bewährten Route, die für eine erste China-Reise gebaut ist.',
    href: '/reise-planen',
    label: 'Die Route ansehen',
    icon: Route,
  },
  {
    title: 'Bereit am Planen?',
    description: 'Plane deine Reise um Tage, Städte und Tempo herum.',
    href: '/reise-planen',
    label: 'Zum Reiseplaner',
    icon: Map,
  },
  {
    title: 'Welche Apps?',
    description: 'Sortiere Zahlungen, Karten, Messaging und VPN, bevor du abfliegst.',
    href: '/china-basics',
    label: 'Zur App-Liste',
    icon: Smartphone,
  },
  {
    title: 'Die Basics wissen?',
    description: 'Lies das Praktische zuerst, damit der Rest Sinn ergibt.',
    href: '/china-basics',
    label: 'Basics lernen',
    icon: Globe,
  },
]

const trendingFaqs = [
  {
    question: 'Wer darf aktuell visumfrei nach China einreisen?',
    answer:
      'China hat die visumfreie Einreise für viele Passinhaber ausgeweitet — 15 bis 30 Tage je nach Nationalität. Schweizer:innen können bis zu 30 Tage visumfrei bleiben. Prüfe den Visum-Guide, da sich die Regeln am schnellsten ändern.',
    href: '/china-basics/visa',
    label: 'Visum-Guide prüfen',
  },
  {
    question: 'Brauche ich Alipay oder WeChat Pay vor der Ankunft?',
    answer:
      'Normalerweise ja. China ist stark mobil-zahlungsbasiert, und die Verifizierung ausländischer Karten kann Zeit brauchen. Der sicherste Weg: Alipay und WeChat Pay zu Hause einrichten, damit du am Flughafen oder im ersten Restaurant keine Probleme hast.',
    href: '/china-basics/bezahlung',
    label: 'Zahlungs-Setup ansehen',
  },
  {
    question: 'Wie komme ich in China ans Internet?',
    answer:
      'Die meisten Erstreisenden nutzen eine eSIM, ein Roaming-Paket oder eine lokale SIM. Die wichtigste Entscheidung: stell sicher, dass du vom Moment der Landung an zuverlässiges Datenvolumen hast — denn Transport, Übersetzung und Zahlungen hängen alle davon ab.',
    href: '/china-basics/esim',
    label: 'Internet-Optionen vergleichen',
  },
  {
    question: 'Wann ist die beste Reisezeit für China?',
    answer:
      'Frühling und Herbst sind in der Regel die einfachsten Jahreszeiten für erste Reisen — mildere Temperaturen, angenehmeres Sightseeing. Vermeide chinesische Feiertage, wenn Züge und Hotels überlaufen.',
    href: '/reise-planen',
    label: 'Beste Reisezeiten ansehen',
  },
  {
    question: 'Zug oder Flug zwischen den Grossstädten?',
    answer:
      'Für klassische Erstreiserrouten wie Peking, Xi\'an und Shanghai ist der Hochgeschwindigkeitszug oft die einfachste Option. City-Center zu City-Center, vorhersehbarer — und Teil des China-Erlebnisses an sich.',
    href: '/china-basics/zuege',
    label: 'Zug-Guide lesen',
  },
]

const footerQuickInfo = [
  {
    icon: Smartphone,
    title: 'Apps vor dem Abflug',
    description: 'Richte Zahlung, VPN und Karten zu Hause mit dem ',
    link: { href: '/china-basics', label: 'Apps-Guide' },
  },
  {
    icon: Wifi,
    title: 'Internet-Setup',
    description: 'Wähle zwischen eSIM, Roaming und lokaler SIM im ',
    link: { href: '/china-basics/esim', label: 'Internet-Guide' },
  },
  {
    icon: Route,
    title: 'Route für Erstreisende',
    description: 'Brauchst du einen Startpunkt? Nutze die ',
    link: { href: '/reise-planen', label: 'Route für Erstreisende' },
  },
]

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(0)

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: trendingFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="min-h-screen bg-[#f5f1ea] text-[#1a3a4a]">
        {/* ─── HERO ─── */}
        <section className="relative flex min-h-[500px] items-end overflow-hidden md:min-h-[600px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://picsum.photos/seed/china-skyline/1920/1080')",
            }}
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative mx-auto w-full max-w-6xl px-4 py-14 md:px-6 md:py-20">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold leading-[1.02] text-white sm:text-5xl md:text-6xl">
                China reisen
                <span className="block">ohne Verwirrung</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
                Erweiterte visumfreie Einreise, mobile Reise-Tools und schnelle Züge machen China
                einfacher zu planen, als es aussieht. Starte hier, um das Wesentliche zu klären,
                bevor du dich auf Städte, Routen und Buchungen festlegst.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/reise-planen"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#af5d32] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#97502b]"
                >
                  Reise planen
                  <ArrowRight size={16} className="ml-2" />
                </Link>
                <Link
                  href="/china-basics"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/80 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#1a3a4a]"
                >
                  China-Basics erkunden
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── TRUST BAR ─── */}
        <section className="border-y border-[#1a3a4a]/10 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-5 md:px-6">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {trustSignals.map((signal) => (
                <div
                  key={signal}
                  className="rounded-2xl border border-[#1a3a4a]/8 bg-[#f5f1ea] px-4 py-4 text-center text-sm font-semibold text-[#1a3a4a]"
                >
                  {signal}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── DECISION HELPER ─── */}
        <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#af5d32]">
              Entscheidungshilfe
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Nicht sicher, wo anfangen?</h2>
            <p className="mt-3 text-base leading-7 text-[#1a3a4a]/72">
              Wähl das Problem, das du zuerst lösen willst. Das Ziel ist, Reibung zu reduzieren,
              nicht dich durch ein riesiges Verzeichnis zu schicken.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {decisionCards.map((card) => {
              const Icon = card.icon
              return (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group rounded-[1.5rem] border border-[#1a3a4a]/10 bg-white p-6 shadow-[0_18px_40px_rgba(26,58,74,0.06)] transition-all hover:-translate-y-1 hover:border-[#af5d32]/40 hover:shadow-[0_22px_46px_rgba(26,58,74,0.12)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#af5d32]/10 text-[#af5d32]">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#1a3a4a]/68">{card.description}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#af5d32]">
                    {card.label}
                    <MoveRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        {/* ─── TRENDING FAQ ─── */}
        <section className="bg-[#1a3a4a] py-14 text-white md:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 md:px-6 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f1cbb4]">
                Aktuell gefragt
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Was Reisende gerade fragen
              </h2>
              <p className="mt-3 max-w-md text-base leading-7 text-white/72">
                Das sind die Reibungspunkte, die immer wieder auftauchen:
                Visa-Regeln, Apps, Internet, Jahreszeiten und Transport-Entscheidungen.
              </p>
            </div>

            <div className="space-y-3">
              {trendingFaqs.map((faq, index) => {
                const isOpen = openFaq === index
                return (
                  <div
                    key={faq.question}
                    className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/6 backdrop-blur-sm"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base font-semibold leading-6 text-white">
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-white/10 px-5 pb-5 pt-4">
                          <p className="text-sm leading-7 text-white/74">{faq.answer}</p>
                          <Link
                            href={faq.href}
                            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#f1cbb4] transition-colors hover:text-white"
                          >
                            {faq.label}
                            <ArrowRight size={15} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─── EXPLORE CHINA ─── */}
        <ExploreChinaSection />

        {/* ─── FOOTER CTA ─── */}
        <section className="px-4 py-14 md:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <FooterCTA
              title="Bereit, das in eine echte Route zu verwandeln?"
              subtitle="Starte mit einer vorgeplanten Route, wenn du Geschwindigkeit willst, oder nutze den Planer, wenn du bereits weisst, wie lange du hast."
              quickInfo={footerQuickInfo}
              trustText="Kostenlose Guides · Mobile-First Planungshilfe · Für Erstreisende nach China"
            />
          </div>
        </section>
      </main>
    </>
  )
}

/* ─── Explore China Section (inline for simplicity) ─── */
function ExploreChinaSection() {
  const [activeCityKey, setActiveCityKey] = useState('beijing')

  const cities = [
    {
      key: 'beijing',
      name: 'Peking',
      nameZh: '北京',
      href: 'https://www.trailofchina.com/destinations/beijing',
      hook: 'Grosse-Mauer-Morgen, kaiserliche Wahrzeichen und die Hauptstadt in vollem Mass.',
      duration: '3–5 Tage',
      price: 'CHF 80–150/Tag',
      season: 'Mär–Mai, Sep–Nov',
      imageSeed: 'home-v4-beijing',
      popular: false,
    },
    {
      key: 'shanghai',
      name: 'Shanghai',
      nameZh: '上海',
      href: 'https://www.trailofchina.com/destinations/shanghai',
      hook: "Koloniale Gassen, Skyline-Drama und Chinas einfachste erste Ankunft.",
      duration: '3–4 Tage',
      price: 'CHF 80–150/Tag',
      season: 'Mär–Mai, Sep–Nov',
      imageSeed: 'home-v4-shanghai',
      popular: true,
    },
    {
      key: 'xian',
      name: "Xi'an",
      nameZh: '西安',
      href: 'https://www.trailofchina.com/destinations/xian',
      hook: 'Terrakotta-Armee, alte Mauern und ein kompakter, geschichtsschwerer Stop.',
      duration: '2–3 Tage',
      price: 'CHF 50–100/Tag',
      season: 'Mär–Jun, Sep–Nov',
      imageSeed: 'home-v4-xian',
    },
    {
      key: 'chengdu',
      name: 'Chengdu',
      nameZh: '成都',
      href: 'https://www.trailofchina.com/destinations/chengdu',
      hook: 'Pandas, Teehäuser und Essen, das den Umweg wert ist.',
      duration: '2–3 Tage',
      price: 'CHF 50–100/Tag',
      season: 'Mär–Jun, Sep–Nov',
      imageSeed: 'home-v4-chengdu',
    },
    {
      key: 'chongqing',
      name: 'Chongqing',
      nameZh: '重庆',
      href: 'https://www.trailofchina.com/destinations/chongqing',
      hook: 'Geschichtete Hügel, Neon-Nächte und die intensivste Stadtenergie auf dieser Liste.',
      duration: '2–3 Tage',
      price: 'CHF 50–100/Tag',
      season: 'Mär–Mai, Okt–Nov',
      imageSeed: 'home-v4-chongqing',
    },
  ]

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-20">
      <div className="mb-8 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#af5d32]">
          China entdecken
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Unsere Reiseziele</h2>
        <p className="mt-3 text-base leading-7 text-[#1a3a4a]/72">
          7 Ziele, handverlesen für Erstreisende
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cities.map((city) => {
          const isActive = activeCityKey === city.key
          return (
            <Link
              key={city.key}
              href={city.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`block rounded-[1.5rem] border p-3 transition-all ${
                isActive
                  ? 'border-[#af5d32]/35 bg-[#fcfaf6] shadow-[0_16px_36px_rgba(175,93,50,0.12)]'
                  : 'border-[#1a3a4a]/8 bg-white hover:border-[#af5d32]/25'
              }`}
              onMouseEnter={() => setActiveCityKey(city.key)}
            >
              <div className="flex gap-3">
                <img
                  src={`https://picsum.photos/seed/${city.imageSeed}/240/240`}
                  alt={`${city.name} Skyline und Wahrzeichen`}
                  className="h-20 w-20 shrink-0 rounded-2xl object-cover"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-semibold text-[#1a3a4a]">{city.name}</h3>
                        {city.popular ? (
                          <span className="rounded-full bg-[#af5d32]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#af5d32]">
                            Beliebt
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-0.5 text-sm font-medium text-[#af5d32]">{city.nameZh}</p>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-[#af5d32]">
                      Guide lesen
                      <ArrowRight size={13} />
                    </span>
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm leading-5 text-[#1a3a4a]/72">{city.hook}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[#f5f1ea] px-2.5 py-1 text-[11px] font-semibold text-[#1a3a4a]/80">
                      {city.duration}
                    </span>
                    <span className="rounded-full bg-[#f5f1ea] px-2.5 py-1 text-[11px] font-semibold text-[#1a3a4a]/80">
                      {city.price}
                    </span>
                    <span className="rounded-full bg-[#f5f1ea] px-2.5 py-1 text-[11px] font-semibold text-[#1a3a4a]/80">
                      {city.season}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
