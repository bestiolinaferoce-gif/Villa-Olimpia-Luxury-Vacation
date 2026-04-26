import { kvGet, kvSet } from "@/lib/kv"
import { APARTMENT_LODGE_MAP } from "@/lib/public-calendar/occupancy"

const BOARD_KV_KEY = "vob_bookings"

type BoardChannel = "direct" | "airbnb" | "booking" | "expedia" | "other"
type BoardStatus = "confirmed" | "option" | "blocked" | "cancelled"
type BoardDataOrigin = "manual" | "import_json" | "import_email" | "sync" | "n8n"

type BoardBooking = {
  id: string
  guestName: string
  lodge: string
  checkIn: string
  checkOut: string
  status: BoardStatus
  channel: BoardChannel
  notes: string
  guestsCount: number
  totalAmount: number
  depositAmount: number
  depositReceived: boolean
  createdAt: string
  updatedAt: string
  isNew?: boolean
  guestProfile?: Record<string, unknown>
  dataOrigin?: BoardDataOrigin
}

type BoardPayload = {
  v: number
  ts: string
  data: BoardBooking[]
}

type OtaSource = "airbnb" | "booking_com"

type OtaReservation = {
  uid: string | null
  start: string
  end: string
  source: OtaSource
  summary: string | null
}

function normalizeDataOrigin(value?: string): BoardDataOrigin {
  switch (value) {
    case "manual":
    case "import_json":
    case "import_email":
    case "sync":
    case "n8n":
      return value
    default:
      return "manual"
  }
}

function normalizePayload(raw: BoardPayload | BoardBooking[] | null): BoardPayload {
  if (!raw) return { v: 0, ts: "", data: [] }
  if (Array.isArray(raw)) {
    return { v: 1, ts: "", data: raw }
  }
  return {
    v: typeof raw.v === "number" ? raw.v : 0,
    ts: typeof raw.ts === "string" ? raw.ts : "",
    data: Array.isArray(raw.data) ? raw.data : [],
  }
}

function parseTimestamp(value?: string): number {
  const ts = Date.parse(value ?? "")
  return Number.isFinite(ts) ? ts : 0
}

function normalizedText(value?: string): string {
  return (value ?? "").toLowerCase().replace(/[^a-z0-9]+/g, "")
}

function isGenericOtaGuestName(value?: string): boolean {
  const normalized = normalizedText(value)
  return (
    normalized === "ospiteairbnb" ||
    normalized === "guestairbnb" ||
    normalized === "ospitebookingcom" ||
    normalized === "guestbookingcom" ||
    normalized === "ospite"
  )
}

function occupancyKey(booking: BoardBooking): string {
  return [booking.lodge, booking.checkIn, booking.checkOut, booking.channel].join("|")
}

function isOtaDuplicateCandidate(booking: BoardBooking): boolean {
  return booking.channel === "airbnb" || booking.channel === "booking" || booking.channel === "expedia"
}

function bookingRichnessScore(booking: BoardBooking): number {
  const profile = booking.guestProfile ?? {}
  return [
    booking.totalAmount > 0 ? 1 : 0,
    booking.depositAmount > 0 ? 1 : 0,
    booking.depositReceived ? 1 : 0,
    booking.notes?.trim() ? 1 : 0,
    ...Object.values(profile).map((value) => (value ? 1 : 0)),
  ].reduce((sum, value) => sum + value, 0)
}

function mergeNotes(primary?: string, secondary?: string): string {
  const first = primary?.trim() ?? ""
  const second = secondary?.trim() ?? ""
  if (!first) return second
  if (!second || first.includes(second)) return first
  if (second.includes(first)) return second
  return `${first}\n\n${second}`
}

function pickPreferredDuplicate(a: BoardBooking, b: BoardBooking): BoardBooking {
  const aOrigin = normalizeDataOrigin(a.dataOrigin)
  const bOrigin = normalizeDataOrigin(b.dataOrigin)

  if (aOrigin === "manual" && bOrigin === "sync") {
    return { ...b, ...a, notes: mergeNotes(a.notes, b.notes), dataOrigin: "manual" }
  }

  if (bOrigin === "manual" && aOrigin === "sync") {
    return { ...a, ...b, notes: mergeNotes(b.notes, a.notes), dataOrigin: "manual" }
  }

  if (isGenericOtaGuestName(a.guestName) && !isGenericOtaGuestName(b.guestName)) {
    return { ...a, ...b, notes: mergeNotes(b.notes, a.notes) }
  }

  if (isGenericOtaGuestName(b.guestName) && !isGenericOtaGuestName(a.guestName)) {
    return { ...b, ...a, notes: mergeNotes(a.notes, b.notes) }
  }

  const aScore = bookingRichnessScore(a)
  const bScore = bookingRichnessScore(b)
  if (aScore !== bScore) {
    return aScore > bScore
      ? { ...b, ...a, notes: mergeNotes(a.notes, b.notes) }
      : { ...a, ...b, notes: mergeNotes(b.notes, a.notes) }
  }

  return parseTimestamp(a.updatedAt) >= parseTimestamp(b.updatedAt)
    ? { ...b, ...a, notes: mergeNotes(a.notes, b.notes) }
    : { ...a, ...b, notes: mergeNotes(b.notes, a.notes) }
}

function dedupeBoardBookings(bookings: BoardBooking[]): BoardBooking[] {
  const deduped = new Map<string, BoardBooking>()

  for (const booking of bookings) {
    const normalizedBooking: BoardBooking = {
      ...booking,
      dataOrigin: normalizeDataOrigin(booking.dataOrigin),
    }

    if (!isOtaDuplicateCandidate(normalizedBooking)) {
      deduped.set(`id:${normalizedBooking.id}`, normalizedBooking)
      continue
    }

    const key = `ota:${occupancyKey(normalizedBooking)}`
    const existing = deduped.get(key)
    if (!existing) {
      deduped.set(key, normalizedBooking)
      continue
    }

    deduped.set(key, pickPreferredDuplicate(existing, normalizedBooking))
  }

  return Array.from(deduped.values()).sort((a, b) => a.checkIn.localeCompare(b.checkIn))
}

function shouldKeepExistingBooking(existing: BoardBooking, incoming: BoardBooking): boolean {
  const existingOrigin = normalizeDataOrigin(existing.dataOrigin)
  const incomingOrigin = normalizeDataOrigin(incoming.dataOrigin)

  if (existingOrigin === "manual" && incomingOrigin === "sync") {
    return true
  }

  return parseTimestamp(existing.updatedAt) >= parseTimestamp(incoming.updatedAt)
}

function mergeBoardBookings(existing: BoardBooking[], incoming: BoardBooking[]): BoardBooking[] {
  const merged = new Map<string, BoardBooking>()

  for (const booking of existing) {
    merged.set(booking.id, {
      ...booking,
      dataOrigin: normalizeDataOrigin(booking.dataOrigin),
    })
  }

  for (const rawBooking of incoming) {
    const incomingBooking: BoardBooking = {
      ...rawBooking,
      dataOrigin: normalizeDataOrigin(rawBooking.dataOrigin),
    }
    const current = merged.get(incomingBooking.id)

    if (!current) {
      merged.set(incomingBooking.id, incomingBooking)
      continue
    }

    if (shouldKeepExistingBooking(current, incomingBooking)) {
      continue
    }

    merged.set(incomingBooking.id, {
      ...current,
      ...incomingBooking,
      dataOrigin: normalizeDataOrigin(incomingBooking.dataOrigin),
    })
  }

  return dedupeBoardBookings(Array.from(merged.values()))
}

function lodgeNameForLodgeId(lodgeId: string): string | null {
  const n = Number.parseInt(lodgeId.replace(/^lodge-/, ""), 10)
  return Number.isFinite(n) ? APARTMENT_LODGE_MAP[n] ?? null : null
}

function toBoardChannel(source: OtaSource): BoardChannel {
  return source === "airbnb" ? "airbnb" : "booking"
}

function platformLabel(source: OtaSource): string {
  return source === "airbnb" ? "Airbnb" : "Booking.com"
}

function buildBoardBooking(
  lodgeId: string,
  reservation: OtaReservation,
  syncedAt: string,
  existingById: Map<string, BoardBooking>
): BoardBooking | null {
  const lodge = lodgeNameForLodgeId(lodgeId)
  if (!lodge) return null

  const rawId = reservation.uid?.trim() || `${reservation.start}_${reservation.end}`
  const normalizedId = rawId.replace(/[^a-zA-Z0-9_-]+/g, "-").replace(/-+/g, "-")
  const id = `ota:${reservation.source}:${lodgeId}:${normalizedId}`
  const current = existingById.get(id)
  const label = platformLabel(reservation.source)
  const notes = [
    `Sincronizzata automaticamente da ${label}`,
    reservation.summary ? `Riferimento feed: ${reservation.summary}` : null,
    current?.notes?.trim() ? current.notes : null,
  ]
    .filter(Boolean)
    .join(" | ")

  return {
    id,
    guestName: current?.guestName?.trim() || `Prenotazione ${label}`,
    lodge,
    checkIn: reservation.start,
    checkOut: reservation.end,
    status: "confirmed",
    channel: toBoardChannel(reservation.source),
    notes,
    // I feed iCal non espongono sempre il numero ospiti: manteniamo il valore
    // esistente quando disponibile, altrimenti usiamo il minimo tecnico del board.
    guestsCount:
      typeof current?.guestsCount === "number" && current.guestsCount >= 1
        ? current.guestsCount
        : 1,
    totalAmount: typeof current?.totalAmount === "number" ? current.totalAmount : 0,
    depositAmount: typeof current?.depositAmount === "number" ? current.depositAmount : 0,
    depositReceived: Boolean(current?.depositReceived),
    createdAt: current?.createdAt ?? syncedAt,
    updatedAt: syncedAt,
    isNew: current?.isNew ?? true,
    guestProfile: current?.guestProfile,
    dataOrigin: "sync",
  }
}

export async function syncOtaBookingsToBoard(
  lodgeId: string,
  reservations: OtaReservation[],
  syncedSources: OtaSource[],
  syncedAt: string
): Promise<void> {
  const lodge = lodgeNameForLodgeId(lodgeId)
  if (!lodge) return

  const raw = await kvGet<BoardPayload | BoardBooking[]>(BOARD_KV_KEY)
  const current = normalizePayload(raw)
  const existingById = new Map(current.data.map((booking) => [booking.id, booking]))
  const channels = new Set(syncedSources.map(toBoardChannel))

  const preserved = current.data.filter((booking) => {
    if (booking.lodge !== lodge) return true
    if (!channels.has(booking.channel)) return true
    return normalizeDataOrigin(booking.dataOrigin) !== "sync"
  })

  const incoming = reservations
    .map((reservation) => buildBoardBooking(lodgeId, reservation, syncedAt, existingById))
    .filter((booking): booking is BoardBooking => Boolean(booking))

  const merged = mergeBoardBookings(preserved, incoming)
  const payload: BoardPayload = {
    v: current.v + 1,
    ts: new Date().toISOString(),
    data: merged,
  }

  await kvSet(BOARD_KV_KEY, payload)
}
