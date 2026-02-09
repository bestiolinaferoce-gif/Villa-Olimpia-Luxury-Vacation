// Utility per gestire le immagini di Villa Olimpia
// Quando aggiungi le foto reali, aggiorna questi path

export const villaImages = {
  // Hero images
  hero: {
    main: "/images/villa/hero/facciata_villa_olimpia_.jpg",
    mobile: "/images/villa/hero/ingresso_villa_olimpia.jpg",
  },
  
  // Gallery generale
  gallery: [
    "/images/villa/gallery/Esterni_Piscina_Giorno_01.jpg",
    "/images/villa/gallery/Esterni_Piscina_Giorno_02.jpg",
    "/images/villa/gallery/Esterni_Piscina_Giardino_01.jpg",
    "/images/villa/gallery/Esterni_Piscina_Notte_01.jpg",
    "/images/villa/gallery/Esterni_Giardino_Overview_01.jpg",
    "/images/villa/gallery/Esterni_Facciata_Giorno_01.jpg",
    "/images/villa/gallery/Esterni_Facciata_Notte_01.jpg",
    "/images/villa/gallery/Esterni_Facciata_Notte_02.jpg",
    "/images/villa/gallery/Esterni_Ingresso_01.jpg",
    "/images/villa/gallery/Esterni_Portico_Giardino_01.jpg",
    "/images/villa/gallery/Esterni_Gazebo_01.jpg",
    "/images/villa/gallery/Esterni_Barbecue_01.jpg",
    "/images/villa/gallery/Esterni_Spiaggia_01.jpg",
    "/images/villa/gallery/Esterni_Spiaggia_Estiva_01.jpg",
    "/images/villa/gallery/Esterni_Spiaggia_Tramonto_01.jpg",
    "/images/villa/gallery/Esterni_LeCastella_01.jpg",
  ],
  
  // Appartamenti
  apartments: {
    frangipane: [
      "/images/villa/appartamenti/frangipane/main.jpg",
      "/images/villa/appartamenti/frangipane/Frangipane_Living_01.jpg",
      "/images/villa/appartamenti/frangipane/Frangipane_Camera_01.jpg",
    ],
    fiordaliso: [
      "/images/villa/appartamenti/fiordaliso/main.jpg",
      "/images/villa/appartamenti/fiordaliso/Fiordaliso_Living_01.jpg",
      "/images/villa/appartamenti/fiordaliso/Fiordaliso_Bagno_01.jpg",
    ],
    orchidea: [
      "/images/villa/appartamenti/orchidea/main.jpg",
      "/images/villa/appartamenti/orchidea/Orchidea_Living_02.jpg",
      "/images/villa/appartamenti/orchidea/Orchidea_Camera_01.jpg",
    ],
    tulipano: [
      "/images/villa/appartamenti/tulipano/main.jpg",
      "/images/villa/appartamenti/tulipano/Tulipano_Living_02.jpg",
      "/images/villa/appartamenti/tulipano/Tulipano_Camera_01.jpg",
    ],
    giglio: [
      "/images/villa/appartamenti/giglio/main.jpg",
      "/images/villa/appartamenti/giglio/Giglio_Living_01.jpg",
      "/images/villa/appartamenti/giglio/Giglio_Camera_01.jpg",
    ],
    lavanda: [
      "/images/villa/appartamenti/lavanda/main.jpg",
      "/images/villa/appartamenti/lavanda/Lavanda_Living_01.jpg",
      "/images/villa/appartamenti/lavanda/Lavanda_Camera_01.jpg",
    ],
    geranio: [
      "/images/villa/appartamenti/geranio/main.jpg",
      "/images/villa/appartamenti/geranio/Geranio_Camera_01.jpg",
      "/images/villa/appartamenti/geranio/Geranio_Bagno_01.jpg",
    ],
    gardenia: [
      "/images/villa/appartamenti/gardenia/main.jpg",
      "/images/villa/appartamenti/gardenia/Gardenia_Living_01.jpg",
      "/images/villa/appartamenti/gardenia/Gardenia_Camera_01.jpg",
    ],
    azalea: [
      "/images/villa/appartamenti/azalea/main.jpg",
      "/images/villa/appartamenti/azalea/Azalea_Living_01.jpg",
      "/images/villa/appartamenti/azalea/Azalea_Camera_01.jpg",
    ],
  },
  
  // Location
  location: [
    "/images/villa/location/spiaggia-dei-gigli.jpg",
    "/images/villa/location/spiaggia-dei-gigli-2.jpg",
    "/images/villa/location/beach-2.jpg",
    "/images/villa/location/beach-3.jpg",
    "/images/villa/location/beach-4.jpg",
    "/images/villa/location/beach-5.jpg",
  ],
} as const

// Funzione helper per ottenere immagini con fallback
export function getImagePath(path: string, fallback?: string): string {
  // In produzione, verifica se l'immagine esiste
  // Per ora restituisce il path (Next.js gestirà il 404)
  return path
}

