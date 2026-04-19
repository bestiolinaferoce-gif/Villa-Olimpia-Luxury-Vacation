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
    title: "September Italy Holidays in Calabria Seaside",
    description:
      "September holidays in Calabria, Italy: warm weather, less crowded beaches and better value. Seaside apartments with pool at Villa Olimpia.",
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
