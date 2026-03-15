import { MetadataRoute } from "next"
import { BASE_URL } from "@/lib/metadata"

export default function robots(): MetadataRoute.Robots {
  // Pagine interne/tool — NON indicizzare
  const internalDisallow = [
    "/api/",
    "/admin/",
    "/_next/",
    "/utm/",
    "/verifica-analytics/",
    "/preview-mappa/",
  ]

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: internalDisallow,
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: internalDisallow,
      },
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
