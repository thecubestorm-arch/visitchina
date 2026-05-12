import DetailPageLayout from '@/components/DetailPageLayout'
import AffiliateCTA from '@/components/AffiliateCTA'
import FooterCTA from '@/components/FooterCTA'

export const metadata = {
  title: 'VPN für China — Welches funktioniert 2026?',
  description: 'Welche VPNs in China funktionieren, wie du sie vor der Reise einrichtest und was du beachten musst. Aktualisiert 2026.',
  alternates: { canonical: 'https://visitchina.ch/china-basics/vpn' },
}

export default function VPNPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'VPN für China — Welches funktioniert 2026?',
    description: metadata.description,
    url: 'https://visitchina.ch/china-basics/vpn',
    publisher: { '@type': 'Organization', name: 'VisitChina.ch' },
  }

  return (
    <DetailPageLayout
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'China-Basics', href: '/china-basics' }, { label: 'VPN' }]}
      title="VPN für China"
      subtitle="Ohne VPN kein Google, WhatsApp oder Instagram — hier erfährst du, was funktioniert."
      heroImage="https://picsum.photos/seed/china-vpn-laptop/800/400"
      updatedDate="12. Mai 2026"
      jsonLd={jsonLd}
    >
      <div className="callout">
        <p><strong>⚠️ Wichtig:</strong> Installiere deinen VPN VOR der Abreise! In China sind VPN-Websites und App-Stores blockiert. Du kommst sonst nicht an die App.</p>
      </div>

      <h2>Was ist die Grosse Firewall?</h2>
      <p>China blockiert viele westliche Internetdienste, darunter:</p>
      <ul>
        <li>Google (Suche, Maps, Gmail, YouTube)</li>
        <li>WhatsApp, Telegram, Signal</li>
        <li>Instagram, Facebook, X (Twitter)</li>
        <li>Netflix, Spotify, viele Nachrichtenseiten</li>
      </ul>
      <p>Ein VPN (Virtual Private Network) umgeht diese Blockaden, indem es deine Verbindung durch einen Server ausserhalb Chinas leitet.</p>

      <h2>VPN-Vergleich für China 2026</h2>
      <table className="comparison-table">
        <thead>
          <tr>
            <th>VPN</th>
            <th>Zuverlässigkeit</th>
            <th>Geschwindigkeit</th>
            <th>Preis/Monat</th>
            <th>Geld-zurück</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>ExpressVPN</strong></td><td>⭐⭐⭐⭐⭐</td><td>Schnell</td><td>~8 CHF</td><td>30 Tage</td></tr>
          <tr><td><strong>NordVPN</strong></td><td>⭐⭐⭐⭐</td><td>Schnell</td><td>~5 CHF</td><td>30 Tage</td></tr>
          <tr><td><strong>Surfshark</strong></td><td>⭐⭐⭐⭐</td><td>Mittel</td><td>~3 CHF</td><td>30 Tage</td></tr>
          <tr><td><strong>Astrill</strong></td><td>⭐⭐⭐⭐⭐</td><td>Schnell</td><td>~25 CHF</td><td>7 Tage</td></tr>
          <tr><td><strong>VyprVPN</strong></td><td>⭐⭐⭐</td><td>Mittel</td><td>~6 CHF</td><td>30 Tage</td></tr>
        </tbody>
      </table>

      <AffiliateCTA
        title="Empfehlung: ExpressVPN"
        description="Der zuverlässigste VPN für China. Einfach einzurichten, schnell und mit 30-Tage-Geld-zurück-Garantie."
        href="https://www.expressvpn.com/"
        label="ExpressVPN ansehen"
        icon="🔒"
      />

      <h2>VPN einrichten — Schritt für Schritt</h2>
      <ol>
        <li><strong>Vor der Abreise:</strong> VPN-Abonnement abschliessen</li>
        <li><strong>App herunterladen</strong> — auf ALLEN Geräten (Handy, Laptop, Tablet)</li>
        <li><strong>Konto einrichten</strong> — und einloggen</li>
        <li><strong>Verbindung testen</strong> — ob der VPN funktioniert</li>
        <li><strong>Alternative Protokolle merken</strong> — manche VPNs haben «Stealth»-Modi</li>
        <li><strong>Offline-Kopie der App</strong> — speichere die APK (Android) als Backup</li>
      </ol>

      <div className="callout">
        <p><strong>💡 Pro-Tipp:</strong> Installiere mindestens 2 verschiedene VPNs. Wenn einer blockiert wird, hast du einen Backup. ExpressVPN + Surfshark ist eine gute Kombination.</p>
      </div>

      <h2>Was tun, wenn der VPN nicht funktioniert?</h2>
      <ul>
        <li><strong>Server wechseln</strong> — versuche Hong Kong, Japan oder Singapur</li>
        <li><strong>Protokoll wechseln</strong> — nutze «Stealth» oder «Obfuscated»-Modus</li>
        <li><strong>Zweiten VPN nutzen</strong> — deshalb: immer 2 installieren!</li>
        <li><strong>WLAN statt Mobilnetz</strong> — manchmal funktioniert es besser</li>
        <li><strong>Nachts versuchen</strong> — weniger Verkehr = bessere Chancen</li>
      </ul>

      <h2>Ist VPN in China legal?</h2>
      <p>Die Situation ist grau. <strong>Für Touristen</strong> ist die Nutzung eines VPN nicht strafbar. China konzentriert sich auf die Anbieter, nicht auf Nutzer. Praktisch jede:r Ausländer:in in China nutzt einen VPN. Sei einfach diskret.</p>

      <AffiliateCTA
        title="Auch wichtig: eSIM für China"
        description="Internet brauchst du auch — mit einer eSIM bist du ab der Landung online."
        href="/china-basics/esim"
        label="Zum eSIM-Guide"
        icon="📶"
        variant="secondary"
      />

      <FooterCTA
        title="Jetzt Bezahl-Apps einrichten"
        subtitle="Ohne Alipay und WeChat Pay bist du in China aufgeschmissen."
        href="/china-basics/bezahlung"
        label="Zum Bezahlen-Guide"
      />
    </DetailPageLayout>
  )
}