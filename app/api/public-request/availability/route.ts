import { NextRequest, NextResponse } from "next/server"
import { getOccupiedRangesForLodge } from "@/lib/public-calendar/occupancy"

export async function GET(request: NextRequest) {
  const lodgeId = request.nextUrl.searchParams.get("lodgeId")
  if (!lodgeId || !lodgeId.trim()) {
    return NextResponse.json(
      { error: "lodgeId query parameter is required" },
      { status: 400 }
    )
  }

  const ranges = await getOccupiedRangesForLodge(lodgeId.trim())
  return NextResponse.json(ranges, {
    status: 200,
    headers: {
      "Cache-Control": "public, max-age=300",
    },
  })
}
