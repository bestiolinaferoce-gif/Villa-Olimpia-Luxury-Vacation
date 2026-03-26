import { generateMetadata } from "@/lib/metadata"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BlogArticleJsonLd } from "@/components/seo/blog-article-json-ld"

export const metadata = generateMetadata({
  title: "Perché Conviene la Prenotazione Diretta a Villa Olimpia",
  description: "Scopri i vantaggi della prenotazione diretta a Villa Olimpia: contatto rapido, proposta personalizzata, maggiore flessibilità e soggiorno a Capo Rizzuto senza intermediari.",
  path: "/blog/prenotazione-diretta-villa-olimpia-vantaggi",
  type: "article",
  keywords: ["prenotazione diretta villa olimpia", "prenota appartamenti capo rizzuto", "contatto diretto villa olimpia", "capopiccolo prenotazione diretta", "appartamenti capo rizzuto senza intermediari"],
})

export default function ArticlePage() {
  return (
    <div className="min-h-screen pt-20">
      <BlogArticleJsonLd
        title="Perché conviene la prenotazione diretta a Villa Olimpia"
        description="Scopri i vantaggi della prenotazione diretta a Villa Olimpia: contatto rapido, proposta personalizzata, maggiore flessibilità e soggiorno a Capo Rizzuto senza intermediari."
        path="/blog/prenotazione-diretta-villa-olimpia-vantaggi"
        datePublished="2026-03-16"
      />
      <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Prenotazione diretta" }]} />

      <section className="bg-gradient-to-br from-ocean/10 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Perché conviene la prenotazione diretta a Villa Olimpia
            </h1>
            <p className="text-xl text-muted-foreground">
              Se stai organizzando una vacanza a Capo Rizzuto, prenotare direttamente con Villa Olimpia è il modo più semplice per ricevere una proposta chiara, un contatto rapido e una soluzione davvero adatta alle tue date.
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
                Quando richiedi disponibilità direttamente a Villa Olimpia, ricevi una proposta più lineare e senza passaggi superflui. Questo ti aiuta a valutare meglio il soggiorno e a scegliere la soluzione più adatta tra i nostri appartamenti a Capopiccolo.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">2. Comunicazione diretta, risposte in pochi minuti</h2>
              <p className="text-lg text-muted-foreground">
                Con il contatto diretto hai una comunicazione più veloce e più utile: puoi chiedere disponibilità, chiarire quale appartamento è più adatto, ricevere dettagli sulla posizione e organizzare meglio l'arrivo.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">3. Flessibilità che i portali non permettono</h2>
              <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2">
                <li>Richieste speciali e necessità di soggiorno più chiare</li>
                <li>Indicazioni personalizzate su appartamenti e territorio</li>
                <li>Consigli utili su spiagge, escursioni e organizzazione della vacanza</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">4. Rapporto diretto = vacanza migliore</h2>
              <p className="text-lg text-muted-foreground">
                Quando il rapporto parte direttamente con la struttura, il soggiorno risulta più semplice da organizzare e più coerente con quello che stai cercando. Questo è particolarmente utile in una zona come Capo Rizzuto, dove posizione e tipologia dell'appartamento fanno una grande differenza.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">Come prenotare direttamente</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Puoi contattarci via email o WhatsApp e ricevere rapidamente una risposta sulla disponibilità, sull'appartamento più adatto e sulle informazioni pratiche per il soggiorno.
              </p>
              <p className="text-lg text-muted-foreground">
                In questo modo organizzi il soggiorno in modo più diretto, con meno attrito e con un confronto chiaro sulle tue esigenze reali di viaggio.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-primary/20 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="border border-primary/20 p-3 text-left font-semibold"></th>
                    <th className="border border-primary/20 p-3 text-left font-semibold">Prenotazione diretta</th>
                    <th className="border border-primary/20 p-3 text-left font-semibold">Canali intermedi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-primary/20 p-3 font-medium">Contatto</td>
                    <td className="border border-primary/20 p-3 text-green-600">Diretto e rapido</td>
                    <td className="border border-primary/20 p-3 text-muted-foreground">Filtrato dalla piattaforma</td>
                  </tr>
                  <tr>
                    <td className="border border-primary/20 p-3 font-medium">Scelta alloggio</td>
                    <td className="border border-primary/20 p-3 text-green-600">Più personalizzata</td>
                    <td className="border border-primary/20 p-3 text-muted-foreground">Più standardizzata</td>
                  </tr>
                  <tr>
                    <td className="border border-primary/20 p-3 font-medium">Flessibilità</td>
                    <td className="border border-primary/20 p-3 text-green-600">Alta</td>
                    <td className="border border-primary/20 p-3 text-muted-foreground">Rigida</td>
                  </tr>
                  <tr>
                    <td className="border border-primary/20 p-3 font-medium">Supporto sul territorio</td>
                    <td className="border border-primary/20 p-3 text-green-600">Più diretto</td>
                    <td className="border border-primary/20 p-3 text-muted-foreground">Più impersonale</td>
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
