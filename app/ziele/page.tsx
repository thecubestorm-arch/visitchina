import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import SectionHeader from '@/components/SectionHeader'
import FooterCTA from '@/components/FooterCTA'

const cities = [
  {
    name: 'Peking',
    chinese: '北京',
    image: 'https://picsum.photos/seed/china-beijing-great-wall/400/300',
    href: 'https://www.trailofchina.com/destinations/beijing',
    description: 'Chinas Hauptstadt: Verbotene Stadt, Grosse Mauer, Himmelstempel und Pekingente.',
    highlights: ['Verbotene Stadt', 'Grosse Mauer', 'Pekingente'],
  },
  {
    name: 'Shanghai',
    chinese: '上海',
    image: 'https://picsum.photos/seed/china-shanghai-bund/400/300',
    href: 'https://www.trailofchina.com/destinations/shanghai',
    description: 'Chinas moderne Metropole: The Bund, Nanjing Road und die französische Konzession.',
    highlights: ['The Bund', 'Nanjing Road', 'French Concession'],
  },
  {
    name: "Xi'an",
    chinese: '西安',
    image: 'https://picsum.photos/seed/china-xian-warriors/400/300',
    href: 'https://www.trailofchina.com/destinations/xian',
    description: 'Die alte Hauptstadt: Terrakotta-Armee, Stadtmauer und das muslimische Viertel.',
    highlights: ['Terrakotta-Armee', 'Stadtmauer', 'Muslimisches Viertel'],
  },
  {
    name: 'Chengdu',
    chinese: '成都',
    image: 'https://picsum.photos/seed/china-chengdu-panda/400/300',
    href: 'https://www.trailofchina.com/destinations/chengdu',
    description: 'Pandas, Sichuan-Küche und entspannte Atmosphäre im Südwesten.',
    highlights: ['Panda-Basis', 'Sichuan-Küche', 'Jinli-Strasse'],
  },
  {
    name: 'Chongqing',
    chinese: '重庆',
    image: 'https://picsum.photos/seed/china-chongqing-skyline/400/300',
    href: 'https://www.trailofchina.com/destinations/chongqing',
    description: 'Die 3D-Stadt: Hotpot, Yangtze-Kreuzfahrt und beeindruckende Skyline.',
    highlights: ['Hotpot', '3D-Stadt', 'Yangtze-Kreuzfahrt'],
  },
  {
    name: 'Shenzhen',
    chinese: '深圳',
    image: 'https://picsum.photos/seed/china-shenzhen-tech/400/300',
    href: 'https://www.trailofchina.com/destinations/shenzhen',
    description: 'Chinas Silicon Valley: Tech-Hub, moderne Architektur und grenznahe Lage zu Hong Kong.',
    highlights: ['Tech-Hub', 'Huaqiangbei', 'Ping An Finance Centre'],
  },
  {
    name: 'Guangzhou',
    chinese: '广州',
    image: 'https://picsum.photos/seed/china-guangzhou-food/400/300',
    href: 'https://www.trailofchina.com/destinations/guangzhou',
    description: 'Kantons-Küche, Canton Tower und historische Konzessionen im Süden.',
    highlights: ['Dim Sum', 'Canton Tower', 'Shamian Island'],
  },
]

export const metadata = {
  title: 'Reiseziele in China — 7 Städte für Schweizer:innen',
  description: 'Peking, Shanghai, Xi\'an, Chengdu und mehr — die besten Reiseziele in China mit Schweizer Perspektive.',
  alternates: { canonical: 'https://visitchina.ch/ziele' },
}

export default function DestinationsPage() {
  return (
    <div>
      <div className="container-px mx-auto max-w-4xl py-6">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Ziele' }]} />
      </div>

      <div className="container-px mx-auto max-w-4xl pb-8">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--foreground)] leading-tight">
          Reiseziele in China
        </h1>
        <p className="mt-4 text-lg text-[var(--muted)]">
          7 Städte, die du als Schweizer:in kennen musst — mit Empfehlungen, Highlights und Links zu detaillierten Guides.
        </p>
      </div>

      <div className="container-px mx-auto max-w-7xl pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city) => (
            <a
              key={city.name}
              href={city.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1 bg-[#af5d32]" />
                <img
                  src={city.image}
                  alt={city.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-2 right-2 rounded-full bg-[#1a3a4a]/80 px-3 py-1 text-xs text-white backdrop-blur-sm">
                  {city.chinese}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl text-[var(--foreground)] group-hover:text-[#af5d32] transition-colors">
                  {city.name}
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                  {city.description}
                </p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {city.highlights.map((h) => (
                    <li key={h} className="inline-block rounded-full bg-[#f5f1ea] px-2.5 py-0.5 text-xs text-[var(--muted)]">
                      {h}
                    </li>
                  ))}
                </ul>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#af5d32] group-hover:text-[#8f431c] transition-colors">
                  Guide lesen
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="container-px mx-auto max-w-4xl pb-16">
        <div className="rounded-2xl bg-white border border-[var(--line)] p-6 md:p-8">
          <h2 className="font-serif text-xl text-[var(--foreground)]">Mehr auf trailofchina.com</h2>
          <p className="mt-2 text-[var(--muted)]">
            Detaillierte Stadtführer, Reiserouten und Insidertipps findest du auf unserer Schwesterseite:
          </p>
          <a
            href="https://www.trailofchina.com/destinations"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#af5d32] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#8f431c]"
          >
            Alle Guides auf trailofchina.com →
          </a>
        </div>
      </div>

      <div className="container-px mx-auto max-w-4xl pb-16">
        <FooterCTA
          title="Reise planen?"
          subtitle="Reiserouten, Budget und beste Reisezeit — alles für deine Planung."
          href="/reise-planen"
          label="Zur Reiseplanung"
        />
      </div>
    </div>
  )
}