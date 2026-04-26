import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SeptemberItalyHolidaysPageView } from "@/components/pages/september-italy-holidays-page-view"
import { BASE_URL, buildLocalizedPageMetadata } from "@/lib/metadata"

interface PageProps {
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return [{ locale: "en" as const }]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  if (locale !== "en") notFound()

  const canonical = `${BASE_URL}/en/september-italy-holidays`
  return buildLocalizedPageMetadata({
    locale: "en",
    title: "September Holidays Italy | Calabria Warm Sea & Low Prices",
    description:
      "September in Calabria: 26°C sea, empty beaches, up to 30% lower prices. The best kept secret in Southern Italy. Book your September break now.",
    path: "/en/september-italy-holidays",
    languages: {
      en: canonical,
      "x-default": canonical,
    },
  })
}

export default async function SeptemberItalyHolidaysPage({ params }: PageProps) {
  const { locale } = await params
  if (locale !== "en") notFound()
  return <SeptemberItalyHolidaysPageView />
}
