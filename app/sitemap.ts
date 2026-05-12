import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://visitchina.ch'
  const now = new Date()

  const pages = [
    { path: '', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/china-basics', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/china-basics/visa', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/china-basics/esim', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/china-basics/vpn', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/china-basics/bezahlung', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/china-basics/sicherheit', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/china-basics/zuege', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/ziele', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/reise-planen', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/impressum', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/datenschutz', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/cookie-richtlinie', priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))
}