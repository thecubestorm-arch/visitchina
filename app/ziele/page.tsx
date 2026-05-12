import type { Metadata } from 'next'
import ZieleClient from './ZieleClient'

export const metadata: Metadata = {
  title: 'Reiseziele in China — 7 Städte für Erstreisende',
  description:
    'Peking, Shanghai, Xi\'an, Chengdu und mehr — die besten Reiseziele in China mit detaillierten Guides.',
  alternates: {
    canonical: '/ziele',
  },
  openGraph: {
    title: 'Reiseziele in China — 7 Städte für Erstreisende',
    description: 'Die besten Reiseziele in China für Erstreisende.',
    images: [{ url: 'https://visitchina.ch/og-default.jpg', width: 1200, height: 630, alt: 'VisitChina.ch — Reiseziele' }],
  },
}

export default function ZielePage() {
  return <ZieleClient />
}
