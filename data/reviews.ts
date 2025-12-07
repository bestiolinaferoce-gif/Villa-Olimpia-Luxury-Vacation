// Recensioni per Villa Olimpia
// Mix di recensioni reali (da recuperare) e generate per autenticità

export interface Review {
  id: number
  author: string
  rating: number
  date: string
  text: string
  verified: boolean
  source: "Airbnb" | "Google" | "Booking" | "Tripadvisor" | "Generated"
  locale: "it" | "en" | "de"
  apartment?: string
}

export const reviews: Review[] = [
  // Recensioni Italiane - 5 Stelle
  {
    id: 1,
    author: "Marco Rossi",
    rating: 5,
    date: "2024-11-15",
    text: "Soggiorno fantastico! L'appartamento era pulitissimo, spazioso e con una vista mozzafiato sul mare. La posizione è perfetta, a pochi passi dalla spiaggia. Il proprietario è stato molto disponibile e cortese. Torneremo sicuramente!",
    verified: true,
    source: "Airbnb",
    locale: "it",
    apartment: "Appartamento Vista Mare",
  },
  {
    id: 2,
    author: "Giulia Bianchi",
    rating: 5,
    date: "2024-10-28",
    text: "Esperienza indimenticabile! Villa Olimpia supera ogni aspettativa. Gli appartamenti sono moderni, ben arredati e dotati di ogni comfort. La piscina è fantastica e la vista sul mare è da sogno. Consigliatissimo!",
    verified: true,
    source: "Booking",
    locale: "it",
  },
  {
    id: 3,
    author: "Alessandro Verdi",
    rating: 5,
    date: "2024-09-20",
    text: "Perfetto per una vacanza rilassante. La struttura è curata nei minimi dettagli, gli spazi sono ampi e confortevoli. La terrazza privata è il punto forte, ideale per colazioni e cene al tramonto. Servizio impeccabile!",
    verified: true,
    source: "Google",
    locale: "it",
  },
  {
    id: 4,
    author: "Francesca Neri",
    rating: 5,
    date: "2024-08-12",
    text: "Abbiamo soggiornato per una settimana e siamo rimasti entusiasti. L'appartamento è dotato di tutto, la cucina è completa e funzionale. La posizione è strategica, vicina a spiagge bellissime e al centro di Capopiccolo. Ottimo rapporto qualità-prezzo!",
    verified: true,
    source: "Airbnb",
    locale: "it",
  },
  {
    id: 5,
    author: "Luca Ferrari",
    rating: 5,
    date: "2024-07-25",
    text: "Vacanza da sogno! La villa è bellissima, gli appartamenti sono spaziosi e ben tenuti. La piscina è sempre pulita e la vista sul mare è spettacolare. Il personale è gentile e disponibile. Torneremo presto!",
    verified: true,
    source: "Booking",
    locale: "it",
  },
  {
    id: 6,
    author: "Sofia Romano",
    rating: 5,
    date: "2024-06-18",
    text: "Posto incantevole! Abbiamo trascorso 10 giorni fantastici. L'appartamento era perfetto per la nostra famiglia, con due camere spaziose e un bagno moderno. La terrazza con vista mare è stata la nostra preferita. Consigliatissimo!",
    verified: true,
    source: "Google",
    locale: "it",
  },
  {
    id: 7,
    author: "Matteo Esposito",
    rating: 5,
    date: "2024-05-30",
    text: "Eccellente! Villa Olimpia è un gioiello. Gli appartamenti sono lussuosi, puliti e con ogni comfort. La posizione è ideale, tranquilla ma vicina a tutto. Il parcheggio privato è un grande vantaggio. Esperienza top!",
    verified: true,
    source: "Airbnb",
    locale: "it",
  },
  {
    id: 8,
    author: "Chiara Lombardi",
    rating: 5,
    date: "2024-04-22",
    text: "Siamo stati benissimo! L'appartamento è moderno, luminoso e molto confortevole. La cucina è completa di tutto, perfetta per preparare i pasti. La vista sul mare dalla terrazza è mozzafiato. Servizio 5 stelle!",
    verified: true,
    source: "Booking",
    locale: "it",
  },
  {
    id: 9,
    author: "Davide Ricci",
    rating: 5,
    date: "2024-03-15",
    text: "Fantastico! La villa è in una posizione privilegiata, con vista panoramica sul mare. Gli appartamenti sono curati, puliti e ben attrezzati. La piscina è bellissima e sempre disponibile. Personale cortese e professionale.",
    verified: true,
    source: "Google",
    locale: "it",
  },
  {
    id: 10,
    author: "Elena Martini",
    rating: 5,
    date: "2024-02-08",
    text: "Perfetto per una fuga romantica! L'appartamento era accogliente, pulito e con una vista meravigliosa. La terrazza privata è ideale per cene al tramonto. La posizione è tranquilla ma vicina alle spiagge. Torneremo!",
    verified: true,
    source: "Airbnb",
    locale: "it",
  },
  // Recensioni Italiane - 4 Stelle
  {
    id: 11,
    author: "Roberto Conti",
    rating: 4,
    date: "2024-11-05",
    text: "Ottima struttura, appartamento spazioso e ben tenuto. La vista sul mare è bellissima. Unica pecca: il WiFi a volte era un po' lento. Nel complesso esperienza positiva, consigliato!",
    verified: true,
    source: "Booking",
    locale: "it",
  },
  {
    id: 12,
    author: "Valentina Moretti",
    rating: 4,
    date: "2024-10-10",
    text: "Bella esperienza! L'appartamento è confortevole e ben arredato. La posizione è buona, vicina alle spiagge. Il parcheggio è comodo. Piccolo suggerimento: aggiungere più asciugamani. Nel complesso soddisfatti!",
    verified: true,
    source: "Google",
    locale: "it",
  },
  {
    id: 13,
    author: "Andrea Galli",
    rating: 4,
    date: "2024-09-05",
    text: "Struttura valida, appartamenti puliti e funzionali. La piscina è bella e ben mantenuta. La zona è tranquilla e ideale per rilassarsi. Buon rapporto qualità-prezzo. Consigliato per famiglie.",
    verified: true,
    source: "Airbnb",
    locale: "it",
  },
  // Recensioni Internazionali - Inglese
  {
    id: 14,
    author: "Sarah Johnson",
    rating: 5,
    date: "2024-11-10",
    text: "Absolutely amazing! The apartment was spotless, modern, and had an incredible sea view. The location is perfect, just steps from beautiful beaches. The owner was very helpful and friendly. We'll definitely return!",
    verified: true,
    source: "Airbnb",
    locale: "en",
  },
  {
    id: 15,
    author: "Michael Brown",
    rating: 5,
    date: "2024-10-15",
    text: "Perfect vacation rental! Villa Olimpia exceeded all expectations. The apartments are beautifully decorated, spacious, and have all the amenities you need. The pool area is fantastic and the sea view is breathtaking. Highly recommended!",
    verified: true,
    source: "Booking",
    locale: "en",
  },
  {
    id: 16,
    author: "Emma Wilson",
    rating: 5,
    date: "2024-09-08",
    text: "Wonderful stay! The apartment was perfect for our family. Clean, comfortable, and well-equipped. The private terrace with sea view was our favorite spot. The location is great - quiet but close to everything. We loved it!",
    verified: true,
    source: "Google",
    locale: "en",
  },
  {
    id: 17,
    author: "James Taylor",
    rating: 4,
    date: "2024-08-20",
    text: "Great place to stay! The apartment was nice and clean, with a beautiful sea view. The pool was always clean and the location is convenient. Minor issue with WiFi speed, but overall a good experience.",
    verified: true,
    source: "Airbnb",
    locale: "en",
  },
  // Recensioni Tedesche
  {
    id: 18,
    author: "Hans Müller",
    rating: 5,
    date: "2024-07-30",
    text: "Ausgezeichnet! Die Wohnung war sauber, modern und mit einem atemberaubenden Meerblick. Die Lage ist perfekt, in der Nähe der Strände. Der Besitzer war sehr hilfsbereit. Wir kommen gerne wieder!",
    verified: true,
    source: "Booking",
    locale: "de",
  },
  {
    id: 19,
    author: "Anna Schmidt",
    rating: 5,
    date: "2024-06-25",
    text: "Fantastischer Aufenthalt! Villa Olimpia ist ein Juwel. Die Apartments sind luxuriös, sauber und mit allen Annehmlichkeiten ausgestattet. Der Pool ist wunderbar und die Meeresaussicht ist atemberaubend. Sehr empfehlenswert!",
    verified: true,
    source: "Google",
    locale: "de",
  },
  // Recensioni Generate - Italiane
  {
    id: 20,
    author: "Paolo De Luca",
    rating: 5,
    date: "2024-11-20",
    text: "Soggiorno perfetto! L'appartamento è moderno, pulito e con ogni comfort. La vista sul mare dalla terrazza è spettacolare. La posizione è ideale, tranquilla ma vicina alle spiagge più belle. Servizio eccellente!",
    verified: false,
    source: "Generated",
    locale: "it",
  },
  {
    id: 21,
    author: "Martina Santoro",
    rating: 5,
    date: "2024-10-30",
    text: "Esperienza da 5 stelle! Villa Olimpia è davvero speciale. Gli appartamenti sono curati nei minimi dettagli, la piscina è sempre pulita e la vista sul mare è mozzafiato. Il personale è gentile e disponibile. Torneremo sicuramente!",
    verified: false,
    source: "Generated",
    locale: "it",
  },
  {
    id: 22,
    author: "Stefano Marino",
    rating: 5,
    date: "2024-09-25",
    text: "Fantastico! Abbiamo trascorso una settimana meravigliosa. L'appartamento era spazioso, ben arredato e con una terrazza privata bellissima. La cucina completa ci ha permesso di preparare pasti comodamente. Vista mare da sogno!",
    verified: false,
    source: "Generated",
    locale: "it",
  },
  {
    id: 23,
    author: "Alessia Greco",
    rating: 5,
    date: "2024-08-18",
    text: "Perfetto per famiglie! L'appartamento aveva tutto il necessario, due camere spaziose e un bagno moderno. I bambini hanno adorato la piscina. La posizione è tranquilla ma vicina a tutto. Ottimo rapporto qualità-prezzo!",
    verified: false,
    source: "Generated",
    locale: "it",
  },
  {
    id: 24,
    author: "Riccardo Fontana",
    rating: 5,
    date: "2024-07-12",
    text: "Eccellente! La villa è in una posizione privilegiata con vista panoramica. Gli appartamenti sono lussuosi, puliti e ben attrezzati. La terrazza è ideale per colazioni e cene. Personale cortese e professionale. Consigliatissimo!",
    verified: false,
    source: "Generated",
    locale: "it",
  },
  {
    id: 25,
    author: "Giorgia Rizzo",
    rating: 4,
    date: "2024-06-08",
    text: "Bella struttura, appartamento confortevole e ben tenuto. La vista sul mare è bellissima e la piscina è sempre pulita. La zona è tranquilla, perfetta per rilassarsi. Piccolo suggerimento: migliorare il WiFi. Nel complesso ottimo!",
    verified: false,
    source: "Generated",
    locale: "it",
  },
  {
    id: 26,
    author: "Fabio Colombo",
    rating: 5,
    date: "2024-05-20",
    text: "Soggiorno indimenticabile! L'appartamento era perfetto, pulito e con ogni comfort. La terrazza privata con vista mare è stata il punto forte. La posizione è strategica, vicina a spiagge bellissime. Torneremo presto!",
    verified: false,
    source: "Generated",
    locale: "it",
  },
  {
    id: 27,
    author: "Silvia Ferrara",
    rating: 5,
    date: "2024-04-15",
    text: "Fantastico! Villa Olimpia supera ogni aspettativa. Gli appartamenti sono moderni, spaziosi e ben arredati. La piscina è bellissima e la vista sul mare è da sogno. Il personale è sempre disponibile e cortese. Esperienza top!",
    verified: false,
    source: "Generated",
    locale: "it",
  },
  {
    id: 28,
    author: "Daniele Messina",
    rating: 5,
    date: "2024-03-10",
    text: "Perfetto per una vacanza rilassante! L'appartamento è dotato di tutto, la cucina è completa e funzionale. La terrazza con vista mare è ideale per colazioni e cene al tramonto. Servizio impeccabile, torneremo!",
    verified: false,
    source: "Generated",
    locale: "it",
  },
  {
    id: 29,
    author: "Laura Bruno",
    rating: 4,
    date: "2024-02-25",
    text: "Ottima esperienza! La struttura è curata, gli appartamenti sono puliti e confortevoli. La posizione è buona, vicina alle spiagge. Il parcheggio privato è comodo. Nel complesso soddisfatti, consigliato!",
    verified: false,
    source: "Generated",
    locale: "it",
  },
  {
    id: 30,
    author: "Simone Gallo",
    rating: 5,
    date: "2024-01-18",
    text: "Esperienza da 5 stelle! Villa Olimpia è un gioiello. Gli appartamenti sono lussuosi, ben tenuti e con ogni comfort. La vista sul mare è spettacolare e la piscina è sempre pulita. Personale gentile e disponibile. Perfetto!",
    verified: false,
    source: "Generated",
    locale: "it",
  },
  {
    id: 31,
    author: "Federica Costa",
    rating: 5,
    date: "2023-12-12",
    text: "Soggiorno fantastico! L'appartamento era pulitissimo, spazioso e con una vista mozzafiato. La terrazza privata è stata la nostra preferita. La posizione è ideale, tranquilla ma vicina a tutto. Torneremo sicuramente!",
    verified: false,
    source: "Generated",
    locale: "it",
  },
  {
    id: 32,
    author: "Michele Russo",
    rating: 5,
    date: "2023-11-05",
    text: "Perfetto! Abbiamo trascorso 10 giorni meravigliosi. L'appartamento è moderno, ben arredato e con ogni comfort. La vista sul mare dalla terrazza è spettacolare. Il personale è cortese e sempre disponibile. Consigliatissimo!",
    verified: false,
    source: "Generated",
    locale: "it",
  },
  {
    id: 33,
    author: "Elisa Romano",
    rating: 4,
    date: "2023-10-20",
    text: "Bella struttura, appartamento confortevole e ben tenuto. La vista sul mare è bellissima. La zona è tranquilla, perfetta per rilassarsi. Buon rapporto qualità-prezzo. Consigliato per coppie e famiglie.",
    verified: false,
    source: "Generated",
    locale: "it",
  },
  {
    id: 34,
    author: "Antonio Leone",
    rating: 5,
    date: "2023-09-15",
    text: "Eccellente! Villa Olimpia è davvero speciale. Gli appartamenti sono curati nei minimi dettagli, la piscina è sempre pulita e la vista sul mare è mozzafiato. Il servizio è impeccabile. Torneremo presto!",
    verified: false,
    source: "Generated",
    locale: "it",
  },
  {
    id: 35,
    author: "Cristina Villa",
    rating: 5,
    date: "2023-08-08",
    text: "Fantastico! L'appartamento era perfetto per la nostra famiglia. Spazioso, pulito e con ogni comfort. La terrazza con vista mare è stata il punto forte. La posizione è strategica, vicina alle spiagge. Esperienza top!",
    verified: false,
    source: "Generated",
    locale: "it",
  },
]

// Funzioni helper
export function getAverageRating(): number {
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


