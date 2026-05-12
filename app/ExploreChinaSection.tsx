'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { exploreCities } from './exploreChinaData'

export default function ExploreChinaSection() {
  const [activeCityKey, setActiveCityKey] = useState('beijing')

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
        {exploreCities.map((city) => {
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
