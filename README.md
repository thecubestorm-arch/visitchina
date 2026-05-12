# VisitChina.ch — Swiss-Focused China Travel Guide

## Setup Instructions

1. Create GitHub repo: `thecubestorm-arch/visitchina-ch` (public)
2. Push this repo to GitHub
3. Create Vercel project linked to this repo
4. Add domain `visitchina.ch` in Vercel

## Architecture

- Next.js 15 + React 19 + Tailwind CSS
- Static export (`output: 'export'`)
- Same design system as trailofchina.com
- German language (Hochdeutsch, Swiss-focused)
- Deep links to trailofchina.com for detailed content

## Pages (12 total)

- `/` — Homepage (Hero + Trust + Entry Paths + Featured Guides)
- `/china-basics/` — Hub "Das Wichtigste vor der Reise"
- `/china-basics/visa/` — Visum für Schweizer
- `/china-basics/esim/` — eSIM für China
- `/china-basics/vpn/` — VPN für China
- `/china-basics/bezahlung/` — Bezahlen in China
- `/china-basics/sicherheit/` — Ist China sicher?
- `/china-basics/zuege/` — Zugfahren in China
- `/ziele/` — Städte-Hub (7 Städte, Links zu .com)
- `/reise-planen/` — Routen & Budget
- `/impressum/` — Schweizer Impressum (nDSG)
- `/datenschutz/` — Datenschutz (nDSG)
- `/cookie-richtlinie/` — Cookie Policy

## Key Differences from trailofchina.com

- All text in German
- Swiss focus (CHF, nDSG, 30-day visa-free for Swiss)
- Trust signals: "🇨🇭 Schweizer Unternehmen"
- Affiliate links on basics pages
- Deep links to trailofchina.com for city details
- No city detail pages (link to .com instead)