'use client'

import { useState } from 'react'
import Breadcrumb from '@/components/Breadcrumb'
import SectionHeader from '@/components/SectionHeader'
import PhotoCard from '@/components/PhotoCard'
import FooterCTA from '@/components/FooterCTA'
import { TopicChipsBar } from '@/components/TopicChip'

const allChips = ['eSIM', 'VPN', 'Alipay', 'Visum', 'Züge', 'Sicherheit', 'Apps', 'Geld']

const overviewItems = [
  { href: '/china-basics/visa', image: 'https://picsum.photos/seed/china-visa-passport/400/300', icon: '🛂', name: 'Visum', subtitle: '30 Tage visumfrei für Schweizer:innen — alles, was du wissen musst.', chips: ['Visum'] },
  { href: '/china-basics/esim', image: 'https://picsum.photos/seed/china-esim-phone/400/300', icon: '📶', name: 'eSIM & Internet', subtitle: 'So bleibst du in China online — ohne teure Roaming-Kosten.', chips: ['eSIM', 'VPN'] },
  { href: '/china-basics/vpn', image: 'https://picsum.photos/seed/china-vpn-laptop/400/300', icon: '🔒', name: 'VPN', subtitle: 'Welche VPNs in China funktionieren und wie du sie einrichtest.', chips: ['VPN', 'Apps'] },
  { href: '/china-basics/bezahlung', image: 'https://picsum.photos/seed/china-alipay-pay/400/300', icon: '💳', name: 'Bezahlen', subtitle: 'Alipay, WeChat Pay und Bargeld — so bezahlst du als Schweizer:in.', chips: ['Alipay', 'Geld'] },
  { href: '/china-basics/sicherheit', image: 'https://picsum.photos/seed/china-safety-travel/400/300', icon: '🛡️', name: 'Sicherheit', subtitle: 'China ist sehr sicher — aber hier sind die Dinge, auf die du achten solltest.', chips: ['Sicherheit'] },
  { href: '/china-basics/zuege', image: 'https://picsum.photos/seed/china-bullet-train/400/300', icon: '🚄', name: 'Züge', subtitle: 'Chinas Hochgeschwindigkeitsnetz — schnell, günstig und komfortabel.', chips: ['Züge'] },
]

const prepareItems = [
  { href: '/china-basics/visa', image: 'https://picsum.photos/seed/china-visa-passport/400/300', icon: '🛂', name: 'Visum prüfen', subtitle: 'Schweizer:innen können 30 Tage visumfrei einreisen. Prüfe, ob das für dich reicht.', chips: ['Visum'] },
  { href: '/china-basics/esim', image: 'https://picsum.photos/seed/china-esim-phone/400/300', icon: '📱', name: 'eSIM einrichten', subtitle: 'Lade dir eine eSIM herunter, bevor du in den Flug steigst.', chips: ['eSIM'] },
  { href: '/china-basics/vpn', image: 'https://picsum.photos/seed/china-vpn-laptop/400/300', icon: '🔒', name: 'VPN installieren', subtitle: 'Installiere den VPN VOR der Abreise — in China ist der Download blockiert.', chips: ['VPN'] },
  { href: '/china-basics/bezahlung', image: 'https://picsum.photos/seed/china-alipay-pay/400/300', icon: '💳', name: 'Bezahl-Apps einrichten', subtitle: 'Richte Alipay und WeChat Pay mit deiner Schweizer Karte ein.', chips: ['Alipay'] },
]

const appsMoneyItems = [
  { href: '/china-basics/bezahlung', image: 'https://picsum.photos/seed/china-alipay-pay/400/300', icon: '💳', name: 'Alipay', subtitle: 'Die meistgenutzte Bezahlappe in China. Schweizer Karten werden unterstützt.', chips: ['Alipay', 'Geld'] },
  { href: '/china-basics/bezahlung', image: 'https://picsum.photos/seed/china-wechat-qr/400/300', icon: '💬', name: 'WeChat Pay', subtitle: 'Chinas Swiss-Army-Knife-App: Bezahlen, Chatten, Miniprogramme.', chips: ['Alipay', 'Apps'] },
  { href: '/china-basics/esim', image: 'https://picsum.photos/seed/china-esim-phone/400/300', icon: '📶', name: 'eSIM', subtitle: 'Airalo, Holafly & Co. — Internet ohne Roaming-Falle.', chips: ['eSIM'] },
  { href: '/china-basics/vpn', image: 'https://picsum.photos/seed/china-vpn-laptop/400/300', icon: '🔒', name: 'VPN', subtitle: 'Ohne VPN kein Google, WhatsApp oder Instagram in China.', chips: ['VPN', 'Apps'] },
]

const transportItems = [
  { href: '/china-basics/zuege', image: 'https://picsum.photos/seed/china-bullet-train/400/300', icon: '🚄', name: 'Hochgeschwindigkeitszüge', subtitle: 'Bis zu 350 km/h — Peking nach Shanghai in 4.5 Stunden.', chips: ['Züge'] },
  { href: '/china-basics/zuege', image: 'https://picsum.photos/seed/china-metro-station/400/300', icon: '🚇', name: 'U-Bahn & Metro', subtitle: 'Günstig, sauber und einfach zu nutzen — in jeder Grossstadt.', chips: ['Züge'] },
  { href: 'https://www.trailofchina.com/destinations', image: 'https://picsum.photos/seed/china-didi-taxi/400/300', icon: '🚕', name: 'DiDi & Taxi', subtitle: 'Chinas Uber heisst DiDi — günstiger als Schweizer Taxis.', chips: ['Apps'] },
]

const tipsItems = [
  { href: '/china-basics/sicherheit', image: 'https://picsum.photos/seed/china-safety-travel/400/300', icon: '🛡️', name: 'Sicherheit', subtitle: 'China ist sehr sicher für Touristen. Hier sind die wenigen Dinge, auf die du achten solltest.', chips: ['Sicherheit'] },
  { href: '/china-basics/vpn', image: 'https://picsum.photos/seed/china-vpn-laptop/400/300', icon: '🚫', name: 'Grosse Firewall', subtitle: 'Google, WhatsApp, Instagram und mehr sind blockiert — aber ein VPN hilft.', chips: ['VPN', 'Apps'] },
  { href: '/china-basics/bezahlung', image: 'https://picsum.photos/seed/china-cash-yuan/400/300', icon: '💰', name: 'Bargeld', subtitle: 'Nimm etwas Bargeld als Backup — aber ohne Bezahl-App kommst du nicht weit.', chips: ['Geld'] },
  { href: '/china-basics/sicherheit', image: 'https://picsum.photos/seed/china-embassy-swiss/400/300', icon: '🇨🇭', name: 'Schweizer Botschaft', subtitle: 'Die Schweizer Botschaft in Peking ist dein Notfall-Kontakt.', chips: ['Sicherheit'] },
]

const quickPills = [
  { icon: '🛂', text: '30 Tage visumfrei (CH)' },
  { icon: '📱', text: 'VPN vorab installieren' },
  { icon: '💳', text: 'Alipay + WeChat Pay' },
  { icon: '📶', text: 'eSIM empfohlen' },
  { icon: '🚄', text: 'Schnellzug buchen' },
  { icon: '🛡️', text: 'Sehr sicheres Land' },
]

type TabKey = 'overview' | 'prepare' | 'appsmoney' | 'transport' | 'tips'

const tabs: { key: TabKey; label: string }[] = [
  { key: 'overview', label: 'Übersicht' },
  { key: 'prepare', label: 'Vorbereitung' },
  { key: 'appsmoney', label: 'Apps & Geld' },
  { key: 'transport', label: 'Transport' },
  { key: 'tips', label: 'Wissenswertes' },
]

const tabItems: Record<TabKey, typeof overviewItems> = {
  overview: overviewItems,
  prepare: prepareItems,
  appsmoney: appsMoneyItems,
  transport: transportItems,
  tips: tipsItems,
}

export default function ChinaBasicsPage() {
  const [activeTab, setActiveTab] = useState<TabKey>('overview')
  const [activeChip, setActiveChip] = useState('')
  const items = tabItems[activeTab]
  const filtered = activeChip
    ? items.filter((item) => item.chips.some((c) => c.toLowerCase().includes(activeChip.toLowerCase())))
    : items

  return (
    <div>
      <div className="container-px mx-auto max-w-4xl py-6">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'China-Basics' }]} />
      </div>

      <div className="container-px mx-auto max-w-4xl pb-6">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--foreground)] leading-tight">
          China-Basics
        </h1>
        <p className="mt-4 text-lg text-[var(--muted)]">
          Alles, was du als Schweizer:in vor und während deiner China-Reise wissen musst.
        </p>
      </div>

      {/* Quick Info Pills */}
      <div className="container-px mx-auto max-w-4xl py-4">
        <div className="flex flex-wrap gap-2">
          {quickPills.map((pill) => (
            <span key={pill.text} className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[var(--line)] px-3 py-1.5 text-sm text-[var(--muted)]">
              <span>{pill.icon}</span> {pill.text}
            </span>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-[var(--site-nav-height,4rem)] z-40 border-b border-[var(--line)] bg-[#f5f1ea]/95 backdrop-blur-md">
        <div className="container-px mx-auto max-w-4xl">
          <div className="flex gap-1 overflow-x-auto scrollbar-hide -mb-px">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => { setActiveTab(tab.key); setActiveChip('') }}
                className={`shrink-0 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === tab.key
                    ? 'border-[#af5d32] text-[#af5d32]'
                    : 'border-transparent text-[var(--muted)] hover:text-[var(--foreground)]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Topic Chips */}
      <div className="container-px mx-auto max-w-7xl py-4">
        <TopicChipsBar chips={allChips} active={activeChip} onSelect={setActiveChip} />
      </div>

      {/* Cards Grid */}
      <div className="container-px mx-auto max-w-7xl pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <PhotoCard key={item.name + item.href} {...item} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-[var(--muted)] py-12">Keine Ergebnisse für diesen Filter.</p>
        )}
      </div>

      {/* Footer CTA */}
      <div className="container-px mx-auto max-w-4xl pb-16">
        <FooterCTA
          title="Noch Fragen?"
          subtitle="Schau dir unsere Detail-Guides an — von eSIM bis Sicherheit."
          href="/china-basics/esim"
          label="Zum eSIM-Guide"
        />
      </div>
    </div>
  )
}