/**
 * Config stagionale centralizzata (aggiornamento manuale disponibilità → redeploy).
 * Anno di campagna: SEASONAL_CAMPAIGN_YEAR (2026 — date coerenti con calendario attuale).
 */
import { SITE_CONFIG } from "@/lib/constants"

export const SEASONAL_CAMPAIGN_YEAR = 2026 as const

export type SeasonalMonth = "maggio" | "giugno" | "luglio" | "settembre" | "ottobre" | "other"

export interface MonthConfig {
  month: SeasonalMonth
  label: string
  labelEn: string
  urgencyLevel: 1 | 2 | 3
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
    discountBadge: "Giugno da spingere ora — proposta diretta su date libere e risposta rapida",
    heroTagline: "Giugno a Capo Rizzuto: mare già piacevole, piscina stagionale, settimane da bloccare ora",
    heroTaglineEn: "June at Capo Rizzuto: pleasant early-summer sea, seasonal pool, calm pace for families",
    seoTitle: `Giugno ${SEASONAL_CAMPAIGN_YEAR} Capo Rizzuto | Appartamenti con Piscina per Famiglie`,
    seoDescription: `Vacanze famiglia a giugno a Isola di Capo Rizzuto (Bandiera Blu 2026): piscina, mare a pochi minuti, appartamenti con cucina e zona pranzo. Più calmo di agosto. Richiedi date e tariffe.`,
    seoKeywords: [
      `vacanze giugno calabria ${SEASONAL_CAMPAIGN_YEAR}`,
      "appartamento famiglie giugno capo rizzuto",
      "villa piscina giugno calabria",
      "mare calabria giugno tranquillo",
      "appartamento con cucina giugno capo rizzuto",
      "isola capo rizzuto giugno bandiera blu",
    ],
    ctaLabel: "Ricevi proposta Giugno",
    ctaLabelEn: "Request June dates",
    whatsappMessage: `Ciao! Vorrei informazioni per Villa Olimpia a giugno ${SEASONAL_CAMPAIGN_YEAR}: potete confermarmi disponibilità e tariffe? Grazie.`,
    emailSubject: `Richiesta disponibilità — Giugno ${SEASONAL_CAMPAIGN_YEAR} | Villa Olimpia`,
    monthStartISO: `${SEASONAL_CAMPAIGN_YEAR}-06-01`,
  },
  luglio: {
    month: "luglio",
    label: `Luglio ${SEASONAL_CAMPAIGN_YEAR}`,
    labelEn: `July ${SEASONAL_CAMPAIGN_YEAR}`,
    urgencyLevel: 3,
    discountBadge: "Luglio solo su verifica date — meglio richiesta rapida e flessibile",
    heroTagline: `Luglio ${SEASONAL_CAMPAIGN_YEAR}: alta domanda — prenota diretto per bloccare le date`,
    heroTaglineEn: `July ${SEASONAL_CAMPAIGN_YEAR}: peak demand — book direct to secure dates`,
    seoTitle: `Luglio ${SEASONAL_CAMPAIGN_YEAR} Capo Rizzuto | Villa Olimpia Lodge con Piscina`,
    seoDescription: `Prenota il tuo luglio a Capo Rizzuto. Lodge privati con piscina e accesso diretto alla Spiaggia dei Gigli. Disponibilità limitata — verifica ora.`,
    seoKeywords: [
      `vacanze luglio calabria ${SEASONAL_CAMPAIGN_YEAR}`,
      "villa piscina luglio calabria",
      "appartamento luglio capo rizzuto",
      "lodge lusso calabria luglio",
      "villa olimpia luglio disponibilita",
    ],
    ctaLabel: "Verifica ultime date Luglio",
    ctaLabelEn: "Secure July dates",
    whatsappMessage: `Ciao! Vorrei prenotare Villa Olimpia per luglio ${SEASONAL_CAMPAIGN_YEAR}. Potete confermarmi disponibilità e preventivo diretto?`,
    emailSubject: `Richiesta urgente — Luglio ${SEASONAL_CAMPAIGN_YEAR} | Villa Olimpia`,
    monthStartISO: `${SEASONAL_CAMPAIGN_YEAR}-07-01`,
  },
  settembre: {
    month: "settembre",
    label: `Settembre ${SEASONAL_CAMPAIGN_YEAR}`,
    labelEn: `September ${SEASONAL_CAMPAIGN_YEAR}`,
    urgencyLevel: 2,
    discountBadge: "Settembre smart — mare ancora caldo, meno folla e proposta diretta per soggiorni 7+ notti",
    heroTagline: "Settembre a Capo Rizzuto: mare caldo, spiagge libere e ritmi eleganti",
    heroTaglineEn: "September in Calabria: warm sea, quieter beaches and better-value stays",
    seoTitle: `Settembre ${SEASONAL_CAMPAIGN_YEAR} Capo Rizzuto | Mare Caldo e Lodge con Piscina`,
    seoDescription:
      `Vacanze a settembre ${SEASONAL_CAMPAIGN_YEAR} a Capo Rizzuto: appartamenti con piscina a Villa Olimpia, Spiaggia dei Gigli a circa 100 metri, meno folla e prenotazione diretta.`,
    seoKeywords: [
      `vacanze settembre calabria ${SEASONAL_CAMPAIGN_YEAR}`,
      "settembre capo rizzuto",
      "mare caldo settembre calabria",
      "appartamenti calabria settembre piscina",
      "september calabria beach holiday",
      "northern europe september italy holiday",
    ],
    ctaLabel: "Richiedi disponibilità Settembre",
    ctaLabelEn: "Request September availability",
    whatsappMessage: `Ciao! Vorrei informazioni per Villa Olimpia a settembre ${SEASONAL_CAMPAIGN_YEAR}: potete inviarmi disponibilità e tariffe dirette per le mie date?`,
    emailSubject: `Richiesta disponibilità — Settembre ${SEASONAL_CAMPAIGN_YEAR} | Villa Olimpia`,
    monthStartISO: `${SEASONAL_CAMPAIGN_YEAR}-09-01`,
  },
  ottobre: {
    month: "ottobre",
    label: `Ottobre ${SEASONAL_CAMPAIGN_YEAR}`,
    labelEn: `October ${SEASONAL_CAMPAIGN_YEAR}`,
    urgencyLevel: 1,
    discountBadge: "Ottobre lento — ideale per coppie, long stay, smart working e ospiti Nord Europa",
    heroTagline: "Ottobre in Calabria: luce mite, mare vicino e soggiorni lunghi più convenienti",
    heroTaglineEn: "October in Calabria: mild light, seaside living and stronger long-stay value",
    seoTitle: `Ottobre ${SEASONAL_CAMPAIGN_YEAR} Calabria Mare | Villa Olimpia Capo Rizzuto`,
    seoDescription:
      `Soggiorni a ottobre ${SEASONAL_CAMPAIGN_YEAR} a Villa Olimpia Capo Rizzuto: appartamenti con cucina, piscina stagionale, mare vicino e preventivo diretto per coppie, famiglie e long stay.`,
    seoKeywords: [
      `vacanze ottobre calabria ${SEASONAL_CAMPAIGN_YEAR}`,
      "ottobre capo rizzuto",
      "calabria october holiday",
      "long stay calabria october",
      "appartamenti calabria ottobre mare",
      "autumn beach holiday southern italy",
    ],
    ctaLabel: "Richiedi disponibilità Ottobre",
    ctaLabelEn: "Request October availability",
    whatsappMessage: `Ciao! Sto valutando Villa Olimpia per ottobre ${SEASONAL_CAMPAIGN_YEAR}. Potete inviarmi disponibilità e tariffe dirette, anche per soggiorni lunghi?`,
    emailSubject: `Richiesta disponibilità — Ottobre ${SEASONAL_CAMPAIGN_YEAR} | Villa Olimpia`,
    monthStartISO: `${SEASONAL_CAMPAIGN_YEAR}-10-01`,
  },
  other: {
    month: "other",
    label: `Estate ${SEASONAL_CAMPAIGN_YEAR}`,
    labelEn: `Summer ${SEASONAL_CAMPAIGN_YEAR}`,
    urgencyLevel: 1,
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

export function getCurrentSeasonalMonth(now: Date = new Date()): SeasonalMonth {
  const m = now.getMonth() + 1
  const d = now.getDate()
  if (m <= 4) return "maggio"
  // Da fine maggio la pressione commerciale deve spostarsi su giugno:
  // gli utenti che prenotano last-minute hanno bisogno di una CTA chiara.
  if (m === 5) return d >= 20 ? "giugno" : "maggio"
  if (m === 6) return "giugno"
  if (m === 7) return "luglio"
  if (m === 8) return "settembre"
  if (m === 9) return "settembre"
  if (m === 10) return d <= 20 ? "ottobre" : "other"
  return "other"
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
  if (value === "maggio" || value === "giugno" || value === "luglio" || value === "settembre" || value === "ottobre") return value
  return "other"
}

export function seasonalLandingPath(month: Exclude<SeasonalMonth, "other">): string {
  if (month === "settembre") return "/settembre-capo-rizzuto"
  if (month === "ottobre") return "/ottobre-capo-rizzuto"
  return `/${month}-${SEASONAL_CAMPAIGN_YEAR}`
}
