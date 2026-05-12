import Breadcrumb from '@/components/Breadcrumb'

export const metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung von VisitChina.ch — nDSG- und DSGVO-konforme Datenschutzerklärung.',
  alternates: { canonical: 'https://visitchina.ch/datenschutz' },
}

export default function DatenschutzPage() {
  return (
    <div className="container-px mx-auto max-w-4xl py-6">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Datenschutz' }]} />

      <article className="prose-china pb-16">
        <h1 className="font-serif text-3xl md:text-4xl text-[var(--foreground)]">Datenschutzerklärung</h1>
        <p className="text-sm text-[var(--muted)]">Zuletzt aktualisiert: Mai 2026</p>
        <hr className="my-6 border-[var(--line)]" />

        <h2>1. Übersicht</h2>
        <p>
          VisitChina.ch nimmt den Schutz deiner personenbezogenen Daten ernst. Diese Datenschutzerklärung informiert dich darüber, welche Daten wir erheben, wie wir sie verwenden und welche Rechte du hast. Die Erklärung richtet sich nach dem Schweizerischen Datenschutzgesetz (nDSG) und der Europäischen Datenschutz-Grundverordnung (DSGVO).
        </p>

        <h2>2. Verantwortliche Stelle</h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website:<br /><br />
          VisitChina.ch<br />
          c/o Trail of China<br />
          Schweiz<br /><br />
          E-Mail: datenschutz@visitchina.ch
        </p>

        <h2>3. Erhobene Daten</h2>
        <h3>3.1 Automatisch erhobene Daten</h3>
        <p>Beim Besuch unserer Website werden automatisch folgende Daten erhoben:</p>
        <ul>
          <li>IP-Adresse (anonymisiert)</li>
          <li>Browsertyp und Version</li>
          <li>Betriebssystem</li>
          <li>Besuchte Seiten und Verweildauer</li>
          <li>Datum und Uhrzeit des Besuches</li>
          <li>Referrer-URL</li>
        </ul>

        <h3>3.2 Von dir eingegebene Daten</h3>
        <p>Wir erheben keine personenbezogenen Daten über Formulare auf dieser Website. Es gibt keine Login-, Kontakt- oder Kommentarfunktion.</p>

        <h2>4. Cookies</h2>
        <p>
          VisitChina.ch verwendet Cookies. Detaillierte Informationen findest du in unserer{' '}
          <a href="/cookie-richtlinie">Cookie-Richtlinie</a>.
        </p>
        <p>Wir verwenden folgende Cookie-Kategorien:</p>
        <ul>
          <li><strong>Notwendige Cookies:</strong> Für den Betrieb der Website erforderlich (z.B. Cookie-Einwilligung)</li>
          <li><strong>Analyse-Cookies:</strong> Zur Verbesserung der Website (anonymisierte Daten)</li>
          <li><strong>Marketing-Cookies:</strong> Für Affiliate-Links und Werbung (nur mit Einwilligung)</li>
        </ul>

        <h2>5. Analyse-Tools</h2>
        <h3>5.1 Datenschutzfreundliche Analysen</h3>
        <p>
          Wir setzen datenschutzfreundliche Analyse-Tools ein, die keine personenbezogenen Daten an Dritte weitergeben. Die Daten werden anonymisiert erhoben und ausschliesslich zur Verbesserung unserer Website genutzt.
        </p>

        <h2>6. Affiliate-Links</h2>
        <p>
          Unsere Website enthält Affiliate-Links zu Drittanbietern (z.B. Airalo, ExpressVPN, Trip.com). Wenn du über diese Links kaufst, erhalten wir eine Provision. Es werden keine personenbezogenen Daten an die Affiliate-Partner übermittelt, ausser die für den Kauf notwendigen Daten.
        </p>

        <h2>7. Hosting</h2>
        <p>
          Die Website wird in der Schweiz gehostet. Es findet kein Transfer personenbezogener Daten in Drittstaaten ausserhalb der Schweiz/EU statt.
        </p>

        <h2>8. Deine Rechte</h2>
        <p>Gemäss nDSG und DSGVO hast du folgende Rechte:</p>
        <ul>
          <li><strong>Auskunft:</strong> Du kannst verlangen, dass wir dir Auskunft über deine gespeicherten Daten geben.</li>
          <li><strong>Berichtigung:</strong> Du kannst die Berichtigung unrichtiger Daten verlangen.</li>
          <li><strong>Löschung:</strong> Du kannst die Löschung deiner Daten verlangen.</li>
          <li><strong>Einschränkung:</strong> Du kannst die Einschränkung der Verarbeitung verlangen.</li>
          <li><strong>Datenübertragung:</strong> Du kannst die Übertragung deiner Daten an einen anderen Verantwortlichen verlangen.</li>
          <li><strong>Widerspruch:</strong> Du kannst der Verarbeitung widersprechen.</li>
        </ul>
        <p>
          Zur Ausübung deiner Rechte wende dich an: datenschutz@visitchina.ch
        </p>

        <h2>9. Datensicherheit</h2>
        <p>
          Wir setzen technische und organisatorische Massnahmen ein, um deine Daten vor unberechtigtem Zugriff, Verlust oder Missbrauch zu schützen. Die Website wird über HTTPS verschlüsselt betrieben.
        </p>

        <h2>10. Änderungen</h2>
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung anzupassen. Die aktuelle Version ist stets auf dieser Seite verfügbar.
        </p>

        <h2>11. Aufsichtsbehörde</h2>
        <p>
          Zuständige Datenschutzbehörde in der Schweiz:<br />
          Eidgenössischer Datenschutz- und Informationsbeauftragter (EDÖB)<br />
          <a href="https://www.edoeb.admin.ch" target="_blank" rel="noopener noreferrer">www.edoeb.admin.ch</a>
        </p>
      </article>
    </div>
  )
}