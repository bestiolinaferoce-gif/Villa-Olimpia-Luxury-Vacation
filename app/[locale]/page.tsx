import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { HomePageEnView } from "@/components/pages/home-page-en-view"
import { HomePageDeFrView } from "@/components/pages/home-page-defr-view"
import HomePageClient from "@/components/pages/home-page-client"
import { BASE_URL, buildHreflangLanguages } from "@/lib/metadata"
import { locales } from "@/i18n/request"

interface PageProps {
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return locales.filter((l) => l !== "it").map((locale) => ({ locale }))
}

const metaByLocale: Record<string, { title: string; description: string }> = {
  en: {
    title: "Calabria Seaside Apartments with Pool | Villa Olimpia — Capo Rizzuto",
    description:
      "9 apartments in the Capo Rizzuto Marine Protected Area, Calabria: outdoor shared pool and about 100 metres from the sandy beach. Available June, July and September 2026. Direct booking.",
  },
  de: {
    title: "Ferienwohnungen Kalabrien am Meer mit Pool | Villa Olimpia Capo Rizzuto",
    description:
      "9 Ferienwohnungen im Meeresschutzgebiet Capo Rizzuto, Kalabrien: Gemeinschafts-Außenpool, ca. 100 m vom Sandstrand. Juni, Juli und September 2026 verfügbar. Direktbuchung.",
  },
  fr: {
    title: "Appartements bord de mer Calabre avec piscine | Villa Olimpia Capo Rizzuto",
    description:
      "9 appartements dans l'Aire Marine Protégée de Capo Rizzuto, Calabre : piscine extérieure partagée et environ 100 m de la plage. Disponibles juin, juillet et septembre 2026. Réservation directe.",
  },
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  if (!locales.includes(locale as (typeof locales)[number])) notFound()

  const canonical = locale === "en" ? `${BASE_URL}/en` : `${BASE_URL}/${locale}`
  const meta = metaByLocale[locale] ?? { title: "Villa Olimpia", description: "Villa Olimpia Capo Rizzuto." }
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical,
      languages: buildHreflangLanguages("/"),
    },
  }
}

export default async function LocalizedHomePage({ params }: PageProps) {
  const { locale } = await params
  if (!locales.includes(locale as (typeof locales)[number])) notFound()
  if (locale === "en") return <HomePageEnView />
  if (locale === "de" || locale === "fr") return <HomePageDeFrView locale={locale} />
  return <HomePageClient />
}
