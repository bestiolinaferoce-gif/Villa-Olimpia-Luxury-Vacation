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
    shortDescription: "Fiordaliso: 50 mq al piano terra con balcone vista piscina, camera matrimoniale e divano letto. Fino a 4 ospiti. Villa Olimpia Capopiccolo, Spiaggia dei Gigli a 100 m.",
    fullPremiumDescription: `Il lodge Fiordaliso è la scelta giusta per chi cerca funzionalità, luminosità e un rapporto qualità-prezzo eccellente. Situato al piano terra, è caratterizzato da ambienti luminosi e ariosi, con grandi finestre che portano la luce del sole calabrese dentro ogni stanza fin dalle prime ore del mattino.

La dotazione è completa e moderna: camera matrimoniale, soggiorno con divano letto per due persone, bagno completo con box doccia, cucina completamente attrezzata con elettrodomestici di qualità e tutto il necessario per cucinare. Aria condizionata, Wi-Fi ad alta velocità, lavatrice e biancheria sanificata inclusi.

Il Fiordaliso si affaccia sul giardino di Villa Olimpia e ha accesso diretto alla piscina privata. Il barbecue del lodge permette cene all'aperto in totale autonomia. La Spiaggia dei Gigli e la Spiaggia della Caletta sono a meno di un minuto a piedi: due delle spiagge più belle e premiate dell'intera Costa Ionica calabrese.`,
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
    // ORCHIDEA - 48 mq, 4 ospiti, 1 camera, doppi servizi, terrazza vista mare
    shortDescription: "Orchidea: 48 mq con terrazza panoramica vista mare Ionio, camera matrimoniale, zona living e doppi servizi. Fino a 4 ospiti. Villa Olimpia Capopiccolo, Spiaggia dei Gigli a meno di 100 m.",
    fullPremiumDescription: `Il lodge Orchidea è una soluzione accogliente e funzionale per coppie e piccole famiglie che cercano comfort, riservatezza e una posizione privilegiata sul mare. Situato al piano terra, offre facile accesso al giardino e alla piscina privata di Villa Olimpia.

Gli arredi sono stati selezionati con cura, coniugando estetica moderna e praticità: camera matrimoniale, soggiorno con divano letto per due persone aggiuntive, bagno completo con box doccia, cucina completamente attrezzata con elettrodomestici di qualità. La televisione LED, il Wi-Fi ad alta velocità e l'aria condizionata in ogni ambiente completano una dotazione pensata per un soggiorno senza rinunce.

A pochi passi dall'ingresso del lodge si trova il parcheggio riservato agli ospiti, un dettaglio pratico molto apprezzato. L'Orchidea è immersa in un contesto tranquillo e riservato, ideale per chi cerca una vacanza lontana dal caos, ma a meno di un minuto a piedi dalla Spiaggia dei Gigli e dalla Spiaggia della Caletta, tra le più belle dell'Area Marina Protetta di Capo Rizzuto.`,
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
    seoParagraph: "Orchidea è un appartamento vacanze 48 mq con terrazza vista mare a Capopiccolo, Isola di Capo Rizzuto. Camera matrimoniale, zona living con divano letto, cucina attrezzata e due bagni completi: villa con piscina in Calabria ideale per coppie e famiglie che cercano un comfort extra. A meno di 100 m dalla Spiaggia dei Gigli. Keywords: appartamento vista mare Capo Rizzuto, terrazza panoramica Calabria, vacanza Isola di Capo Rizzuto, appartamento doppi servizi Calabria.",
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
    shortDescription: "Tulipano: 47 mq con accesso diretto al giardino, patio privato e vista piscina. Camera matrimoniale e divano letto, 4 ospiti. Ideale per famiglie con bambini. Villa Olimpia Capopiccolo, Spiaggia dei Gigli a 100 m.",
    fullPremiumDescription: `Il lodge Tulipano è la scelta più apprezzata dalle famiglie che soggiornano a Villa Olimpia, e non è difficile capire perché: nonostante la dimensione compatta da 4 posti letto, vanta la rara presenza di due bagni completi — un comfort che fa davvero la differenza quando si viaggia in famiglia, specialmente con bambini piccoli.

Situato al piano terra, il Tulipano offre accesso diretto al giardino e alla piscina privata, senza scale né barriere: ideale per chi viaggia con bimbi piccoli o anziani. La camera matrimoniale è spaziosa e ben arredata; il soggiorno con divano letto per due persone completa la capienza. Cucina completamente attrezzata, aria condizionata in ogni ambiente, Wi-Fi ad alta velocità.

Il Tulipano dispone di un barbecue privato, perfetto per le grigliate serali in totale autonomia. Insieme al grande barbecue comune del giardino di Villa Olimpia, le serate estive al Tulipano diventano momenti indimenticabili. La Spiaggia dei Gigli è a meno di un minuto a piedi: basta attraversare il cancello e si è già sul mare cristallino dell'Area Marina Protetta di Capo Rizzuto.`,
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
    fullPremiumDescription: `Il lodge Giglio si distingue per i suoi spazi generosi e per la cucina in muratura di grandi dimensioni, un elemento raro e molto apprezzato da chi ama cucinare durante le vacanze. Il soggiorno è ampio e ottimamente arredato, con ampie finestre che portano luce naturale in ogni angolo.

La composizione è ideale per gruppi familiari o amici: camera matrimoniale con annessa cameretta con letto a piazza e mezza, più divano letto nel soggiorno per un totale di 6 posti letto. Il bagno completo è dotato di box doccia. Situato al piano terra, offre accesso diretto al giardino e al gazebo ad uso esclusivo — uno spazio esterno privato con arredi da esterno, perfetto per le serate estive.

Il lodge Giglio è completato da un pratico ripostiglio, molto utile per famiglie che viaggiano con molto bagaglio o attrezzatura da spiaggia. La posizione nel cuore di Villa Olimpia garantisce tranquillità e riservatezza, a pochi passi dalla piscina privata e a meno di un minuto a piedi dalle spiagge più belle di Capo Piccolo.`,
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
    fullPremiumDescription: `Il lodge Lavanda è pensato per chi cerca una vacanza all'insegna del relax, dell'armonia e di uno stile elegante ma senza eccessi. Situato al piano terra, trasmette fin dal primo ingresso un'atmosfera calda e rilassante, grazie a un design curato nei dettagli e a colori naturali che richiamano la palette del Mediterraneo.

La composizione è essenziale e confortevole: camera matrimoniale, soggiorno con divano letto per due persone, bagno completo con box doccia, cucina completamente attrezzata. Ideale per coppie in cerca di privacy o per piccole famiglie che vogliono godersi la Calabria senza distrazioni.

Il lodge Lavanda ha accesso diretto al giardino di Villa Olimpia, alla piscina privata e al barbecue. Il mare è a meno di un minuto a piedi: la Spiaggia dei Gigli, con la sua sabbia dorata e le acque trasparenti dell'Area Marina Protetta, è il posto perfetto per iniziare ogni giornata con un bagno nell'Ionio.`,
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
    shortDescription: "Gardenia: 52 mq al primo piano, balcone vista mare Ionio. Camera matrimoniale e divano letto, 4 ospiti. Villa Olimpia Capopiccolo, Spiaggia dei Gigli a 100 m.",
    fullPremiumDescription: `Il lodge Gardenia si trova al primo piano e si distingue per la luminosità degli ambienti e per la vista piacevole sul giardino e sulla villa. Come il Tulipano, è dotato di due bagni completi — un plus raro nei lodge da 4 posti letto che lo rende ideale per coppie che viaggiano insieme o per famiglie che apprezzano il comfort di avere un bagno in più.

Gli interni sono luminosi e ben arredati: camera matrimoniale con ampie finestre, soggiorno con divano letto per due persone, due bagni completi con box doccia, cucina completamente attrezzata. Aria condizionata, Wi-Fi ad alta velocità e biancheria da letto e da bagno sanificata completano la dotazione standard.

Il Gardenia si trova a pochi passi dalla scala che scende al giardino e alla piscina privata di Villa Olimpia. La Spiaggia dei Gigli e la Spiaggia della Caletta sono raggiungibili a piedi in meno di un minuto, rendendo ogni mattina una partenza spontanea verso il mare cristallino dell'Ionio.`,
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
    fullPremiumDescription: `Il lodge Azalea è il più panoramico di Villa Olimpia: il suo splendido terrazzo al primo piano offre una vista privilegiata sul paesaggio circostante, regalando tramonti indimenticabili e albe silenziose sull'Ionio. Chi sceglie l'Azalea non cerca solo un alloggio, ma un'esperienza visiva e sensoriale completa.

Gli interni sono luminosi e ben arredati: camera matrimoniale, soggiorno con divano letto per due persone, bagno completo con box doccia, cucina completamente attrezzata. Il terrazzo panoramico è arredato con tavolo e sedie da esterno, perfetto per cene romantiche o aperitivi al tramonto. Aria condizionata, Wi-Fi ad alta velocità e biancheria sanificata completano una dotazione di alto livello.

L'Azalea è la scelta ideale per coppie e per chi ama vivere gli spazi esterni in modo consapevole. La piscina privata di Villa Olimpia è al piano inferiore, raggiungibile in pochi secondi. La Spiaggia dei Gigli e la Spiaggia della Caletta, con le acque cristalline dell'Area Marina Protetta di Capo Rizzuto, distano meno di un minuto a piedi.`,
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
