import type { Metadata } from "next"
import { notFound } from "next/navigation"
import {
  generateMetadata as definePageMetadata,
  buildHreflangLanguages,
} from "@/lib/metadata"
import { PrenotaPageView } from "@/components/pages/prenota-page-view"
import { getLocalizedPathForCanonical } from "@/lib/i18n-routing"

interface PageProps {
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return [{ locale: "en" }]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  if (locale !== "en") {
    notFound()
  }

  const base = definePageMetadata({
    title: "Direct Booking — Apartments in Capo Rizzuto | Villa Olimpia",
    description:
      "Book Villa Olimpia direct in Capo Rizzuto: apartments with pool, reply within 24 hours and tailored offers with no intermediaries.",
    path: "/en/prenota",
    keywords: [
      "book Villa Olimpia",
      "direct booking Capo Rizzuto",
      "Capopiccolo apartments request",
    ],
  })
  return {
    ...base,
    alternates: {
      ...base.alternates,
      languages: buildHreflangLanguages("/prenota"),
    },
  }
}

export default async function LocalizedPrenotaPage({ params }: PageProps) {
  const { locale } = await params
  if (locale !== "en") {
    notFound()
  }

  const apartmentsHref = getLocalizedPathForCanonical("/appartamenti", "en")
  const settembreHref = getLocalizedPathForCanonical("/settembre-capo-rizzuto", "en")
  return (
    <PrenotaPageView
      locale="en"
      apartmentsHref={apartmentsHref}
      settembreHref={settembreHref}
      interaVillaHref="/intera-villa-calabria"
    />
  )
}
