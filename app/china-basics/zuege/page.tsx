import DetailPageLayout from '@/components/DetailPageLayout'
import AffiliateCTA from '@/components/AffiliateCTA'
import FooterCTA from '@/components/FooterCTA'

export const metadata = {
  title: 'Züge in China — Hochgeschwindigkeitszüge, Buchung & Klassen',
  description: 'Chinas Hochgeschwindigkeitszüge sind schnell, günstig und komfortabel. Buchung über Trip.com oder 12306, Klassen-Vergleich und Tipps für Schweizer:innen.',
  alternates: { canonical: 'https://visitchina.ch/china-basics/zuege' },
}

export default function TrainsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Züge in China — Hochgeschwindigkeitszüge, Buchung & Klassen',
    description: metadata.description,
    url: 'https://visitchina.ch/china-basics/zuege',
    publisher: { '@type': 'Organization', name: 'VisitChina.ch' },
  }

  return (
    <DetailPageLayout
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'China-Basics', href: '/china-basics' }, { label: 'Züge' }]}
      title="Züge in China"
      subtitle="Chinas Hochgeschwindigkeitsnetz ist fantastisch — schnell, pünktlich und bezahlbar."
      heroImage="https://picsum.photos/seed/china-bullet-train/800/400"
      updatedDate="12. Mai 2026"
      jsonLd={jsonLd}
    >
      <div className="callout">
        <p><strong>🚄 Fakt:</strong> China hat das längste Hochgeschwindigkeitsnetz der Welt — über 42'000 km. Peking nach Shanghai in 4,5 Stunden für ca. 60 CHF. Kein Grund, in China zu fliegen.</p>
      </div>

      <h2>Das Schnellzugnetz</h2>
      <p>Chinas Hochgeschwindigkeitszüge (G-Trains, D-Trains) verbinden alle grossen Städte. Die wichtigsten Routen:</p>
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Route</th>
            <th>Dauer</th>
            <th>Preis (2. Klasse)</th>
            <th>Zugtyp</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Peking → Shanghai</td><td>4h 18min</td><td>~60 CHF</td><td>G-Train</td></tr>
          <tr><td>Peking → Xi&apos;an</td><td>4h 30min</td><td>~50 CHF</td><td>G-Train</td></tr>
          <tr><td>Shanghai → Hangzhou</td><td>1h 03min</td><td>~12 CHF</td><td>G-Train</td></tr>
          <tr><td>Chengdu → Chongqing</td><td>1h 30min</td><td>~15 CHF</td><td>G-Train</td></tr>
          <tr><td>Guangzhou → Shenzhen</td><td>30min</td><td>~8 CHF</td><td>G-Train</td></tr>
        </tbody>
      </table>

      <h2>Wagenklassen</h2>
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Klasse</th>
            <th>Chinesisch</th>
            <th>Beschreibung</th>
            <th>Preis</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>2. Klasse</strong></td><td>二等座</td><td>5 Sitze pro Reihe, bequem, ausreichend Beinfereite</td><td>Basispreis</td></tr>
          <tr><td><strong>1. Klasse</strong></td><td>一等座</td><td>4 Sitze pro Reihe, mehr Platz, Ladeanschluss</td><td>+50–80%</td></tr>
          <tr><td><strong>Business Class</strong></td><td>商务座</td><td>2+1 Sitze, fast flach, Mahlzeit inklusive</td><td>+200%</td></tr>
        </tbody>
      </table>
      <p>Empfehlung: <strong>2. Klasse reicht völlig.</strong> Auch für 4+ Stunden-Strecken ist sie bequem und geräumig.</p>

      <h2>Ticket buchen</h2>

      <h3>Option 1: Trip.com (Empfohlen für Ausländer:innen)</h3>
      <ul>
        <li>Englische Oberfläche, einfache Buchung</li>
        <li>Kein chinesisches Zahlungsmittel nötig (Kreditkarte)</li>
        <li>Ausweisnummer wird bei Buchung benötigt</li>
        <li>Ticket wird elektronisch ausgestellt — kein physisches Ticket nötig</li>
        <li>Kleine Buchungsgebühr (~2–3 CHF)</li>
      </ul>

      <h3>Option 2: 12306.cn (Offiziell)</h3>
      <ul>
        <li>Offizielle chinesische Buchungsplattform</li>
        <li>Chinesisch + Englisch verfügbar</li>
        <li>Benötigt Verifizierung mit Ausweis (Pass)</li>
        <li>Alipay oder WeChat Pay nötig</li>
        <li>Keine Buchungsgebühr</li>
      </ul>

      <AffiliateCTA
        title="Züge buchen mit Trip.com"
        description="Einfache Buchung auf Englisch, Kreditkarte akzeptiert, keine chinesische Bezahl-App nötig."
        href="https://www.trip.com/trains/"
        label="Trip.com Züge"
        icon="🚄"
      />

      <h2>Am Bahnhof</h2>
      <ul>
        <li><strong>30 Minuten früher da sein</strong> — Security-Check wie am Flughafen</li>
        <li><strong>Ausweis/Pass mitnehmen</strong> — wird beim Einlass kontrolliert</li>
        <li><strong>Elektronisches Ticket</strong> — dein Pass ist dein Ticket</li>
        <li><strong>Boarding 15 Min vor Abfahrt</strong> — die Türen schliessen pünktlich</li>
      </ul>

      <div className="callout">
        <p><strong>💡 Tipp:</strong> Chinesische Bahnhöfe sind riesig und gut beschildert. Aber die Beschilderung ist oft nur auf Chinesisch und Englisch. Lade dir die Stationsnamen auf Chinesisch herunter, um nach dem Weg zu fragen.</p>
      </div>

      <h2>In der Stadt: Metro & DiDi</h2>
      <p>Für kürzere Strecken in der Stadt:</p>
      <ul>
        <li><strong>Metro/U-Bahn</strong> — günstig (2–5 RMB), sauber, einfach zu nutzen. Meist englische Beschilderung.</li>
        <li><strong>DiDi</strong> — Chinas Uber. Günstig, zuverlässig, in der App auf Englisch verfügbar. Bezahlt mit Alipay.</li>
        <li><strong>Fahrrad-Sharing</strong> — Meituan Bike, Hello Bike. Scanne QR-Code und los. Aber: Helm tragen und vorsichtig fahren!</li>
      </ul>

      <h2>Schweizer Pass & Bahntickets</h2>
      <p>Dein Schweizer Pass ist dein Ticket. Bei der Buchung gibst du die Passnummer ein. Am Bahnhof wird der Pass am Drehkreuz gescannt — kein Papier-Ticket nötig.</p>
      <ul>
        <li>Passnummer VOR der Buchung bereit haben</li>
        <li>Pass am Reisetage mitnehmen</li>
        <li>Namen exakt wie im Pass eingeben (keine Abkürzungen)</li>
      </ul>

      <FooterCTA
        title="Jetzt Reise planen!"
        subtitle="Reiserouten, Budget und beste Reisezeit — hier gehts zur Planung."
        href="/reise-planen"
        label="Reise planen"
      />
    </DetailPageLayout>
  )
}