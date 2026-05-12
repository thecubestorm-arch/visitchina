import type { Metadata } from 'next'
import ChinaBasicsClient from './ChinaBasicsClient'

export const metadata: Metadata = {
  title: 'China-Basics — Visum, Internet, Bezahlung & Transport',
  description:
    'Alles, was du vor deiner China-Reise wissen musst. Visum, Internet, Bezahlung, Züge, Apps — verständlich erklärt für Schweizer Reisende.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://visitchina.ch/china-basics',
  },
  openGraph: {
    title: 'China-Basics — Visum, Internet, Bezahlung & Transport',
    description: 'Die wichtigsten Infos für deine China-Reise.',
    images: [
      {
        url: 'https://visitchina.ch/og-china-basics.jpg',
        width: 1200,
        height: 630,
        alt: 'China-Basics — Alles für deine China-Reise',
      },
    ],
  },
}

export default function ChinaBasicsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://visitchina.ch/' },
              { '@type': 'ListItem', position: 2, name: 'China-Basics', item: 'https://visitchina.ch/china-basics' },
            ],
          }),
        }}
      />
      <ChinaBasicsClient />
    </>
  )
}
