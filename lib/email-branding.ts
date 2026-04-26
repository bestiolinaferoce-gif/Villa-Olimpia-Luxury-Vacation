import { SITE_CONFIG } from "@/lib/constants"

function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

function nl2br(value: string): string {
  return esc(value).replace(/\n/g, "<br />")
}

const BRAND = {
  dark: "#1C3A2F",
  mid: "#2D5A45",
  gold: "#C9A84C",
  cream: "#FDFAF4",
  light: "#EAF2EC",
  white: "#FFFFFF",
  text: "#1A1A1A",
  muted: "#6B6B6B",
  border: "#D8D5CB",
}

const LOGO_URL = `${SITE_CONFIG.url}/favicon.png`

type SummaryItem = {
  label: string
  value: string
  icon?: string
}

type DetailRow = {
  label: string
  value: string
}

type BrandedEmailInput = {
  eyebrow: string
  title: string
  intro: string
  summaryItems?: SummaryItem[]
  bodyHtml?: string
  detailRows?: DetailRow[]
  ctaLabel?: string
  ctaHref?: string
  closing?: string
}

function renderSummary(items: SummaryItem[] = []): string {
  if (!items.length) return ""

  const cards = items
    .map((item) => {
      const icon = item.icon ? `<div style="font-size:18px;line-height:18px;margin-bottom:8px;">${item.icon}</div>` : ""
      return `
        <td style="padding:6px;" valign="top">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;background:${BRAND.light};border:1px solid ${BRAND.border};border-radius:14px;">
            <tr>
              <td style="padding:14px 14px 12px 14px;text-align:left;">
                ${icon}
                <div style="font-family:Helvetica,Arial,sans-serif;font-size:11px;line-height:14px;color:${BRAND.mid};font-weight:bold;text-transform:uppercase;letter-spacing:0.5px;">${esc(item.label)}</div>
                <div style="font-family:Helvetica,Arial,sans-serif;font-size:16px;line-height:20px;color:${BRAND.dark};font-weight:bold;padding-top:4px;">${esc(item.value)}</div>
              </td>
            </tr>
          </table>
        </td>
      `
    })
    .join("")

  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:14px 0 10px 0;">
      <tr>${cards}</tr>
    </table>
  `
}

function renderDetails(rows: DetailRow[] = []): string {
  if (!rows.length) return ""

  const body = rows
    .map(
      (row, index) => `
        <tr>
          <td style="padding:10px 12px;border-top:${index === 0 ? "0" : `1px solid ${BRAND.border}`};font-family:Helvetica,Arial,sans-serif;font-size:12px;line-height:16px;color:${BRAND.muted};font-weight:bold;width:34%;vertical-align:top;">
            ${esc(row.label)}
          </td>
          <td style="padding:10px 12px;border-top:${index === 0 ? "0" : `1px solid ${BRAND.border}`};font-family:Helvetica,Arial,sans-serif;font-size:13px;line-height:18px;color:${BRAND.text};vertical-align:top;">
            ${nl2br(row.value)}
          </td>
        </tr>
      `
    )
    .join("")

  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:12px 0 0 0;border:1px solid ${BRAND.border};border-radius:14px;background:${BRAND.white};">
      ${body}
    </table>
  `
}

export function buildVillaOlimpiaEmailHtml(input: BrandedEmailInput): string {
  const cta =
    input.ctaLabel && input.ctaHref
      ? `
        <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:18px 0 12px 0;">
          <tr>
            <td style="background:${BRAND.gold};border-radius:999px;padding:0;">
              <a href="${esc(input.ctaHref)}" style="display:inline-block;padding:12px 18px;font-family:Helvetica,Arial,sans-serif;font-size:13px;line-height:16px;font-weight:bold;color:${BRAND.dark};text-decoration:none;">
                ${esc(input.ctaLabel)}
              </a>
            </td>
          </tr>
        </table>
      `
      : ""

  return `<!DOCTYPE html>
<html lang="it">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(input.title)}</title>
  </head>
  <body style="margin:0;padding:0;background:${BRAND.cream};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;background:${BRAND.cream};">
      <tr>
        <td align="center" style="padding:24px 12px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;max-width:680px;background:${BRAND.white};border-radius:22px;overflow:hidden;border:1px solid ${BRAND.border};">
            <tr>
              <td style="padding:0;background:${BRAND.dark};">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:22px 24px 18px 24px;vertical-align:middle;">
                      <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                        <tr>
                          <td valign="middle" style="padding-right:14px;">
                            <img src="${LOGO_URL}" width="46" height="46" alt="Villa Olimpia" style="display:block;border:0;border-radius:12px;background:${BRAND.white};" />
                          </td>
                          <td valign="middle">
                            <div style="font-family:Helvetica,Arial,sans-serif;font-size:11px;line-height:14px;color:${BRAND.gold};font-weight:bold;letter-spacing:0.7px;text-transform:uppercase;">
                              ${esc(input.eyebrow)}
                            </div>
                            <div style="font-family:Helvetica,Arial,sans-serif;font-size:24px;line-height:28px;color:${BRAND.white};font-weight:bold;padding-top:4px;">
                              ${esc(input.title)}
                            </div>
                            <div style="font-family:Helvetica,Arial,sans-serif;font-size:12px;line-height:16px;color:#D8E1DC;padding-top:6px;">
                              Capo Piccolo · Isola di Capo Rizzuto · Calabria
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="height:4px;background:${BRAND.gold};font-size:0;line-height:0;">&nbsp;</td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:26px 24px 20px 24px;">
                <div style="font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:24px;color:${BRAND.text};">
                  ${nl2br(input.intro)}
                </div>

                ${renderSummary(input.summaryItems)}

                ${
                  input.bodyHtml
                    ? `<div style="font-family:Helvetica,Arial,sans-serif;font-size:14px;line-height:22px;color:${BRAND.text};padding-top:4px;">${input.bodyHtml}</div>`
                    : ""
                }

                ${renderDetails(input.detailRows)}
                ${cta}

                <div style="font-family:Helvetica,Arial,sans-serif;font-size:14px;line-height:22px;color:${BRAND.text};padding-top:10px;">
                  ${nl2br(input.closing || "Resto a disposizione con piacere per ogni ulteriore informazione sul soggiorno.")}
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding:18px 24px;background:${BRAND.light};border-top:1px solid ${BRAND.border};">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                  <tr>
                    <td valign="top" style="font-family:Helvetica,Arial,sans-serif;font-size:13px;line-height:20px;color:${BRAND.text};">
                      <div style="font-weight:bold;color:${BRAND.dark};">Francesco Nigro</div>
                      <div>Host professionista · Villa Olimpia</div>
                      <div style="color:${BRAND.muted};">Gestione diretta · risposta rapida · assistenza soggiorno</div>
                    </td>
                    <td align="right" valign="top" style="font-family:Helvetica,Arial,sans-serif;font-size:12px;line-height:19px;color:${BRAND.muted};">
                      <div><a href="${SITE_CONFIG.url}" style="color:${BRAND.dark};text-decoration:none;">${SITE_CONFIG.url.replace("https://", "")}</a></div>
                      <div><a href="mailto:${SITE_CONFIG.email}" style="color:${BRAND.dark};text-decoration:none;">${SITE_CONFIG.email}</a></div>
                      <div><a href="${SITE_CONFIG.social.whatsapp}" style="color:${BRAND.dark};text-decoration:none;">WhatsApp ${SITE_CONFIG.phone}</a></div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`
}

export function buildOwnerLeadNotificationHtml(input: {
  guestName: string
  guestEmail: string
  guestPhone: string
  checkIn: string
  checkOut: string
  guests: string
  apartment: string
  message?: string
  priority: string
  source?: string
  followUpBy?: string
  stayNights?: string
}): string {
  const bodyHtml = `
    <p style="margin:0 0 10px 0;">È arrivata una nuova richiesta dal sito di Villa Olimpia. Di seguito trovi un riepilogo già ordinato per lavorarla rapidamente.</p>
    <p style="margin:0;"><strong>Nota ospite:</strong><br />${input.message ? nl2br(input.message) : "Nessun messaggio aggiuntivo."}</p>
  `

  return buildVillaOlimpiaEmailHtml({
    eyebrow: "Nuovo lead diretto",
    title: input.guestName,
    intro: `Nuova richiesta ricevuta via sito ufficiale.\nPuoi rispondere direttamente a ${input.guestEmail} dal thread email.`,
    summaryItems: [
      { label: "Check-in", value: input.checkIn, icon: "📅" },
      { label: "Check-out", value: input.checkOut, icon: "🗓️" },
      { label: "Ospiti", value: input.guests, icon: "👥" },
      { label: "Priorità", value: input.priority, icon: "⭐" },
    ],
    bodyHtml,
    detailRows: [
      { label: "Nome", value: input.guestName },
      { label: "Email", value: input.guestEmail },
      { label: "Telefono", value: input.guestPhone },
      { label: "Appartamento", value: input.apartment || "Nessuna preferenza" },
      { label: "Fonte", value: input.source || "Diretta" },
      ...(input.stayNights ? [{ label: "Notti", value: input.stayNights }] : []),
      ...(input.followUpBy ? [{ label: "Prima risposta consigliata", value: input.followUpBy }] : []),
    ],
    ctaLabel: "Apri WhatsApp Villa Olimpia",
    ctaHref: SITE_CONFIG.social.whatsapp,
    closing: "Email pensata per lettura rapida in Gmail, con tutte le informazioni essenziali già in evidenza.",
  })
}

export function buildOwnerAvailabilityNotificationHtml(input: {
  name: string
  email: string
  phone: string
  checkIn: string
  checkOut: string
  guests: string
  apartment: string
  source: string
  referer?: string
}): string {
  return buildVillaOlimpiaEmailHtml({
    eyebrow: "Richiesta disponibilità",
    title: input.name,
    intro: `È arrivata una nuova richiesta disponibilità per Villa Olimpia.\nIl messaggio proviene dal sito ufficiale e puoi rispondere direttamente all'ospite da questa conversazione.`,
    summaryItems: [
      { label: "Check-in", value: input.checkIn, icon: "📅" },
      { label: "Check-out", value: input.checkOut, icon: "🗓️" },
      { label: "Ospiti", value: input.guests, icon: "👥" },
      { label: "Lodge", value: input.apartment || "Nessuna preferenza", icon: "🏡" },
    ],
    detailRows: [
      { label: "Nome", value: input.name },
      { label: "Email", value: input.email },
      { label: "Telefono", value: input.phone },
      { label: "Fonte", value: input.source || "sito ufficiale" },
      ...(input.referer ? [{ label: "Pagina di provenienza", value: input.referer }] : []),
    ],
    ctaLabel: "Vai al sito",
    ctaHref: SITE_CONFIG.url,
    closing: "Se preferisci, puoi proseguire subito la conversazione anche via WhatsApp mantenendo la stessa presa in carico professionale.",
  })
}
