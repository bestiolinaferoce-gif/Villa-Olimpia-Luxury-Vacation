"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { 
  MapPin, 
  Camera, 
  Umbrella, 
  Waves, 
  Mountain, 
  Castle,
  Ship,
  Compass,
  Calendar,
  ExternalLink
} from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

interface TouristDestination {
  name: string
  category: "spiaggia" | "storico" | "natura" | "cultura" | "gastronomia"
  distance: string
  driveTime: string
  description: string
  image?: string
  highlights: string[]
  bestTime?: string
  link?: string
}

const destinations: TouristDestination[] = [
  {
    name: "Spiaggia dei Gigli",
    category: "spiaggia",
    distance: "100 metri",
    driveTime: "1 minuto a piedi",
    description: "La spiaggia più vicina a Villa Olimpia, con sabbia dorata e acque cristalline. Perfetta per famiglie, dotata di servizi e ristoranti.",
    highlights: ["Sabbia dorata", "Acque cristalline", "Servizi presenti", "Ristoranti sul mare"],
    bestTime: "Maggio - Ottobre",
    link: "/location"
  },
  {
    name: "Le Castella",
    category: "storico",
    distance: "8 km",
    driveTime: "10 minuti",
    description: "Il famoso castello aragonese costruito su un'isola, simbolo iconico della Costa degli Achei. Visite guidate e ristoranti tipici.",
    highlights: ["Castello aragonese", "Visite guidate", "Panorami mozzafiato", "Ristoranti tipici"],
    bestTime: "Tutto l'anno",
  },
  {
    name: "Area Marina Protetta Capo Rizzuto",
    category: "natura",
    distance: "2 km",
    driveTime: "5 minuti",
    description: "Una delle più belle aree marine protette d'Italia. Snorkeling, immersioni e pesca subacquea in acque cristalline.",
    highlights: ["Snorkeling", "Immersioni", "Biodiversità marina", "Pesca subacquea"],
    bestTime: "Giugno - Settembre",
  },
  {
    name: "Crotone",
    category: "cultura",
    distance: "15 km",
    driveTime: "20 minuti",
    description: "Città storica con il Museo Archeologico Nazionale, il centro antico e il promontorio con vista panoramica.",
    highlights: ["Museo Archeologico", "Centro storico", "Vista panoramica", "Gastronomia locale"],
    bestTime: "Tutto l'anno",
  },
  {
    name: "Capo Vaticano",
    category: "spiaggia",
    distance: "85 km",
    driveTime: "1 ora 15 min",
    description: "Una delle spiagge più belle della Calabria, con scogliere a picco sul mare e vista sulle Isole Eolie.",
    highlights: ["Spiagge paradisiache", "Vista Eolie", "Scogliere spettacolari", "Atmosfera esclusiva"],
    bestTime: "Giugno - Settembre",
  },
  {
    name: "Tropea",
    category: "cultura",
    distance: "90 km",
    driveTime: "1 ora 20 min",
    description: "La perla della Costa degli Dei. Centro storico affascinante, spiagge dorate e famosa per le cipolle rosse.",
    highlights: ["Centro storico", "Spiagge dorate", "Cipolla rossa di Tropea", "Vita notturna"],
    bestTime: "Maggio - Ottobre",
  },
  {
    name: "Soverato",
    category: "spiaggia",
    distance: "60 km",
    driveTime: "50 minuti",
    description: "La perla dello Ionio, famosa per le spiagge dorate, la vita notturna e i ristoranti di pesce freschissimo.",
    highlights: ["Spiagge dorate", "Vita notturna", "Pesce fresco", "Resort esclusivi"],
    bestTime: "Giugno - Settembre",
  },
  {
    name: "Parco Nazionale della Sila",
    category: "natura",
    distance: "70 km",
    driveTime: "1 ora",
    description: "Il polmone verde della Calabria. Escursioni, laghi montani, fauna selvatica e rifugi accoglienti.",
    highlights: ["Escursioni", "Laghi montani", "Fauna selvatica", "Refugi"],
    bestTime: "Giugno - Settembre (estate), Dicembre - Marzo (sci)",
  },
]

const categoryIcons = {
  spiaggia: Waves,
  storico: Castle,
  natura: Mountain,
  cultura: Camera,
  gastronomia: Umbrella,
}

const categoryColors = {
  spiaggia: "from-blue-500 to-cyan-500",
  storico: "from-amber-500 to-orange-500",
  natura: "from-green-500 to-emerald-500",
  cultura: "from-purple-500 to-pink-500",
  gastronomia: "from-red-500 to-rose-500",
}

export function TerritorySection() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Compass className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Scopri il Territorio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Mete Turistiche e Notizie sul Territorio
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Esplora le meraviglie della Calabria e della Costa degli Achei. Dalle spiagge cristalline alle città storiche, 
              scopri cosa visitare durante il tuo soggiorno a Villa Olimpia.
            </p>
          </div>
        </ScrollReveal>

        {/* Categorie */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.entries(categoryIcons).map(([category, Icon]) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full bg-white border-2 border-primary/20 hover:border-primary/50 transition-all flex items-center gap-2 text-sm font-semibold capitalize`}
            >
              <Icon className="w-4 h-4" />
              {category}
            </motion.button>
          ))}
        </div>

        {/* Destinazioni Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {destinations.map((destination, index) => {
            const Icon = categoryIcons[destination.category]
            const gradientClass = categoryColors[destination.category]
            
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="h-full"
                >
                  <Card className="h-full hover:shadow-xl transition-all border-2 border-primary/10 overflow-hidden">
                    {/* Header con gradiente */}
                    <div className={`bg-gradient-to-r ${gradientClass} p-6 text-white`}>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                            <div className="flex items-center gap-2 text-sm text-white/90">
                              <MapPin className="w-4 h-4" />
                              <span>{destination.distance}</span>
                              <span>•</span>
                              <span>{destination.driveTime}</span>
                            </div>
                          </div>
                        </div>
                        <span className="text-xs bg-white/20 px-3 py-1 rounded-full capitalize">
                          {destination.category}
                        </span>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {destination.description}
                      </p>

                      {/* Highlights */}
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-foreground mb-2">Punti di interesse:</p>
                        <div className="flex flex-wrap gap-2">
                          {destination.highlights.map((highlight, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Best Time */}
                      {destination.bestTime && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                          <Calendar className="w-4 h-4" />
                          <span>Periodo ideale: {destination.bestTime}</span>
                        </div>
                      )}

                      {/* Link */}
                      {destination.link ? (
                        <Button variant="outline" size="sm" className="w-full" asChild>
                          <Link href={destination.link}>
                            Scopri di più
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      ) : (
                        <Button variant="outline" size="sm" className="w-full" disabled>
                          Informazioni disponibili in loco
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* CTA Link Location */}
        <div className="text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" variant="luxury" asChild>
              <Link href="/location">
                <MapPin className="mr-2 h-5 w-5" />
                Esplora la Location Completa
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

