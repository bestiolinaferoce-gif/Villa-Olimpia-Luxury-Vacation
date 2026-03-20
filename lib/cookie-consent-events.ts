/**
 * Evento cross-component per aggiornare script di marketing (es. Meta Pixel)
 * dopo salvataggio preferenze cookie nello stesso tab.
 */
export const COOKIE_CONSENT_UPDATED_EVENT = "cookie-consent-updated"

export function dispatchCookieConsentUpdated(): void {
  if (typeof window === "undefined") return
  window.dispatchEvent(new Event(COOKIE_CONSENT_UPDATED_EVENT))
}
