// SEO avanzato per motori di ricerca e agenzie di viaggio
// Integrazione con Google, Bing, Yandex, DuckDuckGo e aggregatori turistici

export const SEO_CONFIG = {
  // Base URL
  baseUrl: "https://villaolimpiacaporizzuto.com",
  
  // Sitemap avanzata con hreflang
  hreflang: {
    it: "https://villaolimpiacaporizzuto.com/it",
    en: "https://villaolimpiacaporizzuto.com/en",
    de: "https://villaolimpiacaporizzuto.com/de",
    nl: "https://villaolimpiacaporizzuto.com/nl",
    es: "https://villaolimpiacaporizzuto.com/es",
    fr: "https://villaolimpiacaporizzuto.com/fr",
  },

  // Structured Data avanzato
  structuredData: {
    // LodgingBusiness (già presente, migliorato)
    lodgingBusiness: {
      "@context": "https://schema.org",
      "@type": "LodgingBusiness",
      "@id": "https://villaolimpiacaporizzuto.com/#lodging",
      name: "Villa Olimpia",
      description: "9 appartamenti di lusso con piscina privata a Capo Rizzuto, Calabria",
      url: "https://villaolimpiacaporizzuto.com",
      telephone: "+393335773390",
      email: "villaolimpiacaporizzuto@gmail.com",
      priceRange: "€€",
      starRating: {
        "@type": "Rating",
        ratingValue: "4.9",
        bestRating: "5"
      },
      numberOfRooms: 9,
      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: "Swimming Pool",
          value: true
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Free WiFi",
          value: true
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Parking",
          value: true
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Air Conditioning",
          value: true
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Sea View",
          value: true
        }
      ],
      checkInTime: "15:00",
      checkOutTime: "10:00",
      petsAllowed: false,
      smokingAllowed: false,
    },

    // LocalBusiness
    localBusiness: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://villaolimpiacaporizzuto.com/#localbusiness",
      name: "Villa Olimpia",
      image: "https://villaolimpiacaporizzuto.com/og-image.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Località Capopiccolo snc",
        addressLocality: "Isola di Capo Rizzuto",
        addressRegion: "Calabria",
        postalCode: "88841",
        addressCountry: "IT",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 38.913856,
        longitude: 17.0754964,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59"
      },
    },

    // TouristAttraction (per motori ricerca turistici)
    touristAttraction: {
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      name: "Villa Olimpia - Capo Rizzuto",
      description: "Luxury vacation rentals in Marine Protected Area Capo Rizzuto",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Isola di Capo Rizzuto",
        addressRegion: "Calabria",
        addressCountry: "IT",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 38.913856,
        longitude: 17.0754964,
      },
      touristType: ["Family", "Couple", "Group"],
      availableLanguage: ["Italian", "English", "German", "Dutch", "Spanish", "French"],
    },
  },

  // Keywords per mercati target
  keywords: {
    it: [
      "appartamenti vacanze calabria",
      "villa piscina capo rizzuto",
      "affitto casa mare calabria",
      "appartamento piscina privata",
      "isola capo rizzuto alloggio",
      "spiaggia dei gigli appartamenti",
      "vacanze calabria piscina",
      "affitto settimanale capo rizzuto",
    ],
    en: [
      "calabria vacation rentals",
      "luxury apartments calabria",
      "sea view apartments italy",
      "pool apartments capo rizzuto",
      "calabria holiday rentals",
      "italy vacation apartments",
      "tropea area rentals",
      "calabria luxury villa",
    ],
    de: [
      "kalabrien ferienwohnungen",
      "luxus apartements kalabrien",
      "meerblick wohnungen italien",
      "pool apartements capo rizzuto",
      "kalabrien urlaub mieten",
      "italien ferienwohnungen",
      "tropea gebiet mieten",
      "kalabrien luxus villa",
    ],
    nl: [
      "calabrië vakantiehuizen",
      "luxe appartementen calabrië",
      "appartementen met uitzicht op zee italië",
      "zwembad appartementen capo rizzuto",
      "calabrië vakantieverhuur",
      "italië vakantie appartementen",
      "tropea gebied verhuur",
      "calabrië luxe villa",
    ],
    es: [
      "alquileres vacacionales calabria",
      "apartamentos de lujo calabria",
      "apartamentos con vista al mar italia",
      "apartamentos con piscina capo rizzuto",
      "alquileres vacacionales calabria",
      "apartamentos vacacionales italia",
      "alquileres zona tropea",
      "villa de lujo calabria",
    ],
    fr: [
      "locations de vacances calabre",
      "appartements de luxe calabre",
      "appartements vue mer italie",
      "appartements piscine capo rizzuto",
      "locations vacances calabre",
      "appartements vacances italie",
      "locations zone tropea",
      "villa de luxe calabre",
    ],
  },

  // Meta descriptions per mercati
  metaDescriptions: {
    it: "9 appartamenti di lusso con piscina privata a Capo Rizzuto, Calabria. A meno di 100 metri dalla Spiaggia dei Gigli. WiFi gratuito, parcheggio, vista mare mozzafiato.",
    en: "9 luxury apartments with private pool in Capo Rizzuto, Calabria. Less than 100 meters from Spiaggia dei Gigli. Free WiFi, parking, breathtaking sea view.",
    de: "9 Luxus-Appartements mit privatem Pool in Capo Rizzuto, Kalabrien. Weniger als 100 Meter vom Spiaggia dei Gigli entfernt. Kostenloses WLAN, Parkplatz, atemberaubender Meerblick.",
    nl: "9 luxe appartementen met privézwembad in Capo Rizzuto, Calabrië. Minder dan 100 meter van Spiaggia dei Gigli. Gratis WiFi, parkeren, adembenemend uitzicht op zee.",
    es: "9 apartamentos de lujo con piscina privada en Capo Rizzuto, Calabria. A menos de 100 metros de Spiaggia dei Gigli. WiFi gratis, aparcamiento, vista al mar impresionante.",
    fr: "9 appartements de luxe avec piscine privée à Capo Rizzuto, Calabre. À moins de 100 mètres de Spiaggia dei Gigli. WiFi gratuit, parking, vue imprenable sur la mer.",
  },
}

// Funzione per generare hreflang tags (restituisce array di oggetti per uso in React)
export function generateHreflangTags() {
  return Object.entries(SEO_CONFIG.hreflang).map(([lang, url]) => ({
    rel: "alternate",
    hrefLang: lang,
    href: url,
  }))
}

// Funzione per generare structured data JSON-LD
export function generateStructuredData(type: keyof typeof SEO_CONFIG.structuredData) {
  return JSON.stringify(SEO_CONFIG.structuredData[type])
}

