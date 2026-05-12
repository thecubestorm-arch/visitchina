'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, MapPin, Lightbulb, ShieldCheck } from 'lucide-react'
import FooterCTA from '@/components/FooterCTA'
import { exploreCities } from '@/app/exploreChinaData'

const comingSoon = [
  { key: 'hangzhou', name: 'Hangzhou', nameZh: '杭州' },
  { key: 'suzhou', name: 'Suzhou', nameZh: '苏州' },
  { key: 'guilin', name: 'Guilin', nameZh: '桂林' },
  { key: 'nanjing', name: 'Nanjing', nameZh: '南京' },
  { key: 'lhasa', name: 'Lhasa', nameZh: '拉萨' },
  { key: 'kunming', name: 'Kunming', nameZh: '昆明' },
]

export default function ZieleClient() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-white text-[#1a3a4a]">
      {/* Hero */}
      <div className="bg-gradient-to-b from-[#f5f1ea] to-white border-b border-[#ebe4d8]">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#af5d32] mb-3">
                China entdecken
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1a3a4a] leading-tight">
                7 Städte, die dein Bild von China verändern
              </h1>
              <p className="text-base md:text-lg text-[#64748b] mt-4 leading-relaxed">
                Von alten Hauptstädten bis zu futuristischen Skylines — das sind die Ziele,
                die China unvergesslich machen. Handverlesen, gründlich recherchiert und bereit zum Entdecken.
              </p>
              <p className="text-sm text-[#64748b] mt-2">
                {exploreCities.length} Ziele · {comingSoon.length} in Planung
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* City Grid */}
      <div className="max-w-6xl mx-auto px-4 py-8 pb-28 md:pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {exploreCities.map((city) => (
            <Link
              key={city.key}
              href={city.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl overflow-hidden border border-[#ebe4d8] bg-white hover:shadow-lg transition-all duration-300 relative"
              onMouseEnter={() => setHoveredCity(city.key)}
              onMouseLeave={() => setHoveredCity(null)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${city.imageSeed}/600/400`}
                  alt={`${city.name} Skyline und Wahrzeichen`}
                  className={`w-full h-full object-cover transition-transform duration-500 ${hoveredCity === city.key ? 'scale-105' : ''}`}
                />
                {city.popular && (
                  <div className="absolute top-3 right-3 bg-[#af5d32] text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
                    <span>★</span> Sehr beliebt
                  </div>
                )}
                <div className="absolute top-3 left-3 bg-[#1a3a4a]/80 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                  {city.nameZh}
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[#1a3a4a]">{city.name}</h3>
                </div>
                <p className="text-sm text-[#64748b] mt-1">{city.hook}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-[#64748b] bg-[#f5f1ea] px-2 py-1 rounded-full border border-[#ebe4d8]">
                    ⏱ {city.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-[#64748b] bg-[#f5f1ea] px-2 py-1 rounded-full border border-[#ebe4d8]">
                    {city.price}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-[#64748b] bg-[#f5f1ea] px-2 py-1 rounded-full border border-[#ebe4d8]">
                    🌤 {city.season}
                  </span>
                </div>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#af5d32] group-hover:gap-2 transition-all">
                  Guide lesen <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mt-12 border-t border-[#ebe4d8] pt-8">
          <h2 className="text-lg font-bold text-[#1a3a4a] mb-4">In Planung</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3">
            {comingSoon.map((city) => (
              <div key={city.key} className="group relative rounded-lg overflow-hidden border border-[#ebe4d8] bg-gray-100 aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-end p-3 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="text-white text-sm font-bold">{city.name}</div>
                  <div className="text-white/80 text-xs">{city.nameZh}</div>
                </div>
                <div className="absolute top-2 left-2 bg-[#64748b] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                  Coming Soon
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Link to .com */}
        <div className="mt-12 rounded-2xl bg-white border border-[#ebe4d8] p-6 md:p-8 text-center">
          <p className="text-sm text-[#5f6f7a]">
            Detaillierte Stadtführer mit Fotos, Karten und Insidertipps auf{' '}
            <a
              href="https://www.trailofchina.com/destinations"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#af5d32] hover:text-[#8f431c] transition-colors"
            >
              trailofchina.com
            </a>
          </p>
        </div>

        {/* Footer CTA */}
        <div className="mt-12">
          <FooterCTA
            title="Deine China-Reise planen"
            subtitle="Vorgeplante Routen oder der eigene Planer — finde, was zu dir passt."
            quickInfo={[
              {
                icon: MapPin,
                title: 'Vorgeplante Routen',
                description: '7, 10 oder 14 Tage — ',
                link: { href: '/reise-planen', label: 'Routen ansehen' },
              },
              {
                icon: Lightbulb,
                title: 'Reiseplaner',
                description: 'Selbst zusammenstellen — ',
                link: { href: '/reise-planen', label: 'Planung starten' },
              },
              {
                icon: ShieldCheck,
                title: 'China-Basics',
                description: 'Apps, Internet, Zahlungen — ',
                link: { href: '/china-basics', label: 'Vorbereitung' },
              },
            ]}
            trustText="Kostenlose Guides · Regelmässig aktualisiert · Für Erstreisende nach China"
          />
        </div>
      </div>
    </main>
  )
}
