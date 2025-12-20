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
  ExternalLink,
  Award,
  Flag,
  Sparkles
} from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

interface TouristDestination {
  name: string
  category: "spiaggia" | "storico" | "natura" | "cultura" | "gastronomia" | "unesco"
  distance: string
  driveTime: string
  description: string
  image: string
  imageAlt: string
  highlights: string[]
  bestTime?: string
  link?: string
  badges?: ("unesco" | "bandiera-blu" | "4k")[]
  featured?: boolean
}

const destinations: TouristDestination[] = [
  {
    name: "Spiaggia dei Gigli",
    category: "spiaggia",
    distance: "100 metri",
    driveTime: "1 minuto a piedi",
    description: "La spiaggia più vicina a Villa Olimpia, con sabbia dorata e acque cristalline. Perfetta per famiglie, dotata di servizi e ristoranti. Bandiera Blu per la qualità delle acque.",
    image: "/images/villa/location/spiaggia-dei-gigli.jpg",
    imageAlt: "Spiaggia dei Gigli - Bandiera Blu Capo Rizzuto - Acque cristalline e sabbia dorata",
    highlights: ["Bandiera Blu 2024", "Sabbia dorata", "Acque cristalline", "Servizi completi", "Ristoranti sul mare"],
    bestTime: "Maggio - Ottobre",
    link: "/location",
    badges: ["bandiera-blu", "4k"],
    featured: true
  },
  {
    name: "Area Marina Protetta Capo Rizzuto",
    category: "natura",
    distance: "2 km",
    driveTime: "5 minuti",
    description: "Una delle più belle aree marine protette d'Italia. Snorkeling, immersioni e pesca subacquea in acque cristalline. Biodiversità marina unica nel Mediterraneo.",
    image: "/images/villa/location/spiaggia-dei-gigli-2.jpg",
    imageAlt: "Area Marina Protetta Capo Rizzuto - Immersioni snorkeling 4K - Biodiversità marina Mediterraneo",
    highlights: ["Riserva marina protetta", "Snorkeling", "Immersioni", "Biodiversità unica", "Fondali spettacolari"],
    bestTime: "Giugno - Settembre",
    badges: ["4k"],
    featured: true
  },
  {
    name: "Spiagge Rosse - Bandiera Blu",
    category: "spiaggia",
    distance: "12 km",
    driveTime: "15 minuti",
    description: "Le famose Spiagge Rosse con sabbia colorata e acque turchesi. Bandiera Blu per qualità ambientale e servizi eccellenti. Una delle spiagge più fotografate della Calabria.",
    image: "/images/villa/location/spiaggia-dei-gigli.jpg",
    imageAlt: "Spiagge Rosse Bandiera Blu Capo Rizzuto - Sabbia colorata acque turchesi 4K",
    highlights: ["Bandiera Blu", "Sabbia rossa caratteristica", "Acque turchesi", "Foto panoramiche", "Servizi premium"],
    bestTime: "Giugno - Settembre",
    badges: ["bandiera-blu", "4k"],
    featured: true
  },
  {
    name: "Valli Cupe",
    category: "natura",
    distance: "65 km",
    driveTime: "1 ora 10 min",
    description: "Riserva naturale spettacolare con cascate, gole profonde e natura selvaggia. Patrimonio naturalistico della Calabria. Escursioni guidate e sentieri per tutti i livelli.",
    image: "/images/villa/location/spiaggia-dei-gigli-2.jpg",
    imageAlt: "Valli Cupe Calabria - Cascate gole natura selvaggia escursioni 4K",
    highlights: ["Riserva naturale", "Cascate spettacolari", "Gole profonde", "Escursioni guidate", "Natura selvaggia"],
    bestTime: "Aprile - Ottobre",
    badges: ["4k"],
    featured: true
  },
  {
    name: "Le Castella - Patrimonio Storico",
    category: "storico",
    distance: "8 km",
    driveTime: "10 minuti",
    description: "Il famoso castello aragonese costruito su un'isola, simbolo iconico della Costa degli Achei. Visite guidate e ristoranti tipici. Patrimonio storico calabrese.",
    image: "/images/villa/location/spiaggia-dei-gigli.jpg",
    imageAlt: "Castello Aragonese Le Castella Capo Rizzuto - Patrimonio storico Calabria 4K",
    highlights: ["Castello aragonese", "Visite guidate", "Panorami mozzafiato", "Ristoranti tipici", "Patrimonio storico"],
    bestTime: "Tutto l'anno",
    badges: ["4k"]
  },
  {
    name: "Crotone - Città Storica",
    category: "cultura",
    distance: "15 km",
    driveTime: "20 minuti",
    description: "Città storica con il Museo Archeologico Nazionale, il centro antico e il promontorio con vista panoramica. Capitale della Magna Grecia in Calabria.",
    image: "/images/villa/location/spiaggia-dei-gigli-2.jpg",
    imageAlt: "Crotone città storica Magna Grecia - Museo archeologico centro antico 4K",
    highlights: ["Museo Archeologico Nazionale", "Centro storico", "Vista panoramica", "Gastronomia locale", "Magna Grecia"],
    bestTime: "Tutto l'anno",
    badges: ["4k"]
  },
  {
    name: "Capo Vaticano",
    category: "spiaggia",
    distance: "85 km",
    driveTime: "1 ora 15 min",
    description: "Una delle spiagge più belle della Calabria, con scogliere a picco sul mare e vista sulle Isole Eolie. Atmosfera esclusiva e panorami mozzafiato.",
    image: "/images/villa/location/spiaggia-dei-gigli.jpg",
    imageAlt: "Capo Vaticano Calabria - Spiagge scogliere vista Eolie 4K",
    highlights: ["Spiagge paradisiache", "Vista Isole Eolie", "Scogliere spettacolari", "Atmosfera esclusiva", "Spiaggia da sogno"],
    bestTime: "Giugno - Settembre",
    badges: ["4k"]
  },
  {
    name: "Tropea",
    category: "cultura",
    distance: "90 km",
    driveTime: "1 ora 20 min",
    description: "La perla della Costa degli Dei. Centro storico affascinante, spiagge dorate e famosa per le cipolle rosse. Meta turistica internazionale della Calabria.",
    image: "/images/villa/location/spiaggia-dei-gigli-2.jpg",
    imageAlt: "Tropea Costa degli Dei - Centro storico spiagge dorate cipolla rossa 4K",
    highlights: ["Centro storico", "Spiagge dorate", "Cipolla rossa di Tropea", "Vita notturna", "Meta internazionale"],
    bestTime: "Maggio - Ottobre",
    badges: ["4k"]
  },
  {
    name: "Soverato",
    category: "spiaggia",
    distance: "60 km",
    driveTime: "50 minuti",
    description: "La perla dello Ionio, famosa per le spiagge dorate, la vita notturna e i ristoranti di pesce freschissimo. Bandiera Blu per qualità ambientale.",
    image: "/images/villa/location/spiaggia-dei-gigli.jpg",
    imageAlt: "Soverato perla dello Ionio - Spiagge dorate vita notturna pesce fresco Bandiera Blu 4K",
    highlights: ["Bandiera Blu", "Spiagge dorate", "Vita notturna", "Pesce fresco", "Resort esclusivi"],
    bestTime: "Giugno - Settembre",
    badges: ["bandiera-blu", "4k"]
  },
  {
    name: "Parco Nazionale della Sila",
    category: "natura",
    distance: "70 km",
    driveTime: "1 ora",
    description: "Il polmone verde della Calabria. Escursioni, laghi montani, fauna selvatica e rifugi accoglienti. Patrimonio naturale da esplorare in ogni stagione.",
    image: "/images/villa/location/spiaggia-dei-gigli-2.jpg",
    imageAlt: "Parco Nazionale Sila Calabria - Laghi montani escursioni natura 4K",
    highlights: ["Parco Nazionale", "Escursioni", "Laghi montani", "Fauna selvatica", "Rifugi"],
    bestTime: "Giugno - Settembre (estate), Dicembre - Marzo (sci)",
    badges: ["4k"]
  },
]

const categoryIcons = {
  spiaggia: Waves,
  storico: Castle,
  natura: Mountain,
  cultura: Camera,
  gastronomia: Umbrella,
  unesco: Award,
}

const categoryColors = {
  spiaggia: "from-blue-500 to-cyan-500",
  storico: "from-amber-500 to-orange-500",
  natura: "from-green-500 to-emerald-500",
  cultura: "from-purple-500 to-pink-500",
  gastronomia: "from-red-500 to-rose-500",
  unesco: "from-yellow-400 to-amber-500",
}

export function TerritorySection() {
  return (
    <section 
      className="py-20 md:py-24 bg-gradient-to-br from-background via-primary/5 to-background"
      itemScope
      itemType="https://schema.org/TouristDestination"
    >
      {/* Schema.org per destinazioni turistiche */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": destinations.map((dest, index) => ({
              "@type": "TouristDestination",
              "position": index + 1,
              "name": dest.name,
              "description": dest.description,
              "image": `https://villaolimpia.com${dest.image}`,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Capo Rizzuto",
                "addressRegion": "Calabria",
                "addressCountry": "IT"
              }
            }))
          })
        }}
      />
      
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Compass className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Scopri il Territorio</span>
              <Award className="h-4 w-4 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Mete Turistiche e Attrazioni della Calabria
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Esplora le meraviglie della Calabria e della Costa degli Achei. Dalle spiagge Bandiera Blu ai siti UNESCO, 
              dalle aree marine protette ai borghi storici. Scopri cosa visitare durante il tuo soggiorno a Villa Olimpia.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Destinations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {destinations.filter(d => d.featured).map((destination, index) => {
            const Icon = categoryIcons[destination.category]
            const gradientClass = categoryColors[destination.category]
            
            return (
              <ScrollReveal key={index} delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="h-full"
                >
                  <Card className="h-full hover:shadow-2xl transition-all border-2 border-primary/20 overflow-hidden group">
                    {/* Immagine principale */}
                    <div className="relative h-64 md:h-80 overflow-hidden">
                      <Image
                        src={destination.image}
                        alt={destination.imageAlt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index < 2}
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      
                      {/* Badges */}
                      <div className="absolute top-4 right-4 flex flex-wrap gap-2">
                        {destination.badges?.includes("unesco") && (
                          <span className="bg-yellow-400/90 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                            <Award className="w-3 h-3" />
                            UNESCO
                          </span>
                        )}
                        {destination.badges?.includes("bandiera-blu") && (
                          <span className="bg-blue-500/90 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                            <Flag className="w-3 h-3" />
                            Bandiera Blu
                          </span>
                        )}
                        {destination.badges?.includes("4k") && (
                          <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            4K
                          </span>
                        )}
                      </div>
                      
                      {/* Nome destinazione */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <h2 className="text-2xl md:text-3xl font-bold text-white">{destination.name}</h2>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-white/90">
                          <MapPin className="w-4 h-4" />
                          <span>{destination.distance}</span>
                          <span>•</span>
                          <span>{destination.driveTime}</span>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <p className="text-muted-foreground mb-4 leading-relaxed text-base">
                        {destination.description}
                      </p>

                      {/* Highlights */}
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-foreground mb-2">Punti di interesse:</p>
                        <div className="flex flex-wrap gap-2">
                          {destination.highlights.map((highlight, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium"
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
                        <Button variant="outline" size="sm" className="w-full">
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

        {/* Altre Destinazioni Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {destinations.filter(d => !d.featured).map((destination, index) => {
            const Icon = categoryIcons[destination.category]
            const gradientClass = categoryColors[destination.category]
            
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="h-full"
                >
                  <Card className="h-full hover:shadow-xl transition-all border-2 border-primary/10 overflow-hidden group">
                    {/* Immagine */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={destination.image}
                        alt={destination.imageAlt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      
                      {/* Badges */}
                      <div className="absolute top-2 right-2 flex flex-wrap gap-1">
                        {destination.badges?.includes("bandiera-blu") && (
                          <span className="bg-blue-500/90 text-white px-2 py-0.5 rounded-full text-xs font-bold flex items-center gap-1">
                            <Flag className="w-2.5 h-2.5" />
                            Blu
                          </span>
                        )}
                        {destination.badges?.includes("4k") && (
                          <span className="bg-primary/90 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                            4K
                          </span>
                        )}
                      </div>
                      
                      {/* Nome */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-lg font-bold text-white">{destination.name}</h3>
                        <div className="flex items-center gap-2 text-xs text-white/90 mt-1">
                          <MapPin className="w-3 h-3" />
                          <span>{destination.distance}</span>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                        {destination.description}
                      </p>

                      {/* Highlights */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1.5">
                          {destination.highlights.slice(0, 3).map((highlight, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Best Time */}
                      {destination.bestTime && (
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                          <Calendar className="w-3 h-3" />
                          <span>{destination.bestTime}</span>
                        </div>
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
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" variant="luxury" asChild>
              <Link href="/location">
                <MapPin className="mr-2 h-5 w-5" />
                Esplora la Location Completa
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/appartamenti">
                Prenota il Tuo Soggiorno
              </Link>
            </Button>
          </motion.div>
          <p className="text-sm text-muted-foreground mt-4">
            Scopri tutte le <Link href="/location" className="text-primary hover:underline font-semibold">attrazioni della Calabria</Link>, 
            i <Link href="/location" className="text-primary hover:underline font-semibold">ristoranti tipici</Link> e le attività nei dintorni di 
            <Link href="/appartamenti" className="text-primary hover:underline font-semibold"> Villa Olimpia</Link>
          </p>
        </div>
      </div>
    </section>
  )
}
