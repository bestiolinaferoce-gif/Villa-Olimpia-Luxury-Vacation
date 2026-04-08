/**
 * Contatti pubblici per prenotazione / WhatsApp / mailto.
 * Priorità: variabili d'ambiente → fallback su SITE_CONFIG (Villa Olimpia).
 */
import { SITE_CONFIG } from "@/lib/constants"

export function getPublicContactEmail(): string {
  const fromEnv = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim()
  if (fromEnv) return fromEnv
  return SITE_CONFIG.email
}

/** Solo cifre per wa.me (es. 393335773390) */
export function getWhatsAppWaMeDigits(): string {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() || SITE_CONFIG.whatsappPrimary
  return raw.replace(/\D/g, "").replace(/^00/, "")
}

/**
 * Messaggio richiesta disponibilità (formato sito ufficiale).
 */
export function buildOfficialAvailabilityMessage(params: {
  checkIn: string
  checkOut: string
  guests: string
  apartment?: string | null
  sourceLabel?: string
  /** When set, builds the summary using these labels (e.g. localized contact form). */
  i18n?: {
    title: string
    dates: string
    guests: string
    apartment: string
    source: string
    noPreference: string
    defaultSourceLabel: string
  }
}): string {
  const L = params.i18n
  const apartmentLine =
    params.apartment?.trim() && params.apartment.trim().length > 0
      ? params.apartment.trim()
      : (L?.noPreference ?? "Nessuna preferenza")
  const source = params.sourceLabel?.trim() || L?.defaultSourceLabel || "sito ufficiale"
  if (!L) {
    return [
      "Richiesta disponibilità Villa Olimpia:",
      `Date: ${params.checkIn} - ${params.checkOut}`,
      `Ospiti: ${params.guests}`,
      `Appartamento: ${apartmentLine}`,
      `Fonte: ${source}`,
    ].join("\n")
  }
  return [
    L.title,
    `${L.dates}: ${params.checkIn} - ${params.checkOut}`,
    `${L.guests}: ${params.guests}`,
    `${L.apartment}: ${apartmentLine}`,
    `${L.source}: ${source}`,
  ].join("\n")
}

export function buildWhatsAppUrlFromText(body: string): string {
  const digits = getWhatsAppWaMeDigits()
  return `https://wa.me/${digits}?text=${encodeURIComponent(body)}`
}

export function buildMailtoAvailabilityFallback(subject: string, body: string): string {
  const to = getPublicContactEmail()
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
