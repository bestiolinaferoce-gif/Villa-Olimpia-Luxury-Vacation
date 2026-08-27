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

export type OccupancyStatus = "verified" | "stale" | "unavailable"

export type OccupancySnapshot = {
  ranges: OccupiedRange[]
  status: OccupancyStatus
  checkedAt: string
  lastSyncedAt: string | null
}

const MAX_SYNC_AGE_MS = 36 * 60 * 60 * 1000

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
export async function getOccupancySnapshotForLodge(
  lodgeName: string
): Promise<OccupancySnapshot> {
  const boardUrl = (process.env.BOOKING_BOARD_URL ?? "").replace(/\/$/, "")
  const checkedAt = new Date().toISOString()
  if (!lodgeName || !boardUrl) {
    return { ranges: [], status: "unavailable", checkedAt, lastSyncedAt: null }
  }

  try {
    const url = `${boardUrl}/api/public-availability?lodge=${encodeURIComponent(lodgeName)}`
    const res = await fetch(url, { cache: "no-store" })
    if (!res.ok) {
      return { ranges: [], status: "unavailable", checkedAt, lastSyncedAt: null }
    }

    const data = (await res.json()) as {
      ranges?: Array<{ start: string; end: string }> | null
      lastSyncedAt?: string | null
    }
    if (!Array.isArray(data.ranges)) {
      return { ranges: [], status: "unavailable", checkedAt, lastSyncedAt: null }
    }

    const lastSyncedAt = typeof data.lastSyncedAt === "string" ? data.lastSyncedAt : null
    const lastSyncMs = lastSyncedAt ? Date.parse(lastSyncedAt) : Number.NaN
    const isFresh = Number.isFinite(lastSyncMs) && Date.now() - lastSyncMs <= MAX_SYNC_AGE_MS

    return {
      ranges: data.ranges.map((range) => ({ ...range, source: "booking_board" as const })),
      status: isFresh ? "verified" : "stale",
      checkedAt,
      lastSyncedAt,
    }
  } catch {
    return { ranges: [], status: "unavailable", checkedAt, lastSyncedAt: null }
  }
}

export async function getOccupiedRangesForLodge(
  lodgeName: string
): Promise<OccupiedRange[]> {
  const snapshot = await getOccupancySnapshotForLodge(lodgeName)
  return snapshot.status === "verified" ? snapshot.ranges : []
}
