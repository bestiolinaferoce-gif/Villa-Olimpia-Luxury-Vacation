// Contenuti specifici per ogni appartamento - Hospitality Copywriting

export interface ApartmentContent {
  shortDescription: string
  fullPremiumDescription: string
  featureBullets: string[]
  perfectFor: string[]
  seoParagraph: string
  technicalSummary: {
    capacity: string
    rooms: string
    bathrooms: string
    outdoorArea: string
    floor: string
  }
}

export const apartmentContent: Record<number, ApartmentContent> = {
  1: {
    // FRANGIPANE - 45 mq, 6 ospiti, 2 camere, 1 bagno, piano terra
    shortDescription: "Frangipane Villa Olimpia: 45 mq, 6 ospiti, 2 camere matrimoniali, veranda privata e cucina completa. Unico al piano terra con doppia camera doppia. A 100 m dalla Spiaggia dei Gigli, Capopiccolo Isola di Capo Rizzuto.",
    fullPremiumDescription: `Frangipane è il lodge più spazioso di Villa Olimpia a Capopiccolo, Isola di Capo Rizzuto: 45 mq al piano terra in posizione bassa sinistra.

Con due camere matrimoniali reali (unica unità al piano terra con doppia camera doppia), zona living ampia con divano letto matrimoniale, cucina completa e veranda privata arredata con vista giardino, ospita comodamente fino a 6 persone.

La veranda è ideale per colazioni e cene all'aperto; accesso diretto alla piscina condivisa, parcheggio e aree comuni.

A 100 metri dalla Spiaggia dei Gigli, nell'Area Marina Protetta Capo Rizzuto, Calabria. WiFi, aria condizionata, biancheria e prodotti bagno inclusi. Prenotazione diretta, Booking.com e Airbnb.`,
    featureBullets: [
      "Due camere matrimoniali reali (unico al piano terra)",
      "Veranda privata arredata con vista giardino",
      "Fino a 6 ospiti: ideale per famiglie e gruppi",
      "Cucina completa con elettrodomestici moderni",
      "Divano letto matrimoniale in living",
      "Aria condizionata, WiFi gratuito, TV Smart",
      "Accesso diretto alla piscina condivisa",
      "100 m dalla Spiaggia dei Gigli - Area Marina Protetta Capo Rizzuto"
    ],
    perfectFor: [
      "Famiglie fino a 6 persone",
      "Due coppie in vacanza insieme",
      "Gruppi di amici",
      "Soggiorni medio-lunghi a Capo Rizzuto"
    ],
    seoParagraph: "L'appartamento Frangipane di Villa Olimpia a Capopiccolo, Isola di Capo Rizzuto, è la scelta ideale per chi cerca appartamenti con piscina in Calabria vicino al mare. Con 45 mq, due camere matrimoniali e veranda privata, ospita fino a 6 persone. Vicinanza alla Spiaggia dei Gigli e all'Area Marina Protetta, dotazioni moderne, biancheria inclusa. Perfetto per famiglie e gruppi: prenotazione diretta, Booking.com e Airbnb. Indicizzazione ottimale per parole chiave: appartamento Capo Rizzuto, villa piscina Calabria, vacanza Isola di Capo Rizzuto.",
    technicalSummary: {
      capacity: "6",
      rooms: "2 matrimoniali",
      bathrooms: "1",
      outdoorArea: "Veranda privata",
      floor: "Terra"
    }
  },
  2: {
    // FIORDALISO - 50 mq, 4 ospiti, 1 camera, 1 bagno, balcone vista piscina
    shortDescription: "Fiordaliso: 50 mq al piano terra con balcone vista piscina, camera matrimoniale e divano letto. Fino a 4 ospiti. Villa Olimpia Capopiccolo, Spiaggia dei Gigli a 100 m.",
    fullPremiumDescription: `Fiordaliso è un appartamento di 50 mq al piano terra di Villa Olimpia, in posizione sinistra a Capopiccolo, Isola di Capo Rizzuto.

Ospita fino a 4 persone con 1 camera matrimoniale, zona living con divano letto e 1 bagno. Il balcone con vista diretta sulla piscina è il punto forte: relax in acqua a pochi passi.

Cucina attrezzata, aria condizionata, WiFi, TV Smart; accesso a piscina condivisa, giardino e area barbecue. A meno di 100 m dalla Spiaggia dei Gigli, Area Marina Protetta Capo Rizzuto. Vacanza mare Calabria con tutti i comfort.`,
    featureBullets: [
      "Balcone con vista diretta sulla piscina",
      "Camera matrimoniale e divano letto (4 posti)",
      "Zona living luminosa",
      "Cucina attrezzata completa",
      "Bagno moderno con doccia",
      "Piscina, giardino e area barbecue condivisi",
      "Aria condizionata, WiFi, TV Smart",
      "100 m dalla Spiaggia dei Gigli - Capo Rizzuto"
    ],
    perfectFor: [
      "Coppie",
      "Famiglie 2+2",
      "Chi ama avere la piscina sotto gli occhi"
    ],
    seoParagraph: "Fiordaliso è un appartamento vacanze 50 mq a Capopiccolo, Isola di Capo Rizzuto: villa con piscina in Calabria vicino al mare. Balcone vista piscina, camera matrimoniale, cucina attrezzata; ideale per coppie e famiglie 2+2. A 100 m dalla Spiaggia dei Gigli e dall'Area Marina Protetta. Keywords: appartamento vista piscina Capo Rizzuto, vacanza Calabria mare, prenotazione Villa Olimpia.",
    technicalSummary: {
      capacity: "4",
      rooms: "1 matrimoniale",
      bathrooms: "1",
      outdoorArea: "Balcone vista piscina",
      floor: "Terra"
    }
  },
  3: {
    // ORCHIDEA - 48 mq, 4 ospiti, 1 camera, 1 bagno, terrazza vista mare
    shortDescription: "Orchidea: 48 mq con terrazza panoramica vista mare Ionio, camera matrimoniale, zona living e bagno completo. Fino a 4 ospiti. Villa Olimpia Capopiccolo, Spiaggia dei Gigli a meno di 100 m.",
    fullPremiumDescription: `Orchidea è un appartamento di 48 mq al piano terra di Villa Olimpia, in posizione alta a destra a Capopiccolo, Isola di Capo Rizzuto.

Ospita fino a 4 persone con 1 camera matrimoniale, zona living con divano letto, cucina completa e 1 bagno completo.

La terrazza panoramica regala vista sul mare Ionio e sulla costa calabrese; accesso a piscina e giardino condivisi. A 100 m dalla Spiaggia dei Gigli, Area Marina Protetta Capo Rizzuto. Appartamento vista mare Calabria con indicizzazione SEO ideale.`,
    featureBullets: [
      "Terrazza panoramica con vista mare Ionio",
      "Bagno completo",
      "Camera matrimoniale e divano letto",
      "Zona living spaziosa e luminosa",
      "Cucina completa attrezzata",
      "Piscina e giardino condivisi",
      "Ideale per coppie e famiglie 2+2",
      "100 m dalla Spiaggia dei Gigli - Area Marina Protetta"
    ],
    perfectFor: [
      "Coppie che cercano comfort extra",
      "Famiglie 2+2",
      "Soggiorni vista mare a Capo Rizzuto"
    ],
    seoParagraph: "Orchidea è un appartamento vacanze 48 mq con terrazza vista mare a Capopiccolo, Isola di Capo Rizzuto. Camera matrimoniale, zona living con divano letto, cucina attrezzata e 1 bagno completo: villa con piscina in Calabria ideale per coppie e famiglie. A meno di 100 m dalla Spiaggia dei Gigli. Keywords: appartamento vista mare Capo Rizzuto, terrazza panoramica Calabria, vacanza Isola di Capo Rizzuto.",
    technicalSummary: {
      capacity: "4",
      rooms: "1 matrimoniale",
      bathrooms: "1",
      outdoorArea: "Terrazza panoramica",
      floor: "Terra"
    }
  },
  4: {
    // TULIPANO - 47 mq, 4 ospiti, 1 camera, 1 bagno, accesso giardino e patio
    shortDescription: "Tulipano: 47 mq con accesso diretto al giardino, patio privato e vista piscina. Camera matrimoniale e divano letto, 4 ospiti. Ideale per famiglie con bambini. Villa Olimpia Capopiccolo, Spiaggia dei Gigli a 100 m.",
    fullPremiumDescription: `Tulipano è un appartamento di 47 mq al piano terra di Villa Olimpia, in posizione centro-destra a Capopiccolo, Isola di Capo Rizzuto.

Ospita fino a 4 persone con 1 camera matrimoniale, zona living con divano letto, cucina completa e 1 bagno. Accesso diretto al giardino e patio privato con vista sulla piscina: spazio sicuro per bambini e relax all'aperto.

Posizione centrale per comodo accesso a piscina e aree comuni. A 100 m dalla Spiaggia dei Gigli, Area Marina Protetta Capo Rizzuto. Appartamento famiglia Calabria vicino al mare.`,
    featureBullets: [
      "Accesso diretto al giardino",
      "Patio privato con vista piscina",
      "Camera matrimoniale e divano letto",
      "Cucina completa attrezzata",
      "Zona living confortevole",
      "Ideale per famiglie con bambini",
      "Spazi esterni sicuri",
      "100 m dalla Spiaggia dei Gigli"
    ],
    perfectFor: [
      "Famiglie con bambini",
      "Coppie",
      "Soggiorni week-end o settimanali"
    ],
    seoParagraph: "Tulipano è un appartamento vacanze 47 mq con giardino a Capopiccolo, Isola di Capo Rizzuto. Patio privato, vista piscina e cucina completa: villa con piscina in Calabria ideale per famiglie. A 100 m dalla Spiaggia dei Gigli e Area Marina Protetta. Keywords: appartamento famiglia Capo Rizzuto, vacanza bambini Calabria, villa giardino Isola di Capo Rizzuto.",
    technicalSummary: {
      capacity: "4",
      rooms: "1 matrimoniale",
      bathrooms: "1",
      outdoorArea: "Patio privato + giardino",
      floor: "Terra"
    }
  },
  5: {
    // GIGLIO - 46 mq, 6 ospiti, 2 camere (matrimoniale + letto da una piazza e mezza), 1 bagno
    shortDescription: "Giglio: 46 mq con camera matrimoniale, camera con letto da una piazza e mezza e divano letto. Fino a 6 ospiti. Perfetto per famiglie. Villa Olimpia Capopiccolo, Spiaggia dei Gigli a meno di 100 m.",
    fullPremiumDescription: `Giglio è un appartamento di 46 mq al piano terra di Villa Olimpia, in posizione basso-destra a Capopiccolo, Isola di Capo Rizzuto.

Ospita fino a 6 persone con una camera matrimoniale, una camera con letto da una piazza e mezza e divano letto matrimoniale in living. Cucina moderna completa, 1 bagno, aria condizionata, WiFi, TV Smart.

Zona living spaziosa; posizione tranquilla con accesso a gazebo e patio esterno. Ideale per famiglie numerose o gruppi di amici. Piscina condivisa e giardino. A 100 m dalla Spiaggia dei Gigli, Area Marina Protetta Capo Rizzuto. Vacanza Calabria con piscina e mare a un minuto a piedi.`,
    featureBullets: [
      "Camera matrimoniale + camera con letto da una piazza e mezza",
      "Divano letto matrimoniale in living",
      "Cucina moderna completa",
      "Gazebo e patio esterno",
      "Fino a 6 ospiti: famiglie e gruppi",
      "Piscina e giardino condivisi",
      "Aria condizionata, WiFi, TV Smart",
      "100 m dalla Spiaggia dei Gigli"
    ],
    perfectFor: [
      "Famiglie con bambini",
      "Gruppi piccoli",
      "Soggiorni medio-lunghi a Capo Rizzuto"
    ],
    seoParagraph: "Giglio è un appartamento vacanze per 6 persone a Capopiccolo, Isola di Capo Rizzuto. Camera matrimoniale, camera con letto da una piazza e mezza e divano letto in living, con cucina moderna: villa con piscina in Calabria ideale per famiglie. A meno di 100 m dalla Spiaggia dei Gigli. Keywords: appartamento 6 posti Capo Rizzuto, vacanza famiglia Calabria, villa piscina Isola di Capo Rizzuto.",
    technicalSummary: {
      capacity: "6",
      rooms: "Matrimoniale + una piazza e mezza",
      bathrooms: "1",
      outdoorArea: "Gazebo e patio",
      floor: "Terra"
    }
  },
  6: {
    // LAVANDA - 45 mq, 4 ospiti, 1 camera, 1 bagno, veranda/portico
    shortDescription: "Lavanda: 45 mq con veranda e portico privati, vista giardino. Camera matrimoniale e divano letto, 4 ospiti. Posizione tranquilla. Villa Olimpia Capopiccolo, Spiaggia dei Gigli a 100 m.",
    fullPremiumDescription: `Lavanda è un lodge tranquillo di 45 mq al piano terra di Villa Olimpia, a fianco di Giglio, Capopiccolo Isola di Capo Rizzuto.

Ospita fino a 4 persone con 1 camera matrimoniale, zona living con divano letto, cucina completa e 1 bagno. Veranda e portico privati con vista giardino: ideali per colazioni e serate in relax.

Posizione laterale e silenziosa, massima privacy. Cucina attrezzata, aria condizionata, WiFi, TV Smart; accesso a piscina e giardino condivisi. A 100 m dalla Spiaggia dei Gigli, Area Marina Protetta Capo Rizzuto. Appartamento vacanze Calabria per coppie e piccole famiglie.`,
    featureBullets: [
      "Veranda e portico privati con vista giardino",
      "Posizione tranquilla e riservata",
      "Camera matrimoniale e divano letto",
      "Cucina completa attrezzata",
      "Zona living accogliente",
      "Perfetto per coppie e piccole famiglie",
      "Privacy e silenzio",
      "100 m dalla Spiaggia dei Gigli"
    ],
    perfectFor: [
      "Coppie",
      "Famiglie con 1–2 bambini"
    ],
    seoParagraph: "Lavanda è un appartamento vacanze 45 mq a Capopiccolo, Isola di Capo Rizzuto. Veranda e portico privati, comfort moderni e accesso alla piscina: case vacanze Calabria vicino al mare. A 100 m dalla Spiaggia dei Gigli. Keywords: appartamento tranquillo Capo Rizzuto, veranda vista giardino Calabria, Villa Olimpia prenotazione.",
    technicalSummary: {
      capacity: "4",
      rooms: "1 matrimoniale",
      bathrooms: "1",
      outdoorArea: "Veranda e portico",
      floor: "Terra"
    }
  },
  7: {
    // GERANIO - 65 mq, 6 ospiti, 2 camere, 2 bagni, primo piano, 2 balconcini semipanoramici
    shortDescription: "Geranio: 65 mq premium, primo piano. 2 camere, 2 bagni, 2 balconcini semipanoramici arredati. Fino a 6 ospiti. Il più completo di Villa Olimpia. Capopiccolo, Spiaggia dei Gigli a 100 m.",
    fullPremiumDescription: `Geranio è l'appartamento più grande e prestigioso di Villa Olimpia: 65 mq al primo piano, sinistra, a Capopiccolo, Isola di Capo Rizzuto.

Ospita fino a 6 persone con 2 camere da letto climatizzate, 2 bagni completi (uno in camera), cabina armadio, soggiorno ampio con divano letto e cucina moderna. I 2 balconcini semipanoramici arredati sono il punto forte: colazioni, pranzi e cene all'aperto con vista sul giardino.

Biancheria e prodotti bagno premium; TV Smart, WiFi, aria condizionata in tutte le stanze. Ideale per famiglie numerose e gruppi. A 100 m dalla Spiaggia dei Gigli, Area Marina Protetta Capo Rizzuto. Appartamento di lusso Calabria con piscina.`,
    featureBullets: [
      "Due balconcini semipanoramici arredati",
      "Due camere da letto climatizzate",
      "Due bagni completi (uno in camera)",
      "Cabina armadio",
      "Soggiorno ampio con divano letto",
      "Cucina moderna attrezzata",
      "Comfort premium per 6 persone",
      "100 m dalla Spiaggia dei Gigli"
    ],
    perfectFor: [
      "Famiglie numerose",
      "Gruppi di amici",
      "Soggiorni premium a Capo Rizzuto"
    ],
    seoParagraph: "Geranio è l'appartamento premium di Villa Olimpia a Capopiccolo, Isola di Capo Rizzuto: 65 mq, 2 camere, 2 bagni, cabina armadio e 2 balconcini semipanoramici arredati. Villa con piscina in Calabria ideale per 6 persone. A 100 m dalla Spiaggia dei Gigli. Keywords: appartamento premium Capo Rizzuto, balconcini semipanoramici Calabria, luxury Villa Olimpia, Booking Airbnb.",
    technicalSummary: {
      capacity: "6",
      rooms: "2 da letto",
      bathrooms: "2",
      outdoorArea: "2 balconcini semipanoramici",
      floor: "Primo"
    }
  },
  8: {
    // GARDENIA - 52 mq, 4 ospiti, 1 camera, 1 bagno, primo piano centro
    shortDescription: "Gardenia: 52 mq al primo piano, balcone vista mare Ionio. Camera matrimoniale e divano letto, 4 ospiti. Villa Olimpia Capopiccolo, Spiaggia dei Gigli a 100 m.",
    fullPremiumDescription: `Gardenia è un appartamento di 52 mq al centro del primo piano di Villa Olimpia, Capopiccolo, Isola di Capo Rizzuto.

Ospita fino a 4 persone con 1 camera matrimoniale, zona living con divano letto, cucina attrezzata e 1 bagno. Il balcone con vista mare Ionio illumina gli ambienti e regala tramonti sul golfo.

Living spazioso e luminoso; accesso a piscina condivisa, giardino e area barbecue. A 100 m dalla Spiaggia dei Gigli, Area Marina Protetta Capo Rizzuto. Appartamento primo piano Calabria con vista mare per coppie e famiglie 2+2.`,
    featureBullets: [
      "Balcone con vista mare Ionio",
      "Camera matrimoniale e divano letto",
      "Zona living spaziosa e luminosa",
      "Cucina attrezzata completa",
      "Bagno moderno con doccia",
      "Piscina, giardino e barbecue condivisi",
      "Primo piano: vista privilegiata",
      "100 m dalla Spiaggia dei Gigli"
    ],
    perfectFor: [
      "Coppie",
      "Famiglie 2+2",
      "Chi cerca tranquillità vista mare"
    ],
    seoParagraph: "Gardenia è un appartamento vacanze 52 mq al primo piano di Villa Olimpia, Capopiccolo. Balcone vista mare e accesso a piscina e giardino: villa con piscina in Calabria vicino alla Spiaggia dei Gigli. Keywords: appartamento primo piano Capo Rizzuto, balcone vista mare Calabria, Isola di Capo Rizzuto vacanza.",
    technicalSummary: {
      capacity: "4",
      rooms: "1 matrimoniale",
      bathrooms: "1",
      outdoorArea: "Balcone vista mare",
      floor: "Primo"
    }
  },
  9: {
    // AZALEA - 50 mq, 4 ospiti, 1 camera, 1 bagno, primo piano, terrazza panoramica
    shortDescription: "Azalea: 50 mq al primo piano con terrazza privata panoramica e vista mare. Design moderno, 4 ospiti. Ideale per coppie e famiglie 2+2. Villa Olimpia Capopiccolo, Spiaggia dei Gigli a 100 m.",
    fullPremiumDescription: `Azalea è un appartamento moderno di 50 mq a destra al primo piano di Villa Olimpia, Capopiccolo, Isola di Capo Rizzuto.

Ospita fino a 4 persone con 1 camera matrimoniale, zona living con divano letto, cucina completa e 1 bagno. La terrazza privata panoramica è il punto forte: vista sul mare Ionio e sulla costa calabrese, perfetta per colazioni e cene al tramonto.

Arredi eleganti e design curato; cucina con elettrodomestici moderni. Accesso a piscina e giardino condivisi. A 100 m dalla Spiaggia dei Gigli, Area Marina Protetta Capo Rizzuto. Appartamento vista mare Calabria con terrazza, SEO ottimizzato per prenotazioni dirette e OTA.`,
    featureBullets: [
      "Terrazza privata panoramica vista mare",
      "Design moderno e arredi eleganti",
      "Camera matrimoniale e divano letto",
      "Cucina completa attrezzata",
      "Zona living luminosa",
      "Perfetto per coppie e famiglie 2+2",
      "Piscina e giardino condivisi",
      "100 m dalla Spiaggia dei Gigli"
    ],
    perfectFor: [
      "Coppie romantiche",
      "Famiglie 2+2",
      "Soggiorni lunghi vista mare"
    ],
    seoParagraph: "Azalea è un appartamento vacanze 50 mq con terrazza panoramica a Capopiccolo, Isola di Capo Rizzuto. Vista mare, design moderno e piscina: villa con piscina in Calabria ideale per coppie e famiglie. A 100 m dalla Spiaggia dei Gigli. Keywords: terrazza vista mare Capo Rizzuto, appartamento moderno Calabria, Villa Olimpia prenotazione diretta.",
    technicalSummary: {
      capacity: "4",
      rooms: "1 matrimoniale",
      bathrooms: "1",
      outdoorArea: "Terrazza panoramica",
      floor: "Primo"
    }
  }
}

export function getApartmentContent(apartmentId: number): ApartmentContent | undefined {
  return apartmentContent[apartmentId]
}
