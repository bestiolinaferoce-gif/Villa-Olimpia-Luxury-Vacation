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
    shortDescription: "Appartamento Frangipane per vacanze a Capo Rizzuto: soluzione comoda per famiglie e gruppi, con 2 camere matrimoniali, veranda privata e accesso rapido al mare a Capopiccolo.",
    fullPremiumDescription: `L'appartamento Frangipane di Villa Olimpia è una soluzione pensata per chi desidera una vacanza a Capo Rizzuto con più spazio, comodità e accesso rapido al mare. Situato a Capopiccolo, in un'area molto apprezzata di Isola di Capo Rizzuto, è adatto a famiglie e gruppi che cercano una base pratica per vivere la Calabria tra spiagge, territorio e relax.

Il suo punto di forza è l'equilibrio tra organizzazione degli spazi e facilità di utilizzo durante il soggiorno. Le due camere matrimoniali reali, la zona living e la veranda privata aiutano a vivere la vacanza con maggiore libertà, sia nei momenti in casa sia nelle ore dedicate al mare.

Frangipane è particolarmente indicato per chi attribuisce valore alla comodità degli spazi durante il soggiorno. In una vacanza al mare, avere un appartamento funzionale e ben organizzato fa la differenza soprattutto quando si viaggia in più persone o si desidera una soluzione che permetta di vivere bene i tempi della giornata.

La vicinanza alla Spiaggia dei Gigli e alle altre zone più interessanti dell'Area Marina Protetta di Capo Rizzuto rende questa soluzione ancora più convincente. È una scelta adatta a chi cerca un soggiorno semplice da organizzare, comodo da vivere e ben inserito nel contesto di Capopiccolo.`,
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
    seoParagraph: "L'appartamento Frangipane di Villa Olimpia a Capopiccolo è una soluzione ideale per chi cerca appartamenti a Capo Rizzuto con piscina e vicino al mare. Con 45 mq, due camere matrimoniali e veranda privata, è particolarmente adatto a famiglie e piccoli gruppi che vogliono soggiornare vicino alla Spiaggia dei Gigli e all'Area Marina Protetta di Capo Rizzuto, in una posizione comoda per vivere il territorio e prenotare direttamente.",
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
    shortDescription: "Appartamento Fiordaliso a Capopiccolo con balcone vista piscina, ambienti luminosi e soluzione pratica per coppie e famiglie 2+2 vicino alla Spiaggia dei Gigli.",
    fullPremiumDescription: `L'appartamento Fiordaliso di Villa Olimpia è una soluzione molto funzionale per chi desidera una vacanza a Capo Rizzuto con spazi luminosi, accesso comodo ai servizi della struttura e vicinanza reale al mare. Si trova al piano terra a Capopiccolo ed è adatto a coppie e famiglie 2+2 che vogliono muoversi con semplicità tra spiaggia, piscina e territorio.

Il balcone con vista sulla piscina è uno degli elementi che rendono Fiordaliso particolarmente piacevole per chi apprezza una vacanza rilassata e ben organizzata. La camera matrimoniale, la zona living con divano letto e la cucina attrezzata offrono una base pratica per soggiorni brevi o più lunghi.

Per chi cerca un appartamento a Capo Rizzuto vicino alla Spiaggia dei Gigli e all'Area Marina Protetta, Fiordaliso rappresenta una scelta concreta e comoda. La posizione all'interno di Villa Olimpia aiuta a vivere il soggiorno senza complicazioni, con prenotazione diretta e accesso rapido alle principali attrazioni costiere della zona.`,
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
    seoParagraph: "Fiordaliso è un appartamento di Villa Olimpia a Capopiccolo, Isola di Capo Rizzuto, ideale per chi cerca un soggiorno vicino al mare con balcone vista piscina, ambienti luminosi e accesso rapido alla Spiaggia dei Gigli. È una soluzione adatta a coppie e famiglie 2+2 che vogliono vivere Capo Rizzuto in modo semplice, con prenotazione diretta e una base comoda nell'Area Marina Protetta.",
    technicalSummary: {
      capacity: "4",
      rooms: "1 matrimoniale",
      bathrooms: "1",
      outdoorArea: "Balcone vista piscina",
      floor: "Terra"
    }
  },
  3: {
    // ORCHIDEA - 48 mq, 4 ospiti, 1 camera, doppi servizi, terrazza vista mare
    shortDescription: "Appartamento Orchidea a Capopiccolo con terrazza panoramica vista mare e doppi servizi, ideale per coppie e famiglie che cercano più comfort vicino alla Spiaggia dei Gigli.",
    fullPremiumDescription: `L'appartamento Orchidea di Villa Olimpia è una soluzione molto interessante per chi desidera una vacanza a Capo Rizzuto con vista mare, spazi ben distribuiti e un livello di comfort superiore. Situato a Capopiccolo, è adatto a coppie e famiglie che vogliono soggiornare vicino alla Spiaggia dei Gigli in un contesto curato e tranquillo.

Il punto distintivo di Orchidea è l'equilibrio tra terrazza panoramica, zona living luminosa e doppi servizi, un plus particolarmente utile per chi viaggia in più persone. La camera matrimoniale, il divano letto e la cucina completa permettono di vivere il soggiorno con maggiore libertà, sia nei momenti di relax sia nell'organizzazione delle giornate.

Per chi cerca un appartamento vista mare a Capo Rizzuto con accesso rapido alla piscina e all'Area Marina Protetta, Orchidea è una proposta solida. La posizione interna a Villa Olimpia consente di combinare mare, comfort e scoperta del territorio con grande semplicità.`,
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
    seoParagraph: "Orchidea è un appartamento di Villa Olimpia a Capopiccolo con terrazza panoramica vista mare e doppi servizi, ideale per chi cerca un soggiorno a Capo Rizzuto vicino alla Spiaggia dei Gigli e all'Area Marina Protetta. È una soluzione molto adatta a coppie e famiglie che vogliono più comfort, una vista aperta sul territorio e prenotazione diretta.",
    technicalSummary: {
      capacity: "4",
      rooms: "1 matrimoniale",
      bathrooms: "2",
      outdoorArea: "Terrazza panoramica",
      floor: "Terra"
    }
  },
  4: {
    // TULIPANO - 47 mq, 4 ospiti, 1 camera, 1 bagno, accesso giardino e patio
    shortDescription: "Appartamento Tulipano a Capopiccolo con accesso diretto al giardino, patio privato e posizione ideale per famiglie che vogliono stare vicino alla piscina e alla Spiaggia dei Gigli.",
    fullPremiumDescription: `L'appartamento Tulipano di Villa Olimpia è una soluzione molto apprezzata da chi viaggia in famiglia e cerca una vacanza a Capo Rizzuto semplice da vivere fin dal primo giorno. Situato al piano terra a Capopiccolo, offre accesso diretto al giardino e una posizione particolarmente comoda per muoversi tra piscina, spazi esterni e mare.

Il patio privato e la vista sulla piscina rendono questa unità molto adatta a chi desidera tenere sotto controllo i ritmi della vacanza, soprattutto con bambini. La camera matrimoniale, la zona living con divano letto e la cucina attrezzata aiutano a organizzare il soggiorno in modo pratico e rilassato.

Per chi cerca un appartamento a Capo Rizzuto vicino alla Spiaggia dei Gigli e con spazi esterni comodi, Tulipano è una scelta molto concreta. La combinazione tra piano terra, giardino e vicinanza all'Area Marina Protetta di Capo Rizzuto lo rende particolarmente funzionale per coppie e famiglie 2+2.`,
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
    seoParagraph: "Tulipano è un appartamento di Villa Olimpia a Capopiccolo con accesso diretto al giardino, patio privato e vicinanza alla piscina, ideale per chi cerca un soggiorno a Capo Rizzuto pratico e vicino al mare. È una soluzione adatta a coppie e famiglie 2+2 che vogliono vivere la Spiaggia dei Gigli e l'Area Marina Protetta con più comodità e prenotazione diretta.",
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
    shortDescription: "Appartamento Giglio a Capopiccolo con due camere, gazebo esterno e soluzione comoda per famiglie o piccoli gruppi fino a 6 ospiti vicino alla Spiaggia dei Gigli.",
    fullPremiumDescription: `L'appartamento Giglio di Villa Olimpia è pensato per chi desidera una vacanza a Capo Rizzuto con più posti letto, spazi ben distribuiti e una buona vivibilità anche nelle giornate trascorse in struttura. Situato al piano terra a Capopiccolo, è una soluzione adatta a famiglie e piccoli gruppi che vogliono combinare mare, relax e organizzazione pratica.

La presenza di due camere, della zona living con divano letto e degli spazi esterni con gazebo aiuta a vivere il soggiorno in modo più flessibile. Giglio è particolarmente interessante per chi viaggia con bambini o con più persone e cerca una base semplice da gestire durante tutta la vacanza.

Per chi cerca un appartamento per 6 persone a Capo Rizzuto vicino alla Spiaggia dei Gigli e all'Area Marina Protetta, Giglio rappresenta una soluzione concreta e ben inserita nel contesto di Villa Olimpia. La vicinanza al mare e agli spazi comuni della struttura rafforza ulteriormente il suo valore.`,
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
    seoParagraph: "Giglio è un appartamento di Villa Olimpia a Capopiccolo pensato per chi cerca un soggiorno a Capo Rizzuto per famiglie o piccoli gruppi fino a 6 ospiti. Con due camere, zona living, gazebo esterno e accesso rapido alla Spiaggia dei Gigli, è una soluzione pratica per vivere l'Area Marina Protetta con più spazio e prenotazione diretta.",
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
    shortDescription: "Appartamento Lavanda a Capopiccolo con veranda e portico privati, ideale per coppie e piccole famiglie che cercano tranquillità vicino alla Spiaggia dei Gigli.",
    fullPremiumDescription: `L'appartamento Lavanda di Villa Olimpia è una soluzione molto adatta a chi desidera una vacanza a Capo Rizzuto all'insegna della tranquillità, della privacy e di un contesto rilassato. Si trova al piano terra a Capopiccolo e offre una posizione più riservata rispetto ad altre unità, pur restando molto vicina al mare e agli spazi comuni della struttura.

La veranda e il portico privati sono il punto di forza di Lavanda, perché permettono di vivere meglio i momenti all'aperto e di mantenere un ritmo più lento durante il soggiorno. Camera matrimoniale, zona living con divano letto e cucina attrezzata completano una soluzione adatta a coppie e piccole famiglie.

Per chi cerca un appartamento tranquillo a Capo Rizzuto vicino alla Spiaggia dei Gigli e all'Area Marina Protetta, Lavanda è una proposta molto equilibrata. La posizione interna a Villa Olimpia e la vicinanza al mare aiutano a costruire una vacanza semplice, rilassante e facile da organizzare.`,
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
    seoParagraph: "Lavanda è un appartamento di Villa Olimpia a Capopiccolo con veranda e portico privati, ideale per chi cerca un soggiorno tranquillo a Capo Rizzuto vicino al mare. È una soluzione adatta a coppie e piccole famiglie che vogliono vivere la Spiaggia dei Gigli e l'Area Marina Protetta con più privacy, comfort e prenotazione diretta.",
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
    shortDescription: "Appartamento Geranio a Capo Rizzuto: la soluzione premium di Villa Olimpia con 2 camere, 2 bagni e 2 balconcini semipanoramici, ideale per famiglie e piccoli gruppi.",
    fullPremiumDescription: `L'appartamento Geranio di Villa Olimpia è una delle soluzioni più complete e rappresentative della struttura. Situato al primo piano a Capopiccolo, è pensato per chi desidera soggiornare a Capo Rizzuto con più spazio, comfort e una posizione strategica per vivere il mare e il territorio.

Geranio si distingue per l'equilibrio tra ampiezza, funzionalità e qualità della permanenza. Le due camere da letto, i due bagni, il soggiorno ampio e i due balconcini semipanoramici arredati rendono questa unità particolarmente adatta a famiglie numerose, gruppi di amici o ospiti che desiderano un livello di comodità superiore.

I balconcini aiutano a vivere meglio il soggiorno anche fuori dagli ambienti interni, soprattutto nei momenti più lenti della giornata. Il contesto di Villa Olimpia, con piscina condivisa, giardino e accesso rapido alla Spiaggia dei Gigli, completa un'esperienza molto forte per chi cerca una vacanza premium in Calabria vicino al mare.

Per posizione, dotazioni e qualità complessiva, Geranio è una delle scelte più convincenti per chi vuole prenotare direttamente un appartamento a Capo Rizzuto ben inserito nel territorio, a pochi minuti dall'Area Marina Protetta e da Le Castella.`,
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
    seoParagraph: "Geranio è l'appartamento premium di Villa Olimpia a Capopiccolo, Isola di Capo Rizzuto: 65 mq, 2 camere, 2 bagni e 2 balconcini semipanoramici arredati. È una soluzione ideale per chi cerca un appartamento a Capo Rizzuto con piscina, vicino alla Spiaggia dei Gigli e all'Area Marina Protetta, con spazi generosi, comfort superiore e prenotazione diretta.",
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
    shortDescription: "Appartamento Gardenia a Capopiccolo: soluzione luminosa con balcone vista mare Ionio, ideale per coppie e famiglie che vogliono soggiornare vicino alla Spiaggia dei Gigli.",
    fullPremiumDescription: `L'appartamento Gardenia di Villa Olimpia è una soluzione molto equilibrata per chi desidera una vacanza a Capo Rizzuto con vista aperta, ambienti luminosi e una posizione favorevole per vivere il mare con comodità. Situato al primo piano a Capopiccolo, è adatto a coppie e famiglie che cercano un soggiorno rilassante in un contesto ben organizzato.

La luce naturale e il balcone con vista sul mare Ionio sono due degli elementi che rendono Gardenia particolarmente piacevole da vivere. Gli spazi sono pensati per offrire comfort e semplicità: camera matrimoniale, zona living con divano letto, cucina attrezzata e una distribuzione adatta a chi vuole sentirsi libero durante il soggiorno.

Per chi cerca un appartamento a Capo Rizzuto vicino al mare ma in una posizione tranquilla, Gardenia rappresenta una scelta molto valida. La struttura consente di raggiungere facilmente la Spiaggia dei Gigli, la piscina condivisa e le altre aree di Villa Olimpia, mantenendo un buon equilibrio tra privacy, panorama e praticità.`,
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
    seoParagraph: "Gardenia è un appartamento di Villa Olimpia a Capopiccolo, Isola di Capo Rizzuto, ideale per chi cerca un soggiorno vicino al mare con balcone vista Ionio, piscina condivisa e accesso rapido alla Spiaggia dei Gigli. È una soluzione adatta a coppie e famiglie 2+2 che vogliono vivere Capo Rizzuto in modo comodo, con prenotazione diretta e una posizione forte sul territorio.",
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
    shortDescription: "Appartamento Azalea a Capopiccolo con terrazza panoramica e vista mare, pensato per coppie e famiglie che vogliono un soggiorno luminoso e ben posizionato a Capo Rizzuto.",
    fullPremiumDescription: `L'appartamento Azalea di Villa Olimpia è una delle soluzioni più interessanti per chi attribuisce grande valore agli spazi esterni e alla vista sul territorio. Situato al primo piano a Capopiccolo, offre una terrazza panoramica privata che rende il soggiorno particolarmente piacevole nei momenti di relax, nelle colazioni e nelle ore del tramonto.

Azalea si distingue per uno stile più essenziale e contemporaneo, adatto a chi cerca una vacanza in Calabria con un contesto curato, una buona luminosità interna e un rapporto diretto con il paesaggio costiero. La camera matrimoniale, la zona living, la cucina completa e la terrazza privata rendono questa soluzione molto adatta a coppie e famiglie 2+2.

Per chi cerca un appartamento vista mare a Capo Rizzuto, Azalea è una proposta forte perché unisce posizione, panorama e comodità. La vicinanza alla Spiaggia dei Gigli, alla piscina condivisa e all'Area Marina Protetta di Capo Rizzuto permette di vivere il soggiorno con grande fluidità e senza perdite di tempo negli spostamenti.`,
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
    seoParagraph: "Azalea è un appartamento di Villa Olimpia a Capopiccolo con terrazza panoramica e vista mare, ideale per chi cerca un soggiorno a Capo Rizzuto vicino alla Spiaggia dei Gigli e all'Area Marina Protetta. È una soluzione molto adatta a coppie e famiglie 2+2 che vogliono un appartamento luminoso, ben posizionato e prenotabile direttamente.",
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
