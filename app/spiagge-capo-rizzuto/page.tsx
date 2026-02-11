import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { generateMetadata } from "@/lib/metadata"
import { Waves, MapPin, Star, Umbrella } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = generateMetadata({
  title: "Migliori Spiagge Capo Rizzuto | Villa Olimpia | Spiaggia dei Gigli",
  description: "Scopri le migliori spiagge di Capo Rizzuto: Spiaggia dei Gigli, Capopiccolo, Le Castella. Villa Olimpia a meno di 100 m dalla spiaggia Bandiera Blu.",
  path: "/spiagge-capo-rizzuto",
})

export default function SpiaggeCapoRizzutoPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ocean/10 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Le Migliori Spiagge di Capo Rizzuto
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Scopri le spiagge più belle della costa ionica calabrese, dalla Spiaggia dei Gigli 
              alle calette incontaminate di Capopiccolo.{" "}
              <Link href="/appartamenti" className="underline underline-offset-4 decoration-primary/60 hover:text-primary">
                Villa Olimpia
              </Link>{" "}
              è la base perfetta per la tua vacanza al mare, a meno di 100 metri dalla spiaggia Bandiera Blu.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#f5fbff] to-[#e6f4ff]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8 text-center">
              Spiagge da Non Perdere
            </h2>
            
            <div className="space-y-8 mb-12">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Star className="h-6 w-6 text-yellow-500 fill-yellow-500" />
                    <CardTitle className="text-2xl">Spiaggia dei Gigli</CardTitle>
                  </div>
                  <CardDescription className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    A meno di 100 m da Villa Olimpia - Bandiera Blu
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground mb-4">
                    La <strong>Spiaggia dei Gigli</strong> è una delle spiagge più famose della Calabria, 
                    caratterizzata da sabbia fine e acque cristalline. Raggiungibile a piedi da Villa Olimpia 
                    in circa 1 minuto, è perfetta per famiglie grazie alla sua gradualità e alla presenza 
                    di servizi e stabilimenti balneari.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <p className="font-semibold mb-1">Caratteristiche</p>
                      <p className="text-sm text-muted-foreground">Sabbia fine, acque basse, Bandiera Blu</p>
                    </div>
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <p className="font-semibold mb-1">Servizi</p>
                      <p className="text-sm text-muted-foreground">Stabilimenti balneari, ristoranti, parcheggio</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Spiagge di Capopiccolo</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Area Marina Protetta Capo Rizzuto
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground mb-4">
                    Le spiagge di <strong>Capopiccolo</strong> si trovano nell&apos;Area Marina Protetta Capo Rizzuto, 
                    una delle riserve marine più importanti d&apos;Italia. Le acque sono cristalline e i fondali ricchi 
                    di vita marina, perfetti per snorkeling e immersioni.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <p className="font-semibold mb-1">Attività</p>
                      <p className="text-sm text-muted-foreground">Snorkeling, immersioni, kayak</p>
                    </div>
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <p className="font-semibold mb-1">Ambiente</p>
                      <p className="text-sm text-muted-foreground">Area protetta, natura incontaminata</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Spiaggia di Le Castella</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    8 minuti da Villa Olimpia
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground mb-4">
                    La spiaggia di <strong>Le Castella</strong> offre una vista spettacolare sul Castello Aragonese. 
                    Sabbia dorata e acque turchesi la rendono una delle spiagge più fotografate della Calabria.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <p className="font-semibold mb-1">Vista</p>
                      <p className="text-sm text-muted-foreground">Panorama sul Castello Aragonese</p>
                    </div>
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <p className="font-semibold mb-1">Atmosfera</p>
                      <p className="text-sm text-muted-foreground">Romantica e suggestiva</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Spiagge Rosse</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    12 km da Villa Olimpia - Bandiera Blu
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground mb-4">
                    Le <strong>Spiagge Rosse</strong> devono il loro nome alla particolare colorazione della sabbia, 
                    che assume tonalità rossastre. Questa caratteristica unica, unita alle acque cristalline, 
                    le rende una meta imperdibile per gli amanti della fotografia e della natura.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8 text-center">
              Attività da Fare sulle Spiagge
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Snorkeling",
                  description: "Esplora i fondali dell'Area Marina Protetta, ricchi di pesci colorati e vita marina."
                },
                {
                  title: "Immersioni Subacquee",
                  description: "Centri diving organizzano immersioni per tutti i livelli, dai principianti agli esperti."
                },
                {
                  title: "Kayak e Paddle",
                  description: "Noleggia kayak o paddle board per esplorare le calette nascoste lungo la costa."
                },
                {
                  title: "Pesca Sportiva",
                  description: "Le acque ricche di pesce offrono ottime opportunità per la pesca sportiva."
                },
              ].map((activity, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>{activity.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{activity.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Villa Olimpia */}
      <section className="py-20 bg-gradient-to-b from-[#f5fbff] to-[#e6f4ff]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-center">
              Perché Scegliere Villa Olimpia per le Spiagge di Capo Rizzuto
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Villa Olimpia è la base perfetta per esplorare tutte le spiagge della zona, con appartamenti indipendenti e piscina condivisa:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "A meno di 100 m dalla Spiaggia dei Gigli (1 minuto a piedi)",
                "Parcheggio gratuito per raggiungere le altre spiagge",
                "Piscina privata per relax dopo la spiaggia",
                "WiFi gratuito per condividere le tue foto",
                "Cucina completa per pranzi al sacco",
                "Posizione centrale per esplorare tutta la costa",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white/90 rounded-lg shadow-sm border border-primary/10">
                  <Umbrella className="h-5 w-5 text-primary flex-shrink-0" />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-playfair font-bold mb-6 text-center">
              Scopri di Più su Capo Rizzuto
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Button variant="outline" asChild className="h-auto py-4">
                <Link href="/capo-rizzuto">
                  <div className="text-center">
                    <p className="font-semibold">Appartamenti</p>
                    <p className="text-sm text-muted-foreground">Capo Rizzuto</p>
                  </div>
                </Link>
              </Button>
              <Button variant="outline" asChild className="h-auto py-4">
                <Link href="/le-castella">
                  <div className="text-center">
                    <p className="font-semibold">Le Castella</p>
                    <p className="text-sm text-muted-foreground">Castello Aragonese</p>
                  </div>
                </Link>
              </Button>
              <Button variant="outline" asChild className="h-auto py-4">
                <Link href="/area-marina-protetta">
                  <div className="text-center">
                    <p className="font-semibold">Area Marina</p>
                    <p className="text-sm text-muted-foreground">Protetta</p>
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-ocean via-primary to-ocean/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Prenota la Tua Vacanza al Mare
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Scegli Villa Olimpia come base per scoprire le spiagge più belle della Calabria e prenota in modo diretto, senza commissioni di portali.
          </p>
          <Button variant="luxury" size="lg" asChild className="group">
            <Link href="/contatti?source=spiagge-page#prenota">
              <span className="group-hover:translate-x-1 transition-transform inline-block">
                Verifica Disponibilità
              </span>
              <svg className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
