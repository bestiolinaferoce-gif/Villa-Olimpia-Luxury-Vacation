import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Breadcrumb } from "@/components/breadcrumb"
import { apartments, getApartmentSlug } from "@/data/apartments"
import { VILLA_OLIMPIA_LOCATION } from "@/lib/location-data"
import { BASE_URL } from "@/lib/metadata"

interface PageProps {
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return [{ locale: "en" as const }]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  if (locale !== "en") notFound()

  const canonical = `${BASE_URL}/en/capo-rizzuto-holiday-apartments`
  const title = "Holiday Apartments Capo Rizzuto with Pool | Villa Olimpia Calabria"
  const description =
    "9 private holiday apartments with shared pool, 70m from Blue Flag beach. Capo Rizzuto Marine Reserve, Calabria. Ideal for families & couples. Book direct."

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: canonical,
        "x-default": canonical,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Villa Olimpia Capo Rizzuto",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${BASE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Villa Olimpia — Holiday Apartments Capo Rizzuto with Pool",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${BASE_URL}/og-image.jpg`],
    },
  }
}

export default async function CapoRizzutoHolidayApartmentsPage({ params }: PageProps) {
  const { locale } = await params
  if (locale !== "en") notFound()

  const url = `${BASE_URL}/en/capo-rizzuto-holiday-apartments`

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/en` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Holiday Apartments Capo Rizzuto",
        item: url,
      },
    ],
  }

  const lodgingSchema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Villa Olimpia",
    url: BASE_URL,
    image: `${BASE_URL}/og-image.jpg`,
    description:
      "9 private holiday apartments with shared pool, 70m from the Blue Flag beach in the Capo Rizzuto Marine Protected Area, Calabria.",
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
    telephone: VILLA_OLIMPIA_LOCATION.contact.phone,
    priceRange: "€€",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Shared outdoor pool", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Air conditioning", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "70m from sandy beach", value: true },
    ],
  }

  const lodges = apartments.filter((a) => a.active !== false)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingSchema) }}
      />

      <main className="min-h-screen pt-20">
        <Breadcrumb
          items={[
            { label: "Home", href: "/en" },
            { label: "Holiday Apartments Capo Rizzuto" },
          ]}
        />

        {/* Hero */}
        <section className="bg-gradient-to-br from-sky-900 via-sky-800 to-blue-900 text-white py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold leading-tight mb-6">
              Your Holiday in Capo Rizzuto Starts Here
            </h1>
            <p className="text-sky-100 text-lg leading-relaxed max-w-3xl">
              9 private holiday apartments with a shared pool, just 70 metres
              from the Blue Flag Spiaggia dei Gigli beach in the Capo Rizzuto
              Marine Protected Area, Calabria. Self-catering, sea-view options,
              direct booking — no agency fees.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/en/apartments"
                className="inline-flex items-center justify-center rounded-full bg-white text-sky-900 px-8 py-3.5 font-semibold hover:bg-sky-50 transition-colors"
              >
                Browse all apartments →
              </Link>
              <Link
                href="/en/contact?source=capo_rizzuto_holiday_landing#prenota"
                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 text-white px-8 py-3.5 font-semibold hover:bg-white/20 transition-colors"
              >
                Check availability
              </Link>
            </div>
          </div>
        </section>

        {/* Why Villa Olimpia */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-slate-900 mb-10 text-center">
              Why Villa Olimpia
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Shared outdoor pool",
                  body: "Sun deck, sun loungers and pool open from late spring to early autumn.",
                },
                {
                  title: "70m from the beach",
                  body: "Spiaggia dei Gigli — soft sand, Blue Flag, walking distance from every lodge.",
                },
                {
                  title: "9 private lodges",
                  body: "Independent apartments for couples, families and small groups, 4 to 6 guests.",
                },
                {
                  title: "Marine Reserve",
                  body: "Inside the Capo Rizzuto Marine Protected Area — clear water, snorkelling, boat trips.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-6"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">{card.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lodge grid */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-slate-900 mb-10 text-center">
              Choose your lodge
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {lodges.map((apt) => {
                const slug = getApartmentSlug(apt)
                return (
                  <Link
                    key={apt.id}
                    href={`/appartamenti/${slug}`}
                    className="group block rounded-2xl overflow-hidden bg-white border border-slate-200 hover:shadow-xl transition-shadow"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={apt.image}
                        alt={`${apt.name} — Villa Olimpia holiday apartment Capo Rizzuto`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-playfair text-xl font-semibold text-slate-900 mb-1">
                        {apt.name}
                      </h3>
                      <p className="text-sm text-slate-600 mb-3">
                        {apt.size} · {apt.guests} guests · {apt.bedrooms}{" "}
                        {apt.bedrooms === 1 ? "bedroom" : "bedrooms"} ·{" "}
                        {apt.bathrooms} {apt.bathrooms === 1 ? "bathroom" : "bathrooms"}
                      </p>
                      <span className="text-sm font-semibold text-sky-700 group-hover:underline">
                        View details →
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Territory */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-slate-900 mb-6">
              Capo Rizzuto & Le Castella
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Villa Olimpia sits inside one of Italy&apos;s largest marine
              protected areas. The Capo Rizzuto Marine Reserve covers
              42 kilometres of coastline with crystal-clear water, sea-grass
              meadows and nesting sites for sea birds. Snorkelling, glass-bottom
              boat tours and diving are all bookable on site.
            </p>
            <p className="text-slate-700 leading-relaxed">
              A short drive away, Le Castella is home to the Aragonese Castle —
              a small island fortress jutting into the Ionian Sea, perfect for
              sunset photos and a sea-front aperitivo. Beaches around the
              property include the sandy Spiaggia dei Gigli (70 m), the wide
              Spiaggia Grande and the secluded coves of Capo Piccolo.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-br from-sky-900 to-blue-800 text-white text-center">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold mb-4">
              Ready to book your Capo Rizzuto holiday?
            </h2>
            <p className="text-sky-100 mb-8">
              Direct booking, fast reply, no commission. Tell us your dates and
              we&apos;ll send a tailored quote within 24 hours.
            </p>
            <Link
              href="/en/apartments"
              className="inline-flex items-center gap-2 rounded-full bg-white text-sky-900 px-8 py-4 font-semibold text-lg hover:bg-sky-50 transition-colors"
            >
              Browse all apartments →
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
