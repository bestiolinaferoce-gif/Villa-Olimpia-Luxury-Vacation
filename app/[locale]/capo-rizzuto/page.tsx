import type { Metadata } from "next"
import { redirect } from "next/navigation"
import {
  generateMetadata as definePageMetadata,
  buildHreflangLanguages,
} from "@/lib/metadata"
import { CapoRizzutoPageView } from "@/components/pages/capo-rizzuto-page-view"
import { getLocalizedPathForCanonical } from "@/lib/i18n-routing"
import { isPartialLocale, type SupportedLocale } from "@/lib/i18n-config"
import { locales } from "@/i18n/request"

interface PageProps {
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return locales.filter((l) => l !== "it").map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const path =
    locale === "en"
      ? "/en/capo-rizzuto"
      : locale === "de"
        ? "/de/capo-rizzuto"
        : locale === "fr"
          ? "/fr/capo-rizzuto"
          : "/capo-rizzuto"
  const base = definePageMetadata({
    title: "Appartamenti Capo Rizzuto | Villa Olimpia | Affitto Vacanze Calabria",
    description:
      "Cerca appartamenti a Capo Rizzuto? Villa Olimpia offre 9 appartamenti vacanza con piscina, WiFi, parcheggio. Vicino Le Castella e spiagge.",
    path,
  })
  return {
    ...base,
    alternates: {
      ...base.alternates,
      languages: buildHreflangLanguages("/capo-rizzuto"),
    },
  }
}

export default async function LocalizedCapoRizzutoPage({ params }: PageProps) {
  const { locale } = await params
  const L = locale as SupportedLocale
  if (locale === "en") {
    return (
      <CapoRizzutoPageView
        contactHref={getLocalizedPathForCanonical("/contatti", "en")}
        leCastellaHref={getLocalizedPathForCanonical("/le-castella", "en")}
      />
    )
  }
  if (isPartialLocale(L)) {
    return (
      <CapoRizzutoPageView
        contactHref={getLocalizedPathForCanonical("/contatti", L)}
        leCastellaHref="/le-castella"
      />
    )
  }
  redirect("/capo-rizzuto")
}
