import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Layout from '@/components/Layout'
import CookieConsent from '@/components/CookieConsent'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://visitchina.ch'),
  title: {
    default: 'VisitChina.ch — China reisen ohne Verwirrung',
    template: '%s | VisitChina.ch',
  },
  description:
    'China reisen ohne Verwirrung. Kostenlose Guides: Visa, eSIM, VPN, Bezahl-Apps, Züge und Reiserouten — alles auf Deutsch.',
  keywords: 'China Reise,China Reiseführer,China planen,China Visum,eSIM China,VPN China,China Basics,China Route',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    locale: 'de',
    siteName: 'VisitChina.ch',
  },
}

export const dynamic = 'force-static'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'VisitChina.ch',
    url: 'https://visitchina.ch',
    description: 'China reisen ohne Verwirrung — Kostenlose Guides für Visa, eSIM, VPN, Bezahl-Apps und Reiserouten.',
    inLanguage: 'de',
  }

  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="antialiased" style={{ backgroundColor: '#f5f1ea' }}>
        <Layout>{children}</Layout>
        <CookieConsent />
      </body>
    </html>
  )
}
