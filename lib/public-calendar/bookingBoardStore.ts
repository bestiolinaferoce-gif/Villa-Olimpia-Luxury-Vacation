/**
 * Booking Board store — KV-based (Vercel KV / Upstash Redis).
 */
import { kvGet, kvSet } from "@/lib/kv"
import type { Booking } from "./types"

const KV_KEY = "bookingboard:bookings"
type OtaSource = "airbnb" | "booking_com"
const OTA_SOURCES = new Set<OtaSource>(["airbnb", "booking_com"])

function isOtaSource(source: Booking["source"] | undefined): source is OtaSource {
  return source === "airbnb" || source === "booking_com"
}

export async function getAllBookings(): Promise<Booking[]> {
  return (await kvGet<Booking[]>(KV_KEY)) ?? []
}

export async function addBooking(booking: Booking): Promise<void> {
  const bookings = await getAllBookings()
  bookings.push(booking)
  await kvSet(KV_KEY, bookings)
}

export async function syncExternalBookingsForLodge(
  lodgeId: string,
  syncedSources: OtaSource[],
  incomingBookings: Booking[]
): Promise<void> {
  const sourceSet = new Set(syncedSources)
  const currentBookings = await getAllBookings()

  const preservedBookings = currentBookings.filter((booking) => {
    if (booking.lodgeId !== lodgeId) return true
    if (!isOtaSource(booking.source) || !OTA_SOURCES.has(booking.source)) return true
    return !sourceSet.has(booking.source)
  })

  const dedupedIncoming = new Map<string, Booking>()
  for (const booking of incomingBookings) {
    dedupedIncoming.set(booking.id, booking)
  }

  await kvSet(KV_KEY, [...preservedBookings, ...dedupedIncoming.values()])
}

function datesOverlap(
  aStart: string,
  aEnd: string,
  bStart: string,
  bEnd: string
): boolean {
  const aS = new Date(aStart).getTime()
  const aE = new Date(aEnd).getTime()
  const bS = new Date(bStart).getTime()
  const bE = new Date(bEnd).getTime()
  return aS < bE && bS < aE
}

export async function hasConflict(
  lodgeId: string,
  checkIn: string,
  checkOut: string,
  excludeId?: string
): Promise<boolean> {
  const bookings = await getAllBookings()
  return bookings.some(
    (b) =>
      b.lodgeId === lodgeId &&
      b.status !== "cancelled" &&
      b.id !== excludeId &&
      datesOverlap(b.checkIn, b.checkOut, checkIn, checkOut)
  )
}
