import { generateMetadata } from "@/lib/metadata"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BlogArticleJsonLd } from "@/components/seo/blog-article-json-ld"

export const metadata = generateMetadata({
  title: "Le 10 spiagge più belle vicino a Isola di Capo Rizzuto",
  description: "Scopri le 10 spiagge più belle dell'Isola di Capo Rizzuto e della Costa Ionica calabrese: sabbia dorata, acque cristalline e natura incontaminata nell'Area Marina Protetta.",
  path: "/blog/spiagge-piu-belle-capo-rizzuto",
  type: "article",
  keywords: ["spiagge capo rizzuto", "spiaggia dei gigli", "spiagge area marina protetta", "spiagge calabria ionica"],
})

export default function ArticlePage() {
  return (
    <div className="min-h-screen pt-20">
      <BlogArticleJsonLd
        title="Le 10 spiagge più belle vicino a Isola di Capo Rizzuto"
        description="Scopri le 10 spiagge più belle dell'Isola di Capo Rizzuto e della Costa Ionica calabrese: sabbia dorata, acque cristalline e natura incontaminata nell'Area Marina Protetta."
        path="/blog/spiagge-piu-belle-capo-rizzuto"
        datePublished="2026-03-16"
      />
      <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Le 10 spiagge più belle" }]} />

      <section className="bg-gradient-to-br from-ocean/10 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Le 10 spiagge più belle vicino a Isola di Capo Rizzuto
            </h1>
            <p className="text-xl text-muted-foreground">
              Se state cercando le spiagge più belle della Calabria, siete nel posto giusto. L&apos;Isola di Capo Rizzuto e la sua Area Marina Protetta custodiscono alcuni dei tratti di costa più spettacolari dell&apos;intero Mar Mediterraneo.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#f5fbff] to-[#e6f4ff]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <p className="text-lg text-muted-foreground">
              Partendo da Villa Olimpia — a Capo Piccolo, a pochi passi dal mare — abbiamo selezionato le 10 spiagge imperdibili di questa zona, tutte facilmente raggiungibili durante la vostra vacanza.
            </p>

            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">1. Spiaggia dei Gigli — La spiaggia di casa</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Partiamo dalla più vicina: la Spiaggia dei Gigli dista meno di un minuto a piedi da Villa Olimpia. Sabbia finissima color miele, acque basse e trasparenti, ideali per famiglie con bambini piccoli. Il nome viene dai gigli marini selvatici che in primavera fioriscono lungo il bordo della spiaggia. In estate è frequentata ma mai caotica — la sua dimensione contenuta la mantiene raccolta e piacevole.
              </p>
              <p className="text-muted-foreground font-medium">Ideale per: famiglie, bambini, chi vuole il mare a due passi dall&apos;alloggio.</p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">2. Spiaggia della Caletta — Raccolta e riservata</h2>
              <p className="text-lg text-muted-foreground mb-4">
                A pochi minuti a piedi dai lodge di Villa Olimpia si trova la Spiaggia della Caletta: una piccola insenatura naturale con fondali bassi e trasparenti, perfetta per fare snorkeling tra le rocce. Meno frequentata della Spiaggia dei Gigli, offre maggiore tranquillità e un contatto più diretto con la natura.
              </p>
              <p className="text-muted-foreground font-medium">Ideale per: coppie, snorkeling, chi cerca riservatezza.</p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">3. Spiaggia di Capo Rizzuto — La più panoramica</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Raggiungibile in pochi minuti d&apos;auto, la spiaggia di Capo Rizzuto si estende su un lungo litorale sabbioso con vista sul promontorio e sul mare aperto. L&apos;area è attrezzata con lidi e servizi, ma conserva tratti liberi dove stendere l&apos;asciugamano lontano dalla folla.
              </p>
              <p className="text-muted-foreground font-medium">Ideale per: giornate lunghe, famiglie numerose, chi ama i servizi da spiaggia.</p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">4. Le Castella — Spiaggia con vista sul Castello</h2>
              <p className="text-lg text-muted-foreground mb-4">
                La spiaggia di Le Castella è forse la più fotogenica di tutta la zona: ci si nuota davanti all&apos;antico Castello Aragonese che sorge su un isolotto collegato alla terra da una sottile lingua di sabbia. L&apos;acqua è cristallina, la storia è ovunque. Dista circa 5 minuti in auto da Villa Olimpia.
              </p>
              <p className="text-muted-foreground font-medium">Ideale per: fotografia, coppie, chi vuole unire cultura e mare.</p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">5. Caporizzuto — Spiaggia selvaggia nell&apos;Area Marina Protetta</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Una delle spiagge più autentiche della zona: nessun lido, nessun stabilimento, solo natura. L&apos;Area Marina Protetta di Capo Rizzuto protegge questi fondali da anni e il risultato è visibile: le acque sono tra le più pulite d&apos;Italia, la posidonia è rigogliosa, i pesci abbondano.
              </p>
              <p className="text-muted-foreground font-medium">Ideale per: amanti della natura, snorkeling, immersioni, fotografia subacquea.</p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">6. Spiaggia di Sovereto — La baia segreta</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Poco conosciuta dai turisti ma amatissima dai locali, la baia di Sovereto è raggiungibile con una breve passeggiata su un sentiero costiero. Acque di smeraldo, riva ghiaiosa mista a sabbia, silenzio quasi totale.
              </p>
              <p className="text-muted-foreground font-medium">Ideale per: escursionisti, fotografi, chi vuole sfuggire alla folla.</p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">7. Spiaggia di Capo Colonna — Storia e mare</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Nei pressi del famoso Tempio di Hera Lacinia, la spiaggia di Capo Colonna regala un&apos;atmosfera unica: ci si bagna a pochi metri da uno dei siti archeologici più importanti della Magna Grecia.
              </p>
              <p className="text-muted-foreground font-medium">Ideale per: appassionati di storia, escursioni culturali, tramonti indimenticabili.</p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">8. Spiaggia di Crotone Lido — Attrezzata e comoda</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Per chi vuole una giornata al mare con tutti i comfort — ombrellone, lettino, bar, ristorante — il lido di Crotone offre spiagge ben organizzate e acqua pulita, a circa 15 minuti d&apos;auto da Villa Olimpia.
              </p>
              <p className="text-muted-foreground font-medium">Ideale per: famiglie con bambini piccoli, chi non vuole rinunciare ai servizi.</p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">9. Spiaggia di Punta Alice — Dune e natura</h2>
              <p className="text-lg text-muted-foreground mb-4">
                A nord di Crotone, Punta Alice è un tratto di costa protetto da una riserva naturale, caratterizzato da dune di sabbia, macchia mediterranea e un faro storico.
              </p>
              <p className="text-muted-foreground font-medium">Ideale per: sport acquatici, natura, amanti del vento.</p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">10. Spiaggia di Copanello — La più elegante</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Scendendo verso sud, Copanello è considerata una delle spiagge più belle di tutta la Calabria: una baia incantevole con acque blu cobalto, fondali rocciosi e una scogliera scenografica.
              </p>
              <p className="text-muted-foreground font-medium">Ideale per: gita fuori porta, coppie, chi vuole vivere il meglio della Costa Ionica.</p>
            </div>

            <div className="pt-8 border-t">
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">La base perfetta per esplorare tutte queste spiagge</h2>
              <p className="text-lg text-muted-foreground mb-6">
                La posizione di Villa Olimpia a Capo Piccolo è strategica: la Spiaggia dei Gigli e la Spiaggia della Caletta sono letteralmente a un minuto a piedi, mentre tutte le altre spiagge di questa lista sono raggiungibili in meno di 45 minuti d&apos;auto.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                I nostri lodge indipendenti, la piscina privata e il personale sempre disponibile fanno di Villa Olimpia la base ideale per esplorare il meglio della Costa Ionica calabrese.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild variant="default">
                  <Link href="/appartamenti">Scopri i lodge disponibili</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contatti">Contattaci</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
