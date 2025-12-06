// Data for Villa Olimpia apartments

export interface Apartment {
  id: string
  name: string
  description: string
  fullDescription: string
  image: string
  images: string[]
  guests: number
  bedrooms: number
  bathrooms: number
  price: number
  size: string
  features: string[]
  amenities: string[]
  featured?: boolean
}

export const apartments: Apartment[] = [
  {
    id: "olimpia-1",
    name: "Appartamento Vista Mare",
    description: "Spazioso appartamento con vista panoramica sul mare e terrazza privata",
    fullDescription: "Questo elegante appartamento offre una vista mozzafiato sul mare Tirreno. Con design moderno e arredi di lusso, è perfetto per coppie o piccole famiglie. La terrazza privata è ideale per colazioni all'aperto e cene romantiche al tramonto.",
    image: "🏖️",
    images: ["🏖️", "🌊", "🌅", "🏡"],
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    price: 150,
    size: "65 m²",
    features: ["Vista mare", "Terrazza privata", "Aria condizionata", "WiFi"],
    amenities: ["Cucina attrezzata", "TV Smart", "Biancheria", "Prodotti bagno"],
    featured: true,
  },
  {
    id: "olimpia-2",
    name: "Suite Deluxe",
    description: "Lussuosa suite con design moderno e accesso diretto alla piscina",
    fullDescription: "La Suite Deluxe è un rifugio di lusso con accesso esclusivo alla piscina. Arredata con mobili di design italiano, offre massimo comfort e privacy. Perfetta per una fuga romantica o per chi cerca il massimo del relax.",
    image: "🏊",
    images: ["🏊", "🛏️", "🛁", "🌴"],
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    price: 200,
    size: "45 m²",
    features: ["Accesso piscina", "Design moderno", "Jacuzzi", "Minibar"],
    amenities: ["Room service", "TV 4K", "Biancheria premium", "Prodotti lusso"],
    featured: true,
  },
  {
    id: "olimpia-3",
    name: "Penthouse Panoramico",
    description: "Esclusivo penthouse con vista a 360° e terrazza attrezzata",
    fullDescription: "Il Penthouse Panoramico è la nostra unità più esclusiva. Situato all'ultimo piano, offre una vista a 360 gradi sulla costa calabrese. La terrazza di 50 m² è completamente attrezzata con zona pranzo, lounge e jacuzzi.",
    image: "🌅",
    images: ["🌅", "🏖️", "🍷", "🌟"],
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    price: 300,
    size: "120 m²",
    features: ["Vista 360°", "Terrazza 50m²", "Jacuzzi", "Cucina professionale"],
    amenities: ["Concierge", "Chef su richiesta", "Lavanderia", "Parcheggio privato"],
    featured: true,
  },
  {
    id: "olimpia-4",
    name: "Studio Comfort",
    description: "Accogliente studio perfetto per viaggiatori singoli o coppie",
    image: "🏠",
    images: ["🏠", "🛋️", "☕"],
    guests: 2,
    bedrooms: 0,
    bathrooms: 1,
    price: 100,
    size: "35 m²",
    features: ["Vista giardino", "Balcone", "WiFi veloce"],
    amenities: ["Cucina", "TV", "Biancheria"],
  },
  {
    id: "olimpia-5",
    name: "Appartamento Familiare",
    description: "Spazioso appartamento ideale per famiglie con bambini",
    image: "👨‍👩‍👧‍👦",
    images: ["👨‍👩‍👧‍👦", "🛏️", "🎮"],
    guests: 5,
    bedrooms: 2,
    bathrooms: 2,
    price: 180,
    size: "80 m²",
    features: ["Giardino privato", "Zona giochi", "Culla disponibile"],
    amenities: ["Cucina completa", "Lavastoviglie", "TV", "WiFi"],
  },
  {
    id: "olimpia-6",
    name: "Loft Moderno",
    description: "Stile contemporaneo in un open space luminoso",
    image: "🏙️",
    images: ["🏙️", "💡", "🎨"],
    guests: 3,
    bedrooms: 1,
    bathrooms: 1,
    price: 130,
    size: "55 m²",
    features: ["Open space", "Design moderno", "Vista mare"],
    amenities: ["Cucina", "TV Smart", "WiFi"],
  },
  {
    id: "olimpia-7",
    name: "Appartamento Giardino",
    description: "Tranquillità e privacy con giardino privato",
    image: "🌳",
    images: ["🌳", "🌸", "🪑"],
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    price: 160,
    size: "70 m²",
    features: ["Giardino privato", "Barbecue", "Parcheggio"],
    amenities: ["Cucina", "TV", "WiFi", "Biancheria"],
  },
  {
    id: "olimpia-8",
    name: "Suite Romantica",
    description: "Perfetta per una fuga romantica con vista sul tramonto",
    image: "💑",
    images: ["💑", "🕯️", "🍾"],
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    price: 170,
    size: "50 m²",
    features: ["Vista tramonto", "Balcone privato", "Jacuzzi"],
    amenities: ["Minibar", "TV", "WiFi", "Colazione inclusa"],
  },
  {
    id: "olimpia-9",
    name: "Appartamento Vista Collina",
    description: "Panorama sulle colline calabresi e il mare in lontananza",
    image: "⛰️",
    images: ["⛰️", "🌄", "🌿"],
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    price: 140,
    size: "60 m²",
    features: ["Vista collina", "Terrazza", "Tranquillità"],
    amenities: ["Cucina", "TV", "WiFi", "Biancheria"],
  },
]

export function getApartmentById(id: string): Apartment | undefined {
  return apartments.find((apt) => apt.id === id)
}

export function getFeaturedApartments(): Apartment[] {
  return apartments.filter((apt) => apt.featured)
}

