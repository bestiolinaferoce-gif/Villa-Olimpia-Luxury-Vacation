import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { generateMetadata } from "@/lib/metadata"
import { MapPin, Clock, Camera, Utensils, Waves, Mountain } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = generateMetadata({
  title: "Cosa Fare a Capo Rizzuto | Attrazioni e Attività | Villa Olimpia",
  description: "Cosa fare a Capo Rizzuto: spiagge, Le Castella, Area Marina Protetta, enogastronomia, escursioni. Guida completa alle attività e attrazioni.",
  path: "/cosa-fare-capo-rizzuto",
})

export default function CosaFareCapoRizzutoPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ocean/10 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Cosa Fare a Capo Rizzuto
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Scopri tutte le attività e le attrazioni che rendono Capo Rizzuto una delle destinazioni 
              più affascinanti della Calabria. Dalle spiagge alle escursioni, dall'enogastronomia alla cultura.
            </p>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-12 text-center">
              Attrazioni e Attività Principali
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Spiagge */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Waves className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl">Spiagge e Mare</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Spiaggia dei Gigli:</strong> A 500m da Villa Olimpia, Bandiera Blu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Capopiccolo:</strong> Spiagge nell'Area Marina Protetta</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Le Castella:</strong> Spiaggia con vista sul castello (8 min)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Spiagge Rosse:</strong> Sabbia colorata unica (12 km)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Snorkeling e Immersioni:</strong> Area Marina Protetta</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Cultura e Storia */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Camera className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl">Cultura e Storia</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Castello Aragonese:</strong> Fortezza del XV secolo a Le Castella</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Isola di Capo Rizzuto:</strong> Centro storico con vicoli caratteristici</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Crotone:</strong> Museo Archeologico e centro antico (15 km)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Roccelletta di Borgia:</strong> Scavi archeologici (40 km)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Chiese e Santuari:</strong> Architettura religiosa calabrese</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Enogastronomia */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Utensils className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl">Enogastronomia</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Pesce Fresco:</strong> Ristoranti con pesce del giorno</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Vini DOC Cirò:</strong> Degustazioni nelle cantine (30 km)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Prodotti Tipici:</strong> 'Nduja, peperoncino, formaggi locali</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Mercati Locali:</strong> Prodotti freschi e artigianato</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Cucina Calabrese:</strong> Piatti tradizionali autentici</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Escursioni */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Mountain className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl">Escursioni e Natura</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Valli Cupe:</strong> Riserva naturale con cascate (65 km)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Sila:</strong> Parco Nazionale, trekking e natura (80 km)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Sentieri Costieri:</strong> Passeggiate lungo la costa</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Osservazione Uccelli:</strong> Zone umide e lagune</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Fotografia Naturalistica:</strong> Parchi e riserve</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Itineraries */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8 text-center">
              Itinerari Consigliati
            </h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Giornata al Mare</CardTitle>
                  <CardDescription>Perfetta per famiglie</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Mattina (9:00-13:00)</p>
                        <p className="text-muted-foreground">Spiaggia dei Gigli: relax, bagni, giochi sulla spiaggia</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Pomeriggio (15:00-18:00)</p>
                        <p className="text-muted-foreground">Piscina Villa Olimpia o snorkeling a Capopiccolo</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Utensils className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Sera</p>
                        <p className="text-muted-foreground">Cena in ristorante tipico a Le Castella con vista castello</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Giornata Culturale</CardTitle>
                  <CardDescription>Per amanti della storia</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Mattina</p>
                        <p className="text-muted-foreground">Visita al Castello Aragonese di Le Castella (8 min da Villa Olimpia)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Pomeriggio</p>
                        <p className="text-muted-foreground">Museo Archeologico di Crotone e centro storico (15 km)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Utensils className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Sera</p>
                        <p className="text-muted-foreground">Passeggiata nel centro storico di Isola di Capo Rizzuto</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Giornata Attiva</CardTitle>
                  <CardDescription>Per sportivi e avventurieri</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Waves className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Mattina</p>
                        <p className="text-muted-foreground">Immersione subacquea o snorkeling nell'Area Marina Protetta</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mountain className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Pomeriggio</p>
                        <p className="text-muted-foreground">Escursione a Valli Cupe o trekking nella Sila</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Utensils className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Sera</p>
                        <p className="text-muted-foreground">Relax in piscina e cena con prodotti locali</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Villa Olimpia */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-center">
              Perché Scegliere Villa Olimpia come Base
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Villa Olimpia è perfettamente posizionata per esplorare tutto ciò che Capo Rizzuto ha da offrire:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Posizione centrale: tutte le attrazioni raggiungibili in pochi minuti",
                "Parcheggio gratuito per esplorare la zona in auto",
                "Piscina privata per relax dopo le escursioni",
                "Cucina completa per preparare pranzi al sacco",
                "WiFi gratuito per pianificare le attività",
                "9 appartamenti per ogni esigenza (coppie, famiglie, gruppi)",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
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
                <Link href="/spiagge-capo-rizzuto">
                  <div className="text-center">
                    <p className="font-semibold">Spiagge</p>
                    <p className="text-sm text-muted-foreground">Migliori spiagge</p>
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
            Inizia la Tua Avventura a Capo Rizzuto
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Prenota il tuo appartamento a Villa Olimpia e scopri tutto ciò che Capo Rizzuto ha da offrire.
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
