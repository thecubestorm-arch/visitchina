import DetailPageLayout from '@/components/DetailPageLayout'
import AffiliateCTA from '@/components/AffiliateCTA'
import FooterCTA from '@/components/FooterCTA'

export const metadata = {
  title: 'eSIM für China — Vergleich & Einrichtung für Schweizer:innen',
  description: 'eSIM-Vergleich für Schweizer China-Reisende: Airalo, Holafly, Maya Mobile und mehr. Setup-Anleitung, Preise und Empfehlungen.',
  alternates: { canonical: 'https://visitchina.ch/china-basics/esim' },
}

export default function ESIMPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'eSIM für China — Vergleich & Einrichtung für Schweizer:innen',
    description: metadata.description,
    url: 'https://visitchina.ch/china-basics/esim',
    publisher: { '@type': 'Organization', name: 'VisitChina.ch' },
  }

  return (
    <DetailPageLayout
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'China-Basics', href: '/china-basics' }, { label: 'eSIM' }]}
      title="eSIM für China"
      subtitle="Internet ab der ersten Minute — ohne Roaming-Kosten und ohne physische SIM-Karte."
      heroImage="https://picsum.photos/seed/china-esim-phone/800/400"
      updatedDate="12. Mai 2026"
      jsonLd={jsonLd}
    >
      <div className="callout">
        <p><strong>💡 Wichtig:</strong> Kaufe und installiere deine eSIM VOR der Abreise. In China sind viele App-Stores und Websites blockiert — du kommst sonst evtl. nicht an die eSIM-App.</p>
      </div>

      <h2>Warum eine eSIM?</h2>
      <p>Chinesische Roaming-Gebühren sind horrend. Mit einer eSIM zahlst du einen festen Betrag und hast Internet ab der Landung. Vorteile:</p>
      <ul>
        <li><strong>Keine physische SIM</strong> — Aktivierung per QR-Code oder App</li>
        <li><strong>Festpreis</strong> — keine Überraschungen auf der Rechnung</li>
        <li><strong>Sofort online</strong> — ab dem Moment, wo du das Flugzeug verlässt</li>
        <li><strong>Zweite SIM</strong> — deine Schweizer Nummer bleibt für Notrufe aktiv</li>
      </ul>

      <h2>eSIM-Anbieter im Vergleich</h2>
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Anbieter</th>
            <th>Datenvolumen</th>
            <th>Preis (ca.)</th>
            <th>Netz</th>
            <th>Bewertung</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>Airalo</strong></td><td>1–20 GB</td><td>5–38 USD</td><td>China Unicom</td><td>⭐⭐⭐⭐</td></tr>
          <tr><td><strong>Holafly</strong></td><td>Unlimitiert</td><td>39–69 USD</td><td>China Unicom</td><td>⭐⭐⭐⭐</td></tr>
          <tr><td><strong>Maya Mobile</strong></td><td>1–10 GB</td><td>5–30 USD</td><td>China Mobile</td><td>⭐⭐⭐</td></tr>
          <tr><td><strong>MobiMatter</strong></td><td>1–20 GB</td><td>4–35 USD</td><td>Verschiedene</td><td>⭐⭐⭐</td></tr>
          <tr><td><strong>Swisscom Roaming</strong></td><td>Dein Abo</td><td>~3 CHF/Tag</td><td>Swisscom</td><td>⭐⭐</td></tr>
        </tbody>
      </table>

      <AffiliateCTA
        title="Empfehlung: Airalo China eSIM"
        description="Günstig, zuverlässig und einfach einzurichten. 5 GB für ca. 16 USD — ideal für 2 Wochen China."
        href="https://www.airalo.com/china-esim"
        label="Airalo eSIM ansehen"
        icon="📶"
      />

      <h2>So richtest du die eSIM ein</h2>
      <ol>
        <li><strong>eSIM kaufen</strong> — Besuche airalo.com oder lade die App herunter</li>
        <li><strong>QR-Code scannen</strong> — Öffne Einstellungen → Mobiles Netz → eSIM hinzufügen</li>
        <li><strong>Profil aktivieren</strong> — Folge den Anweisungen auf dem Bildschirm</li>
        <li><strong>In China aktivieren</strong> — Die eSIM aktiviert sich automatisch bei Ankunft</li>
        <li><strong>VPN einrichten</strong> — Ohne VPN hast du keinen Zugriff auf Google, WhatsApp, etc.</li>
      </ol>

      <div className="callout">
        <p><strong>📱 Dual-SIM-Tipp:</strong> Behalte deine Schweizer SIM als zweite Leitung für Notrufe und SMS. Die eSIM nutzt du für Daten.</p>
      </div>

      <h2>Was ist mit WLAN?</h2>
      <p>WLAN (WiFi) gibt es in fast allen Hotels, Cafés und öffentlichen Orten in China. Aber:</p>
      <ul>
        <li>WLAN ist nicht immer schnell oder zuverlässig</li>
        <li>Für Navigation, DiDi und Bezahl-Apps brauchst du mobil Daten</li>
        <li>WLAN hinter der Firewall funktioniert nicht für blockierte Dienste</li>
      </ul>
      <p>Unsere Empfehlung: eSIM + VPN = bestes Setup.</p>

      <AffiliateCTA
        title="Auch wichtig: VPN für China"
        description="Ohne VPN kommst du nicht an Google, WhatsApp, Instagram und andere blockierte Dienste. Hier zum VPN-Guide."
        href="/china-basics/vpn"
        label="Zum VPN-Guide"
        icon="🔒"
        variant="secondary"
      />

      <FooterCTA
        title="VPN ist genauso wichtig"
        subtitle="Ohne VPN sind Google, WhatsApp & Co. blockiert — hier erfährst du, welche VPNs funktionieren."
        href="/china-basics/vpn"
        label="Zum VPN-Guide"
      />
    </DetailPageLayout>
  )
}