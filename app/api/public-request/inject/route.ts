import { NextRequest, NextResponse } from "next/server"
import { getRequestById, updateRequestStatus } from "@/lib/public-calendar/requestStore"
import { adaptPublicRequestToBooking } from "@/lib/public-calendar/bookingAdapter"
import { addBooking, hasConflict } from "@/lib/public-calendar/bookingBoardStore"

export async function POST(request: NextRequest) {
  const token = request.headers.get("x-request-token")
  const expected = process.env.PUBLIC_REQUEST_TOKEN
  if (!expected || token !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  let body: { requestId?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  const requestId = body?.requestId
  if (typeof requestId !== "string" || !requestId.trim()) {
    return NextResponse.json(
      { error: "requestId is required" },
      { status: 400 }
    )
  }

  const req = await getRequestById(requestId.trim())
  if (!req) {
    return NextResponse.json({ error: "Request not found" }, { status: 404 })
  }

  if (req.status !== "pending") {
    return NextResponse.json(
      { error: "Request already processed" },
      { status: 400 }
    )
  }

  const conflict = await hasConflict(req.lodgeId, req.checkIn, req.checkOut)
  if (conflict) {
    return NextResponse.json(
      { error: "Date conflict: lodge already occupied for these dates" },
      { status: 409 }
    )
  }

  const booking = adaptPublicRequestToBooking(req)
  await addBooking(booking)
  await updateRequestStatus(req.id, "injected")

  return NextResponse.json({
    success: true,
    bookingId: booking.id,
    message: "Request injected into Booking Board",
  })
}
