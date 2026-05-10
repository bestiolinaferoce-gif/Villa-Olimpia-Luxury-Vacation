import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MapPin, Plane, Car, Waves, ArrowRight, CheckCircle2 } from "lucide-react"
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

  const canonical = `${BASE_URL}/en/dusseldorf-to-crotone-calabria`
  const title = "Dusseldorf to Calabria Holidays via Crotone | Villa Olimpia"
  const description =
    "Planning a Calabria holiday from the Dusseldorf area? Discover why arriving via Crotone or Lamezia can make Villa Olimpia in Capo Rizzuto easier to reach."

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
      locale: "en_GB",
      type: "website",
      images: [
        {
          url: `${BASE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Villa Olimpia Calabria travel guide from Dusseldorf",
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

export default async function DusseldorfToCrotoneCalabriaPage({ params }: PageProps) {
  const { locale } = await params
  if (locale !== "en") notFound()

  const canonical = `${BASE_URL}/en/dusseldorf-to-crotone-calabria`
  const faqItems = [
    {
      q: "Which airport is easier for Villa Olimpia: Crotone or Lamezia?",
      a: "Crotone is the closest airport to Villa Olimpia. Lamezia usually offers more route combinations, so the best option depends on the current seasonal timetable and your departure city.",
    },
    {
      q: "Is Villa Olimpia suitable for fly-and-drive holidays?",
      a: "Yes. Many guests arrive by plane and rent a car, which makes it easy to reach Capo Piccolo, nearby beaches, Le Castella and the inland villages of Calabria.",
    },
    {
      q: "How far is Villa Olimpia from the beach?",
      a: "Villa Olimpia is about 100 metres from Spiaggia dei Gigli, a sandy Blue Flag beach in the Capo Rizzuto Marine Protected Area.",
    },
  ]

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/en` },
      { "@type": "ListItem", position: 2, name: "Dusseldorf to Calabria", item: canonical },
    ],
  }

  return (
    <main className="min-h-screen pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-gradient-to-br from-slate-950 via-sky-950 to-blue-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
                <Plane className="h-4 w-4" />
                Northern Europe travel demand
              </p>
              <h1 className="mt-6 text-4xl font-playfair font-bold md:text-5xl">
                Calabria holidays from the Dusseldorf area: a practical route to Villa Olimpia
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-blue-100">
                If you are searching from Dusseldorf, the smartest Calabria arrival options are often the airports of
                Crotone and Lamezia Terme. Villa Olimpia is in Capo Piccolo, inside the Capo Rizzuto Marine Protected
                Area, with 9 private apartments, a shared outdoor pool and the beach about 100 metres away.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/en/contact?source=dusseldorf_crotone_landing#prenota"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 font-semibold text-sky-900 transition hover:bg-sky-50"
                >
                  Check availability
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/en/apartments"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3.5 font-semibold text-white transition hover:bg-white/20"
                >
                  See the apartments
                </Link>
              </div>
            </div>

            <div className="relative h-80 overflow-hidden rounded-3xl border border-white/15 shadow-2xl lg:h-[430px]">
              <Image
                src="/images/villa/gallery/Esterni_Piscina_Giorno_01.jpg"
                alt="Villa Olimpia apartments with pool in Calabria"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-center text-3xl font-playfair font-bold text-slate-900 md:text-4xl">
            Why this route matters
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Plane,
                title: "Closer to demand",
                text: "Searches from Germany often start with airport logic. A dedicated travel page gives Google a clearer answer than a generic homepage.",
              },
              {
                icon: Car,
                title: "Fly and drive fit",
                text: "Villa Olimpia works well for travellers who want beach time, flexible day trips and simple airport-to-property transfers.",
              },
              {
                icon: Waves,
                title: "Clear holiday promise",
                text: "Shared pool, independent apartments, direct booking and a sandy Blue Flag beach within a short walk.",
              },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <Icon className="h-6 w-6 text-sky-700" />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-center text-3xl font-playfair font-bold text-slate-900 md:text-4xl">
            Arrival options for Villa Olimpia
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-sky-700" />
                <h3 className="text-xl font-semibold text-slate-900">Via Crotone Airport</h3>
              </div>
              <p className="mt-4 text-slate-600">
                Best when you want the shortest final transfer to Capo Piccolo. This is the closest airport to Villa
                Olimpia and a strong option whenever the seasonal timetable matches your departure city.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-sky-700" />
                <h3 className="text-xl font-semibold text-slate-900">Via Lamezia Terme Airport</h3>
              </div>
              <p className="mt-4 text-slate-600">
                Useful when you want more airline and connection options. For many international travellers this route
                offers more flexibility, especially outside the peak summer schedule.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/en/crotone-airport-to-villa-olimpia"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Crotone airport guide
            </Link>
            <Link
              href="/en/lamezia-airport-to-villa-olimpia"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Lamezia airport guide
            </Link>
          </div>
          <p className="mt-6 text-center text-sm text-slate-500">
            Always verify the current flight timetable before booking. Seasonal airport schedules can change.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-center text-3xl font-playfair font-bold text-slate-900 md:text-4xl">
            Why travellers choose Villa Olimpia once they arrive
          </h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-4">
            {[
              "9 private apartments suitable for couples, families and small groups.",
              "Shared outdoor pool reserved for guests staying at the property.",
              "Spiaggia dei Gigli is about 100 metres away on foot.",
              "Direct booking contact with the property, without marketplace commissions.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-center text-3xl font-playfair font-bold text-slate-900 md:text-4xl">FAQ</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faqItems.map((item) => (
              <div key={item.q} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-slate-900">{item.q}</h3>
                <p className="mt-3 text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-sky-900 via-blue-900 to-slate-950 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold md:text-4xl">Planning your Calabria stay?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Send your dates and group size. We will reply with a direct quote and the best apartment options for your
            trip to Capo Rizzuto.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/en/contact?source=dusseldorf_crotone_bottom#prenota"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 font-semibold text-sky-900 transition hover:bg-sky-50"
            >
              Contact Villa Olimpia
            </Link>
            <Link
              href="/en/capo-rizzuto-holiday-apartments"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3.5 font-semibold text-white transition hover:bg-white/20"
            >
              Read more about the area
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
