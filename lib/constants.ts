// Constants for Villa Olimpia

export const SITE_CONFIG = {
  name: "Villa Olimpia",
  description: "Luxury Vacation Rentals in Calabria, Italy",
  url: "https://villaolimpiacaporizzuto.com",
  phone: "+393335773390",
  email: "villaolimpiacaporizzuto@gmail.com",
  address: {
    street: "Località Capopiccolo snc",
    city: "Isola di Capo Rizzuto",
    region: "Calabria",
    postalCode: "88841",
    country: "Italia",
  },
  coordinates: {
    lat: 38.913856,
    lng: 17.0754964,
  },
  social: {
    facebook: "https://www.facebook.com/villaolimpiacaporizzuto",
    instagram: "https://www.instagram.com/villaolimpiacaporizzuto",
    whatsapp: "https://wa.me/393335773390",
    googleReviews: "https://www.google.com/search?q=Villa+Olimpia+Capo+Rizzuto+recensioni",
  },
  /** Numero principale per CTA WhatsApp (senza +) */
  whatsappPrimary: "393335773390",
  /** Numero secondario (senza +) */
  whatsappSecondary: "393335773390",
  businessHours: {
    weekdays: "9:00 - 20:00",
    saturday: "9:00 - 18:00",
    sunday: "10:00 - 16:00",
  },
} as const

export const SEO_KEYWORDS = [
  "villa calabria",
  "vacation rental capo rizzuto",
  "luxury apartments calabria",
  "italy vacation rental",
  "calabria luxury villa",
  "capopiccolo apartments",
  "calabria beach rental",
  "costa degli dei",
  "capo rizzuto luxury accommodation",
  "calabria holiday rental",
] as const
