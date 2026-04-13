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

const capoMeta: Record<string, { title: string; description: string }> = {
  en: {
    title: "Apartments in Capo Rizzuto, Calabria | Villa Olimpia",
    description:
      "Looking for apartments in Capo Rizzuto? Villa Olimpia offers 9 holiday apartments with outdoor shared swimming pool, Wi-Fi and free parking, near Le Castella and the Marine Protected Area.",
  },
  de: {
    title: "Ferienwohnungen Capo Rizzuto Kalabrien | Villa Olimpia",
    description:
      "Ferienwohnungen in Capo Rizzuto, Kalabrien: 9 Apartments mit Außenpool, WLAN und kostenlosem Parkplatz. In der Nähe von Le Castella und dem Meeresschutzgebiet.",
  },
  fr: {
    title: "Appartements Capo Rizzuto Calabre | Villa Olimpia",
    description:
      "Appartements de vacances à Capo Rizzuto, Calabre : 9 logements avec piscine extérieure partagée, Wi-Fi et parking gratuit. Près de Le Castella et de l'aire marine protégée.",
  },
  it: {
    title: "Appartamenti Capo Rizzuto | Villa Olimpia | Affitto Vacanze Calabria",
    description:
      "Cerca appartamenti a Capo Rizzuto? Villa Olimpia offre 9 appartamenti vacanza con piscina, WiFi, parcheggio. Vicino Le Castella e spiagge.",
  },
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
  const meta = capoMeta[locale] ?? capoMeta.it
  const base = definePageMetadata({
    title: meta.title,
    description: meta.description,
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
