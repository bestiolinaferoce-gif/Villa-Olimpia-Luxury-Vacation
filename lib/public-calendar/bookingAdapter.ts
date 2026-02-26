/**
 * Adapter: PublicBookingRequest → Booking
 * Vedi ANALISI_BOOKING_BOARD.md per contesto (nessun Booking Board/Zustand esistente).
 * TODO: verificare compatibilità status quando il Board reale sarà integrato.
 */
import type { PublicBookingRequest } from "./types"
import type { Booking } from "./types"

export function adaptPublicRequestToBooking(
  req: PublicBookingRequest
): Booking {
  return {
    id: req.id,
    lodgeId: req.lodgeId,
    checkIn: req.checkIn,
    checkOut: req.checkOut,
    guestName: req.guestName,
    guestEmail: req.guestEmail,
    guestPhone: req.guestPhone,
    guests: req.guests,
    notes: req.notes,
    status: "pending",
  }
}
