import DetailPageLayout from '@/components/DetailPageLayout'
import FooterCTA from '@/components/FooterCTA'

export const metadata = {
  title: 'Sicherheit in China — Ist China sicher für Touristen?',
  description: 'China ist eines der sichersten Reiseländer der Welt. Swiss Embassy-Kontakte, Scam-Warnungen und Tipps für Solo-Reisende.',
  alternates: { canonical: 'https://visitchina.ch/china-basics/sicherheit' },
}

export default function SafetyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Sicherheit in China — Ist China sicher für Touristen?',
    description: metadata.description,
    url: 'https://visitchina.ch/china-basics/sicherheit',
    publisher: { '@type': 'Organization', name: 'VisitChina.ch' },
  }

  return (
    <DetailPageLayout
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'China-Basics', href: '/china-basics' }, { label: 'Sicherheit' }]}
      title="Sicherheit in China"
      subtitle="China ist sehr sicher — aber hier sind die Dinge, auf die du achten solltest."
      heroImage="https://picsum.photos/seed/china-safety-travel/800/400"
      updatedDate="12. Mai 2026"
      jsonLd={jsonLd}
    >
      <div className="callout">
        <p><strong>🛡️ Kurze Antwort:</strong> Ja, China ist für Touristen sehr sicher. Gewaltkriminalität ist selten, und du kannst dich auch nachts in Grossstädten frei bewegen. Die wenigen Risiken sind eher praktischer Natur.</p>
      </div>

      <h2>Die Fakten</h2>
      <ul>
        <li><strong>Mordrate:</strong> 0.5 pro 100'000 Einwohner (Schweiz: 0.6) — niedriger als in Europa</li>
        <li><strong>Diebstahl:</strong> Sehr selten, besonders in Touristengebieten</li>
        <li><strong>Gewalt gegen Ausländer:innen:</strong> Fast nicht existent</li>
        <li><strong>Verkehr:</strong> Das grösste Risiko — sei vorsichtig beim Überqueren von Strassen</li>
      </ul>

      <h2>Was du beachten solltest</h2>

      <h3>Touristen-Scams</h3>
      <p>In Touristengebieten (besonders Peking und Shanghai) gibt es bekannte Maschen:</p>
      <ul>
        <li><strong>«Tea House Scam»</strong> — Freundliche «Studenten» laden dich in ein Teehaus ein, die Rechnung ist astronomisch</li>
        <li><strong>«Art Gallery Scam»</strong> — «Studenten» bringen dich zu einer Ausstellung, du sollst über teure Kunst kaufen</li>
        <li><strong>Taxi-Scam</strong> — unlinzenzierte Taxis am Flughafen oder Bahnhof</li>
        <li><strong>Gefälschte Markenprodukte</strong> — in Touristenmärkten</li>
      </ul>
      <p>Lösung: Sei höflich, aber bestimmt. Sag einfach «No, thank you» und geh weiter.</p>

      <h3>Verkehrssicherheit</h3>
      <p>Chinesischer Verkehr ist chaotisch. E-Scooter fahren oft auf Gehwegen, und Autos respektieren Fussgänger nicht immer.</p>
      <ul>
        <li>Immer auf Zebrastreifen schauen, bevor du gehst</li>
        <li>E-Scooter auf Gehwegen beachten</li>
        <li>DiDi statt Strassentaxis (sicherer, transparente Preise)</li>
      </ul>

      <h3>Lebensmittel & Wasser</h3>
      <ul>
        <li>Leitungswasser NICHT trinken — immer abgekochtes Wasser oder Flaschenwasser</li>
        <li>Strassenessen ist normalerweise sicher (und lecker!)</li>
        <li>In Restaurants: Heisse Gerichte sind sicher, rohes vermeiden</li>
        <li>Chinesische Medizin: Apotheken sind gut sortiert, aber Beschriftung auf Chinesisch</li>
      </ul>

      <h2>Schweizer Botschaft und Konsulate</h2>
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Stadt</th>
            <th>Adresse</th>
            <th>Telefon</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>Peking (Botschaft)</strong></td><td>Sanlitun Dongwujie 3</td><td>+86 10 8532 8833</td></tr>
          <tr><td><strong>Shanghai (Generalkonsulat)</strong></td><td>22F, One Expo, 1088 Pudong South Rd</td><td>+86 21 6270 0519</td></tr>
          <tr><td><strong>Guangzhou (Generalkonsulat)</strong></td><td>Swiss Cham, Guangzhou</td><td>+86 20 3833 0450</td></tr>
        </tbody>
      </table>
      <p><strong>EDA Notfallnummer (24/7):</strong> +41 800 24 7 365</p>

      <h2>Für Solo-Reisende</h2>
      <ul>
        <li>China ist ausgezeichnet für Solo-Reisende — auch für Frauen</li>
        <li>Öffentliche Orte sind nachts sicher</li>
        <li>Hotels müssen Ausländer:innen aufnehmen — buche über Trip.com</li>
        <li>Teile deine Reisepläne mit jemandem zu Hause</li>
        <li>Habe immer eine Kopie deines Passes auf dem Handy</li>
      </ul>

      <h2>Was du NICHT tun solltest</h2>
      <ul>
        <li><strong>Keine politischen Diskussionen</strong> — besonders über Taiwan, Tibet, Xinjiang</li>
        <li><strong>Keine Drogen</strong> — China hat extrem strenge Drogengesetze</li>
        <li><strong>Keine Fotos von militärischen Einrichtungen</strong></li>
        <li><strong>Respektiere lokale Bräuche</strong> — in Tempeln, bei Essen, beim Umgang mit Menschen</li>
        <li><strong>Kein VPN-Verkauf oder -Verteilung</strong> — Nutzung ist grau, Vertrieb illegal</li>
      </ul>

      <FooterCTA
        title="Nächster Schritt: Züge in China"
        subtitle="Chinas Hochgeschwindigkeitszüge sind fantastisch — hier erfährst du alles über Buchung und Klassen."
        href="/china-basics/zuege"
        label="Zum Zug-Guide"
      />
    </DetailPageLayout>
  )
}