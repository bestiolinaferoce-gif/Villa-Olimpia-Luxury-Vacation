import { generateMetadata } from "@/lib/metadata"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BlogArticleJsonLd } from "@/components/seo/blog-article-json-ld"

export const metadata = generateMetadata({
  title: "Prenotazione diretta vs Airbnb e Booking: perché conviene prenotare direttamente a Villa Olimpia",
  description: "Scopri tutti i vantaggi di prenotare direttamente su villaolimpiacaporizzuto.com invece di usare Airbnb o Booking.com. Prezzo migliore garantito e servizio personalizzato.",
  path: "/blog/prenotazione-diretta-villa-olimpia-vantaggi",
  type: "article",
  keywords: ["prenotazione diretta villa olimpia", "affitto vacanze capo rizzuto", "villa olimpia booking airbnb", "appartamenti capo rizzuto prezzo migliore"],
})

export default function ArticlePage() {
  return (
    <div className="min-h-screen pt-20">
      <BlogArticleJsonLd
        title="Prenotazione diretta vs Airbnb e Booking: perché conviene prenotare direttamente a Villa Olimpia"
        description="Scopri tutti i vantaggi di prenotare direttamente su villaolimpiacaporizzuto.com invece di usare Airbnb o Booking.com. Prezzo migliore garantito e servizio personalizzato."
        path="/blog/prenotazione-diretta-villa-olimpia-vantaggi"
        datePublished="2026-03-16"
      />
      <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Prenotazione diretta" }]} />

      <section className="bg-gradient-to-br from-ocean/10 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Prenotazione diretta vs Airbnb e Booking: perché conviene prenotare direttamente a Villa Olimpia
            </h1>
            <p className="text-xl text-muted-foreground">
              Siamo presenti su Airbnb e Booking.com — ci aiutano a farci trovare. Ma c'è qualcosa che i portali non ti dicono: prenotare direttamente da noi conviene di più, per te e per noi.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#f5fbff] to-[#e6f4ff]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">1. Il prezzo migliore è sempre quello diretto</h2>
              <p className="text-lg text-muted-foreground">
                Airbnb e Booking applicano commissioni tra il 15% e il 20%. Quando prenoti direttamente, quelle commissioni non esistono: stesso lodge, stessa qualità, prezzo migliore garantito.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">2. Comunicazione diretta, risposte in pochi minuti</h2>
              <p className="text-lg text-muted-foreground">
                Con la prenotazione diretta sei in contatto con Francesco via WhatsApp: risposte in pochi minuti, foto su richiesta, flessibilità su check-in e check-out.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">3. Flessibilità che i portali non permettono</h2>
              <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2">
                <li>Richieste speciali (culla, letto aggiuntivo, kit benvenuto)</li>
                <li>Soggiorni personalizzati</li>
                <li>Escursioni, ristoranti, noleggio attrezzatura</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">4. Rapporto diretto = vacanza migliore</h2>
              <p className="text-lg text-muted-foreground">
                Quando prenoti direttamente ti conosciamo prima ancora che arrivi. Possiamo prepararci per accoglierti al meglio.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">Come prenotare direttamente</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Email: villaolimpiacaporizzuto@gmail.com | WhatsApp: +39 329 047 9193
              </p>
              <p className="text-lg text-muted-foreground">
                Acconto del 30% tramite bonifico. Saldo al check-in.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-primary/20 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="border border-primary/20 p-3 text-left font-semibold"></th>
                    <th className="border border-primary/20 p-3 text-left font-semibold">Prenotazione diretta</th>
                    <th className="border border-primary/20 p-3 text-left font-semibold">Airbnb / Booking</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-primary/20 p-3 font-medium">Prezzo</td>
                    <td className="border border-primary/20 p-3 text-green-600">Migliore garantito</td>
                    <td className="border border-primary/20 p-3 text-muted-foreground">Commissioni incluse</td>
                  </tr>
                  <tr>
                    <td className="border border-primary/20 p-3 font-medium">Comunicazione</td>
                    <td className="border border-primary/20 p-3 text-green-600">WhatsApp diretto</td>
                    <td className="border border-primary/20 p-3 text-muted-foreground">Tramite piattaforma</td>
                  </tr>
                  <tr>
                    <td className="border border-primary/20 p-3 font-medium">Flessibilità</td>
                    <td className="border border-primary/20 p-3 text-green-600">Alta</td>
                    <td className="border border-primary/20 p-3 text-muted-foreground">Rigida</td>
                  </tr>
                  <tr>
                    <td className="border border-primary/20 p-3 font-medium">Personalizzazione</td>
                    <td className="border border-primary/20 p-3 text-green-600">Completa</td>
                    <td className="border border-primary/20 p-3 text-muted-foreground">Limitata</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="pt-8 border-t flex flex-wrap gap-4">
              <Button asChild variant="default">
                <Link href="/appartamenti">Scopri i lodge disponibili</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contatti">Scrivici subito</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
