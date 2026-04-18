import type { Metadata } from "next"
import { useTranslations } from "next-intl"
import { notFound } from "next/navigation"
import Link from "next/link"
import Script from "next/script"
import { locales } from "@/i18n/request"
import { BASE_URL } from "@/lib/metadata"

interface PageProps {
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return [{ locale: "no" }, { locale: "en" }]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  if (locale !== "no" && locale !== "en") notFound()

  const canonical = `${BASE_URL}/${locale}/norway`

  return {
    title: "Villa Olimpia Calabria – Direktefly fra Oslo | 2026",
    description:
      "Book direkte. Norwegian direktefly Oslo–Lamezia Terme fra mai 2026. 9 private lodges, basseng, 70m fra stranden.",
    alternates: {
      canonical,
      languages: {
        nb: `${BASE_URL}/no/norway`,
        en: `${BASE_URL}/en/norway`,
        it: BASE_URL,
        "x-default": BASE_URL,
      },
    },
  }
}

const lodgingSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Villa Olimpia",
  url: "https://villaolimpiacaporizzuto.com",
  description:
    "9 lodges indipendenti con piscina, 70m dalla spiaggia, Area Marina Protetta di Capo Rizzuto, Calabria",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Località Capo Piccolo",
    addressLocality: "Isola di Capo Rizzuto",
    addressRegion: "KR",
    postalCode: "88841",
    addressCountry: "IT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.9136,
    longitude: 17.0836,
  },
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Utendørsbasseng",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Strand 70 meter",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "9 private lodges",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Lamezia Terme flyplass (SUF) 75 km",
      value: true,
    },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Hvordan kommer jeg fra Oslo til Villa Olimpia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ta Norwegian direktefly Oslo Gardermoen (OSL) til Lamezia Terme (SUF), avganger hver mandag mai–oktober 2026. Lei bil på flyplassen (anbefalt) eller bestill transfer. Kjøretid ca 75 minutter.",
      },
    },
    {
      "@type": "Question",
      name: "Kan jeg booke Villa Olimpia for en gruppe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, Villa Olimpia tar imot grupper fra 4 til 20 personer. Vi har 9 separate lodges: Frangipane, Fiordaliso, Giglio, Tulipano, Orchidea, Lavanda, Geranio, Gardenia og Azalea.",
      },
    },
    {
      "@type": "Question",
      name: "Er det strand i nærheten av Villa Olimpia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stranden Spiaggia dei Gigli (Blått Flagg) er kun 70 meter fra Villa Olimpia, innenfor det marine verneområdet Capo Rizzuto.",
      },
    },
  ],
}

export default async function NorwayPage({ params }: PageProps) {
  const { locale } = await params
  if (!locales.includes(locale as (typeof locales)[number])) notFound()
  if (locale !== "no" && locale !== "en") notFound()

  return <NorwayPageContent />
}

function NorwayPageContent() {
  const t = useTranslations("norway")

  return (
    <>
      <Script
        id="ld-lodging"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingSchema) }}
      />
      <Script
        id="ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium mb-6">
              ✈️ {t("badge")}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              {t("h1")}
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed max-w-3xl">
              {t("intro")}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/no/contatti?source=norway_landing"
                className="inline-flex items-center justify-center rounded-full bg-white text-blue-900 px-8 py-3.5 font-semibold hover:bg-blue-50 transition-colors"
              >
                {t("ctaButton")}
              </Link>
            </div>
          </div>
        </section>

        {/* Direktefly */}
        <section className="py-14 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
              {t("flightsSection.title")}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {(
                [
                  "route",
                  "frequency",
                  "season",
                  "duration",
                  "transfer",
                ] as const
              ).map((key) => (
                <div
                  key={key}
                  className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4"
                >
                  <span className="text-blue-700 font-bold text-lg leading-none">→</span>
                  <p className="text-slate-700 text-sm leading-snug">
                    {t(`flightsSection.${key}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Villa + 9 lodges */}
        <section className="py-14 px-4 bg-slate-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              {t("villaSection.title")}
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              {t("villaSection.body")}
            </p>
            <p className="text-slate-700 leading-relaxed">
              {t("villaSection.beach")}
            </p>
            <div className="mt-8 grid grid-cols-3 sm:grid-cols-5 gap-2">
              {[
                "Frangipane",
                "Fiordaliso",
                "Giglio",
                "Tulipano",
                "Orchidea",
                "Lavanda",
                "Geranio",
                "Gardenia",
                "Azalea",
              ].map((name) => (
                <span
                  key={name}
                  className="rounded-lg bg-white border border-slate-200 px-3 py-2 text-sm text-center font-medium text-slate-700"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Transfer */}
        <section className="py-14 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              {t("transferSection.title")}
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              {t("transferSection.body")}
            </p>
            <p className="text-slate-600 text-sm">{t("transferSection.distance")}</p>
            <a
              href="https://www.google.com/maps/dir/Aeroporto+Internazionale+di+Lamezia+Terme/Villa+Olimpia,+Isola+di+Capo+Rizzuto"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-blue-700 font-medium hover:underline"
            >
              🗺️ {t("transferSection.mapsLink")}
            </a>
          </div>
        </section>

        {/* Grupper */}
        <section className="py-14 px-4 bg-blue-950 text-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              {t("groupsSection.title")}
            </h2>
            <p className="text-blue-100 leading-relaxed">
              {t("groupsSection.body")}
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
              {t("faqTitle")}
            </h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((item, i) => (
                <div key={i} className="border-b border-slate-100 pb-6">
                  <h3 className="font-semibold text-slate-900 mb-2">{item.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-950 to-blue-800 text-white text-center">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">{t("ctaTitle")}</h2>
            <p className="text-blue-100 mb-8">{t("ctaBody")}</p>
            <a
              href="https://wa.me/393335773390?text=Hei!+Jeg+er+interessert+i+Villa+Olimpia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-500 hover:bg-green-400 text-white px-8 py-4 font-semibold text-lg transition-colors"
            >
              💬 {t("ctaButton")}
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
