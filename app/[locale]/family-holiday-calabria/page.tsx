import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { FamilyHolidayCalabriaPageView } from "@/components/pages/family-holiday-calabria-page-view"
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

  const canonical = `${BASE_URL}/en/family-holiday-calabria`
  return buildLocalizedPageMetadata({
    locale: "en",
    title: "Family Holiday Calabria Seaside Apartments Italy",
    description:
      "Family holiday in Calabria with sandy beach, pool, garden and safe setting. Seaside apartments in Italy near Le Castella at Villa Olimpia.",
    path: "/en/family-holiday-calabria",
    languages: {
      en: canonical,
      "x-default": canonical,
    },
  })
}

export default async function FamilyHolidayCalabriaPage({ params }: PageProps) {
  const { locale } = await params
  if (locale !== "en") notFound()
  return <FamilyHolidayCalabriaPageView />
}
