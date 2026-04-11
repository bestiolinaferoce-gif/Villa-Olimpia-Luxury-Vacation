/**
 * POST pubblico: richieste disponibilità dalla barra sticky.
 * Richiede in produzione: RESEND_API_KEY. Destinatario: inbox ufficiale + opz. LEADS_TO_EMAIL (copia).
 */
import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import {
  buildOfficialAvailabilityMessage,
} from "@/lib/booking-contact"
import { resolveOwnerEmailRecipients } from "@/lib/lead-inbox"

const availabilitySchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().min(6).max(40),
  checkIn: z.string().min(1).max(20),
  checkOut: z.string().min(1).max(20),
  guests: z.string().min(1).max(5),
  apartment: z.string().max(120).optional().or(z.literal("")),
  source: z.string().max(120).optional().or(z.literal("")),
  company: z.string().max(120).optional().or(z.literal("")),
})

const rateLimitStore = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX = 12

function getClientIp(req: NextRequest) {
  const forwardedFor = req.headers.get("x-forwarded-for")
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown"
  }
  return req.headers.get("x-real-ip") || "unknown"
}

function isRateLimited(ip: string) {
  const now = Date.now()
  const current = rateLimitStore.get(ip)
  if (!current || now > current.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }
  if (current.count >= RATE_LIMIT_MAX) return true
  current.count += 1
  rateLimitStore.set(ip, current)
  return false
}

async function sendAvailabilityEmail(params: {
  name: string
  email: string
  phone: string
  checkIn: string
  checkOut: string
  guests: string
  apartment: string
  source: string
  ip: string
  referer: string
  userAgent: string
}) {
  const apiKey = process.env.RESEND_API_KEY
  const to = resolveOwnerEmailRecipients(process.env.LEADS_TO_EMAIL)
  const from =
    process.env.LEADS_FROM_EMAIL || "Villa Olimpia <onboarding@resend.dev>"

  if (!apiKey) {
    return { ok: false as const, reason: "missing_resend_key" }
  }

  const text = [
    "═══════════════════════════════════════",
    "NUOVA RICHIESTA DISPONIBILITÀ — Villa Olimpia",
    "═══════════════════════════════════════",
    "",
    "DATI CLIENTE:",
    `Nome:      ${params.name}`,
    `Email:     ${params.email}`,
    `Telefono:  ${params.phone}`,
    "",
    "RICHIESTA:",
    `Check-in:      ${params.checkIn}`,
    `Check-out:     ${params.checkOut}`,
    `Ospiti:        ${params.guests}`,
    `Appartamento:  ${params.apartment || "Nessuna preferenza"}`,
    `Fonte:         ${params.source || "sito ufficiale"}`,
    "",
    "───────────────────────────────────────",
    "Metadati tecnici:",
    `IP: ${params.ip}`,
    `Referer: ${params.referer}`,
    `User-Agent: ${params.userAgent}`,
  ].join("\n")

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: params.email,
      subject: `[Disponibilità] ${params.name} — ${params.checkIn} / ${params.checkOut} — Villa Olimpia`,
      text,
    }),
  })

  if (!response.ok) {
    const errorBody = await response.text()
    return {
      ok: false as const,
      reason: `resend_error_${response.status}`,
      errorBody,
    }
  }

  return { ok: true as const }
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req)
    if (isRateLimited(ip)) {
      return NextResponse.json({ ok: false, reason: "rate_limited" }, { status: 429 })
    }

    const parsed = availabilitySchema.safeParse(await req.json())
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, reason: "invalid_payload", errors: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const body = parsed.data
    if (body.company) {
      return NextResponse.json({ ok: true, reason: "honeypot" }, { status: 200 })
    }

    if (
      new Date(body.checkIn).toString() === "Invalid Date" ||
      new Date(body.checkOut).toString() === "Invalid Date"
    ) {
      return NextResponse.json({ ok: false, reason: "invalid_dates" }, { status: 400 })
    }

    if (new Date(body.checkIn) >= new Date(body.checkOut)) {
      return NextResponse.json({ ok: false, reason: "date_range_error" }, { status: 400 })
    }

    const referer = req.headers.get("referer") || "unknown"
    const userAgent = req.headers.get("user-agent") || "unknown"
    const source = body.source?.trim() || "sticky_booking_bar"

    const sent = await sendAvailabilityEmail({
      name: body.name,
      email: body.email,
      phone: body.phone,
      checkIn: body.checkIn,
      checkOut: body.checkOut,
      guests: body.guests,
      apartment: body.apartment || "",
      source,
      ip,
      referer,
      userAgent,
    })

    if (!sent.ok) {
      return NextResponse.json({ ok: false, reason: sent.reason }, { status: 503 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, reason: "server_error" }, { status: 500 })
  }
}
