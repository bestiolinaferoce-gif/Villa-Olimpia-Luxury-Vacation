import type { Metadata } from "next"
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales } from '@/i18n/request'
import { defaultMetadata, BASE_URL, buildHreflangLanguages } from "@/lib/metadata"

// BCP-47 codes for JSON-LD inLanguage field
const BCP47: Record<string, string> = { en: "en-US", de: "de-DE", fr: "fr-FR" }

// ---------------------------------------------------------------------------
// Locale-specific OG / Twitter copy (one source of truth per language)
// ---------------------------------------------------------------------------
const OG_META: Record<string, { title: string; description: string; ogLocale: string }> = {
  it: {
    title: "Villa Olimpia — Appartamenti con Piscina a Capo Rizzuto | Estate 2026",
    description:
      "9 appartamenti con piscina a Capopiccolo, Area Marina Protetta di Capo Rizzuto. Estate 2026 disponibile — Spiaggia dei Gigli a 100m, prenotazione diretta senza commissioni.",
    ogLocale: "it_IT",
  },
  en: {
    title: "Villa Olimpia — Luxury Apartments with Pool in Capo Rizzuto | Summer 2026",
    description:
      "9 luxury apartments with outdoor pool in Capopiccolo, Capo Rizzuto Marine Protected Area. Summer 2026 available — Spiaggia dei Gigli beach 100m away. Direct booking, no fees.",
    ogLocale: "en_US",
  },
  de: {
    title: "Villa Olimpia — Luxus-Apartments mit Pool in Capo Rizzuto | Sommer 2026",
    description:
      "9 Luxus-Apartments mit Außenpool in Capopiccolo, Capo Rizzuto Meeresschutzgebiet. Sommer 2026 verfügbar — Strand 100m entfernt. Direktbuchung ohne Gebühren.",
    ogLocale: "de_DE",
  },
  fr: {
    title: "Villa Olimpia — Appartements de Luxe avec Piscine à Capo Rizzuto | Été 2026",
    description:
      "9 appartements de luxe avec piscine à Capopiccolo, Aire Marine Protégée de Capo Rizzuto. Été 2026 disponible — Plage à 100m. Réservation directe sans frais.",
    ogLocale: "fr_FR",
  },
}

// ---------------------------------------------------------------------------
// Static params — only non-Italian locales (Italian stays at root)
// ---------------------------------------------------------------------------
export function generateStaticParams() {
  return locales.filter((locale) => locale !== "it").map((locale) => ({ locale }))
}

// ---------------------------------------------------------------------------
// Metadata — canonical + localized OG/Twitter per locale
// ---------------------------------------------------------------------------
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!locales.includes(locale as (typeof locales)[number])) {
    return defaultMetadata
  }

  const ogData = OG_META[locale] ?? OG_META.it
  const canonical = locale === "it" ? BASE_URL : `${BASE_URL}/${locale}`

  return {
    ...defaultMetadata,
    title: ogData.title,
    description: ogData.description,
    openGraph: {
      ...(defaultMetadata.openGraph ?? {}),
      title: ogData.title,
      description: ogData.description,
      url: canonical,
      locale: ogData.ogLocale,
    },
    twitter: {
      ...(defaultMetadata.twitter ?? {}),
      title: ogData.title,
      description: ogData.description,
    },
    alternates: {
      ...defaultMetadata.alternates,
      canonical,
      languages: buildHreflangLanguages("/"),
    },
  }
}

// ---------------------------------------------------------------------------
// Localized WebPage JSON-LD — complements the root LodgingBusiness entity.
// Rendered in <body> (Google supports JSON-LD in both head and body).
// ---------------------------------------------------------------------------
function buildWebPageJsonLd(locale: string) {
  const og = OG_META[locale] ?? OG_META.it
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: `${BASE_URL}/${locale}`,
    inLanguage: BCP47[locale] ?? locale,
    name: og.title,
    description: og.description,
    about: { "@id": `${BASE_URL}/#business` },
  }
}

// ---------------------------------------------------------------------------
// Layout — thin wrapper: only provides next-intl context.
// HTML / head / body / Header / Footer / Analytics live exclusively in
// app/layout.tsx (root) to avoid duplicate document structure.
// ---------------------------------------------------------------------------
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <>
      {/* Correct html lang for locale routes — root layout defaults to "it" (static/SSG) */}
      <script dangerouslySetInnerHTML={{ __html: `document.documentElement.lang="${locale}"` }} />
      {/* Locale-specific WebPage JSON-LD — overrides Italian description from root layout */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildWebPageJsonLd(locale)) }}
      />
      <NextIntlClientProvider messages={messages}>
        {children}
      </NextIntlClientProvider>
    </>
  )
}
