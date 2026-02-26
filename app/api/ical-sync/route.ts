import { NextRequest, NextResponse } from "next/server"
import { syncICalForLodge } from "@/lib/integrations/ical/syncService"

const LODGE_IDS = ["lodge-1", "lodge-2", "lodge-3", "lodge-4", "lodge-5", "lodge-6", "lodge-7", "lodge-8", "lodge-9"]

function isAuthorized(request: NextRequest): boolean {
  const token = request.headers.get("x-request-token")
  const cronHeader = request.headers.get("x-vercel-cron")
  if (cronHeader === "1") return true
  const expected = process.env.PUBLIC_REQUEST_TOKEN
  return !!expected && token === expected
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const lodgeId = request.nextUrl.searchParams.get("lodgeId")
  const lodgeIds = lodgeId && lodgeId.trim() ? [lodgeId.trim()] : LODGE_IDS

  const results: { lodgeId: string; synced: number; errors: string[] }[] = []
  for (const id of lodgeIds) {
    const { synced, errors } = await syncICalForLodge(id)
    results.push({ lodgeId: id, synced, errors })
  }

  return NextResponse.json(results)
}

export async function POST(request: NextRequest) {
  return GET(request)
}
