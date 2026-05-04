/**
 * Selective multilingual SEO — single source of truth for supported locales and route scope.
 * Italian routes at root remain primary; localized URLs use /en, /de, /fr prefixes.
 */

export const SUPPORTED_LOCALES = ["it", "en", "de", "fr", "nl", "no", "sv"] as const
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number]

export const DEFAULT_LOCALE: SupportedLocale = "it"

/** Core routes with full EN experience; DE/FR/NL only where PARTIAL_ROUTES allows */
export const CORE_TRANSLATED_ROUTES = [
  "/",
  "/contatti",
  "/appartamenti",
  "/prenota",
  "/capo-rizzuto",
  "/le-castella",
  "/settembre-capo-rizzuto",
] as const

export type CoreTranslatedRoute = (typeof CORE_TRANSLATED_ROUTES)[number]

/** Locales with homepage + contact + a few SEO landings only */
export const PARTIAL_LOCALES = ["de", "fr", "nl", "no", "sv"] as const
export type PartialLocale = (typeof PARTIAL_LOCALES)[number]

export const PARTIAL_ROUTES_FOR_DE_FR = [
  "/",
  "/contatti",
  // NOTE: /capo-rizzuto and /settembre-capo-rizzuto removed —
  // [locale] pages redirect to IT for DE/FR/NL/NO/SV → excluded from hreflang/sitemap
] as const

export type PartialRouteForDeFr = (typeof PARTIAL_ROUTES_FOR_DE_FR)[number]

export function isSupportedLocale(value: string | null | undefined): value is SupportedLocale {
  return Boolean(value && (SUPPORTED_LOCALES as readonly string[]).includes(value))
}

export function isPartialLocale(value: string | null | undefined): value is PartialLocale {
  return Boolean(value && (PARTIAL_LOCALES as readonly string[]).includes(value))
}

export function isCoreRoute(path: string): path is CoreTranslatedRoute {
  const p = normalizeCanonicalPath(path)
  return (CORE_TRANSLATED_ROUTES as readonly string[]).includes(p)
}

export function isPartialRouteForDeFr(path: string): path is PartialRouteForDeFr {
  const p = normalizeCanonicalPath(path)
  return (PARTIAL_ROUTES_FOR_DE_FR as readonly string[]).includes(p)
}

/** Normalize to canonical Italian path key (no locale prefix, no trailing slash except "/") */
export function normalizeCanonicalPath(path: string): string {
  let p = path.trim() || "/"
  if (!p.startsWith("/")) p = `/${p}`
  p = p.replace(/\/+$/, "") || "/"
  return p
}

export function localeHasRoute(locale: SupportedLocale, canonicalPath: string): boolean {
  const p = normalizeCanonicalPath(canonicalPath)
  if (!isCoreRoute(p)) return false
  if (locale === "it") return true

  // [locale]/le-castella redirects to IT for ALL non-IT locales → exclude from hreflang/sitemap
  if (p === "/le-castella") return false

  // [locale]/settembre-capo-rizzuto redirects to IT for ALL non-IT locales → exclude
  if (p === "/settembre-capo-rizzuto") return false

  if (locale === "en") return true

  // Norwegian has a dedicated /no/norway landing page; /no (root) 301-redirects there.
  // Exclude /no from the homepage to avoid a redirecting URL in sitemap/hreflang.
  if (locale === "no" && p === "/") return false

  // [locale]/capo-rizzuto: only EN has real content; DE/FR/NL/NO/SV redirect to IT → exclude
  if (p === "/capo-rizzuto" && isPartialLocale(locale)) return false

  if (isPartialLocale(locale)) return isPartialRouteForDeFr(p)
  return false
}
