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
    // ✅ FOTO AGGIORNATE 2025 - 11 foto nuove
    image: "/images/villa/appartamenti/frangipane/main.jpg",
    images: [
      "/images/villa/appartamenti/frangipane/main.jpg",
      "/images/villa/appartamenti/frangipane/Frangipane_Camera_01.jpg",
      "/images/villa/appartamenti/frangipane/Frangipane_Camera_02.jpg",
      "/images/villa/appartamenti/frangipane/Frangipane_Bagno_01.jpg",
      "/images/villa/appartamenti/frangipane/Frangipane_Cucina_01.jpg",
      "/images/villa/appartamenti/frangipane/Frangipane_Living_Cucina_01.jpg",
      "/images/villa/appartamenti/frangipane/Frangipane_Veranda_Giorno_01.jpg",
      "/images/villa/appartamenti/frangipane/Frangipane_Veranda_Notte_01.jpg",
      "/images/villa/appartamenti/frangipane/Frangipane_Veranda_Esterna_01.jpg",
    ],
    description: "Appartamento Frangipane Villa Olimpia: 45 mq, 6 ospiti, 2 camere matrimoniali, veranda privata arredata e cucina completa. Unico al piano terra con due camere doppie. A 100 m dalla Spiaggia dei Gigli, Capopiccolo Isola di Capo Rizzuto.",
    fullDescription: "Frangipane è il lodge più spazioso di Villa Olimpia a Capopiccolo, Isola di Capo Rizzuto: 45 mq al piano terra in posizione bassa sinistra. Offre due camere matrimoniali reali (unica unità al piano terra con doppia camera doppia), zona living ampia con divano letto matrimoniale, cucina completa e veranda privata arredata con vista giardino, per fino a 6 ospiti. La veranda è ideale per colazioni e cene all'aperto; accesso diretto alla piscina condivisa e al parcheggio. A 100 metri dalla Spiaggia dei Gigli, nell'Area Marina Protetta Capo Rizzuto, Calabria. WiFi, aria condizionata, biancheria e prodotti bagno inclusi.",
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
    features: ["Balcone", "Vista piscina", "Giardino condiviso", "Area barbecue", "Aria condizionata", "WiFi gratuito", "Cucina attrezzata", "TV Smart", "Biancheria inclusa", "Prodotti bagno"],
    // ✅ FOTO AGGIORNATE 2025 - 4 foto nuove
    image: "/images/villa/appartamenti/fiordaliso/Fiordaliso_Living_01.jpg",
    images: [
      "/images/villa/appartamenti/fiordaliso/Fiordaliso_Living_01.jpg",
      "/images/villa/appartamenti/fiordaliso/Fiordaliso_Living_02.jpg",
      "/images/villa/appartamenti/fiordaliso/Fiordaliso_Living_Cucina_01.jpg",
      "/images/villa/gallery/Esterni_Piscina_Giorno_01.jpg",
      "/images/villa/gallery/Esterni_Giardino_Overview_01.jpg",
    ],
    description: "Fiordaliso: 50 mq al piano terra con balcone vista piscina, camera matrimoniale e divano letto. Fino a 4 ospiti. Ideale per coppie e famiglie 2+2. Villa Olimpia Capopiccolo, a un minuto dalla Spiaggia dei Gigli.",
    fullDescription: "Fiordaliso è un appartamento di 50 mq al piano terra di Villa Olimpia, in posizione sinistra a Capopiccolo, Isola di Capo Rizzuto. Ospita fino a 4 persone con 1 camera matrimoniale, zona living con divano letto e 1 bagno. Il balcone con vista diretta sulla piscina è il punto forte: relax in acqua a pochi passi. Cucina attrezzata, aria condizionata, WiFi, TV Smart; accesso a piscina condivisa, giardino e area barbecue. A meno di 100 m dalla Spiaggia dei Gigli, nell'Area Marina Protetta Capo Rizzuto. Vacanza mare Calabria con tutti i comfort.",
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
    // ✅ FOTO AGGIORNATE 2025 - 12 foto nuove
    image: "/images/villa/appartamenti/orchidea/Orchidea_Camera_01.jpg",
    images: [
      "/images/villa/appartamenti/orchidea/Orchidea_Camera_01.jpg",
      "/images/villa/appartamenti/orchidea/Orchidea_Camera_02.jpg",
      "/images/villa/appartamenti/orchidea/Orchidea_Camera_03.jpg",
      "/images/villa/appartamenti/orchidea/Orchidea_Bagno_01.jpg",
      "/images/villa/appartamenti/orchidea/Orchidea_Bagno_02.jpg",
      "/images/villa/appartamenti/orchidea/Orchidea_Cucina_Living_01.jpg",
      "/images/villa/appartamenti/orchidea/Orchidea_Living_02.jpg",
      "/images/villa/appartamenti/orchidea/Orchidea_Living_03.jpg",
      "/images/villa/appartamenti/orchidea/Orchidea_Living_04.jpg",
      "/images/villa/appartamenti/orchidea/Orchidea_Living_Cucina_01.jpg",
      "/images/villa/appartamenti/orchidea/Orchidea_Camera_Dettaglio_01.jpg",
    ],
    description: "Orchidea: 48 mq con terrazza panoramica vista mare Ionio, camera matrimoniale, zona living e bagno completo. Fino a 4 ospiti. Villa Olimpia Capopiccolo, Spiaggia dei Gigli a meno di 100 m.",
    fullDescription: "Orchidea è un appartamento di 48 mq al piano terra di Villa Olimpia, in posizione alta a destra a Capopiccolo, Isola di Capo Rizzuto. Ospita fino a 4 persone con 1 camera matrimoniale, zona living con divano letto, cucina completa e 1 bagno completo. La terrazza panoramica regala una vista aperta sul mare Ionio e sulla costa calabrese, ideale per colazioni e aperitivi con vista. Zona living spaziosa e luminosa; cucina attrezzata. Accesso a piscina e giardino condivisi. A meno di 100 metri dalla Spiaggia dei Gigli, Area Marina Protetta Capo Rizzuto. Appartamento vacanze vista mare Calabria con indicizzazione ideale per famiglie e coppie.",
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
    // ✅ FOTO AGGIORNATE 2025 - 9 foto nuove
    image: "/images/villa/appartamenti/tulipano/main.jpg",
    images: [
      "/images/villa/appartamenti/tulipano/main.jpg",
      "/images/villa/appartamenti/tulipano/Tulipano_Camera_01.jpg",
      "/images/villa/appartamenti/tulipano/Tulipano_Camera_02.jpg",
      "/images/villa/appartamenti/tulipano/Tulipano_Camera_04.jpg",
      "/images/villa/appartamenti/tulipano/Tulipano_Camera_Sera_01.jpg",
      "/images/villa/appartamenti/tulipano/Tulipano_Ingresso_01.jpg",
      "/images/villa/appartamenti/tulipano/Tulipano_Living_02.jpg",
      "/images/villa/appartamenti/tulipano/Tulipano_Living_Sera_01.jpg",
    ],
    description: "Tulipano: 47 mq con accesso diretto al giardino, patio privato e vista piscina. Camera matrimoniale e divano letto, fino a 4 ospiti. Ideale per famiglie con bambini. Villa Olimpia Capopiccolo, Spiaggia dei Gigli a 100 m.",
    fullDescription: "Tulipano è un appartamento di 47 mq al piano terra di Villa Olimpia, in posizione centro-destra a Capopiccolo, Isola di Capo Rizzuto. Ospita fino a 4 persone con 1 camera matrimoniale, zona living con divano letto, cucina completa e 1 bagno. Accesso diretto al giardino e patio privato con vista sulla piscina: spazio sicuro per bambini e relax all'aperto. Posizione centrale nella villa per comodo accesso a piscina, parcheggio e aree comuni. Cucina completa, aria condizionata, WiFi, TV Smart. A 100 metri dalla Spiaggia dei Gigli, Area Marina Protetta Capo Rizzuto. Appartamento famiglia Calabria vicino al mare con ottima indicizzazione SEO.",
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
    features: ["Camera matrimoniale + camera con letto da una piazza e mezza", "Zona living con divano letto", "Cucina moderna", "Aria condizionata", "WiFi gratuito", "TV Smart", "Biancheria inclusa", "Prodotti bagno"],
    // ✅ FOTO AGGIORNATE 2025 - 10 foto nuove
    image: "/images/villa/appartamenti/giglio/main.jpg",
    images: [
      "/images/villa/appartamenti/giglio/main.jpg",
      "/images/villa/appartamenti/giglio/Giglio_Camera_01.jpg",
      "/images/villa/appartamenti/giglio/Giglio_Camera_Castello_01.jpg",
      "/images/villa/appartamenti/giglio/Giglio_Bagno_01.jpg",
      "/images/villa/appartamenti/giglio/Giglio_Cucina_01.jpg",
      "/images/villa/appartamenti/giglio/Giglio_Living_03.jpg",
      "/images/villa/appartamenti/giglio/Giglio_Living_04.jpg",
      "/images/villa/appartamenti/giglio/Giglio_Esterno_Gazebo_01.jpg",
      "/images/villa/appartamenti/giglio/Giglio_Esterno_Patio_01.jpg",
    ],
    description: "Giglio: 46 mq con camera matrimoniale, camera con letto da una piazza e mezza e divano letto. Fino a 6 ospiti. Perfetto per famiglie. Villa Olimpia Capopiccolo, Area Marina Protetta Capo Rizzuto, Spiaggia dei Gigli a meno di 100 m.",
    fullDescription: "Giglio è un appartamento di 46 mq al piano terra di Villa Olimpia, in posizione basso-destra a Capopiccolo, Isola di Capo Rizzuto. Ospita fino a 6 persone con camera matrimoniale, camera con letto da una piazza e mezza e divano letto matrimoniale in living. Cucina moderna completa, 1 bagno, aria condizionata, WiFi, TV Smart. Zona living spaziosa; posizione tranquilla con accesso a gazebo e patio esterno. Ideale per famiglie con bambini o piccoli gruppi. Piscina condivisa e giardino a disposizione. A meno di 100 metri dalla Spiaggia dei Gigli, nell'Area Marina Protetta Capo Rizzuto. Vacanza in Calabria con piscina e mare a un minuto a piedi.",
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
    features: ["Veranda e portico privati", "Vista giardino", "Aria condizionata", "WiFi gratuito", "Cucina completa", "TV Smart", "Biancheria inclusa", "Prodotti bagno", "Posizione tranquilla"],
    // ✅ FOTO AGGIORNATE 2025 - 8 foto nuove
    image: "/images/villa/appartamenti/lavanda/main.jpg",
    images: [
      "/images/villa/appartamenti/lavanda/main.jpg",
      "/images/villa/appartamenti/lavanda/Lavanda_Camera_01.jpg",
      "/images/villa/appartamenti/lavanda/Lavanda_Bagno_01.jpg",
      "/images/villa/appartamenti/lavanda/Lavanda_Cucina_01.jpg",
      "/images/villa/appartamenti/lavanda/Lavanda_Living_02.jpg",
      "/images/villa/appartamenti/lavanda/Lavanda_Living_03.jpg",
      "/images/villa/appartamenti/lavanda/Lavanda_Portico_01.jpg",
      "/images/villa/appartamenti/lavanda/Lavanda_Veranda_Sera_01.jpg",
    ],
    description: "Lavanda: 45 mq con veranda/portico privato e vista giardino. Camera matrimoniale e divano letto, 4 ospiti. Posizione tranquilla e riservata. Villa Olimpia Capopiccolo, Spiaggia dei Gigli e Area Marina Protetta a 100 m.",
    fullDescription: "Lavanda è un lodge tranquillo di 45 mq al piano terra di Villa Olimpia, a fianco di Giglio, Capopiccolo Isola di Capo Rizzuto. Ospita fino a 4 persone con 1 camera matrimoniale, zona living con divano letto, cucina completa e 1 bagno. Veranda e portico privati con vista giardino: ideali per colazioni e serate in relax. Posizione laterale e silenziosa, massima privacy. Cucina attrezzata, aria condizionata, WiFi, TV Smart; accesso a piscina e giardino condivisi. A 100 metri dalla Spiaggia dei Gigli, Area Marina Protetta Capo Rizzuto. Appartamento vacanze Calabria vicino al mare per coppie e piccole famiglie.",
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
    features: ["2 balconcini semipanoramici", "Vista mare e giardino", "2 camere da letto", "2 bagni completi", "Soggiorno ampio", "Cucina moderna", "Aria condizionata", "WiFi gratuito", "TV Smart", "Biancheria premium", "Prodotti bagno lusso"],
    // ✅ FOTO AGGIORNATE 2025 - 13 foto nuove
    image: "/images/villa/appartamenti/geranio/main.jpg",
    images: [
      "/images/villa/appartamenti/geranio/main.jpg",
      "/images/villa/appartamenti/geranio/Geranio_Camera_02.jpg",
      "/images/villa/appartamenti/geranio/Geranio_Camera_03.jpg",
      "/images/villa/appartamenti/geranio/Geranio_Camera_04.jpg",
      "/images/villa/appartamenti/geranio/Geranio_Camera_05.jpg",
      "/images/villa/appartamenti/geranio/Geranio_Camera_06.jpg",
      "/images/villa/appartamenti/geranio/Geranio_Camera_07.jpg",
      "/images/villa/appartamenti/geranio/Geranio_Bagno_01.jpg",
      "/images/villa/appartamenti/geranio/Geranio_Bagno_02.jpg",
      "/images/villa/appartamenti/geranio/Geranio_Bagno_03.jpg",
      "/images/villa/appartamenti/geranio/Geranio_Cucina_01.jpg",
      "/images/villa/appartamenti/geranio/Geranio_Ingresso_01.jpg",
      "/images/villa/appartamenti/geranio/Geranio_CabinaArmadio_01.jpg",
    ],
    description: "Geranio: appartamento premium 65 mq, primo piano. 2 camere, 2 bagni, 2 balconcini semipanoramici arredati. Fino a 6 ospiti. Il più completo e richiesto di Villa Olimpia. Capopiccolo, Spiaggia dei Gigli a 100 m.",
    fullDescription: "Geranio è l'appartamento più grande e prestigioso di Villa Olimpia: 65 mq al primo piano, sinistra, a Capopiccolo, Isola di Capo Rizzuto. Ospita fino a 6 persone con 2 camere da letto climatizzate, 2 bagni completi (uno in camera), cabina armadio, soggiorno ampio con divano letto e cucina moderna. I 2 balconcini semipanoramici arredati sono il punto forte: colazioni, pranzi e cene all'aperto con affaccio sul giardino. Biancheria e prodotti bagno di livello premium; TV Smart, WiFi, aria condizionata in tutte le stanze. Doppi servizi per massimo comfort e privacy. Ideale per famiglie numerose e gruppi. A 100 metri dalla Spiaggia dei Gigli, Area Marina Protetta Capo Rizzuto. Appartamento di lusso Calabria con piscina e indicizzazione SEO ottimale.",
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
    features: ["Balcone vista mare", "Zona living spaziosa", "Cucina attrezzata", "Aria condizionata", "WiFi gratuito", "TV Smart", "Biancheria inclusa", "Prodotti bagno", "Primo piano"],
    // ✅ FOTO AGGIORNATE 2025 - 4 foto nuove
    image: "/images/villa/appartamenti/gardenia/main.jpg",
    images: [
      "/images/villa/appartamenti/gardenia/main.jpg",
      "/images/villa/appartamenti/gardenia/Gardenia_Camera_01.jpg",
      "/images/villa/appartamenti/gardenia/Gardenia_Camera_02.jpg",
      "/images/villa/appartamenti/gardenia/Gardenia_Bagno_01.jpg",
      "/images/villa/appartamenti/gardenia/main.jpg",
      "/images/villa/gallery/Esterni_Piscina_Giorno_01.jpg",
      "/images/villa/gallery/Esterni_Giardino_Overview_01.jpg",
    ],
    description: "Gardenia: 52 mq al primo piano, balcone vista mare Ionio. Camera matrimoniale e divano letto, 4 ospiti. Zona living spaziosa e cucina attrezzata. Villa Olimpia Capopiccolo, Spiaggia dei Gigli a 100 m.",
    fullDescription: "Gardenia è un appartamento di 52 mq al centro del primo piano di Villa Olimpia, Capopiccolo, Isola di Capo Rizzuto. Ospita fino a 4 persone con 1 camera matrimoniale, zona living con divano letto, cucina attrezzata e 1 bagno. Il balcone con vista mare Ionio illumina gli ambienti e regala tramonti sul golfo. Living spazioso e luminoso; cucina completa. Accesso a piscina condivisa, giardino e area barbecue. A 100 metri dalla Spiaggia dei Gigli, Area Marina Protetta Capo Rizzuto. Appartamento vacanze primo piano Calabria con vista mare e ottima indicizzazione per coppie e famiglie 2+2.",
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
    // ✅ FOTO AGGIORNATE 2025 - 17 foto nuove
    image: "/images/villa/appartamenti/azalea/Azalea_Camera_01.jpg",
    images: [
      "/images/villa/appartamenti/azalea/Azalea_Camera_01.jpg",
      "/images/villa/appartamenti/azalea/Azalea_Camera_02.jpg",
      "/images/villa/appartamenti/azalea/Azalea_Camera_03.jpg",
      "/images/villa/appartamenti/azalea/Azalea_Camera_04.jpg",
      "/images/villa/appartamenti/azalea/Azalea_Bagno_01.jpg",
      "/images/villa/appartamenti/azalea/Azalea_Cucina_01.jpg",
      "/images/villa/appartamenti/azalea/Azalea_Cucina_02.jpg",
      "/images/villa/appartamenti/azalea/Azalea_Terrazza_01.jpg",
      "/images/villa/appartamenti/azalea/Azalea_Terrazza_02.jpg",
      "/images/villa/appartamenti/azalea/Azalea_Terrazza_03.jpg",
      "/images/villa/appartamenti/azalea/Azalea_Terrazza_Notte_01.jpg",
      "/images/villa/appartamenti/azalea/Azalea_Terrazza_Tramonto_01.jpg",
      "/images/villa/appartamenti/azalea/Azalea_Terrazza_Tramonto_02.jpg",
      "/images/villa/appartamenti/azalea/Azalea_Veranda_01.jpg",
    ],
    description: "Azalea: 50 mq al primo piano con terrazza privata panoramica e vista mare. Design moderno, camera matrimoniale e divano letto, 4 ospiti. Ideale per coppie e famiglie 2+2. Villa Olimpia Capopiccolo, Spiaggia dei Gigli a 100 m.",
    fullDescription: "Azalea è un appartamento moderno di 50 mq a destra al primo piano di Villa Olimpia, Capopiccolo, Isola di Capo Rizzuto. Ospita fino a 4 persone con 1 camera matrimoniale, zona living con divano letto, cucina completa e 1 bagno. La terrazza privata panoramica è il punto forte: vista spettacolare sul mare Ionio e sulla costa calabrese, perfetta per colazioni e cene al tramonto. Arredi eleganti e design curato; cucina con elettrodomestici moderni. Posizione elevata per massima vista e tramonti. Accesso a piscina e giardino condivisi. A 100 metri dalla Spiaggia dei Gigli, Area Marina Protetta Capo Rizzuto. Appartamento vista mare Calabria con terrazza e SEO ottimizzato per prenotazioni dirette e OTA.",
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
