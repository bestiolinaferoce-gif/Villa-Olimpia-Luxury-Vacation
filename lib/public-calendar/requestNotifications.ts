import { appendFile, mkdir } from "fs/promises"
import path from "path"
import { DATA_DIR } from "@/lib/data-path"
import type { PublicBookingRequest } from "./types"

type DeliveryResult = { ok: true } | { ok: false; reason: string }

export type PublicRequestDeliveryReport = {
  email: DeliveryResult
  webhook: DeliveryResult
  persisted: DeliveryResult
}

function buildAdminText(req: PublicBookingRequest) {
  return [
    "Nuova richiesta pubblica Booking Board - Villa Olimpia",
    "",
    `Request ID: ${req.id}`,
    `Ricevuta: ${req.createdAt}`,
    `Lodge ID: ${req.lodgeId}`,
    `Check-in: ${req.checkIn}`,
    `Check-out: ${req.checkOut}`,
    `Ospiti: ${req.guests}`,
    `Stato: ${req.status}`,
    "",
    `Nome: ${req.guestName}`,
    `Email: ${req.guestEmail}`,
    `Telefono: ${req.guestPhone || "Non indicato"}`,
    "",
    "Note:",
    req.notes || "Nessuna nota",
  ].join("\n")
}

async function sendEmail(req: PublicBookingRequest): Promise<DeliveryResult> {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.LEADS_TO_EMAIL || "villaolimpiacaporizzuto@gmail.com"
  const from = process.env.LEADS_FROM_EMAIL || "Villa Olimpia <onboarding@resend.dev>"

  if (!apiKey) {
    return { ok: false, reason: "missing_resend_key" }
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: req.guestEmail,
      subject: `[PUBLIC REQUEST] ${req.guestName} - ${req.lodgeId}`,
      text: buildAdminText(req),
    }),
  })

  if (!response.ok) {
    return { ok: false, reason: `resend_error_${response.status}` }
  }

  return { ok: true }
}

async function sendWebhook(req: PublicBookingRequest): Promise<DeliveryResult> {
  const webhookUrl = process.env.LEADS_WEBHOOK_URL
  const webhookToken = process.env.LEADS_WEBHOOK_TOKEN

  if (!webhookUrl) {
    return { ok: false, reason: "missing_webhook_url" }
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
      event: "public_request.created",
      request: req,
    }),
  })

  if (!response.ok) {
    return { ok: false, reason: `webhook_error_${response.status}` }
  }

  return { ok: true }
}

async function persistToAuditFile(req: PublicBookingRequest): Promise<DeliveryResult> {
  if (process.env.PUBLIC_REQUEST_PERSIST_ENABLED === "false") {
    return { ok: false, reason: "persist_disabled" }
  }

  try {
    const baseDir = process.env.PUBLIC_REQUEST_STORE_DIR
      ? path.resolve(process.env.PUBLIC_REQUEST_STORE_DIR)
      : path.join(DATA_DIR, "public-request-audit")
    await mkdir(baseDir, { recursive: true })
    const month = req.createdAt.slice(0, 7)
    const filePath = path.join(baseDir, `public-requests-${month}.ndjson`)
    await appendFile(filePath, `${JSON.stringify(req)}\n`, "utf8")
    return { ok: true }
  } catch {
    return { ok: false, reason: "persist_failed" }
  }
}

export async function mirrorPublicRequest(
  req: PublicBookingRequest
): Promise<PublicRequestDeliveryReport> {
  const [email, webhook, persisted] = await Promise.all([
    sendEmail(req),
    sendWebhook(req),
    persistToAuditFile(req),
  ])

  return { email, webhook, persisted }
}
