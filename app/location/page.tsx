"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Car, MapPin, Plane, Ship, Train, Waves } from "lucide-react"
import { VILLA_OLIMPIA_LOCATION } from "@/lib/location-data"
import { LocationMapModern } from "@/components/location-map-modern"
import VillaOlimpiaMap from "@/components/VillaOlimpiaMap"
import { LocalSeoSection } from "@/components/seo/local-seo-section"

const transportOptions = [
  { icon: Plane, title: "Aereo", description: "Aeroporto Crotone - 20 km" },
  { icon: Train, title: "Treno", description: "Stazione di Crotone - 15 km" },
  { icon: Car, title: "Auto", description: "SS106, uscita Isola di Capo Rizzuto" },
  { icon: Ship, title: "Nave", description: "Porto di Crotone - 15 km" },
]

const mediaStrip = [
  "/images/villa/gallery/Esterni_Spiaggia_01.jpg",
  "/images/villa/gallery/Esterni_LeCastella_01.jpg",
  "/images/villa/gallery/Esterni_Spiaggia_Tramonto_01.jpg",
]

export default function LocationPage() {
  const router = useRouter()

  const handleApartmentClick = (apartmentId: string) => {
    router.push(`/appartamenti/${apartmentId}`)
  }

  return (
    <div className="min-h-screen pt-20 bg-[#f8fbff]">
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/villa/gallery/Esterni_LeCastella_01.jpg"
            alt="Location Villa Olimpia"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#051527]/80 via-[#051527]/65 to-[#051527]/85" />
        </div>
        <div className="relative container mx-auto px-4 text-white max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-5">La Location</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Villa Olimpia è a Capopiccolo, sulla costa ionica calabrese: mare cristallino, Area Marina Protetta Capo
            Rizzuto, fondali perfetti per famiglie e snorkeling, con Le Castella raggiungibile in pochi minuti.
          </p>
          <p className="text-sm md:text-base text-white/80 mt-4">
            La Spiaggia dei Gigli, Bandiera Blu, è a meno di 100 metri dagli appartamenti: si raggiunge in circa 1
            minuto a piedi dal cancello di Villa Olimpia.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-[#f8fbff] to-[#e8f7ff]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <LocationMapModern />
            </div>

            <div className="space-y-4">
              <Card className="border-0 shadow-xl bg-white/95">
                <CardHeader>
                  <CardTitle>Indirizzo Completo</CardTitle>
                  <CardDescription>
                    Posizione reale verificata per Villa Olimpia
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p className="font-semibold">{VILLA_OLIMPIA_LOCATION.address.fullAddress}</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Spiaggia dei Gigli: {VILLA_OLIMPIA_LOCATION.distances.spiaggia}</li>
                    <li>• Le Castella: {VILLA_OLIMPIA_LOCATION.distances.leCastella}</li>
                    <li>• Centro storico: {VILLA_OLIMPIA_LOCATION.distances.centroStorico}</li>
                  </ul>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 gap-4">
                {transportOptions.map((option) => (
                  <Card key={option.title} className="border-0 shadow-md bg-white/90">
                    <CardHeader>
                      <option.icon className="h-7 w-7 text-primary mb-1" />
                      <CardTitle className="text-base">{option.title}</CardTitle>
                      <CardDescription>{option.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <LocalSeoSection
        title="Dove si trova Villa Olimpia"
        subtitle="Capopiccolo, Isola di Capo Rizzuto: mare cristallino, area marina protetta e Spiaggia dei Gigli a pochi passi."
        ctaHref="/contatti"
        ctaLabel="Chiedi disponibilita"
      />

      {/* Mappa interattiva appartamenti Villa Olimpia */}
      <section className="bg-[#f8fbff]">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-4">Scopri la Nostra Struttura</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            9 appartamenti con piscina condivisa a Capo Rizzuto. Clicca su un appartamento per dettagli e disponibilità.
          </p>
          <VillaOlimpiaMap language="it" onApartmentClick={handleApartmentClick} />
        </div>
      </section>

      <section className="py-16 bg-[#062035] text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8 text-center">Territorio, Mare e Vita Locale</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {mediaStrip.map((src, index) => (
              <div key={src} className="relative h-56 rounded-2xl overflow-hidden border border-white/20">
                <Image src={src} alt={`Location media ${index + 1}`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="bg-[#0c2f4c] border-[#1d4f77] text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Waves className="h-5 w-5" /> Mare</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/85">Accesso alla spiaggia in circa 1 minuto a piedi e fondali adatti a famiglie e snorkeling.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#0c2f4c] border-[#1d4f77] text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5" /> Cultura</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/85">Le Castella, il castello aragonese e il centro di Isola di Capo Rizzuto a pochi km.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#0c2f4c] border-[#1d4f77] text-white">
              <CardHeader>
                <CardTitle>Servizi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/85">Ristoranti, escursioni, diving center e servizi turistici raggiungibili rapidamente in auto.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-ocean via-primary to-ocean/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Richiedi Disponibilità e Preventivo</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contattaci ora e ricevi una proposta su misura per il tuo soggiorno a Villa Olimpia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="luxury" size="lg" asChild>
              <Link href="/contatti">Richiedi Preventivo</Link>
            </Button>
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
              <Link href="/territorio">Esplora il Territorio</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
