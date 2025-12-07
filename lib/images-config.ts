// Configurazione immagini per Villa Olimpia
// Sostituisci questi path con le tue immagini reali

export const IMAGE_PATHS = {
  // Hero Section
  hero: {
    main: "/images/hero/villa-olimpia-hero.jpg",
    mobile: "/images/hero/villa-olimpia-hero-mobile.jpg",
    alt: "Villa Olimpia - Vista panoramica sulla costa calabrese",
  },
  
  // Appartamenti - Immagini principali
  apartments: {
    "olimpia-1": {
      main: "/images/apartments/olimpia-1/main.jpg",
      gallery: [
        "/images/apartments/olimpia-1/gallery-1.jpg",
        "/images/apartments/olimpia-1/gallery-2.jpg",
        "/images/apartments/olimpia-1/gallery-3.jpg",
        "/images/apartments/olimpia-1/gallery-4.jpg",
      ],
      alt: "Appartamento Vista Mare - Villa Olimpia",
    },
    "olimpia-2": {
      main: "/images/apartments/olimpia-2/main.jpg",
      gallery: [
        "/images/apartments/olimpia-2/gallery-1.jpg",
        "/images/apartments/olimpia-2/gallery-2.jpg",
        "/images/apartments/olimpia-2/gallery-3.jpg",
      ],
      alt: "Suite Deluxe - Villa Olimpia",
    },
    "olimpia-3": {
      main: "/images/apartments/olimpia-3/main.jpg",
      gallery: [
        "/images/apartments/olimpia-3/gallery-1.jpg",
        "/images/apartments/olimpia-3/gallery-2.jpg",
        "/images/apartments/olimpia-3/gallery-3.jpg",
        "/images/apartments/olimpia-3/gallery-4.jpg",
      ],
      alt: "Penthouse Panoramico - Villa Olimpia",
    },
  },
  
  // Location e Attrazioni
  location: {
    tropea: "/images/location/tropea-centro.jpg",
    spiaggia: "/images/location/spiaggia-tropea.jpg",
    santuario: "/images/location/santuario-isola.jpg",
    capoVaticano: "/images/location/capo-vaticano.jpg",
  },
  
  // Servizi
  services: {
    piscina: "/images/services/piscina.jpg",
    terrazza: "/images/services/terrazza-vista-mare.jpg",
    cucina: "/images/services/cucina-attrezzata.jpg",
    camera: "/images/services/camera-lusso.jpg",
  },
  
  // Gallery Generale
  gallery: {
    vistaMare: "/images/gallery/vista-mare.jpg",
    tramonto: "/images/gallery/tramonto-calabria.jpg",
    interni: "/images/gallery/interni-lusso.jpg",
    esterni: "/images/gallery/esterni-villa.jpg",
  },
  
  // SEO e Social
  seo: {
    ogImage: "/images/seo/og-image.jpg", // 1200x630px
    favicon: "/images/seo/favicon.ico",
  },
} as const

// Dimensioni consigliate per le immagini
export const IMAGE_SIZES = {
  hero: { width: 1920, height: 1080 },
  apartment: { width: 1200, height: 800 },
  gallery: { width: 1200, height: 800 },
  thumbnail: { width: 400, height: 300 },
  og: { width: 1200, height: 630 },
} as const

// Istruzioni per ottimizzazione immagini
export const IMAGE_OPTIMIZATION_TIPS = `
Per ottimizzare le immagini:
1. Usa formato WebP o AVIF per migliori performance
2. Comprimi le immagini (TinyPNG, Squoosh)
3. Usa next/image per ottimizzazione automatica
4. Dimensioni consigliate:
   - Hero: 1920x1080px
   - Appartamenti: 1200x800px
   - Gallery: 1200x800px
   - Thumbnail: 400x300px
`


