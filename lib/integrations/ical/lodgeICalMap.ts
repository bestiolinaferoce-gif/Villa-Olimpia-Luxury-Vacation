/**
 * Mapping lodgeId → URL iCal da variabili d'ambiente.
 *
 * Variabili attese:
 * - LODGE_1_AIRBNB_ICAL_URL, LODGE_1_BOOKING_ICAL_URL
 * - LODGE_2_AIRBNB_ICAL_URL, LODGE_2_BOOKING_ICAL_URL
 * - ... (ripeti per ogni lodge)
 *
 * Pattern: LODGE_<N>_AIRBNB_ICAL_URL, LODGE_<N>_BOOKING_ICAL_URL
 * Es. lodgeId "lodge-1" → LODGE_1_*, "lodge-2" → LODGE_2_*
 */
export function getICalUrlsForLodge(lodgeId: string): {
  airbnb: string | null;
  booking: string | null;
} {
  const num = lodgeId.replace(/^lodge-/, "")
  const n = parseInt(num, 10)
  if (isNaN(n) || n < 1) return { airbnb: null, booking: null }
  const airbnb = process.env[`LODGE_${n}_AIRBNB_ICAL_URL`] ?? null
  const booking = process.env[`LODGE_${n}_BOOKING_ICAL_URL`] ?? null
  return {
    airbnb: typeof airbnb === "string" && airbnb.trim() ? airbnb.trim() : null,
    booking: typeof booking === "string" && booking.trim() ? booking.trim() : null,
  }
}
