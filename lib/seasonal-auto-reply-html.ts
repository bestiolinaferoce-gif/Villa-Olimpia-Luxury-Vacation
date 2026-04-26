import { buildVillaOlimpiaEmailHtml } from "@/lib/email-branding"
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

  return buildVillaOlimpiaEmailHtml({
    eyebrow: "Richiesta ricevuta",
    title: `Ciao ${first},`,
    intro:
      `abbiamo ricevuto la tua richiesta per ${cfg.label} e la stiamo prendendo in carico con attenzione.\n` +
      "A breve ti invieremo disponibilità, proposta diretta e tutte le informazioni utili per organizzare il soggiorno al meglio.",
    summaryItems: [
      { label: "Check-in", value: input.checkIn, icon: "📅" },
      { label: "Check-out", value: input.checkOut, icon: "🗓️" },
      { label: "Ospiti", value: input.guests, icon: "👥" },
      { label: "Lodge", value: apt, icon: "🏡" },
    ],
    bodyHtml:
      "<p style='margin:0 0 10px 0;'>Ti risponderemo con una proposta chiara e curata per il <strong>canale diretto</strong>, senza commissioni da portale e con il supporto della nostra gestione familiare.</p>" +
      "<p style='margin:0;'>Se hai esigenze specifiche sul soggiorno, puoi rispondere direttamente a questa email: saremo felici di aiutarti.</p>",
    ctaLabel: "Scrivici su WhatsApp",
    ctaHref: wa,
    closing:
      `Per urgenze puoi contattarci anche su WhatsApp al ${SITE_CONFIG.phone}.\n` +
      "Grazie ancora per aver scelto Villa Olimpia.",
  })
}
