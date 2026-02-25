import type { Metadata } from "next"
import { apartments } from "@/data/apartments"

const baseUrl = "https://villaolimpiacaporizzuto.com"
const siteName = "Villa Olimpia"

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

  // Ensure description is 155-160 characters for optimal SEO
  const optimizedDescription = description.length > 160
    ? description.substring(0, 157) + "..."
    : description

  return {
    title: title.length > 60 ? title.substring(0, 57) + "..." : `${title} | ${siteName}`,
    description: optimizedDescription,
    keywords,
    openGraph: {
      title: `${title} | ${siteName}`,
      description: optimizedDescription,
      url,
      siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "it_IT",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description: optimizedDescription,
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
    },
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

  // SEO ottimizzato per prenotazione diretta — nessun riferimento a OTA
  const seoTitle = `${apartment.name} — Villa Olimpia Capo Rizzuto | ${apartment.guests} ospiti | Piscina`
  const seoDescription = `Appartamento ${apartment.name} a Villa Olimpia: ${apartment.floor}, ${apartment.size}, ${apartment.guests} ospiti. ${apartment.bedrooms} camere, ${apartment.bathrooms} bagni. ${apartment.features.slice(0, 2).join(', ')}. 100m dalla Spiaggia dei Gigli. Prenota direttamente — tariffe migliori garantite.`

  const keywords = [
    `appartamento ${apartment.name.toLowerCase()} villa olimpia`,
    `affitto ${apartment.name.toLowerCase()} capopiccolo`,
    `${apartment.name.toLowerCase()} capo rizzuto piscina`,
    `appartamento ${apartment.floor.toLowerCase()} isola capo rizzuto`,
    `${apartment.guests} ospiti capopiccolo`,
    `prenotazione diretta villa olimpia`,
    `appartamento vista mare capo rizzuto`,
    `vacation rental ${apartment.size} capo rizzuto`,
    `luxury apartment ${apartment.name.toLowerCase()} calabria`,
    `affitto settimanale capo rizzuto mare`
  ]

  return {
    ...generateMetadata({
      title: seoTitle,
      description: seoDescription,
      path: `/appartamenti/apartment-${apartment.id}`,
      image: apartment.image.startsWith("/") ? apartment.image : undefined,
      type: "article",
    }),
    keywords,
    // Schema markup per OTA
    other: {
      'booking:property_type': 'Apartment',
      'booking:capacity': apartment.guests.toString(),
      'booking:bedrooms': apartment.bedrooms.toString(),
      'booking:bathrooms': apartment.bathrooms.toString(),
      'booking:size': apartment.size,
      'booking:floor': apartment.floor,
      'booking:price': apartment.price?.toString() || '120',
      'booking:currency': 'EUR',
      'booking:location': 'Capopiccolo, Isola di Capo Rizzuto, Calabria, Italy',
      'og:type': 'product',
      'product:price:amount': apartment.price?.toString() || '120',
      'product:price:currency': 'EUR',
    }
  }
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
    title: {
      default: `${siteName} | Appartamenti con Piscina Capo Rizzuto — Giugno e Luglio 2026`,
      template: `%s | ${siteName}`,
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
    siteName,
    title: `${siteName} — Appartamenti con Piscina a Capo Rizzuto | Giugno e Luglio 2026`,
    description: "9 appartamenti con piscina privata a Capo Rizzuto. Tariffe vantaggiose Giugno e Luglio 2026. Spiaggia dei Gigli a 100m. Prenota direttamente senza commissioni.",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
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
}
