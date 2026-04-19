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
  {
    src: "/images/territory/spiaggia-capopiccolo-panorama.jpg",
    alt: "Panorama della costa ionica a Capopiccolo, vicino a Villa Olimpia",
    href: "/spiagge-capo-rizzuto",
  },
  {
    src: "/images/territory/castello-aragonese-le-castella.jpg",
    alt: "Castello Aragonese di Le Castella sulla costa ionica",
    href: "/le-castella",
  },
  {
    src: "/images/territory/castello-santa-severina.jpg",
    alt: "Borgo e castello di Santa Severina nell'entroterra calabrese",
    href: "/territorio",
  },
] as const

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
            Rizzuto, fondali perfetti per famiglie e snorkeling, con Le Castella raggiungibile in pochi minuti e
            la possibilità di organizzare escursioni in giornata verso borghi storici e natura dell&apos;entroterra.
          </p>
          <p className="text-sm md:text-base text-white/80 mt-4">
            La Spiaggia dei Gigli, Bandiera Blu, è a 100 metri dalla struttura: si raggiunge in circa 1
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

      <section className="py-14 bg-white border-y border-slate-200/80">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-center">
            Cosa c&apos;è nei dintorni (orientamento pratico)
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto text-sm">
            Distanze e tempi sono indicativi e dipendono da traffico, stagione e punto di partenza esatto all&apos;interno di Capopiccolo.
          </p>
          <ul className="space-y-3 text-slate-700">
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
              <span>
                <strong>Spiaggia dei Gigli (Bandiera Blu):</strong> {VILLA_OLIMPIA_LOCATION.distances.spiaggia} — ideale come spiaggia quotidiana senza auto.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
              <span>
                <strong>Le Castella:</strong> circa <strong>{VILLA_OLIMPIA_LOCATION.distances.leCastella}</strong> in linea d&apos;aria/indicazione stradale usata in struttura; in auto spesso si parla di circa 8–12 minuti, ma verifica sempre il percorso del giorno.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
              <span>
                <strong>Crotone:</strong> {VILLA_OLIMPIA_LOCATION.distances.crotone} — utile per servizi, spostamenti e collegamenti; tempi in auto tipicamente brevi sulla costa, ma variabili.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
              <span>
                <strong>Aeroporto di Crotone:</strong> {VILLA_OLIMPIA_LOCATION.distances.aeroporto} (verifica voli e collegamenti aggiornati sul sito dell&apos;aeroporto).
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
              <span>
                <strong>Santa Severina:</strong> gita in entroterra di circa <strong>45–50 minuti</strong> in auto (indicativo), per un pomeriggio diverso dal mare.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
              <span>
                <strong>Area Marina Protetta / riserva marina:</strong> {VILLA_OLIMPIA_LOCATION.distances.riservaMarina} — punto di riferimento per snorkeling, natura costiera e panorami.
              </span>
            </li>
          </ul>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="luxury" asChild>
              <Link href="/contatti?source=location-dintorni">Chiedi disponibilità</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/territorio">Apri la pagina Territorio</Link>
            </Button>
          </div>
        </div>
      </section>

      <LocalSeoSection
        title="Dove si trova Villa Olimpia"
        subtitle="Capopiccolo, Isola di Capo Rizzuto: mare cristallino, area marina protetta e Spiaggia dei Gigli a 100 metri."
        ctaHref="/contatti"
        ctaLabel="Chiedi disponibilita"
        showLocationCta={false}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Capopiccolo: una delle zone migliori per soggiornare a Capo Rizzuto
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Capopiccolo è una località molto apprezzata da chi sceglie la costa crotonese per una vacanza al mare.
                La vicinanza alla spiaggia, la bellezza del litorale e il contesto naturale rendono questa zona
                particolarmente adatta a soggiorni estivi orientati al relax, al mare e alla scoperta del territorio.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Se il tuo obiettivo è mare quotidiano con spostamenti brevi per cultura e servizi, questa zona è
                pensata proprio per quello: meno tempo in macchina, più tempo in spiaggia.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Una base comoda anche per visitare i dintorni
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Oltre al mare, Villa Olimpia offre il vantaggio di trovarsi in una posizione utile per raggiungere
                facilmente altre mete del territorio. Le Castella è una delle escursioni più immediate e interessanti,
                ma anche borghi come Santa Severina o percorsi naturalistici nell&apos;entroterra possono essere inseriti
                nel soggiorno come gite in giornata.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Da qui puoi decidere giorno per giorno: più mare, più borgo, più natura—senza piani complicati.
              </p>
            </div>
          </div>
        </div>
      </section>

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
            {mediaStrip.map((item) => (
              <Link
                key={item.src}
                href={item.href}
                className="group relative block h-56 rounded-2xl overflow-hidden border border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#062035]"
              >
                <Image src={item.src} alt={item.alt} fill className="object-cover transition-transform duration-300 group-hover:scale-[1.02]" sizes="(max-width: 1024px) 100vw, 33vw" />
              </Link>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/spiagge-capo-rizzuto" className="block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#062035]">
              <Card className="h-full overflow-hidden bg-[#0c2f4c] border-[#1d4f77] text-white transition-transform hover:-translate-y-0.5 hover:shadow-lg">
                <div className="relative h-40 w-full">
                  <Image
                    src="/images/villa/location/spiaggia-dei-gigli.jpg"
                    alt="Spiaggia dei Gigli Bandiera Blu, a pochi passi da Villa Olimpia"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c2f4c] via-[#0c2f4c]/40 to-transparent" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2"><Waves className="h-5 w-5" /> Mare</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/85">Accesso alla spiaggia in circa 1 minuto a piedi e fondali adatti a famiglie e snorkeling.</p>
                </CardContent>
              </Card>
            </Link>
            <Link
              href="/territorio"
              className="block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#062035]"
            >
              <Card className="h-full bg-[#0c2f4c] border-[#1d4f77] text-white transition-transform hover:-translate-y-0.5 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5" /> Cultura</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/85">Le Castella, Santa Severina e il centro di Isola di Capo Rizzuto completano bene il soggiorno.</p>
                </CardContent>
              </Card>
            </Link>
            <Link
              href="/cosa-fare-capo-rizzuto"
              className="block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#062035]"
            >
              <Card className="h-full bg-[#0c2f4c] border-[#1d4f77] text-white transition-transform hover:-translate-y-0.5 hover:shadow-lg">
                <CardHeader>
                  <CardTitle>Servizi</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/85">Ristoranti, diving center, escursioni e proposte family-friendly raggiungibili rapidamente in auto.</p>
                </CardContent>
              </Card>
            </Link>
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
