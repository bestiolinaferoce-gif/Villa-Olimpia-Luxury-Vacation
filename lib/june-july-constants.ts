/**
 * Villa Olimpia — June/July Conversion Engine
 * Constants for dedicated Giugno/Luglio booking focus
 */

export const JUNE_JULY_CONFIG = {
  /** Remaining availability message - keep credible, avoid spam */
  remainingAvailability: "Solo 4 appartamenti ancora liberi per giugno e luglio",
  /** Early booking incentive */
  earlyBookingTitle: "Prenota entro fine marzo",
  earlyBookingSubtitle: "Sconto early booking sui soggiorni di 7+ notti",
  /** Long-stay advantage */
  longStayMinimumNights: 7,
  longStayBenefit: "Sconto dedicato sui soggiorni di 7+ notti",
  /** Cancellation reassurance */
  cancellationReassurance:
    "Politica di cancellazione flessibile: modifiche o annullamenti possibili fino a 30 giorni prima dell'arrivo.",
  /** Why June/July */
  whyTitle: "Perché Giugno e Luglio a Villa Olimpia",
  whySubtitle:
    "Mare caldo, meno affollamento, temperatura perfetta. La Calabria in primavera-estate è ideale per famiglie e coppie.",
  /** Trust signals */
  trustSignals: [
    "Risposta entro 24 ore",
    "Prenotazione diretta senza commissioni",
    "Politica cancellazione flessibile",
  ],
} as const

/** Check if current date falls in June/July booking season (Feb–Jul for promo) */
export function isJuneJulyPromoSeason(): boolean {
  if (typeof window === "undefined") {
    const now = new Date()
    const m = now.getMonth()
    return m >= 1 && m <= 6 // Feb–Jun: show promo
  }
  const now = new Date()
  const m = now.getMonth()
  return m >= 1 && m <= 6
}
