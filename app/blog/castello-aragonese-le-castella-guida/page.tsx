import { generateMetadata } from "@/lib/metadata"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BlogArticleJsonLd } from "@/components/seo/blog-article-json-ld"

export const metadata = generateMetadata({
  title: "Castello Aragonese di Le Castella: Cosa Vedere e Come Organizzare la Visita",
  description: "Scopri il Castello Aragonese di Le Castella, cosa vedere nei dintorni e perché visitarlo durante una vacanza a Capo Rizzuto. Guida utile partendo da Villa Olimpia.",
  path: "/blog/castello-aragonese-le-castella-guida",
  type: "article",
  keywords: ["castello aragonese le castella", "le castella cosa vedere", "visitare le castella", "cosa vedere capo rizzuto", "dove soggiornare vicino le castella"],
})

export default function ArticlePage() {
  return (
    <div className="min-h-screen pt-20">
      <BlogArticleJsonLd
        title="Castello Aragonese di Le Castella: cosa vedere e come organizzare la visita"
        description="Scopri il Castello Aragonese di Le Castella, cosa vedere nei dintorni e perché visitarlo durante una vacanza a Capo Rizzuto."
        path="/blog/castello-aragonese-le-castella-guida"
        datePublished="2026-03-16"
      />
      <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Castello Aragonese Le Castella" }]} />

      <section className="bg-gradient-to-br from-ocean/10 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Castello Aragonese di Le Castella: cosa vedere e come organizzare la visita
            </h1>
            <p className="text-xl text-muted-foreground">
              Il Castello Aragonese di Le Castella è uno dei luoghi più riconoscibili della costa ionica calabrese. Sorge su un isolotto collegato alla terraferma da un sottile istmo e rappresenta una delle visite più interessanti da fare durante una vacanza tra Capopiccolo, Le Castella e l&apos;Area Marina Protetta di Capo Rizzuto.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#f5fbff] to-[#e6f4ff]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <p className="text-lg text-muted-foreground">
              Per chi soggiorna a Villa Olimpia, Le Castella è una delle escursioni più semplici e appaganti da inserire nel programma della vacanza. La visita al castello può essere abbinata al mare, a una passeggiata nel borgo e a una cena sul lungomare, trasformando anche una mezza giornata in un&apos;esperienza molto completa.
            </p>

            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">La storia</h2>
              <p className="text-lg text-muted-foreground">
                Le origini del sito affondano nell&apos;antichità, mentre la struttura che oggi caratterizza il castello è legata soprattutto al periodo medievale e aragonese. La sua posizione sul mare lo ha reso per secoli un punto strategico e difensivo, e ancora oggi questa collocazione contribuisce al suo fascino scenografico.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">Cosa vedere</h2>
              <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2">
                <li>La fortezza affacciata sul mare e il suggestivo istmo che la collega alla terraferma</li>
                <li>I camminamenti panoramici con vista sulla costa ionica e sul borgo</li>
                <li>Il contesto di Le Castella, tra spiaggia, porticciolo e passeggiata sul lungomare</li>
                <li>Le prospettive fotografiche più belle al mattino e al tramonto</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">Quando visitarlo</h2>
              <p className="text-lg text-muted-foreground">
                Le Castella è piacevole in diversi momenti della giornata, ma il castello e il borgo danno il meglio soprattutto al mattino e nel tardo pomeriggio, quando la luce valorizza meglio il paesaggio. Per eventuali aperture, biglietti o iniziative stagionali, è sempre meglio verificare le informazioni aggiornate prima della visita.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">La spiaggia di Le Castella</h2>
              <p className="text-lg text-muted-foreground">
                La spiaggia di Le Castella aggiunge alla visita una componente balneare molto interessante: mare chiaro, fondale sabbioso e una vista sul castello che rende questo tratto di costa particolarmente riconoscibile. È una scelta perfetta per chi vuole unire in una sola uscita mare, borgo e fotografia.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">Come raggiungere Le Castella da Villa Olimpia</h2>
              <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2">
                <li>In auto in pochi minuti, con un tragitto semplice lungo la costa</li>
                <li>Ideale come escursione breve da abbinare a spiaggia o cena</li>
                <li>Facile da inserire anche in una vacanza fatta di spostamenti ridotti</li>
              </ul>
            </div>

            <div className="pt-8 border-t">
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">Il consiglio di Villa Olimpia</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Se vuoi vivere bene Le Castella, ti consigliamo di non trattarla come una semplice sosta veloce. Dedicarle il tempo di una passeggiata, di una sosta in spiaggia e di un momento sul lungomare permette di apprezzare davvero una delle località più iconiche del territorio di Capo Rizzuto.
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
