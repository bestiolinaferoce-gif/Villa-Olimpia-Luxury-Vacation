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
    seoTitle: "Appartamento Frangipane Villa Olimpia - 6 Ospiti | 2 Camere | Piano Terra | Capo Piccolo",
    seoDescription: "Appartamento Frangipane a Villa Olimpia, Capo Piccolo. 45 mq, 6 ospiti, 2 camere, veranda privata vista giardino. A pochi passi dalla Spiaggia dei Gigli. Disponibile su Booking.com e Airbnb.",
    seoKeywords: [
      "appartamento frangipane villa olimpia",
      "affitto frangipane capopiccolo",
      "vacation rental frangipane isola capo rizzuto",
      "appartamento 6 ospiti capopiccolo",
      "terrazza privata vista giardino calabria",
      "booking frangipane villa olimpia",
      "airbnb frangipane calabria",
      "villa piscina capo rizzuto 6 posti"
    ],
    seoContent: `L'appartamento Frangipane di Villa Olimpia è un lodge di 45 mq al piano terra, in posizione bassa sinistra a Capopiccolo, Isola di Capo Rizzuto. Ospita fino a 6 persone con 2 camere matrimoniali reali (unica unità al piano terra con doppia camera doppia), zona living con divano letto, cucina completa e 1 bagno.

La veranda privata con vista giardino è ideale per colazioni e cene all'aperto. Accesso diretto alla piscina condivisa, parcheggio e aree comuni. A 100 metri dalla Spiaggia dei Gigli, nell'Area Marina Protetta Capo Rizzuto, Calabria.

Completamente attrezzato: cucina, aria condizionata, WiFi, TV Smart, biancheria e prodotti bagno. Prenotazione diretta, Booking.com e Airbnb. Prezzo da €120/notte. Check-in 15:00, check-out 10:00. Indicizzazione ottimale per appartamento Capo Rizzuto, villa piscina Calabria, vacanza Isola di Capo Rizzuto.`,
    bookingKeywords: [
      "Frangipane Villa Olimpia Booking",
      "appartamento 6 posti Capopiccolo Booking.com",
      "vacation rental Isola Capo Rizzuto Booking",
      "6 guests apartment Calabria Booking"
    ],
    airbnbKeywords: [
      "Frangipane Villa Olimpia Airbnb",
      "apartment 6 guests Capopiccolo Airbnb",
      "Calabria vacation rental Airbnb",
      "6 guests apartment Airbnb Calabria"
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
    seoContent: `L'appartamento Fiordaliso è un luminoso appartamento di 50 mq al piano terra di Villa Olimpia, in posizione sinistra a Capopiccolo, Isola di Capo Rizzuto. Ospita fino a 4 persone con 1 camera matrimoniale, zona living con divano letto e 1 bagno.

Il balcone con vista diretta sulla piscina è il punto forte: relax in acqua a pochi passi. Cucina attrezzata, aria condizionata, WiFi, TV Smart; accesso a piscina condivisa, giardino e area barbecue.

A meno di 100 m dalla Spiaggia dei Gigli, Area Marina Protetta Capo Rizzuto. Prezzo da €130/notte. Booking.com, Airbnb e prenotazione diretta.`,
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
    seoContent: `L'appartamento Orchidea di Villa Olimpia è un alloggio di 48 mq al piano terra, in posizione alta a destra a Capopiccolo, Isola di Capo Rizzuto. Ospita fino a 4 persone con 1 camera matrimoniale, zona living con divano letto, cucina completa e 1 bagno completo.

La terrazza panoramica offre vista sul mare Ionio e sulla costa calabrese. Zona living spaziosa e luminosa; accesso a piscina e giardino condivisi. A 100 metri dalla Spiaggia dei Gigli, Area Marina Protetta Capo Rizzuto.

Completamente attrezzato: cucina, aria condizionata, WiFi, TV Smart. Prezzo da €140/notte. Booking.com, Airbnb e prenotazione diretta. Keywords: appartamento vista mare Capo Rizzuto, terrazza panoramica Calabria, vacanza Isola di Capo Rizzuto.`,
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
    seoContent: `L'appartamento Tulipano è un appartamento di 47 mq al piano terra di Villa Olimpia, in posizione centro-destra a Capopiccolo, Isola di Capo Rizzuto. Ospita fino a 4 persone con 1 camera matrimoniale, zona living con divano letto, cucina completa e 1 bagno.

Accesso diretto al giardino e patio privato con vista sulla piscina: spazio sicuro per bambini e relax all'aperto. Posizione centrale per comodo accesso a piscina e aree comuni. A 100 m dalla Spiaggia dei Gigli, Area Marina Protetta Capo Rizzuto.

Cucina completa, aria condizionata, WiFi, TV Smart. Prezzo da €125/notte. Booking.com, Airbnb e prenotazione diretta.`,
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
    seoTitle: "Appartamento Giglio Villa Olimpia - 6 Ospiti | 2 Camere | Piano Terra | Capo Piccolo",
    seoDescription: "Appartamento Giglio 46 mq, camera matrimoniale + camera con letto da una piazza e mezza, cucina moderna, fino a 6 ospiti. Villa Olimpia Capo Piccolo. Booking.com e Airbnb disponibile.",
    seoKeywords: [
      "appartamento giglio villa olimpia",
      "affitto giglio 6 posti capopiccolo",
      "vacation rental giglio calabria",
      "appartamento 6 posti famiglia capopiccolo",
      "booking giglio villa olimpia",
      "airbnb giglio isola capo rizzuto"
    ],
    seoContent: `L'appartamento Giglio di Villa Olimpia è un alloggio di 46 mq al piano terra, in posizione basso-destra a Capopiccolo, Isola di Capo Rizzuto. Ospita fino a 6 persone con camera matrimoniale, camera con letto da una piazza e mezza, divano letto in living, cucina moderna completa e 1 bagno.

Zona living spaziosa; accesso a gazebo e patio esterno. Ideale per famiglie numerose e gruppi. Piscina condivisa e giardino. A 100 metri dalla Spiaggia dei Gigli, Area Marina Protetta Capo Rizzuto. Vacanza Calabria con piscina e mare a un minuto a piedi.

Cucina moderna, aria condizionata, WiFi, TV Smart. Prezzo da €135/notte. Booking.com, Airbnb e prenotazione diretta. Keywords: appartamento 6 posti Capo Rizzuto, vacanza famiglia Calabria, villa piscina Isola di Capo Rizzuto.`,
    bookingKeywords: [
      "Giglio Villa Olimpia Booking",
      "6 guests apartment Booking.com",
      "family apartment Capopiccolo Booking"
    ],
    airbnbKeywords: [
      "Giglio Villa Olimpia Airbnb",
      "6 guests apartment Airbnb",
      "family Calabria Airbnb"
    ]
  },
  6: {
    id: 6,
    name: "Lavanda",
    seoTitle: "Appartamento Lavanda Villa Olimpia - 4 Ospiti | Veranda e Portico Privati | Capopiccolo",
    seoDescription: "Appartamento Lavanda 45 mq, veranda e portico privati vista giardino, 4 ospiti. Villa Olimpia Capopiccolo. Posizione tranquilla. Booking.com e Airbnb.",
    seoKeywords: [
      "appartamento lavanda villa olimpia",
      "affitto lavanda vista giardino",
      "vacation rental lavanda calabria",
      "appartamento tranquillo capopiccolo",
      "booking lavanda villa olimpia",
      "airbnb lavanda isola capo rizzuto"
    ],
    seoContent: `L'appartamento Lavanda è un lodge di 45 mq al piano terra di Villa Olimpia, a fianco di Giglio, Capopiccolo Isola di Capo Rizzuto. Ospita fino a 4 persone con 1 camera matrimoniale, zona living con divano letto, cucina completa e 1 bagno.

Veranda e portico privati con vista giardino: ideali per colazioni e serate in relax. Posizione laterale e silenziosa, massima privacy. Accesso a piscina e giardino condivisi. A 100 m dalla Spiaggia dei Gigli, Area Marina Protetta Capo Rizzuto.

Cucina completa, aria condizionata, WiFi, TV Smart. Prezzo da €120/notte. Booking.com, Airbnb e prenotazione diretta.`,
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
    seoTitle: "Appartamento Premium Geranio Villa Olimpia - 6 Ospiti | 2 Balconcini Semipanoramici | Primo Piano",
    seoDescription: "Appartamento Premium Geranio 65 mq, 2 balconcini semipanoramici arredati, 6 ospiti, 2 camere, 2 bagni. Villa Olimpia Capopiccolo. Booking.com e Airbnb.",
    seoKeywords: [
      "appartamento geranio villa olimpia",
      "appartamento premium geranio",
      "affitto geranio 6 ospiti",
      "balconcini semipanoramici capopiccolo",
      "appartamento più grande villa olimpia",
      "booking geranio villa olimpia",
      "airbnb geranio calabria",
      "luxury apartment 6 guests isola capo rizzuto"
    ],
    seoContent: `L'appartamento Geranio è l'appartamento più grande e prestigioso di Villa Olimpia, situato al primo piano a sinistra. Con 65 mq di superficie, questo appartamento premium può ospitare comodamente fino a 6 persone ed è dotato di 2 camere da letto e 2 bagni.

La caratteristica principale dell'appartamento Geranio sono i 2 balconcini semipanoramici arredati con affaccio sul giardino. Il soggiorno ampio e i doppi servizi garantiscono massimo comfort e privacy, rendendolo perfetto per famiglie o gruppi di amici.

Situato a Villa Olimpia, nella splendida località di Capopiccolo, Isola di Capo Rizzuto, nell'Area Marina Protetta Capo Rizzuto. L'appartamento si trova a meno di 100 metri dalla Spiaggia dei Gigli, una delle spiagge più belle della Calabria.

L'appartamento Geranio è completamente attrezzato con soggiorno ampio, cucina moderna, doppi servizi, aria condizionata in tutte le stanze, WiFi gratuito ad alta velocità. I balconcini arredati sono ideali per colazioni e cene all'aperto.

Disponibile per prenotazioni su Booking.com, Airbnb o direttamente tramite il sito ufficiale. Prezzo a partire da €200/notte. Check-in dalle 15:00, check-out entro le 10:00. Questo appartamento premium è uno dei più richiesti per la sua posizione e le sue caratteristiche uniche.`,
    bookingKeywords: [
      "Geranio Villa Olimpia Booking",
      "premium apartment 6 guests Booking.com",
      "semi-panoramic balconies Booking",
      "largest apartment Capopiccolo Booking"
    ],
    airbnbKeywords: [
      "Geranio Villa Olimpia Airbnb",
      "premium apartment 6 guests Airbnb",
      "semi-panoramic balconies Airbnb",
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
    seoContent: `L'appartamento Gardenia è un appartamento di 52 mq al centro del primo piano di Villa Olimpia, Capopiccolo, Isola di Capo Rizzuto. Ospita fino a 4 persone con 1 camera matrimoniale, zona living con divano letto, cucina attrezzata e 1 bagno.

Il balcone con vista mare Ionio illumina gli ambienti e regala tramonti sul golfo. Living spazioso e luminoso; accesso a piscina condivisa, giardino e area barbecue. A 100 m dalla Spiaggia dei Gigli, Area Marina Protetta Capo Rizzuto.

Cucina attrezzata, aria condizionata, WiFi, TV Smart. Prezzo da €150/notte. Booking.com, Airbnb e prenotazione diretta.`,
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
    seoContent: `L'appartamento Azalea è un appartamento moderno di 50 mq a destra al primo piano di Villa Olimpia, Capopiccolo, Isola di Capo Rizzuto. Ospita fino a 4 persone con 1 camera matrimoniale, zona living con divano letto, cucina completa e 1 bagno.

La terrazza privata panoramica è il punto forte: vista sul mare Ionio e sulla costa calabrese, perfetta per colazioni e cene al tramonto. Arredi eleganti e design curato; accesso a piscina e giardino condivisi. A 100 m dalla Spiaggia dei Gigli, Area Marina Protetta Capo Rizzuto.

Cucina completa, aria condizionata, WiFi, TV Smart. Prezzo da €145/notte. Booking.com, Airbnb e prenotazione diretta.`,
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
