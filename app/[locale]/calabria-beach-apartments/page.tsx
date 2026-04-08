import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CalabriaBeachApartmentsPageView } from "@/components/pages/calabria-beach-apartments-page-view"
import { BASE_URL } from "@/lib/metadata"

interface PageProps {
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return [{ locale: "en" as const }]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  if (locale !== "en") notFound()

  const canonical = `${BASE_URL}/en/calabria-beach-apartments`
  return {
    title: "Calabria Beach Apartments by Seaside, Italy",
    description:
      "Calabria seaside apartments in Italy with outdoor shared swimming pool, kitchens, and about 100 meters from the sandy beach.",
    alternates: {
      canonical,
      languages: {
        en: canonical,
        "x-default": canonical,
      },
    },
  }
}

export default async function CalabriaBeachApartmentsPage({ params }: PageProps) {
  const { locale } = await params
  if (locale !== "en") notFound()
  return <CalabriaBeachApartmentsPageView />
}
