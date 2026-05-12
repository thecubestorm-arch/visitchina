import Breadcrumb from '@/components/Breadcrumb'

export const metadata = {
  title: 'Impressum',
  description: 'Impressum von VisitChina.ch — Angaben gemäss Schweizer Recht.',
  alternates: { canonical: 'https://visitchina.ch/impressum' },
}

export default function ImpressumPage() {
  return (
    <div className="container-px mx-auto max-w-4xl py-6">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Impressum' }]} />

      <article className="prose-china pb-16">
        <h1 className="font-serif text-3xl md:text-4xl text-[var(--foreground)]">Impressum</h1>
        <hr className="my-6 border-[var(--line)]" />

        <h2>Betreiberin</h2>
        <p>
          VisitChina.ch<br />
          c/o Trail of China<br />
          Schweiz
        </p>

        <h2>Kontakt</h2>
        <p>
          E-Mail: info@visitchina.ch<br />
        </p>

        <h2>Verantwortliche Person</h2>
        <p>
          Gemäss Art. 7 nDSG:<br />
          Name und Adresse der verantwortlichen Person können auf Anfrage per E-Mail an info@visitchina.ch erfragt werden.
        </p>

        <h2>Haftungsausschluss</h2>
        <p>
          Die Inhalte auf VisitChina.ch werden mit grösstmöglicher Sorgfalt erstellt. Dennoch übernehmen wir keine Gewähr für die Richtigkeit, Vollständigkeit oder Aktualität der Informationen. Die Nutzung der Inhalte erfolgt auf eigene Gefahr.
        </p>
        <p>
          VisitChina.ch enthält Links zu Drittanbietern (Affiliate-Links). Wir erhalten eine Provision, wenn du über diese Links kaufst — ohne zusätzliche Kosten für dich. Dies hat keinen Einfluss auf unsere Empfehlungen.
        </p>

        <h2>Urheberrecht</h2>
        <p>
          Alle Inhalte auf VisitChina.ch sind urheberrechtlich geschützt. Die Verwendung von Inhalten ohne schriftliche Genehmigung ist nicht gestattet.
        </p>

        <h2>Anwendbares Recht</h2>
        <p>
          Es gilt ausschliesslich Schweizer Recht. Gerichtsstand ist der Sitz der Betreiberin in der Schweiz.
        </p>

        <h2>Disclaimer zu externen Links</h2>
        <p>
          VisitChina.ch enthält Links zu externen Websites. Wir haben keinen Einfluss auf den Inhalt dieser Websites und übernehmen keine Haftung für deren Inhalte.
        </p>
      </article>
    </div>
  )
}