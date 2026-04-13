import { kvGet } from "@/lib/kv"
import { getAllBookings } from "./bookingBoardStore"

export type OccupiedRange = {
  start: string;
  end: string;
  source: "booking_board" | "airbnb" | "booking_com";
}


function dedupeRanges(ranges: OccupiedRange[]): OccupiedRange[] {
  const seen = new Set<string>()
  return ranges.filter((r) => {
    const key = `${r.start}|${r.end}|${r.source}`
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

async function getICalRangesForLodge(lodgeId: string): Promise<OccupiedRange[]> {
  const data = await kvGet<{ ranges: OccupiedRange[] }>(`ical:${lodgeId}`)
  return Array.isArray(data?.ranges) ? data.ranges : []
}

export async function getOccupiedRangesForLodge(
  lodgeId: string
): Promise<OccupiedRange[]> {
  const bookings = await getAllBookings()
  const boardRanges: OccupiedRange[] = bookings
    .filter((b) => b.lodgeId === lodgeId && b.status !== "cancelled")
    .map((b) => ({
      start: b.checkIn,
      end: b.checkOut,
      source: "booking_board" as const,
    }))

  const icalRanges = await getICalRangesForLodge(lodgeId)
  return dedupeRanges([...boardRanges, ...icalRanges])
}
