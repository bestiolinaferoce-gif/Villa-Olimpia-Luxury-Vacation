// Dati reali dei 9 appartamenti di Villa Olimpia

export interface Apartment {
  id: number
  name: string
  floor: "Piano Terra" | "Primo Piano"
  position: string
  size: string
  guests: number
  bedrooms: number
  bathrooms: number
  features: string[]
  image: string
  images?: string[]
  premium?: boolean
  description?: string
  fullDescription?: string
  price?: number
}

export const apartments: Apartment[] = [
  // PIANO TERRA
  {
    id: 1,
    name: "Frangipane",
    floor: "Piano Terra",
    position: "Basso sinistra",
    size: "45 mq",
    guests: 4,
    bedrooms: 1,
    bathrooms: 1,
    features: ["Terrazza privata", "Vista giardino", "Cucina completa", "Aria condizionata", "WiFi"],
    // ✅ FOTO REALE: Tutte le foto disponibili di Frangipane
    image: "/images/villa/appartamenti/frangipane/main.jpg",
    images: [
      "/images/villa/appartamenti/frangipane/main.jpg",
      "/images/villa/appartamenti/frangipane/camera-matrimoniale-frangipane-1.jpg",
      "/images/villa/appartamenti/frangipane/cucina-appartamento-frangipane-1.jpg",
      "/images/villa/appartamenti/frangipane/cucina-appartamento-frangipane-3.jpg",
      "/images/villa/appartamenti/frangipane/bagno-frangipane.jpg",
      "/images/villa/appartamenti/frangipane/zona-living-appartamento-lavanda.jpg",
    ],
    description: "Accogliente appartamento al piano terra con terrazza privata e vista giardino",
    fullDescription: "L'appartamento Frangipane si trova al piano terra, in posizione bassa a sinistra. Offre una terrazza privata ideale per colazioni all'aperto e serate relax. La vista sul giardino e la posizione tranquilla lo rendono perfetto per chi cerca privacy e comfort.",
    price: 120,
  },
  {
    id: 2,
    name: "Fiordaliso",
    floor: "Piano Terra",
    position: "Sinistra",
    size: "50 mq",
    guests: 4,
    bedrooms: 1,
    bathrooms: 1,
    features: ["Balcone", "Vista piscina", "AC", "WiFi", "Cucina attrezzata"],
    // ✅ FOTO REALE: Living Room (placeholder da Azalea/Tulipano)
    image: "/images/villa/appartamenti/fiordaliso/main.jpg",
    images: [
      "/images/villa/appartamenti/fiordaliso/main.jpg",
      "/images/villa/appartamenti/fiordaliso/living-1.jpg",
      "/images/villa/appartamenti/fiordaliso/living-2.jpg",
    ],
    description: "Appartamento luminoso con balcone e vista sulla piscina",
    fullDescription: "Fiordaliso è un appartamento spazioso al piano terra, posizionato a sinistra. Il balcone offre una vista diretta sulla piscina, rendendo questo appartamento ideale per chi ama il relax acquatico. La posizione centrale permette facile accesso a tutti i servizi comuni.",
    price: 130,
  },
  {
    id: 3,
    name: "Orchidea",
    floor: "Piano Terra",
    position: "Alto destra",
    size: "48 mq",
    guests: 4,
    bedrooms: 1,
    bathrooms: 1,
    features: ["Terrazza panoramica", "Vista mare", "Zona living", "AC", "WiFi"],
    // ✅ FOTO REALE: Camera/Terrazza (placeholder da Gardenia/Azalea)
    image: "/images/villa/appartamenti/orchidea/main.jpg",
    images: [
      "/images/villa/appartamenti/orchidea/main.jpg",
      "/images/villa/appartamenti/orchidea/camera-matrimoniale-gardenia-1.jpg",
      "/images/villa/appartamenti/orchidea/terrazza-appartamento-azalea.jpg",
      "/images/villa/appartamenti/orchidea/terrazza-azalea-3.jpg",
    ],
    description: "Appartamento con terrazza panoramica e vista mare",
    fullDescription: "Orchidea si trova al piano terra, in posizione alta a destra. La terrazza panoramica offre una vista mozzafiato sul mare Ionio. La zona living spaziosa e la posizione privilegiata lo rendono uno degli appartamenti più richiesti per la vista panoramica.",
    price: 140,
  },
  {
    id: 4,
    name: "Tulipano",
    floor: "Piano Terra",
    position: "Centro-destra",
    size: "47 mq",
    guests: 4,
    bedrooms: 1,
    bathrooms: 1,
    features: ["Accesso diretto giardino", "Vista piscina", "Patio", "AC", "WiFi"],
    image: "/images/villa/appartamenti/tulipano/living-1.jpg",
    images: [
      "/images/villa/appartamenti/tulipano/living-1.jpg",
      "/images/villa/appartamenti/tulipano/living-2.jpg",
    ],
    description: "Appartamento con accesso diretto al giardino e vista piscina",
    fullDescription: "Tulipano è posizionato al centro-destra del piano terra. L'accesso diretto al giardino e il patio privato lo rendono perfetto per famiglie con bambini. La vista sulla piscina e la posizione centrale garantiscono massima comodità.",
    price: 125,
  },
  {
    id: 5,
    name: "Giglio",
    floor: "Piano Terra",
    position: "Basso-destra",
    size: "46 mq",
    guests: 4,
    bedrooms: 1,
    bathrooms: 1,
    features: ["Terrazza", "Vista mare", "Cucina moderna", "AC", "WiFi"],
    image: "/images/villa/appartamenti/giglio/living.jpg",
    images: [
      "/images/villa/appartamenti/giglio/living.jpg",
    ],
    description: "Appartamento con terrazza e vista mare, cucina moderna",
    fullDescription: "Giglio si trova in basso a destra al piano terra. La terrazza privata con vista mare e la cucina moderna completamente attrezzata lo rendono ideale per chi ama cucinare e godere dei panorami marini. La posizione tranquilla garantisce privacy e relax.",
    price: 135,
  },
  {
    id: 6,
    name: "Lavanda",
    floor: "Piano Terra",
    position: "A fianco Giglio",
    size: "45 mq",
    guests: 4,
    bedrooms: 1,
    bathrooms: 1,
    features: ["Balcone", "Vista giardino", "AC", "WiFi", "Cucina completa"],
    image: "/images/villa/appartamenti/lavanda/veranda.jpg",
    images: [
      "/images/villa/appartamenti/lavanda/veranda.jpg",
      "/images/villa/appartamenti/lavanda/veranda-2.jpg",
    ],
    description: "Appartamento accogliente con balcone e vista giardino",
    fullDescription: "Lavanda è posizionato a fianco di Giglio al piano terra. Il balcone con vista giardino e la cucina completa lo rendono perfetto per chi cerca tranquillità. La posizione laterale garantisce privacy e silenzio.",
    price: 120,
  },
  // PRIMO PIANO
  {
    id: 7,
    name: "Geranio",
    floor: "Primo Piano",
    position: "Sinistra (più grande)",
    size: "65 mq",
    guests: 6,
    bedrooms: 2,
    bathrooms: 2,
    features: ["Terrazza panoramica", "Vista mare 180°", "Doppi servizi", "Soggiorno ampio", "AC", "WiFi"],
    image: "/images/villa/appartamenti/geranio/kitchen.jpg",
    images: [
      "/images/villa/appartamenti/geranio/kitchen.jpg",
      "/images/villa/appartamenti/geranio/kitchen-2.jpg",
      "/images/villa/appartamenti/geranio/bedroom-1.jpg",
      "/images/villa/appartamenti/geranio/bedroom-2.jpg",
      "/images/villa/appartamenti/geranio/bedroom-3.jpg",
      "/images/villa/appartamenti/geranio/bedroom-4.jpg",
      "/images/villa/appartamenti/geranio/bedroom-5.jpg",
      "/images/villa/appartamenti/geranio/bedroom-6.jpg",
    ],
    description: "Appartamento premium al primo piano con terrazza panoramica e vista mare a 180°",
    fullDescription: "Geranio è l'appartamento più grande e prestigioso di Villa Olimpia, situato al primo piano a sinistra. Con 65 mq, due camere da letto e due bagni, è perfetto per famiglie o gruppi. La terrazza panoramica offre una vista mozzafiato a 180° sul mare Ionio. Il soggiorno ampio e i doppi servizi garantiscono massimo comfort e privacy.",
    price: 200,
    premium: true,
  },
  {
    id: 8,
    name: "Gardenia",
    floor: "Primo Piano",
    position: "Centro",
    size: "52 mq",
    guests: 4,
    bedrooms: 1,
    bathrooms: 1,
    features: ["Balcone vista mare", "Zona living", "Cucina attrezzata", "AC", "WiFi"],
    image: "/images/villa/appartamenti/gardenia/bedroom-1.jpg",
    images: [
      "/images/villa/appartamenti/gardenia/bedroom-1.jpg",
      "/images/villa/appartamenti/gardenia/bedroom-2.jpg",
      "/images/villa/appartamenti/gardenia/bedroom-3.jpg",
      "/images/villa/appartamenti/gardenia/bedroom-4.jpg",
    ],
    description: "Appartamento al primo piano con balcone vista mare e zona living spaziosa",
    fullDescription: "Gardenia si trova al centro del primo piano. Il balcone con vista mare e la zona living spaziosa lo rendono ideale per coppie o piccole famiglie. La posizione centrale garantisce facile accesso a tutti i servizi e una vista panoramica sul mare.",
    price: 150,
  },
  {
    id: 9,
    name: "Azalea",
    floor: "Primo Piano",
    position: "Destra",
    size: "50 mq",
    guests: 4,
    bedrooms: 1,
    bathrooms: 1,
    features: ["Terrazza privata", "Vista panoramica", "Design moderno", "AC", "WiFi"],
    image: "/images/villa/appartamenti/azalea/terrace-2.jpg",
    images: [
      "/images/villa/appartamenti/azalea/terrace-2.jpg",
      "/images/villa/appartamenti/azalea/bedroom.jpg",
      "/images/villa/appartamenti/azalea/living.jpg",
      "/images/villa/appartamenti/azalea/bedroom-2.jpg",
      "/images/villa/appartamenti/azalea/living-2.jpg",
      "/images/villa/appartamenti/azalea/terrace-3.jpg",
      "/images/villa/appartamenti/azalea/terrace-4.jpg",
      "/images/villa/appartamenti/azalea/terrace-5.jpg",
      "/images/villa/appartamenti/azalea/terrace-sunset.jpg",
    ],
    description: "Appartamento moderno al primo piano con terrazza privata e vista panoramica",
    fullDescription: "Azalea è posizionato a destra al primo piano. La terrazza privata con vista panoramica e il design moderno lo rendono perfetto per chi cerca eleganza e comfort. La posizione elevata garantisce una vista spettacolare sul mare e sulla costa calabrese.",
    price: 145,
  },
]

// Funzioni helper
export function getApartmentById(id: number | string): Apartment | undefined {
  const idNum = typeof id === 'string' ? parseInt(id.replace('apartment-', '')) : id
  return apartments.find((apt) => apt.id === idNum)
}

export function getApartmentsByFloor(floor: "Piano Terra" | "Primo Piano"): Apartment[] {
  return apartments.filter((apt) => apt.floor === floor)
}

export function getPremiumApartments(): Apartment[] {
  return apartments.filter((apt) => apt.premium)
}

export function getFeaturedApartments(): Apartment[] {
  return apartments.filter((apt) => apt.premium || apt.id === 3 || apt.id === 7 || apt.id === 9)
}

