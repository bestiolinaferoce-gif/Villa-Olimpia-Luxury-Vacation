import { writeFile, mkdir } from "fs/promises"
import path from "path"
import { ICAL_CACHE_DIR } from "@/lib/data-path"
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

  await mkdir(ICAL_CACHE_DIR, { recursive: true }).catch(() => {})
  const cachePath = path.join(ICAL_CACHE_DIR, `${lodgeId}.json`)
  const cacheContent = {
    lodgeId,
    updatedAt: new Date().toISOString(),
    ranges: allRanges,
  }
  await writeFile(cachePath, JSON.stringify(cacheContent, null, 2))

  return { synced: allRanges.length, errors }
}
