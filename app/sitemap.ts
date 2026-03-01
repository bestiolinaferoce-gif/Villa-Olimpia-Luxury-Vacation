import { MetadataRoute } from "next"
import { apartments } from "@/data/apartments"
import { locales } from "@/i18n/request"
import { BASE_URL } from "@/lib/metadata"

const lastModified = new Date()

const staticRoutes: Array<{
  path: string
  priority: number
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly"
}> = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "/appartamenti", priority: 0.95, changeFrequency: "weekly" },
  { path: "/recensioni", priority: 0.9, changeFrequency: "weekly" },
  { path: "/contatti", priority: 0.9, changeFrequency: "monthly" },
  { path: "/prenota", priority: 0.9, changeFrequency: "monthly" },
  { path: "/location", priority: 0.85, changeFrequency: "monthly" },
  { path: "/territorio", priority: 0.85, changeFrequency: "monthly" },
  { path: "/enogastronomia", priority: 0.8, changeFrequency: "monthly" },
  { path: "/servizi", priority: 0.8, changeFrequency: "monthly" },
  { path: "/gallery", priority: 0.75, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
  { path: "/capo-rizzuto", priority: 0.8, changeFrequency: "monthly" },
  { path: "/le-castella", priority: 0.75, changeFrequency: "monthly" },
  { path: "/spiagge-capo-rizzuto", priority: 0.75, changeFrequency: "monthly" },
  { path: "/area-marina-protetta", priority: 0.75, changeFrequency: "monthly" },
  { path: "/cosa-fare-capo-rizzuto", priority: 0.75, changeFrequency: "monthly" },
  { path: "/ciro-wine-tour", priority: 0.7, changeFrequency: "monthly" },
  { path: "/cookie-policy", priority: 0.25, changeFrequency: "yearly" },
  { path: "/privacy-policy", priority: 0.25, changeFrequency: "yearly" },
  { path: "/termini-condizioni", priority: 0.25, changeFrequency: "yearly" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const localePages: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${BASE_URL}/${locale}`,
    lastModified,
    changeFrequency: "weekly",
    priority: locale === "it" ? 0.9 : 0.75,
  }))

  const apartmentPages: MetadataRoute.Sitemap = apartments.filter((a) => a.active !== false).map((apartment) => ({
    url: `${BASE_URL}/appartamenti/apartment-${apartment.id}`,
    lastModified,
    changeFrequency: "monthly",
    priority: apartment.premium ? 0.9 : 0.82,
  }))

  return [...pages, ...localePages, ...apartmentPages]
}
