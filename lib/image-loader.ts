// Utility per gestire le immagini di Villa Olimpia
// Quando aggiungi le foto reali, aggiorna questi path

export const villaImages = {
  // Hero images
  hero: {
    main: "/images/villa/hero/villa-olimpia-hero.jpg",
    mobile: "/images/villa/hero/villa-olimpia-hero-mobile.jpg",
  },
  
  // Gallery generale
  gallery: [
    "/images/villa/gallery/vista-mare-1.jpg",
    "/images/villa/gallery/piscina.jpg",
    "/images/villa/gallery/terrazza.jpg",
    "/images/villa/gallery/appartamento-1.jpg",
    "/images/villa/gallery/appartamento-2.jpg",
    "/images/villa/gallery/cucina.jpg",
    "/images/villa/gallery/camera.jpg",
    "/images/villa/gallery/bagno.jpg",
    "/images/villa/gallery/esterni.jpg",
    "/images/villa/gallery/tramonto.jpg",
    "/images/villa/gallery/spiaggia.jpg",
    "/images/villa/gallery/vista-panoramica.jpg",
  ],
  
  // Appartamenti
  apartments: {
    "olimpia-1": [
      "/images/villa/apartments/olimpia-1/main.jpg",
      "/images/villa/apartments/olimpia-1/sala.jpg",
      "/images/villa/apartments/olimpia-1/camera.jpg",
      "/images/villa/apartments/olimpia-1/terrazza.jpg",
    ],
    "olimpia-2": [
      "/images/villa/apartments/olimpia-2/main.jpg",
      "/images/villa/apartments/olimpia-2/interni.jpg",
      "/images/villa/apartments/olimpia-2/vista.jpg",
    ],
    "olimpia-3": [
      "/images/villa/apartments/olimpia-3/main.jpg",
      "/images/villa/apartments/olimpia-3/terrazza.jpg",
      "/images/villa/apartments/olimpia-3/vista-360.jpg",
    ],
  },
  
  // Location
  location: [
    "/images/villa/location/capopiccolo.jpg",
    "/images/villa/location/spiaggia.jpg",
    "/images/villa/location/le-castella.jpg",
    "/images/villa/location/area-marina.jpg",
  ],
} as const

// Funzione helper per ottenere immagini con fallback
export function getImagePath(path: string, fallback?: string): string {
  // In produzione, verifica se l'immagine esiste
  // Per ora restituisce il path (Next.js gestirà il 404)
  return path
}


