import { notFound } from "next/navigation"
import Image from "next/image"
import { getApartmentById, apartments } from "@/data/apartments"
// FIX: Import esplicito per risolvere problemi di routing
import { getApartmentMetadata } from "@/lib/metadata"
import { getApartmentSEO } from "@/data/apartments-seo"
import { getApartmentContent } from "@/data/apartment-content"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bed, Users, Bath, MapPin, Calendar, Star, UtensilsCrossed } from "lucide-react"
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
  const content = getApartmentContent(apartmentId)

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
            alt={`Appartamento ${apartment.name} Villa Olimpia Capo Rizzuto - ${apartment.floor} ${apartment.size} per ${apartment.guests} ospiti`}
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
            <p className="text-xl text-white/90">{content?.shortDescription || apartment.description}</p>
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

            {/* Short Description */}
            {content && (
              <Card>
                <CardHeader>
                  <CardTitle>Descrizione</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-base mb-6">
                    {content.shortDescription}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Full Premium Description */}
            {content && (
              <Card>
                <CardHeader>
                  <CardTitle>Descrizione Completa</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-lg max-w-none">
                    <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {content.fullPremiumDescription}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Feature Bullets */}
            {content && content.featureBullets.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Punti di Forza</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {content.featureBullets.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Perfect For */}
            {content && content.perfectFor.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Perfetto per…</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {content.perfectFor.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* SEO Paragraph */}
            {content && (
              <Card className="bg-gradient-to-br from-blue-50 to-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle>Informazioni Dettagliate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {content.seoParagraph}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Technical Summary */}
            {content && (
              <Card>
                <CardHeader>
                  <CardTitle>Dati Tecnici</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-foreground mb-1">Posti Letto</p>
                      <p className="text-muted-foreground">{content.technicalSummary.capacity}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Camere</p>
                      <p className="text-muted-foreground">{content.technicalSummary.rooms}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Bagni</p>
                      <p className="text-muted-foreground">{content.technicalSummary.bathrooms}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Area Esterna</p>
                      <p className="text-muted-foreground">{content.technicalSummary.outdoorArea}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Piano</p>
                      <p className="text-muted-foreground">{content.technicalSummary.floor}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

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
                    <p className="text-muted-foreground">Meno di 100 metri (1 minuto a piedi)</p>
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

      {/* Location Links Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-ocean/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  Scopri cosa vedere nei dintorni
                </CardTitle>
                <CardDescription>
                  Esplora le attrazioni e le spiagge vicino a Villa Olimpia. A soli 100 metri dalla Spiaggia dei Gigli Bandiera Blu.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• <strong className="text-foreground">Spiaggia dei Gigli</strong> - Bandiera Blu a 100m</li>
                  <li>• <strong className="text-foreground">Area Marina Protetta</strong> - Snorkeling e immersioni</li>
                  <li>• <strong className="text-foreground">Le Castella</strong> - Castello aragonese (8 km)</li>
                  <li>• <strong className="text-foreground">Valli Cupe</strong> - Riserva naturale con cascate</li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/location">
                    Esplora tutte le attrazioni della Calabria
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <UtensilsCrossed className="h-6 w-6 text-ocean" />
                  Dove mangiare e cosa assaggiare
                </CardTitle>
                <CardDescription>
                  Ristoranti eccellenza, cantine storiche Cirò DOC e prodotti tipici calabresi nei dintorni.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• <strong className="text-foreground">Cantine Cirò DOC</strong> - Degustazioni vini storici</li>
                  <li>• <strong className="text-foreground">Ristoranti pesce fresco</strong> - Cucina calabrese autentica</li>
                  <li>• <strong className="text-foreground">Agriturismi km zero</strong> - Sapori genuini</li>
                  <li>• <strong className="text-foreground">Prodotti tipici</strong> - 'Nduja, cipolla rossa, bergamotto</li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/location">
                    Scopri i sapori del territorio
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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

