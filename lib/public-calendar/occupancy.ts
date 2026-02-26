import { getAllBookings } from "./bookingBoardStore"

export type OccupiedRange = {
  start: string;
  end: string;
  source: "booking_board" | "airbnb" | "booking_com";
}

export async function getOccupiedRangesForLodge(
  lodgeId: string
): Promise<OccupiedRange[]> {
  const bookings = await getAllBookings()
  return bookings
    .filter((b) => b.lodgeId === lodgeId && b.status !== "cancelled")
    .map((b) => ({
      start: b.checkIn,
      end: b.checkOut,
      source: "booking_board" as const,
    }))
}
