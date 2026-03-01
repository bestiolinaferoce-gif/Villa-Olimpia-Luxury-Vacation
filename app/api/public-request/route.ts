import { NextRequest, NextResponse } from "next/server"
import { saveRequest } from "@/lib/public-calendar/requestStore"
import type { PublicBookingRequest } from "@/lib/public-calendar/types"

function validateBody(body: unknown): { ok: true; data: Omit<PublicBookingRequest, "id" | "status" | "createdAt"> } | { ok: false; message: string } {
  if (typeof body !== "object" || body === null) {
    return { ok: false, message: "Body must be a JSON object" }
  }
  const o = body as Record<string, unknown>

  if (typeof o.lodgeId !== "string" || !o.lodgeId.trim()) {
    return { ok: false, message: "lodgeId is required and must be a non-empty string" }
  }
  if (typeof o.checkIn !== "string" || !o.checkIn.trim()) {
    return { ok: false, message: "checkIn is required (ISO 8601)" }
  }
  if (typeof o.checkOut !== "string" || !o.checkOut.trim()) {
    return { ok: false, message: "checkOut is required (ISO 8601)" }
  }
  if (typeof o.guestName !== "string" || !o.guestName.trim()) {
    return { ok: false, message: "guestName is required and must be a non-empty string" }
  }
  if (typeof o.guestEmail !== "string" || !o.guestEmail.trim()) {
    return { ok: false, message: "guestEmail is required and must be a non-empty string" }
  }
  if (typeof o.guests !== "number" || o.guests < 1 || !Number.isInteger(o.guests)) {
    return { ok: false, message: "guests is required and must be a positive integer" }
  }

  return {
    ok: true,
    data: {
      lodgeId: o.lodgeId.trim(),
      checkIn: o.checkIn.trim(),
      checkOut: o.checkOut.trim(),
      guestName: o.guestName.trim(),
      guestEmail: o.guestEmail.trim(),
      guestPhone: typeof o.guestPhone === "string" && o.guestPhone.trim() ? o.guestPhone.trim() : undefined,
      guests: o.guests,
      notes: typeof o.notes === "string" && o.notes.trim() ? o.notes.trim() : undefined,
    },
  }
}

export async function POST(request: NextRequest) {
  const token = request.headers.get("x-request-token")
  const expected = process.env.PUBLIC_REQUEST_TOKEN
  if (!expected || token !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  const validation = validateBody(body)
  if (!validation.ok) {
    return NextResponse.json({ error: validation.message }, { status: 400 })
  }

  const req: PublicBookingRequest = {
    id: crypto.randomUUID(),
    ...validation.data,
    status: "pending",
    createdAt: new Date().toISOString(),
  }

  await saveRequest(req)
  return NextResponse.json(req, { status: 201 })
}
