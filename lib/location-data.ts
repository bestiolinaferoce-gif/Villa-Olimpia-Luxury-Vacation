// Dati canonici di posizione per Villa Olimpia - Capo Rizzuto, Località Capopiccolo.
// Usare questi valori per meta tag, schema.org e link Google: evita puntamenti divergenti.

export const VILLA_OLIMPIA_COORDINATES = {
  latitude: 38.913856,
  longitude: 17.0754964,
} as const

export const VILLA_OLIMPIA_GOOGLE_PLACE_QUERY =
  "Villa Olimpia Località Capopiccolo snc Isola di Capo Rizzuto KR"

export const VILLA_OLIMPIA_GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Villa%20Olimpia%20Localit%C3%A0%20Capopiccolo%20snc%20Isola%20di%20Capo%20Rizzuto%20KR"

export const VILLA_OLIMPIA_GOOGLE_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=38.913856,17.0754964&travelmode=driving"

export const VILLA_OLIMPIA_LOCATION = {
  // Posizione esatta - Capopiccolo, Isola di Capo Rizzuto, Calabria
  name: "Villa Olimpia",
  address: {
    street: "Località Capopiccolo",
    number: "snc",
    city: "Isola di Capo Rizzuto",
    province: "KR",
    postalCode: "88841",
    region: "Calabria",
    country: "Italia",
    fullAddress: "Località Capopiccolo snc, 88841 Isola di Capo Rizzuto (KR), Calabria, Italia",
  },
  coordinates: {
    latitude: VILLA_OLIMPIA_COORDINATES.latitude,
    longitude: VILLA_OLIMPIA_COORDINATES.longitude,
    googleMaps: VILLA_OLIMPIA_GOOGLE_MAPS_URL,
    directions: VILLA_OLIMPIA_GOOGLE_DIRECTIONS_URL,
  },
  contact: {
    phone: "+39 333 577 3390",
    phone2: "+39 329 047 9193",
    email: "villaolimpiacaporizzuto@gmail.com",
    whatsapp: "393335773390",
  },
  // Distanze da punti di interesse (aggiornate per Capo Rizzuto)
  distances: {
    spiaggia: "Meno di 100 metri (Spiaggia dei Gigli)",
    riservaMarina: "2 km (Riserva Marina Capo Rizzuto)",
    leCastella: "5 km",
    centroStorico: "Isola di Capo Rizzuto - 3 km",
    crotone: "15 km",
    aeroporto: "20 km (Aeroporto Crotone)",
    stazioneTreno: "Crotone - 15 km",
    porto: "Porto di Crotone - 15 km",
  },
  // Informazioni aggiuntive
  description: "Villa Olimpia si trova nella località di Capopiccolo, a Isola di Capo Rizzuto, vicino alla Spiaggia dei Gigli. La struttura è composta da 9 appartamenti indipendenti, ciascuno con terrazza privata e accesso alla piscina esterna condivisa.",
} as const
