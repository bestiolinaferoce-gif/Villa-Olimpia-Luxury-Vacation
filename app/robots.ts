import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://villaolimpiacaporizzuto.com"

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
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
