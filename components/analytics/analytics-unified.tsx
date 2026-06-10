/**
 * Sistema Analytics unificato - funziona sempre.
 * Script iniettati nel body, caricamento immediato, consenso analytics attivo di default.
 * ID di fallback così funzionano anche se le env non sono disponibili a build time.
 */

// GTM disabilitato: il tag GA4 al suo interno è in pausa e crea conflitto
// con il caricamento diretto di GA4 in google-analytics.tsx.
// Riabilitare solo se GTM viene riconfigurato con tag GA4 attivo.
export function AnalyticsUnified() {
  return null
}
