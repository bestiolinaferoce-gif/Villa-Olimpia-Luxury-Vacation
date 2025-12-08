// Dati di posizione esatta per Villa Olimpia
// Villa Olimpia - Capo Rizzuto, Località Capopiccolo, Calabria

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
    // Coordinate GPS esatte da Google Maps
    latitude: 38.913856,
    longitude: 17.0754964,
    // Link Google Maps
    googleMaps: "https://www.google.com/maps/place/Villa+Olimpia/@38.9138601,17.0729161,17z",
    // Link per direzioni
    directions: "https://www.google.com/maps/dir/?api=1&destination=38.913856,17.0754964",
  },
  contact: {
    phone: "+39 329 047 9193",
    phone2: "+39 333 577 3390",
    email: "info@villaolimpia.it",
    whatsapp: "393290479193",
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
  description: "Villa Olimpia si trova nella splendida località di Capopiccolo, a Isola di Capo Rizzuto, nella splendida Spiaggia dei Gigli. La villa è composta da 9 appartamenti indipendenti, ciascuno con terrazza privata e accesso diretto alla piscina.",
} as const
