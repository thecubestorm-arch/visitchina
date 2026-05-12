'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const STORAGE_KEY = 'visitchina_ch_cookie_consent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const savedConsent = window.localStorage.getItem(STORAGE_KEY)
    setVisible(!savedConsent)
  }, [])

  function handleAccept() {
    window.localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-[90] border-t border-[var(--line)] bg-[#f5f1ea]/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-[var(--muted)]">
          Diese Seite verwendet Cookies für essenzielle Funktionen, Analysen und Partner-Links. nDSG-konform.
        </p>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
          <button
            type="button"
            onClick={handleAccept}
            className="min-h-[48px] min-w-[44px] rounded-full bg-[#af5d32] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#8f431c]"
          >
            Akzeptieren
          </button>
          <Link
            href="/cookie-richtlinie"
            className="flex min-h-[48px] min-w-[44px] items-center justify-center rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm font-semibold text-[var(--foreground)]"
          >
            Mehr erfahren
          </Link>
        </div>
      </div>
    </div>
  )
}