import { generateMetadata } from "@/lib/metadata"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BlogArticleJsonLd } from "@/components/seo/blog-article-json-ld"

export const metadata = generateMetadata({
  title: "Castello Aragonese di Le Castella: guida completa per la visita",
  description: "Tutto quello che devi sapere per visitare il Castello Aragonese di Le Castella: storia, orari, prezzi e consigli pratici. A 5 minuti da Villa Olimpia, Isola di Capo Rizzuto.",
  path: "/blog/castello-aragonese-le-castella-guida",
  type: "article",
  keywords: ["castello le castella", "le castella cosa vedere", "castello aragonese capo rizzuto", "cosa fare isola capo rizzuto"],
})

export default function ArticlePage() {
  return (
    <div className="min-h-screen pt-20">
      <BlogArticleJsonLd
        title="Castello Aragonese di Le Castella: guida completa per la visita"
        description="Tutto quello che devi sapere per visitare il Castello Aragonese di Le Castella: storia, orari, prezzi e consigli pratici. A 5 minuti da Villa Olimpia, Isola di Capo Rizzuto."
        path="/blog/castello-aragonese-le-castella-guida"
        datePublished="2026-03-16"
      />
      <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Castello Aragonese Le Castella" }]} />

      <section className="bg-gradient-to-br from-ocean/10 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Castello Aragonese di Le Castella: guida completa per la visita
            </h1>
            <p className="text-xl text-muted-foreground">
              Il Castello Aragonese di Le Castella è un'antica fortezza medievale che sorge su un isolotto collegato alla terraferma da un sottile istmo, circondata per tre lati dal mare cristallino dell'Area Marina Protetta di Capo Rizzuto. Si trova a soli 5 minuti d'auto da Villa Olimpia.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#f5fbff] to-[#e6f4ff]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">La storia</h2>
              <p className="text-lg text-muted-foreground">
                Le origini risalgono all'epoca greca. La struttura attuale è prevalentemente medievale: costruita tra il XIV e il XVI secolo durante il dominio aragonese. Nel 1574 fu attaccata dalle flotte ottomane di Uluc Alì. Restaurata in epoca moderna, è oggi uno dei monumenti più visitati della Calabria.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">Cosa vedere</h2>
              <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2">
                <li>Torre principale — vista a 360° sul mare e sulla costa ionica</li>
                <li>Cortile interno — eventi culturali in estate</li>
                <li>Camminamenti sulle mura — percorsi panoramici</li>
                <li>Museo interno — reperti storici e documentazione</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">Orari e prezzi (indicativi)</h2>
              <p className="text-lg text-muted-foreground">
                Aperto da giugno a settembre. Mattina 9:00–13:00, pomeriggio/sera 16:00–22:00. Biglietto a prezzo ridotto, bambini sotto i 6 anni gratis. Verificare aggiornamenti presso lo staff di Villa Olimpia.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">La spiaggia di Le Castella</h2>
              <p className="text-lg text-muted-foreground">
                Acque eccezionalmente chiare, fondale sabbioso, vista sul castello. Parte libera e zone attrezzate. Consigliamo il mattino presto o il tardo pomeriggio per trovare più spazio.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">Come raggiungere Le Castella da Villa Olimpia</h2>
              <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2">
                <li>Auto: 5-7 minuti</li>
                <li>Bicicletta: 20-25 minuti</li>
                <li>A piedi: 25-30 minuti (solo mattino o sera)</li>
              </ul>
            </div>

            <div className="pt-8 border-t">
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">Il consiglio di Villa Olimpia</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Il tramonto dai camminamenti del castello, con il sole che scende sul mare ionico e tinge di arancione le antiche pietre, è uno spettacolo che vale da solo il viaggio in Calabria.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild variant="default">
                  <Link href="/appartamenti">Scopri i lodge disponibili</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contatti">Contattaci per organizzare il soggiorno</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
