import type { MonthConfig, SeasonalMonth } from "@/lib/seasonalConfig"
import { SEASONAL_CONFIG } from "@/lib/seasonalConfig"
import { SITE_CONFIG } from "@/lib/constants"

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

export function buildSeasonalAutoReplyHtml(input: {
  name: string
  month: SeasonalMonth | "other" | undefined
  checkIn: string
  checkOut: string
  guests: string
  apartment?: string
}): string {
  const key =
    input.month && input.month !== "other" ? input.month : "other"
  const cfg: MonthConfig = SEASONAL_CONFIG[key] ?? SEASONAL_CONFIG.other
  const first = esc(input.name.trim() || "ospite")
  const apt = esc(input.apartment?.trim() || "da definire con te")

  const wa = `https://wa.me/${SITE_CONFIG.whatsappPrimary}`

  return `<!DOCTYPE html><html><head><meta charset="utf-8" /></head><body style="font-family:system-ui,sans-serif;line-height:1.6;color:#111">
  <p>Ciao ${first},</p>
  <p>Abbiamo ricevuto la tua richiesta per <strong>${esc(cfg.label)}</strong>.</p>
  <p><strong>Riepilogo</strong><br/>
  Check-in: ${esc(input.checkIn)}<br/>
  Check-out: ${esc(input.checkOut)}<br/>
  Ospiti: ${esc(input.guests)}<br/>
  Preferenza appartamento: ${apt}</p>
  <p>Ti rispondiamo al più presto con disponibilità e un preventivo chiaro per il <strong>canale diretto</strong> (senza commissioni da portale).</p>
  <p>Per urgenze: <a href="${wa}">WhatsApp Villa Olimpia</a> · ${esc(SITE_CONFIG.phone)}</p>
  <hr style="border:none;border-top:1px solid #eee;margin:24px 0" />
  <p style="font-size:13px;color:#555">Villa Olimpia · Isola di Capo Rizzuto · ${esc(SITE_CONFIG.email)}</p>
</body></html>`
}
