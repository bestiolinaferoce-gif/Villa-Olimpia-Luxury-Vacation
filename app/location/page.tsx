"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Car, Plane, Train, Ship, Calendar } from "lucide-react"
import Link from "next/link"
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

      {/* Internal Links - Esplora e Prenota */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-ocean/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-2 border-primary/20 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle>Prenota il tuo soggiorno</CardTitle>
                  <CardDescription>
                    Scegli tra i nostri 9 appartamenti di lusso con piscina privata e terrazza vista mare
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li>• <strong className="text-foreground">9 appartamenti</strong> eleganti e moderni</li>
                    <li>• <strong className="text-foreground">Piscina privata</strong> per ogni appartamento</li>
                    <li>• <strong className="text-foreground">Vista mare</strong> panoramica</li>
                    <li>• <strong className="text-foreground">100 metri</strong> dalla Spiaggia dei Gigli</li>
                    <li>• <strong className="text-foreground">WiFi gratuito</strong> e parcheggio incluso</li>
                  </ul>
                  <Link 
                    href="/appartamenti"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-[#FFC107] to-[#FFA000] text-white hover:from-[#FFD54F] hover:to-[#FFC107] shadow-lg w-full h-10 px-4 py-2"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Vedi tutti gli appartamenti
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle>Esplora i sapori del territorio</CardTitle>
                  <CardDescription>
                    Cantine storiche Cirò DOC, ristoranti eccellenza e prodotti tipici calabresi
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                    <li>• <strong className="text-foreground">Degustazioni vini</strong> nelle cantine Cirò DOC</li>
                    <li>• <strong className="text-foreground">Ristoranti pesce fresco</strong> a pochi km</li>
                    <li>• <strong className="text-foreground">Agriturismi</strong> con prodotti km zero</li>
                    <li>• <strong className="text-foreground">Prodotti tipici</strong> 'Nduja, cipolla rossa, bergamotto</li>
                    <li>• <strong className="text-foreground">Olio extravergine</strong> da frantoi tradizionali</li>
                  </ul>
                  <Button 
                    variant="default" 
                    className="w-full bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <Link href="/enogastronomia">
                      Scopri l'enogastronomia calabrese
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

