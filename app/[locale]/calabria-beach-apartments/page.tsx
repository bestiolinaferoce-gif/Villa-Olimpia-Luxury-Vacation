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
    title: "Calabria Beach Apartments with Pool | Near Le Castella",
    description:
      "Self-catering apartments steps from the beach in Calabria, southern Italy. Pool, air conditioning, fully equipped kitchen. Book direct for best price.",
    alternates: {
      canonical,
      languages: {
        en: canonical,
        "x-default": canonical,
      },
    },
    openGraph: {
      title: "Calabria Beach Apartments — Villa Olimpia | Capo Rizzuto, Italy",
      description:
        "9 seaside apartments with outdoor pool in the Capo Rizzuto Marine Protected Area, Calabria. Sandy beach ~100m away. Direct booking, no fees.",
      url: canonical,
      siteName: "Villa Olimpia Capo Rizzuto",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${BASE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Villa Olimpia — Calabria Beach Apartments with Pool",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Calabria Beach Apartments — Villa Olimpia",
      description:
        "9 seaside apartments with pool, ~100m from the beach. Capo Rizzuto Marine Protected Area, Calabria.",
      images: [`${BASE_URL}/og-image.jpg`],
    },
  }
}

export default async function CalabriaBeachApartmentsPage({ params }: PageProps) {
  const { locale } = await params
  if (locale !== "en") notFound()
  return <CalabriaBeachApartmentsPageView />
}
