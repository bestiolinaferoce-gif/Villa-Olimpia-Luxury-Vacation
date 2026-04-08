import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ContactPageClient from "@/components/pages/contact-page-client"
import { buildContactMetadata } from "@/lib/metadata"

interface PageProps {
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return [{ locale: "en" as const }]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  if (locale !== "en") notFound()
  return buildContactMetadata("en", "/en/contact")
}

export default async function EnglishContactPage({ params }: PageProps) {
  const { locale } = await params
  if (locale !== "en") notFound()
  return <ContactPageClient />
}
