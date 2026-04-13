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
    title: "Calabria Seaside Apartments in Italy | Villa Olimpia",
    description:
      "Seaside apartments in Calabria, Italy: outdoor shared swimming pool and about 100 meters from the sandy beach. Direct booking, reply within 24 hours.",
  },
  de: {
    title: "Ferienwohnungen Kalabrien am Meer mit Pool | Villa Olimpia",
    description:
      "Ferienwohnungen in Kalabrien, Süditalien: Gemeinschafts-Außenpool und ca. 100 m vom Sandstrand. Direktbuchung, Antwort innerhalb von 24 Stunden.",
  },
  fr: {
    title: "Appartements en bord de mer Calabre avec piscine | Villa Olimpia",
    description:
      "Appartements en bord de mer en Calabre, Italie du Sud : piscine extérieure partagée et environ 100 m de la plage. Réservation directe, réponse sous 24h.",
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
