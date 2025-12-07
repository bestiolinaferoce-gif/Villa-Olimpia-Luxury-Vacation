import { notFound } from "next/navigation"
import Image from "next/image"
import { getApartmentById, apartments } from "@/data/apartments"
// FIX: Import esplicito per risolvere problemi di routing
import { getApartmentMetadata } from "@/lib/metadata"
import { getApartmentSEO } from "@/data/apartments-seo"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bed, Users, Bath, MapPin, Calendar, Star } from "lucide-react"
import Link from "next/link"
import ApartmentGallery from "@/components/apartment-gallery"
import { AvailabilityCalendar } from "@/components/availability-calendar"
import { VILLA_OLIMPIA_LOCATION } from "@/lib/location-data"
import { Breadcrumb } from "@/components/breadcrumb"

interface PageProps {
  params: Promise<{
    id: string
  }>
}

// FIX: Genera staticamente tutte le pagine per evitare 404
export async function generateStaticParams() {
  // Genera per tutti i formati possibili
  const params = apartments.flatMap((apartment) => [
    { id: `apartment-${apartment.id}` }, // Formato principale
    { id: String(apartment.id) }, // Formato numerico
    { id: apartment.name.toLowerCase() }, // Formato nome
  ])
  return params
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params
  const id = resolvedParams?.id || ""
  
  // Gestisce tutti i formati: "apartment-1", "1", "frangipane"
  let apartmentId: number | undefined
  if (id.startsWith("apartment-")) {
    apartmentId = parseInt(id.replace("apartment-", ""))
  } else if (!isNaN(parseInt(id))) {
    apartmentId = parseInt(id)
  } else {
    const apartmentByName = apartments.find(apt => 
      apt.name.toLowerCase() === id.toLowerCase()
    )
    apartmentId = apartmentByName?.id
  }
  
  if (!apartmentId || isNaN(apartmentId)) {
    return getApartmentMetadata(1) // Fallback
  }
  return getApartmentMetadata(apartmentId)
}

export default async function ApartmentDetailPage({ params }: PageProps) {
  // FIX: Next.js 15+ richiede await per params
  const resolvedParams = await params
  const id = resolvedParams?.id || ""
  
  // Prova prima con formato "apartment-{id}"
  let apartmentId: number | undefined
  if (id.startsWith("apartment-")) {
    apartmentId = parseInt(id.replace("apartment-", ""))
  } else if (!isNaN(parseInt(id))) {
    // Se è solo un numero
    apartmentId = parseInt(id)
  } else {
    // Se è un nome (es. "frangipane"), cerca per nome
    const apartmentByName = apartments.find(apt => 
      apt.name.toLowerCase() === id.toLowerCase()
    )
    if (apartmentByName) {
      apartmentId = apartmentByName.id
    }
  }
  
  if (!apartmentId || isNaN(apartmentId)) {
    notFound()
  }
  
  const apartment = getApartmentById(apartmentId)

  if (!apartment) {
    notFound()
  }

  const seoData = getApartmentSEO(apartmentId)

  return (
    <div className="min-h-screen pt-20">
      <Breadcrumb
        items={[
          { label: "Appartamenti", href: "/appartamenti" },
          { label: apartment.name },
        ]}
      />
      {/* Hero Image */}
      <section className="relative h-[60vh] overflow-hidden">
        {apartment.image && apartment.image.startsWith('/') ? (
          <Image
            src={apartment.image}
            alt={apartment.name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-ocean/20 to-primary/20 flex items-center justify-center">
            <span className="text-9xl opacity-30">🏠</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-2">
              Appartamento {apartment.name} - Villa Olimpia Capo Rizzuto
            </h1>
            <p className="text-xl text-white/90">{apartment.description}</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery */}
            <ApartmentGallery 
              images={apartment.images || [apartment.image]} 
              alt={apartment.name}
            />

            {/* Description SEO Ottimizzata */}
            <Card>
              <CardHeader>
                <CardTitle>Descrizione</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                  <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {apartment.fullDescription || apartment.description}
                  </p>
                  
                  {/* Contenuto SEO ottimizzato per OTA */}
                  {seoData && (
                    <div className="mt-6 space-y-4 text-muted-foreground text-sm leading-relaxed">
                      <div dangerouslySetInnerHTML={{ __html: seoData.seoContent.replace(/\n/g, '<br />') }} />
                    </div>
                  )}
                  
                  {/* Fallback se non c'è SEO data */}
                  {!seoData && (
                    <div className="mt-6 space-y-4 text-muted-foreground text-sm leading-relaxed">
                      <p>
                        L&apos;appartamento <strong className="text-foreground">{apartment.name}</strong> si trova a Villa Olimpia, 
                        nella splendida località di <strong className="text-foreground">Capopiccolo, Isola di Capo Rizzuto</strong>, 
                        nel cuore dell&apos;Area Marina Protetta Capo Rizzuto. Questo appartamento di <strong className="text-foreground">{apartment.size}</strong> 
                        al <strong className="text-foreground">{apartment.floor}</strong> può ospitare fino a <strong className="text-foreground">{apartment.guests} persone</strong> 
                        ed è dotato di <strong className="text-foreground">{apartment.bedrooms} camere da letto</strong> e <strong className="text-foreground">{apartment.bathrooms} bagni</strong>.
                      </p>
                      
                      <p>
                        La posizione privilegiata a soli <strong className="text-foreground">1 km dalla Spiaggia dei Gigli</strong> rende questo appartamento 
                        perfetto per una vacanza al mare in Calabria. Ideale per famiglie, coppie o piccoli gruppi che cercano relax e comfort in una delle 
                        zone più belle della costa ionica calabrese.
                      </p>
                      
                      <p>
                        Disponibile su <strong className="text-foreground">Booking.com</strong>, <strong className="text-foreground">Airbnb</strong> e 
                        per prenotazioni dirette. Prezzo a partire da <strong className="text-foreground">€{apartment.price}/notte</strong>. 
                        Check-in dalle 15:00, check-out entro le 10:00.
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* SEO Info Box per OTA */}
            <Card className="bg-gradient-to-br from-blue-50 to-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Informazioni per la Prenotazione
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-foreground mb-1">📍 Posizione</p>
                    <p className="text-muted-foreground">
                      {VILLA_OLIMPIA_LOCATION.address.fullAddress}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">🏖️ Distanza Spiaggia</p>
                    <p className="text-muted-foreground">1 km (2 minuti in auto, 15 minuti a piedi)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">📅 Check-in / Check-out</p>
                    <p className="text-muted-foreground">Dalle 15:00 / Entro le 10:00</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">⭐ Valutazione Media</p>
                    <p className="text-muted-foreground flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1">4.9/5 (35+ recensioni)</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>Caratteristiche</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {apartment.features?.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card>
              <CardHeader>
                <CardTitle>Servizi Inclusi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {apartment.features?.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Prenota</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    €{apartment.price}
                  </div>
                  <div className="text-sm text-muted-foreground">per notte</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Ospiti</span>
                    <span className="font-medium">{apartment.guests}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Camere</span>
                    <span className="font-medium">{apartment.bedrooms}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Bagni</span>
                    <span className="font-medium">{apartment.bathrooms}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Superficie</span>
                    <span className="font-medium">{apartment.size}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Piano</span>
                    <span className="font-medium">{apartment.floor}</span>
                  </div>
                </div>

                <AvailabilityCalendar />

                <Button variant="luxury" className="w-full" size="lg" asChild>
                  <Link href="/contatti">Richiedi Prenotazione</Link>
                </Button>

                <div className="space-y-2">
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://wa.me/393335773390" target="_blank" rel="noopener noreferrer">
                      WhatsApp: 333 577 3390
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://wa.me/393290479193" target="_blank" rel="noopener noreferrer">
                      WhatsApp: 329 047 9193
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card>
              <CardHeader>
                <CardTitle>Informazioni Rapide</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm">{apartment.guests} ospiti</span>
                </div>
                <div className="flex items-center gap-3">
                  <Bed className="h-5 w-5 text-primary" />
                  <span className="text-sm">{apartment.bedrooms} camere da letto</span>
                </div>
                <div className="flex items-center gap-3">
                  <Bath className="h-5 w-5 text-primary" />
                  <span className="text-sm">{apartment.bathrooms} bagni</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Schema Markup JSON-LD per SEO OTA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Accommodation",
            "name": `Appartamento ${apartment.name} - Villa Olimpia`,
            "description": apartment.fullDescription || apartment.description,
            "image": apartment.image.startsWith("/") 
              ? `https://villaolimpia.com${apartment.image}` 
              : "https://villaolimpia.com/og-image.jpg",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": VILLA_OLIMPIA_LOCATION.address.street,
              "addressLocality": VILLA_OLIMPIA_LOCATION.address.city,
              "addressRegion": VILLA_OLIMPIA_LOCATION.address.region,
              "postalCode": VILLA_OLIMPIA_LOCATION.address.postalCode,
              "addressCountry": "IT"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": VILLA_OLIMPIA_LOCATION.coordinates.latitude,
              "longitude": VILLA_OLIMPIA_LOCATION.coordinates.longitude
            },
            "numberOfRooms": apartment.bedrooms,
            "occupancy": {
              "@type": "QuantitativeValue",
              "maxValue": apartment.guests
            },
            "amenityFeature": apartment.features.map(feature => ({
              "@type": "LocationFeatureSpecification",
              "name": feature
            })),
            "priceRange": `€${apartment.price}/notte`,
            "telephone": VILLA_OLIMPIA_LOCATION.contact.phone,
            "url": `https://villaolimpia.com/appartamenti/apartment-${apartment.id}`,
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "35"
            }
          })
        }}
      />
    </div>
  )
}

