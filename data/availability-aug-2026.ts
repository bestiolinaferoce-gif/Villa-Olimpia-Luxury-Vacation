import { apartments } from "@/data/apartments"

export type AvailabilityStatus = "available" | "booked" | "changeover" | "option" | "unknown"

export interface ApartmentAvailability {
  apartmentId: number
  apartmentName: string
  month: string // YYYY-MM
  updatedAt: string // YYYY-MM-DD
  days: Record<number, AvailabilityStatus>
}

const daysInAugust = Array.from({ length: 31 }, (_, i) => i + 1)

const unknownDays = (): Record<number, AvailabilityStatus> =>
  Object.fromEntries(daysInAugust.map((day) => [day, "unknown"]))

export const availabilityAugust2026: ApartmentAvailability[] = apartments.map((apartment) => ({
  apartmentId: apartment.id,
  apartmentName: apartment.name,
  month: "2026-08",
  updatedAt: "2026-02-08",
  days: unknownDays(),
}))

export function getAvailabilityForApartment(apartmentId: number) {
  return availabilityAugust2026.find((entry) => entry.apartmentId === apartmentId) || null
}
