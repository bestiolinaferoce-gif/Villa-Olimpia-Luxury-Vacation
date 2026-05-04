/**
 * English content for all 9 Villa Olimpia lodges.
 * Audience: Northern European travellers (UK, Scandinavia, Germany, Netherlands).
 * Tone: warm, direct, conversion-oriented. No fluff.
 * Use: /en/apartments/[slug] pages + EN SEO metadata.
 */

export interface ApartmentContentEn {
  shortDescription: string
  fullDescription: string
  featureBullets: string[]
  perfectFor: string[]
  seoParagraph: string
  seoTitle: string
  seoDescription: string
  seoKeywords: string[]
  technicalSummary: {
    capacity: string
    rooms: string
    bathrooms: string
    outdoorArea: string
    floor: string
  }
}

export const apartmentContentEn: Record<number, ApartmentContentEn> = {
  /** ─── 1 · FRANGIPANE ─────────────────────────────────────────────────── */
  1: {
    shortDescription:
      "Frangipane lodge at Villa Olimpia — 45 m², 2 double bedrooms, private terrace and space for up to 6 guests, steps from the sea at Capopiccolo.",
    fullDescription: `Frangipane is one of the most spacious lodges at Villa Olimpia — a smart choice for families or small groups who want room to breathe without sacrificing location. Set on the ground floor at Capopiccolo, on the Ionian coast of Calabria, it's less than 100 metres from the Spiaggia dei Gigli, one of the clearest beaches in the Capo Rizzuto Marine Protected Area.

What sets Frangipane apart is the rare combination of two real double bedrooms — a genuine plus for groups that want proper sleeping arrangements, not just a sofa bed. Add a spacious living area, a fully equipped kitchen, and a private furnished terrace overlooking the garden, and you have a practical, comfortable base for a week or more by the sea.

Access to the shared outdoor pool and garden is included. The Marine Protected Area offers exceptional snorkelling and boat trips; the Aragonese Castle of Le Castella is a 10-minute drive. Direct booking means no platform fees — and we're always reachable.`,
    featureBullets: [
      "2 real double bedrooms — sleeps up to 6",
      "Private furnished terrace with garden view",
      "Ground floor — easy access, no stairs",
      "Fully equipped kitchen",
      "Shared outdoor pool and garden",
      "Less than 100 m from Spiaggia dei Gigli (Blue Flag beach)",
      "Air conditioning, free Wi-Fi, Smart TV",
      "Linen, towels and bathroom products included",
    ],
    perfectFor: [
      "Families with children",
      "Small groups of friends",
      "Guests who need two separate bedrooms",
    ],
    seoParagraph:
      "Frangipane is a 45 m² ground-floor lodge at Villa Olimpia, Capopiccolo, Isola di Capo Rizzuto. It sleeps up to 6 guests across two double bedrooms and includes a private terrace, shared pool, and direct access to one of Calabria's most protected coastlines. Book directly for the best rate.",
    seoTitle:
      "Frangipane Lodge Villa Olimpia — 6 Guests | 2 Bedrooms | Pool | Capo Rizzuto Calabria",
    seoDescription:
      "Book Frangipane at Villa Olimpia: 45 m², 2 double bedrooms, private terrace, shared pool. Less than 100 m from the beach in the Capo Rizzuto Marine Protected Area, Calabria. Sleeps 6. Direct booking.",
    seoKeywords: [
      "frangipane villa olimpia",
      "holiday apartment capo rizzuto 6 guests",
      "calabria villa pool 2 bedrooms",
      "family holiday southern italy beach",
      "isola di capo rizzuto accommodation",
      "book direct capo rizzuto apartment",
    ],
    technicalSummary: {
      capacity: "6",
      rooms: "2 double bedrooms",
      bathrooms: "1",
      outdoorArea: "Private terrace",
      floor: "Ground floor",
    },
  },

  /** ─── 2 · FIORDALISO ─────────────────────────────────────────────────── */
  2: {
    shortDescription:
      "Fiordaliso lodge at Villa Olimpia — bright 50 m² apartment with balcony overlooking the pool, ideal for couples and families of four near the beach at Capopiccolo.",
    fullDescription: `Fiordaliso is a bright, well-organised lodge on the ground floor of Villa Olimpia, with a balcony that looks directly onto the shared pool. It's a comfortable base for couples and families of four who want easy access to both the pool and the Ionian Sea, without unnecessary complications.

The apartment is compact but well thought out: a double bedroom, a living area with a sofa bed, a fully equipped kitchen, and the balcony that quickly becomes the best spot for morning coffee. The pool is right there — a real advantage when you're travelling with children or simply want to move between water and shade without going anywhere.

Capopiccolo is one of the most rewarding corners of the Capo Rizzuto Marine Protected Area: calm waters, fine sand, and a protected coastline that sees far fewer crowds than the more advertised stretches of Calabria. Fiordaliso sits at the heart of it.`,
    featureBullets: [
      "Balcony with direct pool view",
      "Double bedroom + sofa bed (sleeps 4)",
      "Bright open-plan living area",
      "Fully equipped kitchen",
      "Shared pool and garden access",
      "Less than 100 m from Spiaggia dei Gigli",
      "Air conditioning, free Wi-Fi, Smart TV",
      "Linen, towels and bathroom products included",
    ],
    perfectFor: [
      "Couples",
      "Families 2+2",
      "Guests who want the pool at arm's length",
    ],
    seoParagraph:
      "Fiordaliso is a 50 m² lodge at Villa Olimpia, Capopiccolo, with a pool-view balcony, double bedroom and sofa bed for up to 4 guests. Located in the Capo Rizzuto Marine Protected Area, Calabria, less than 100 m from the beach. Direct booking available.",
    seoTitle:
      "Fiordaliso Lodge Villa Olimpia — Pool View Balcony | 4 Guests | Capo Rizzuto Calabria",
    seoDescription:
      "Book Fiordaliso at Villa Olimpia: 50 m², balcony overlooking the pool, sleeps 4. Capopiccolo, Capo Rizzuto Marine Protected Area, Calabria. Direct booking, no commission.",
    seoKeywords: [
      "fiordaliso villa olimpia",
      "pool view apartment capo rizzuto",
      "holiday lodge calabria couples",
      "capopiccolo isola di capo rizzuto",
      "ionian coast holiday apartment italy",
      "calabria beach apartment 4 guests",
    ],
    technicalSummary: {
      capacity: "4",
      rooms: "1 double bedroom",
      bathrooms: "1",
      outdoorArea: "Pool-view balcony",
      floor: "Ground floor",
    },
  },

  /** ─── 3 · ORCHIDEA ───────────────────────────────────────────────────── */
  3: {
    shortDescription:
      "Orchidea lodge at Villa Olimpia — 48 m² with sea views and two bathrooms, the only lodge in the complex offering this rare combination for couples and families of four.",
    fullDescription: `Orchidea is a practical choice for those who value comfort without overcomplication. At 48 m² on the ground floor of Villa Olimpia, it offers two bathrooms — an unusual feature in this category — combined with a sea view that makes mornings worth waking up for.

The layout is well balanced: a double bedroom, a spacious living area with a sofa bed, a fully equipped kitchen, and the two bathrooms that genuinely make a difference when sharing with another couple or with family. No queuing, no compromises.

Capopiccolo is a quiet, protected stretch of the Ionian coast, inside the Capo Rizzuto Marine Protected Area. The Spiaggia dei Gigli — a Blue Flag beach — is less than 100 metres from the lodge. The shared pool and garden are available throughout your stay. This is uncrowded, unspoilt southern Italy.`,
    featureBullets: [
      "Two bathrooms — rare in this category",
      "Sea views from the lodge",
      "Double bedroom + sofa bed (sleeps 4)",
      "Spacious bright living area",
      "Fully equipped kitchen",
      "Shared outdoor pool and garden",
      "Less than 100 m from Blue Flag beach",
      "Air conditioning, free Wi-Fi, TV LED",
      "Linen, towels and bathroom products included",
    ],
    perfectFor: [
      "Two couples travelling together",
      "Families who want extra bathroom comfort",
      "Guests who prioritise sea views",
    ],
    seoParagraph:
      "Orchidea lodge at Villa Olimpia offers sea views and two bathrooms in a 48 m² ground-floor apartment at Capopiccolo, Isola di Capo Rizzuto. Sleeps 4. Shared pool, less than 100 m from Spiaggia dei Gigli. Book directly for the best rate.",
    seoTitle:
      "Orchidea Lodge Villa Olimpia — Sea View | 2 Bathrooms | 4 Guests | Capo Rizzuto",
    seoDescription:
      "Book Orchidea at Villa Olimpia: 48 m², sea views, 2 bathrooms, sleeps 4. Capopiccolo, Capo Rizzuto Marine Protected Area, Calabria. Shared pool. Direct booking.",
    seoKeywords: [
      "orchidea villa olimpia",
      "sea view apartment capo rizzuto 2 bathrooms",
      "holiday lodge calabria double bathroom",
      "capopiccolo isola di capo rizzuto",
      "apartment sea view ionian coast italy",
      "capo rizzuto holiday apartment direct booking",
    ],
    technicalSummary: {
      capacity: "4",
      rooms: "1 double bedroom",
      bathrooms: "2",
      outdoorArea: "Outdoor space with sea view",
      floor: "Ground floor",
    },
  },

  /** ─── 4 · TULIPANO ───────────────────────────────────────────────────── */
  4: {
    shortDescription:
      "Tulipano lodge at Villa Olimpia — 47 m² with direct garden access, private patio and pool view, a natural choice for families who want to keep things easy from day one.",
    fullDescription: `Tulipano works particularly well for families. Set on the ground floor at Capopiccolo, it has direct access to the garden from the apartment itself — no stairs, no corridors, just step outside and you're there. The private patio faces the pool, which means children can be watched without effort and mornings outdoors are genuinely pleasant.

Inside, the apartment is comfortable and practical: a double bedroom, a sofa bed in the living area, and a fully equipped kitchen that makes self-catering straightforward. The layout is designed for easy living, not for impressing anyone.

The Spiaggia dei Gigli is a short walk. The Capo Rizzuto Marine Protected Area stretches along the coast around you — snorkelling, boat trips, and long swims in clear water are all within easy reach. Le Castella and its Aragonese castle are ten minutes by car.`,
    featureBullets: [
      "Direct access to garden from apartment",
      "Private patio with pool view",
      "Ground floor — no stairs, ideal for families",
      "Double bedroom + sofa bed (sleeps 4)",
      "Fully equipped kitchen",
      "Shared outdoor pool and garden",
      "Less than 100 m from Spiaggia dei Gigli",
      "Air conditioning, free Wi-Fi, Smart TV",
      "Linen, towels and bathroom products included",
    ],
    perfectFor: [
      "Families with young children",
      "Guests who want indoor-outdoor flow",
      "Anyone who wants the pool close at hand",
    ],
    seoParagraph:
      "Tulipano is a 47 m² ground-floor lodge at Villa Olimpia, Capopiccolo, with direct garden access and private patio overlooking the pool. Sleeps 4. Located in the Capo Rizzuto Marine Protected Area, Calabria. Book direct.",
    seoTitle:
      "Tulipano Lodge Villa Olimpia — Garden Access | Patio | 4 Guests | Capo Rizzuto",
    seoDescription:
      "Book Tulipano at Villa Olimpia: 47 m², direct garden access, private patio, pool view. Sleeps 4. Capopiccolo, Capo Rizzuto, Calabria. Less than 100 m from the beach. Direct booking.",
    seoKeywords: [
      "tulipano villa olimpia",
      "family holiday capo rizzuto garden",
      "ground floor holiday apartment calabria",
      "capopiccolo isola di capo rizzuto family",
      "holiday lodge pool view southern italy",
      "calabria beach holiday direct booking",
    ],
    technicalSummary: {
      capacity: "4",
      rooms: "1 double bedroom",
      bathrooms: "1",
      outdoorArea: "Private patio + garden",
      floor: "Ground floor",
    },
  },

  /** ─── 5 · GIGLIO ─────────────────────────────────────────────────────── */
  5: {
    shortDescription:
      "Giglio lodge at Villa Olimpia — 46 m² with two bedrooms, gazebo and outdoor area, the right base for families and groups of up to 6 near the beach at Capopiccolo.",
    fullDescription: `Giglio is built for flexibility. Two bedrooms — a double and a single-and-a-half — plus a sofa bed in the living area means up to 6 guests can stay comfortably without the usual compromises. Add a modern kitchen, private outdoor space with a gazebo, and you have everything a larger group needs to actually enjoy being together.

Set on the ground floor at Capopiccolo, Giglio is particularly suited to families with older children, multi-generational groups, or friends who want their own space at the end of the day. The outdoor area with gazebo is well set up for shaded meals and late evenings outside.

The Spiaggia dei Gigli — Blue Flag and strikingly clear — is less than 100 metres away. The shared pool and garden are available throughout the stay. This is one of the most intact sections of the Ionian coastline, inside the Capo Rizzuto Marine Protected Area.`,
    featureBullets: [
      "2 bedrooms + sofa bed — sleeps up to 6",
      "Private outdoor area with gazebo",
      "Double bedroom + single-and-a-half bedroom",
      "Modern fully equipped kitchen",
      "Shared outdoor pool and garden",
      "Less than 100 m from Blue Flag beach",
      "Ground floor — easy access",
      "Air conditioning, free Wi-Fi, Smart TV",
      "Linen, towels and bathroom products included",
    ],
    perfectFor: [
      "Families with older children",
      "Multi-generational groups",
      "Groups of 5–6 friends",
    ],
    seoParagraph:
      "Giglio is a 46 m² lodge at Villa Olimpia, Capopiccolo, with 2 bedrooms, gazebo and private outdoor space for up to 6 guests. Shared pool. Less than 100 m from the beach in the Capo Rizzuto Marine Protected Area, Calabria. Book directly.",
    seoTitle:
      "Giglio Lodge Villa Olimpia — 6 Guests | 2 Bedrooms | Gazebo | Capo Rizzuto Calabria",
    seoDescription:
      "Book Giglio at Villa Olimpia: 46 m², 2 bedrooms, sleeps 6, gazebo, shared pool. Capopiccolo, Capo Rizzuto Marine Protected Area, Calabria. Less than 100 m from the beach. Direct booking.",
    seoKeywords: [
      "giglio villa olimpia",
      "holiday apartment capo rizzuto 6 guests",
      "family lodge calabria 2 bedrooms",
      "capopiccolo group holiday southern italy",
      "isola di capo rizzuto large apartment",
      "calabria beach accommodation direct",
    ],
    technicalSummary: {
      capacity: "6",
      rooms: "1 double + 1 single-and-a-half bedroom",
      bathrooms: "1",
      outdoorArea: "Private area with gazebo",
      floor: "Ground floor",
    },
  },

  /** ─── 6 · LAVANDA ────────────────────────────────────────────────────── */
  6: {
    shortDescription:
      "Lavanda lodge at Villa Olimpia — 45 m² with private veranda and covered porch in a quiet position, a calm and private choice for couples and small families at Capopiccolo.",
    fullDescription: `Lavanda is the quiet one. Set in a more private position within the Villa Olimpia grounds, it's well suited to couples and small families who want a relaxed pace — somewhere to slow down rather than be at the centre of things. The private veranda and covered porch are genuinely good places to spend an evening, away from noise and distraction.

Inside, the layout is clean and comfortable: a double bedroom, a living area with a sofa bed, and a fully equipped kitchen. Everything works, nothing is excessive. The calm is the point.

Despite its quieter position, Lavanda is still just a short walk from the Spiaggia dei Gigli and the shared pool. The Capo Rizzuto Marine Protected Area surrounds you — one of the most biodiverse and protected coastlines in the Mediterranean. A good choice if the sea is the reason you're here.`,
    featureBullets: [
      "Private veranda and covered porch",
      "Quiet, reserved position in the complex",
      "Double bedroom + sofa bed (sleeps 4)",
      "Fully equipped kitchen",
      "Shared outdoor pool and garden",
      "Less than 100 m from Spiaggia dei Gigli",
      "Air conditioning, free Wi-Fi, Smart TV",
      "Linen, towels and bathroom products included",
    ],
    perfectFor: [
      "Couples seeking privacy and calm",
      "Small families who prefer a quieter spot",
      "Guests on longer stays",
    ],
    seoParagraph:
      "Lavanda is a quiet 45 m² lodge at Villa Olimpia, Capopiccolo, with private veranda and covered porch. Sleeps 4. Shared pool. Less than 100 m from the beach in the Capo Rizzuto Marine Protected Area, Calabria. Book directly.",
    seoTitle:
      "Lavanda Lodge Villa Olimpia — Quiet & Private | Veranda | 4 Guests | Capo Rizzuto",
    seoDescription:
      "Book Lavanda at Villa Olimpia: 45 m², private veranda, covered porch, sleeps 4. Quiet position in Capopiccolo, Capo Rizzuto Marine Protected Area, Calabria. Shared pool. Direct booking.",
    seoKeywords: [
      "lavanda villa olimpia",
      "quiet holiday apartment capo rizzuto",
      "private lodge calabria couples",
      "capopiccolo peaceful accommodation",
      "capo rizzuto marine protected area apartment",
      "italy romantic holiday direct booking",
    ],
    technicalSummary: {
      capacity: "4",
      rooms: "1 double bedroom",
      bathrooms: "1",
      outdoorArea: "Private veranda + covered porch",
      floor: "Ground floor",
    },
  },

  /** ─── 7 · GERANIO ────────────────────────────────────────────────────── */
  7: {
    shortDescription:
      "Geranio — the premium penthouse at Villa Olimpia. 65 m², 2 bedrooms, 2 bathrooms, two semi-panoramic balconies. The largest and most complete lodge in the complex.",
    fullDescription: `Geranio is in a category of its own within Villa Olimpia. At 65 m² on the first floor, it is the largest lodge in the complex and the only one offering two full bedrooms, two bathrooms, and two furnished semi-panoramic balconies. If space, privacy and quality matter, this is the one.

The apartment is genuinely generous: a large living area, a modern fully equipped kitchen, two double bedrooms, and two bathrooms — one ensuite. The two balconies offer open views across the garden and towards the sea. There is room to breathe, to spread out, to actually relax.

Geranio suits families with children who need proper sleeping arrangements, two couples who want independence within the same space, or guests who simply don't want to compromise. The shared pool and garden are available as for all other lodges. The Spiaggia dei Gigli is less than 100 metres away.`,
    featureBullets: [
      "Largest lodge in the complex — 65 m²",
      "Two furnished semi-panoramic balconies",
      "2 full double bedrooms — sleeps up to 6",
      "2 bathrooms (one ensuite)",
      "Large living area and modern kitchen",
      "Shared outdoor pool and garden",
      "Less than 100 m from Blue Flag beach",
      "First floor — panoramic position",
      "Air conditioning, free Wi-Fi, Smart TV",
      "Premium linen and bathroom products",
    ],
    perfectFor: [
      "Families who need two separate bedrooms and bathrooms",
      "Two couples wanting full independence",
      "Guests who want the best in the complex",
    ],
    seoParagraph:
      "Geranio is the premium penthouse at Villa Olimpia, Capopiccolo: 65 m², 2 bedrooms, 2 bathrooms and two semi-panoramic balconies. Sleeps up to 6. Shared pool. Less than 100 m from Spiaggia dei Gigli in the Capo Rizzuto Marine Protected Area, Calabria. Book directly.",
    seoTitle:
      "Geranio Penthouse Villa Olimpia — Premium | 2 Bedrooms | 2 Bathrooms | Capo Rizzuto",
    seoDescription:
      "Book Geranio at Villa Olimpia: 65 m² penthouse, 2 bedrooms, 2 bathrooms, 2 balconies, sleeps 6. The best lodge in the complex. Capopiccolo, Capo Rizzuto, Calabria. Direct booking.",
    seoKeywords: [
      "geranio villa olimpia penthouse",
      "premium holiday apartment capo rizzuto 2 bedrooms",
      "luxury lodge calabria pool sea view",
      "capopiccolo best apartment isola di capo rizzuto",
      "southern italy villa 2 bathrooms holiday",
      "capo rizzuto premium accommodation direct",
    ],
    technicalSummary: {
      capacity: "6",
      rooms: "2 double bedrooms",
      bathrooms: "2 (one ensuite)",
      outdoorArea: "2 semi-panoramic furnished balconies",
      floor: "First floor",
    },
  },

  /** ─── 8 · GARDENIA ───────────────────────────────────────────────────── */
  8: {
    shortDescription:
      "Gardenia lodge at Villa Olimpia — luminous 52 m² on the first floor with two sea-view balconies, ideal for couples and families of four who want light and open views.",
    fullDescription: `Gardenia is all about light and open space. Situated on the first floor of Villa Olimpia at Capopiccolo, it has two balconies with clear views over the Ionian Sea — a rare feature that makes the apartment feel noticeably more spacious and connected to the surroundings.

At 52 m², the layout is well proportioned: a double bedroom, a living area with sofa bed, and a fully equipped kitchen. The two balconies mean there's always somewhere to be outside without going anywhere. Morning light, evening breeze — both come naturally with this position.

The Spiaggia dei Gigli is less than 100 metres from the complex. The Capo Rizzuto Marine Protected Area offers snorkelling, boat tours and some of the cleanest water on the Italian coastline. Le Castella is a short drive. Gardenia is a strong choice for those who want to feel connected to the sea without being directly on it.`,
    featureBullets: [
      "Two balconies with Ionian Sea views",
      "First floor — elevated, open position",
      "Double bedroom + sofa bed (sleeps 4)",
      "Bright spacious living area",
      "Fully equipped kitchen",
      "Shared outdoor pool and garden",
      "Less than 100 m from Spiaggia dei Gigli",
      "Air conditioning, free Wi-Fi, Smart TV",
      "Linen, towels and bathroom products included",
    ],
    perfectFor: [
      "Couples who love light and views",
      "Families 2+2",
      "Guests who prefer a first-floor position",
    ],
    seoParagraph:
      "Gardenia is a 52 m² first-floor lodge at Villa Olimpia, Capopiccolo, with two sea-view balconies. Sleeps 4. Shared pool. Less than 100 m from the beach in the Capo Rizzuto Marine Protected Area, Calabria. Book directly.",
    seoTitle:
      "Gardenia Lodge Villa Olimpia — 2 Sea View Balconies | 4 Guests | Capo Rizzuto",
    seoDescription:
      "Book Gardenia at Villa Olimpia: 52 m², 2 sea-view balconies, sleeps 4. First floor, bright and open. Capopiccolo, Capo Rizzuto Marine Protected Area, Calabria. Shared pool. Direct booking.",
    seoKeywords: [
      "gardenia villa olimpia",
      "sea view apartment capo rizzuto balcony",
      "holiday lodge ionian coast calabria",
      "capopiccolo first floor apartment",
      "isola di capo rizzuto accommodation couples",
      "calabria sea view holiday direct booking",
    ],
    technicalSummary: {
      capacity: "4",
      rooms: "1 double bedroom",
      bathrooms: "1",
      outdoorArea: "2 sea-view balconies",
      floor: "First floor",
    },
  },

  /** ─── 9 · AZALEA ─────────────────────────────────────────────────────── */
  9: {
    shortDescription:
      "Azalea lodge at Villa Olimpia — modern 50 m² on the first floor with a panoramic private terrace and spectacular sea views over the Ionian coast.",
    fullDescription: `Azalea is the most visually striking lodge at Villa Olimpia. Designed with clean modern lines and finished with more care than the average holiday apartment, it sits on the first floor with a panoramic private terrace that frames the Ionian Sea in a way that doesn't need a filter.

At 50 m², the space is thoughtfully arranged: a double bedroom, a living area with sofa bed for up to 4 guests, and a fully equipped kitchen. The terrace is genuinely panoramic — enough space to eat outside comfortably, with an uninterrupted view across the coastline and the Marine Protected Area.

This is Capopiccolo at its best: calm, protected, undeveloped. The Spiaggia dei Gigli is less than 100 metres from the complex. The shared pool is available throughout the stay. Azalea is a strong choice for guests who care about how a place looks and feels, and who want to wake up to that view every morning.`,
    featureBullets: [
      "Panoramic private terrace with spectacular sea views",
      "Modern interior design — the most contemporary lodge",
      "First floor — elevated position",
      "Double bedroom + sofa bed (sleeps 4)",
      "Fully equipped kitchen",
      "Shared outdoor pool and garden",
      "Less than 100 m from Blue Flag beach",
      "Air conditioning, free Wi-Fi, Smart TV",
      "Linen, towels and bathroom products included",
    ],
    perfectFor: [
      "Couples who want design and views",
      "Guests celebrating a special occasion",
      "Anyone who won't compromise on the terrace",
    ],
    seoParagraph:
      "Azalea is a modern 50 m² lodge at Villa Olimpia, Capopiccolo, with a panoramic private terrace and sea views. Sleeps 4. Shared pool. Less than 100 m from the beach in the Capo Rizzuto Marine Protected Area, Calabria. Book directly for the best rate.",
    seoTitle:
      "Azalea Lodge Villa Olimpia — Panoramic Sea View Terrace | Modern | 4 Guests | Capo Rizzuto",
    seoDescription:
      "Book Azalea at Villa Olimpia: 50 m², panoramic private terrace, sea views, modern design. Sleeps 4. Capopiccolo, Capo Rizzuto, Calabria. Shared pool. Less than 100 m from the beach. Direct booking.",
    seoKeywords: [
      "azalea villa olimpia panoramic terrace",
      "modern holiday apartment capo rizzuto sea view",
      "panoramic terrace ionian coast calabria",
      "capopiccolo design apartment sea view",
      "isola di capo rizzuto luxury lodge",
      "calabria romantic holiday panoramic view direct",
    ],
    technicalSummary: {
      capacity: "4",
      rooms: "1 double bedroom",
      bathrooms: "1",
      outdoorArea: "Panoramic private terrace",
      floor: "First floor",
    },
  },
}

/** Helper — returns EN content for a lodge by ID, or null if not found */
export function getApartmentContentEn(id: number): ApartmentContentEn | null {
  return apartmentContentEn[id] ?? null
}
