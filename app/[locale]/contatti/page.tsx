import type { Metadata } from "next"
import { notFound, redirect } from "next/navigation"
import ContactPageClient from "@/components/pages/contact-page-client"
import { buildContactMetadata } from "@/lib/metadata"
import { defaultLocale, locales, type Locale } from "@/lib/i18n/config"
import { isLocale, getLocalizedPathForCanonical } from "@/lib/i18n/routing"

interface PageProps {
  params: Promise<{
    locale: string
  }>
}

export function generateStaticParams() {
  return locales
    .filter((locale) => locale !== defaultLocale && locale !== "en")
    .map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const pathForCanonical = getLocalizedPathForCanonical("/contatti", locale as Locale)
  return buildContactMetadata(locale, pathForCanonical)
}

export default async function LocalizedContactPage({ params }: PageProps) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  if (locale === defaultLocale) {
    redirect("/contatti")
  }

  if (locale === "en") {
    redirect("/en/contact")
  }

  return <ContactPageClient />
}
