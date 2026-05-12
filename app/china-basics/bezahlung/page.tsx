import DetailPageLayout from '@/components/DetailPageLayout'
import AffiliateCTA from '@/components/AffiliateCTA'
import FooterCTA from '@/components/FooterCTA'

export const metadata = {
  title: 'Bezahlen in China — Alipay, WeChat Pay & Bargeld für Schweizer:innen',
  description: 'So bezahlst du in China als Schweizer:in: Alipay und WeChat Pay mit Schweizer Karte einrichten, Bargeld-Tipps und POSTCARD-Kompatibilität.',
  alternates: { canonical: 'https://visitchina.ch/china-basics/bezahlung' },
}

export default function PaymentPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Bezahlen in China — Alipay, WeChat Pay & Bargeld für Schweizer:innen',
    description: metadata.description,
    url: 'https://visitchina.ch/china-basics/bezahlung',
    publisher: { '@type': 'Organization', name: 'VisitChina.ch' },
  }

  return (
    <DetailPageLayout
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'China-Basics', href: '/china-basics' }, { label: 'Bezahlen' }]}
      title="Bezahlen in China"
      subtitle="In China bezahlt fast alles per Handy — hier erfährst du, wie du als Schweizer:in mit Alipay und WeChat Pay bezahlst."
      heroImage="https://picsum.photos/seed/china-alipay-pay/800/400"
      updatedDate="12. Mai 2026"
      jsonLd={jsonLd}
    >
      <div className="callout">
        <p><strong>💳 Realität:</strong> In China wird fast nur noch mit dem Handy bezahlt — QR-Code scannen, fertig. Bargeld funktioniert, ist aber unbequem. Bereite dich vor und richte dir Alipay und WeChat Pay ein.</p>
      </div>

      <h2>Alipay für Schweizer:innen einrichten</h2>
      <p>Alipay ist die meistgenutzte Bezahlappe in China. Seit 2024 können Ausländer:innen Alipay mit internationalen Kreditkarten nutzen.</p>

      <h3>Schritt für Schritt</h3>
      <ol>
        <li><strong>Alipay herunterladen</strong> — suche «Alipay» im App Store oder Google Play</li>
        <li><strong>Konto erstellen</strong> — nutze deine ausländische Telefonnummer</li>
        <li><strong>Verifizierung</strong> — lade deinen Pass hoch (Passport-Verifikation)</li>
        <li><strong>Kreditkarte hinzufügen</strong> — Visa oder Mastercard (Schweizer Karten funktionieren)</li>
        <li><strong>Bezahlen</strong> — scanne den QR-Code des Händlers</li>
      </ol>

      <div className="callout">
        <p><strong>🇨🇭 POSTCARD:</strong> Die Schweizer POSTCARD (EC-Karte) funktioniert in Alipay NICHT. Du brauchst eine Visa- oder Mastercard-Kreditkarte. Alternativ: Twint wird in China nicht akzeptiert.</p>
      </div>

      <h2>WeChat Pay einrichten</h2>
      <p>WeChat Pay ist die zweite wichtige Bezahlappe. Besonders wichtig, weil WeChat in China für fast alles genutzt wird — Bezahlen, Chatten, Miniprogramme.</p>

      <h3>Schritt für Schritt</h3>
      <ol>
        <li><strong>WeChat herunterladen</strong> — wichtig: VOR der Abreise!</li>
        <li><strong>Konto erstellen</strong> — mit deiner Telefonnummer</li>
        <li><strong>WeChat Pay aktivieren</strong> — unter «Me» → «Wallet» → internationale Karte hinzufügen</li>
        <li><strong>Pass verifizieren</strong> — ähnlich wie bei Alipay</li>
        <li><strong>Kreditkarte verknüpfen</strong> — Visa oder Mastercard</li>
      </ol>

      <h2>Alipay vs. WeChat Pay</h2>
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Alipay</th>
            <th>WeChat Pay</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Akzeptanz</td><td>Sehr hoch</td><td>Sehr hoch</td></tr>
          <tr><td>Schweizer Karten</td><td>✅ Visa/Mastercard</td><td>✅ Visa/Mastercard</td></tr>
          <tr><td>Einrichtung</td><td>Einfach</td><td>Einfach</td></tr>
          <tr><td>Minibeträge</td><td>✅ Ab 1 RMB</td><td>✅ Ab 1 RMB</td></tr>
          <tr><td>Miniprogramme</td><td>✅ Viele</td><td>✅ Noch mehr</td></tr>
          <tr><td>Offline-Modus</td><td>❌</td><td>❌</td></tr>
        </tbody>
      </table>
      <p>Empfehlung: <strong>Beide Apps einrichten.</strong> Manchmal akzeptiert ein Händler nur eine davon.</p>

      <h2>Bargeld als Backup</h2>
      <ul>
        <li>CHF können in China NICHT direkt umgetauscht werden — nimm EUR oder USD</li>
        <li>Bankautomaten gibt es in Grossstädten genug (Visa/Mastercard-Symbole beachten)</li>
        <li>Hebe kleine Beträge ab (200–500 RMB) — für Strassenstände und kleine Läden</li>
        <li>Tipp: 1'000 RMB (~120 CHF) als Notfall-Reserve einstecken</li>
      </ul>

      <AffiliateCTA
        title="eSIM für China"
        description="Ohne Internet funktionieren Alipay und WeChat Pay nicht. Sichere dir eine eSIM vor der Abreise."
        href="https://www.airalo.com/china-esim"
        label="eSIM ansehen"
        icon="📶"
      />

      <h2>Praktische Tipps</h2>
      <ul>
        <li><strong>Immer beide Apps bereit</strong> — Alipay UND WeChat Pay</li>
        <li><strong>Kreditkarte + Bargeld</strong> — nicht nur auf eine Zahlungsart verlassen</li>
        <li><strong>China UnionPay ignorieren</strong> — für Ausländer:innen nicht relevant</li>
        <li><strong>TWINT funktioniert NICHT</strong> — nur in der Schweiz</li>
        <li><strong>Trinkgeld ist unüblich</strong> — in China gibt man kein Trinkgeld</li>
      </ul>

      <FooterCTA
        title="VPN nicht vergessen!"
        subtitle="Ohne VPN kein Google Maps, WhatsApp oder Instagram in China."
        href="/china-basics/vpn"
        label="Zum VPN-Guide"
      />
    </DetailPageLayout>
  )
}