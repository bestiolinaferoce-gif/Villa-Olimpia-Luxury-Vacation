import type { Metadata } from "next"
import { redirect } from "next/navigation"
import {
  generateMetadata as definePageMetadata,
  buildHreflangLanguages,
} from "@/lib/metadata"
import { LeCastellaPageView } from "@/components/pages/le-castella-page-view"
import { getLocalizedPathForCanonical } from "@/lib/i18n-routing"
import { locales } from "@/i18n/request"

interface PageProps {
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return locales.filter((l) => l !== "it").map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const path = locale === "en" ? "/en/le-castella" : `/le-castella`
  const base = definePageMetadata({
    title: "Le Castella e Castello Aragonese | Villa Olimpia vicino Capopiccolo",
    description:
      "Scopri Le Castella e il Castello Aragonese durante il soggiorno a Villa Olimpia. Appartamenti con piscina a Capopiccolo, a pochi minuti da una delle mete più belle della Calabria.",
    path,
  })
  return {
    ...base,
    alternates: {
      ...base.alternates,
      languages: buildHreflangLanguages("/le-castella"),
    },
  }
}

export default async function LocalizedLeCastellaPage({ params }: PageProps) {
  const { locale } = await params
  if (locale === "en") {
    return (
      <LeCastellaPageView
        contactHref={getLocalizedPathForCanonical("/contatti", "en")}
        capoRizzutoHref={getLocalizedPathForCanonical("/capo-rizzuto", "en")}
      />
    )
  }
  redirect("/le-castella")
}
