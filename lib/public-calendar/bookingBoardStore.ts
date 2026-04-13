/**
 * Booking Board store — KV-based (Vercel KV / Upstash Redis).
 */
import { kvGet, kvSet } from "@/lib/kv"
import type { Booking } from "./types"

const KV_KEY = "bookingboard:bookings"

export async function getAllBookings(): Promise<Booking[]> {
  return (await kvGet<Booking[]>(KV_KEY)) ?? []
}

export async function addBooking(booking: Booking): Promise<void> {
  const bookings = await getAllBookings()
  bookings.push(booking)
  await kvSet(KV_KEY, bookings)
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
