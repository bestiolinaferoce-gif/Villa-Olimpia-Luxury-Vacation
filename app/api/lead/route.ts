import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { appendFile, mkdir } from "fs/promises"
import path from "path"
import { buildEnrichedLead, leadPriorityTag, type EnrichedLead } from "@/lib/lead-automation"
import { DATA_DIR } from "@/lib/data-path"
import { buildOwnerLeadNotificationHtml } from "@/lib/email-branding"
import { buildSeasonalAutoReplyHtml } from "@/lib/seasonal-auto-reply-html"
import { SEASONAL_CONFIG, type SeasonalMonth } from "@/lib/seasonalConfig"
import { resolveOwnerEmailRecipients } from "@/lib/lead-inbox"
import { BASE_URL } from "@/lib/metadata"
import { kv } from "@/lib/kv"

const leadSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(200),
  phone: z.string().min(6).max(40),
  checkIn: z.string().min(1).max(20),
  checkOut: z.string().min(1).max(20),
  guests: z.string().min(1).max(5),
  apartment: z.string().max(120).optional().or(z.literal("")),
  message: z.string().max(2500).optional().or(z.literal("")),
  agency: z.string().max(140).optional().or(z.literal("")),
  company: z.string().max(120).optional().or(z.literal("")),
  source: z.string().max(120).optional().or(z.literal("")),
  utmSource: z.string().max(120).optional().or(z.literal("")),
  utmMedium: z.string().max(120).optional().or(z.literal("")),
  utmCampaign: z.string().max(160).optional().or(z.literal("")),
  landingPage: z.string().max(400).optional().or(z.literal("")),
  seasonalMonth: z.enum(["maggio", "giugno", "luglio", "other"]).optional(),
  marketingOptIn: z.boolean().optional(),
})

type LeadPayload = z.infer<typeof leadSchema>

const rateLimitStore = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX = 8
const EMAIL_RATE_LIMIT_WINDOW_MS = 2 * 60 * 1000
const EMAIL_RATE_LIMIT_MAX = 2
const RATE_LIMIT_WINDOW_SECONDS = Math.floor(RATE_LIMIT_WINDOW_MS / 1000)
const EMAIL_RATE_LIMIT_WINDOW_SECONDS = Math.floor(EMAIL_RATE_LIMIT_WINDOW_MS / 1000)
const allowedOrigins = new Set(
  [BASE_URL, process.env.NEXT_PUBLIC_SITE_URL]
    .filter((value): value is string => Boolean(value))
    .map((value) => value.replace(/\/+$/, ""))
)

function getClientIp(req: NextRequest) {
  const forwardedFor = req.headers.get("x-forwarded-for")
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown"
  }

  return req.headers.get("x-real-ip") || "unknown"
}

function isLocalRateLimited(key: string, max: number, windowMs: number) {
  const now = Date.now()
  const current = rateLimitStore.get(key)
  if (!current || now > current.resetAt) {
    rateLimitStore.set(key, { count: 1, resetAt: now + windowMs })
    return false
  }
  if (current.count >= max) {
    return true
  }
  current.count += 1
  rateLimitStore.set(key, current)
  return false
}

async function isRateLimitedWithKv(params: {
  key: string
  max: number
  windowSeconds: number
  fallbackWindowMs: number
}) {
  const { key, max, windowSeconds, fallbackWindowMs } = params
  try {
    const nextCount = await kv.incr(key)
    if (nextCount === 1) {
      await kv.expire(key, windowSeconds)
    }
    return nextCount > max
  } catch {
    return isLocalRateLimited(key, max, fallbackWindowMs)
  }
}

function hasAllowedOrigin(req: NextRequest) {
  const origin = req.headers.get("origin")
  if (!origin) return true
  return allowedOrigins.has(origin.replace(/\/+$/, ""))
}

function buildTextEmail(lead: EnrichedLead) {
  const priorityTag = leadPriorityTag(lead)
  const sep = "─".repeat(42)
  return [
    "RICHIESTA DISPONIBILITA · VILLA OLIMPIA",
    sep,
    "",
    "OSPITE",
    `Nome:       ${lead.name}`,
    `Email:      ${lead.email}`,
    `Telefono:   ${lead.phone}`,
    ...(lead.agency ? [`Agenzia:    ${lead.agency}`] : []),
    "",
    "SOGGIORNO",
    `Check-in:   ${lead.checkIn}`,
    `Check-out:  ${lead.checkOut}`,
    `Ospiti:     ${lead.guests}`,
    `Appartamento: ${lead.apartment || "Nessuna preferenza"}`,
    "",
    "MESSAGGIO",
    lead.message || "(nessun messaggio aggiuntivo)",
    "",
    sep,
    "DATI INTERNI",
    `Priorita:          ${priorityTag}`,
    `Urgenza:           ${lead.daysToCheckIn <= 3 ? "Last minute" : lead.daysToCheckIn <= 14 ? "Vicino" : "Programmabile"} (${lead.daysToCheckIn} giorni al check-in)`,
    `Notti:             ${lead.stayNights}`,
    `Prima risposta:    ${lead.followUpPlan.firstContactBy}`,
    `Canale suggerito:  ${lead.followUpPlan.channel}`,
    `Fonte lead:        ${lead.source || "Diretta"}`,
    ...(lead.utmCampaign ? [`Campagna:          ${lead.utmCampaign}`] : []),
    ...(lead.landingPage ? [`Pagina arrivo:     ${lead.landingPage}`] : []),
    `Ricevuto:          ${lead.receivedAt}`,
    `Lead ID:           ${lead.leadId}`,
  ].join("\n")
}

async function sendWithResend(lead: EnrichedLead) {
  const apiKey = process.env.RESEND_API_KEY
  const to = resolveOwnerEmailRecipients(process.env.LEADS_TO_EMAIL)
  const from = process.env.LEADS_FROM_EMAIL || "Villa Olimpia <onboarding@resend.dev>"

  if (!apiKey) {
    return { ok: false as const, reason: "missing_resend_key" }
  }

  const subject = `Richiesta disponibilità – ${lead.name} · ${lead.checkIn} [${leadPriorityTag(lead)}]`
  const text = buildTextEmail(lead)
  const html = buildOwnerLeadNotificationHtml({
    guestName: lead.name,
    guestEmail: lead.email,
    guestPhone: lead.phone,
    checkIn: lead.checkIn,
    checkOut: lead.checkOut,
    guests: lead.guests,
    apartment: lead.apartment || "",
    message: lead.message || "",
    priority: leadPriorityTag(lead),
    source: lead.source || "Diretta",
    followUpBy: lead.followUpPlan.firstContactBy,
    stayNights: String(lead.stayNights),
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
      reply_to: lead.email,
      subject,
      text,
      html,
    }),
  })

  if (!response.ok) {
    const errorBody = await response.text()
    console.error("[Resend] Error:", response.status, errorBody)
    return {
      ok: false as const,
      reason: `resend_error_${response.status}`,
      errorBody,
    }
  }

  return { ok: true as const }
}

async function sendAutoReplyToGuest(lead: EnrichedLead) {
  const apiKey = process.env.RESEND_API_KEY
  const from = (process.env.LEADS_FROM_EMAIL || "Villa Olimpia <onboarding@resend.dev>").trim()
  const replyTo = (process.env.LEADS_PRIMARY_INBOX || "villaolimpiacaporizzuto@gmail.com").trim()
  const enabled = process.env.LEADS_AUTOREPLY_ENABLED?.trim() !== "false"
  if (!enabled) return { ok: false as const, reason: "autoresponder_disabled" }
  if (!apiKey) return { ok: false as const, reason: "missing_resend_key" }

  const sm = lead.seasonalMonth
  const seasonalKey: SeasonalMonth | "other" | undefined =
    sm === "maggio" || sm === "giugno" || sm === "luglio" ? sm : sm === "other" ? "other" : undefined

  const subject =
    seasonalKey && seasonalKey !== "other"
      ? SEASONAL_CONFIG[seasonalKey].emailSubject
      : "Richiesta ricevuta - Villa Olimpia"

  const text = [
    `Ciao ${lead.name},`,
    "",
    "abbiamo ricevuto la tua richiesta di preventivo e ti risponderemo al piu presto.",
    "",
    "Riepilogo:",
    `- Check-in: ${lead.checkIn}`,
    `- Check-out: ${lead.checkOut}`,
    `- Ospiti: ${lead.guests}`,
    `- Appartamento: ${lead.apartment || "Nessuna preferenza"}`,
    seasonalKey && seasonalKey !== "other" ? `- Mese stagionale: ${seasonalKey}` : "",
    typeof lead.marketingOptIn === "boolean" ? `- Opt-in marketing: ${lead.marketingOptIn ? "si" : "no"}` : "",
    "",
    "Per urgenze puoi scriverci su WhatsApp:",
    "- +39 333 577 3390",
    "",
    "Grazie,",
    "Villa Olimpia",
  ]
    .filter(Boolean)
    .join("\n")

  const html = buildSeasonalAutoReplyHtml({
    name: lead.name,
    month: seasonalKey || "other",
    checkIn: lead.checkIn,
    checkOut: lead.checkOut,
    guests: lead.guests,
    apartment: lead.apartment,
  })

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: lead.email,
      reply_to: replyTo,
      subject,
      text,
      html,
    }),
  })

  if (!response.ok) {
    const errorBody = await response.text().catch(() => "")
    console.error("[Resend autoreply] Error:", response.status, errorBody)
    return { ok: false as const, reason: `autoresponder_error_${response.status}` }
  }

  return { ok: true as const }
}

function normalizePhoneForWhatsApp(rawPhone: string) {
  const digits = (rawPhone || "").replace(/[^\d+]/g, "")
  if (!digits) return null
  if (digits.startsWith("+")) return digits.slice(1)
  if (digits.startsWith("00")) return digits.slice(2)
  // fallback Italia se utente inserisce numero locale senza prefisso
  if (digits.startsWith("0")) return `39${digits.slice(1)}`
  if (digits.startsWith("3")) return `39${digits}`
  return digits
}

async function sendWhatsAppTemplateToGuest(lead: EnrichedLead) {
  const token = process.env.WHATSAPP_ACCESS_TOKEN
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID
  const templateName = process.env.WHATSAPP_TEMPLATE_NAME || "lead_confirmation"
  const templateLanguage = process.env.WHATSAPP_TEMPLATE_LANG || "it"

  if (!token || !phoneNumberId) {
    return { ok: false as const, reason: "missing_whatsapp_config" }
  }

  const to = normalizePhoneForWhatsApp(lead.phone)
  if (!to) {
    return { ok: false as const, reason: "invalid_phone_for_whatsapp" }
  }

  const response = await fetch(`https://graph.facebook.com/v21.0/${phoneNumberId}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to,
      type: "template",
      template: {
        name: templateName,
        language: { code: templateLanguage },
        components: [
          {
            type: "body",
            parameters: [
              { type: "text", text: lead.name },
              { type: "text", text: lead.checkIn },
              { type: "text", text: lead.checkOut },
              { type: "text", text: lead.guests },
            ],
          },
        ],
      },
    }),
  })

  if (!response.ok) {
    return { ok: false as const, reason: `whatsapp_error_${response.status}` }
  }

  return { ok: true as const }
}

async function sendWithWebhook(lead: EnrichedLead) {
  if (process.env.LEADS_WEBHOOK_DISABLED === "true") {
    return { ok: false as const, reason: "webhook_disabled" }
  }
  const webhookUrl = process.env.LEADS_WEBHOOK_URL?.trim()
  const webhookToken = process.env.LEADS_WEBHOOK_TOKEN?.trim()
  const allowInsecure = process.env.LEADS_WEBHOOK_ALLOW_INSECURE?.trim() === "true"
  if (!webhookUrl) {
    return { ok: false as const, reason: "missing_webhook_url" }
  }
  if (webhookUrl.startsWith("http://") && !allowInsecure) {
    return { ok: false as const, reason: "insecure_webhook_url" }
  }
  if (webhookUrl.startsWith("http://")) {
    console.warn("[Webhook] LEADS_WEBHOOK_URL is plain HTTP — token and lead data travel unencrypted. Move n8n behind HTTPS.")
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  }
  if (webhookToken) {
    headers.Authorization = `Bearer ${webhookToken}`
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers,
    body: JSON.stringify({
      event: "lead.created",
      priorityTag: leadPriorityTag(lead),
      lead,
    }),
  })

  if (!response.ok) {
    const errorBody = await response.text().catch(() => "")
    console.error("[Webhook] Error:", response.status, errorBody)
    return { ok: false as const, reason: `webhook_error_${response.status}` }
  }

  return { ok: true as const }
}

const KV_LEADS_KEY = "vo_leads"
const KV_LEADS_MAX = 1000

async function persistLeadToKv(lead: EnrichedLead) {
  try {
    await kv.lpush(KV_LEADS_KEY, JSON.stringify(lead))
    await kv.ltrim(KV_LEADS_KEY, 0, KV_LEADS_MAX - 1)
    return { ok: true as const }
  } catch (err) {
    console.error("[KV] persist lead failed:", err instanceof Error ? err.message : err)
    return { ok: false as const, reason: "kv_persist_failed" }
  }
}

async function persistLeadToFile(lead: EnrichedLead) {
  if (process.env.LEADS_PERSIST_ENABLED === "false") {
    return { ok: false as const, reason: "persist_disabled" }
  }
  try {
    const baseDir = process.env.LEADS_STORE_DIR
      ? path.resolve(process.env.LEADS_STORE_DIR)
      : path.join(DATA_DIR, "leads")
    await mkdir(baseDir, { recursive: true })
    const month = lead.receivedAt.slice(0, 7) // YYYY-MM
    const filePath = path.join(baseDir, `inbox-${month}.ndjson`)
    await appendFile(filePath, `${JSON.stringify(lead)}\n`, "utf8")
    return { ok: true as const, filePath }
  } catch {
    return { ok: false as const, reason: "persist_failed" }
  }
}

async function sendTelegramAlert(lead: EnrichedLead) {
  const token = process.env.LEADS_TELEGRAM_BOT_TOKEN
  const chatId = process.env.LEADS_TELEGRAM_CHAT_ID
  if (!token || !chatId) {
    return { ok: false as const, reason: "missing_telegram_config" }
  }

  const message = [
    "Nuovo lead Villa Olimpia",
    `ID: ${lead.leadId}`,
    `Priorita: ${leadPriorityTag(lead)} (${lead.leadScore}/100)`,
    `Rispondere entro: ${lead.followUpPlan.firstContactBy}`,
    `Canale: ${lead.followUpPlan.channel}`,
    `Nome: ${lead.name}`,
    `Telefono: ${lead.phone}`,
    `Check-in/out: ${lead.checkIn} -> ${lead.checkOut}`,
    `Ospiti: ${lead.guests}`,
    `App: ${lead.apartment || "Nessuna preferenza"}`,
    `Fonte: ${lead.sourceNormalized}`,
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
    if (!hasAllowedOrigin(req)) {
      return NextResponse.json({ ok: false, reason: "invalid_origin" }, { status: 403 })
    }

    const ip = getClientIp(req)
    const ipRateLimited = await isRateLimitedWithKv({
      key: `rate_limit:lead:ip:${ip}`,
      max: RATE_LIMIT_MAX,
      windowSeconds: RATE_LIMIT_WINDOW_SECONDS,
      fallbackWindowMs: RATE_LIMIT_WINDOW_MS,
    })
    if (ipRateLimited) {
      return NextResponse.json(
        { ok: false, reason: "rate_limited" },
        { status: 429 }
      )
    }

    const parsedBody = leadSchema.safeParse(await req.json())
    if (!parsedBody.success) {
      return NextResponse.json(
        { ok: false, reason: "invalid_payload", errors: parsedBody.error.flatten() },
        { status: 400 }
      )
    }

    const lead = parsedBody.data as LeadPayload
    const emailRateLimited = await isRateLimitedWithKv({
      key: `rate_limit:lead:email:${lead.email.trim().toLowerCase()}`,
      max: EMAIL_RATE_LIMIT_MAX,
      windowSeconds: EMAIL_RATE_LIMIT_WINDOW_SECONDS,
      fallbackWindowMs: EMAIL_RATE_LIMIT_WINDOW_MS,
    })
    if (emailRateLimited) {
      return NextResponse.json({ ok: false, reason: "rate_limited_email" }, { status: 429 })
    }

    // Honeypot anti-spam
    if (lead.company) {
      return NextResponse.json({ ok: true, reason: "honeypot" }, { status: 200 })
    }

    if (new Date(lead.checkIn).toString() === "Invalid Date" || new Date(lead.checkOut).toString() === "Invalid Date") {
      return NextResponse.json({ ok: false, reason: "invalid_dates" }, { status: 400 })
    }

    if (new Date(lead.checkIn) >= new Date(lead.checkOut)) {
      return NextResponse.json({ ok: false, reason: "date_range_error" }, { status: 400 })
    }

    const enrichedLead = buildEnrichedLead(lead, {
      ip,
      userAgent: req.headers.get("user-agent") || "unknown",
      referer: req.headers.get("referer") || "unknown",
    })

    const [resendDelivery, autoReplyDelivery, whatsappGuestDelivery, webhookDelivery, telegramDelivery, persistedKv, persistedFile] = await Promise.all([
      sendWithResend(enrichedLead),
      sendAutoReplyToGuest(enrichedLead),
      sendWhatsAppTemplateToGuest(enrichedLead),
      sendWithWebhook(enrichedLead),
      sendTelegramAlert(enrichedLead),
      persistLeadToKv(enrichedLead),
      persistLeadToFile(enrichedLead),
    ])
    const persisted = persistedKv.ok ? persistedKv : persistedFile

    // Only treat the lead as delivered when an owner-facing channel succeeds.
    // NOTE: webhookDelivery.ok is intentionally excluded — n8n returns HTTP 200 even when
    // its Code nodes fail silently (process.env access is blocked). Counting the webhook
    // as a successful delivery masks Resend/Telegram failures and breaks the fallback logic.
    const deliveredAny = resendDelivery.ok || telegramDelivery.ok

    if (!deliveredAny) {
      return NextResponse.json(
        {
          ok: false,
          reason: "all_delivery_channels_failed",
          fallback: "whatsapp_or_mailto",
          channels: {
            resend: resendDelivery.ok,
            autoresponder: autoReplyDelivery.ok,
            whatsappGuest: whatsappGuestDelivery.ok,
            webhook: webhookDelivery.ok,
            telegram: telegramDelivery.ok,
            persisted: persisted.ok,
          },
        },
        { status: 503 }
      )
    }

    return NextResponse.json(
      {
        ok: true,
        reason: "delivered",
        leadId: enrichedLead.leadId,
        priority: leadPriorityTag(enrichedLead),
        followUp: enrichedLead.followUpPlan,
        channels: {
          resend: resendDelivery.ok,
          autoresponder: autoReplyDelivery.ok,
          whatsappGuest: whatsappGuestDelivery.ok,
          webhook: webhookDelivery.ok,
          telegram: telegramDelivery.ok,
          persisted: persisted.ok,
        },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("[/api/lead] internal_error:", error instanceof Error ? error.stack ?? error.message : error)
    return NextResponse.json(
      { ok: false, reason: "internal_error", fallback: "whatsapp_or_mailto" },
      { status: 500 }
    )
  }
}
