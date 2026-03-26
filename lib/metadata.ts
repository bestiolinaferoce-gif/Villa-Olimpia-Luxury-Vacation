import type { Metadata } from "next"
import { apartments } from "@/data/apartments"

export const BASE_URL = "https://villaolimpiacaporizzuto.com"
const baseUrl = BASE_URL
const siteName = "Villa Olimpia"
const openGraphSiteName = "Villa Olimpia Capo Rizzuto"

const OG_IMAGE_W = 1200
const OG_IMAGE_H = 630

const ogImageDimensions = {
  "og:image:width": String(OG_IMAGE_W),
  "og:image:height": String(OG_IMAGE_H),
} as const

export function generateMetadata({
  title,
  description,
  path = "",
  image = "/og-image.jpg",
  type = "website",
  keywords,
}: {
  title: string
  description: string
  path?: string
  image?: string
  type?: "website" | "article"
  keywords?: string[]
}): Metadata {
  const url = `${baseUrl}${path}`
  const imageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`
  const usesDefaultOgImage =
    image === "/og-image.jpg" || imageUrl === `${baseUrl}/og-image.jpg`
  const titleIncludesSiteName = title.toLowerCase().includes(siteName.toLowerCase())
  const normalizedTitle = title.trim()
  const resolvedTitle = titleIncludesSiteName ? normalizedTitle : `${normalizedTitle} | ${siteName}`
  const optimizedDescription = description.trim()

  return {
    title: resolvedTitle,
    description: optimizedDescription,
    keywords,
    openGraph: {
      title: resolvedTitle,
      description: optimizedDescription,
      url,
      siteName: openGraphSiteName,
      images: [
        {
          url: imageUrl,
          ...(usesDefaultOgImage
            ? { width: OG_IMAGE_W, height: OG_IMAGE_H }
            : {}),
          alt: title,
        },
      ],
      locale: "it_IT",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: optimizedDescription,
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
    },
    ...(usesDefaultOgImage ? { other: { ...ogImageDimensions } } : {}),
  }
}

export function getApartmentMetadata(apartmentId: number): Metadata {
  const apartment = apartments.find((apt) => apt.id === apartmentId)

  if (!apartment) {
    return generateMetadata({
      title: "Appartamento Non Trovato",
      description: "L'appartamento richiesto non è disponibile.",
      path: "/appartamenti",
    })
  }

  const bagnoLabel = apartment.bathrooms === 1 ? "bagno" : "bagni"
  const cameraLabel = apartment.bedrooms === 1 ? "camera" : "camere"

  const seoTitle = `Appartamento ${apartment.name} a Capo Rizzuto con Piscina | Villa Olimpia`
  const seoDescription = `Scopri ${apartment.name} a Villa Olimpia, Capopiccolo: appartamento al ${apartment.floor.toLowerCase()} di ${apartment.size} per ${apartment.guests} ospiti, con ${apartment.bedrooms} ${cameraLabel} e ${apartment.bathrooms} ${bagnoLabel}. Vicino alla Spiaggia dei Gigli e all'Area Marina Protetta di Capo Rizzuto.`

  const keywords = [
    `appartamento ${apartment.name.toLowerCase()} villa olimpia`,
    `appartamento ${apartment.name.toLowerCase()} capopiccolo`,
    `appartamento ${apartment.name.toLowerCase()} capo rizzuto`,
    `${apartment.name.toLowerCase()} capo rizzuto piscina`,
    `appartamento ${apartment.floor.toLowerCase()} capo rizzuto`,
    `appartamento ${apartment.guests} ospiti capopiccolo`,
    `prenotazione diretta villa olimpia`,
    `appartamento vista mare capo rizzuto`,
    `spiaggia dei gigli appartamento`,
    `area marina protetta capo rizzuto alloggio`,
    `vacanza capo rizzuto vicino mare`
  ]

  const baseMeta = generateMetadata({
    title: seoTitle,
    description: seoDescription,
    path: `/appartamenti/${apartment.name.toLowerCase()}`,
    image: apartment.image.startsWith("/") ? apartment.image : undefined,
    type: "article",
  })

  const ogFromBase =
    baseMeta.other &&
    typeof baseMeta.other === "object" &&
    "og:image:width" in baseMeta.other &&
    "og:image:height" in baseMeta.other
      ? {
          "og:image:width": String(
            (baseMeta.other as Record<string, string>)["og:image:width"],
          ),
          "og:image:height": String(
            (baseMeta.other as Record<string, string>)["og:image:height"],
          ),
        }
      : {}

  return {
    ...baseMeta,
    keywords,
    other: Object.assign(
      {
        "booking:property_type": "Apartment",
        "booking:capacity": apartment.guests.toString(),
        "booking:bedrooms": apartment.bedrooms.toString(),
        "booking:bathrooms": apartment.bathrooms.toString(),
        "booking:size": apartment.size,
        "booking:floor": String(apartment.floor),
        "booking:price": apartment.price?.toString() || "120",
        "booking:currency": "EUR",
        "booking:location": "Capopiccolo, Isola di Capo Rizzuto, Calabria, Italy",
        "og:type": "product",
        "product:price:amount": apartment.price?.toString() || "120",
        "product:price:currency": "EUR",
      },
      ogFromBase,
    ) as Metadata["other"],
  }
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
    title: {
      default: `${siteName} | Appartamenti con Piscina Capo Rizzuto — Giugno e Luglio 2026`,
      template: `%s`,
    },
  description: "Villa Olimpia: 9 appartamenti con piscina privata a Capo Rizzuto, Calabria. Disponibilità Giugno e Luglio 2026 a tariffe vantaggiose. A 100m dalla Spiaggia dei Gigli, Area Marina Protetta. Prenota direttamente senza commissioni.",
  keywords: [
    // June/July primary intent
    "vacanze giugno calabria piscina",
    "affitto giugno capo rizzuto",
    "vacanze luglio calabria mare",
    "appartamento luglio capo rizzuto piscina",
    "offerta giugno villa piscina calabria",
    // Core
    "appartamenti vacanze Calabria piscina",
    "villa piscina Capo Rizzuto",
    "affitto casa mare Calabria",
    "appartamento piscina privata",
    "Isola Capo Rizzuto appartamenti",
    "Spiaggia dei Gigli alloggio",
    "vacanze Calabria piscina",
    "affitto settimanale Capo Rizzuto",
    "appartamento vacanze 100 metri dal mare Calabria",
    "villa con piscina privata Isola Capo Rizzuto",
    "affitto appartamento famiglia piscina Calabria",
    "dove dormire Capo Rizzuto vicino mare",
    "Capo Piccolo appartamenti",
    "Le Castella alloggio",
    "Riserva Marina Capo Rizzuto",
    "villa olimpia",
    "villa olimpia capo rizzuto",
    "affitto vacanze calabria",
    "calabria luxury villa",
    "capopiccolo apartments",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: baseUrl,
    siteName: openGraphSiteName,
    title: `${siteName} — Appartamenti con Piscina a Capo Rizzuto | Giugno e Luglio 2026`,
    description: "9 appartamenti con piscina privata a Capo Rizzuto. Tariffe vantaggiose Giugno e Luglio 2026. Spiaggia dei Gigli a 100m. Prenota direttamente senza commissioni.",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: OG_IMAGE_W,
        height: OG_IMAGE_H,
        alt: `${siteName} - Appartamenti con Piscina Capo Rizzuto Calabria`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Appartamenti con Piscina Capo Rizzuto | Giugno e Luglio 2026`,
    description: "9 appartamenti con piscina a Capo Rizzuto. Tariffe vantaggiose Giugno/Luglio 2026. Prenota ora!",
    images: [`${baseUrl}/og-image.jpg`],
  },
  alternates: {
    canonical: baseUrl,
  },
  other: { ...ogImageDimensions },
}
