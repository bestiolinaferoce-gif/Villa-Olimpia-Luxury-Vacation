/**
 * Store simulato del Booking Board (file-based).
 * Sostituire con integrazione Zustand/API quando disponibile.
 */
import { writeFile, readFile, mkdir } from "fs/promises"
import path from "path"
import { DATA_DIR } from "@/lib/data-path"
import type { Booking } from "./types"

const FILE_PATH = path.join(DATA_DIR, "booking-board.json")

async function ensureFile(): Promise<Booking[]> {
  try {
    const content = await readFile(FILE_PATH, "utf-8")
    return JSON.parse(content)
  } catch {
    await mkdir(DATA_DIR, { recursive: true }).catch(() => {})
    return []
  }
}

export async function getAllBookings(): Promise<Booking[]> {
  return ensureFile()
}

export async function addBooking(booking: Booking): Promise<void> {
  const bookings = await ensureFile()
  bookings.push(booking)
  await writeFile(FILE_PATH, JSON.stringify(bookings, null, 2))
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
  const bookings = await ensureFile()
  return bookings.some(
    (b) =>
      b.lodgeId === lodgeId &&
      b.status !== "cancelled" &&
      b.id !== excludeId &&
      datesOverlap(b.checkIn, b.checkOut, checkIn, checkOut)
  )
}
