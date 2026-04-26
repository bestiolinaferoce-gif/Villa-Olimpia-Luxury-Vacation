import type { Metadata } from "next"
import { apartments, getApartmentSlug } from "@/data/apartments"
import {
  localeHasRoute,
  normalizeCanonicalPath,
  SUPPORTED_LOCALES,
  type SupportedLocale,
} from "@/lib/i18n-config"
import { getLocalizedPathForCanonical } from "@/lib/i18n-routing"

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

const OPEN_GRAPH_LOCALE_BY_LOCALE: Record<SupportedLocale, string> = {
  it: "it_IT",
  en: "en_GB",
  de: "de_DE",
  fr: "fr_FR",
  nl: "nl_NL",
  no: "nb_NO",
}

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

  const lodgeMeta: Record<string, { titleQualifier: string; descUsp: string }> = {
    Frangipane: {
      titleQualifier: "Famiglia 6 Posti",
      descUsp: "2 camere matrimoniali e veranda privata, ideale per famiglie e gruppi fino a 6 ospiti",
    },
    Fiordaliso: {
      titleQualifier: "Balcone Vista Piscina",
      descUsp: "Balcone vista piscina e accesso comodo a tutti i servizi della struttura",
    },
    Orchidea: {
      titleQualifier: "con 2 Bagni",
      descUsp: "Unico nella zona: camera matrimoniale con 2 bagni completi e terrazza panoramica vista mare",
    },
    Tulipano: {
      titleQualifier: "Patio e Giardino",
      descUsp: "Accesso diretto al giardino e patio privato, posizione perfetta vicino alla piscina",
    },
    Giglio: {
      titleQualifier: "Famiglia 6 Posti",
      descUsp: "Due camere e gazebo esterno, soluzione comoda per famiglie e gruppi fino a 6 ospiti",
    },
    Lavanda: {
      titleQualifier: "Veranda Privata",
      descUsp: "Veranda e portico privati in posizione tranquilla, ideale per coppie e piccole famiglie",
    },
    Geranio: {
      titleQualifier: "Premium 6 Posti",
      descUsp: "2 camere matrimoniali, 2 bagni e 2 balconi semipanoramici. Il lodge più grande e completo",
    },
    Gardenia: {
      titleQualifier: "2 Balconi Vista Mare",
      descUsp: "2 balconi con vista sul Mar Ionio e ambienti luminosi al primo piano",
    },
    Azalea: {
      titleQualifier: "Terrazza Vista Mare",
      descUsp: "Terrazza panoramica con vista mare spettacolare e design moderno",
    },
  }

  const meta = lodgeMeta[apartment.name] ?? {
    titleQualifier: `${apartment.guests} Posti`,
    descUsp: `Appartamento di ${apartment.size} per ${apartment.guests} ospiti`,
  }

  const seoTitle = `Lodge ${apartment.name} | Appartamento ${meta.titleQualifier} Capo Rizzuto Piscina`
  const seoDescription = `${meta.descUsp}. Lodge privato a Villa Olimpia, 70m dalla Spiaggia dei Gigli. Prenota direttamente.`

  const keywords = [
    `appartamento ${getApartmentSlug(apartment)} villa olimpia`,
    `appartamento ${getApartmentSlug(apartment)} capopiccolo`,
    `appartamento ${getApartmentSlug(apartment)} capo rizzuto`,
    `${getApartmentSlug(apartment)} capo rizzuto piscina`,
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
    path: `/appartamenti/${getApartmentSlug(apartment)}`,
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
  metadataBase: new URL("https://villaolimpiacaporizzuto.com"),
    title: {
      default: `${siteName} Capo Rizzuto | Appartamenti con Piscina al Mare`,
      template: `%s`,
    },
  description: "Lodge privati con piscina a Capo Piccolo, a 70m dalla Spiaggia dei Gigli. 9 appartamenti nell'Area Marina Protetta di Capo Rizzuto. Prenota ora.",
  keywords: [
    // Core estate 2026
    "appartamenti capo rizzuto estate 2026",
    "appartamenti capo rizzuto agosto 2026",
    "vacanze calabria estate 2026",
    "affitto appartamento luglio 2026 calabria",
    "villa olimpia capo rizzuto 2026",
    // Prodotto
    "appartamenti vacanze Calabria piscina",
    "villa piscina Capo Rizzuto",
    "appartamento piscina privata capo rizzuto",
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
    // Brand
    "villa olimpia",
    "villa olimpia capo rizzuto",
    // Prenotazione diretta
    "prenotazione diretta appartamento calabria",
    "appartamento calabria senza intermediari",
    "affitto vacanze calabria",
    "capopiccolo apartments",
    // Long tail
    "appartamento con piscina spiaggia capo rizzuto",
    "villa vacanze calabria mare piscina famiglia",
    "appartamento capopiccolo capo rizzuto prenotazione",
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
    title: `${siteName} Capo Rizzuto | Appartamenti con Piscina al Mare`,
    description: "Lodge privati con piscina a Capo Piccolo, a 70m dalla Spiaggia dei Gigli. 9 appartamenti nell'Area Marina Protetta di Capo Rizzuto. Prenota ora.",
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
    title: `${siteName} Capo Rizzuto | Appartamenti con Piscina al Mare`,
    description: "Lodge privati con piscina a Capo Piccolo, a 70m dalla Spiaggia dei Gigli. 9 appartamenti nell'Area Marina Protetta di Capo Rizzuto. Prenota ora.",
    images: [`${baseUrl}/og-image.jpg`],
  },
  alternates: {
    canonical: baseUrl,
    languages: buildHreflangLanguages("/"),
  },
  other: { ...ogImageDimensions },
}

/** Hreflang alternates only for locale/route pairs that exist (no fake URLs). */
export function buildHreflangLanguages(canonicalPath: string): Record<string, string> {
  const p = normalizeCanonicalPath(canonicalPath)
  const languages: Record<string, string> = {}
  for (const loc of SUPPORTED_LOCALES) {
    if (!localeHasRoute(loc, p)) continue
    const path = getLocalizedPathForCanonical(p, loc)
    languages[loc] = path === "/" ? baseUrl : `${baseUrl}${path}`
  }
  languages["x-default"] = p === "/" ? baseUrl : `${baseUrl}${p}`
  return languages
}

export function buildLocalizedPageMetadata({
  locale,
  title,
  description,
  path,
  image = "/og-image.jpg",
  type = "website",
  keywords,
  languages,
}: {
  locale: SupportedLocale
  title: string
  description: string
  path: string
  image?: string
  type?: "website" | "article"
  keywords?: string[]
  languages?: Record<string, string>
}): Metadata {
  const base = generateMetadata({
    title,
    description,
    path,
    image,
    type,
    keywords,
  })

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      locale: OPEN_GRAPH_LOCALE_BY_LOCALE[locale],
    },
    twitter: {
      ...base.twitter,
    },
    alternates: {
      ...base.alternates,
      ...(languages ? { languages } : {}),
    },
  }
}

export function buildContactMetadata(locale?: string, pathForCanonical = "/contatti"): Metadata {
  const lang = locale ?? "it"
  const titles: Record<string, string> = {
    it: "Contatti e Prenotazioni | Villa Olimpia Capo Rizzuto",
    en: "Contact & Bookings | Villa Olimpia Capo Rizzuto",
    de: "Kontakt & Buchungen | Villa Olimpia Capo Rizzuto",
    fr: "Contact et Réservations | Villa Olimpia Capo Rizzuto",
    nl: "Contact & Boekingen | Villa Olimpia Capo Rizzuto",
  }
  const descriptions: Record<string, string> = {
    it: "Richiedi disponibilità o un preventivo per i tuoi soggiorni a Villa Olimpia, Capo Rizzuto. Risposta entro 24 ore. Prenotazione diretta senza commissioni.",
    en: "Request availability or a quote for your stay at Villa Olimpia, Capo Rizzuto. Reply within 24 hours. Direct booking with no fees.",
    de: "Verfügbarkeit oder Angebot für Ihren Aufenthalt in Villa Olimpia, Capo Rizzuto anfragen. Antwort innerhalb von 24 Stunden.",
    fr: "Demandez disponibilité ou devis pour votre séjour à Villa Olimpia, Capo Rizzuto. Réponse sous 24h. Réservation directe sans frais.",
    nl: "Vraag beschikbaarheid of een offerte aan voor uw verblijf in Villa Olimpia, Capo Rizzuto. Antwoord binnen 24 uur. Direct boeken zonder commissie.",
  }
  const title = titles[lang] ?? titles["it"]
  const description = descriptions[lang] ?? descriptions["it"]
  const base = generateMetadata({ title, description, path: pathForCanonical })
  return {
    ...base,
    alternates: {
      ...base.alternates,
      languages: buildHreflangLanguages("/contatti"),
    },
  }
}

export function buildApartmentsListingMetadata(
  locale: SupportedLocale,
  pathForCanonical: string
): Metadata {
  const isEn = locale === "en"
  const title = isEn
    ? "Apartments in Capo Rizzuto with Pool | Villa Olimpia Capopiccolo"
    : "Appartamenti a Capo Rizzuto con Piscina | Villa Olimpia Capopiccolo"
  const description = isEn
    ? "Discover Villa Olimpia apartments in Capopiccolo, Capo Rizzuto: options for couples, families and small groups with pool, garden and Spiaggia dei Gigli a short walk away."
    : "Scopri gli appartamenti di Villa Olimpia a Capopiccolo, Capo Rizzuto: soluzioni per coppie, famiglie e piccoli gruppi con piscina, giardino e Spiaggia dei Gigli a pochi passi."
  const base = generateMetadata({
    title,
    description,
    path: pathForCanonical,
    keywords: isEn
      ? [
          "Villa Olimpia apartments",
          "Capo Rizzuto holiday rentals pool",
          "Capopiccolo apartments Italy",
        ]
      : [
          "appartamenti Villa Olimpia",
          "appartamenti Capo Rizzuto piscina",
          "case vacanze Spiaggia dei Gigli",
          "appartamenti Capopiccolo Isola di Capo Rizzuto",
          "alloggi famiglia Calabria mare",
        ],
  })
  return {
    ...base,
    alternates: {
      ...base.alternates,
      languages: buildHreflangLanguages("/appartamenti"),
    },
  }
}
