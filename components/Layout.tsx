'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/china-basics', label: 'China-Basics' },
  { href: '/ziele', label: 'Ziele' },
  { href: '/reise-planen', label: 'Reise planen' },
]

function useSwipeToOpenMenu(onSwipeOpen: () => void, enabled: boolean) {
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)

  useEffect(() => {
    if (!enabled) return

    const handleTouchStart = (e: TouchEvent) => {
      if (window.innerWidth >= 768) return
      const screenWidth = window.innerWidth
      const touchX = e.touches[0].clientX
      if (touchX > screenWidth - 20) {
        touchStartX.current = touchX
        touchStartY.current = e.touches[0].clientY
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStartX.current === null) return
      const touchX = e.touches[0].clientX
      const touchY = e.touches[0].clientY
      const deltaX = touchX - touchStartX.current
      const deltaY = touchY - (touchStartY.current || 0)
      if (deltaX < -80 && Math.abs(deltaX) > Math.abs(deltaY)) {
        onSwipeOpen()
        touchStartX.current = null
        touchStartY.current = null
      }
    }

    const handleTouchEnd = () => {
      touchStartX.current = null
      touchStartY.current = null
    }

    document.addEventListener('touchstart', handleTouchStart, { passive: true })
    document.addEventListener('touchmove', handleTouchMove, { passive: true })
    document.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [onSwipeOpen, enabled])
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  useEffect(() => {
    const updateNavHeight = () => {
      const height = headerRef.current?.offsetHeight
      if (!height) return
      document.documentElement.style.setProperty('--site-nav-height', `${height}px`)
    }
    updateNavHeight()
    window.addEventListener('resize', updateNavHeight)
    return () => window.removeEventListener('resize', updateNavHeight)
  }, [])

  const openMenu = useCallback(() => setMenuOpen(true), [])
  const closeMenu = () => setMenuOpen(false)
  const toggleMenu = () => setMenuOpen((prev) => !prev)

  useSwipeToOpenMenu(openMenu, !menuOpen)

  const currentYear = new Date().getFullYear()

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-[100] border-b border-[var(--line)] bg-[#f5f1ea] md:bg-[#f5f1ea]/92 md:backdrop-blur-xl"
      >
        <div className="container-px mx-auto flex w-full max-w-7xl items-center justify-between py-2.5 md:py-4">
          <Link href="/" className="flex min-h-[44px] min-w-0 flex-col justify-center py-1 md:min-h-0 md:py-0">
            <span className="truncate font-serif text-xl leading-none tracking-[0.06em] text-[var(--foreground)] md:text-2xl">
              VisitChina.ch
            </span>
            <span className="hidden text-[10px] uppercase tracking-[0.28em] text-[var(--muted)] sm:block md:text-xs md:tracking-[0.32em]">
              Schweizer Reiseführer für China
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Primary" className="hidden md:flex md:flex-wrap md:items-center md:justify-end md:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="shrink-0 rounded-full border border-transparent px-4 py-2 text-sm font-medium text-[var(--muted)] hover:border-[var(--line)] hover:bg-[var(--surface-strong)] hover:text-[var(--foreground)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 md:hidden">
            <button
              type="button"
              aria-label={menuOpen ? 'Menü schliessen' : 'Menü öffnen'}
              aria-expanded={menuOpen}
              onClick={toggleMenu}
              className="relative z-[100] flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full"
            >
              {menuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#af5d32" strokeWidth="2" strokeLinecap="round">
                  <line x1="4" y1="4" x2="20" y2="20" />
                  <line x1="20" y1="4" x2="4" y2="20" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#af5d32" strokeWidth="2" strokeLinecap="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Overlay */}
        {menuOpen && (
          <div
            className="fixed inset-x-0 bottom-0 top-[var(--site-nav-height,4rem)] z-[109] bg-[#09131a]/38 backdrop-blur-sm md:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}

        {/* Mobile Full-Screen Menu */}
        <div
          className={`fixed inset-x-0 bottom-0 top-[var(--site-nav-height,4rem)] z-[110] bg-[#f5f1ea] transition-all duration-300 ease-out md:hidden ${
            menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
          }`}
          aria-hidden={!menuOpen}
        >
          <div className="flex h-full flex-col px-6 pb-[calc(env(safe-area-inset-bottom)+1.5rem)] pt-6">
            <nav aria-label="Mobile primary" className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="flex min-h-[52px] items-center justify-between rounded-2xl border border-[#e7dece] bg-white px-4 py-3 text-lg font-medium text-[var(--foreground)] transition-colors hover:border-[#af5d32] hover:bg-[rgba(175,93,50,0.08)] hover:text-[#af5d32]"
                >
                  <span>{link.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main style={{ backgroundColor: '#f5f1ea' }}>{children}</main>

      <footer className="mt-24 bg-[#f5f1ea]">
        <div className="container-px mx-auto max-w-7xl py-10 pb-[calc(env(safe-area-inset-bottom)+2.5rem)]">
          {/* Top row: brand + nav */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-serif text-2xl text-[var(--foreground)]">VisitChina.ch</p>
            <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[var(--muted)]">
              <Link href="/china-basics" className="inline-flex min-h-[44px] items-center rounded-md px-2 hover:bg-[var(--surface-strong)] hover:text-[#af5d32] transition-colors">
                China-Basics
              </Link>
              <span aria-hidden="true" className="hidden sm:inline">·</span>
              <Link href="/ziele" className="inline-flex min-h-[44px] items-center rounded-md px-2 hover:bg-[var(--surface-strong)] hover:text-[#af5d32] transition-colors">
                Ziele
              </Link>
              <span aria-hidden="true" className="hidden sm:inline">·</span>
              <Link href="/reise-planen" className="inline-flex min-h-[44px] items-center rounded-md px-2 hover:bg-[var(--surface-strong)] hover:text-[#af5d32] transition-colors">
                Reise planen
              </Link>
            </nav>
          </div>

          <hr className="my-8 border-[#ddd5c8]" />

          {/* Description */}
          <p className="max-w-md text-sm leading-7 text-[var(--muted)]">
            Praktischer Reiseführer für Schweizerinnen und Schweizer, die zum ersten Mal nach China reisen — mit klaren Tipps, ruhiger Vorbereitung und smarten Routen.
          </p>

          <hr className="my-8 border-[#ddd5c8]" />

          {/* Swiss legal info */}
          <div className="flex flex-col gap-3 text-xs text-[var(--muted)]">
            <p>© {currentYear} VisitChina.ch</p>
            <p>nDSG-konform · Schweizer Datenschutzgesetz anwendbar</p>
            <p>Schweizerische Botschaft Peking: +86 10 8532 8833 · <a href="https://www.eda.admin.ch/beijing" className="underline hover:text-[#af5d32]">eda.admin.ch/beijing</a></p>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1">
              <Link href="/impressum" className="inline-flex min-h-[44px] items-center rounded-md px-2 hover:bg-[var(--surface-strong)] hover:text-[#af5d32] transition-colors">
                Impressum
              </Link>
              <span aria-hidden="true" className="hidden sm:inline">·</span>
              <Link href="/datenschutz" className="inline-flex min-h-[44px] items-center rounded-md px-2 hover:bg-[var(--surface-strong)] hover:text-[#af5d32] transition-colors">
                Datenschutz
              </Link>
              <span aria-hidden="true" className="hidden sm:inline">·</span>
              <Link href="/cookie-richtlinie" className="inline-flex min-h-[44px] items-center rounded-md px-2 hover:bg-[var(--surface-strong)] hover:text-[#af5d32] transition-colors">
                Cookie-Richtlinie
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}