/**
 * Config analytics lato client (NEXT_PUBLIC_* risolti a build time).
 * Unica fonte per GTM ID effettivo usato da AnalyticsUnified / GTM legacy.
 */

const GTM_FALLBACK = "GTM-K5NQGHBD"

function trimEnv(value: string | undefined): string {
  return (value ?? "").trim()
}

/** Container GTM effettivo (env o fallback allineato al deploy storico). */
export const RESOLVED_GTM_ID: string =
  trimEnv(process.env.NEXT_PUBLIC_GTM_ID) !== "" ? trimEnv(process.env.NEXT_PUBLIC_GTM_ID) : GTM_FALLBACK

/** GA4 Measurement ID se presente e non segnaposto; altrimenti null. */
export function getResolvedGaMeasurementId(): string | null {
  const id = trimEnv(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID)
  if (!id || id === "G-XXXXXXXXXX") return null
  return id
}

/** True se nel bundle c'è un ID pixel sintatticamente valido (non implica consenso marketing). */
export function isMetaPixelIdConfigured(): boolean {
  const id = trimEnv(process.env.NEXT_PUBLIC_META_PIXEL_ID)
  return /^\d{10,20}$/.test(id)
}
