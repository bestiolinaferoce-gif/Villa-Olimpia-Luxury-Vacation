import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { AppartamentiIndexPageView } from "@/components/pages/appartamenti-index-page-view"
import { buildApartmentsListingMetadata } from "@/lib/metadata"

interface PageProps {
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return [{ locale: "en" as const }]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  if (locale !== "en") notFound()
  return buildApartmentsListingMetadata("en", "/en/apartments")
}

export default async function EnglishApartmentsPage({ params }: PageProps) {
  const { locale } = await params
  if (locale !== "en") notFound()
  return <AppartamentiIndexPageView mapLanguage="en" />
}
