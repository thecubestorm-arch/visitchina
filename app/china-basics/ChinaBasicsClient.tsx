'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Wifi,
  CreditCard,
  TrainFront,
  Smartphone,
  ShieldCheck,
  Lightbulb,
  Map,
  Car,
  ArrowRight,
  Search,
  X,
  SlidersHorizontal,
} from 'lucide-react'

import FooterCTA from '@/components/FooterCTA'

// ─── Types ────────────────────────────────────────────────────────

type Tab = 'overview' | 'prepare' | 'apps-money' | 'getting-around' | 'know-before'
type FilterCategory = 'all' | 'prepare' | 'apps-money' | 'getting-around' | 'know-before'

interface BasicsItem {
  name: string
  subtitle: string
  href: string
  icon: React.ElementType
  imageSeed: string
  category: FilterCategory
  topics: string[]
}

// ─── Data ───────────────────────────────────────────────────────

const tabs = [
  { id: 'overview' as Tab, label: 'Übersicht', mobileLabel: 'Übersicht' },
  { id: 'prepare' as Tab, label: 'Vorbereitung', mobileLabel: 'Vorbereitung' },
  { id: 'apps-money' as Tab, label: 'Apps & Geld', mobileLabel: 'Apps' },
  { id: 'getting-around' as Tab, label: 'Transport', mobileLabel: 'Transport' },
  { id: 'know-before' as Tab, label: 'Wissenswertes', mobileLabel: 'Tipps' },
]

const quickInfoPills = [
  { icon: Wifi, label: '', text: 'VPN nötig' },
  { icon: CreditCard, label: '', text: 'Bargeldlos' },
  { icon: ShieldCheck, label: '', text: '15–30 Tage visumfrei' },
  { icon: Smartphone, label: '', text: 'Apps vor dem Abflug laden' },
]

const prepareItems: BasicsItem[] = [
  {
    name: 'Visum-Guide',
    subtitle: 'Die meisten westlichen Nationalitäten: 15–30 Tage visumfrei oder E-Visum.',
    href: '/china-basics/visa',
    icon: ShieldCheck,
    imageSeed: 'china-visa-passport',
    category: 'prepare',
    topics: ['Visum', 'Packen'],
  },
  {
    name: 'eSIM & Internet',
    subtitle: 'Ohne Internet funktioniert in China nichts. Richte die eSIM vor dem Abflug ein.',
    href: '/china-basics/esim',
    icon: Wifi,
    imageSeed: 'china-esim-phone',
    category: 'prepare',
    topics: ['eSIM', 'VPN'],
  },
  {
    name: 'VPN',
    subtitle: 'Google, WhatsApp, Instagram sind blockiert. Installiere VPN vor der Landung.',
    href: '/china-basics/vpn',
    icon: Smartphone,
    imageSeed: 'china-vpn-laptop',
    category: 'prepare',
    topics: ['VPN'],
  },
  {
    name: 'Airalo eSIM',
    subtitle: 'Beste Wahl für kurze Reisen. In 5 Minuten aktiviert.',
    href: '/china-basics/esim',
    icon: Wifi,
    imageSeed: 'china-airalo-esim',
    category: 'prepare',
    topics: ['eSIM'],
  },
  {
    name: 'Holafly eSIM',
    subtitle: 'Unbegrenzte Datenpakete für 7–30 Tage.',
    href: '/china-basics/esim',
    icon: Wifi,
    imageSeed: 'china-holafly-esim',
    category: 'prepare',
    topics: ['eSIM'],
  },
]

const appsMoneyItems: BasicsItem[] = [
  {
    name: 'Alipay',
    subtitle: 'Deine Geldbörse für alles. Bezahlen, fahren, bestellen.',
    href: '/china-basics/bezahlung',
    icon: CreditCard,
    imageSeed: 'china-alipay-payment',
    category: 'apps-money',
    topics: ['Alipay', 'WeChat Pay'],
  },
  {
    name: 'WeChat Pay',
    subtitle: 'Die andere Zahlungs-App. Richte beide ein.',
    href: '/china-basics/bezahlung',
    icon: CreditCard,
    imageSeed: 'china-wechat-qr',
    category: 'apps-money',
    topics: ['WeChat Pay', 'Alipay'],
  },
  {
    name: 'Zahlungs-Übersicht',
    subtitle: 'Bargeldlos: So bezahlst du als Ausländer.',
    href: '/china-basics/bezahlung',
    icon: CreditCard,
    imageSeed: 'china-payment-cashless',
    category: 'apps-money',
    topics: ['Alipay', 'WeChat Pay'],
  },
  {
    name: 'Karten',
    subtitle: 'Google Maps funktioniert nicht. Nutze Amap oder Apple Maps.',
    href: '/china-basics',
    icon: Map,
    imageSeed: 'china-maps-navigation',
    category: 'apps-money',
    topics: [],
  },
  {
    name: 'DiDi',
    subtitle: 'Chinas Uber. Englische Oberfläche verfügbar.',
    href: '/china-basics',
    icon: Car,
    imageSeed: 'china-didi-taxi',
    category: 'apps-money',
    topics: ['DiDi', 'Metro'],
  },
  {
    name: 'Trip.com',
    subtitle: 'Züge, Flüge, Hotels — alles in einer App.',
    href: '/china-basics',
    icon: TrainFront,
    imageSeed: 'china-trip-booking',
    category: 'apps-money',
    topics: ['Züge', 'Hochgeschwindigkeitszug'],
  },
  {
    name: 'WeChat',
    subtitle: 'Kommunikations-App. Jeder in China nutzt sie.',
    href: '/china-basics',
    icon: Smartphone,
    imageSeed: 'china-wechat-chat',
    category: 'apps-money',
    topics: ['WeChat Pay'],
  },
]

const gettingAroundItems: BasicsItem[] = [
  {
    name: 'Zugtickets (12306)',
    subtitle: 'Hochgeschwindigkeitszug-Tickets buchen. Die offizielle Plattform.',
    href: '/china-basics/zuege',
    icon: TrainFront,
    imageSeed: 'china-train-station',
    category: 'getting-around',
    topics: ['Züge', 'Hochgeschwindigkeitszug'],
  },
  {
    name: 'Transport-Übersicht',
    subtitle: 'Metro, Taxi, DiDi, Bus — wie China sich bewegt.',
    href: '/china-basics/zuege',
    icon: TrainFront,
    imageSeed: 'china-transport-overview',
    category: 'getting-around',
    topics: ['Metro', 'DiDi', 'Hochgeschwindigkeitszug'],
  },
  {
    name: 'Hochgeschwindigkeitszug',
    subtitle: '300+ km/h Schnellzüge zwischen den Städten.',
    href: '/china-basics/zuege',
    icon: TrainFront,
    imageSeed: 'china-bullet-train',
    category: 'getting-around',
    topics: ['Hochgeschwindigkeitszug', 'Züge'],
  },
  {
    name: 'Flüge',
    subtitle: 'Inlandsflüge für längere Distanzen.',
    href: '/china-basics',
    icon: TrainFront,
    imageSeed: 'china-airplane',
    category: 'getting-around',
    topics: [],
  },
  {
    name: 'Metro',
    subtitle: 'Hervorragende U-Bahn-Systeme in den Grossstädten.',
    href: '/china-basics/zuege',
    icon: TrainFront,
    imageSeed: 'china-metro-subway',
    category: 'getting-around',
    topics: ['Metro'],
  },
]

const knowBeforeItems: BasicsItem[] = [
  {
    name: 'Zensur',
    subtitle: 'Was blockiert ist und wie du dich vorbereitest.',
    href: '/china-basics/vpn',
    icon: ShieldCheck,
    imageSeed: 'china-great-firewall',
    category: 'know-before',
    topics: ['VPN', 'Sicherheit'],
  },
  {
    name: 'Kulturelle Unterschiede',
    subtitle: 'Verhalten, Etikette und Gewohnheiten, die vom Westen abweichen.',
    href: '/china-basics',
    icon: Lightbulb,
    imageSeed: 'china-culture-tea',
    category: 'know-before',
    topics: ['Sicherheit'],
  },
  {
    name: 'Sicherheit',
    subtitle: 'Ist China sicher? Kurze Antwort: sehr.',
    href: '/china-basics/sicherheit',
    icon: ShieldCheck,
    imageSeed: 'china-safe-street',
    category: 'know-before',
    topics: ['Sicherheit'],
  },
  {
    name: 'Passregeln',
    subtitle: 'Immer den Pass dabei haben. Hotels und Züge verlangen ihn.',
    href: '/china-basics/visa',
    icon: ShieldCheck,
    imageSeed: 'china-passport-rules',
    category: 'know-before',
    topics: ['Visum', 'Sicherheit'],
  },
]

const allItems: BasicsItem[] = [
  ...prepareItems,
  ...appsMoneyItems,
  ...gettingAroundItems,
  ...knowBeforeItems,
]

const topicChips = [
  'Alle',
  'Alipay',
  'WeChat Pay',
  'VPN',
  'eSIM',
  'Visum',
  'Züge',
  'Hochgeschwindigkeitszug',
  'DiDi',
  'Metro',
  'Packen',
  'Sicherheit',
]

// ─── Shared Components ──────────────────────────────────────────

function SectionHeader({
  title,
  href,
  hrefLabel = 'Alle ansehen →',
}: {
  title: string
  href?: string
  hrefLabel?: string
}) {
  return (
    <div className="mb-4 md:mb-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="w-8 h-1 bg-[#af5d32] rounded-full mb-3"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a4a]">{title}</h2>
        </div>
        {href && (
          <Link
            href={href}
            className="text-sm font-medium text-[#af5d32] hover:underline whitespace-nowrap self-end mb-1"
          >
            {hrefLabel}
          </Link>
        )}
      </div>
    </div>
  )
}

function PhotoCard({
  href,
  name,
  subtitle,
  imageSeed,
  icon: Icon,
}: {
  href: string
  name: string
  subtitle: string
  imageSeed: string
  icon: React.ElementType
}) {
  return (
    <Link href={href} className="group block h-full">
      <div className="rounded-xl overflow-hidden border border-[#ebe4d8] border-t-2 border-t-[#af5d32] shadow-sm hover:shadow-md transition-shadow bg-white h-full">
        <div className="aspect-[4/3] bg-[#f5f1ea] relative overflow-hidden">
          <Image
            src={`https://picsum.photos/seed/${imageSeed}/400/300`}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 mb-1">
            <Icon size={18} className="text-[#af5d32]" />
            <h3 className="font-bold text-[#1a3a4a] group-hover:text-[#af5d32] transition-colors">{name}</h3>
          </div>
          <p className="text-sm text-[#64748b] line-clamp-2">{subtitle}</p>
        </div>
      </div>
    </Link>
  )
}

// ─── Section Components ────────────────────────────────────────

function PrepareSection({ expanded = false }: { expanded?: boolean }) {
  return (
    <section>
      {expanded && (
        <SectionHeader
          title="Vorbereitung"
          href="/china-basics/esim"
        />
      )}
      <div className={expanded ? 'grid grid-cols-2 sm:grid-cols-4 gap-3' : 'relative'}>
        {!expanded && (
          <>
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 scrollbar-hide">
              {prepareItems.map((item) => (
                <div
                  key={item.name}
                  className="w-[calc(85vw-2rem)] max-w-[260px] flex-shrink-0 snap-start sm:max-w-[280px] md:w-[300px] md:max-w-none"
                >
                  <PhotoCard {...item} />
                </div>
              ))}
            </div>
            <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none md:hidden" />
          </>
        )}
        {expanded &&
          prepareItems.map((item) => (
            <PhotoCard key={item.name} {...item} />
          ))}
      </div>
    </section>
  )
}

function AppsMoneySection({ expanded = false }: { expanded?: boolean }) {
  return (
    <section>
      {expanded && (
        <SectionHeader
          title="Apps & Geld"
          href="/china-basics/bezahlung"
        />
      )}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {appsMoneyItems.map((item) => (
          <PhotoCard key={item.name} {...item} />
        ))}
      </div>
    </section>
  )
}

function GettingAroundSection({ expanded = false }: { expanded?: boolean }) {
  return (
    <section>
      {expanded && (
        <SectionHeader
          title="Transport"
          href="/china-basics/zuege"
        />
      )}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {gettingAroundItems.map((item) => (
          <PhotoCard key={item.name} {...item} />
        ))}
      </div>
    </section>
  )
}

function KnowBeforeSection({ expanded = false }: { expanded?: boolean }) {
  return (
    <section>
      {expanded && (
        <SectionHeader
          title="Wissenswertes"
          href="/china-basics"
        />
      )}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {knowBeforeItems.map((item) => (
          <PhotoCard key={item.name} {...item} />
        ))}
      </div>
    </section>
  )
}

// ─── Main Client Component ─────────────────────────────────────

export default function ChinaBasicsClient() {
  const [activeTab, setActiveTab] = useState<Tab>('overview')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTopics, setSelectedTopics] = useState<Set<string>>(new Set())
  const [isFiltering, setIsFiltering] = useState(false)

  function toggleTopic(topic: string) {
    const next = new Set(selectedTopics)
    if (topic === 'Alle') {
      next.clear()
      setSelectedTopics(next)
      return
    }
    if (next.has(topic)) {
      next.delete(topic)
    } else {
      next.add(topic)
    }
    setSelectedTopics(next)
  }

  const lowerQuery = searchQuery.trim().toLowerCase()

  const filteredItems =
    lowerQuery || selectedTopics.size > 0
      ? allItems.filter((item) => {
          const matchesSearch = lowerQuery
            ? item.name.toLowerCase().includes(lowerQuery) ||
              item.subtitle.toLowerCase().includes(lowerQuery) ||
              item.topics.some((t) => t.toLowerCase().includes(lowerQuery))
            : true
          const matchesTopics =
            selectedTopics.size > 0
              ? item.topics.some((t) => selectedTopics.has(t))
              : true
          return matchesSearch && matchesTopics
        })
      : null

  const isSearching = lowerQuery.length > 0 || selectedTopics.size > 0

  return (
    <div className="min-h-screen bg-[#f5f1ea] text-[#1a3a4a]">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 pt-10 pb-8 md:px-6 md:pt-16 md:pb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#af5d32]">
            China-Basics
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold leading-tight sm:text-5xl">
            Alles, was du wissen musst
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-[#5f6f7a]">
            Das Wesentliche für deine erste China-Reise — Visa, Apps, Internet, Transport
            und das, was du vorher wissen solltest.
          </p>
        </div>
      </header>

      {/* Search bar */}
      <div className="mx-auto max-w-6xl px-4 md:px-6 pb-6">
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748b]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Suche nach Themen, Apps, Transport..."
            className="w-full rounded-2xl border border-[#ebe4d8] bg-white py-3.5 pl-11 pr-10 text-sm text-[#1a3a4a] placeholder-[#94a3b8] outline-none focus:border-[#af5d32] focus:ring-2 focus:ring-[#af5d32]/20"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-[#64748b] hover:bg-[#f5f1ea] hover:text-[#1a3a4a]"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Quick info pills */}
      <div className="mx-auto max-w-6xl px-4 md:px-6 pb-6">
        <div className="flex flex-wrap gap-2">
          {quickInfoPills.map((pill) => {
            const Icon = pill.icon
            return (
              <div
                key={pill.text}
                className="inline-flex items-center gap-2 rounded-full border border-[#ebe4d8] bg-white px-3.5 py-2 text-sm font-medium text-[#1a3a4a]"
              >
                <Icon size={14} className="text-[#af5d32]" />
                {pill.text}
              </div>
            )
          })}
        </div>
      </div>

      {/* Tab bar */}
      <nav className="sticky top-[var(--site-nav-height,4rem)] z-40 border-b border-[#ebe4d8] bg-[#f5f1ea]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto px-4 scrollbar-hide md:px-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id)
                setSearchQuery('')
                setSelectedTopics(new Set())
              }}
              className={`shrink-0 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'border-[#af5d32] text-[#af5d32]'
                  : 'border-transparent text-[#5f6f7a] hover:text-[#1a3a4a]'
              }`}
            >
              <span className="hidden md:inline">{tab.label}</span>
              <span className="md:hidden">{tab.mobileLabel}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Content */}
      <main className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-10">
        {/* Topic chips */}
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <SlidersHorizontal size={14} className="text-[#64748b]" />
          {topicChips.map((chip) => (
            <button
              key={chip}
              onClick={() => toggleTopic(chip)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                chip === 'Alle'
                  ? selectedTopics.size === 0
                    ? 'bg-[#1a3a4a] text-white'
                    : 'bg-[#f5f1ea] text-[#5f6f7a] hover:bg-[#ebe4d8]'
                  : selectedTopics.has(chip)
                    ? 'bg-[#af5d32] text-white'
                    : 'bg-[#f5f1ea] text-[#5f6f7a] hover:bg-[#ebe4d8]'
              }`}
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Search / filter results */}
        {isSearching && (
          <div className="mb-8">
            <p className="mb-4 text-sm font-semibold text-[#1a3a4a]">
              {filteredItems?.length === 0
                ? 'Keine Ergebnisse gefunden.'
                : `${filteredItems?.length} Ergebnis${filteredItems?.length !== 1 ? 'se' : ''}`}
            </p>
            {filteredItems && filteredItems.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {filteredItems.map((item) => (
                  <PhotoCard key={item.name} {...item} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Overview */}
        {activeTab === 'overview' && !isFiltering && (
          <div className="space-y-8 md:space-y-10">
            <PrepareSection />
            <AppsMoneySection />
            <GettingAroundSection />
            <KnowBeforeSection />
            <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
              <FooterCTA
                title="Bereit, China zu erkunden?"
                subtitle="Von Visa-Tipps bis zur Tages-für-Tages-Route — alles, was du für eine entspannte Reise brauchst."
                quickInfo={[
                  { icon: ShieldCheck, title: '15–30 Tage visumfrei', description: 'Für die meisten westlichen Staatsbürger' },
                  { icon: Smartphone, title: 'Apps vor dem Abflug einrichten', description: 'Alipay, VPN, eSIM — mach es zu Hause' },
                  { icon: Lightbulb, title: 'Erstmals in China?', description: 'Starte mit unserem', link: { href: '/china-basics/esim', label: 'Internet-Guide' } },
                ]}
                trustText="Kostenlose Guides · Regelmässig aktualisiert · Für Erstreisende nach China"
              />
            </div>
          </div>
        )}

        {activeTab === 'prepare' && !isFiltering && (
          <div className="space-y-8 md:space-y-10">
            <PrepareSection expanded />
            <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
              <FooterCTA
                title="Bereit, China zu erkunden?"
                subtitle="Von Visa-Tipps bis zur Tages-für-Tages-Route — alles, was du für eine entspannte Reise brauchst."
                quickInfo={[
                  { icon: ShieldCheck, title: '15–30 Tage visumfrei', description: 'Für die meisten westlichen Staatsbürger' },
                  { icon: Smartphone, title: 'Apps vor dem Abflug einrichten', description: 'Alipay, VPN, eSIM — mach es zu Hause' },
                  { icon: Lightbulb, title: 'Erstmals in China?', description: 'Starte mit unserem', link: { href: '/china-basics/esim', label: 'Internet-Guide' } },
                ]}
                trustText="Kostenlose Guides · Regelmässig aktualisiert · Für Erstreisende nach China"
              />
            </div>
          </div>
        )}

        {activeTab === 'apps-money' && !isFiltering && (
          <div className="space-y-8 md:space-y-10">
            <AppsMoneySection expanded />
            <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
              <FooterCTA
                title="Bereit, China zu erkunden?"
                subtitle="Von Visa-Tipps bis zur Tages-für-Tages-Route — alles, was du für eine entspannte Reise brauchst."
                quickInfo={[
                  { icon: ShieldCheck, title: '15–30 Tage visumfrei', description: 'Für die meisten westlichen Staatsbürger' },
                  { icon: Smartphone, title: 'Apps vor dem Abflug einrichten', description: 'Alipay, VPN, eSIM — mach es zu Hause' },
                  { icon: Lightbulb, title: 'Erstmals in China?', description: 'Starte mit unserem', link: { href: '/china-basics/esim', label: 'Internet-Guide' } },
                ]}
                trustText="Kostenlose Guides · Regelmässig aktualisiert · Für Erstreisende nach China"
              />
            </div>
          </div>
        )}

        {activeTab === 'getting-around' && !isFiltering && (
          <div className="space-y-8 md:space-y-10">
            <GettingAroundSection expanded />
            <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
              <FooterCTA
                title="Bereit, China zu erkunden?"
                subtitle="Von Visa-Tipps bis zur Tages-für-Tages-Route — alles, was du für eine entspannte Reise brauchst."
                quickInfo={[
                  { icon: ShieldCheck, title: '15–30 Tage visumfrei', description: 'Für die meisten westlichen Staatsbürger' },
                  { icon: Smartphone, title: 'Apps vor dem Abflug einrichten', description: 'Alipay, VPN, eSIM — mach es zu Hause' },
                  { icon: Lightbulb, title: 'Erstmals in China?', description: 'Starte mit unserem', link: { href: '/china-basics/esim', label: 'Internet-Guide' } },
                ]}
                trustText="Kostenlose Guides · Regelmässig aktualisiert · Für Erstreisende nach China"
              />
            </div>
          </div>
        )}

        {activeTab === 'know-before' && !isFiltering && (
          <div className="space-y-8 md:space-y-10">
            <KnowBeforeSection expanded />
            <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
              <FooterCTA
                title="Bereit, China zu erkunden?"
                subtitle="Von Visa-Tipps bis zur Tages-für-Tages-Route — alles, was du für eine entspannte Reise brauchst."
                quickInfo={[
                  { icon: ShieldCheck, title: '15–30 Tage visumfrei', description: 'Für die meisten westlichen Staatsbürger' },
                  { icon: Smartphone, title: 'Apps vor dem Abflug einrichten', description: 'Alipay, VPN, eSIM — mach es zu Hause' },
                  { icon: Lightbulb, title: 'Erstmals in China?', description: 'Starte mit unserem', link: { href: '/china-basics/esim', label: 'Internet-Guide' } },
                ]}
                trustText="Kostenlose Guides · Regelmässig aktualisiert · Für Erstreisende nach China"
              />
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
