import type { Metadata } from "next"
import { redirect } from "next/navigation"
import {
  generateMetadata as definePageMetadata,
  buildHreflangLanguages,
} from "@/lib/metadata"
import { SettembreCapoRizzutoPageView } from "@/components/pages/settembre-capo-rizzuto-page-view"
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
      ? "/en/settembre-capo-rizzuto"
      : locale === "de"
        ? "/de/settembre-capo-rizzuto"
        : locale === "fr"
          ? "/fr/settembre-capo-rizzuto"
          : "/settembre-capo-rizzuto"
  const base = definePageMetadata({
    title: "Settembre a Capo Rizzuto | Villa con piscina | Villa Olimpia",
    description:
      "Settembre a Capo Rizzuto: mare ancora caldo, meno folla e soggiorni rilassati a Villa Olimpia. Villa con piscina vicino all'Area Marina Protetta e alla Spiaggia dei Gigli. Prenotazione diretta.",
    path,
  })
  return {
    ...base,
    alternates: {
      ...base.alternates,
      languages: buildHreflangLanguages("/settembre-capo-rizzuto"),
    },
  }
}

function linkSet(L: SupportedLocale) {
  const isEn = L === "en"
  return {
    contactCtaHref: isEn
      ? `${getLocalizedPathForCanonical("/contatti", "en")}?source=settembre_landing#prenota`
      : `${getLocalizedPathForCanonical("/contatti", L)}?source=settembre_landing#prenota`,
    prenotaHref: isEn ? getLocalizedPathForCanonical("/prenota", "en") : "/prenota",
    contattiBandHref: isEn
      ? `${getLocalizedPathForCanonical("/contatti", "en")}?source=settembre_band#prenota`
      : `${getLocalizedPathForCanonical("/contatti", L)}?source=settembre_band#prenota`,
    appartamentiHref: isEn
      ? getLocalizedPathForCanonical("/appartamenti", "en")
      : getLocalizedPathForCanonical("/appartamenti", L),
    homeHref: isEn ? "/en" : L === "de" ? "/de" : L === "fr" ? "/fr" : "/",
  }
}

export default async function LocalizedSettembrePage({ params }: PageProps) {
  const { locale } = await params
  const L = locale as SupportedLocale
  if (locale === "en" || isPartialLocale(L)) {
    const links = linkSet(L)
    return <SettembreCapoRizzutoPageView {...links} />
  }
  redirect("/settembre-capo-rizzuto")
}
