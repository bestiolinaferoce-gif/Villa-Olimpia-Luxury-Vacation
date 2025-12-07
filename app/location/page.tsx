"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Car, Plane, Train, Ship } from "lucide-react"
import { VILLA_OLIMPIA_LOCATION } from "@/lib/location-data"

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
              <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.234567891234!2d17.0729161!3d38.9138601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13403beea88d8403%3A0x2f47168bf140d1f3!2sVilla%20Olimpia!5e0!3m2!1sit!2sit!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa Villa Olimpia"
                />
              </div>
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
    </div>
  )
}

