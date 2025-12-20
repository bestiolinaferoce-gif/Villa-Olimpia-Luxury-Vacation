// lib/pool-images.ts
/**
 * Mapping centralizzato foto piscina
 * Tutti i componenti devono importare da qui per evitare errori 404
 */

export const poolImages = {
  // Foto principali (usando path esistenti in public/images/villa/gallery/)
  main: '/images/villa/gallery/piscina_villa_olimpia_.jpg',
  panoramic: '/images/villa/gallery/piscina.jpg',
  sunset: '/images/villa/gallery/piscina_villa_olimpia___3_.jpg',
  
  // Array completo per gallery (tutte le foto piscina disponibili)
  all: [
    '/images/villa/gallery/piscina_villa_olimpia_.jpg',
    '/images/villa/gallery/piscina.jpg',
    '/images/villa/gallery/piscina_villa_olimpia___3_.jpg',
  ].filter(Boolean), // Rimuove undefined se alcune foto non esistono
} as const

// Funzione helper per ottenere foto (senza Math.random per evitare hydration error)
export function getPoolImage(index?: number): string {
  const idx = index !== undefined ? index % poolImages.all.length : 0
  return poolImages.all[idx] || poolImages.main
}

// Funzione helper per gallery responsive
export function getPoolGallery(limit?: number): string[] {
  return limit ? poolImages.all.slice(0, limit) : poolImages.all
}

// Validazione foto esistenti (per debugging)
export function validatePoolImages(): string[] {
  if (typeof window === 'undefined') return []
  
  const missing: string[] = []
  poolImages.all.forEach((path) => {
    const img = new Image()
    img.onerror = () => missing.push(path)
    img.src = path
  })
  return missing
}
