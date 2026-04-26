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
    title: "Family Holiday Calabria | Apartments with Pool & Beach Access",
    description:
      "Perfect family holiday in Calabria: spacious apartments for 4-6 guests, shared pool, 70m from sandy beach. Kids love it. Book direct and save.",
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
