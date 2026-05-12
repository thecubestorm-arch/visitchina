import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Cookie-Richtlinie',
  description: 'Cookie-Richtlinie von VisitChina.ch — welche Cookies wir verwenden, warum und wie du sie verwaltest.',
  alternates: { canonical: '/cookie-richtlinie' },
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-4 py-12 md:py-20">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Cookie-Richtlinie' },
        ]} />

        <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#1a3a4a] mb-8">
          Cookie-Richtlinie
        </h1>
        <p className="text-sm text-[#5d6a73] mb-8">Zuletzt aktualisiert: Mai 2026</p>

        <section className="prose prose-lg max-w-none text-[#1a3a4a] mb-10">
          <h2 className="font-serif text-xl text-[#1a3a4a]">1. Was sind Cookies?</h2>
          <p>
            Cookies sind kleine Textdateien, die dein Browser beim Besuch einer Webseite auf deinem Gerät speichert.
            Sie helfen uns, die Seite nutzbarer zu machen und zu verstehen, wie Besucher sie nutzen.
          </p>
        </section>

        <section className="prose prose-lg max-w-none text-[#1a3a4a] mb-10">
          <h2 className="font-serif text-xl text-[#1a3a4a]">2. Welche Cookies verwenden wir?</h2>
          <h3 className="font-semibold text-[#1a3a4a] mt-4">Notwendige Cookies</h3>
          <p>Diese Cookies sind für das Funktionieren der Seite erforderlich:</p>
          <ul>
            <li><strong>cookie_consent</strong> — Speichert deine Cookie-Einstellungen (1 Jahr)</li>
          </ul>

          <h3 className="font-semibold text-[#1a3a4a] mt-4">Funktionale Cookies</h3>
          <p>
            Diese Cookies helfen uns, die Seite zu verbessern:
          </p>
          <ul>
            <li><strong>Analytics-Cookies</strong> — Wir nutzen anonymisierte Analyse-Tools, um zu verstehen, wie Besucher die Seite nutzen. Keine personenbezogenen Daten werden erfasst.</li>
          </ul>

          <h3 className="font-semibold text-[#1a3a4a] mt-4">Partner-Links</h3>
          <p>
            Unsere Seite enthält Affiliate-Links zu Drittanbietern (z.B. eSIM-Anbieter, VPN-Dienste).
            Diese Links können eigene Cookies setzen, auf die wir keinen Einfluss haben.
            Affiliate-Links sind als solche gekennzeichnet.
          </p>
        </section>

        <section className="prose prose-lg max-w-none text-[#1a3a4a] mb-10">
          <h2 className="font-serif text-xl text-[#1a3a4a]">3. Wie kannst du Cookies verwalten?</h2>
          <p>
            Du kannst Cookies in deinen Browser-Einstellungen verwalten oder löschen.
            In den meisten Browsern findest du diese Einstellungen unter «Datenschutz» oder «Sicherheit».
            Bitte beachte, dass das Deaktivieren von Cookies die Funktionalität der Seite einschränken kann.
          </p>
          <p>
            Beim ersten Besuch unserer Seite erscheint ein Cookie-Banner, in dem du deine Einstellungen wählen kannst.
          </p>
        </section>

        <section className="prose prose-lg max-w-none text-[#1a3a4a] mb-10">
          <h2 className="font-serif text-xl text-[#1a3a4a]">4. Datenschutz</h2>
          <p>
            Weitere Informationen zum Datenschutz findest du in unserer{' '}
            <a href="/datenschutz" className="text-[#af5d32] hover:underline">Datenschutzerklärung</a>.
          </p>
        </section>

        <section className="prose prose-lg max-w-none text-[#1a3a4a] mb-10">
          <h2 className="font-serif text-xl text-[#1a3a4a]">5. Kontakt</h2>
          <p>
            Bei Fragen zu dieser Cookie-Richtlinie kontaktiere uns unter:{' '}
            <a href="mailto:info@visitchina.ch" className="text-[#af5d32] hover:underline">info@visitchina.ch</a>
          </p>
        </section>
      </div>
    </div>
  )
}