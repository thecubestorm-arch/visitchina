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
    default: 'VisitChina.ch — Der Schweizer Reiseführer für China',
    template: '%s | VisitChina.ch',
  },
  description:
    'China-Reise planen? Praktische Guides, eSIM-Tipps, VPN-Empfehlungen und Visa-Infos — alles für Schweizer China-Reisende.',
  keywords: 'China Reise,China Reiseführer,Schweizer China Reise,China Visum,eSIM China,VPN China,China Basics',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    locale: 'de_CH',
    siteName: 'VisitChina.ch',
  },
}

export const dynamic = 'force-static'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'VisitChina.ch',
    url: 'https://visitchina.ch',
    logo: 'https://visitchina.ch/favicon.svg',
    sameAs: [],
  }

  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="antialiased" style={{ backgroundColor: '#f5f1ea' }}>
        <Layout>{children}</Layout>
        <CookieConsent />
      </body>
    </html>
  )
}