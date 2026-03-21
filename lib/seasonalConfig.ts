/**
 * Config stagionale centralizzata (aggiornamento manuale disponibilità → redeploy).
 * Anno di campagna: SEASONAL_CAMPAIGN_YEAR (2026 — date coerenti con calendario attuale).
 */
import { SITE_CONFIG } from "@/lib/constants"

export const SEASONAL_CAMPAIGN_YEAR = 2026 as const

export type SeasonalMonth = "maggio" | "giugno" | "luglio" | "other"

export interface MonthConfig {
  month: SeasonalMonth
  label: string
  labelEn: string
  urgencyLevel: 1 | 2 | 3
  availabilityLeft: number
  totalUnits: number
  priceFrom: number
  discountBadge?: string
  heroTagline: string
  heroTaglineEn: string
  seoTitle: string
  seoDescription: string
  seoKeywords: string[]
  ctaLabel: string
  ctaLabelEn: string
  whatsappMessage: string
  emailSubject: string
  /** Primo giorno del mese target (YYYY-MM-DD) per countdown */
  monthStartISO: string
}

export const SEASONAL_CONFIG: Record<SeasonalMonth | "other", MonthConfig> = {
  maggio: {
    month: "maggio",
    label: `Maggio ${SEASONAL_CAMPAIGN_YEAR}`,
    labelEn: `May ${SEASONAL_CAMPAIGN_YEAR}`,
    urgencyLevel: 1,
    availabilityLeft: 4,
    totalUnits: 9,
    priceFrom: 120,
    discountBadge: "Prenota in anticipo — tariffa vantaggiosa diretta",
    heroTagline: "Maggio in Calabria: mare cristallino, ritmo tranquillo, valore alto",
    heroTaglineEn: "May in Calabria: crystal-clear sea, relaxed pace, strong value",
    seoTitle: `Vacanze Maggio ${SEASONAL_CAMPAIGN_YEAR} Calabria | Villa Olimpia Capo Rizzuto`,
    seoDescription:
      `Prenota lodge con piscina a Isola di Capo Rizzuto per maggio ${SEASONAL_CAMPAIGN_YEAR}. Disponibilità aggiornata manualmente, prenotazione diretta senza commissioni OTA.`,
    seoKeywords: [
      `vacanze maggio calabria ${SEASONAL_CAMPAIGN_YEAR}`,
      "villa piscina maggio calabria",
      "appartamento maggio capo rizzuto",
      "mare calabria maggio prezzi",
      "isola capo rizzuto maggio",
    ],
    ctaLabel: "Richiedi disponibilità Maggio",
    ctaLabelEn: "Request May availability",
    whatsappMessage: `Ciao! Sono interessato a prenotare Villa Olimpia per maggio ${SEASONAL_CAMPAIGN_YEAR}. Potete inviarmi disponibilità e tariffe dirette?`,
    emailSubject: `Richiesta preventivo — Maggio ${SEASONAL_CAMPAIGN_YEAR} | Villa Olimpia`,
    monthStartISO: `${SEASONAL_CAMPAIGN_YEAR}-05-01`,
  },
  giugno: {
    month: "giugno",
    label: `Giugno ${SEASONAL_CAMPAIGN_YEAR}`,
    labelEn: `June ${SEASONAL_CAMPAIGN_YEAR}`,
    urgencyLevel: 2,
    availabilityLeft: 3,
    totalUnits: 9,
    priceFrom: 130,
    discountBadge: "Disponibilità limitata — canale diretto",
    heroTagline: "Giugno a Capo Rizzuto: estate che inizia, ancora valore sul diretto",
    heroTaglineEn: "June at Capo Rizzuto: summer begins — still great value booking direct",
    seoTitle: `Vacanze Giugno ${SEASONAL_CAMPAIGN_YEAR} Calabria | Villa Olimpia Capo Rizzuto`,
    seoDescription: `Prenota giugno ${SEASONAL_CAMPAIGN_YEAR} a Villa Olimpia — lodge con piscina, Area Marina Protetta. Verifica disponibilità con risposta rapida.`,
    seoKeywords: [
      `vacanze giugno calabria ${SEASONAL_CAMPAIGN_YEAR}`,
      "villa piscina giugno calabria",
      "appartamento giugno capo rizzuto",
      "mare calabria giugno",
      "lodge piscina calabria giugno",
    ],
    ctaLabel: "Verifica disponibilità Giugno",
    ctaLabelEn: "Check June availability",
    whatsappMessage: `Ciao! Sono interessato a Villa Olimpia per giugno ${SEASONAL_CAMPAIGN_YEAR}. Potete inviarmi disponibilità e tariffe aggiornate?`,
    emailSubject: `Richiesta preventivo — Giugno ${SEASONAL_CAMPAIGN_YEAR} | Villa Olimpia`,
    monthStartISO: `${SEASONAL_CAMPAIGN_YEAR}-06-01`,
  },
  luglio: {
    month: "luglio",
    label: `Luglio ${SEASONAL_CAMPAIGN_YEAR}`,
    labelEn: `July ${SEASONAL_CAMPAIGN_YEAR}`,
    urgencyLevel: 3,
    availabilityLeft: 2,
    totalUnits: 9,
    priceFrom: 150,
    discountBadge: "Alta stagione — ultimi lodge in aggiornamento manuale",
    heroTagline: `Luglio ${SEASONAL_CAMPAIGN_YEAR}: alta domanda — prenota diretto per bloccare le date`,
    heroTaglineEn: `July ${SEASONAL_CAMPAIGN_YEAR}: peak demand — book direct to secure dates`,
    seoTitle: `Villa Olimpia Luglio ${SEASONAL_CAMPAIGN_YEAR} | Lodge con piscina Capo Rizzuto`,
    seoDescription: `Luglio ${SEASONAL_CAMPAIGN_YEAR} a Villa Olimpia: disponibilità aggiornata manualmente. Prenotazione diretta, risposta rapida.`,
    seoKeywords: [
      `vacanze luglio calabria ${SEASONAL_CAMPAIGN_YEAR}`,
      "villa piscina luglio calabria",
      "appartamento luglio capo rizzuto",
      "lodge lusso calabria luglio",
      "villa olimpia luglio disponibilita",
    ],
    ctaLabel: "Blocca date Luglio",
    ctaLabelEn: "Secure July dates",
    whatsappMessage: `Ciao! Vorrei prenotare Villa Olimpia per luglio ${SEASONAL_CAMPAIGN_YEAR}. Potete confermarmi disponibilità e preventivo diretto?`,
    emailSubject: `Richiesta urgente — Luglio ${SEASONAL_CAMPAIGN_YEAR} | Villa Olimpia`,
    monthStartISO: `${SEASONAL_CAMPAIGN_YEAR}-07-01`,
  },
  other: {
    month: "other",
    label: `Estate ${SEASONAL_CAMPAIGN_YEAR}`,
    labelEn: `Summer ${SEASONAL_CAMPAIGN_YEAR}`,
    urgencyLevel: 1,
    availabilityLeft: 6,
    totalUnits: 9,
    priceFrom: 120,
    heroTagline: "Villa Olimpia — il tuo soggiorno in Calabria tra mare e comfort",
    heroTaglineEn: "Villa Olimpia — your Calabria stay between sea and comfort",
    seoTitle: "Villa Olimpia Capo Rizzuto | Lodge con piscina in Calabria",
    seoDescription:
      "Villa Olimpia a Isola di Capo Rizzuto: lodge con piscina, Area Marina Protetta. Prenota direttamente e confronta con le OTA.",
    seoKeywords: ["villa olimpia capo rizzuto", "lodge piscina calabria"],
    ctaLabel: "Richiedi disponibilità",
    ctaLabelEn: "Request availability",
    whatsappMessage: "Ciao! Sono interessato a Villa Olimpia. Potete inviarmi disponibilità e tariffe dirette?",
    emailSubject: "Richiesta informazioni | Villa Olimpia",
    monthStartISO: `${SEASONAL_CAMPAIGN_YEAR}-06-01`,
  },
}

/** Stato UI manuale per lodge (id 1–9). Aggiorna qui quando cambi la griglia. */
export const SEASONAL_LODGE_UI: Record<Exclude<SeasonalMonth, "other">, Record<number, "available" | "occupied" | "last">> = {
  maggio: {
    1: "available",
    2: "available",
    3: "available",
    4: "available",
    5: "occupied",
    6: "occupied",
    7: "occupied",
    8: "occupied",
    9: "occupied",
  },
  giugno: {
    1: "last",
    2: "available",
    3: "available",
    4: "occupied",
    5: "occupied",
    6: "occupied",
    7: "occupied",
    8: "occupied",
    9: "occupied",
  },
  luglio: {
    1: "occupied",
    2: "occupied",
    3: "occupied",
    4: "occupied",
    5: "occupied",
    6: "occupied",
    7: "occupied",
    8: "last",
    9: "available",
  },
}

export function getCurrentSeasonalMonth(now: Date = new Date()): SeasonalMonth {
  const m = now.getMonth() + 1
  if (m <= 4) return "maggio"
  if (m === 5) return "maggio"
  if (m === 6) return "giugno"
  if (m === 7) return "luglio"
  return "other"
}

export function getAvailabilityPercent(config: MonthConfig): number {
  if (config.totalUnits <= 0) return 0
  return Math.round((config.availabilityLeft / config.totalUnits) * 100)
}

export function getUrgencyTailwindClasses(level: 1 | 2 | 3): { bar: string; text: string; pulse?: boolean } {
  if (level === 3) {
    return { bar: "bg-gradient-to-r from-red-700 to-amber-600", text: "text-white", pulse: true }
  }
  if (level === 2) {
    return { bar: "bg-gradient-to-r from-amber-600 to-amber-500", text: "text-slate-900" }
  }
  return { bar: "bg-gradient-to-r from-emerald-800 to-emerald-700", text: "text-white" }
}

export function whatsappUrlForConfig(config: MonthConfig): string {
  const text = encodeURIComponent(config.whatsappMessage)
  const n = SITE_CONFIG.whatsappPrimary
  return `https://wa.me/${n}?text=${text}`
}

export function resolveSeasonalMonthParam(
  value: string | undefined
): SeasonalMonth | "other" {
  if (value === "maggio" || value === "giugno" || value === "luglio") return value
  return "other"
}

export function seasonalLandingPath(month: Exclude<SeasonalMonth, "other">): string {
  return `/${month}-${SEASONAL_CAMPAIGN_YEAR}`
}
