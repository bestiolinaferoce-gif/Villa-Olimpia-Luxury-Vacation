import { notFound, permanentRedirect } from "next/navigation"
import Image from "next/image"
import { getApartmentBedSchema, getApartmentById, getApartmentBySlug, getApartmentSlug, apartments } from "@/data/apartments"
import { getOccupiedRangesForLodge, lodgeNameForApartment } from "@/lib/public-calendar/occupancy"

export const revalidate = 300
// FIX: Import esplicito per risolvere problemi di routing
import { getApartmentMetadata, BASE_URL } from "@/lib/metadata"
import { getApartmentContent } from "@/data/apartment-content"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bed, Users, Bath, MapPin, Calendar, Star, UtensilsCrossed } from "lucide-react"
import Link from "next/link"
import ApartmentGallery from "@/components/apartment-gallery"
import { AvailabilityCalendar } from "@/components/availability-calendar"
import { VILLA_OLIMPIA_LOCATION } from "@/lib/location-data"
import { Breadcrumb } from "@/components/breadcrumb"
import { VacationRentalSchema } from "@/components/seo/vacation-rental-schema"
import { SITE_CONFIG } from "@/lib/constants"
import { buildWhatsAppUrlFromText } from "@/lib/booking-contact"

interface PageProps {
  params: Promise<{
    id: string
  }>
}

// FIX: Genera staticamente tutte le pagine per evitare 404
export async function generateStaticParams() {
  // SEO Round 2: solo slug canonici (nome), redirect 301 per vecchi URL
  return apartments.map((apartment) => ({ id: getApartmentSlug(apartment) }))
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
    apartmentId = getApartmentBySlug(id)?.id
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
    apartmentId = getApartmentBySlug(id)?.id
  }
  
  if (!apartmentId || isNaN(apartmentId)) {
    notFound()
  }
  
  const apartment = getApartmentById(apartmentId)

  if (!apartment) {
    notFound()
  }

  const canonicalSlug = getApartmentSlug(apartment)
  if (id !== canonicalSlug) {
    permanentRedirect(`/appartamenti/${canonicalSlug}`)
  }

  const content = getApartmentContent(apartmentId)
  const occupiedRanges = await getOccupiedRangesForLodge(lodgeNameForApartment(apartmentId))
  const contactHref = `/contatti?source=apartment_detail&apartment=${encodeURIComponent(apartment.name)}&guests=${apartment.guests}#prenota`
  const apartmentWhatsAppHref = buildWhatsAppUrlFromText(
    `Richiesta disponibilita ${apartment.name} - Villa Olimpia:\nDate: \nOspiti: ${apartment.guests}\nAppartamento: ${apartment.name}\nFonte: sito ufficiale (pagina appartamento)`
  )
  const apartmentUrl = `${BASE_URL}/appartamenti/${canonicalSlug}`
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
      {
        "@type": "ListItem",
        position: 3,
        name: apartment.name,
        item: apartmentUrl,
      },
    ],
  }
  const apartmentSchema = {
    "@context": "https://schema.org",
    "@type": "Accommodation",
    "@id": `${apartmentUrl}#accommodation`,
    name: `Appartamento ${apartment.name} - Villa Olimpia`,
    description: apartment.fullDescription || apartment.description,
    image: apartment.image.startsWith("/")
      ? `${BASE_URL}${apartment.image}`
      : `${BASE_URL}/og-image.jpg`,
    mainEntityOfPage: apartmentUrl,
    containedInPlace: {
      "@type": "LodgingBusiness",
      "@id": `${BASE_URL}/#business`,
      name: "Villa Olimpia",
      url: BASE_URL,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: VILLA_OLIMPIA_LOCATION.address.street,
      addressLocality: VILLA_OLIMPIA_LOCATION.address.city,
      addressRegion: VILLA_OLIMPIA_LOCATION.address.region,
      postalCode: VILLA_OLIMPIA_LOCATION.address.postalCode,
      addressCountry: "IT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: VILLA_OLIMPIA_LOCATION.coordinates.latitude,
      longitude: VILLA_OLIMPIA_LOCATION.coordinates.longitude,
    },
    numberOfRooms: apartment.bedrooms,
    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: apartment.guests,
    },
    bed: getApartmentBedSchema(apartment),
    amenityFeature: apartment.features.map((feature) => ({
      "@type": "LocationFeatureSpecification",
      name: feature,
    })),
    checkInTime: "15:00",
    checkOutTime: "10:00",
    offers: {
      "@type": "Offer",
      url: apartmentUrl,
      priceCurrency: "EUR",
      price: apartment.price?.toString() || "120",
      availability: "https://schema.org/LimitedAvailability",
      eligibleQuantity: {
        "@type": "QuantitativeValue",
        maxValue: apartment.guests,
      },
    },
    telephone: VILLA_OLIMPIA_LOCATION.contact.phone,
    url: apartmentUrl,
    identifier: {
      "@type": "PropertyValue",
      name: "internal-slug",
      value: canonicalSlug,
    },
  }

  return (
    <div className="min-h-screen pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <VacationRentalSchema apartment={apartment} />
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
              <Card className="bg-gradient-to-br from-amber-50/80 to-background border-amber-200/50 dark:from-amber-950/20 dark:to-background dark:border-amber-800/30">
                <CardHeader>
                  <CardTitle className="text-amber-900 dark:text-amber-100">Il tuo appartamento a Capo Rizzuto</CardTitle>
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
              <Card className="bg-gradient-to-br from-teal-50/80 to-background border-teal-200/50 dark:from-teal-950/20 dark:to-background dark:border-teal-800/30">
                <CardHeader>
                  <CardTitle className="text-teal-900 dark:text-teal-100">Come si vive qui</CardTitle>
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
              <Card className="bg-gradient-to-br from-emerald-50/80 to-background border-emerald-200/50 dark:from-emerald-950/20 dark:to-background dark:border-emerald-800/30">
                <CardHeader>
                  <CardTitle className="text-emerald-900 dark:text-emerald-100">Cosa include</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {content.featureBullets.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-emerald-600 dark:text-emerald-400 mt-1 font-bold">✓</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Perfect For */}
            {content && content.perfectFor.length > 0 && (
              <Card className="bg-gradient-to-br from-violet-50/80 to-background border-violet-200/50 dark:from-violet-950/20 dark:to-background dark:border-violet-800/30">
                <CardHeader>
                  <CardTitle className="text-violet-900 dark:text-violet-100">Ideale per</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-wrap gap-2">
                    {content.perfectFor.map((item, index) => (
                      <li key={index} className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-sm text-violet-800">
                        <span className="text-violet-500">●</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* SEO Paragraph */}
            {content && (
              <Card className="bg-gradient-to-br from-sky-50 to-primary/5 border-sky-200/50 dark:from-sky-950/20 dark:to-background dark:border-sky-800/30">
                <CardHeader>
                  <CardTitle className="text-sky-900 dark:text-sky-100">Posizione e dintorni</CardTitle>
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
              <Card className="bg-gradient-to-br from-slate-50/80 to-background border-slate-200/50 dark:from-slate-900/20 dark:to-background dark:border-slate-700/30">
                <CardHeader>
                  <CardTitle className="text-slate-800 dark:text-slate-200">Scheda tecnica</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="rounded-xl border border-slate-200 bg-white p-3 text-center">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">Ospiti</p>
                      <p className="text-lg font-bold text-slate-900">{content.technicalSummary.capacity}</p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-3 text-center">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">Camere</p>
                      <p className="text-base font-bold text-slate-900">{content.technicalSummary.rooms}</p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-3 text-center">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">Bagni</p>
                      <p className="text-lg font-bold text-slate-900">{content.technicalSummary.bathrooms}</p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-3 text-center">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">Spazio esterno</p>
                      <p className="text-sm font-semibold text-slate-900">{content.technicalSummary.outdoorArea}</p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-3 text-center">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">Piano</p>
                      <p className="text-lg font-bold text-slate-900">{content.technicalSummary.floor}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Booking info box */}
            <Card className="bg-gradient-to-br from-blue-50 to-primary/5 border-blue-200/50 dark:from-blue-950/20 dark:border-blue-800/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900 dark:text-blue-100">
                  <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
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
                    <p className="font-semibold text-foreground mb-1">⭐ Recensioni</p>
                    <p className="text-muted-foreground flex items-center gap-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>Recensioni verificate online</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <Card className="sticky top-24 border-2 border-primary/15 shadow-2xl shadow-primary/5 ring-1 ring-primary/5">
              <CardHeader className="pb-3">
                <CardTitle className="font-playfair text-xl text-slate-900">Richiedi disponibilità</CardTitle>
                <CardDescription className="text-sm text-slate-600">
                  Prenotazione diretta · risposta entro 24 ore · nessuna commissione OTA
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2 text-sm border border-slate-100 rounded-xl p-3 bg-slate-50/60">
                  <div>
                    <p className="text-slate-500 text-xs">Ospiti max</p>
                    <p className="font-semibold text-slate-900">{apartment.guests} persone</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs">Camere</p>
                    <p className="font-semibold text-slate-900">{apartment.bedrooms}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs">Bagni</p>
                    <p className="font-semibold text-slate-900">{apartment.bathrooms}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs">Superficie</p>
                    <p className="font-semibold text-slate-900">{apartment.size}</p>
                  </div>
                </div>

                <AvailabilityCalendar occupiedRanges={occupiedRanges} />

                <Button variant="luxury" className="w-full" size="lg" asChild>
                  <Link href={contactHref}>
                    <Calendar className="mr-2 h-4 w-4" />
                    Verifica disponibilità
                  </Link>
                </Button>

                <div className="rounded-xl border border-emerald-200 bg-emerald-50/80 p-4">
                  <p className="text-sm font-semibold text-emerald-900">Perché prenotare direttamente</p>
                  <ul className="mt-2 space-y-1.5 text-sm text-emerald-800">
                    <li className="flex items-start gap-1.5"><span className="font-bold mt-px">✓</span> Tariffa senza commissioni OTA</li>
                    <li className="flex items-start gap-1.5"><span className="font-bold mt-px">✓</span> Proposta su misura in 24 ore</li>
                    <li className="flex items-start gap-1.5"><span className="font-bold mt-px">✓</span> Contatto diretto con i proprietari</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <Button variant="outline" className="w-full" asChild>
                    <a href={apartmentWhatsAppHref} target="_blank" rel="noopener noreferrer">
                      WhatsApp diretto
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={`tel:${SITE_CONFIG.phone}`}>
                      Chiama ora
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="bg-gradient-to-br from-amber-50/60 to-background border-amber-200/40 dark:from-amber-950/15 dark:border-amber-800/20">
              <CardHeader>
                <CardTitle className="text-amber-900 dark:text-amber-100">Informazioni Rapide</CardTitle>
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

      {/* Territory / Location Visual Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-ocean/5 to-primary/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-playfair font-bold text-slate-900 mb-3">Il territorio di Capo Rizzuto</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A 100 metri dalla Spiaggia dei Gigli, nell&apos;Area Marina Protetta: natura, mare cristallino e borghi storici a portata di mano.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="relative h-48 rounded-2xl overflow-hidden">
              <Image
                src="/images/territory/spiaggia-capopiccolo.jpg"
                alt="Spiaggia di Capopiccolo - Area Marina Protetta Capo Rizzuto"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-3 left-3 text-white text-sm font-semibold">Spiaggia Capopiccolo</p>
            </div>
            <div className="relative h-48 rounded-2xl overflow-hidden">
              <Image
                src="/images/territory/area-marina-protetta-capo-rizzuto.jpg"
                alt="Area Marina Protetta di Capo Rizzuto - acque cristalline"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-3 left-3 text-white text-sm font-semibold">Area Marina Protetta</p>
            </div>
            <div className="relative h-48 rounded-2xl overflow-hidden">
              <Image
                src="/images/territory/castello-aragonese-le-castella.jpg"
                alt="Castello aragonese di Le Castella"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-3 left-3 text-white text-sm font-semibold">Le Castella (8 km)</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-xl transition-shadow border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  Cosa vedere nei dintorni
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• <strong className="text-foreground">Spiaggia dei Gigli</strong> — Bandiera Blu a 100m</li>
                  <li>• <strong className="text-foreground">Area Marina Protetta</strong> — Snorkeling e immersioni</li>
                  <li>• <strong className="text-foreground">Le Castella</strong> — Castello aragonese (8 km)</li>
                  <li>• <strong className="text-foreground">Valli Cupe</strong> — Riserva naturale con cascate</li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/location">Esplora il territorio</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <UtensilsCrossed className="h-6 w-6 text-ocean" />
                  Sapori del territorio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• <strong className="text-foreground">Cantine Cirò DOC</strong> — Vini storici calabresi</li>
                  <li>• <strong className="text-foreground">Ristoranti pesce fresco</strong> — Cucina calabrese autentica</li>
                  <li>• <strong className="text-foreground">Agriturismi km zero</strong> — Sapori genuini</li>
                  <li>• <strong className="text-foreground">Prodotti tipici</strong> — &apos;Nduja, cipolla rossa, bergamotto</li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/enogastronomia">Gastronomia e vini</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schema Markup JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(apartmentSchema)
        }}
      />
    </div>
  )
}
