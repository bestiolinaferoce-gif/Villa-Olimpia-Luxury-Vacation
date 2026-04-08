import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { HomePageEnView } from "@/components/pages/home-page-en-view"
import HomePageClient from "@/components/pages/home-page-client"
import { BASE_URL, buildHreflangLanguages } from "@/lib/metadata"
import { locales } from "@/i18n/request"

interface PageProps {
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return locales.filter((l) => l !== "it").map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  if (!locales.includes(locale as (typeof locales)[number])) notFound()

  const canonical = locale === "en" ? `${BASE_URL}/en` : `${BASE_URL}/${locale}`
  const isEn = locale === "en"
  return {
    title: isEn ? "Calabria Seaside Apartments in Italy | Villa Olimpia" : "Villa Olimpia Capo Rizzuto",
    description: isEn
      ? "Seaside apartments in Calabria, Italy: outdoor shared swimming pool and about 100 meters from the sandy beach."
      : "Villa Olimpia Capo Rizzuto.",
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
  return <HomePageClient />
}
