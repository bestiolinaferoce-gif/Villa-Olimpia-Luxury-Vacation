import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { appendFile, mkdir } from "fs/promises"
import path from "path"
import { buildEnrichedLead, leadPriorityTag, type EnrichedLead } from "@/lib/lead-automation"
import { DATA_DIR } from "@/lib/data-path"

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
})

type LeadPayload = z.infer<typeof leadSchema>

const rateLimitStore = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX = 8

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

  if (current.count >= RATE_LIMIT_MAX) {
    return true
  }

  current.count += 1
  rateLimitStore.set(ip, current)
  return false
}

function buildTextEmail(lead: EnrichedLead) {
  const priorityTag = leadPriorityTag(lead)
  return [
    "Nuova richiesta preventivo dal sito Villa Olimpia",
    "",
    `Lead ID: ${lead.leadId}`,
    `Priorita: ${priorityTag} (score ${lead.leadScore}/100)`,
    `Urgenza: ${lead.urgency}`,
    `Ricevuto: ${lead.receivedAt}`,
    `Prima risposta entro: ${lead.followUpPlan.firstContactBy}`,
    `Canale suggerito: ${lead.followUpPlan.channel}`,
    `Motivo priorita: ${lead.followUpPlan.priorityReason}`,
    "",
    `Nome: ${lead.name}`,
    `Email: ${lead.email}`,
    `Telefono: ${lead.phone}`,
    `Agenzia: ${lead.agency || "Non indicata"}`,
    `Fonte lead: ${lead.source || "Diretta"}`,
    `UTM Source: ${lead.utmSource || "N/D"}`,
    `UTM Medium: ${lead.utmMedium || "N/D"}`,
    `UTM Campaign: ${lead.utmCampaign || "N/D"}`,
    `Landing page: ${lead.landingPage || "N/D"}`,
    `Notti: ${lead.stayNights}`,
    `Giorni al check-in: ${lead.daysToCheckIn}`,
    `Check-in: ${lead.checkIn}`,
    `Check-out: ${lead.checkOut}`,
    `Ospiti: ${lead.guests}`,
    `Appartamento preferito: ${lead.apartment || "Nessuna preferenza"}`,
    "",
    "Context:",
    `IP: ${lead.context.ip}`,
    `Referer: ${lead.context.referer}`,
    `User-Agent: ${lead.context.userAgent}`,
    "",
    "Messaggio:",
    lead.message || "Nessun messaggio aggiuntivo",
    "",
    "Bozza WhatsApp consigliata:",
    lead.followUpPlan.whatsappDraft,
  ].join("\n")
}

async function sendWithResend(lead: EnrichedLead) {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.LEADS_TO_EMAIL || "villaolimpiacaporizzuto@gmail.com"
  const from = process.env.LEADS_FROM_EMAIL || "Villa Olimpia <onboarding@resend.dev>"

  if (!apiKey) {
    return { ok: false as const, reason: "missing_resend_key" }
  }

  const subject = `[${leadPriorityTag(lead)}] Nuova richiesta preventivo - ${lead.name}`
  const text = buildTextEmail(lead)

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

async function sendAutoReplyToGuest(lead: EnrichedLead) {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.LEADS_FROM_EMAIL || "Villa Olimpia <onboarding@resend.dev>"
  const enabled = process.env.LEADS_AUTOREPLY_ENABLED !== "false"
  if (!enabled) return { ok: false as const, reason: "autoresponder_disabled" }
  if (!apiKey) return { ok: false as const, reason: "missing_resend_key" }

  const subject = "Richiesta ricevuta - Villa Olimpia"
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
    "",
    "Per urgenze puoi scriverci su WhatsApp:",
    "- +39 333 577 3390",
    "",
    "Grazie,",
    "Villa Olimpia",
  ].join("\n")

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: lead.email,
      subject,
      text,
    }),
  })

  if (!response.ok) {
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
  const webhookUrl = process.env.LEADS_WEBHOOK_URL
  const webhookToken = process.env.LEADS_WEBHOOK_TOKEN
  if (!webhookUrl) {
    return { ok: false as const, reason: "missing_webhook_url" }
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
    return { ok: false as const, reason: `webhook_error_${response.status}` }
  }

  return { ok: true as const }
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
    const ip = getClientIp(req)
    if (isRateLimited(ip)) {
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

    const [resendDelivery, autoReplyDelivery, whatsappGuestDelivery, webhookDelivery, telegramDelivery, persisted] = await Promise.all([
      sendWithResend(enrichedLead),
      sendAutoReplyToGuest(enrichedLead),
      sendWhatsAppTemplateToGuest(enrichedLead),
      sendWithWebhook(enrichedLead),
      sendTelegramAlert(enrichedLead),
      persistLeadToFile(enrichedLead),
    ])

    const deliveredAny = resendDelivery.ok || webhookDelivery.ok || persisted.ok

    if (!deliveredAny) {
      return NextResponse.json(
        {
          ok: false,
          reason: "all_delivery_channels_failed",
          fallback: "whatsapp_or_mailto",
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
  } catch {
    return NextResponse.json(
      { ok: false, reason: "internal_error", fallback: "whatsapp_or_mailto" },
      { status: 500 }
    )
  }
}
