import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { useTranslations } from "next-intl"
import { HomePageEnView } from "@/components/pages/home-page-en-view"
import { HomePageDeFrView } from "@/components/pages/home-page-defr-view"
import HomePageClient from "@/components/pages/home-page-client"
import { FlightsBanner } from "@/components/flights-banner"
import { buildHreflangLanguages, buildLocalizedPageMetadata } from "@/lib/metadata"
import { locales } from "@/i18n/request"
import type { SupportedLocale } from "@/lib/i18n-config"

interface PageProps {
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return locales.filter((l) => l !== "it").map((locale) => ({ locale }))
}

const metaByLocale: Record<string, { title: string; description: string }> = {
  en: {
    title: "Capo Rizzuto Holiday Apartments with Pool | Villa Olimpia Calabria",
    description:
      "Book your Calabria holiday at Villa Olimpia. 9 private lodges with shared pool, less than 100 metres from the beach. Capo Piccolo, Marine Protected Area.",
  },
  de: {
    title: "Ferienwohnungen Kalabrien am Meer mit Pool | Villa Olimpia Capo Rizzuto",
    description:
      "9 Ferienwohnungen im Meeresschutzgebiet Capo Rizzuto, Kalabrien: Gemeinschafts-Außenpool, ca. 100 m vom Sandstrand. Juni, Juli und September 2026 verfügbar. Direktbuchung.",
  },
  fr: {
    title: "Appartements bord de mer Calabre avec piscine | Villa Olimpia Capo Rizzuto",
    description:
      "9 appartements dans l'Aire Marine Protégée de Capo Rizzuto, Calabre : piscine extérieure partagée et environ 100 m de la plage. Disponibles juin, juillet et septembre 2026. Réservation directe.",
  },
  nl: {
    title: "Vakantieappartementen Calabrië aan zee met zwembad | Villa Olimpia Capo Rizzuto",
    description:
      "9 vakantieappartementen in het zeereservaat Capo Rizzuto, Calabrië: gedeeld buitenzwembad, ca. 100 m van het strand. Beschikbaar juni, juli en september 2026. Directe boeking.",
  },
  no: {
    title: "Italia Ferie med Basseng | Villa Olimpia Kalabria",
    description:
      "Bestill din drømmeferie i Kalabria. 9 private leiligheter med felles basseng og under 100 m til stranden. Direkte fra Norge via Warszawa.",
  },
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  if (!locales.includes(locale as (typeof locales)[number])) notFound()

  const meta = metaByLocale[locale] ?? { title: "Villa Olimpia", description: "Villa Olimpia Capo Rizzuto." }
  return buildLocalizedPageMetadata({
    locale: locale as SupportedLocale,
    title: meta.title,
    description: meta.description,
    path: `/${locale}`,
    languages: buildHreflangLanguages("/"),
  })
}

function FlightsBannerWrapper({ locale }: { locale: string }) {
  const t = useTranslations("flights")
  return (
    <FlightsBanner
      locale={locale}
      translations={{
        title: t("title"),
        description: t("description"),
        cta: t("cta"),
      }}
    />
  )
}

export default async function LocalizedHomePage({ params }: PageProps) {
  const { locale } = await params
  if (!locales.includes(locale as (typeof locales)[number])) notFound()

  const showFlightsBanner = locale === "no"

  if (locale === "en") return <HomePageEnView />
  if (locale === "de" || locale === "fr") return <HomePageDeFrView locale={locale} />

  return (
    <>
      {showFlightsBanner && <FlightsBannerWrapper locale={locale} />}
      <HomePageClient />
    </>
  )
}
