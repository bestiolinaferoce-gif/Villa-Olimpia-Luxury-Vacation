import { generateMetadata } from "@/lib/metadata"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = generateMetadata({
  title: "Vacanze in famiglia a Capo Rizzuto: perché è il posto perfetto con i bambini",
  description: "Stai pianificando una vacanza in famiglia in Calabria? Scopri perché Capo Rizzuto è la destinazione ideale per famiglie con bambini: mare sicuro, natura protetta e tutto a portata di mano.",
  path: "/blog/vacanze-famiglia-capo-rizzuto-bambini",
  keywords: ["vacanze famiglia calabria", "capo rizzuto bambini", "spiagge calabria bambini", "villa vacanze piscina famiglie calabria"],
})

export default function ArticlePage() {
  return (
    <div className="min-h-screen pt-20">
      <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Vacanze in famiglia" }]} />

      <section className="bg-gradient-to-br from-ocean/10 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Vacanze in famiglia a Capo Rizzuto: perché è il posto perfetto con i bambini
            </h1>
            <p className="text-xl text-muted-foreground">
              Organizzare una vacanza con bambini non è sempre semplice. Capo Rizzuto, nell'Area Marina Protetta della Costa Ionica calabrese, risponde perfettamente a tutte le esigenze.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#f5fbff] to-[#e6f4ff]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">1. Il mare più sicuro per i bambini</h2>
              <p className="text-lg text-muted-foreground mb-4">
                L'Area Marina Protetta di Capo Rizzuto è una delle riserve marine più grandi d'Italia. Le acque sono monitorate, pulite e certificate — bandiera blu da anni. Le spiagge di questa zona hanno fondali che digradano dolcemente, con profondità basse per decine di metri dalla riva.
              </p>
              <p className="text-lg text-muted-foreground">
                La Spiaggia dei Gigli, a meno di un minuto a piedi da Villa Olimpia, è uno degli esempi più belli: acqua tiepida, trasparente e bassissima per tutta la zona di balneazione.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">2. Zero minuti di trasferimento per il mare</h2>
              <p className="text-lg text-muted-foreground">
                La Spiaggia dei Gigli e la Spiaggia della Caletta distano meno di un minuto a piedi dai lodge. Nessun parcheggio da cercare, nessuna auto da caricare con borse e ombrelloni. Si esce dal lodge, si attraversa il cancello e si è già in spiaggia.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">3. Lodge indipendenti: la casa che si aspetta al ritorno</h2>
              <p className="text-lg text-muted-foreground">
                I 9 lodge indipendenti di Villa Olimpia garantiscono la massima autonomia: cucina attrezzata, zona living privata, ingresso indipendente e accesso diretto al giardino. Il lodge Tulipano, al piano terra con due bagni completi, è particolarmente apprezzato dalle famiglie con bambini piccoli.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">4. La piscina privata</h2>
              <p className="text-lg text-muted-foreground">
                La piscina privata di Villa Olimpia è ad uso esclusivo degli ospiti. L'area solarium attrezzata permette ai genitori di rilassarsi mentre i bambini nuotano. Per i più piccoli, alternare mare e piscina è il modo perfetto per riempire le giornate estive.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">5. Attività per bambini di ogni età</h2>
              <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2">
                <li>Snorkeling nell'Area Marina Protetta dai 6 anni in su</li>
                <li>Visita al Castello di Le Castella a 5 minuti d'auto — un luogo magico per i bambini</li>
                <li>Escursioni in barca con avvistamento di delfini</li>
                <li>Gelaterie e mercati locali per la scoperta del cibo calabrese</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">6. I ristoranti che fanno felici grandi e bambini</h2>
              <p className="text-lg text-muted-foreground">
                Villa Olimpia ha convenzioni con diversi ristoranti della zona che offrono cucina calabrese autentica in atmosfera familiare. Siamo in grado di prenotare per voi su richiesta.
              </p>
            </div>

            <div className="pt-8 border-t">
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">Pianifica la tua vacanza in famiglia a Villa Olimpia</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Mare sicuro, piscina privata, lodge indipendente, spiaggia a un minuto: una combinazione difficile da trovare altrove sulla Costa Ionica.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild variant="default">
                  <Link href="/appartamenti">Scopri i lodge disponibili</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contatti">Contattaci per un preventivo</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
