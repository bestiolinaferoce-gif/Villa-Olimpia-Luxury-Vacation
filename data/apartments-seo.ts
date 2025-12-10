// Contenuti SEO ottimizzati per ogni appartamento per OTA (Booking.com, Airbnb, etc.)

export interface ApartmentSEO {
  id: number
  name: string
  seoTitle: string
  seoDescription: string
  seoKeywords: string[]
  seoContent: string // Contenuto lungo per SEO
  bookingKeywords: string[] // Keywords specifiche per Booking.com
  airbnbKeywords: string[] // Keywords specifiche per Airbnb
}

export const apartmentsSEO: Record<number, ApartmentSEO> = {
  1: {
    id: 1,
    name: "Frangipane",
    seoTitle: "Appartamento Frangipane Villa Olimpia - 4 Ospiti | Piano Terra | Capopiccolo",
    seoDescription: "Affitta l'appartamento Frangipane a Villa Olimpia, Capopiccolo. 45 mq, 4 ospiti, 1 camera, terrazza privata vista giardino. A meno di 100 metri dalla Spiaggia dei Gigli. Disponibile su Booking.com e Airbnb.",
    seoKeywords: [
      "appartamento frangipane villa olimpia",
      "affitto frangipane capopiccolo",
      "vacation rental frangipane isola capo rizzuto",
      "appartamento 4 ospiti capopiccolo",
      "terrazza privata vista giardino calabria",
      "booking frangipane villa olimpia",
      "airbnb frangipane calabria"
    ],
    seoContent: `L'appartamento Frangipane è un accogliente appartamento di 45 mq situato al piano terra di Villa Olimpia, in posizione bassa a sinistra. Questo appartamento può ospitare comodamente fino a 4 persone ed è dotato di 1 camera da letto e 1 bagno.

La caratteristica principale dell'appartamento Frangipane è la terrazza privata con vista sul giardino, ideale per colazioni all'aperto e serate relax. La posizione tranquilla e riservata lo rende perfetto per coppie o piccole famiglie che cercano privacy e comfort.

Situato a Villa Olimpia, nella splendida località di Capopiccolo, Isola di Capo Rizzuto, l'appartamento si trova a meno di 100 metri dalla Spiaggia dei Gigli, una delle spiagge più belle dell'Area Marina Protetta Capo Rizzuto. La posizione privilegiata permette di raggiungere la spiaggia in 1 minuto a piedi.

L'appartamento è completamente attrezzato con cucina completa, aria condizionata, WiFi gratuito e tutti i comfort necessari per una vacanza indimenticabile. La piscina condivisa della villa è a pochi passi, così come il gazebo e le aree relax comuni.

Disponibile per prenotazioni su Booking.com, Airbnb o direttamente tramite il sito ufficiale. Prezzo a partire da €120/notte. Check-in dalle 15:00, check-out entro le 10:00.`,
    bookingKeywords: [
      "Frangipane Villa Olimpia Booking",
      "appartamento Capopiccolo Booking.com",
      "vacation rental Isola Capo Rizzuto Booking",
      "4 guests apartment Calabria Booking"
    ],
    airbnbKeywords: [
      "Frangipane Villa Olimpia Airbnb",
      "apartment Capopiccolo Airbnb",
      "Calabria vacation rental Airbnb",
      "4 guests apartment Airbnb Calabria"
    ]
  },
  2: {
    id: 2,
    name: "Fiordaliso",
    seoTitle: "Appartamento Fiordaliso Villa Olimpia - 4 Ospiti | Vista Piscina | Capopiccolo",
    seoDescription: "Appartamento Fiordaliso 50 mq, 4 ospiti, balcone vista piscina. Villa Olimpia Capopiccolo, Isola di Capo Rizzuto. Booking.com e Airbnb disponibile.",
    seoKeywords: [
      "appartamento fiordaliso villa olimpia",
      "affitto fiordaliso vista piscina",
      "vacation rental fiordaliso calabria",
      "appartamento balcone vista piscina capopiccolo",
      "booking fiordaliso villa olimpia",
      "airbnb fiordaliso isola capo rizzuto"
    ],
    seoContent: `L'appartamento Fiordaliso è un luminoso appartamento di 50 mq situato al piano terra di Villa Olimpia, posizionato a sinistra. Questo appartamento può ospitare fino a 4 persone ed è dotato di 1 camera da letto e 1 bagno.

Il punto forte dell'appartamento Fiordaliso è il balcone con vista diretta sulla piscina, rendendo questo appartamento ideale per chi ama il relax acquatico. La posizione centrale permette facile accesso a tutti i servizi comuni della villa.

Situato a Villa Olimpia, Capopiccolo, Isola di Capo Rizzuto, l'appartamento si trova a meno di 100 metri dalla Spiaggia dei Gigli. La vista sulla piscina e la posizione privilegiata lo rendono uno degli appartamenti più richiesti.

Completamente attrezzato con cucina attrezzata, aria condizionata, WiFi gratuito. Prezzo a partire da €130/notte. Disponibile su Booking.com, Airbnb o prenotazione diretta.`,
    bookingKeywords: [
      "Fiordaliso Villa Olimpia Booking",
      "apartment pool view Booking.com",
      "4 guests Capopiccolo Booking"
    ],
    airbnbKeywords: [
      "Fiordaliso Villa Olimpia Airbnb",
      "pool view apartment Airbnb",
      "Calabria 4 guests Airbnb"
    ]
  },
  3: {
    id: 3,
    name: "Orchidea",
    seoTitle: "Appartamento Orchidea Villa Olimpia - 4 Ospiti | Terrazza Panoramica Vista Mare | Capopiccolo",
    seoDescription: "Appartamento Orchidea 48 mq, terrazza panoramica vista mare, 4 ospiti. Villa Olimpia Capopiccolo. Area Marina Protetta Capo Rizzuto. Booking e Airbnb.",
    seoKeywords: [
      "appartamento orchidea villa olimpia",
      "affitto orchidea vista mare calabria",
      "terrazza panoramica vista mare capopiccolo",
      "vacation rental orchidea isola capo rizzuto",
      "booking orchidea villa olimpia",
      "airbnb orchidea vista mare"
    ],
    seoContent: `L'appartamento Orchidea è un appartamento di 48 mq situato al piano terra di Villa Olimpia, in posizione alta a destra. Questo appartamento può ospitare fino a 4 persone ed è dotato di 1 camera da letto e 1 bagno.

La caratteristica principale dell'appartamento Orchidea è la terrazza panoramica con vista mozzafiato sul mare Ionio. La zona living spaziosa e la posizione privilegiata lo rendono uno degli appartamenti più richiesti per la vista panoramica.

Situato a Villa Olimpia, Capopiccolo, Isola di Capo Rizzuto, nell'Area Marina Protetta Capo Rizzuto. A meno di 100 metri dalla Spiaggia dei Gigli, una delle spiagge più belle della Calabria, raggiungibile in 1 minuto a piedi.

Completamente attrezzato con zona living, aria condizionata, WiFi gratuito. Prezzo a partire da €140/notte. Disponibile su Booking.com, Airbnb o prenotazione diretta.`,
    bookingKeywords: [
      "Orchidea Villa Olimpia Booking",
      "sea view apartment Booking.com",
      "panoramic terrace Capopiccolo Booking"
    ],
    airbnbKeywords: [
      "Orchidea Villa Olimpia Airbnb",
      "sea view apartment Airbnb",
      "panoramic terrace Calabria Airbnb"
    ]
  },
  4: {
    id: 4,
    name: "Tulipano",
    seoTitle: "Appartamento Tulipano Villa Olimpia - 4 Ospiti | Accesso Giardino | Capopiccolo",
    seoDescription: "Appartamento Tulipano 47 mq, accesso diretto giardino, vista piscina, 4 ospiti. Villa Olimpia Capopiccolo. Ideale per famiglie. Booking.com e Airbnb.",
    seoKeywords: [
      "appartamento tulipano villa olimpia",
      "affitto tulipano accesso giardino",
      "vacation rental tulipano calabria",
      "appartamento famiglia capopiccolo",
      "booking tulipano villa olimpia",
      "airbnb tulipano isola capo rizzuto"
    ],
    seoContent: `L'appartamento Tulipano è un appartamento di 47 mq situato al piano terra di Villa Olimpia, posizionato al centro-destra. Questo appartamento può ospitare fino a 4 persone ed è dotato di 1 camera da letto e 1 bagno.

L'appartamento Tulipano offre accesso diretto al giardino e un patio privato, rendendolo perfetto per famiglie con bambini. La vista sulla piscina e la posizione centrale garantiscono massima comodità.

Situato a Villa Olimpia, Capopiccolo, Isola di Capo Rizzuto. A meno di 100 metri dalla Spiaggia dei Gigli, raggiungibile in 1 minuto a piedi. L'accesso diretto al giardino lo rende ideale per chi viaggia con bambini.

Completamente attrezzato con aria condizionata, WiFi gratuito. Prezzo a partire da €125/notte. Disponibile su Booking.com, Airbnb o prenotazione diretta.`,
    bookingKeywords: [
      "Tulipano Villa Olimpia Booking",
      "garden access apartment Booking.com",
      "family apartment Capopiccolo Booking"
    ],
    airbnbKeywords: [
      "Tulipano Villa Olimpia Airbnb",
      "garden access apartment Airbnb",
      "family friendly Calabria Airbnb"
    ]
  },
  5: {
    id: 5,
    name: "Giglio",
    seoTitle: "Appartamento Giglio Villa Olimpia - 4 Ospiti | Terrazza Vista Mare | Cucina Moderna",
    seoDescription: "Appartamento Giglio 46 mq, terrazza vista mare, cucina moderna, 4 ospiti. Villa Olimpia Capopiccolo. Booking.com e Airbnb disponibile.",
    seoKeywords: [
      "appartamento giglio villa olimpia",
      "affitto giglio cucina moderna",
      "vacation rental giglio calabria",
      "terrazza vista mare capopiccolo",
      "booking giglio villa olimpia",
      "airbnb giglio isola capo rizzuto"
    ],
    seoContent: `L'appartamento Giglio è un appartamento di 46 mq situato al piano terra di Villa Olimpia, in posizione bassa a destra. Questo appartamento può ospitare fino a 4 persone ed è dotato di 1 camera da letto e 1 bagno.

L'appartamento Giglio offre una terrazza privata con vista mare e una cucina moderna completamente attrezzata, ideale per chi ama cucinare e godere dei panorami marini. La posizione tranquilla garantisce privacy e relax.

Situato a Villa Olimpia, Capopiccolo, Isola di Capo Rizzuto. A meno di 100 metri dalla Spiaggia dei Gigli, raggiungibile in 1 minuto a piedi. La terrazza con vista mare è il punto forte di questo appartamento.

Completamente attrezzato con cucina moderna, aria condizionata, WiFi gratuito. Prezzo a partire da €135/notte. Disponibile su Booking.com, Airbnb o prenotazione diretta.`,
    bookingKeywords: [
      "Giglio Villa Olimpia Booking",
      "modern kitchen apartment Booking.com",
      "sea view terrace Capopiccolo Booking"
    ],
    airbnbKeywords: [
      "Giglio Villa Olimpia Airbnb",
      "modern kitchen apartment Airbnb",
      "sea view terrace Calabria Airbnb"
    ]
  },
  6: {
    id: 6,
    name: "Lavanda",
    seoTitle: "Appartamento Lavanda Villa Olimpia - 4 Ospiti | Balcone Vista Giardino | Capopiccolo",
    seoDescription: "Appartamento Lavanda 45 mq, balcone vista giardino, 4 ospiti. Villa Olimpia Capopiccolo. Posizione tranquilla. Booking.com e Airbnb.",
    seoKeywords: [
      "appartamento lavanda villa olimpia",
      "affitto lavanda vista giardino",
      "vacation rental lavanda calabria",
      "appartamento tranquillo capopiccolo",
      "booking lavanda villa olimpia",
      "airbnb lavanda isola capo rizzuto"
    ],
    seoContent: `L'appartamento Lavanda è un appartamento di 45 mq situato al piano terra di Villa Olimpia, posizionato a fianco di Giglio. Questo appartamento può ospitare fino a 4 persone ed è dotato di 1 camera da letto e 1 bagno.

L'appartamento Lavanda offre un balcone con vista giardino e una cucina completa, perfetto per chi cerca tranquillità. La posizione laterale garantisce privacy e silenzio.

Situato a Villa Olimpia, Capopiccolo, Isola di Capo Rizzuto. A meno di 100 metri dalla Spiaggia dei Gigli, raggiungibile in 1 minuto a piedi. La posizione tranquilla lo rende ideale per chi cerca relax.

Completamente attrezzato con cucina completa, aria condizionata, WiFi gratuito. Prezzo a partire da €120/notte. Disponibile su Booking.com, Airbnb o prenotazione diretta.`,
    bookingKeywords: [
      "Lavanda Villa Olimpia Booking",
      "quiet apartment Booking.com",
      "garden view Capopiccolo Booking"
    ],
    airbnbKeywords: [
      "Lavanda Villa Olimpia Airbnb",
      "quiet apartment Airbnb",
      "garden view Calabria Airbnb"
    ]
  },
  7: {
    id: 7,
    name: "Geranio",
    seoTitle: "Appartamento Premium Geranio Villa Olimpia - 6 Ospiti | Terrazza Panoramica 180° | Primo Piano",
    seoDescription: "Appartamento Premium Geranio 65 mq, terrazza panoramica vista mare 180°, 6 ospiti, 2 camere, 2 bagni. Villa Olimpia Capopiccolo. Booking.com e Airbnb.",
    seoKeywords: [
      "appartamento geranio villa olimpia",
      "appartamento premium geranio",
      "affitto geranio 6 ospiti",
      "terrazza panoramica 180 gradi capopiccolo",
      "appartamento più grande villa olimpia",
      "booking geranio villa olimpia",
      "airbnb geranio calabria",
      "luxury apartment 6 guests isola capo rizzuto"
    ],
    seoContent: `L'appartamento Geranio è l'appartamento più grande e prestigioso di Villa Olimpia, situato al primo piano a sinistra. Con 65 mq di superficie, questo appartamento premium può ospitare comodamente fino a 6 persone ed è dotato di 2 camere da letto e 2 bagni.

La caratteristica principale dell'appartamento Geranio è la terrazza panoramica che offre una vista mozzafiato a 180° sul mare Ionio. Il soggiorno ampio e i doppi servizi garantiscono massimo comfort e privacy, rendendolo perfetto per famiglie o gruppi di amici.

Situato a Villa Olimpia, nella splendida località di Capopiccolo, Isola di Capo Rizzuto, nell'Area Marina Protetta Capo Rizzuto. L'appartamento si trova a meno di 100 metri dalla Spiaggia dei Gigli, una delle spiagge più belle della Calabria.

L'appartamento Geranio è completamente attrezzato con soggiorno ampio, cucina moderna, doppi servizi, aria condizionata in tutte le stanze, WiFi gratuito ad alta velocità. La terrazza panoramica è arredata e ideale per cene all'aperto con vista mare.

Disponibile per prenotazioni su Booking.com, Airbnb o direttamente tramite il sito ufficiale. Prezzo a partire da €200/notte. Check-in dalle 15:00, check-out entro le 10:00. Questo appartamento premium è uno dei più richiesti per la sua posizione e le sue caratteristiche uniche.`,
    bookingKeywords: [
      "Geranio Villa Olimpia Booking",
      "premium apartment 6 guests Booking.com",
      "panoramic terrace 180 degrees Booking",
      "largest apartment Capopiccolo Booking"
    ],
    airbnbKeywords: [
      "Geranio Villa Olimpia Airbnb",
      "premium apartment 6 guests Airbnb",
      "panoramic terrace 180 degrees Airbnb",
      "luxury apartment Calabria Airbnb"
    ]
  },
  8: {
    id: 8,
    name: "Gardenia",
    seoTitle: "Appartamento Gardenia Villa Olimpia - 4 Ospiti | Balcone Vista Mare | Primo Piano",
    seoDescription: "Appartamento Gardenia 52 mq, balcone vista mare, zona living spaziosa, 4 ospiti. Villa Olimpia Capopiccolo Primo Piano. Booking.com e Airbnb.",
    seoKeywords: [
      "appartamento gardenia villa olimpia",
      "affitto gardenia primo piano",
      "vacation rental gardenia calabria",
      "balcone vista mare capopiccolo",
      "booking gardenia villa olimpia",
      "airbnb gardenia isola capo rizzuto"
    ],
    seoContent: `L'appartamento Gardenia è un appartamento di 52 mq situato al centro del primo piano di Villa Olimpia. Questo appartamento può ospitare fino a 4 persone ed è dotato di 1 camera da letto e 1 bagno.

L'appartamento Gardenia offre un balcone con vista mare e una zona living spaziosa, ideale per coppie o piccole famiglie. La posizione centrale garantisce facile accesso a tutti i servizi e una vista panoramica sul mare.

Situato a Villa Olimpia, Capopiccolo, Isola di Capo Rizzuto. A meno di 100 metri dalla Spiaggia dei Gigli, raggiungibile in 1 minuto a piedi. La posizione elevata al primo piano offre una vista migliore sul mare e sulla costa.

Completamente attrezzato con zona living, cucina attrezzata, aria condizionata, WiFi gratuito. Prezzo a partire da €150/notte. Disponibile su Booking.com, Airbnb o prenotazione diretta.`,
    bookingKeywords: [
      "Gardenia Villa Olimpia Booking",
      "first floor apartment Booking.com",
      "sea view balcony Capopiccolo Booking"
    ],
    airbnbKeywords: [
      "Gardenia Villa Olimpia Airbnb",
      "first floor apartment Airbnb",
      "sea view balcony Calabria Airbnb"
    ]
  },
  9: {
    id: 9,
    name: "Azalea",
    seoTitle: "Appartamento Azalea Villa Olimpia - 4 Ospiti | Terrazza Privata Vista Panoramica | Primo Piano",
    seoDescription: "Appartamento Azalea 50 mq, terrazza privata vista panoramica, design moderno, 4 ospiti. Villa Olimpia Capopiccolo Primo Piano. Booking.com e Airbnb.",
    seoKeywords: [
      "appartamento azalea villa olimpia",
      "affitto azalea terrazza panoramica",
      "vacation rental azalea calabria",
      "design moderno capopiccolo",
      "booking azalea villa olimpia",
      "airbnb azalea isola capo rizzuto"
    ],
    seoContent: `L'appartamento Azalea è un appartamento moderno di 50 mq situato a destra al primo piano di Villa Olimpia. Questo appartamento può ospitare fino a 4 persone ed è dotato di 1 camera da letto e 1 bagno.

L'appartamento Azalea offre una terrazza privata con vista panoramica e un design moderno, perfetto per chi cerca eleganza e comfort. La posizione elevata garantisce una vista spettacolare sul mare e sulla costa calabrese.

Situato a Villa Olimpia, Capopiccolo, Isola di Capo Rizzuto. A meno di 100 metri dalla Spiaggia dei Gigli, raggiungibile in 1 minuto a piedi. La terrazza privata è il punto forte di questo appartamento, ideale per colazioni e cene al tramonto.

Completamente attrezzato con design moderno, aria condizionata, WiFi gratuito. Prezzo a partire da €145/notte. Disponibile su Booking.com, Airbnb o prenotazione diretta.`,
    bookingKeywords: [
      "Azalea Villa Olimpia Booking",
      "modern design apartment Booking.com",
      "panoramic terrace Capopiccolo Booking"
    ],
    airbnbKeywords: [
      "Azalea Villa Olimpia Airbnb",
      "modern design apartment Airbnb",
      "panoramic terrace Calabria Airbnb"
    ]
  }
}

export function getApartmentSEO(apartmentId: number): ApartmentSEO | undefined {
  return apartmentsSEO[apartmentId]
}


