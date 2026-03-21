/**
 * Immagini sotto /public presenti nel repository — usate come fallback quando
 * un asset manca o il caricamento fallisce (evita 404 su path "placeholder" inesistenti).
 */
export const PUBLIC_IMAGE_FALLBACK_GENERIC =
  "/images/villa/gallery/Esterni_Piscina_Notte_01.jpg" as const

export const PUBLIC_IMAGE_FALLBACK_APARTMENT = PUBLIC_IMAGE_FALLBACK_GENERIC

/** Ristorante di default in /public/images/ristoranti/ */
export const PUBLIC_IMAGE_FALLBACK_RESTAURANT = "/images/ristoranti/micomare.jpg" as const

/** Vecchio sentinel da escludere dalle gallery se presente nei dati */
export const LEGACY_APARTMENT_PLACEHOLDER_PATH =
  "/images/villa/appartamenti/placeholder.jpg" as const
