import { MetadataRoute } from "next"
import { apartments } from "@/data/apartments"
import { locales } from "@/i18n/request"
import { BASE_URL } from "@/lib/metadata"

// Date statiche per categoria — non cambiano ad ogni build (risparmio crawl budget)
const DATE_CORE = new Date("2025-12-01")
const DATE_LEGAL = new Date("2025-06-01")
const DATE_CONTENT = new Date("2025-11-01")

const staticRoutes: Array<{
  path: string
  priority: number
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly"
  lastMod: Date
}> = [
  { path: "", priority: 1.0, changeFrequency: "weekly", lastMod: DATE_CORE },
  { path: "/appartamenti", priority: 0.95, changeFrequency: "weekly", lastMod: DATE_CORE },
  { path: "/prenota", priority: 0.95, changeFrequency: "monthly", lastMod: DATE_CORE },
  { path: "/contatti", priority: 0.9, changeFrequency: "monthly", lastMod: DATE_CORE },
  { path: "/recensioni", priority: 0.9, changeFrequency: "weekly", lastMod: DATE_CORE },
  { path: "/location", priority: 0.85, changeFrequency: "monthly", lastMod: DATE_CONTENT },
  { path: "/territorio", priority: 0.85, changeFrequency: "monthly", lastMod: DATE_CONTENT },
  { path: "/enogastronomia", priority: 0.8, changeFrequency: "monthly", lastMod: DATE_CONTENT },
  { path: "/servizi", priority: 0.8, changeFrequency: "monthly", lastMod: DATE_CONTENT },
  { path: "/capo-rizzuto", priority: 0.8, changeFrequency: "monthly", lastMod: DATE_CONTENT },
  { path: "/gallery", priority: 0.75, changeFrequency: "monthly", lastMod: DATE_CONTENT },
  { path: "/le-castella", priority: 0.75, changeFrequency: "monthly", lastMod: DATE_CONTENT },
  { path: "/spiagge-capo-rizzuto", priority: 0.75, changeFrequency: "monthly", lastMod: DATE_CONTENT },
  { path: "/area-marina-protetta", priority: 0.75, changeFrequency: "monthly", lastMod: DATE_CONTENT },
  { path: "/cosa-fare-capo-rizzuto", priority: 0.75, changeFrequency: "monthly", lastMod: DATE_CONTENT },
  { path: "/ciro-wine-tour", priority: 0.7, changeFrequency: "monthly", lastMod: DATE_CONTENT },
  { path: "/faq", priority: 0.7, changeFrequency: "monthly", lastMod: DATE_CONTENT },
  // Legali — route attive verificate al 2026-03-01
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly", lastMod: DATE_LEGAL },
  { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly", lastMod: DATE_LEGAL },
  { path: "/cookie-policy", priority: 0.2, changeFrequency: "yearly", lastMod: DATE_LEGAL },
  { path: "/termini-condizioni", priority: 0.2, changeFrequency: "yearly", lastMod: DATE_LEGAL },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: route.lastMod,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  // Pagine localizzate con hreflang alternates
  const localePages: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${BASE_URL}/${locale}`,
    lastModified: DATE_CORE,
    changeFrequency: "weekly" as const,
    priority: locale === "it" ? 0.9 : 0.75,
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, `${BASE_URL}/${l}`])
      ),
    },
  }))

  // Pagine appartamenti (solo attivi)
  const apartmentPages: MetadataRoute.Sitemap = apartments.filter((a) => a.active !== false).map((apartment) => ({
    url: `${BASE_URL}/appartamenti/apartment-${apartment.id}`,
    lastModified: DATE_CORE,
    changeFrequency: "monthly" as const,
    priority: apartment.premium ? 0.9 : 0.82,
  }))

  return [...pages, ...localePages, ...apartmentPages]
}
