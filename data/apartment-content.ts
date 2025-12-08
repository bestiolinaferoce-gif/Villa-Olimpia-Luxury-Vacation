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
    shortDescription: "Frangipane è uno dei lodge più spaziosi di Villa Olimpia: due camere matrimoniali, ampia zona living con divano letto, cucina completa e veranda privata arredata. Ideale per famiglie e piccoli gruppi.",
    fullPremiumDescription: `L'appartamento Frangipane si trova al piano terra di Villa Olimpia ed è pensato per ospitare fino a 6 persone in un ambiente luminoso, moderno e confortevole.

Dispone di due camere da letto matrimoniali, una zona living ampia con divano letto matrimoniale, cucina completamente attrezzata con stoviglie ed elettrodomestici essenziali, e un bagno moderno con box doccia.

All'esterno, una veranda privata arredata con tavolo e sedute offre lo spazio ideale per colazioni all'aperto o momenti di relax dopo una giornata al mare. Gli ospiti hanno accesso alla piscina della villa, alle aree comuni e ai parcheggi.

La biancheria da letto e da bagno è fornita e sanificata professionalmente.`,
    featureBullets: [
      "Due camere matrimoniali reali",
      "Veranda privata arredata",
      "Perfetto per famiglie numerose",
      "Cucina completa",
      "Divano letto comodo per 2 pax",
      "Aria condizionata e WI-FI",
      "Accesso alla piscina",
      "150 m dal mare"
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
    shortDescription: "Elegante lodge al piano terra fronte piscina, con camera matrimoniale molto ampia, zona living con divano letto, cucina completa e gazebo privato.",
    fullPremiumDescription: `L'appartamento Fiordaliso si distingue per la sua posizione privilegiata fronte piscina e per la spaziosa camera matrimoniale.

Situato al piano terra, può ospitare fino a 4 persone grazie alla grande camera da letto e al divano letto matrimoniale nella zona living.

Dispone di cucina completa, bagno moderno con box doccia e un gazebo privato posizionato direttamente davanti all'ingresso, perfetto per rilassarsi all'ombra durante le giornate estive.

La biancheria è fornita e sanificata, garantendo comfort e igiene.`,
    featureBullets: [
      "Camera matrimoniale molto ampia",
      "Gazebo privato fronte piscina",
      "Bagno moderno",
      "Cucina completa",
      "Ideale per coppie e famiglie con bambini",
      "Accesso immediato alle aree comuni"
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
    shortDescription: "Il lodge più ampio del piano terra: grande cucina abitabile, zona living, camera matrimoniale, cameretta, bagno e gazebo privato.",
    fullPremiumDescription: `Il lodge Giglio è uno degli appartamenti più spaziosi di Villa Olimpia e può ospitare fino a 6 persone.

Dispone di una cucina abitabile grande, zona living con tavolo da pranzo e divano letto matrimoniale, un bagno completo con box doccia, una camera matrimoniale e una cameretta con letto a castello o letto alla francese.

All'esterno è presente un gazebo privato perfetto per mangiare o rilassarsi all'aperto.

Una soluzione ideale per famiglie numerose o gruppi che cercano ampi spazi.`,
    featureBullets: [
      "Cucina molto grande",
      "Cameretta aggiuntiva",
      "Gazebo privato",
      "Ideale per gruppi fino a 6 persone",
      "Accesso diretto alla piscina e aree comuni"
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
    shortDescription: "Lodge elegante con camera matrimoniale, zona living, cucina completa e due bagni (uno in camera).",
    fullPremiumDescription: `L'appartamento Orchidea, al piano terra di Villa Olimpia, offre una combinazione perfetta tra comfort e funzionalità.

Ospita fino a 4 persone ed è composto da una camera matrimoniale, zona living con divano letto, cucina attrezzata e due bagni, uno dei quali direttamente in camera.

Una soluzione moderna, comoda e ideale sia per coppie che per famiglie che desiderano maggiore privacy.`,
    featureBullets: [
      "Due bagni",
      "Ottima privacy",
      "Zona living luminosa",
      "Cucina completa",
      "Vicino ai servizi comuni"
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
    shortDescription: "Camera matrimoniale, zona living, cucina completa e veranda privata.",
    fullPremiumDescription: `L'appartamento Tulipano è un lodge accogliente al piano terra di Villa Olimpia, pensato per ospitare fino a 4 persone.

Dispone di una camera matrimoniale, zona living con divano letto, cucina attrezzata e un bagno completo con doccia.

Una veranda privata vicina all'ingresso della villa completa l'appartamento, rendendolo ideale per coppie e piccole famiglie.`,
    featureBullets: [
      "Veranda privata",
      "Layout funzionale",
      "Ideale per 2–4 pax",
      "Vicino ai servizi",
      "Aria condizionata e Wi-Fi"
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
    shortDescription: "Lodge accogliente con camera matrimoniale, living, cucina e veranda privata.",
    fullPremiumDescription: `L'appartamento Lavanda, situato al piano terra, offre un ambiente caldo e accogliente per fino a 4 ospiti.

Dispone di una camera matrimoniale, zona living con divano letto, cucina attrezzata e bagno moderno.

La veranda privata consente di godersi gli spazi esterni in totale relax, rendendolo perfetto per coppie o famiglie.`,
    featureBullets: [
      "Veranda privata",
      "Arredi funzionali",
      "Perfetto per 4 pax",
      "Molto tranquillo"
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
    shortDescription: "Appartamento al primo piano con terrazza panoramica arredata, camera matrimoniale, living e cucina.",
    fullPremiumDescription: `Situato al primo piano, l'appartamento Azalea offre una splendida terrazza panoramica arredata, perfetta per cene al tramonto o momenti di relax con vista.

All'interno troviamo una camera matrimoniale, zona living con divano letto, cucina completa e bagno moderno.

Ospita fino a 4 persone con comfort elevato e atmosfera rilassante.`,
    featureBullets: [
      "Grande terrazza panoramica",
      "Molto luminoso",
      "Privacy e vista",
      "Arredi esterni completi"
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
    shortDescription: "Camera matrimoniale con bagno interno, living con divano letto, secondo bagno e balconcini vista giardino e piscina.",
    fullPremiumDescription: `L'appartamento Gardenia, situato al primo piano, offre una camera matrimoniale con bagno privato, zona living con divano letto, un secondo bagno con doccia e due balconcini: uno vista giardino e uno vista piscina.

Può ospitare fino a 4 persone in un ambiente moderno, ben organizzato e molto luminoso.`,
    featureBullets: [
      "Camera con bagno privato",
      "Secondo bagno completo",
      "Due balconcini",
      "Molto luminoso",
      "Vista piscina"
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
    shortDescription: "Il lodge più grande della villa: due camere matrimoniali, due bagni (uno in camera), cabina armadio, zona living, cucina e doppi balconi vista mare e vista piscina.",
    fullPremiumDescription: `Geranio è il lodge più prestigioso di Villa Olimpia.

Situato al primo piano, ospita fino a 6 persone e dispone di:
• Due camere matrimoniali, una delle quali con cabina armadio e bagno privato
• Zona living con divano letto
• Cucina attrezzata
• Secondo bagno completo
• Due balconcini: vista mare e vista piscina

Una soluzione ideale per famiglie numerose, due coppie o gruppi che desiderano ampi spazi e comfort superiori.`,
    featureBullets: [
      "2 camere matrimoniali",
      "2 bagni completi, 1 in camera",
      "Cabina armadio",
      "Balcone vista mare",
      "Balcone vista piscina",
      "Comfort superiore"
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

