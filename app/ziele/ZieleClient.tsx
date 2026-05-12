'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { exploreCities } from '@/app/exploreChinaData'

export default function ZieleClient() {
  return (
    <main className="min-h-screen bg-[#f5f1ea] text-[#1a3a4a]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 pt-10 pb-8 md:px-6 md:pt-16 md:pb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#af5d32]">
            China entdecken
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold leading-tight sm:text-5xl">
            Unsere Reiseziele
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-[#5f6f7a]">
            7 Ziele, handverlesen für Erstreisende — mit Schweizer Perspektive.
          </p>
        </div>
      </section>

      {/* City Grid */}
      <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreCities.map((city) => (
            <Link
              key={city.key}
              href={city.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-[1.5rem] border border-[#1a3a4a]/8 bg-white p-3 transition-all hover:border-[#af5d32]/25"
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
                      Guide
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
          ))}
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
      </section>
    </main>
  )
}
