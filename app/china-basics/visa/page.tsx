import DetailPageLayout from '@/components/DetailPageLayout'
import AffiliateCTA from '@/components/AffiliateCTA'
import FooterCTA from '@/components/FooterCTA'

export const metadata = {
  title: 'Visum für China — Schweizer:innen brauchen keins für 30 Tage',
  description: 'Schweizer:innen können seit Dezember 2023 bis zu 30 Tage visumfrei nach China reisen. Alles zum Visum, Einreisebestimmungen und Verlängerung.',
  alternates: { canonical: 'https://visitchina.ch/china-basics/visa' },
}

export default function VisaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Visum für China — Schweizer:innen brauchen keins für 30 Tage',
    description: metadata.description,
    url: 'https://visitchina.ch/china-basics/visa',
    publisher: { '@type': 'Organization', name: 'VisitChina.ch' },
  }

  return (
    <DetailPageLayout
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'China-Basics', href: '/china-basics' }, { label: 'Visum' }]}
      title="Visum für China"
      subtitle="Schweizer:innen können bis zu 30 Tage visumfrei einreisen — hier sind alle Details."
      heroImage="https://picsum.photos/seed/china-visa-passport/800/400"
      updatedDate="12. Mai 2026"
      jsonLd={jsonLd}
    >
      <div className="callout">
        <p><strong>🇨🇭 Gute Nachricht:</strong> Seit dem 15. Dezember 2023 gilt die visumfreie Einreise für Schweizer Staatsbürger:innen — bis zu 30 Tage pro Aufenthalt, für Touristik, Geschäftsreisen und Familienbesuche.</p>
      </div>

      <h2>Visumfreie Einreise für Schweizer:innen</h2>
      <p>Mit einem gültigen Schweizer Pass kannst du bis zu <strong>30 Tage visumfrei</strong> nach China reisen. Das Abkommen gilt für:</p>
      <ul>
        <li>Touristische Reisen</li>
        <li>Geschäftsreisen (Meetings, Konferenzen)</li>
        <li>Familienbesuche</li>
        <li>Transit</li>
      </ul>
      <p>Der Reisepass muss bei Einreise noch mindestens 6 Monate gültig sein und mindestens eine freie Seite haben.</p>

      <h2>Was du bei der Einreise brauchst</h2>
      <ol>
        <li><strong>Gültiger Schweizer Reisepass</strong> — mindestens 6 Monate gültig</li>
        <li><strong>Rück- oder Weiterflugticket</strong> — manchmal wird danach gefragt</li>
        <li><strong>Hotelreservierung oder Einladungsschreiben</strong> — als Nachweis des Aufenthaltszwecks</li>
        <li><strong>Ausgefüllte Gesundheitskarte</strong> — wird im Flugzeug verteilt (digitale Version: China Customs App)</li>
      </ol>

      <div className="callout">
        <p><strong>💡 Tipp:</strong> Drucke deine Hotelbuchung und das Rückflugticket aus. Auch wenn es nicht immer kontrolliert wird — besser vorbereitet als überrascht.</p>
      </div>

      <h2>Länger als 30 Tage?</h2>
      <p>Wenn du länger als 30 Tage bleiben möchtest, brauchst du ein Visum. Mögliche Optionen:</p>
      <ul>
        <li><strong>L-Visum (Touristenvisum)</strong> — bis zu 90 Tage, ca. 130 CHF</li>
        <li><strong>M-Visum (Geschäftsvisum)</strong> — bis zu 90 Tage, Einladungsschreiben nötig</li>
        <li><strong>Visumverlängerung in China</strong> — beim örtlichen Public Security Bureau (PSB), bis zu 30 Tage extra</li>
      </ul>
      <p>Beantrage das Visum beim <strong>Chinesischen Visa Application Service Center</strong> in Bern. Bearbeitungszeit: ca. 4–5 Arbeitstage.</p>

      <h2>Andere Nationalitäten</h2>
      <p>Nicht alle Europäer:innen haben visumfreien Zugang. Hier ein Überblick:</p>
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Land</th>
            <th>Visumfrei?</th>
            <th>Max. Tage</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>🇨🇭 Schweiz</td><td><strong>Ja</strong></td><td>30</td></tr>
          <tr><td>🇩🇪 Deutschland</td><td><strong>Ja</strong></td><td>15</td></tr>
          <tr><td>🇫🇷 Frankreich</td><td><strong>Ja</strong></td><td>15</td></tr>
          <tr><td>🇮🇹 Italien</td><td><strong>Ja</strong></td><td>15</td></tr>
          <tr><td>🇦🇹 Österreich</td><td>Nein</td><td>—</td></tr>
          <tr><td>🇳🇱 Niederlande</td><td>Nein</td><td>—</td></tr>
        </tbody>
      </table>
      <p>Prüfe immer die aktuellen Bedingungen auf der Website der chinesischen Botschaft deines Landes.</p>

      <AffiliateCTA
        title="eSIM für China"
        description="Sorg für Internet ab der ersten Minute — mit einer eSIM von Airalo. Keine physische SIM, kein Roaming-Stress."
        href="https://www.airalo.com/china-esim"
        label="eSIM ansehen"
        icon="📶"
      />

      <h2>Wichtige Kontakte</h2>
      <ul>
        <li><strong>Schweizerische Botschaft Peking</strong> — +86 10 8532 8833</li>
        <li><strong>Chinesisches Visa-Center Bern</strong> — visa-centre.ch</li>
        <li><strong>EDA Notfallnummer</strong> — +41 800 24 7 365 (24/7)</li>
      </ul>

      <FooterCTA
        title="Nächster Schritt: eSIM & Internet"
        subtitle="Mit einer eSIM bist du ab der Landung online — hier gehts zum Guide."
        href="/china-basics/esim"
        label="Zum eSIM-Guide"
      />
    </DetailPageLayout>
  )
}