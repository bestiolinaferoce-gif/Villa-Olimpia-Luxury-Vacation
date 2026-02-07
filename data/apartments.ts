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
      "/images/villa/appartamenti/frangipane/Frangipane_Living_01.jpg",
      "/images/villa/appartamenti/frangipane/Frangipane_Living_Cucina_01.jpg",
      "/images/villa/appartamenti/frangipane/Frangipane_Veranda_Giorno_01.jpg",
      "/images/villa/appartamenti/frangipane/Frangipane_Veranda_Notte_01.jpg",
      "/images/villa/appartamenti/frangipane/Frangipane_Veranda_Esterna_01.jpg",
    ],
    description: "Il lodge più spazioso di Villa Olimpia: due camere matrimoniali, veranda privata arredata, cucina completa. Perfetto per famiglie fino a 6 persone. A 100 metri dalla Spiaggia dei Gigli, Capopiccolo.",
    fullDescription: "Frangipane è il lodge più spazioso di Villa Olimpia, situato al piano terra. Con due camere matrimoniali reali, zona living ampia con divano letto matrimoniale, cucina completa e veranda privata arredata, può ospitare comodamente fino a 6 persone. La veranda privata con vista giardino è ideale per colazioni all'aperto e serate relax. Accesso diretto alla piscina condivisa e alle aree comuni. A 100 metri dalla Spiaggia dei Gigli, nell'Area Marina Protetta Capo Rizzuto, raggiungibile in 1 minuto a piedi.",
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
    // ✅ FOTO AGGIORNATE 2025 - 4 foto nuove
    image: "/images/villa/appartamenti/fiordaliso/main.jpg",
    images: [
      "/images/villa/appartamenti/fiordaliso/main.jpg",
      "/images/villa/appartamenti/fiordaliso/Fiordaliso_Living_01.jpg",
      "/images/villa/appartamenti/fiordaliso/Fiordaliso_Living_02.jpg",
      "/images/villa/appartamenti/fiordaliso/Fiordaliso_Living_Cucina_01.jpg",
      "/images/villa/appartamenti/fiordaliso/Fiordaliso_Bagno_01.jpg",
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
    // ✅ FOTO AGGIORNATE 2025 - 12 foto nuove
    image: "/images/villa/appartamenti/orchidea/main.jpg",
    images: [
      "/images/villa/appartamenti/orchidea/main.jpg",
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
    // ✅ FOTO AGGIORNATE 2025 - 9 foto nuove
    image: "/images/villa/appartamenti/tulipano/main.jpg",
    images: [
      "/images/villa/appartamenti/tulipano/main.jpg",
      "/images/villa/appartamenti/tulipano/Tulipano_Camera_01.jpg",
      "/images/villa/appartamenti/tulipano/Tulipano_Camera_02.jpg",
      "/images/villa/appartamenti/tulipano/Tulipano_Camera_03.jpg",
      "/images/villa/appartamenti/tulipano/Tulipano_Camera_04.jpg",
      "/images/villa/appartamenti/tulipano/Tulipano_Camera_Sera_01.jpg",
      "/images/villa/appartamenti/tulipano/Tulipano_Ingresso_01.jpg",
      "/images/villa/appartamenti/tulipano/Tulipano_Living_02.jpg",
      "/images/villa/appartamenti/tulipano/Tulipano_Living_Cucina_01.jpg",
      "/images/villa/appartamenti/tulipano/Tulipano_Living_Sera_01.jpg",
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
    guests: 4,
    bedrooms: 1,
    bathrooms: 1,
    features: ["Terrazza privata", "Vista mare", "Cucina moderna", "Aria condizionata", "WiFi gratuito", "TV Smart", "Biancheria inclusa", "Prodotti bagno"],
    // ✅ FOTO AGGIORNATE 2025 - 10 foto nuove
    image: "/images/villa/appartamenti/giglio/main.jpg",
    images: [
      "/images/villa/appartamenti/giglio/main.jpg",
      "/images/villa/appartamenti/giglio/Giglio_Camera_01.jpg",
      "/images/villa/appartamenti/giglio/Giglio_Camera_Castello_01.jpg",
      "/images/villa/appartamenti/giglio/Giglio_Bagno_01.jpg",
      "/images/villa/appartamenti/giglio/Giglio_Cucina_01.jpg",
      "/images/villa/appartamenti/giglio/Giglio_Living_01.jpg",
      "/images/villa/appartamenti/giglio/Giglio_Living_02.jpg",
      "/images/villa/appartamenti/giglio/Giglio_Living_03.jpg",
      "/images/villa/appartamenti/giglio/Giglio_Living_04.jpg",
      "/images/villa/appartamenti/giglio/Giglio_Esterno_Gazebo_01.jpg",
      "/images/villa/appartamenti/giglio/Giglio_Esterno_Patio_01.jpg",
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
    // ✅ FOTO AGGIORNATE 2025 - 8 foto nuove
    image: "/images/villa/appartamenti/lavanda/main.jpg",
    images: [
      "/images/villa/appartamenti/lavanda/main.jpg",
      "/images/villa/appartamenti/lavanda/Lavanda_Camera_01.jpg",
      "/images/villa/appartamenti/lavanda/Lavanda_Bagno_01.jpg",
      "/images/villa/appartamenti/lavanda/Lavanda_Cucina_01.jpg",
      "/images/villa/appartamenti/lavanda/Lavanda_Living_01.jpg",
      "/images/villa/appartamenti/lavanda/Lavanda_Living_02.jpg",
      "/images/villa/appartamenti/lavanda/Lavanda_Living_03.jpg",
      "/images/villa/appartamenti/lavanda/Lavanda_Portico_01.jpg",
      "/images/villa/appartamenti/lavanda/Lavanda_Veranda_Sera_01.jpg",
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
    // ✅ FOTO AGGIORNATE 2025 - 13 foto nuove
    image: "/images/villa/appartamenti/geranio/main.jpg",
    images: [
      "/images/villa/appartamenti/geranio/main.jpg",
      "/images/villa/appartamenti/geranio/Geranio_Camera_01.jpg",
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
    // ✅ FOTO AGGIORNATE 2025 - 4 foto nuove
    image: "/images/villa/appartamenti/gardenia/main.jpg",
    images: [
      "/images/villa/appartamenti/gardenia/main.jpg",
      "/images/villa/appartamenti/gardenia/Gardenia_Camera_01.jpg",
      "/images/villa/appartamenti/gardenia/Gardenia_Camera_02.jpg",
      "/images/villa/appartamenti/gardenia/Gardenia_Bagno_01.jpg",
      "/images/villa/appartamenti/gardenia/Gardenia_Living_01.jpg",
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
    // ✅ FOTO AGGIORNATE 2025 - 17 foto nuove
    image: "/images/villa/appartamenti/azalea/main.jpg",
    images: [
      "/images/villa/appartamenti/azalea/main.jpg",
      "/images/villa/appartamenti/azalea/Azalea_Camera_01.jpg",
      "/images/villa/appartamenti/azalea/Azalea_Camera_02.jpg",
      "/images/villa/appartamenti/azalea/Azalea_Camera_03.jpg",
      "/images/villa/appartamenti/azalea/Azalea_Camera_04.jpg",
      "/images/villa/appartamenti/azalea/Azalea_Bagno_01.jpg",
      "/images/villa/appartamenti/azalea/Azalea_Cucina_01.jpg",
      "/images/villa/appartamenti/azalea/Azalea_Cucina_02.jpg",
      "/images/villa/appartamenti/azalea/Azalea_Living_01.jpg",
      "/images/villa/appartamenti/azalea/Azalea_Living_02.jpg",
      "/images/villa/appartamenti/azalea/Azalea_Terrazza_01.jpg",
      "/images/villa/appartamenti/azalea/Azalea_Terrazza_02.jpg",
      "/images/villa/appartamenti/azalea/Azalea_Terrazza_03.jpg",
      "/images/villa/appartamenti/azalea/Azalea_Terrazza_Notte_01.jpg",
      "/images/villa/appartamenti/azalea/Azalea_Terrazza_Tramonto_01.jpg",
      "/images/villa/appartamenti/azalea/Azalea_Terrazza_Tramonto_02.jpg",
      "/images/villa/appartamenti/azalea/Azalea_Veranda_01.jpg",
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

