import { NextRequest, NextResponse } from "next/server"
import { getOccupiedRangesForLodge, APARTMENT_LODGE_MAP } from "@/lib/public-calendar/occupancy"

/**
 * GET /api/public-request/availability?lodgeId=<value>
 *
 * Accepted formats for lodgeId:
 *   - numeric ID:   "1" … "9"   → resolved via APARTMENT_LODGE_MAP
 *   - lodge- slug:  "lodge-1"   → resolved via APARTMENT_LODGE_MAP
 *   - lodge name:   "Frangipane" → matched case-insensitively against known names
 */
export async function GET(request: NextRequest) {
  const lodgeIdParam = request.nextUrl.searchParams.get("lodgeId")

  if (!lodgeIdParam || !lodgeIdParam.trim()) {
    return NextResponse.json(
      { error: "lodgeId query parameter is required" },
      { status: 400 },
    )
  }

  const raw = lodgeIdParam.trim()
  const knownNames = Object.values(APARTMENT_LODGE_MAP)

  let lodgeName = ""

  // 1. Pure numeric — e.g. "1"
  const asNumber = parseInt(raw, 10)
  if (!isNaN(asNumber) && String(asNumber) === raw && APARTMENT_LODGE_MAP[asNumber]) {
    lodgeName = APARTMENT_LODGE_MAP[asNumber]
  }

  // 2. "lodge-N" slug — e.g. "lodge-1"
  if (!lodgeName) {
    const slugMatch = raw.match(/^lodge-(\d+)$/i)
    if (slugMatch) {
      const n = parseInt(slugMatch[1], 10)
      lodgeName = APARTMENT_LODGE_MAP[n] ?? ""
    }
  }

  // 3. Direct lodge name — e.g. "Frangipane" (case-insensitive)
  if (!lodgeName) {
    lodgeName =
      knownNames.find((name) => name.toLowerCase() === raw.toLowerCase()) ?? ""
  }

  if (!lodgeName) {
    return NextResponse.json(
      { error: `Unknown lodgeId: "${raw}". Use a numeric ID (1-9), a lodge-N slug, or a lodge name.` },
      { status: 400 },
    )
  }

  const ranges = await getOccupiedRangesForLodge(lodgeName)

  return NextResponse.json(ranges, {
    status: 200,
    headers: {
      "Cache-Control": "public, max-age=300",
    },
  })
}
