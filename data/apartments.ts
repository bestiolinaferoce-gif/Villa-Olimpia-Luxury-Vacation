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
    guests: 6,
    bedrooms: 2,
    bathrooms: 1,
    features: ["Terrazza privata", "Vista giardino", "Cucina completa", "Aria condizionata", "WiFi gratuito", "TV Smart", "Biancheria inclusa", "Prodotti bagno"],
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
    fullDescription: "L'appartamento Frangipane si trova al piano terra, in posizione bassa a sinistra. Questo accogliente appartamento di 45 mq può ospitare comodamente fino a 4 persone ed è dotato di 1 camera da letto matrimoniale e 1 bagno completo. La terrazza privata è ideale per colazioni all'aperto e serate relax, offrendo una vista tranquilla sul giardino. La cucina completa è attrezzata con tutti gli elettrodomestici necessari, mentre la zona living offre un ambiente confortevole per il relax. La posizione tranquilla e riservata lo rende perfetto per coppie o piccole famiglie che cercano privacy e comfort. A meno di 100 metri dalla Spiaggia dei Gigli, raggiungibile in 1 minuto a piedi.",
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
    features: ["Balcone", "Vista piscina", "Aria condizionata", "WiFi gratuito", "Cucina attrezzata", "TV Smart", "Biancheria inclusa", "Prodotti bagno"],
    // ✅ FOTO REALE: Living Room
    image: "/images/villa/appartamenti/fiordaliso/main.jpg",
    images: [
      "/images/villa/appartamenti/fiordaliso/main.jpg",
      "/images/villa/appartamenti/fiordaliso/living-1.jpg",
      "/images/villa/appartamenti/fiordaliso/living-2.jpg",
    ],
    description: "Appartamento luminoso con balcone e vista sulla piscina",
    fullDescription: "Fiordaliso è un appartamento spazioso di 50 mq al piano terra, posizionato a sinistra. Può ospitare fino a 4 persone ed è dotato di 1 camera da letto matrimoniale e 1 bagno completo. Il balcone offre una vista diretta sulla piscina, rendendo questo appartamento ideale per chi ama il relax acquatico. La cucina è completamente attrezzata con tutti gli elettrodomestici moderni, mentre la zona living luminosa offre un ambiente confortevole. La posizione centrale permette facile accesso a tutti i servizi comuni della villa, inclusa la piscina condivisa e il gazebo. A meno di 100 metri dalla Spiaggia dei Gigli, raggiungibile in 1 minuto a piedi.",
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
    bathrooms: 2,
    features: ["Terrazza panoramica", "Vista mare", "Zona living spaziosa", "Aria condizionata", "WiFi gratuito", "Cucina completa", "TV Smart", "Biancheria inclusa"],
    // ✅ FOTO REALE: Camera/Terrazza
    image: "/images/villa/appartamenti/orchidea/main.jpg",
    images: [
      "/images/villa/appartamenti/orchidea/main.jpg",
      "/images/villa/appartamenti/orchidea/camera-matrimoniale-gardenia-1.jpg",
      "/images/villa/appartamenti/orchidea/terrazza-appartamento-azalea.jpg",
      "/images/villa/appartamenti/orchidea/terrazza-azalea-3.jpg",
    ],
    description: "Appartamento con terrazza panoramica e vista mare",
    fullDescription: "Orchidea è un appartamento di 48 mq situato al piano terra, in posizione alta a destra. Può ospitare fino a 4 persone ed è dotato di 1 camera da letto matrimoniale e 1 bagno completo. La terrazza panoramica è il punto forte di questo appartamento, offrendo una vista mozzafiato sul mare Ionio e sulla costa calabrese. La zona living spaziosa è perfetta per il relax, mentre la cucina completa permette di preparare pasti comodamente. La posizione privilegiata lo rende uno degli appartamenti più richiesti per la vista panoramica. A meno di 100 metri dalla Spiaggia dei Gigli, nell'Area Marina Protetta Capo Rizzuto, raggiungibile in 1 minuto a piedi.",
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
    features: ["Accesso diretto giardino", "Vista piscina", "Patio privato", "Aria condizionata", "WiFi gratuito", "Cucina completa", "TV Smart", "Biancheria inclusa", "Ideale per famiglie"],
    image: "/images/villa/appartamenti/tulipano/living-1.jpg",
    images: [
      "/images/villa/appartamenti/tulipano/living-1.jpg",
      "/images/villa/appartamenti/tulipano/living-2.jpg",
    ],
    description: "Appartamento con accesso diretto al giardino e vista piscina",
    fullDescription: "Tulipano è un appartamento di 47 mq posizionato al centro-destra del piano terra. Può ospitare fino a 4 persone ed è dotato di 1 camera da letto matrimoniale e 1 bagno completo. L'accesso diretto al giardino e il patio privato lo rendono perfetto per famiglie con bambini, offrendo uno spazio sicuro dove i più piccoli possono giocare. La vista sulla piscina e la posizione centrale garantiscono massima comodità e facile accesso a tutti i servizi della villa. La cucina completa è attrezzata per preparare pasti per tutta la famiglia. A meno di 100 metri dalla Spiaggia dei Gigli, raggiungibile in 1 minuto a piedi.",
    price: 125,
  },
  {
    id: 5,
    name: "Giglio",
    floor: "Piano Terra",
    position: "Basso-destra",
    size: "46 mq",
    guests: 6,
    bedrooms: 2,
    bathrooms: 1,
    features: ["Terrazza privata", "Vista mare", "Cucina moderna", "Aria condizionata", "WiFi gratuito", "TV Smart", "Biancheria inclusa", "Prodotti bagno"],
    image: "/images/villa/appartamenti/giglio/living.jpg",
    images: [
      "/images/villa/appartamenti/giglio/living.jpg",
    ],
    description: "Appartamento con terrazza e vista mare, cucina moderna",
    fullDescription: "Giglio è un appartamento di 46 mq situato in basso a destra al piano terra. Può ospitare fino a 4 persone ed è dotato di 1 camera da letto matrimoniale e 1 bagno completo. La terrazza privata con vista mare è il punto forte di questo appartamento, ideale per colazioni al tramonto e cene romantiche. La cucina moderna è completamente attrezzata con elettrodomestici di ultima generazione, perfetta per chi ama cucinare e godere dei panorami marini. La zona living offre un ambiente confortevole per il relax. La posizione tranquilla garantisce privacy e relax. A meno di 100 metri dalla Spiaggia dei Gigli, raggiungibile in 1 minuto a piedi.",
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
    features: ["Balcone", "Vista giardino", "Aria condizionata", "WiFi gratuito", "Cucina completa", "TV Smart", "Biancheria inclusa", "Prodotti bagno", "Posizione tranquilla"],
    image: "/images/villa/appartamenti/lavanda/veranda.jpg",
    images: [
      "/images/villa/appartamenti/lavanda/veranda.jpg",
      "/images/villa/appartamenti/lavanda/veranda-2.jpg",
    ],
    description: "Appartamento accogliente con balcone e vista giardino",
    fullDescription: "Lavanda è un appartamento accogliente di 45 mq posizionato a fianco di Giglio al piano terra. Può ospitare fino a 4 persone ed è dotato di 1 camera da letto matrimoniale e 1 bagno completo. Il balcone con vista giardino offre un ambiente tranquillo e rilassante, perfetto per chi cerca pace e serenità. La cucina completa è attrezzata con tutti gli elettrodomestici necessari, mentre la zona living offre un ambiente confortevole. La posizione laterale garantisce privacy e silenzio, rendendo questo appartamento ideale per chi cerca tranquillità. A meno di 100 metri dalla Spiaggia dei Gigli, raggiungibile in 1 minuto a piedi.",
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
    features: ["Terrazza panoramica 180°", "Vista mare mozzafiato", "2 camere da letto", "2 bagni completi", "Soggiorno ampio", "Cucina moderna", "Aria condizionata", "WiFi gratuito", "TV Smart", "Biancheria premium", "Prodotti bagno lusso"],
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
    fullDescription: "Geranio è l'appartamento più grande e prestigioso di Villa Olimpia, situato al primo piano a sinistra. Con 65 mq di superficie, questo appartamento premium può ospitare comodamente fino a 6 persone ed è dotato di 2 camere da letto (una matrimoniale e una con due letti singoli) e 2 bagni completi. La terrazza panoramica è il punto forte di questo appartamento, offrendo una vista mozzafiato a 180° sul mare Ionio e sulla costa calabrese, ideale per colazioni, pranzi e cene all'aperto. Il soggiorno ampio e luminoso offre un ambiente confortevole per il relax, mentre la cucina moderna è completamente attrezzata. I doppi servizi garantiscono massimo comfort e privacy, rendendo questo appartamento perfetto per famiglie numerose o gruppi di amici. A meno di 100 metri dalla Spiaggia dei Gigli, raggiungibile in 1 minuto a piedi.",
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
    bathrooms: 2,
    features: ["Balcone vista mare", "Zona living spaziosa", "Cucina attrezzata", "Aria condizionata", "WiFi gratuito", "TV Smart", "Biancheria inclusa", "Prodotti bagno", "Primo piano"],
    image: "/images/villa/appartamenti/gardenia/bedroom-1.jpg",
    images: [
      "/images/villa/appartamenti/gardenia/bedroom-1.jpg",
      "/images/villa/appartamenti/gardenia/bedroom-2.jpg",
      "/images/villa/appartamenti/gardenia/bedroom-3.jpg",
      "/images/villa/appartamenti/gardenia/bedroom-4.jpg",
    ],
    description: "Appartamento al primo piano con balcone vista mare e zona living spaziosa",
    fullDescription: "Gardenia è un appartamento di 52 mq situato al centro del primo piano di Villa Olimpia. Può ospitare fino a 4 persone ed è dotato di 1 camera da letto matrimoniale e 1 bagno completo. Il balcone con vista mare è il punto forte di questo appartamento, offrendo una vista panoramica sul mare Ionio. La zona living spaziosa e luminosa offre un ambiente confortevole per il relax, mentre la cucina attrezzata permette di preparare pasti comodamente. La posizione centrale garantisce facile accesso a tutti i servizi della villa e una vista panoramica sul mare. La posizione elevata al primo piano offre una prospettiva migliore sul mare e sulla costa calabrese. A meno di 100 metri dalla Spiaggia dei Gigli, raggiungibile in 1 minuto a piedi.",
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
    features: ["Terrazza privata panoramica", "Vista mare spettacolare", "Design moderno", "Aria condizionata", "WiFi gratuito", "Cucina completa", "TV Smart", "Biancheria inclusa", "Prodotti bagno", "Primo piano"],
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
    fullDescription: "Azalea è un appartamento moderno di 50 mq posizionato a destra al primo piano di Villa Olimpia. Può ospitare fino a 4 persone ed è dotato di 1 camera da letto matrimoniale e 1 bagno completo. La terrazza privata è il punto forte di questo appartamento, offrendo una vista panoramica spettacolare sul mare Ionio e sulla costa calabrese, ideale per colazioni al tramonto e cene romantiche. Il design moderno e gli arredi eleganti lo rendono perfetto per chi cerca eleganza e comfort. La cucina completa è attrezzata con elettrodomestici moderni, mentre la zona living offre un ambiente confortevole. La posizione elevata al primo piano garantisce una vista spettacolare sul mare e sulla costa, con tramonti mozzafiato. A meno di 100 metri dalla Spiaggia dei Gigli, raggiungibile in 1 minuto a piedi.",
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

