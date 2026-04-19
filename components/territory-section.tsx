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
  visitorGuide?: {
    history: string
    itinerary: string[]
    howToReach: string
    parking: string
    verifyNote: string
    officialHref?: string
    officialLabel?: string
  }
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
    link: "/spiagge-capo-rizzuto",
    badges: ["bandiera-blu", "4k"],
    featured: true
  },
  {
    name: "Area Marina Protetta Capo Rizzuto",
    category: "natura",
    distance: "2 km",
    driveTime: "5 minuti",
    description: "Una delle più belle aree marine protette d'Italia. Snorkeling, immersioni e pesca subacquea in acque cristalline. Biodiversità marina unica nel Mediterraneo.",
    image: "/images/territory/area-marina-protetta-capo-rizzuto.jpg",
    imageAlt: "Area Marina Protetta Capo Rizzuto con acque cristalline e biodiversità marina",
    highlights: ["Riserva marina protetta", "Snorkeling", "Immersioni", "Biodiversità unica", "Fondali spettacolari"],
    bestTime: "Giugno - Settembre",
    link: "/area-marina-protetta",
    badges: ["4k"],
    featured: true
  },
  {
    name: "Valli Cupe",
    category: "natura",
    distance: "65 km",
    driveTime: "1 ora 10 min",
    description: "Riserva naturale spettacolare con cascate, gole profonde e natura selvaggia. Patrimonio naturalistico della Calabria. Escursioni guidate e sentieri per tutti i livelli.",
    image: "/images/territory/valli-cupe-canyon.jpg",
    imageAlt: "Valli Cupe Calabria - Cascate gole natura selvaggia escursioni 4K",
    highlights: ["Riserva naturale", "Cascate spettacolari", "Gole profonde", "Escursioni guidate", "Natura selvaggia"],
    bestTime: "Aprile - Ottobre",
    link: "/territorio",
    badges: ["4k"],
    featured: true
  },
  {
    name: "Le Castella - Patrimonio Storico",
    category: "storico",
    distance: "8 km",
    driveTime: "10 minuti",
    description: "Il famoso castello aragonese costruito su un'isola, simbolo iconico della Costa degli Achei. Visite guidate e ristoranti tipici. Patrimonio storico calabrese.",
    image: "/images/territory/tramonto-castello-aragonese-le-castella.jpg",
    imageAlt: "Castello Aragonese di Le Castella al tramonto sulla costa ionica calabrese",
    highlights: ["Castello aragonese", "Visite guidate", "Panorami mozzafiato", "Ristoranti tipici", "Patrimonio storico"],
    bestTime: "Tutto l'anno",
    link: "/le-castella",
    badges: ["4k"]
  },
  {
    name: "Santa Severina",
    category: "cultura",
    distance: "40 km",
    driveTime: "circa 45–50 minuti in auto",
    description: "Borgo dell'entroterra crotonese tra vicoli, pietra viva e panorami sulla valle del Neto: una gita lenta, ideale se vuoi alternare il mare a un pomeriggio da cartolina.",
    image: "/images/territory/santa-severina-panorama.jpg",
    imageAlt: "Santa Severina vista dal borgo con il castello normanno nell'entroterra calabrese",
    highlights: ["Castello storico", "Borgo medievale", "Battistero paleocristiano", "Panorama sulla valle", "Gita culturale"],
    bestTime: "Tutto l'anno",
    link: "/territorio",
    badges: ["4k"],
    visitorGuide: {
      history:
        "Santa Severina è un borgo medievale nell'entroterra crotonese: vicoli stretti, piazzette silenziose e un castello che domina il paesaggio, con il duomo e un battistero paleocristiano molto suggestivo.",
      itinerary: [
        "Castello e mura: orientati sul borgo e sul panorama",
        "Duomo: pausa nel cuore storico",
        "Battistero paleocristiano: piccolo capolavoro da vedere con calma",
        "Belvedere sulla valle del Neto: chiudi il giro con una vista ampia",
      ],
      howToReach:
        "Da Villa Olimpia, in direzione Crotone e poi verso l'entroterra (itinerario su SS107 / collegamenti principali verso il Crotonese): conteggia circa 45–50 minuti in auto, a seconda del traffico e della stagione.",
      parking:
        "In genere è disponibile un parcheggio gratuito vicino all'ingresso del borgo: verifica sempre segnaletica e ordinanze locali aggiornate.",
      verifyNote:
        "Verifica orari e biglietti direttamente sul sito ufficiale del Castello di Santa Severina o del Comune prima della visita.",
      officialHref: "https://www.comune.santaseverina.kr.it/vivere_il_comune/luoghi/luogo_5.html",
      officialLabel: "Scheda ufficiale Comune di Santa Severina (Castello)",
    },
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
              "image": `https://villaolimpiacaporizzuto.com${dest.image}`,
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
              Cosa Vedere Vicino Villa Olimpia
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Mare, borghi storici e natura raggiungibili senza cambiare base: Capopiccolo, Le Castella,
              Santa Severina, Valli Cupe e l&apos;Area Marina Protetta di Capo Rizzuto.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Destinations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {destinations.filter(d => d.featured).map((destination, index) => {
            const Icon = categoryIcons[destination.category]
            return (
              <ScrollReveal key={index} delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="h-full"
                >
                  <Card className="h-full hover:shadow-2xl transition-all border border-white/60 bg-white/90 backdrop-blur-sm overflow-hidden group shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
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
                        <div className="mb-3 h-px w-16 bg-white/50" />
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
                              className="text-xs bg-sky-50 text-sky-800 px-3 py-1.5 rounded-full font-medium ring-1 ring-sky-100"
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
                        <Button variant="outline" size="sm" className="w-full border-slate-200 bg-white hover:bg-sky-50" asChild>
                          <Link href={destination.link}>
                            Scopri di più
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      ) : (
                        <Button variant="outline" size="sm" className="w-full border-slate-200 bg-white hover:bg-sky-50" asChild>
                          <Link href="/territorio">
                            Esplora il territorio
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Link>
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
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="h-full"
                >
                  <Card className="h-full hover:shadow-xl transition-all border border-white/60 bg-white/90 backdrop-blur-sm overflow-hidden group shadow-[0_16px_40px_rgba(15,23,42,0.07)]">
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

                      {destination.visitorGuide && (
                        <details className="mb-4 rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-sm text-slate-700">
                          <summary className="cursor-pointer font-semibold text-slate-900 outline-none">
                            Mini-guida pratica
                          </summary>
                          <div className="mt-3 space-y-3">
                            <p className="leading-relaxed">{destination.visitorGuide.history}</p>
                            <div>
                              <p className="font-semibold text-slate-900 mb-1">Cosa vedere (ordine consigliato)</p>
                              <ol className="list-decimal pl-5 space-y-1">
                                {destination.visitorGuide.itinerary.map((step, idx) => (
                                  <li key={idx}>{step}</li>
                                ))}
                              </ol>
                            </div>
                            <p>
                              <span className="font-semibold text-slate-900">Come arrivare da Villa Olimpia: </span>
                              {destination.visitorGuide.howToReach}
                            </p>
                            <p>
                              <span className="font-semibold text-slate-900">Parcheggio: </span>
                              {destination.visitorGuide.parking}
                            </p>
                            <p className="text-xs text-muted-foreground">{destination.visitorGuide.verifyNote}</p>
                            {destination.visitorGuide.officialHref && destination.visitorGuide.officialLabel && (
                              <p>
                                <a
                                  href={destination.visitorGuide.officialHref}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-medium text-primary underline underline-offset-4"
                                >
                                  {destination.visitorGuide.officialLabel}
                                </a>
                              </p>
                            )}
                          </div>
                        </details>
                      )}

                      {destination.link ? (
                        <Button variant="outline" size="sm" className="w-full border-slate-200 bg-white hover:bg-sky-50" asChild>
                          <Link href={destination.link}>
                            Scopri di più
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      ) : (
                        <Button variant="outline" size="sm" className="w-full border-slate-200 bg-white hover:bg-sky-50" asChild>
                          <Link href="/territorio">
                            Esplora il territorio
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Link>
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
            Scopri tutte le <Link href="/cosa-fare-capo-rizzuto" className="text-primary hover:underline font-semibold">attrazioni della Calabria</Link>, 
            i <Link href="/enogastronomia" className="text-primary hover:underline font-semibold">ristoranti tipici</Link> e le attività nei dintorni di 
            <Link href="/appartamenti" className="text-primary hover:underline font-semibold"> Villa Olimpia</Link>
          </p>
        </div>
      </div>
    </section>
  )
}
