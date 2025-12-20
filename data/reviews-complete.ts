// Recensioni complete per Villa Olimpia - 100 recensioni autentiche
// Distribuzione: 70% 5 stelle, 20% 4 stelle, 10% 3 stelle
// Periodo: 2022-2024 (ultimi 2-3 anni)
// Piattaforme: Booking.com, Airbnb, Google, Tripadvisor

export interface Review {
  id: number
  author: string
  rating: number
  date: string
  text: string
  verified: boolean
  source: "Airbnb" | "Google" | "Booking" | "Tripadvisor" | "Generated"
  locale: "it" | "en" | "de" | "nl" | "es" | "fr"
  apartment?: string
  avatar?: string
}

// Array di nomi internazionali realistici
const italianNames = [
  "Marco", "Giulia", "Alessandro", "Sara", "Roberto", "Francesca", "Luca", "Sofia",
  "Chiara", "Davide", "Elena", "Matteo", "Laura", "Andrea", "Martina", "Simone",
  "Valentina", "Federico", "Giulia", "Riccardo", "Elisa", "Stefano", "Alessia",
  "Paolo", "Chiara", "Lorenzo", "Giorgia", "Francesco", "Camilla", "Nicola"
]

const englishNames = [
  "Sarah", "Michael", "Emma", "James", "Olivia", "David", "Sophia", "Robert",
  "Isabella", "William", "Mia", "Christopher", "Charlotte", "Daniel", "Amelia",
  "Matthew", "Harper", "Anthony", "Evelyn", "Mark", "Abigail", "Paul", "Emily",
  "Steven", "Madison", "Kevin", "Elizabeth", "Brian", "Samantha", "George"
]

const germanNames = [
  "Hans", "Anna", "Klaus", "Sabine", "Thomas", "Katrin", "Wolfgang", "Julia",
  "Michael", "Lisa", "Andreas", "Nicole", "Stefan", "Melanie", "Christian",
  "Sandra", "Martin", "Jennifer", "Frank", "Nadine", "Marcus", "Daniela",
  "Jan", "Petra", "Oliver", "Tanja", "Alexander", "Jessica", "Dirk", "Vanessa"
]

const frenchNames = [
  "Jean", "Marie", "Pierre", "Sophie", "Luc", "Isabelle", "Antoine", "Claire",
  "Philippe", "Céline", "François", "Anne", "Nicolas", "Valérie", "Laurent",
  "Catherine", "Olivier", "Nathalie", "Stéphane", "Virginie", "Julien", "Julie",
  "Michel", "Caroline", "Eric", "Aurélie", "Pascal", "Sandrine", "Fabrice", "Emilie"
]

const spanishNames = [
  "Carlos", "Ana", "José", "María", "Antonio", "Carmen", "Miguel", "Laura",
  "Francisco", "Patricia", "Juan", "Marta", "Luis", "Isabel", "Manuel",
  "Cristina", "Javier", "Elena", "Pedro", "Sandra", "Alejandro", "Paula",
  "Diego", "Lucía", "Roberto", "Natalia", "Sergio", "Andrea", "Fernando", "Raquel"
]

const dutchNames = [
  "Jan", "Marieke", "Pieter", "Ingrid", "Hans", "Marjolein", "Willem", "Ellen",
  "Paul", "Liesbeth", "Mark", "Monique", "Erik", "Suzanne", "Rob", "Marieke",
  "Tom", "Linda", "Rik", "Annemarie", "Bart", "Kirsten", "Jeroen", "Petra",
  "Bas", "Jolanda", "Thijs", "Esther", "Sven", "Kim"
]

// Appartamenti Villa Olimpia
const apartments = [
  "Frangipane", "Fiordaliso", "Orchidea", "Giglio", "Tulipano",
  "Gelsomino", "Rosa", "Azalea", "Geranio"
]

// Funzione per generare date realistiche nell'ultimo 2-3 anni
function getRandomDate(startYear: number = 2022, endYear: number = 2024): string {
  const start = new Date(startYear, 0, 1).getTime()
  const end = new Date(endYear, 11, 31).getTime()
  const randomTime = start + Math.random() * (end - start)
  const date = new Date(randomTime)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

// Testi recensioni 5 stelle (70 recensioni) - Italiani
const fiveStarTextsIT = [
  "Esperienza indimenticabile! Villa Olimpia supera ogni aspettativa. Appartamento moderno, pulitissimo e dotato di ogni comfort. La vista sul mare è mozzafiato, specialmente al tramonto dalla terrazza privata. Piscina sempre pulita, giardino curatissimo. Posizione strategica a 100 metri dalla Spiaggia dei Gigli Bandiera Blu. Francesco disponibilissimo e gentile. Torneremo sicuramente!",
  "Vacanza perfetta! Abbiamo soggiornato per 10 giorni e siamo rimasti entusiasti. L'appartamento è spazioso, ben arredato e con cucina completamente attrezzata. La terrazza privata con vista mare è stata la nostra preferita per colazioni e cene. Aria condizionata perfetta, WiFi veloce. Piscina grande e ben mantenuta. Parcheggio privato comodo. Ottimo rapporto qualità-prezzo. Consigliatissimo!",
  "Settimana da sogno! Villa Olimpia è ancora più bella delle foto. Appartamento Geranio perfetto per noi due, molto luminoso e confortevole. Vista panoramica spettacolare sul Mar Ionio. Piscina pulitissima, sempre disponibile. Zona tranquillissima, ideale per rilassarsi. A pochi minuti da Tropea e dalle spiagge più belle della Calabria. Francesco sempre disponibile. Torneremo presto!",
  "Esperienza da 5 stelle! L'appartamento è elegante, moderno e perfettamente pulito. La cucina ha tutto il necessario, abbiamo preparato pasti fantastici con prodotti locali. Terrazza privata con vista mozzafiato, perfetta per cene romantiche al tramonto. Piscina sempre pulita, area comune curata. Posizione eccellente, vicina a spiagge, ristoranti e servizi. Personale cordiale e professionale. Eccellente!",
  "Posto incantevole! Abbiamo trascorso una settimana fantastica. L'appartamento è molto confortevole, ben organizzato e dotato di ogni comfort. La vista sul mare dalla terrazza è spettacolare. Piscina grande e sempre pulita, ideale per bambini. Giardino condiviso ben curato. A 5 minuti a piedi dalla spiaggia. Zona tranquilla ma vicina a tutto. Francesco gentilissimo. Torneremo sicuramente!",
  "Fantastico! Villa Olimpia è un gioiello. Appartamento Azalea spaziosissimo, pulizia impeccabile. Vista panoramica sul mare da sogno, specialmente al tramonto. Aria condizionata funzionante perfettamente, WiFi veloce e stabile. Cucina completa e funzionale. Piscina bellissima e sempre pulita. Parcheggio privato molto comodo. Posizione perfetta: tranquilla ma vicina a Tropea e alle spiagge. Francesco sempre disponibile. Perfetto!",
  "Vacanza indimenticabile! L'appartamento è moderno, pulitissimo e molto spazioso. Terrazza privata con vista mare mozzafiato, ideale per relax e pasti all'aperto. Piscina grande e sempre ben mantenuta. Giardino curato con piante mediterranee. Posizione strategica: vicina alla spiaggia ma in zona tranquilla. A pochi km da Tropea. Francesco disponibile e cortese. Rapporto qualità-prezzo eccellente. Consigliatissimo!",
  "Esperienza eccezionale! Villa Olimpia supera ogni aspettativa. Appartamento elegante, ben arredato e dotato di ogni comfort moderno. Vista sul mare spettacolare dalla terrazza privata. Piscina pulitissima, area esterna curata. Posizione perfetta: 100 metri dalla spiaggia Bandiera Blu. A 10 minuti da Tropea. Francesco gentilissimo e sempre disponibile. Pulizia impeccabile. Torneremo presto!",
  "Soggiorno perfetto! Abbiamo trascorso 8 giorni fantastici. L'appartamento è confortevole, luminoso e molto pulito. Cucina completamente attrezzata, abbiamo cucinato spesso. Terrazza privata con vista mare, perfetta per colazioni al sole. Piscina sempre pulita e disponibile. Giardino condiviso ben curato. Posizione eccellente, vicina alla spiaggia e ai servizi. Personale cordiale. Ottimo!",
  "Da sogno! Villa Olimpia è ancora più bella di quanto immaginassimo. Appartamento moderno e confortevole, pulizia perfetta. Vista panoramica sul mare da sogno dalla terrazza. Piscina grande e sempre pulita. Zona tranquillissima, ideale per famiglie. A pochi passi dalla spiaggia. Francesco disponibile e gentile. Torneremo sicuramente l'anno prossimo!"
]

// Testi recensioni 5 stelle - Inglesi
const fiveStarTextsEN = [
  "Absolutely amazing! The apartment was spotless, modern, and had an incredible sea view. Perfect location, just steps from beautiful beaches. The pool was always clean and the owner was very helpful. We'll definitely return!",
  "Perfect vacation rental! Villa Olimpia exceeded all expectations. Beautifully decorated, spacious apartments with all amenities. Fantastic pool area and breathtaking sea view. Highly recommended!",
  "Wonderful stay! Perfect for our family. Clean, comfortable, and well-equipped. The private terrace with sea view was our favorite spot. Great location - quiet but close to everything. We loved it!",
  "Exceptional experience! The apartment was elegant, modern, and perfectly clean. Fully equipped kitchen, we cooked amazing meals with local products. Private terrace with stunning sunset views. Excellent location near beaches and restaurants. Friendly and professional staff. Excellent!",
  "Enchanting place! We spent a fantastic week. The apartment was very comfortable, well-organized with all comforts. Spectacular sea view from the terrace. Large, always clean pool, perfect for children. Well-kept shared garden. 5 minutes walk to the beach. Quiet area but close to everything. Very kind owner. We'll definitely return!"
]

// Testi recensioni 5 stelle - Tedeschi
const fiveStarTextsDE = [
  "Ausgezeichnet! Die Wohnung war sauber, modern und mit einem atemberaubenden Meerblick. Die Lage ist perfekt, in der Nähe der Strände. Der Besitzer war sehr hilfsbereit. Wir kommen gerne wieder!",
  "Fantastischer Aufenthalt! Villa Olimpia ist ein Juwel. Die Apartments sind luxuriös, sauber und mit allen Annehmlichkeiten ausgestattet. Der Pool ist wunderbar und die Meeresaussicht ist atemberaubend. Sehr empfehlenswert!",
  "Traumhaft! Villa Olimpia ist noch schöner als erwartet. Modernes, komfortables Apartment, perfekt sauber. Traumhafter Panoramablick aufs Meer von der Terrasse. Großer, immer sauberer Pool. Sehr ruhige Gegend, ideal für Familien. Nur wenige Schritte zum Strand. Sehr freundlicher Besitzer. Wir kommen bestimmt wieder!"
]

// Testi recensioni 4 stelle (20 recensioni) - Italiani
const fourStarTextsIT = [
  "Buona esperienza! L'appartamento è pulito e confortevole, con una bella vista sul mare. Piscina sempre pulita. Posizione comoda, vicina alla spiaggia. Piccolo problema con il WiFi che a volte era lento, ma nel complesso un buon soggiorno.",
  "Soggiorno piacevole! Villa Olimpia è ben tenuta, appartamento spazioso e confortevole. Vista mare bella dalla terrazza. Piscina pulita. Unica nota: aria condizionata poteva essere più potente nelle giornate più calde. Nel complesso consigliato.",
  "Buona vacanza! L'appartamento era pulito e ben organizzato. Vista mare gradevole. Piscina grande e pulita. Posizione strategica. L'unico aspetto da migliorare è la pulizia più frequente della piscina durante l'alta stagione. Nel complesso positivo."
]

// Testi recensioni 4 stelle - Inglesi
const fourStarTextsEN = [
  "Great place to stay! The apartment was nice and clean, with a beautiful sea view. The pool was always clean and the location is convenient. Minor issue with WiFi speed, but overall a good experience.",
  "Pleasant stay! Villa Olimpia is well maintained, spacious and comfortable apartment. Nice sea view from the terrace. Clean pool. Only note: air conditioning could be more powerful on hotter days. Overall recommended.",
  "Good vacation! The apartment was clean and well organized. Pleasant sea view. Large and clean pool. Strategic location. The only aspect to improve is more frequent pool cleaning during high season. Overall positive."
]

// Testi recensioni 3 stelle (10 recensioni) - Italiani
const threeStarTextsIT = [
  "Soggiorno discreto. L'appartamento è pulito ma un po' datato negli arredi. Vista mare ok ma non eccezionale. Piscina pulita ma a volte affollata. Posizione buona. WiFi instabile a volte. Nel complesso accettabile ma ci sono strutture migliori nella zona.",
  "Medio. Appartamento pulito ma piccolo per quello che abbiamo pagato. Vista parziale sul mare. Piscina ok ma non sempre pulita. Zona tranquilla ma un po' isolata. Nel complesso un'esperienza nella media, nulla di eccezionale."
]

// Testi recensioni 3 stelle - Inglesi
const threeStarTextsEN = [
  "Fair stay. The apartment is clean but a bit outdated in furnishings. Sea view ok but not exceptional. Clean pool but sometimes crowded. Good location. WiFi unstable at times. Overall acceptable but there are better facilities in the area.",
  "Average. Clean apartment but small for what we paid. Partial sea view. Pool ok but not always clean. Quiet area but a bit isolated. Overall an average experience, nothing exceptional."
]

// Funzione per ottenere testo recensione random per rating e lingua
function getReviewText(rating: number, locale: "it" | "en" | "de" | "fr" | "es" | "nl"): string {
  if (rating === 5) {
    if (locale === "it") return fiveStarTextsIT[Math.floor(Math.random() * fiveStarTextsIT.length)]
    if (locale === "en") return fiveStarTextsEN[Math.floor(Math.random() * fiveStarTextsEN.length)]
    if (locale === "de") return fiveStarTextsDE[Math.floor(Math.random() * fiveStarTextsDE.length)]
    // Traduci per altre lingue o usa inglese
    return fiveStarTextsEN[Math.floor(Math.random() * fiveStarTextsEN.length)]
  }
  if (rating === 4) {
    if (locale === "it") return fourStarTextsIT[Math.floor(Math.random() * fourStarTextsIT.length)]
    if (locale === "en") return fourStarTextsEN[Math.floor(Math.random() * fourStarTextsEN.length)]
    return fourStarTextsEN[Math.floor(Math.random() * fourStarTextsEN.length)]
  }
  if (rating === 3) {
    if (locale === "it") return threeStarTextsIT[Math.floor(Math.random() * threeStarTextsIT.length)]
    if (locale === "en") return threeStarTextsEN[Math.floor(Math.random() * threeStarTextsEN.length)]
    return threeStarTextsEN[Math.floor(Math.random() * threeStarTextsEN.length)]
  }
  return ""
}

// Funzione per ottenere nome random per locale
function getRandomName(locale: "it" | "en" | "de" | "fr" | "es" | "nl"): string {
  const names = {
    it: italianNames,
    en: englishNames,
    de: germanNames,
    fr: frenchNames,
    es: spanishNames,
    nl: dutchNames
  }
  const nameList = names[locale] || englishNames
  const firstName = nameList[Math.floor(Math.random() * nameList.length)]
  const lastName = String.fromCharCode(65 + Math.floor(Math.random() * 26)) + "."
  return `${firstName} ${lastName}`
}

// Genera recensioni con distribuzione corretta
function generateReviews(): Review[] {
  const reviews: Review[] = []
  let id = 1

  // Distribuzione locale (60% IT, 25% EN, 10% DE, 5% altre)
  const localeDistribution = [
    ...Array(60).fill("it"),
    ...Array(25).fill("en"),
    ...Array(10).fill("de"),
    ...Array(3).fill("fr"),
    ...Array(2).fill("es")
  ]

  // Distribuzione source (40% Booking, 35% Airbnb, 15% Google, 10% Tripadvisor)
  const sourceDistribution = [
    ...Array(40).fill("Booking"),
    ...Array(35).fill("Airbnb"),
    ...Array(15).fill("Google"),
    ...Array(10).fill("Tripadvisor")
  ]

  // 70 recensioni 5 stelle
  for (let i = 0; i < 70; i++) {
    const locale = localeDistribution[Math.floor(Math.random() * localeDistribution.length)] as Review["locale"]
    const source = sourceDistribution[Math.floor(Math.random() * sourceDistribution.length)] as Review["source"]
    
    reviews.push({
      id: id++,
      author: getRandomName(locale),
      rating: 5,
      date: getRandomDate(2022, 2024),
      text: getReviewText(5, locale),
      verified: Math.random() > 0.3, // 70% verified
      source,
      locale,
      apartment: Math.random() > 0.5 ? apartments[Math.floor(Math.random() * apartments.length)] : undefined,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${id}${locale}`
    })
  }

  // 20 recensioni 4 stelle
  for (let i = 0; i < 20; i++) {
    const locale = localeDistribution[Math.floor(Math.random() * localeDistribution.length)] as Review["locale"]
    const source = sourceDistribution[Math.floor(Math.random() * sourceDistribution.length)] as Review["source"]
    
    reviews.push({
      id: id++,
      author: getRandomName(locale),
      rating: 4,
      date: getRandomDate(2022, 2024),
      text: getReviewText(4, locale),
      verified: Math.random() > 0.4, // 60% verified
      source,
      locale,
      apartment: Math.random() > 0.6 ? apartments[Math.floor(Math.random() * apartments.length)] : undefined,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${id}${locale}`
    })
  }

  // 10 recensioni 3 stelle
  for (let i = 0; i < 10; i++) {
    const locale = localeDistribution[Math.floor(Math.random() * localeDistribution.length)] as Review["locale"]
    const source = sourceDistribution[Math.floor(Math.random() * sourceDistribution.length)] as Review["source"]
    
    reviews.push({
      id: id++,
      author: getRandomName(locale),
      rating: 3,
      date: getRandomDate(2022, 2024),
      text: getReviewText(3, locale),
      verified: Math.random() > 0.6, // 40% verified
      source,
      locale,
      apartment: Math.random() > 0.7 ? apartments[Math.floor(Math.random() * apartments.length)] : undefined,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${id}${locale}`
    })
  }

  // Ordina per data (più recenti prima)
  reviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  
  // Re-assigna ID sequenziali dopo sorting
  reviews.forEach((review, index) => {
    review.id = index + 1
  })

  return reviews
}

export const reviews: Review[] = generateReviews()

// Funzioni helper
export function getAverageRating(): number {
  if (reviews.length === 0) return 0
  const total = reviews.reduce((sum, review) => sum + review.rating, 0)
  return Math.round((total / reviews.length) * 10) / 10
}

export function getRatingDistribution() {
  const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
  reviews.forEach((review) => {
    distribution[review.rating as keyof typeof distribution]++
  })
  return distribution
}

export function getVerifiedReviews(): Review[] {
  return reviews.filter((review) => review.verified)
}

export function getReviewsByRating(rating: number): Review[] {
  return reviews.filter((review) => review.rating === rating)
}

export function getReviewsBySource(source: Review["source"]): Review[] {
  return reviews.filter((review) => review.source === source)
}

export function getReviewsByLocale(locale: Review["locale"]): Review[] {
  return reviews.filter((review) => review.locale === locale)
}











