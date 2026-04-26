/**
 * POST pubblico: richieste disponibilità dalla barra sticky.
 * Richiede in produzione: RESEND_API_KEY. Destinatario: inbox ufficiale + opz. LEADS_TO_EMAIL (copia).
 * Fallback: LEADS_TELEGRAM_BOT_TOKEN + LEADS_TELEGRAM_CHAT_ID (alert operatore).
 * Persistenza: NDJSON in data/leads/ (o /tmp su Vercel).
 */
import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { appendFile, mkdir } from "fs/promises"
import path from "path"
import { buildOwnerAvailabilityNotificationHtml } from "@/lib/email-branding"
import { resolveOwnerEmailRecipients } from "@/lib/lead-inbox"
import { DATA_DIR } from "@/lib/data-path"

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
  const html = buildOwnerAvailabilityNotificationHtml({
    name: params.name,
    email: params.email,
    phone: params.phone,
    checkIn: params.checkIn,
    checkOut: params.checkOut,
    guests: params.guests,
    apartment: params.apartment,
    source: params.source,
    referer: params.referer,
  })

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
      html,
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

// ─── Persistenza NDJSON (safety-net: eseguita indipendentemente da Resend) ─────

type AvailabilityRecord = {
  receivedAt: string
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
}

async function persistAvailabilityToFile(record: AvailabilityRecord) {
  if (process.env.LEADS_PERSIST_ENABLED === "false") {
    return { ok: false as const, reason: "persist_disabled" }
  }
  try {
    const baseDir = process.env.LEADS_STORE_DIR
      ? path.resolve(process.env.LEADS_STORE_DIR)
      : path.join(DATA_DIR, "leads")
    await mkdir(baseDir, { recursive: true })
    const month = record.receivedAt.slice(0, 7) // YYYY-MM
    const filePath = path.join(baseDir, `availability-${month}.ndjson`)
    await appendFile(filePath, `${JSON.stringify(record)}\n`, "utf8")
    return { ok: true as const, filePath }
  } catch {
    return { ok: false as const, reason: "persist_failed" }
  }
}

// ─── Telegram alert operatore (fallback se Resend è giù) ──────────────────────

async function sendTelegramAvailabilityAlert(record: AvailabilityRecord) {
  const token = process.env.LEADS_TELEGRAM_BOT_TOKEN
  const chatId = process.env.LEADS_TELEGRAM_CHAT_ID
  if (!token || !chatId) {
    return { ok: false as const, reason: "missing_telegram_config" }
  }

  const message = [
    "📅 Nuova richiesta disponibilità — Villa Olimpia",
    `Nome:      ${record.name}`,
    `Email:     ${record.email}`,
    `Telefono:  ${record.phone}`,
    `Check-in:  ${record.checkIn}`,
    `Check-out: ${record.checkOut}`,
    `Ospiti:    ${record.guests}`,
    `Lodge:     ${record.apartment || "Nessuna preferenza"}`,
    `Fonte:     ${record.source}`,
  ].join("\n")

  const url = `https://api.telegram.org/bot${token}/sendMessage`
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      disable_web_page_preview: true,
    }),
  })

  if (!response.ok) {
    return { ok: false as const, reason: `telegram_error_${response.status}` }
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

    const record: AvailabilityRecord = {
      receivedAt: new Date().toISOString(),
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
    }

    const [emailDelivery, telegramDelivery, persisted] = await Promise.all([
      sendAvailabilityEmail({ ...record }),
      sendTelegramAvailabilityAlert(record),
      persistAvailabilityToFile(record),
    ])

    // Il lead è consegnato se almeno uno dei canali owner ha funzionato.
    // La persistenza su file è best-effort e non blocca il successo.
    const deliveredAny = emailDelivery.ok || telegramDelivery.ok

    if (!deliveredAny) {
      return NextResponse.json(
        {
          ok: false,
          reason: "all_delivery_channels_failed",
          fallback: "whatsapp_or_mailto",
          channels: {
            resend: emailDelivery.ok,
            telegram: telegramDelivery.ok,
            persisted: persisted.ok,
          },
        },
        { status: 503 }
      )
    }

    return NextResponse.json({
      ok: true,
      channels: {
        resend: emailDelivery.ok,
        telegram: telegramDelivery.ok,
        persisted: persisted.ok,
      },
    })
  } catch {
    return NextResponse.json({ ok: false, reason: "server_error" }, { status: 500 })
  }
}
