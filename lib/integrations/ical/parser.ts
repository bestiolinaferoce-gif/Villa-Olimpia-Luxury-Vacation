/**
 * Parser iCal minimale senza dipendenze esterne.
 * Estrae VEVENT con DTSTART/DTEND da feed iCal (Airbnb, Booking.com).
 */
import type { OccupiedRange } from "@/lib/public-calendar/occupancy"

function toISO(dateStr: string): string {
  const cleaned = dateStr.replace(/\D/g, "").slice(0, 14)
  if (cleaned.length >= 8) {
    const y = cleaned.slice(0, 4)
    const m = cleaned.slice(4, 6)
    const d = cleaned.slice(6, 8)
    if (cleaned.length >= 14) {
      const h = cleaned.slice(8, 10)
      const min = cleaned.slice(10, 12)
      const sec = cleaned.slice(12, 14)
      return `${y}-${m}-${d}T${h}:${min}:${sec}`
    }
    return `${y}-${m}-${d}T00:00:00`
  }
  return dateStr
}

function parseEventBlock(block: string, source: OccupiedRange["source"]): OccupiedRange | null {
  const startMatch = block.match(/DTSTART[^:]*:([^\r\n]+)/i)
  const endMatch = block.match(/DTEND[^:]*:([^\r\n]+)/i)
  if (!startMatch || !endMatch) return null
  const start = toISO(startMatch[1].trim())
  const end = toISO(endMatch[1].trim())
  return { start, end, source }
}

export async function parseICalFeed(
  url: string,
  source: "airbnb" | "booking_com" = "airbnb"
): Promise<OccupiedRange[]> {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(15000) })
    if (!res.ok) {
      console.error(`[iCal] Fetch failed ${res.status}: ${url}`)
      return []
    }
    const text = await res.text()
    const events: OccupiedRange[] = []
    const sourceVal: OccupiedRange["source"] = source === "airbnb" ? "airbnb" : "booking_com"
    const blocks = text.split(/BEGIN:VEVENT/i).slice(1)
    for (const block of blocks) {
      const range = parseEventBlock(block, sourceVal)
      if (range) events.push(range)
    }
    return events
  } catch (err) {
    console.error("[iCal] Parse error:", err)
    return []
  }
}
