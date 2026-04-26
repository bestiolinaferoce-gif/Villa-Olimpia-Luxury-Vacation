import { kvSet } from "@/lib/kv"
import { parseICalFeed } from "./parser"
import { getICalUrlsForLodge } from "./lodgeICalMap"
import type { OccupiedRange } from "@/lib/public-calendar/occupancy"
import { syncExternalBookingsForLodge } from "@/lib/public-calendar/bookingBoardStore"
import type { Booking } from "@/lib/public-calendar/types"
import { syncOtaBookingsToBoard } from "./boardCloudSync"

type BoardReservation = {
  uid: string | null
  start: string
  end: string
  source: "airbnb" | "booking_com"
  summary: string | null
}

function buildExternalBookingId(
  lodgeId: string,
  source: "airbnb" | "booking_com",
  externalId: string | null,
  checkIn: string,
  checkOut: string
): string {
  const rawId = externalId?.trim() || `${checkIn}_${checkOut}`
  const normalized = rawId.replace(/[^a-zA-Z0-9_-]+/g, "-").replace(/-+/g, "-")
  return `ota:${source}:${lodgeId}:${normalized}`
}

function platformLabel(source: "airbnb" | "booking_com"): string {
  return source === "airbnb" ? "Airbnb" : "Booking.com"
}

function toExternalBooking(
  lodgeId: string,
  reservation: {
    uid: string | null;
    start: string;
    end: string;
    source: "airbnb" | "booking_com";
    summary: string | null;
    status: string | null;
  },
  syncedAt: string
): Booking {
  const label = platformLabel(reservation.source)
  const notes = [
    `Sincronizzata automaticamente da ${label}`,
    reservation.summary ? `Riferimento feed: ${reservation.summary}` : null,
  ]
    .filter(Boolean)
    .join(" | ")

  return {
    id: buildExternalBookingId(
      lodgeId,
      reservation.source,
      reservation.uid,
      reservation.start,
      reservation.end
    ),
    lodgeId,
    checkIn: reservation.start,
    checkOut: reservation.end,
    guestName: `Prenotazione ${label}`,
    guestEmail: "",
    guests: 0,
    notes,
    status: "confirmed",
    source: reservation.source,
    externalId: reservation.uid ?? undefined,
    syncedAt,
  }
}

export async function syncICalForLodge(
  lodgeId: string
): Promise<{ synced: number; errors: string[] }> {
  const errors: string[] = []
  const allRanges: OccupiedRange[] = []
  const syncedSources: Array<"airbnb" | "booking_com"> = []
  const syncedBookings: Booking[] = []
  const boardReservations: BoardReservation[] = []
  const { airbnb, booking } = getICalUrlsForLodge(lodgeId)
  const syncedAt = new Date().toISOString()

  if (airbnb) {
    const result = await parseICalFeed(airbnb, "airbnb")
    if (!result.ok) {
      errors.push(`Airbnb feed empty or failed: ${lodgeId}`)
    } else {
      syncedSources.push("airbnb")
      const reservations = result.reservations.filter(
        (reservation) => reservation.status?.toUpperCase() !== "CANCELLED"
      )
      allRanges.push(
        ...reservations.map(({ start, end, source }) => ({ start, end, source }))
      )
      boardReservations.push(
        ...reservations.map(({ uid, start, end, source, summary }) => ({
          uid,
          start,
          end,
          source,
          summary,
        }))
      )
      syncedBookings.push(
        ...reservations.map((reservation) =>
          toExternalBooking(lodgeId, reservation, syncedAt)
        )
      )
    }
  }
  if (booking) {
    const result = await parseICalFeed(booking, "booking_com")
    if (!result.ok) {
      errors.push(`Booking.com feed empty or failed: ${lodgeId}`)
    } else {
      syncedSources.push("booking_com")
      const reservations = result.reservations.filter(
        (reservation) => reservation.status?.toUpperCase() !== "CANCELLED"
      )
      allRanges.push(
        ...reservations.map(({ start, end, source }) => ({ start, end, source }))
      )
      boardReservations.push(
        ...reservations.map(({ uid, start, end, source, summary }) => ({
          uid,
          start,
          end,
          source,
          summary,
        }))
      )
      syncedBookings.push(
        ...reservations.map((reservation) =>
          toExternalBooking(lodgeId, reservation, syncedAt)
        )
      )
    }
  }

  const cacheContent = {
    lodgeId,
    updatedAt: syncedAt,
    ranges: allRanges,
  }
  await kvSet(`ical:${lodgeId}`, cacheContent, 90000)
  if (syncedSources.length > 0) {
    await syncExternalBookingsForLodge(lodgeId, syncedSources, syncedBookings)
    await syncOtaBookingsToBoard(lodgeId, boardReservations, syncedSources, syncedAt)
  }

  return { synced: allRanges.length, errors }
}
