import { kvSet } from "@/lib/kv"
import { parseICalFeed } from "./parser"
import { getICalUrlsForLodge } from "./lodgeICalMap"
import type { OccupiedRange } from "@/lib/public-calendar/occupancy"

export async function syncICalForLodge(
  lodgeId: string
): Promise<{ synced: number; errors: string[] }> {
  const errors: string[] = []
  const allRanges: OccupiedRange[] = []
  const { airbnb, booking } = getICalUrlsForLodge(lodgeId)

  if (airbnb) {
    const ranges = await parseICalFeed(airbnb, "airbnb")
    if (ranges.length === 0 && !airbnb.includes("example")) {
      errors.push(`Airbnb feed empty or failed: ${lodgeId}`)
    }
    allRanges.push(...ranges)
  }
  if (booking) {
    const ranges = await parseICalFeed(booking, "booking_com")
    if (ranges.length === 0 && !booking.includes("example")) {
      errors.push(`Booking.com feed empty or failed: ${lodgeId}`)
    }
    allRanges.push(...ranges)
  }

  const cacheContent = {
    lodgeId,
    updatedAt: new Date().toISOString(),
    ranges: allRanges,
  }
  await kvSet(`ical:${lodgeId}`, cacheContent, 90000)

  return { synced: allRanges.length, errors }
}
