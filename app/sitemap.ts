import { MetadataRoute } from "next"
import { apartments, getApartmentSlug } from "@/data/apartments"
import { BASE_URL } from "@/lib/metadata"
import { BLOG_POSTS, BLOG_LAST_MOD } from "@/data/blog-posts"
import { SUPPORTED_LOCALES, localeHasRoute } from "@/lib/i18n-config"
import { getLocalizedPathForCanonical } from "@/lib/i18n-routing"

// Date statiche per categoria — non cambiano ad ogni build (risparmio crawl budget)
const DATE_CORE = new Date("2026-03-25")
const DATE_CONTENT = new Date("2026-03-25")
const DATE_NEW_PAGES = new Date("2026-04-08")
const DATE_TERRITORIO = new Date("2026-04-19")
const DATE_SCHEMA_FIX = new Date("2026-04-29") // Fix schema VacationRental + redirect

const staticRoutes: Array<{
  path: string
  priority: number
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly"
  lastMod: Date
}> = [
  { path: "", priority: 1.0, changeFrequency: "weekly", lastMod: DATE_CORE },
  { path: "/appartamenti", priority: 0.95, changeFrequency: "weekly", lastMod: DATE_CORE },
  { path: "/prenota", priority: 0.95, changeFrequency: "monthly", lastMod: DATE_CORE },
  { path: "/maggio-2026", priority: 0.9, changeFrequency: "weekly", lastMod: DATE_CORE },
  { path: "/giugno-2026", priority: 0.9, changeFrequency: "weekly", lastMod: DATE_CORE },
  { path: "/luglio-2026", priority: 0.9, changeFrequency: "weekly", lastMod: DATE_CORE },
  { path: "/settembre-capo-rizzuto", priority: 0.88, changeFrequency: "weekly", lastMod: DATE_NEW_PAGES },
  { path: "/intera-villa-calabria", priority: 0.86, changeFrequency: "monthly", lastMod: DATE_NEW_PAGES },

  { path: "/contatti", priority: 0.9, changeFrequency: "monthly", lastMod: DATE_CORE },
  { path: "/recensioni", priority: 0.9, changeFrequency: "weekly", lastMod: DATE_CORE },
  { path: "/location", priority: 0.85, changeFrequency: "monthly", lastMod: DATE_CONTENT },
  { path: "/territorio", priority: 0.85, changeFrequency: "monthly", lastMod: DATE_TERRITORIO },
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
]

/** Canonical paths with localized URL strategy (Model A selective) */
const MULTILINGUAL_CANONICAL = [
  "/",
  "/contatti",
  "/appartamenti",
  "/prenota",
  "/capo-rizzuto",
  "/le-castella",
  "/settembre-capo-rizzuto",
] as const

const EN_ONLY_CANONICAL = [
  "/calabria-beach-apartments",
  "/family-holiday-calabria",
  "/september-italy-holidays",
] as const

const EN_PRIORITY_LANDINGS: Array<{ canonical: string; priority: number }> = [
  { canonical: "/capo-rizzuto-holiday-apartments", priority: 0.9 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: route.lastMod,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  // Pagine appartamenti (solo attivi)
  const apartmentPages: MetadataRoute.Sitemap = apartments.filter((a) => a.active !== false).map((apartment) => ({
    url: `${BASE_URL}/appartamenti/${getApartmentSlug(apartment)}`,
    lastModified: DATE_SCHEMA_FIX,
    changeFrequency: "monthly" as const,
    priority: apartment.premium ? 0.9 : 0.82,
  }))

  const blogIndex: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/blog`,
      lastModified: BLOG_LAST_MOD,
      changeFrequency: "weekly" as const,
      priority: 0.72,
    },
  ]

  const blogArticles: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: BLOG_LAST_MOD,
    changeFrequency: "monthly" as const,
    priority: 0.68,
  }))

  const localizedExtra: MetadataRoute.Sitemap = []
  for (const canonical of MULTILINGUAL_CANONICAL) {
    const baseMeta = staticRoutes.find((r) => r.path === canonical || (canonical === "/" && r.path === ""))
    const lastMod = baseMeta?.lastMod ?? DATE_CORE
    const changeFrequency = baseMeta?.changeFrequency ?? ("monthly" as const)
    const priority = (baseMeta?.priority ?? 0.85) * 0.99

    for (const loc of SUPPORTED_LOCALES) {
      if (loc === "it") continue
      if (!localeHasRoute(loc, canonical)) continue
      const path = getLocalizedPathForCanonical(canonical, loc)
      const url = path === "/" ? BASE_URL : `${BASE_URL}${path}`
      localizedExtra.push({
        url,
        lastModified: lastMod,
        changeFrequency,
        priority,
      })
    }
  }

  const enOnly: MetadataRoute.Sitemap = EN_ONLY_CANONICAL.map((canonical) => ({
    url: `${BASE_URL}/en${canonical}`,
    lastModified: DATE_CONTENT,
    changeFrequency: "weekly",
    priority: 0.82,
  }))

  const enPriorityLandings: MetadataRoute.Sitemap = EN_PRIORITY_LANDINGS.map(
    ({ canonical, priority }) => ({
      url: `${BASE_URL}/en${canonical}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority,
    })
  )

  const nordicPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/no/norway`,
      lastModified: DATE_NEW_PAGES,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/sv/sweden`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ]

  return [...pages, ...localizedExtra, ...enOnly, ...enPriorityLandings, ...nordicPages, ...apartmentPages, ...blogIndex, ...blogArticles]
}
