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
  active?: boolean
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
    description: "Appartamento Frangipane a Capopiccolo: 45 mq, 2 camere matrimoniali, veranda privata e spazi comodi per famiglie o gruppi fino a 6 ospiti, vicino alla Spiaggia dei Gigli.",
    fullDescription: "Frangipane è un appartamento di Villa Olimpia a Capopiccolo pensato per chi cerca una vacanza a Capo Rizzuto con più spazio, comodità e accesso rapido al mare. Si trova al piano terra e offre due camere matrimoniali reali, zona living con divano letto, cucina completa e veranda privata arredata, ideale per famiglie e piccoli gruppi fino a 6 ospiti. La posizione, a pochi passi dalla Spiaggia dei Gigli e dall'Area Marina Protetta di Capo Rizzuto, lo rende una soluzione molto pratica per vivere il territorio con libertà.",
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
    description: "Appartamento Fiordaliso a Capopiccolo con balcone vista piscina, ambienti luminosi e soluzione ideale per coppie e famiglie 2+2 vicino alla Spiaggia dei Gigli.",
    fullDescription: "Fiordaliso è un appartamento di Villa Olimpia al piano terra a Capopiccolo, pensato per chi cerca una vacanza a Capo Rizzuto con balcone vista piscina, accesso comodo ai servizi della struttura e vicinanza reale al mare. Offre camera matrimoniale, zona living con divano letto, cucina attrezzata e una distribuzione pratica per coppie e famiglie 2+2. La posizione, vicino alla Spiaggia dei Gigli e all'Area Marina Protetta di Capo Rizzuto, lo rende una soluzione semplice da vivere e molto funzionale.",
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
    description: "Appartamento Orchidea a Capopiccolo con terrazza panoramica vista mare e doppi servizi, ideale per coppie e famiglie che cercano più comfort vicino alla Spiaggia dei Gigli.",
    fullDescription: "Orchidea è un appartamento di Villa Olimpia a Capopiccolo pensato per chi cerca una vacanza a Capo Rizzuto con vista mare, terrazza panoramica e un livello di comfort superiore. Offre camera matrimoniale, zona living con divano letto, cucina completa e doppi servizi, un plus utile per coppie e famiglie che desiderano più comodità. La posizione, a pochi passi dalla Spiaggia dei Gigli e dall'Area Marina Protetta di Capo Rizzuto, lo rende una soluzione molto interessante per vivere il territorio con semplicità.",
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
    description: "Appartamento Tulipano a Capopiccolo con accesso diretto al giardino, patio privato e posizione ideale per famiglie vicino alla piscina e alla Spiaggia dei Gigli.",
    fullDescription: "Tulipano è un appartamento di Villa Olimpia al piano terra a Capopiccolo, ideale per chi cerca una vacanza a Capo Rizzuto pratica e comoda da vivere in famiglia. Offre camera matrimoniale, zona living con divano letto, cucina completa, patio privato e accesso diretto al giardino, con una posizione molto favorevole rispetto alla piscina e agli spazi esterni della struttura. La vicinanza alla Spiaggia dei Gigli e all'Area Marina Protetta di Capo Rizzuto lo rende una soluzione molto adatta a coppie e famiglie 2+2.",
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
    description: "Appartamento Giglio a Capopiccolo con due camere, gazebo esterno e soluzione comoda per famiglie o piccoli gruppi fino a 6 ospiti vicino alla Spiaggia dei Gigli.",
    fullDescription: "Giglio è un appartamento di Villa Olimpia al piano terra a Capopiccolo, pensato per chi cerca una vacanza a Capo Rizzuto con più posti letto, spazi ben distribuiti e una buona vivibilità anche durante i giorni passati in struttura. Offre camera matrimoniale, seconda camera, zona living con divano letto, cucina completa e spazi esterni con gazebo, risultando molto adatto a famiglie e piccoli gruppi fino a 6 ospiti. La posizione, vicino alla Spiaggia dei Gigli e all'Area Marina Protetta di Capo Rizzuto, lo rende una soluzione pratica e ben inserita nel territorio.",
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
    description: "Appartamento Lavanda a Capopiccolo con veranda e portico privati, ideale per coppie e piccole famiglie che cercano tranquillità vicino alla Spiaggia dei Gigli.",
    fullDescription: "Lavanda è un appartamento di Villa Olimpia al piano terra a Capopiccolo, pensato per chi desidera una vacanza a Capo Rizzuto all'insegna della tranquillità, della privacy e della comodità vicino al mare. Offre camera matrimoniale, zona living con divano letto, cucina completa e spazi esterni privati con veranda e portico, risultando molto adatto a coppie e piccole famiglie. La vicinanza alla Spiaggia dei Gigli e all'Area Marina Protetta di Capo Rizzuto completa una soluzione rilassante e ben posizionata.",
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
    description: "Appartamento Geranio a Capopiccolo: 65 mq, 2 camere, 2 bagni e 2 balconcini semipanoramici arredati. La soluzione premium di Villa Olimpia per fino a 6 ospiti.",
    fullDescription: "Geranio è una delle soluzioni più complete di Villa Olimpia: 65 mq al primo piano a Capopiccolo, con 2 camere da letto, 2 bagni, soggiorno ampio, cucina moderna e 2 balconcini semipanoramici arredati. È particolarmente adatto a famiglie numerose e piccoli gruppi che cercano un appartamento a Capo Rizzuto con più spazio, comfort superiore e posizione strategica vicino alla Spiaggia dei Gigli e all'Area Marina Protetta di Capo Rizzuto.",
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
    description: "Appartamento Gardenia a Capopiccolo con balcone vista mare Ionio, ambienti luminosi e soluzione ideale per coppie e famiglie 2+2 vicino alla Spiaggia dei Gigli.",
    fullDescription: "Gardenia è un appartamento di Villa Olimpia situato al primo piano a Capopiccolo, pensato per chi cerca una vacanza a Capo Rizzuto con vista aperta, ambienti luminosi e accesso comodo al mare. Offre camera matrimoniale, zona living con divano letto, cucina attrezzata e balcone con vista mare Ionio. È una soluzione adatta a coppie e famiglie 2+2 che desiderano soggiornare vicino alla Spiaggia dei Gigli e all'Area Marina Protetta di Capo Rizzuto.",
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
    description: "Appartamento Azalea a Capopiccolo con terrazza panoramica vista mare, soluzione luminosa e ben posizionata per coppie e famiglie 2+2 a Capo Rizzuto.",
    fullDescription: "Azalea è un appartamento di Villa Olimpia al primo piano a Capopiccolo, ideale per chi cerca una vacanza a Capo Rizzuto con terrazza panoramica e vista mare. Offre camera matrimoniale, zona living con divano letto, cucina completa e un contesto particolarmente adatto a coppie e famiglie 2+2. La posizione, vicino alla Spiaggia dei Gigli e all'Area Marina Protetta di Capo Rizzuto, lo rende una soluzione molto valida per vivere il mare con comodità e prenotare direttamente.",
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
