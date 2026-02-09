import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { generateMetadata } from "@/lib/metadata"
import { MapPin, Clock, Camera, Waves } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = generateMetadata({
  title: "Vacanze Le Castella | Villa Olimpia | Appartamenti vicino Castello Aragonese",
  description: "Prenota vacanze a Le Castella, Calabria. Villa Olimpia a 8 minuti dal Castello Aragonese. Appartamenti con piscina, WiFi, parcheggio. Spiaggia dei Gigli.",
  path: "/le-castella",
})

export default function LeCastellaPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ocean/10 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Vacanze Le Castella - Villa Olimpia
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Scopri Le Castella, uno dei borghi più suggestivi della Calabria, e soggiorna a Villa Olimpia, 
              a soli 8 minuti di auto dal famoso Castello Aragonese.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#f8fbff] to-[#e8f5ff]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Le Castella: Il Borgo del Castello Aragonese
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Le Castella è una frazione di Isola di Capo Rizzuto, famosa per il suo <strong>Castello Aragonese</strong>, 
              un'imponente fortezza costruita su un'isoletta collegata alla terraferma. Questo simbolo della Calabria 
              domina il panorama della Spiaggia dei Gigli ed è uno dei luoghi più fotografati della costa ionica.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Il castello, risalente al XV secolo, è stato utilizzato come fortezza difensiva contro le incursioni 
              saracene e oggi è una delle attrazioni turistiche più visitate della Calabria.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <Clock className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Distanza da Villa Olimpia</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">8 minuti</p>
                  <p className="text-muted-foreground">in auto (3 km)</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Camera className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Attrazione Principale</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">Castello Aragonese</p>
                  <p className="text-muted-foreground">Fortezza del XV secolo</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Waves className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Spiaggia</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">Spiaggia dei Gigli</p>
                  <p className="text-muted-foreground">Bandiera Blu</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What to Do */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8 text-center">
              Cosa Fare a Le Castella
            </h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Visita il Castello Aragonese</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Esplora l'interno del castello, sali sulle torri per ammirare il panorama mozzafiato sul mare Ionio, 
                    e scopri la storia di questa fortezza che ha resistito a secoli di battaglie.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Orari:</strong> Aperto tutto l'anno, orari variabili per stagione. Consigliata prenotazione in alta stagione.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Relax sulla Spiaggia dei Gigli</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    La spiaggia di Le Castella, conosciuta come "Spiaggia dei Gigli", è una delle più belle della Calabria. 
                    Sabbia fine, acque cristalline e la vista del castello sullo sfondo creano un'atmosfera unica.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Snorkeling e Immersioni</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Le acque intorno a Le Castella fanno parte dell'Area Marina Protetta Capo Rizzuto. 
                    I fondali sono ricchi di vita marina e perfetti per snorkeling e immersioni.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Ristoranti e Cucina Tipica</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Le Castella offre numerosi ristoranti dove gustare pesce fresco e specialità calabresi. 
                    Molti ristoranti hanno terrazze con vista sul castello e sul mare.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Stay at Villa Olimpia */}
      <section className="py-20 bg-gradient-to-b from-[#f8fbff] to-[#e8f5ff]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-center">
              Perché Soggiornare a Villa Olimpia per Visitare Le Castella
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Villa Olimpia è la base perfetta per esplorare Le Castella e tutta la costa ionica calabrese:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "A soli 8 minuti di auto da Le Castella",
                "9 appartamenti con piscina condivisa",
                "Parcheggio gratuito per la tua auto",
                "WiFi fibra gratuito",
                "A meno di 100 m dalla Spiaggia dei Gigli",
                "Posizione strategica per esplorare la Calabria",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white/90 rounded-lg shadow-sm border border-primary/10">
                  <div className="w-2 h-2 rounded-full bg-primary" />
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
                <Link href="/spiagge-capo-rizzuto">
                  <div className="text-center">
                    <p className="font-semibold">Spiagge</p>
                    <p className="text-sm text-muted-foreground">Migliori spiagge</p>
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
            Prenota la Tua Vacanza a Le Castella
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Scegli Villa Olimpia come base per esplorare Le Castella e tutta la bellezza della Calabria.
          </p>
          <Button variant="luxury" size="lg" asChild className="group">
            <Link href="/contatti">
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
