import { MetadataRoute } from "next"
import { BASE_URL } from "@/lib/metadata"

export default function robots(): MetadataRoute.Robots {
  // Pagine interne/tool + route duplicate che NON devono essere indicizzate
  const internalDisallow = [
    "/api/",
    "/admin/",
    "/_next/",
    "/utm/",
    "/verifica-analytics/",
    "/preview-mappa/",
    // Route duplicate in inglese — servono redirect 301, non indicizzazione
    "/apartments/",
    "/rooms/",
    "/camere/",
    "/home/",
  ]

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: internalDisallow,
      },
      // Regola dedicata Googlebot (esplicita per GSC)
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: internalDisallow,
      },
      // Bingbot
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: internalDisallow,
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}
