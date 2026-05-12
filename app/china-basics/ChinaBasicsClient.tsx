'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Search,
  CreditCard,
  Wifi,
  Plane,
  Shield,
  Train,
  Smartphone,
  MapPin,
  Lightbulb,
  Languages,
  Banknote,
  Utensils,
} from 'lucide-react'
import PhotoCard from '@/components/PhotoCard'
import FooterCTA from '@/components/FooterCTA'
import CookieConsent from '@/components/CookieConsent'

/* ─── Types ─── */
type Category = 'overview' | 'prep' | 'apps' | 'transport' | 'tips'

interface SectionItem {
  title: string
  items: Item[]
}

interface Item {
  id: string
  label: string
  description: string
  icon: React.ElementType
  href: string
  tags?: string[]
}

/* ─── Tabs ─── */
const TABS: { key: Category; label: string }[] = [
  { key: 'overview', label: 'Übersicht' },
  { key: 'prep', label: 'Vorbereitung' },
  { key: 'apps', label: 'Apps & Geld' },
  { key: 'transport', label: 'Transport' },
  { key: 'tips', label: 'Wissenswertes' },
]

/* ─── Topic chips ─── */
const TOPIC_CHIPS = [
  'Visum',
  'eSIM',
  'VPN',
  'Alipay',
  'WeChat Pay',
  'Züge',
  'Flüge',
  'Metro',
  'DiDi',
  'Sicherheit',
  'Sprache',
  'Essen',
  'Geld',
]

/* ─── Search helpers ─── */
function normalize(s: string) {
  return s.toLowerCase().replace(/\s+/g, ' ').trim()
}

function matches(item: Item, q: string) {
  return (
    normalize(item.label).includes(q) ||
    normalize(item.description).includes(q) ||
    item.tags?.some((t) => normalize(t).includes(q))
  )
}

/* ─── Sections ─── */
const sections: Record<Category, SectionItem[]> = {
  overview: [
    {
      title: 'Schnellstart',
      items: [
        {
          id: 'visa-free',
          label: '30 Tage visumfrei',
          description: 'Schweizer:innen können bis zu 30 Tage ohne Visum nach China reisen. Alle Details zur Einreise, Gültigkeit und Verlängerung.',
          icon: Plane,
          href: '/china-basics/visa',
          tags: ['Visum', 'Einreise'],
        },
        {
          id: 'internet',
          label: 'Internet in China',
          description: 'eSIM, lokale SIM oder Roaming? Vergleiche die Optionen und finde die beste Lösung für deinen Trip.',
          icon: Wifi,
          href: '/china-basics/esim',
          tags: ['eSIM', 'VPN', 'Internet'],
        },
        {
          id: 'payment',
          label: 'Bezahlen in China',
          description: 'Alipay, WeChat Pay, Kreditkarte oder Bargeld? So zahlst du überall — von der Strassenküche bis zur Metro.',
          icon: CreditCard,
          href: '/china-basics/bezahlung',
          tags: ['Alipay', 'WeChat Pay', 'Geld'],
        },
        {
          id: 'apps',
          label: 'Apps du brauchst',
          description: 'Die wichtigsten Apps für China: Maps, Übersetzung, Messaging, DiDi und mehr — alles vorab installieren.',
          icon: Smartphone,
          href: '/china-basics',
          tags: ['Apps', 'DiDi', 'Maps'],
        },
      ],
    },
  ],
  prep: [
    {
      title: 'Visum & Einreise',
      items: [
        {
          id: 'visa',
          label: 'Visum-Guide',
          description: 'Schweizer:innen sind visumfrei (30 Tage). Alle Einreisebestimmungen, Gültigkeit und Verlängerung.',
          icon: Plane,
          href: '/china-basics/visa',
          tags: ['Visum', 'Einreise'],
        },
        {
          id: 'documents',
          label: 'Dokumente & Checkliste',
          description: 'Was du brauchst: Reisepass, Kopien, Versicherung, Einladungsschreiben und mehr.',
          icon: Shield,
          href: '/china-basics/visa',
          tags: ['Dokumente', 'Checkliste'],
        },
      ],
    },
    {
      title: 'Internet & Kommunikation',
      items: [
        {
          id: 'esim',
          label: 'eSIM für China',
          description: 'Vergleich der besten eSIM-Anbieter für China. Airalo, Holafly, Maya Mobile — Preise, Netze, Setup.',
          icon: Wifi,
          href: '/china-basics/esim',
          tags: ['eSIM', 'Internet'],
        },
        {
          id: 'vpn',
          label: 'VPN in China',
          description: 'Ohne VPN funktionieren Google, WhatsApp und Instagram nicht. Die besten VPNs für China im Test.',
          icon: Shield,
          href: '/china-basics/vpn',
          tags: ['VPN', 'Internet'],
        },
        {
          id: 'messaging',
          label: 'WeChat & Messaging',
          description: 'WeChat ist das WhatsApp Chinas. So richtest du es ein, verifizierst und nutzt es für Bezahlungen.',
          icon: Smartphone,
          href: '/china-basics',
          tags: ['WeChat', 'Apps'],
        },
      ],
    },
    {
      title: 'Zahlung & Geld',
      items: [
        {
          id: 'alipay',
          label: 'Alipay einrichten',
          description: 'Die wichtigste Zahlungs-App für China. Registrierung, Verifizierung, Aufladen und Bezahlen — Schritt für Schritt.',
          icon: CreditCard,
          href: '/china-basics/bezahlung',
          tags: ['Alipay', 'Zahlung'],
        },
        {
          id: 'wechat-pay',
          label: 'WeChat Pay',
          description: 'Alternative zu Alipay. Wie du WeChat Pay für Fremde einrichtest und nutzt.',
          icon: CreditCard,
          href: '/china-basics/bezahlung',
          tags: ['WeChat Pay', 'Zahlung'],
        },
        {
          id: 'cash',
          label: 'Bargeld & Kreditkarte',
          description: 'Wann funktionieren Kreditkarten? Wo brauchst du Bargeld? Die wichtigsten Tipps zum Geld in China.',
          icon: Banknote,
          href: '/china-basics/bezahlung',
          tags: ['Geld', 'Kreditkarte', 'Bargeld'],
        },
      ],
    },
  ],
  apps: [
    {
      title: 'Zahlungs-Apps',
      items: [
        {
          id: 'alipay-setup',
          label: 'Alipay',
          description: 'Scan, Bezahlen, Metro-Tickets, Fahrräder — alles mit einer App. Die komplette Einrichtung.',
          icon: CreditCard,
          href: '/china-basics/bezahlung',
          tags: ['Alipay'],
        },
        {
          id: 'wechat-pay-setup',
          label: 'WeChat Pay',
          description: 'Teilen, Bezahlen, Buchen — Chinas Super-App. So nutzt du sie als Tourist.',
          icon: Smartphone,
          href: '/china-basics/bezahlung',
          tags: ['WeChat Pay'],
        },
      ],
    },
    {
      title: 'Transport-Apps',
      items: [
        {
          id: 'didi',
          label: 'DiDi (Uber Chinas)',
          description: 'So richtest du DiDi ein, bestellst Fahrten und bezahlst automatisch — auch ohne Chinesisch.',
          icon: MapPin,
          href: '/china-basics',
          tags: ['DiDi', 'Transport'],
        },
        {
          id: 'metro',
          label: 'Metro & ÖV',
          description: 'Metro-Apps, QR-Codes und Karten für die wichtigsten Städte. So fährst du wie ein Einheimischer.',
          icon: Train,
          href: '/china-basics',
          tags: ['Metro', 'Züge'],
        },
        {
          id: 'maps',
          label: 'Maps & Navigation',
          description: 'Google Maps funktioniert nicht. Amap, Baidu Maps und Apple Maps im Vergleich.',
          icon: MapPin,
          href: '/china-basics',
          tags: ['Maps', 'Navigation'],
        },
      ],
    },
    {
      title: 'Kommunikation',
      items: [
        {
          id: 'wechat-chat',
          label: 'WeChat',
          description: 'Der Standard für Messaging in China. Gruppen, Bezahlung, Mini-Programme — alles in einer App.',
          icon: Smartphone,
          href: '/china-basics',
          tags: ['WeChat', 'Messaging'],
        },
        {
          id: 'translate',
          label: 'Übersetzung',
          description: 'Pleco, Google Translate (mit VPN), DeepL und mehr — die besten Übersetzer für China.',
          icon: Languages,
          href: '/china-basics',
          tags: ['Sprache', 'Übersetzung'],
        },
      ],
    },
  ],
  transport: [
    {
      title: 'Züge',
      items: [
        {
          id: 'train-guide',
          label: 'Zug-Guide',
          description: 'Hochgeschwindigkeitszüge, Nachtzüge, Buchung und Stationen. Alles, was du für Bahnreisen in China brauchst.',
          icon: Train,
          href: '/china-basics/zuege',
          tags: ['Züge', 'Hochgeschwindigkeitszug'],
        },
        {
          id: 'train-booking',
          label: 'Züge buchen',
          description: '12306, Trip.com oder am Schalter? So buchst du Zugtickets als Ausländer — Schritt für Schritt.',
          icon: Train,
          href: '/china-basics/zuege',
          tags: ['Züge', 'Buchung'],
        },
      ],
    },
    {
      title: 'Inlandsflüge',
      items: [
        {
          id: 'flights',
          label: 'Inlandsflüge',
          description: 'Wann lohnt sich ein Flug statt dem Zug? Die wichtigsten Strecken, Airlines und Buchungstipps.',
          icon: Plane,
          href: '/china-basics',
          tags: ['Flüge'],
        },
      ],
    },
    {
      title: 'Lokal Transport',
      items: [
        {
          id: 'metro-local',
          label: 'Metro & Bus',
          description: 'Metro-Apps, QR-Zahlung und Stationsführung für Peking, Shanghai, Xi\'an und mehr.',
          icon: Train,
          href: '/china-basics',
          tags: ['Metro', 'Bus'],
        },
        {
          id: 'taxi',
          label: 'Taxi & DiDi',
          description: 'So bestellst und bezahlst du Fahrten mit DiDi — Chinas Antwort auf Uber.',
          icon: MapPin,
          href: '/china-basics',
          tags: ['DiDi', 'Taxi'],
        },
      ],
    },
  ],
  tips: [
    {
      title: 'Sicherheit',
      items: [
        {
          id: 'safety',
          label: 'Sicherheit in China',
          description: 'China ist eines der sichersten Reiseländer. Was du wissen solltest: Taschendiebe, Verkehr und Notrufnummern.',
          icon: Shield,
          href: '/china-basics/sicherheit',
          tags: ['Sicherheit'],
        },
        {
          id: 'scams',
          label: 'Betrug vermeiden',
          description: 'Die häufigsten Touristenfallen in China und wie du sie erkennst und umgehst.',
          icon: Lightbulb,
          href: '/china-basics/sicherheit',
          tags: ['Sicherheit', 'Betrug'],
        },
      ],
    },
    {
      title: 'Kultur & Essen',
      items: [
        {
          id: 'food',
          label: 'Chinesisches Essen',
          description: 'Von Peking-Ente bis Sichuan-Hotpot: Was du probieren solltest und wie du bestellst — auch ohne Chinesisch.',
          icon: Utensils,
          href: '/china-basics',
          tags: ['Essen', 'Kultur'],
        },
        {
          id: 'language',
          label: 'Sprache & Kommunikation',
          description: 'Chinesisch lernen? Nicht nötig. Mit diesen Tricks kommst du auch ohne Sprachkenntnisse durch.',
          icon: Languages,
          href: '/china-basics',
          tags: ['Sprache', 'Kommunikation'],
        },
      ],
    },
    {
      title: 'Praktische Tipps',
      items: [
        {
          id: 'vpn-setup',
          label: 'VPN einrichten',
          description: 'Google, WhatsApp, Instagram — ohne VPN geht nichts. So richtest du ein VPN vor der Abreise ein.',
          icon: Shield,
          href: '/china-basics/vpn',
          tags: ['VPN', 'Internet'],
        },
        {
          id: 'sim-setup',
          label: 'eSIM einrichten',
          description: 'Kaufe und installiere deine eSIM vor der Abreise. So bist du ab der Landung online.',
          icon: Wifi,
          href: '/china-basics/esim',
          tags: ['eSIM', 'Internet'],
        },
      ],
    },
  ],
}

/* ─── Quick info pills ─── */
const quickInfo = [
  { icon: '🛡️', text: 'Schweizer:innen: 30 Tage visumfrei' },
  { icon: '📶', text: 'eSIM vor Abreise kaufen' },
  { icon: '💳', text: 'Alipay vor Ankunft einrichten' },
  { icon: '🚄', text: 'Zugtickets früh buchen' },
  { icon: '🔒', text: 'VPN vor Abreise installieren' },
  { icon: '📱', text: 'WeChat vor Ankunft registrieren' },
]

/* ─── PhotoCards for each tab ─── */
const tabPhotoCards: Record<Category, { href: string; image: string; icon: React.ElementType; name: string; subtitle: string; chips?: string[] }[]> = {
  overview: [
    { href: '/china-basics/visa', image: 'https://picsum.photos/seed/china-visa/400/200', icon: Plane, name: 'Visum-Guide', subtitle: '30 Tage visumfrei für Schweizer:innen — alle Details', chips: ['Visum', 'Einreise'] },
    { href: '/china-basics/esim', image: 'https://picsum.photos/seed/china-esim/400/200', icon: Wifi, name: 'eSIM für China', subtitle: 'Internet ab der Landung — Vergleich & Setup', chips: ['eSIM', 'Internet'] },
    { href: '/china-basics/bezahlung', image: 'https://picsum.photos/seed/china-payment/400/200', icon: CreditCard, name: 'Bezahlen', subtitle: 'Alipay, WeChat Pay, Karte & Bargeld', chips: ['Alipay', 'WeChat Pay'] },
    { href: '/china-basics/zuege', image: 'https://picsum.photos/seed/china-train/400/200', icon: Train, name: 'Zug-Guide', subtitle: 'Hochgeschwindigkeitszüge buchen & fahren', chips: ['Züge', 'Buchung'] },
  ],
  prep: [
    { href: '/china-basics/visa', image: 'https://picsum.photos/seed/china-passport/400/200', icon: Plane, name: 'Visum & Einreise', subtitle: 'Alle Einreisebestimmungen für Schweizer:innen', chips: ['Visum', '30 Tage'] },
    { href: '/china-basics/esim', image: 'https://picsum.photos/seed/china-internet/400/200', icon: Wifi, name: 'Internet-Setup', subtitle: 'eSIM, Roaming oder lokale SIM — was passt?', chips: ['eSIM', 'VPN'] },
    { href: '/china-basics/vpn', image: 'https://picsum.photos/seed/china-vpn/400/200', icon: Shield, name: 'VPN', subtitle: 'Google, WhatsApp, Instagram — ohne VPN geht nichts', chips: ['VPN', 'Sicherheit'] },
    { href: '/china-basics/bezahlung', image: 'https://picsum.photos/seed/china-money/400/200', icon: CreditCard, name: 'Zahlung', subtitle: 'Alipay, WeChat Pay und Bargeld im Überblick', chips: ['Alipay', 'Geld'] },
  ],
  apps: [
    { href: '/china-basics/bezahlung', image: 'https://picsum.photos/seed/china-alipay/400/200', icon: CreditCard, name: 'Alipay', subtitle: 'Chinas wichtigste Zahlungs-App einrichten', chips: ['Alipay', 'Zahlung'] },
    { href: '/china-basics/bezahlung', image: 'https://picsum.photos/seed/china-wechat/400/200', icon: Smartphone, name: 'WeChat Pay', subtitle: 'Die Super-App für Bezahlung und Messaging', chips: ['WeChat', 'Pay'] },
    { href: '/china-basics', image: 'https://picsum.photos/seed/china-apps/400/200', icon: MapPin, name: 'DiDi & Maps', subtitle: 'Fahren und Navigieren wie ein Einheimischer', chips: ['DiDi', 'Maps'] },
    { href: '/china-basics', image: 'https://picsum.photos/seed/china-translate/400/200', icon: Languages, name: 'Übersetzung', subtitle: 'Die besten Übersetzer-Apps für China', chips: ['Sprache', 'Übersetzung'] },
  ],
  transport: [
    { href: '/china-basics/zuege', image: 'https://picsum.photos/seed/china-hsr/400/200', icon: Train, name: 'Hochgeschwindigkeitszüge', subtitle: 'Die beste Art, China zu erleben — bequem und schnell', chips: ['Züge', 'Buchung'] },
    { href: '/china-basics', image: 'https://picsum.photos/seed/china-metro/400/200', icon: Train, name: 'Metro', subtitle: 'QR-Code rein, QR-Code raus — so einfach ist Metro fahren', chips: ['Metro', 'ÖV'] },
    { href: '/china-basics', image: 'https://picsum.photos/seed/china-didi/400/200', icon: MapPin, name: 'DiDi', subtitle: 'Chinas Uber — so bestellst und bezahlst du Fahrten', chips: ['DiDi', 'Taxi'] },
    { href: '/china-basics', image: 'https://picsum.photos/seed/china-flight/400/200', icon: Plane, name: 'Inlandsflüge', subtitle: 'Wann lohnt sich ein Flug statt dem Zug?', chips: ['Flüge', 'Transport'] },
  ],
  tips: [
    { href: '/china-basics/sicherheit', image: 'https://picsum.photos/seed/china-safe/400/200', icon: Shield, name: 'Sicherheit', subtitle: 'China ist sicher — aber das solltest du wissen', chips: ['Sicherheit'] },
    { href: '/china-basics', image: 'https://picsum.photos/seed/china-food/400/200', icon: Utensils, name: 'Essen', subtitle: 'Von Strassenküche bis Fine Dining — so isst du wie ein Local', chips: ['Essen', 'Kultur'] },
    { href: '/china-basics', image: 'https://picsum.photos/seed/china-language/400/200', icon: Languages, name: 'Sprache', subtitle: 'Ohne Chinesisch durch China — die besten Tricks', chips: ['Sprache'] },
    { href: '/china-basics/sicherheit', image: 'https://picsum.photos/seed/china-scams/400/200', icon: Lightbulb, name: 'Betrug vermeiden', subtitle: 'Häufige Fallen und wie du sie erkennst', chips: ['Sicherheit', 'Betrug'] },
  ],
}

/* ─── Component ─── */
export default function ChinaBasicsClient() {
  const [activeTab, setActiveTab] = useState<Category>('overview')
  const [search, setSearch] = useState('')
  const [activeChips, setActiveChips] = useState<string[]>([])

  const toggleChip = (chip: string) => {
    setActiveChips((prev) =>
      prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]
    )
  }

  const allItems = useMemo(() => {
    const flat: { section: string; item: Item }[] = []
    sections[activeTab].forEach((sec) =>
      sec.items.forEach((item) => flat.push({ section: sec.title, item }))
    )
    return flat
  }, [activeTab])

  const filteredItems = useMemo(() => {
    const q = normalize(search)
    let items = allItems
    if (q) {
      items = items.filter(({ item }) => matches(item, q))
    }
    if (activeChips.length > 0) {
      items = items.filter(({ item }) =>
        activeChips.some((chip) => item.tags?.includes(chip))
      )
    }
    return items
  }, [allItems, search, activeChips])

  return (
    <main className="min-h-screen bg-[#f5f1ea] text-[#1a3a4a]">
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(0deg, rgba(245,241,234,0.75) 0%, rgba(245,241,234,0.2) 100%), #ffffff',
        }}
      >
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#af5d32]">
              China-Basics
            </p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-[#1a3a4a] sm:text-5xl lg:text-6xl">
              Alles, was du vor der Reise wissen musst
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5f6f7a]">
              Visum, Internet, Bezahlung, Züge, Apps — die Grundlagen für deine erste China-Reise, verständlich erklärt.
            </p>
          </div>

          {/* Quick info pills */}
          <div className="mb-8 flex flex-wrap gap-2">
            {quickInfo.map((info) => (
              <span
                key={info.text}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#ebe4d8] bg-white px-3.5 py-1.5 text-sm text-[#1a3a4a] shadow-sm"
              >
                {info.icon} {info.text}
              </span>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#5f6f7a]" size={18} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Suche nach Visum, eSIM, Alipay, Züge..."
              className="w-full rounded-2xl border border-[#ebe4d8] bg-white py-3.5 pl-11 pr-4 text-sm text-[#1a3a4a] shadow-sm outline-none transition-colors focus:border-[#af5d32] placeholder:text-[#5f6f7a]/60"
            />
          </div>
        </div>
      </section>

      {/* ─── Tab Bar ─── */}
      <div className="sticky top-[72px] z-30 border-b border-[#ebe4d8] bg-[#f5f1ea]/90 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <nav className="flex gap-1 overflow-x-auto scrollbar-hide py-2">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  activeTab === tab.key
                    ? 'bg-[#1a3a4a] text-white'
                    : 'text-[#1a3a4a] hover:bg-[#1a3a4a]/8'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* ─── Content ─── */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        {/* Topic chips */}
        <div className="mb-8 flex flex-wrap gap-2">
          {TOPIC_CHIPS.map((chip) => {
            const active = activeChips.includes(chip)
            return (
              <button
                key={chip}
                onClick={() => toggleChip(chip)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  active
                    ? 'bg-[#af5d32] text-white'
                    : 'border border-[#ebe4d8] bg-white text-[#5f6f7a] hover:border-[#af5d32] hover:text-[#af5d32]'
                }`}
              >
                {chip}
              </button>
            )
          })}
        </div>

        {/* PhotoCards for current tab */}
        {filteredItems.length === 0 && !search && activeChips.length === 0 && (
          <div className="mb-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {tabPhotoCards[activeTab].map((card) => (
              <PhotoCard
                key={card.name}
                href={card.href}
                image={card.image}
                icon={card.icon}
                name={card.name}
                subtitle={card.subtitle}
                chips={card.chips}
              />
            ))}
          </div>
        )}

        {/* Sectioned list */}
        {search || activeChips.length > 0 ? (
          <div className="space-y-8">
            {filteredItems.length === 0 ? (
              <div className="rounded-2xl border border-[#ebe4d8] bg-white p-8 text-center">
                <p className="text-[#5f6f7a]">Keine Ergebnisse für deine Suche.</p>
                <button
                  onClick={() => { setSearch(''); setActiveChips([]) }}
                  className="mt-3 text-sm font-semibold text-[#af5d32] hover:underline"
                >
                  Suche zurücksetzen
                </button>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredItems.map(({ item }) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      className="group flex items-start gap-4 rounded-2xl border border-[#ebe4d8] bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#af5d32]/40 hover:shadow-md"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#af5d32]/10 text-[#af5d32]">
                        <Icon size={20} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-[#1a3a4a] group-hover:text-[#af5d32] transition-colors">
                          {item.label}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-[#5f6f7a]">{item.description}</p>
                        {item.tags && (
                          <div className="mt-2 flex flex-wrap gap-1">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full bg-[#f5f1ea] px-2 py-0.5 text-[11px] text-[#5f6f7a]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        ) : (
          sections[activeTab].map((section) => (
            <div key={section.title} className="mb-10">
              {/* Section header with terracotta accent bar */}
              <div className="mb-5 flex items-center gap-3">
                <div className="h-6 w-1 rounded-full bg-[#af5d32]" />
                <h2 className="text-xl font-bold text-[#1a3a4a]">{section.title}</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      className="group flex items-start gap-4 rounded-2xl border border-[#ebe4d8] bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#af5d32]/40 hover:shadow-md"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#af5d32]/10 text-[#af5d32]">
                        <Icon size={20} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-[#1a3a4a] group-hover:text-[#af5d32] transition-colors">
                          {item.label}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-[#5f6f7a]">{item.description}</p>
                        {item.tags && (
                          <div className="mt-2 flex flex-wrap gap-1">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full bg-[#f5f1ea] px-2 py-0.5 text-[11px] text-[#5f6f7a]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          ))
        )}
      </section>

      {/* ─── Footer CTA ─── */}
      <section className="px-4 py-14 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <FooterCTA
            title="Bereit, Städte zu entdecken?"
            subtitle="7 handverlesene Reiseziele mit Guides, Karten und Tipps für Erstreisende."
            trustText="Kostenlos · Ohne Anmeldung · Aktualisiert 2026"
          />
        </div>
      </section>

      <CookieConsent />
    </main>
  )
}
