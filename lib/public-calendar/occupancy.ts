/**
 * Occupancy layer — consumer puro della booking board.
 * Legge la disponibilità reale da GET /api/public-availability sulla booking board.
 * Non gestisce sync, non scrive su KV, non duplica logica business.
 *
 * Env richiesta nel sito: BOOKING_BOARD_URL=https://<tuo-dominio-booking-board>
 */

export type OccupiedRange = {
  start: string;
  end: string;
  source: "booking_board" | "airbnb" | "booking_com";
}

/**
 * Mappa canonica: apartment ID sito → nome lodge nella booking board.
 * Deve restare allineata con il tipo Lodge in villa-olimpia-booking-board/lib/types.ts.
 */
export const APARTMENT_LODGE_MAP: Record<number, string> = {
  1: "Frangipane",
  2: "Fiordaliso",
  3: "Orchidea",
  4: "Tulipano",
  5: "Giglio",
  6: "Lavanda",
  7: "Geranio",
  8: "Gardenia",
  9: "Azalea",
}

/** Ritorna il nome lodge dato l'ID appartamento del sito (1-9). */
export function lodgeNameForApartment(apartmentId: number): string {
  return APARTMENT_LODGE_MAP[apartmentId] ?? ""
}

/**
 * Recupera gli intervalli occupati per un lodge leggendo dalla booking board.
 * @param lodgeName - nome lodge esatto (es. "Frangipane")
 * @returns OccupiedRange[] — vuoto in caso di errore o lodge sconosciuto
 */
export async function getOccupiedRangesForLodge(
  lodgeName: string
): Promise<OccupiedRange[]> {
  const boardUrl = (process.env.BOOKING_BOARD_URL ?? "").replace(/\/$/, "")
  if (!lodgeName || !boardUrl) return []

  try {
    const url = `${boardUrl}/api/public-availability?lodge=${encodeURIComponent(lodgeName)}`
    const res = await fetch(url, { cache: "no-store" })
    if (!res.ok) return []
    const data = (await res.json()) as { ranges?: Array<{ start: string; end: string }> }
    return (data.ranges ?? []).map((r) => ({ ...r, source: "booking_board" as const }))
  } catch {
    return []
  }
}
