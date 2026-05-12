import Breadcrumb from '@/components/Breadcrumb'
import SectionHeader from '@/components/SectionHeader'
import FooterCTA from '@/components/FooterCTA'
import AffiliateCTA from '@/components/AffiliateCTA'

export const metadata = {
  title: 'Reise planen — Routen, Budget & beste Reisezeit',
  description: 'China-Reise planen? Reiserouten, Budget in CHF, beste Reisezeit und praktische Checkliste — alles, was du brauchst.',
  alternates: { canonical: 'https://visitchina.ch/reise-planen' },
}

const routes = [
  {
    name: 'Klassiker: Peking → Xi\'an → Shanghai',
    days: '12–14 Tage',
    budget: '2\'400–3\'200 CHF',
    href: 'https://www.trailofchina.com/itineraries/beijing-xian-shanghai',
    description: 'Der absolute Klassiker für Erstbesucher. Verbotene Stadt, Terrakotta-Armee und Bund in einer Reise.',
  },
  {
    name: 'Süd-Rundreise: Shanghai → Chengdu → Guilin',
    days: '14–16 Tage',
    budget: '2\'600–3\'500 CHF',
    href: 'https://www.trailofchina.com/itineraries/south-china',
    description: 'Pandas, Sichuan-Küche und Karstberge — für die, die das andere China sehen wollen.',
  },
  {
    name: 'Express: Peking & Shanghai',
    days: '7–8 Tage',
    budget: '1\'500–2\'000 CHF',
    href: 'https://www.trailofchina.com/itineraries/beijing-shanghai-express',
    description: 'Kurz und intensiv. Die zwei wichtigsten Städte in einer Woche.',
  },
  {
    name: 'Abenteuer: Südwesten & Yunnan',
    days: '16–18 Tage',
    budget: '2\'800–3\'800 CHF',
    href: 'https://www.trailofchina.com/itineraries/yunnan-adventure',
    description: 'Lijiang, Dali, Tiger Spring Gorge — für Naturliebhaber und Abenteurer.',
  },
]

const budgetItems = [
  { category: 'Flug (Zürich → Peking)', low: '600', high: '1\'200', note: 'Economy, Hin+Rück' },
  { category: 'Unterkunft (pro Nacht)', low: '30', high: '120', note: 'Hostel bis 4*' },
  { category: 'Essen (pro Tag)', low: '15', high: '50', note: 'Strassenessen bis Restaurant' },
  { category: 'Transport (inland)', low: '200', high: '500', note: 'Züge + Metro + DiDi' },
  { category: 'Sehenswürdigkeiten', low: '100', high: '300', note: 'Eintritte & Touren' },
  { category: 'eSIM + VPN', low: '20', high: '50', note: '2 Wochen' },
  { category: 'Visum', low: '0', high: '130', note: 'Schweizer:innen: 0 CHF (visumfrei)' },
]

export default function TripPlanningPage() {
  return (
    <div>
      <div className="container-px mx-auto max-w-4xl py-6">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Reise planen' }]} />
      </div>

      <div className="container-px mx-auto max-w-4xl pb-8">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--foreground)] leading-tight">
          Reise planen
        </h1>
        <p className="mt-4 text-lg text-[var(--muted)]">
          Routen, Budget in CHF, beste Reisezeit und eine Checkliste — alles, was du für deine China-Reise brauchst.
        </p>
      </div>

      {/* Routes */}
      <section className="container-px mx-auto max-w-7xl pb-16">
        <SectionHeader title="Beliebte Reiserouten" seeAllHref="https://www.trailofchina.com/itineraries" seeAllLabel="Alle Routen →" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {routes.map((route) => (
            <a
              key={route.name}
              href={route.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-[#af5d32]/40 hover:-translate-y-0.5"
            >
              <h3 className="font-serif text-lg text-[var(--foreground)] group-hover:text-[#af5d32] transition-colors">
                {route.name}
              </h3>
              <div className="mt-2 flex items-center gap-3 text-sm text-[var(--muted)]">
                <span>📅 {route.days}</span>
                <span>💰 {route.budget}</span>
              </div>
              <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed flex-1">{route.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#af5d32] group-hover:text-[#8f431c] transition-colors">
                Route ansehen →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Budget */}
      <section className="border-t border-[var(--line)] py-16">
        <div className="container-px mx-auto max-w-4xl">
          <SectionHeader title="Budget-Übersicht (in CHF)" />
          <p className="mb-6 text-[var(--muted)]">Alle Preise pro Person, ca.-Werte für 2 Wochen Reise.</p>
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Kategorie</th>
                  <th>Günstig</th>
                  <th>Komfort</th>
                  <th>Hinweis</th>
                </tr>
              </thead>
              <tbody>
                {budgetItems.map((item) => (
                  <tr key={item.category}>
                    <td><strong>{item.category}</strong></td>
                    <td>{item.low} CHF</td>
                    <td>{item.high} CHF</td>
                    <td>{item.note}</td>
                  </tr>
                ))}
                <tr className="bg-[#f5f1ea]">
                  <td><strong>Gesamt (2 Wochen)</strong></td>
                  <td><strong>~1\'800 CHF</strong></td>
                  <td><strong>~3\'200 CHF</strong></td>
                    <td>Ohne Flug</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Best Time */}
      <section className="border-t border-[var(--line)] py-16">
        <div className="container-px mx-auto max-w-4xl">
          <SectionHeader title="Beste Reisezeit" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-[var(--line)] bg-white p-6">
              <h3 className="font-serif text-lg text-[var(--foreground)]">🌸 Frühling (März–Mai)</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">Beste Reisezeit overall. Angenehme Temperaturen, weniger Touristen, Blütezeit.</p>
              <p className="mt-1 text-xs text-[#af5d32] font-medium">Empfehlung: ⭐⭐⭐⭐⭐</p>
            </div>
            <div className="rounded-2xl border border-[var(--line)] bg-white p-6">
              <h3 className="font-serif text-lg text-[var(--foreground)]">🍂 Herbst (Sept–Nov)</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">Ebenfalls top. Klare Luft, goldene Farben, erträgliche Hitze im Süden.</p>
              <p className="mt-1 text-xs text-[#af5d32] font-medium">Empfehlung: ⭐⭐⭐⭐⭐</p>
            </div>
            <div className="rounded-2xl border border-[var(--line)] bg-white p-6">
              <h3 className="font-serif text-lg text-[var(--foreground)]">☀️ Sommer (Juni–Aug)</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">Sehr heiss und schwül. Viele chinesische Touristen (Schulferien).</p>
              <p className="mt-1 text-xs text-[var(--muted)]">Empfehlung: ⭐⭐⭐</p>
            </div>
            <div className="rounded-2xl border border-[var(--line)] bg-white p-6">
              <h3 className="font-serif text-lg text-[var(--foreground)]">❄️ Winter (Dez–Feb)</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">Kalt im Norden, mild im Süden. Wenig Touristen, günstige Preise.</p>
              <p className="mt-1 text-xs text-[var(--muted)]">Empfehlung: ⭐⭐⭐</p>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="border-t border-[var(--line)] py-16">
        <div className="container-px mx-auto max-w-4xl">
          <SectionHeader title="Checkliste: Vor der Abreise" />
          <div className="rounded-2xl border border-[var(--line)] bg-white p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-serif text-lg text-[var(--foreground)] mb-3">📱 Digital</h3>
                <ul className="space-y-2 text-sm text-[var(--muted)]">
                  <li className="flex items-start gap-2"><span className="text-[#af5d32]">✓</span> eSIM gekauft & installiert</li>
                  <li className="flex items-start gap-2"><span className="text-[#af5d32]">✓</span> VPN installiert (auf ALLEN Geräten)</li>
                  <li className="flex items-start gap-2"><span className="text-[#af5d32]">✓</span> Alipay eingerichtet & verifiziert</li>
                  <li className="flex items-start gap-2"><span className="text-[#af5d32]">✓</span> WeChat installiert & verifiziert</li>
                  <li className="flex items-start gap-2"><span className="text-[#af5d32]">✓</span> DiDi App heruntergeladen</li>
                  <li className="flex items-start gap-2"><span className="text-[#af5d32]">✓</span> Offline-Karten heruntergeladen</li>
                  <li className="flex items-start gap-2"><span className="text-[#af5d32]">✓</span> Übersetzungs-App installiert</li>
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-lg text-[var(--foreground)] mb-3">📄 Dokumente</h3>
                <ul className="space-y-2 text-sm text-[var(--muted)]">
                  <li className="flex items-start gap-2"><span className="text-[#af5d32]">✓</span> Schweizer Pass (6+ Monate gültig)</li>
                  <li className="flex items-start gap-2"><span className="text-[#af5d32]">✓</span> Flugtickets (Hin+Rück)</li>
                  <li className="flex items-start gap-2"><span className="text-[#af5d32]">✓</span> Hotelreservierungen (ausgedruckt)</li>
                  <li className="flex items-start gap-2"><span className="text-[#af5d32]">✓</span> Reiseversicherung</li>
                  <li className="flex items-start gap-2"><span className="text-[#af5d32]">✓</span> Kopien aller Dokumente (digital)</li>
                  <li className="flex items-start gap-2"><span className="text-[#af5d32]">✓</span> Kreditkarte (Visa/Mastercard)</li>
                  <li className="flex items-start gap-2"><span className="text-[#af5d32]">✓</span> Notfallkontakte</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AffiliateCTA
        title="eSIM für China"
        description="Der wichtigste erste Schritt: Internet ab der Landung. Hier gehts zum eSIM-Guide."
        href="/china-basics/esim"
        label="Zum eSIM-Guide"
        icon="📶"
        variant="secondary"
      />

      <div className="container-px mx-auto max-w-4xl pb-16">
        <FooterCTA
          title="Bereit für China?"
          subtitle="Alle Basics auf einen Blick — vom Visum bis zum VPN."
          href="/china-basics"
          label="China-Basics starten"
        />
      </div>
    </div>
  )
}