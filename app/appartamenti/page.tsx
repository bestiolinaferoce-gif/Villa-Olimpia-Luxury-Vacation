import Image from "next/image"
import { ApartmentCard } from "@/components/apartment-card"
import { apartments } from "@/data/apartments"
import { Sparkles, MapPin, Home, Waves, Car, Wifi } from "lucide-react"
import { SectionDivider } from "@/components/animations/section-divider"
import { MapExpand } from "@/components/apartments/map-expand"
import { LocalSeoSection } from "@/components/seo/local-seo-section"

export default function AppartamentiPage() {
  const pianoTerra = apartments.filter((apt) => apt.floor === "Piano Terra")
  const primoPiano = apartments.filter((apt) => apt.floor === "Primo Piano")

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Premium */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/villa/hero/facciata_esterna_villa_olimpia_notte.jpg"
            alt="Villa Olimpia - Appartamenti"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 border border-white/20">
              <Sparkles className="h-4 w-4 text-white" />
              <span className="text-sm font-semibold">9 Appartamenti Premium</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6">
              Appartamenti Villa Olimpia
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
              9 appartamenti esclusivi a 100 metri dal mare, piscina condivisa e comfort premium.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <MapPin className="w-4 h-4 text-white" />
                <span className="font-medium">Capo Rizzuto</span>
              </div>
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Home className="w-4 h-4 text-white" />
                <span className="font-medium">100m dalla spiaggia</span>
              </div>
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Waves className="w-4 h-4 text-white" />
                <span className="font-medium">Piscina condivisa</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Separatore elegante */}
      <SectionDivider />

      {/* Highlights */}
      <section className="py-16 bg-gradient-to-b from-white via-slate-50/60 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Wifi, title: "Wi‑Fi veloce", text: "Connessione stabile in tutte le unità." },
              { icon: Car, title: "Parcheggio privato", text: "Posti auto comodi e sicuri." },
              { icon: Waves, title: "Piscina condivisa", text: "Solarium attrezzato e area relax." },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="rounded-2xl border border-primary/10 bg-white p-6 shadow-lg">
                  <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <LocalSeoSection />

      {/* Mappa interattiva Villa Olimpia (posizioni e capienze da istruzioni) */}
      <MapExpand language="it" />

      {/* Separatore elegante */}
      <SectionDivider />

      {/* Apartments Grid Premium */}
      <section className="py-20 bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Home className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Tutti gli Appartamenti</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Tutti gli Appartamenti
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Esplora tutti i nostri appartamenti e trova quello perfetto per la tua vacanza
            </p>
          </div>

          <div className="space-y-12">
            <div id="piano-terra" className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900">Piano Terra</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pianoTerra.map((apartment) => (
                  <ApartmentCard
                    key={apartment.id}
                    id={`apartment-${apartment.id}`}
                    name={apartment.name}
                    description={apartment.description || apartment.fullDescription || ""}
                    image={apartment.image}
                    guests={apartment.guests}
                    bedrooms={apartment.bedrooms}
                    price={apartment.price || 0}
                    featured={apartment.premium}
                  />
                ))}
              </div>
            </div>

            <div id="primo-piano" className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900">Primo Piano</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {primoPiano.map((apartment) => (
                  <ApartmentCard
                    key={apartment.id}
                    id={`apartment-${apartment.id}`}
                    name={apartment.name}
                    description={apartment.description || apartment.fullDescription || ""}
                    image={apartment.image}
                    guests={apartment.guests}
                    bedrooms={apartment.bedrooms}
                    price={apartment.price || 0}
                    featured={apartment.premium}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
