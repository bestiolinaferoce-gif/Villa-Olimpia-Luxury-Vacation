/**
 * Destinatario operativo per lead dal sito (Resend).
 *
 * NOTA: con il piano gratuito di Resend e il sender onboarding@resend.dev,
 * Resend permette di inviare SOLO all'email registrata sull'account Resend.
 * PRIMARY_LEADS_INBOX deve quindi corrispondere all'account Resend registrato.
 * Le email vengono poi inoltrate a villaolimpiacaporizzuto@gmail.com via Gmail forwarding.
 *
 * LEADS_TO_EMAIL può aggiungere un destinatario CC aggiuntivo.
 */
export const PRIMARY_LEADS_INBOX =
  (process.env.LEADS_PRIMARY_INBOX || "").trim() || "villaolimpiacaporizzuto@gmail.com"

export function resolveOwnerEmailRecipients(envLeadsToEmail?: string | null): string | string[] {
  const raw = (envLeadsToEmail ?? "").trim()
  if (!raw) return PRIMARY_LEADS_INBOX
  if (raw.toLowerCase() === PRIMARY_LEADS_INBOX.toLowerCase()) return PRIMARY_LEADS_INBOX
  return [PRIMARY_LEADS_INBOX, raw]
}
