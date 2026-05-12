'use client'

import Link from 'next/link'
import type { CSSProperties } from 'react'

const durationRouteCards = [
  {
    badge: '7 Tage',
    pace: 'Schnelles Tempo',
    route: 'Peking → Xi\'an → Shanghai',
    price: 'Ab 8.000 ¥',
    href: 'https://www.trailofchina.com/plan-your-trip/preplanned-trips/7-day-route',
    image: 'https://picsum.photos/seed/china-route-7day/400/200',
    alt: 'Chinesische Grosse Mauer vor bewölktem Himmel',
  },
  {
    badge: '10 Tage',
    pace: 'Mittleres Tempo',
    route: 'Peking → Xi\'an → Shanghai + Chengdu',
    price: 'Ab 12.000 ¥',
    href: 'https://www.trailofchina.com/plan-your-trip/preplanned-trips/10-day-route',
    image: 'https://picsum.photos/seed/china-route-10day/400/200',
    alt: 'Pandabär in Chengdu',
  },
  {
    badge: '14 Tage',
    pace: 'Entspannt',
    route: 'Peking → Xi\'an → Shanghai + Hangzhou',
    price: 'Ab 16.000 ¥',
    href: 'https://www.trailofchina.com/plan-your-trip/preplanned-trips/14-day-route',
    image: 'https://picsum.photos/seed/china-route-14day/400/200',
    alt: 'Chongqing Skyline bei Nacht über dem Fluss',
  },
] as const

const popularRouteCards = [
  {
    badge: 'Klassiker',
    pace: '10–12 Tage',
    route: 'Peking → Xi\'an → Shanghai',
    price: '¥8.000–15.000',
    href: 'https://www.trailofchina.com/plan-your-trip/beijing-shanghai-xian',
    image: 'https://picsum.photos/seed/china-classic-route/400/200',
    alt: 'Klassische China-Route durch Peking, Xi\'an und Shanghai',
    tag: '#1 Für Erstreisende',
  },
  {
    badge: 'Goldenes Dreieck',
    pace: '7–10 Tage',
    route: 'Shanghai → Suzhou → Hangzhou',
    price: '¥6.000–12.000',
    href: 'https://www.trailofchina.com/plan-your-trip/shanghai-hangzhou-suzhou',
    image: 'https://picsum.photos/seed/china-golden-triangle/400/200',
    alt: 'Goldenes Dreieck durch Shanghai, Suzhou und Hangzhou',
    tag: 'Am entspanntesten',
  },
  {
    badge: 'Südchina',
    pace: '7–10 Tage',
    route: 'Shenzhen → Guangzhou → Hong Kong',
    price: '¥8.000–15.000 + HKD',
    href: 'https://www.trailofchina.com/plan-your-trip/shenzhen-guangzhou-hongkong',
    image: 'https://picsum.photos/seed/china-south/400/200',
    alt: 'Südchina-Route durch Shenzhen, Guangzhou und Hong Kong',
    tag: 'Bestes Essen',
  },
  {
    badge: 'Sichuan-Gewürz',
    pace: '5–7 Tage',
    route: 'Chengdu → Chongqing',
    price: '¥5.000–10.000',
    href: 'https://www.trailofchina.com/plan-your-trip/chengdu-chongqing',
    image: 'https://picsum.photos/seed/china-sichuan/400/200',
    alt: 'Sichuan-Gewürz-Route durch Chengdu und Chongqing',
    tag: 'Bestes Preis-Leistung',
  },
] as const

const tools = [
  {
    icon: '🗓️',
    title: 'Beste Reisezeit',
    decision: 'Starte hier, wenn deine Daten flexibel sind',
    description: 'Nutze Klima, Feiertagskalender und Besucherströme, um zu entscheiden, wann die Reise stattfinden soll.',
    tags: ['🌸 Frühling', '🍂 Herbst', '❄️ Winter'],
    href: 'https://www.trailofchina.com/plan-your-trip/best-time-to-visit',
    image: 'https://picsum.photos/seed/china-seasons/400/200',
    alt: 'Verbotene Stadt in warmem Jahreszeitlicht',
  },
  {
    icon: '💰',
    title: 'Budget-Guide',
    decision: 'Starte hier, wenn das Budget deine Reise bestimmt',
    description: 'Vergleiche Tagesbudgets, Hotels, Essen und Transport, bevor du dich auf die Reisedauer festlegst.',
    tags: ['¥ Budget', '¥¥ Mittelklasse', '¥¥¥ Luxus'],
    href: 'https://www.trailofchina.com/plan-your-trip/budget',
    image: 'https://picsum.photos/seed/china-food-budget/400/200',
    alt: 'Geteilte chinesische Gerichte auf einem Esstisch',
  },
  {
    icon: '🗺️',
    title: 'Vorgeplante Reisen',
    decision: 'Starte hier, wenn du eine bewährte Route willst',
    description: 'Sieh dir fertige Routen an, die bereits Highlights, Transfers und realistisches Tempo ausbalancieren.',
    tags: ['7️⃣ 7 Tage', '🔟 10 Tage', '1️⃣4️⃣ 14 Tage'],
    href: 'https://www.trailofchina.com/plan-your-trip/preplanned-trips',
    image: 'https://picsum.photos/seed/china-train-countryside/400/200',
    alt: 'Hochgeschwindigkeitszug durch die chinesische Landschaft',
  },
  {
    icon: '✍️',
    title: 'Reiseplaner',
    decision: 'Starte hier, wenn du deine Rahmenbedingungen kennst',
    description: 'Plane um deine Städteliste, verfügbare Tage und die Interessen, die du nicht verpassen willst.',
    tags: ['🏙️ Städte', '⏱️ Dauer', '🎯 Interessen'],
    href: 'https://www.trailofchina.com/plan-your-trip/travel-planner',
    image: 'https://picsum.photos/seed/china-planner/400/200',
    alt: 'Shanghai Skyline über dem Fluss',
  },
] as const

export default function ReisePlanenClient() {
  return (
    <main
      className="min-h-screen"
      style={
        {
          '--foreground': '#1a3a4a',
          '--muted': '#5f6f7a',
          '--primary': '#af5d32',
          '--line': '#ebe4d8',
        } as CSSProperties
      }
    >
      <div
        style={{
          background:
            'linear-gradient(0deg, rgba(245,241,234,0.75) 0%, rgba(245,241,234,0.2) 100%), #ffffff',
        }}
      >
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          {/* Header */}
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#af5d32]">Reise planen</p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-[#1a3a4a] sm:text-5xl lg:text-6xl">
              Deine China-Reise beginnt hier
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#5f6f7a]">
              Alles, was du brauchst, um deine erste China-Reise zu planen, zu budgetieren und zu buchen.
            </p>
          </div>

          {/* Duration Routes */}
          <section className="mt-10 overflow-hidden rounded-[2rem] bg-[#1a3a4a] px-5 py-8 text-white shadow-[0_24px_70px_rgba(26,58,74,0.22)] sm:px-8 sm:py-10">
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#f0c9b1]">Routen nach Dauer</p>
                <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Wähle deine Route</h2>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {durationRouteCards.map((route) => (
                  <Link
                    key={route.badge}
                    href={route.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group overflow-hidden rounded-xl border-l-4 border-transparent bg-white text-[#1a3a4a] shadow-[0_16px_36px_rgba(8,19,26,0.22)] transition-all duration-200 hover:-translate-y-1 hover:border-[#af5d32]"
                  >
                    <img src={route.image} alt={route.alt} className="h-32 w-full object-cover" />
                    <div className="p-6">
                      <span className="inline-flex rounded-full bg-[#af5d32] px-3 py-1 text-sm font-semibold text-[#f5f1ea]">
                        {route.badge}
                      </span>
                      <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-[#af5d32]">{route.pace}</p>
                      <p className="mt-3 font-serif text-2xl font-bold leading-tight">{route.route}</p>
                      <p className="mt-4 text-base text-[#5f6f7a]">{route.price}</p>
                    </div>
                  </Link>
                ))}
              </div>

              <Link
                href="https://www.trailofchina.com/plan-your-trip/travel-planner"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 self-start font-semibold text-[#f0c9b1] transition-colors hover:text-white md:min-h-0"
              >
                Oder erstelle deine eigene Route
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </section>

          {/* Popular Routes */}
          <section className="mt-10 overflow-hidden rounded-[2rem] bg-white border border-[#ebe4d8] px-5 py-8 text-[#1a3a4a] shadow-sm sm:px-8 sm:py-10">
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#af5d32]">Beliebte Routen</p>
                <h2 className="mt-3 font-serif text-3xl font-bold">Routen nach Region</h2>
                <p className="mt-2 text-[#5f6f7a]">Tages-für-Tages-Guides für Chinas beliebteste Mehr-Städte-Routen.</p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {popularRouteCards.map((route) => (
                  <Link
                    key={route.badge}
                    href={route.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group overflow-hidden rounded-xl border border-[#ebe4d8] bg-white text-[#1a3a4a] shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#af5d32] hover:shadow-md"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-flex rounded-full bg-[#af5d32] px-3 py-1 text-sm font-semibold text-[#f5f1ea]">
                          {route.badge}
                        </span>
                        <span className="text-xs font-medium text-[#af5d32]">{route.tag}</span>
                      </div>
                      <p className="font-serif text-xl font-bold leading-tight">{route.route}</p>
                      <div className="mt-3 flex items-center gap-4 text-sm text-[#5f6f7a]">
                        <span>{route.pace}</span>
                        <span className="text-[#ebe4d8]">|</span>
                        <span>{route.price}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Tools Grid */}
          <section className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl border border-[#ebe4d8] p-6 shadow-sm transition-colors duration-200 hover:bg-[#fdf8f3]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20"
                  style={{ backgroundImage: `url(${tool.image})` }}
                  role="img"
                  aria-label={tool.alt}
                />
                <div className="absolute inset-0 bg-[rgba(255,255,255,0.88)]" aria-hidden="true" />
                <article>
                  <div className="relative z-10 flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#af5d32] text-xl text-[#f5f1ea] transition-transform duration-200 group-hover:scale-110">
                      {tool.icon}
                    </span>
                    <div>
                      <h2 className="font-serif text-2xl font-bold text-[#1a3a4a]">{tool.title}</h2>
                      <p className="mt-2 text-sm font-medium text-[#af5d32]">{tool.decision}</p>
                    </div>
                  </div>
                  <p className="relative z-10 mt-4 text-base leading-7 text-[#5f6f7a]">{tool.description}</p>
                  <div className="relative z-10 mt-5 flex flex-wrap gap-2">
                    {tool.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-[#f5f1ea] px-3 py-1 text-sm text-[#1a3a4a]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="relative z-10 mt-5 inline-flex items-center gap-2 font-semibold text-[#af5d32]">
                    Entdecken
                    <span aria-hidden="true">→</span>
                  </span>
                </article>
              </Link>
            ))}
          </section>

          {/* Budget Table */}
          <section className="mt-12 rounded-[2rem] border border-[#ebe4d8] bg-white px-5 py-8 sm:px-8 sm:py-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#af5d32]">Budget-Planung</p>
            <h2 className="mt-3 font-serif text-3xl font-bold">Was kostet eine China-Reise?</h2>
            <p className="mt-2 text-[#5f6f7a]">Preisbeispiele pro Person für 2 Wochen (ohne Flug).</p>
            <div className="mt-6 overflow-x-auto">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Kategorie</th>
                    <th>Budget</th>
                    <th>Komfort</th>
                    <th>Hinweis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Flug (Zürich ↔ China)</strong></td>
                    <td>600 CHF</td>
                    <td>1.200 CHF</td>
                    <td>Economy, Hin + Rück</td>
                  </tr>
                  <tr>
                    <td><strong>Unterkunft / Nacht</strong></td>
                    <td>30 CHF</td>
                    <td>120 CHF</td>
                    <td>Hostel bis 4-Sterne</td>
                  </tr>
                  <tr>
                    <td><strong>Essen / Tag</strong></td>
                    <td>15 CHF</td>
                    <td>50 CHF</td>
                    <td>Strassenküche bis Restaurant</td>
                  </tr>
                  <tr>
                    <td><strong>Transport (Inland)</strong></td>
                    <td>200 CHF</td>
                    <td>500 CHF</td>
                    <td>Züge + Metro + DiDi</td>
                  </tr>
                  <tr>
                    <td><strong>Sehenswürdigkeiten</strong></td>
                    <td>100 CHF</td>
                    <td>300 CHF</td>
                    <td>Eintritte & Touren</td>
                  </tr>
                  <tr>
                    <td><strong>eSIM + VPN</strong></td>
                    <td>20 CHF</td>
                    <td>50 CHF</td>
                    <td>2 Wochen</td>
                  </tr>
                  <tr>
                    <td><strong>Visum</strong></td>
                    <td>0 CHF</td>
                    <td>130 CHF</td>
                    <td>Schweizer: visumfrei (30 Tage)</td>
                  </tr>
                  <tr className="bg-[#f5f1ea]">
                    <td><strong>Gesamt (2 Wochen, ohne Flug)</strong></td>
                    <td><strong>~1.800 CHF</strong></td>
                    <td><strong>~3.200 CHF</strong></td>
                    <td>Pro Person</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <blockquote className="mt-12 rounded-r-lg border-l-4 border-[#af5d32] bg-[#fdf8f3] p-6 text-base leading-7 text-[#1a3a4a]">
            <p>💡 Erstmalig in China? Starte mit einer vorgeplanten 7-Tage-Route und passe sie nach Bedarf an.</p>
          </blockquote>
        </div>
      </div>
    </main>
  )
}
