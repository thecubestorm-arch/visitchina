import type { Metadata } from 'next'
import ChinaBasicsClient from './ChinaBasicsClient'

export const metadata: Metadata = {
  title: 'China-Basics — Visa, Apps, Internet, Transport',
  description:
    'Alles, was du für deine erste China-Reise wissen musst. Visa, Apps, Internet, Transport und mehr — auf Deutsch.',
  alternates: {
    canonical: '/china-basics',
  },
  openGraph: {
    title: 'China-Basics — Visa, Apps, Internet, Transport',
    description: 'Das Wesentliche für deine erste China-Reise.',
    images: [{ url: 'https://visitchina.ch/og-default.jpg', width: 1200, height: 630, alt: 'VisitChina.ch — China-Basics' }],
  },
}

export default function ChinaBasicsPage() {
  return <ChinaBasicsClient />
}
