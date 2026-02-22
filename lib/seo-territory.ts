/**
 * SEO e Meta Tags Ottimizzati per Territorio e Destinazioni
 * Compatibile con algoritmi Airbnb, Facebook/Meta, Google
 */

export const TERRITORY_SEO = {
  // Meta tags per homepage con focus territorio
  homepage: {
    title: "Villa Olimpia Capo Rizzuto | Vacanze in Calabria con Spiagge Bandiera Blu e Siti UNESCO",
    description: "Villa Olimpia a Capo Rizzuto: 9 appartamenti di lusso con piscina privata. Vicino a Spiaggia dei Gigli Bandiera Blu, Area Marina Protetta, Valli Cupe e Le Castella. Prenota la tua vacanza in Calabria.",
    keywords: [
      "villa olimpia capo rizzuto",
      "appartamenti vacanze calabria",
      "spiaggia dei gigli bandiera blu",
      "area marina protetta capo rizzuto",
      "valli cupe calabria",
      "le castella calabria",
      "spiagge rosse bandiera blu",
      "vacanze calabria piscina",
      "affitto appartamento capo rizzuto",
      "calabria spiagge bandiera blu",
      "capopiccolo appartamenti",
      "isola capo rizzuto vacanze",
      "calabria patrimonio unesco",
      "costa degli achei",
      "villa con piscina capo rizzuto"
    ],
    openGraph: {
      title: "Villa Olimpia | Vacanze Premium in Calabria con Spiagge Bandiera Blu",
      description: "9 appartamenti di lusso con piscina privata a Capo Rizzuto. Spiaggia dei Gigli Bandiera Blu, Area Marina Protetta, Valli Cupe e siti UNESCO nelle vicinanze.",
      images: [
        {
          url: "https://villaolimpiacaporizzuto.com/images/villa/location/spiaggia-dei-gigli.jpg",
          width: 1200,
          height: 630,
          alt: "Spiaggia dei Gigli Bandiera Blu - Villa Olimpia Capo Rizzuto"
        }
      ],
      locale: "it_IT",
      siteName: "Villa Olimpia",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: "Villa Olimpia | Vacanze Premium in Calabria",
      description: "9 appartamenti di lusso con piscina. Spiaggia Bandiera Blu, Area Marina Protetta, Valli Cupe e siti UNESCO.",
      images: ["https://villaolimpiacaporizzuto.com/images/villa/location/spiaggia-dei-gigli.jpg"]
    }
  },

  // Schema.org per destinazioni turistiche
  touristDestinations: {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Capo Rizzuto e Costa degli Achei",
    "description": "Area turistica della Calabria con spiagge Bandiera Blu, Area Marina Protetta, siti storici e naturalistici",
    "containedIn": {
      "@type": "Country",
      "name": "Italia"
    },
    "touristType": [
      "Famiglie",
      "Coppie",
      "Escursionisti",
      "Amanti del mare",
      "Appassionati di storia"
    ],
    "attraction": [
      {
        "@type": "Beach",
        "name": "Spiaggia dei Gigli",
        "description": "Spiaggia Bandiera Blu a 100 metri da Villa Olimpia",
        "beachType": "Sandy",
        "award": "Bandiera Blu 2024"
      },
      {
        "@type": "TouristAttraction",
        "name": "Area Marina Protetta Capo Rizzuto",
        "description": "Una delle più belle aree marine protette d'Italia"
      },
      {
        "@type": "TouristAttraction",
        "name": "Le Castella",
        "description": "Castello aragonese patrimonio storico della Calabria"
      },
      {
        "@type": "TouristAttraction",
        "name": "Valli Cupe",
        "description": "Riserva naturale con cascate e gole profonde"
      }
    ]
  },

  // Meta tags specifici per Airbnb
  airbnb: {
    // Tag HTML per Airbnb (da inserire in head)
    metaTags: [
      { property: "og:type", content: "lodging" },
      { property: "business:contact_data:locality", content: "Isola di Capo Rizzuto" },
      { property: "business:contact_data:region", content: "Calabria" },
      { property: "business:contact_data:country_name", content: "Italia" },
      { property: "place:location:latitude", content: "38.913856" },
      { property: "place:location:longitude", content: "17.0754964" },
      { name: "rating", content: "4.9" },
      { name: "reviewCount", content: "62" }
    ],
    // Keywords per listing Airbnb
    keywords: [
      "villa olimpia",
      "capo rizzuto",
      "spiaggia bandiera blu",
      "area marina protetta",
      "calabria",
      "piscina privata",
      "appartamenti vacanze",
      "valli cupe",
      "le castella",
      "costa degli achei"
    ]
  },

  // Meta tags per Facebook/Meta
  facebook: {
    ogTags: {
      "og:type": "website",
      "og:url": "https://villaolimpiacaporizzuto.com",
      "og:title": "Villa Olimpia | Vacanze Premium in Calabria",
      "og:description": "9 appartamenti di lusso con piscina privata. Spiaggia Bandiera Blu, Area Marina Protetta, siti UNESCO. Capo Rizzuto, Calabria.",
      "og:image": "https://villaolimpiacaporizzuto.com/images/villa/location/spiaggia-dei-gigli.jpg",
      "og:image:width": "1200",
      "og:image:height": "630",
      "og:image:alt": "Spiaggia dei Gigli Bandiera Blu - Villa Olimpia Capo Rizzuto",
      "og:locale": "it_IT",
      "og:site_name": "Villa Olimpia",
      "business:contact_data:street_address": "Località Capopiccolo snc",
      "business:contact_data:locality": "Isola di Capo Rizzuto",
      "business:contact_data:region": "Calabria",
      "business:contact_data:postal_code": "88841",
      "business:contact_data:country_name": "Italia",
      "place:location:latitude": "38.913856",
      "place:location:longitude": "17.0754964"
    }
  },

  // Schema.org LodgingBusiness ottimizzato
  lodgingBusiness: {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Villa Olimpia",
    "description": "9 appartamenti di lusso con piscina privata a Capo Rizzuto, Calabria. Vicino a Spiaggia dei Gigli Bandiera Blu, Area Marina Protetta, Valli Cupe e siti UNESCO.",
    "url": "https://villaolimpiacaporizzuto.com",
    "telephone": "+393335773390",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Località Capopiccolo snc",
      "addressLocality": "Isola di Capo Rizzuto",
      "addressRegion": "Calabria",
      "postalCode": "88841",
      "addressCountry": "IT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.913856,
      "longitude": 17.0754964
    },
    "priceRange": "€€",
    "image": [
      "https://villaolimpiacaporizzuto.com/images/villa/hero/facciata-esterna-villa-olimpia-notte.jpg",
      "https://villaolimpiacaporizzuto.com/images/villa/location/spiaggia-dei-gigli.jpg"
    ],
    "numberOfRooms": 9,
    "starRating": {
      "@type": "Rating",
      "ratingValue": "4.9",
      "bestRating": "5"
    },
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Piscina privata", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Parcheggio gratuito", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Wi-Fi gratuito", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Aria condizionata", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Cucina attrezzata", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Vista mare", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Terrazza privata", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Spiaggia Bandiera Blu a 100m", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Area Marina Protetta nelle vicinanze", "value": true }
    ],
    "checkInTime": "15:00",
    "checkOutTime": "10:00",
    "petsAllowed": false,
    "nearbyAttraction": [
      {
        "@type": "TouristAttraction",
        "name": "Spiaggia dei Gigli",
        "description": "Spiaggia Bandiera Blu",
        "distance": "100 metri"
      },
      {
        "@type": "TouristAttraction",
        "name": "Area Marina Protetta Capo Rizzuto",
        "description": "Riserva marina protetta",
        "distance": "2 km"
      },
      {
        "@type": "TouristAttraction",
        "name": "Le Castella",
        "description": "Castello aragonese",
        "distance": "8 km"
      },
      {
        "@type": "TouristAttraction",
        "name": "Valli Cupe",
        "description": "Riserva naturale",
        "distance": "65 km"
      }
    ]
  }
}

// Funzione helper per generare meta tags
export function generateTerritoryMetaTags() {
  return {
    title: TERRITORY_SEO.homepage.title,
    description: TERRITORY_SEO.homepage.description,
    keywords: TERRITORY_SEO.homepage.keywords.join(", "),
    openGraph: TERRITORY_SEO.homepage.openGraph,
    twitter: TERRITORY_SEO.homepage.twitter
  }
}












