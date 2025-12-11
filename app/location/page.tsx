"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Car, Plane, Train, Ship } from "lucide-react"
import { VILLA_OLIMPIA_LOCATION } from "@/lib/location-data"
import dynamic from "next/dynamic"

// Lazy load Google Maps (componente pesante)
const MapComponent = dynamic(() => import("@/components/map-component").then(mod => ({ default: mod.MapComponent })), {
  loading: () => (
    <div className="w-full h-[400px] bg-gradient-to-br from-ocean/20 to-primary/20 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-muted-foreground">Caricamento mappa...</p>
      </div>
    </div>
  ),
  ssr: false
})

const attractions = [
  {
    name: "Spiagge di Capopiccolo",
    description: "Spiagge cristalline e calette incontaminate a pochi passi dalla villa",
    distance: "A pochi passi",
  },
  {
    name: "Le Castella",
    description: "Il famoso castello aragonese su un'isola, simbolo della Spiaggia dei Gigli",
    distance: "5 km",
  },
  {
    name: "Isola di Capo Rizzuto",
    description: "Centro storico con caratteristici vicoli e ristoranti tipici",
    distance: "3 km",
  },
  {
    name: "Riserva Marina Capo Rizzuto",
    description: "Una delle più belle aree marine protette d'Italia con fondali spettacolari",
    distance: "2 km",
  },
  {
    name: "Crotone",
    description: "Città storica con museo archeologico e centro antico",
    distance: "15 km",
  },
  {
    name: "Soverato",
    description: "La perla dello Ionio con spiagge dorate e vita notturna",
    distance: "60 km",
  },
]

const transportOptions = [
  {
    icon: Plane,
    title: "Aereo",
    description: "Aeroporto Crotone - 20 km",
  },
  {
    icon: Train,
    title: "Treno",
    description: "Stazione di Crotone - 15 km",
  },
  {
    icon: Car,
    title: "Auto",
    description: "SS106, uscita Isola di Capo Rizzuto",
  },
  {
    icon: Ship,
    title: "Nave",
    description: "Porto di Crotone - 15 km",
  },
]

export default function LocationPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-ocean/10 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              La Location
            </h1>
            <p className="text-xl text-muted-foreground">
              Scopri Capopiccolo, Isola di Capo Rizzuto, nella splendida Spiaggia dei Gigli, e tutte le
              meraviglie che la circondano
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <MapComponent />
            </div>
            
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Indirizzo Completo</CardTitle>
                  <CardDescription>
                    Villa Olimpia si trova a Capopiccolo, Isola di Capo Rizzuto, nella splendida Spiaggia dei Gigli
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p className="font-semibold">{VILLA_OLIMPIA_LOCATION.address.fullAddress}</p>
                    <div className="pt-4 space-y-2">
                      <p className="text-xs text-muted-foreground">
                        <strong>Distanze:</strong>
                      </p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Spiaggia: {VILLA_OLIMPIA_LOCATION.distances.spiaggia}</li>
                        <li>• Centro Storico: {VILLA_OLIMPIA_LOCATION.distances.centroStorico}</li>
                        <li>• Le Castella: {VILLA_OLIMPIA_LOCATION.distances.leCastella}</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 gap-4">
                {transportOptions.map((option, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <option.icon className="h-8 w-8 text-primary mb-2" />
                      <CardTitle className="text-lg">{option.title}</CardTitle>
                      <CardDescription>{option.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Territorio SEO Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8 text-center">
              Il Territorio di Capo Rizzuto e della Calabria
            </h2>
            
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Villa Olimpia si trova in una <strong>posizione privilegiata</strong> nel cuore della 
                <strong> Costa Ionica Calabrese</strong>, a Capopiccolo, Isola di Capo Rizzuto. Questa 
                zona della Calabria offre un mix unico di <strong>mare cristallino, storia millenaria 
                e natura incontaminata</strong>, rendendola una delle destinazioni più affascinanti 
                d'Italia.
              </p>

              <div className="space-y-4">
                <h3 className="text-2xl font-playfair font-bold text-foreground mt-8 mb-4">
                  Area Marina Protetta Capo Rizzuto
                </h3>
                <p className="leading-relaxed">
                  A soli <strong>2 km da Villa Olimpia</strong> si estende l'<strong>Area Marina Protetta 
                  Capo Rizzuto</strong>, una delle più grandi riserve marine d'Italia con oltre 14.000 
                  ettari di mare protetto. I fondali sono ricchi di biodiversità: cernie, polpi, stelle 
                  marine, gorgonie e una varietà incredibile di pesci colorati. Perfetta per 
                  <strong> snorkeling e immersioni subacquee</strong>, la riserva offre anche escursioni 
                  in barca e percorsi guidati per scoprire la vita marina.
                </p>

                <h3 className="text-2xl font-playfair font-bold text-foreground mt-8 mb-4">
                  Le Castella e il Castello Aragonese
                </h3>
                <p className="leading-relaxed">
                  A <strong>8 minuti di auto</strong> (3 km) da Villa Olimpia si trova <strong>Le Castella</strong>, 
                  uno dei borghi più suggestivi della Calabria. Il <strong>Castello Aragonese</strong>, 
                  costruito nel XV secolo su un isolotto collegato alla terraferma, è uno dei simboli 
                  più fotografati della costa ionica. Il borgo marinaro offre tre calette sabbiose 
                  perfette per famiglie e ristoranti specializzati in pesce fresco del giorno. La 
                  <strong> Spiaggia dei Gigli</strong>, con la vista del castello sullo sfondo, crea 
                  un'atmosfera unica e romantica.
                </p>

                <h3 className="text-2xl font-playfair font-bold text-foreground mt-8 mb-4">
                  Spiagge e Calette della Costa Ionica
                </h3>
                <p className="leading-relaxed">
                  La <strong>Spiaggia dei Gigli</strong> è a soli <strong>500 metri da Villa Olimpia</strong>, 
                  raggiungibile in 7 minuti a piedi. Bandiera Blu per la qualità delle acque, offre sabbia 
                  fine e acque cristalline perfette per famiglie. Le <strong>spiagge di Capopiccolo</strong>, 
                  nell'Area Marina Protetta, sono ideali per snorkeling grazie ai fondali ricchi di vita 
                  marina. Le famose <strong>Spiagge Rosse</strong>, a 10 minuti di auto, devono il loro 
                  nome alle falesie di arenaria rossa che creano un contrasto spettacolare con l'azzurro 
                  del mare.
                </p>

                <h3 className="text-2xl font-playfair font-bold text-foreground mt-8 mb-4">
                  Storia e Cultura: Crotone e i Dintorni
                </h3>
                <p className="leading-relaxed">
                  <strong>Crotone</strong>, a 15 km da Villa Olimpia, è una delle città della Magna Grecia 
                  più importanti, fondata nel 708 a.C. Il <strong>Museo Archeologico Nazionale</strong> ospita 
                  tesori unici, tra cui l'Hera Lacinia, una delle statue greche più belle al mondo. 
                  Passeggia nel centro storico, visita il Castello Carlo V affacciato sul mare, e scopri 
                  la storia di Pitagora che qui fondò la sua scuola. Il lungomare di 5 km è perfetto per 
                  passeggiate romantiche al tramonto.
                </p>

                <h3 className="text-2xl font-playfair font-bold text-foreground mt-8 mb-4">
                  Natura e Avventura: Valli Cupe e Sila
                </h3>
                <p className="leading-relaxed">
                  A <strong>35 minuti da Villa Olimpia</strong> si trovano le <strong>Valli Cupe</strong>, 
                  uno dei canyon più spettacolari della Calabria. Sentieri di trekking mozzafiato attraverso 
                  gole profonde, cascate nascoste e una natura incontaminata con oltre 50 specie di uccelli. 
                  La <strong>Sila Piccola</strong>, a 40 minuti, offre laghi cristallini, boschi di pini 
                  larici e sentieri panoramici. D'estate perfetta per escursioni e mountain bike, in 
                  inverno (dicembre-marzo) anche neve e sci di fondo.
                </p>

                <h3 className="text-2xl font-playfair font-bold text-foreground mt-8 mb-4">
                  Enogastronomia Calabrese
                </h3>
                <p className="leading-relaxed">
                  La Calabria è famosa per la sua <strong>cucina tradizionale</strong> e i suoi vini. 
                  Nei ristoranti della zona potrai gustare <strong>pesce fresco del giorno</strong>, 
                  specialità calabresi come la 'nduja, i peperoncini, i formaggi locali e i vini 
                  del territorio. Molti ristoranti hanno terrazze con vista sul mare e sul castello, 
                  creando un'atmosfera indimenticabile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attractions */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Attrazioni della Zona
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Scopri le meraviglie che ti aspettano nei dintorni di Villa Olimpia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl">{attraction.name}</CardTitle>
                    <span className="text-sm text-primary font-semibold">
                      {attraction.distance}
                    </span>
                  </div>
                  <CardDescription>{attraction.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

