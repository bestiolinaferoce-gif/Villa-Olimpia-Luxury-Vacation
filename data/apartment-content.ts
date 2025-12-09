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
    // FRANGIPANE
    shortDescription: "Frangipane: il lodge più spazioso di Villa Olimpia. Due camere matrimoniali, veranda privata arredata, cucina completa. Perfetto per famiglie fino a 6 persone. A 100 metri dalla Spiaggia dei Gigli, Capopiccolo.",
    fullPremiumDescription: `Frangipane è il lodge più spazioso di Villa Olimpia, situato al piano terra di Capopiccolo, Isola di Capo Rizzuto.

Con due camere matrimoniali reali (unico al piano terra), zona living ampia con divano letto matrimoniale, cucina completa attrezzata e veranda privata arredata con vista giardino, può ospitare comodamente fino a 6 persone.

La veranda privata è ideale per colazioni all'aperto e serate relax. Accesso diretto alla piscina condivisa della villa, alle aree comuni e ai parcheggi.

A 100 metri dalla Spiaggia dei Gigli, nell'Area Marina Protetta Capo Rizzuto, raggiungibile in 1 minuto a piedi. Biancheria fornita e sanificata professionalmente.`,
    featureBullets: [
      "Due camere matrimoniali reali (unico al piano terra)",
      "Veranda privata arredata con vista giardino",
      "Perfetto per famiglie numerose (fino a 6 pax)",
      "Cucina completa con elettrodomestici moderni",
      "Divano letto matrimoniale aggiuntivo",
      "Aria condizionata e WiFi gratuito",
      "Accesso diretto alla piscina condivisa",
      "100 metri dalla Spiaggia dei Gigli - Area Marina Protetta"
    ],
    perfectFor: [
      "Famiglie fino a 6 persone",
      "Due coppie in vacanza insieme",
      "Gruppi di amici",
      "Soggiorni medio-lunghi"
    ],
    seoParagraph: "L'appartamento Frangipane di Villa Olimpia è una soluzione ideale per chi cerca appartamenti con piscina a Capo Rizzuto vicino al mare. Situato nella zona di Capo Piccolo, offre spazi ampi, due camere matrimoniali e una veranda privata perfetta per vivere la Calabria in totale relax. Grazie alla vicinanza alle spiagge, ai servizi e ai principali punti d'interesse dell'Area Marina Protetta, Frangipane rappresenta un lodge perfetto per famiglie e gruppi fino a 6 persone, con dotazioni moderne e biancheria sanificata. Un alloggio completo, confortevole e pensato per soggiorni brevi o prolungati nella costa ionica calabrese.",
    technicalSummary: {
      capacity: "6",
      rooms: "2 matrimoniali",
      bathrooms: "1",
      outdoorArea: "Veranda privata",
      floor: "Terra"
    }
  },
  2: {
    // FIORDALISO
    shortDescription: "Fiordaliso: posizione privilegiata fronte piscina. Camera matrimoniale spaziosa, gazebo privato, cucina completa. Ideale per coppie e famiglie con bambini. A 100 metri dalla Spiaggia dei Gigli, Capopiccolo.",
    fullPremiumDescription: `Fiordaliso si distingue per la sua posizione unica fronte piscina (unica al piano terra) e per la spaziosa camera matrimoniale.

Situato al piano terra di Villa Olimpia, Capopiccolo, può ospitare fino a 4 persone grazie alla grande camera matrimoniale e al divano letto nella zona living.

Dispone di cucina completa, bagno moderno con box doccia e un gazebo privato con tavolo e sedute, perfetto per rilassarsi all'ombra durante le giornate estive.

A 100 metri dalla Spiaggia dei Gigli, nell'Area Marina Protetta Capo Rizzuto. Biancheria fornita e sanificata professionalmente.`,
    featureBullets: [
      "Posizione fronte piscina (unica al piano terra)",
      "Camera matrimoniale molto ampia",
      "Gazebo privato con tavolo e sedute",
      "Cucina completa attrezzata",
      "Bagno moderno con box doccia",
      "Ideale per coppie e famiglie 2+2",
      "Accesso immediato alla piscina condivisa",
      "100 metri dalla Spiaggia dei Gigli - Capo Rizzuto"
    ],
    perfectFor: [
      "Coppie che desiderano comfort",
      "Famiglie 2+2",
      "Chi cerca un lodge fresco e vicino alla piscina"
    ],
    seoParagraph: "Fiordaliso è uno degli appartamenti più richiesti di Villa Olimpia grazie alla sua posizione fronte piscina e alla camera matrimoniale di dimensioni superiori alla media. Ideale per chi cerca appartamenti in Calabria con piscina privata e spazi esterni dedicati, questo lodge offre comfort moderni, gazebo esclusivo, cucina attrezzata e biancheria sanificata. Perfetto per soggiorni estivi, weekend lunghi o vacanze in famiglia vicino al mare di Capo Rizzuto.",
    technicalSummary: {
      capacity: "4",
      rooms: "1 matrimoniale molto ampia",
      bathrooms: "1",
      outdoorArea: "Gazebo privato",
      floor: "Terra"
    }
  },
  3: {
    // GIGLIO
    shortDescription: "Giglio: il lodge più ampio del piano terra. Cucina abitabile grande, cameretta aggiuntiva, gazebo privato. Perfetto per gruppi fino a 6 persone. A 100 metri dalla Spiaggia dei Gigli, Capopiccolo.",
    fullPremiumDescription: `Giglio è il lodge più ampio del piano terra di Villa Olimpia, situato a Capopiccolo, Isola di Capo Rizzuto.

Con una cucina abitabile molto grande (unica al piano terra), zona living spaziosa con tavolo da pranzo, divano letto matrimoniale, cameretta con letto a castello e gazebo privato, può ospitare comodamente fino a 6 persone.

Il gazebo privato è perfetto per pasti all'aperto e relax, mentre la cucina grande permette di preparare pasti per tutta la famiglia o il gruppo.

A 100 metri dalla Spiaggia dei Gigli, nell'Area Marina Protetta Capo Rizzuto. Accesso diretto alla piscina condivisa e biancheria sanificata.`,
    featureBullets: [
      "Cucina abitabile molto grande (unica al piano terra)",
      "Cameretta aggiuntiva con letto a castello",
      "Gazebo privato per pasti all'aperto",
      "Zona living spaziosa con tavolo da pranzo",
      "Perfetto per gruppi fino a 6 persone",
      "Ideale per famiglie numerose",
      "Accesso diretto alla piscina condivisa",
      "100 metri dalla Spiaggia dei Gigli - Area Marina Protetta"
    ],
    perfectFor: [
      "Famiglie numerose",
      "Gruppi di amici",
      "Soggiorni lunghi"
    ],
    seoParagraph: "L'appartamento Giglio è perfetto per chi cerca appartamenti grandi in Calabria per famiglie numerose con cucina abitabile e gazebo privato. Situato a Capo Piccolo, offre ampi spazi interni, due zone notte e accesso alla piscina di Villa Olimpia. Ideale per 6 persone, rappresenta una delle soluzioni più complete e versatili del residence, vicino al mare e ai servizi principali.",
    technicalSummary: {
      capacity: "6",
      rooms: "1 matrimoniale + 1 cameretta",
      bathrooms: "1",
      outdoorArea: "Gazebo privato",
      floor: "Terra"
    }
  },
  4: {
    // ORCHIDEA
    shortDescription: "Orchidea: unico lodge al piano terra con 2 bagni completi. Terrazza panoramica vista mare, camera matrimoniale, cucina completa. Perfetto per coppie che cercano privacy extra. A 100 metri dalla Spiaggia dei Gigli, Capopiccolo.",
    fullPremiumDescription: `Orchidea è l'unico lodge al piano terra di Villa Olimpia con due bagni completi, situato a Capopiccolo, Isola di Capo Rizzuto.

Ospita fino a 4 persone con una camera matrimoniale spaziosa, zona living luminosa con divano letto, cucina completa attrezzata e terrazza panoramica con vista mare Ionio.

I due bagni completi (uno privato in camera) garantiscono massima privacy e comfort, rendendo questo appartamento ideale per coppie e famiglie che desiderano servizi extra.

A 100 metri dalla Spiaggia dei Gigli, nell'Area Marina Protetta Capo Rizzuto. Accesso alla piscina condivisa e biancheria sanificata.`,
    featureBullets: [
      "Due bagni completi (unico al piano terra)",
      "Terrazza panoramica con vista mare Ionio",
      "Camera matrimoniale spaziosa",
      "Zona living luminosa e confortevole",
      "Cucina completa attrezzata",
      "Perfetto per coppie e famiglie 2+2",
      "Privacy e comfort superiori",
      "100 metri dalla Spiaggia dei Gigli - Area Marina Protetta"
    ],
    perfectFor: [
      "Due coppie",
      "Famiglie 2+2",
      "Chi vuole comfort extra"
    ],
    seoParagraph: "Orchidea è uno degli appartamenti più ricercati a Capo Rizzuto per chi desidera un lodge dotato di due bagni, ambienti moderni e cucina attrezzata. Situato a pochi passi dal mare di Capo Piccolo, rappresenta una soluzione perfetta per soggiorni brevi e lunghi in Calabria, con accesso alla piscina e biancheria sanificata.",
    technicalSummary: {
      capacity: "4",
      rooms: "1 matrimoniale",
      bathrooms: "2",
      outdoorArea: "N/A",
      floor: "Terra"
    }
  },
  5: {
    // TULIPANO
    shortDescription: "Tulipano: accesso diretto al giardino privato. Patio privato, vista piscina, cucina completa. Ideale per famiglie con bambini. A 100 metri dalla Spiaggia dei Gigli, Capopiccolo.",
    fullPremiumDescription: `Tulipano è un lodge accogliente al piano terra di Villa Olimpia, Capopiccolo, con accesso diretto al giardino privato.

Pensato per ospitare fino a 4 persone, dispone di camera matrimoniale, zona living con divano letto, cucina completa attrezzata e patio privato con vista piscina.

L'accesso diretto al giardino e il patio privato lo rendono perfetto per famiglie con bambini, offrendo uno spazio sicuro dove i più piccoli possono giocare.

A 100 metri dalla Spiaggia dei Gigli, nell'Area Marina Protetta Capo Rizzuto. Accesso alla piscina condivisa e biancheria sanificata.`,
    featureBullets: [
      "Accesso diretto al giardino privato",
      "Patio privato con vista piscina",
      "Camera matrimoniale confortevole",
      "Cucina completa per tutta la famiglia",
      "Zona living con divano letto",
      "Ideale per famiglie con bambini",
      "Spazio sicuro per i più piccoli",
      "100 metri dalla Spiaggia dei Gigli - Capo Rizzuto"
    ],
    perfectFor: [
      "Coppie",
      "Famiglie con bambini",
      "Soggiorni brevi e week-end"
    ],
    seoParagraph: "Tulipano è uno degli appartamenti più funzionali di Villa Olimpia. Offre un ambiente moderno, veranda privata, cucina completa e accesso alla piscina, perfetto per chi cerca appartamenti in Calabria per 4 persone vicino al mare. La sua posizione strategica lo rende ideale per famiglie e coppie.",
    technicalSummary: {
      capacity: "4",
      rooms: "1",
      bathrooms: "1",
      outdoorArea: "Veranda privata",
      floor: "Terra"
    }
  },
  6: {
    // LAVANDA
    shortDescription: "Lavanda: lodge tranquillo con veranda privata. Vista giardino, cucina completa, ambiente accogliente. Perfetto per coppie che cercano relax. A 100 metri dalla Spiaggia dei Gigli, Capopiccolo.",
    fullPremiumDescription: `Lavanda è un lodge tranquillo e accogliente al piano terra di Villa Olimpia, Capopiccolo, con posizione riservata e silenziosa.

Offre un ambiente caldo e confortevole per fino a 4 ospiti, con camera matrimoniale, zona living con divano letto, cucina completa attrezzata e veranda privata con vista giardino.

La veranda privata consente di godersi gli spazi esterni in totale relax e privacy, rendendolo perfetto per coppie e piccole famiglie che cercano tranquillità.

A 100 metri dalla Spiaggia dei Gigli, nell'Area Marina Protetta Capo Rizzuto. Accesso alla piscina condivisa e biancheria sanificata.`,
    featureBullets: [
      "Veranda privata con vista giardino",
      "Posizione tranquilla e riservata",
      "Camera matrimoniale confortevole",
      "Cucina completa attrezzata",
      "Zona living accogliente",
      "Perfetto per coppie e piccole famiglie",
      "Privacy e silenzio garantiti",
      "100 metri dalla Spiaggia dei Gigli - Capo Rizzuto"
    ],
    perfectFor: [
      "Coppie",
      "Famiglie con 1–2 bambini"
    ],
    seoParagraph: "Lavanda è un appartamento luminoso e ben organizzato a Capo Piccolo. Perfetto per chi cerca case vacanze in Calabria con veranda privata, offre comfort moderni, accesso alla piscina e biancheria sanificata. Ideale per soggiorni rilassanti vicino al mare.",
    technicalSummary: {
      capacity: "4",
      rooms: "1",
      bathrooms: "1",
      outdoorArea: "Veranda privata",
      floor: "Terra"
    }
  },
  7: {
    // AZALEA
    shortDescription: "Azalea: terrazza panoramica spettacolare vista mare. Design moderno, camera matrimoniale, cucina completa. Perfetto per coppie romantiche. A 100 metri dalla Spiaggia dei Gigli, Capopiccolo.",
    fullPremiumDescription: `Azalea è un lodge moderno e elegante al primo piano di Villa Olimpia, Capopiccolo, con terrazza panoramica spettacolare vista mare Ionio.

La terrazza privata arredata è il punto forte di questo appartamento, perfetta per colazioni al tramonto, cene romantiche e momenti di relax con vista mozzafiato sulla costa calabrese.

All'interno troviamo una camera matrimoniale confortevole, zona living luminosa con divano letto, cucina completa con elettrodomestici moderni e design elegante.

Ospita fino a 4 persone con comfort elevato e atmosfera romantica. A 100 metri dalla Spiaggia dei Gigli, nell'Area Marina Protetta Capo Rizzuto.`,
    featureBullets: [
      "Terrazza panoramica spettacolare vista mare Ionio",
      "Design moderno e arredi eleganti",
      "Camera matrimoniale confortevole",
      "Cucina completa con elettrodomestici moderni",
      "Zona living luminosa",
      "Perfetto per coppie romantiche",
      "Tramonti mozzafiato dalla terrazza",
      "100 metri dalla Spiaggia dei Gigli - Area Marina Protetta"
    ],
    perfectFor: [
      "Coppie romantiche",
      "Famiglie 2+2",
      "Soggiorni lunghi"
    ],
    seoParagraph: "Azalea è una delle soluzioni più apprezzate per chi cerca appartamenti con terrazza panoramica in Calabria. Situato al primo piano di Villa Olimpia, offre vista privilegiata, interni moderni, cucina completa e accesso alla piscina. Ideale per vacanze rilassanti nella Costa Ionica.",
    technicalSummary: {
      capacity: "4",
      rooms: "1",
      bathrooms: "1",
      outdoorArea: "Terrazza panoramica",
      floor: "Primo"
    }
  },
  8: {
    // GARDENIA
    shortDescription: "Gardenia: camera con bagno privato, secondo bagno, due balconcini vista mare e piscina. Perfetto per coppie che cercano comfort extra. A 100 metri dalla Spiaggia dei Gigli, Capopiccolo.",
    fullPremiumDescription: `Gardenia è un lodge elegante al primo piano di Villa Olimpia, Capopiccolo, con caratteristiche uniche che lo rendono perfetto per chi cerca comfort extra.

Offre una camera matrimoniale con bagno privato, zona living spaziosa e luminosa con divano letto, secondo bagno completo con doccia e due balconcini: uno con vista giardino e uno con vista piscina.

La combinazione di due bagni e due balconcini offre massima privacy e comfort, rendendo questo appartamento ideale per coppie e famiglie che desiderano servizi superiori.

Può ospitare fino a 4 persone in un ambiente moderno, ben organizzato e molto luminoso. A 100 metri dalla Spiaggia dei Gigli, nell'Area Marina Protetta Capo Rizzuto.`,
    featureBullets: [
      "Camera matrimoniale con bagno privato",
      "Secondo bagno completo con doccia",
      "Due balconcini: vista mare e vista piscina",
      "Zona living spaziosa e luminosa",
      "Cucina attrezzata completa",
      "Perfetto per coppie e famiglie 2+2",
      "Privacy e comfort superiori",
      "100 metri dalla Spiaggia dei Gigli - Area Marina Protetta"
    ],
    perfectFor: [
      "Coppie",
      "Famiglie 2+2",
      "Chi desidera maggiore privacy"
    ],
    seoParagraph: "Gardenia è perfetto per chi cerca un appartamento elegante con due bagni e vista sulle aree verdi e sulla piscina. Ideale per coppie e famiglie, offre dotazioni moderne, posizione privilegiata e biancheria sanificata. Una scelta ottimale per chi vuole comfort e praticità nella zona di Capo Piccolo – Capo Rizzuto.",
    technicalSummary: {
      capacity: "4",
      rooms: "1 matrimoniale",
      bathrooms: "2",
      outdoorArea: "2 balconcini",
      floor: "Primo"
    }
  },
  9: {
    // GERANIO
    shortDescription: "Geranio: il lodge più prestigioso di Villa Olimpia. Terrazza panoramica 180° vista mare, 2 camere matrimoniali, 2 bagni completi. Perfetto per famiglie numerose e gruppi. A 100 metri dalla Spiaggia dei Gigli, Capopiccolo.",
    fullPremiumDescription: `Geranio è il lodge più prestigioso e spazioso di Villa Olimpia, situato al primo piano di Capopiccolo, Isola di Capo Rizzuto.

Con 65 mq di superficie, ospita comodamente fino a 6 persone e dispone di due camere matrimoniali (una con cabina armadio e bagno privato), zona living ampia con divano letto, cucina moderna completamente attrezzata, secondo bagno completo e terrazza panoramica 180° con vista mozzafiato sul mare Ionio.

La terrazza panoramica è il punto forte di questo lodge premium, ideale per colazioni, pranzi e cene all'aperto con vista spettacolare sulla costa calabrese.

Una soluzione ideale per famiglie numerose, due coppie o gruppi che desiderano ampi spazi, comfort superiori e privacy. A 100 metri dalla Spiaggia dei Gigli, nell'Area Marina Protetta Capo Rizzuto.`,
    featureBullets: [
      "Terrazza panoramica 180° vista mare Ionio (unica)",
      "Due camere matrimoniali con cabina armadio",
      "Due bagni completi (uno privato in camera)",
      "Soggiorno ampio e luminoso",
      "Cucina moderna completamente attrezzata",
      "Perfetto per famiglie fino a 6 persone",
      "Comfort e privacy superiori",
      "100 metri dalla Spiaggia dei Gigli - Area Marina Protetta"
    ],
    perfectFor: [
      "Due coppie",
      "Famiglie numerose",
      "Soggiorni lunghi di alto livello"
    ],
    seoParagraph: "Geranio è uno dei migliori appartamenti in Calabria per gruppi e famiglie fino a 6 persone, con due camere matrimoniali, due bagni e balconi con vista mare e vista piscina. Ideale per vacanze lunghe nella splendida cornice di Capo Piccolo – Capo Rizzuto, offre dotazioni moderne, cucina completa e biancheria sanificata.",
    technicalSummary: {
      capacity: "6",
      rooms: "2 matrimoniali",
      bathrooms: "2",
      outdoorArea: "2 balconi",
      floor: "Primo"
    }
  }
}

export function getApartmentContent(apartmentId: number): ApartmentContent | undefined {
  return apartmentContent[apartmentId]
}

