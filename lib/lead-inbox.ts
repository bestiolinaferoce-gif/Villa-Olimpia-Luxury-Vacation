/**
 * Destinatario operativo per lead dal sito (Resend).
 * L'inbox ufficiale è sempre inclusa; LEADS_TO_EMAIL può aggiungere una copia se diverso.
 */
export const PRIMARY_LEADS_INBOX = "villaolimpiacaporizzuto@gmail.com"

export function resolveOwnerEmailRecipients(envLeadsToEmail?: string | null): string | string[] {
  const raw = (envLeadsToEmail ?? "").trim()
  if (!raw) return PRIMARY_LEADS_INBOX
  if (raw.toLowerCase() === PRIMARY_LEADS_INBOX.toLowerCase()) return PRIMARY_LEADS_INBOX
  return [PRIMARY_LEADS_INBOX, raw]
}
