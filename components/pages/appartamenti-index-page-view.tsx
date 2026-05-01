import Image from "next/image"
import { BASE_URL } from "@/lib/metadata"
import { ApartmentCard } from "@/components/apartment-card"
import { apartments, getApartmentSlug } from "@/data/apartments"
import { Sparkles, MapPin, Home, Waves, Car, Wifi } from "lucide-react"
import { SectionDivider } from "@/components/animations/section-divider"
import { MapExpand } from "@/components/apartments/map-expand"
import { LocalSeoSection } from "@/components/seo/local-seo-section"
import Link from "next/link"

export type AppartamentiIndexPageViewProps = {
  mapLanguage?: "it" | "en"
}

export function AppartamentiIndexPageView({ mapLanguage = "it" }: AppartamentiIndexPageViewProps) {
  const pianoTerra = apartments.filter((apt) => apt.floor === "Piano Terra")
  const primoPiano = apartments.filter((apt) => apt.floor === "Primo Piano")
  const apartmentListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Appartamenti Villa Olimpia",
    url: `${BASE_URL}/appartamenti`,
    numberOfItems: apartments.length,
    itemListElement: apartments.map((apartment, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${BASE_URL}/appartamenti/${getApartmentSlug(apartment)}`,
      name: `Appartamento ${apartment.name}`,
    })),
  }
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Appartamenti",
        item: `${BASE_URL}/appartamenti`,
      },
    ],
  }

  return (
    <div className="min-h-screen pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(apartmentListSchema) }}
      />
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
              9 appartamenti esclusivi a meno di 100 metri dal mare, piscina condivisa e comfort premium.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <MapPin className="w-4 h-4 text-white" />
                <span className="font-medium">Capo Rizzuto</span>
              </div>
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Home className="w-4 h-4 text-white" />
                <span className="font-medium">Meno di 100 m dalla spiaggia</span>
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Appartamenti a Capo Rizzuto con piscina e vicino al mare
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Gli appartamenti di Villa Olimpia a Capopiccolo sono pensati per chi cerca una soluzione comoda,
                curata e ben posizionata per vivere una vacanza a Capo Rizzuto. La struttura si trova in una zona
                ideale per raggiungere facilmente il mare, rilassarsi in piscina e visitare il territorio di Isola
                di Capo Rizzuto, tra spiagge, borghi e luoghi di interesse naturalistico.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Qui puoi scegliere tra diverse soluzioni adatte a coppie, famiglie e piccoli gruppi, con spazi
                organizzati per offrire comfort, libertà e praticità durante tutto il soggiorno.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Appartamenti per coppie, famiglie e piccoli gruppi
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Le diverse soluzioni presenti nella struttura permettono di accogliere ospiti con esigenze diverse.
                Chi viaggia in coppia può cercare ambienti più raccolti e riservati, mentre chi organizza una
                vacanza in famiglia può trovare appartamenti più adatti alla gestione degli spazi e della vita
                quotidiana durante il soggiorno.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Per chi cerca appartamenti a Capo Rizzuto per famiglie, la disponibilità di più opzioni all&apos;interno
                della stessa struttura rappresenta un vantaggio concreto. La presenza della piscina, la vicinanza
                al mare e la facilità negli spostamenti aiutano a rendere il soggiorno più comodo, soprattutto nei
                periodi estivi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mappa interattiva Villa Olimpia (posizioni e capienze da istruzioni) */}
      <MapExpand language={mapLanguage} />

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
              Esplora tutti i nostri appartamenti e trova quello perfetto per la tua vacanza a Capopiccolo, nel
              cuore dell&apos;Area Marina Protetta Capo Rizzuto, a meno di 100 metri dalla Spiaggia dei Gigli.
            </p>
          </div>

          <div className="space-y-12">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm mb-6">
              <p className="text-base text-gray-700">
                Tutti gli appartamenti di Villa Olimpia condividono piscina, giardino mediterraneo e accesso rapido a{" "}
                <strong className="font-semibold">Spiaggia dei Gigli</strong>. Da qui raggiungi in pochi minuti{" "}
                <strong className="font-semibold">Le Castella</strong>, l&apos;Area Marina Protetta Capo Rizzuto e le
                principali attrazioni del territorio calabrese. Per maggiori dettagli sulla posizione puoi visitare le
                pagine{" "}
                <Link href="/location" className="text-primary underline-offset-2 hover:underline">
                  Location
                </Link>
                ,{" "}
                <Link href="/spiagge-capo-rizzuto" className="text-primary underline-offset-2 hover:underline">
                  Spiagge
                </Link>{" "}
                e{" "}
                <Link href="/area-marina-protetta" className="text-primary underline-offset-2 hover:underline">
                  Area Marina Protetta
                </Link>
                .
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 mb-4">
                Perché scegliere una prenotazione diretta
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Scegliere direttamente uno degli appartamenti di Villa Olimpia significa poter valutare con maggiore
                chiarezza la soluzione più adatta al proprio soggiorno. La prenotazione diretta permette di ricevere
                informazioni utili, disponibilità aggiornata e un contatto più semplice prima dell&apos;arrivo.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mt-4">
                Per chi sta organizzando una vacanza a Capo Rizzuto, questo aiuta a scegliere con più precisione
                l&apos;appartamento migliore in base al numero di ospiti, al periodo e al tipo di esperienza
                desiderata.
              </p>
            </div>
            <div id="piano-terra" className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900">Piano Terra</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pianoTerra.map((apartment) => (
                  <ApartmentCard
                    key={apartment.id}
                    slug={getApartmentSlug(apartment)}
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
                    slug={getApartmentSlug(apartment)}
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
