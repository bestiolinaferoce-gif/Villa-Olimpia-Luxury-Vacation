import type { Metadata } from "next"
import { redirect } from "next/navigation"
import {
  generateMetadata as definePageMetadata,
  buildHreflangLanguages,
} from "@/lib/metadata"
import { SettembreCapoRizzutoPageView } from "@/components/pages/settembre-capo-rizzuto-page-view"
import { getLocalizedPathForCanonical } from "@/lib/i18n-routing"
import { isPartialLocale, type SupportedLocale } from "@/lib/i18n-config"
import { locales } from "@/i18n/request"

interface PageProps {
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return locales.filter((l) => l !== "it").map((locale) => ({ locale }))
}

const metaByLocale: Record<string, { title: string; description: string }> = {
  en: {
    title: "September Holidays Italy | Calabria Warm Sea & Low Prices",
    description:
      "September in Calabria: 26°C sea, empty beaches, up to 30% lower prices. The best kept secret in Southern Italy. Book your September break now.",
  },
  de: {
    title: "September Urlaub Kalabrien | Warmes Meer & Wenig Andrang",
    description:
      "September in Kalabrien: 26°C Meer, leere Strände und bis zu 30% günstigere Preise. Buchen Sie jetzt Ihren September-Urlaub.",
  },
  fr: {
    title: "Vacances Septembre Calabre | Mer 26°C, Sans Foule",
    description:
      "Septembre en Calabre : mer à 26°C, plages désertes et prix jusqu'à 30% plus bas. Réservez maintenant votre séjour de septembre.",
  },
  nl: {
    title: "September Vakantie Calabrië | Warme Zee & Rustige Stranden",
    description:
      "September in Calabrië: 26°C zee, lege stranden en tot 30% lagere prijzen. Boek nu je septembervakantie in Zuid-Italië.",
  },
  no: {
    title: "September Ferie Italia | Varmt Hav og Lave Priser i Kalabria",
    description:
      "September i Kalabria er den perfekte ferien for nordmenn: 26°C sjø, ingen folkemasser og priser 20-30% lavere enn august. Bestill nå.",
  },
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const path =
    locale === "en"
      ? "/en/settembre-capo-rizzuto"
      : locale === "de"
        ? "/de/settembre-capo-rizzuto"
        : locale === "fr"
          ? "/fr/settembre-capo-rizzuto"
          : locale === "nl"
            ? "/nl/settembre-capo-rizzuto"
            : locale === "no"
              ? "/no/settembre-capo-rizzuto"
              : "/settembre-capo-rizzuto"
  const meta = metaByLocale[locale] ?? metaByLocale.en
  const base = definePageMetadata({
    title: meta.title,
    description: meta.description,
    path,
  })
  return {
    ...base,
    alternates: {
      ...base.alternates,
      languages: buildHreflangLanguages("/settembre-capo-rizzuto"),
    },
  }
}

function linkSet(L: SupportedLocale) {
  const isEn = L === "en"
  return {
    contactCtaHref: isEn
      ? `${getLocalizedPathForCanonical("/contatti", "en")}?source=settembre_landing#prenota`
      : `${getLocalizedPathForCanonical("/contatti", L)}?source=settembre_landing#prenota`,
    prenotaHref: isEn ? getLocalizedPathForCanonical("/prenota", "en") : "/prenota",
    contattiBandHref: isEn
      ? `${getLocalizedPathForCanonical("/contatti", "en")}?source=settembre_band#prenota`
      : `${getLocalizedPathForCanonical("/contatti", L)}?source=settembre_band#prenota`,
    appartamentiHref: isEn
      ? getLocalizedPathForCanonical("/appartamenti", "en")
      : getLocalizedPathForCanonical("/appartamenti", L),
    homeHref: isEn ? "/en" : L === "de" ? "/de" : L === "fr" ? "/fr" : "/",
  }
}

export default async function LocalizedSettembrePage({ params }: PageProps) {
  const { locale } = await params
  const L = locale as SupportedLocale
  if (locale === "en" || isPartialLocale(L)) {
    const links = linkSet(L)
    return <SettembreCapoRizzutoPageView {...links} />
  }
  redirect("/settembre-capo-rizzuto")
}
