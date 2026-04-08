/**
 * URL-based language switching: canonical Italian paths ↔ localized pathnames.
 * EN uses /contact and /apartments; other locales use Italian slugs under /{locale}/...
 */

import {
  DEFAULT_LOCALE,
  isSupportedLocale,
  localeHasRoute,
  normalizeCanonicalPath,
  SUPPORTED_LOCALES,
  type SupportedLocale,
} from "@/lib/i18n-config"

/** EN-only localized segments (canonical Italian path → English segment) */
const EN_SEGMENT_BY_CANONICAL: Partial<Record<string, string>> = {
  "/contatti": "contact",
  "/appartamenti": "apartments",
}

/** Reverse: English segment → canonical path (first segment after locale) */
const CANONICAL_BY_EN_SEGMENT: Record<string, string> = {
  contact: "/contatti",
  apartments: "/appartamenti",
}

export function stripLocalePrefix(pathname: string): string {
  if (!pathname || pathname === "/") return "/"
  const segments = pathname.split("/").filter(Boolean)
  const maybe = segments[0]
  if (!isSupportedLocale(maybe) || maybe === DEFAULT_LOCALE) {
    return pathname.startsWith("/") ? pathname : `/${pathname}`
  }
  const rest = segments.slice(1)
  if (rest.length === 0) return "/"
  return `/${rest.join("/")}`
}

/**
 * Map pathname (may include /en/...) to canonical route key, e.g. /contact → /contatti
 */
export function pathnameToCanonicalPath(pathname: string): string {
  const raw = pathname.startsWith("/") ? pathname : `/${pathname}`
  const withoutLocale = stripLocalePrefix(raw)
  if (withoutLocale === "/" || withoutLocale === "") return "/"
  const parts = withoutLocale.split("/").filter(Boolean)
  const first = parts[0]
  const mapped = CANONICAL_BY_EN_SEGMENT[first]
  if (mapped) return mapped
  return `/${parts.join("/")}`
}

/** Path after locale prefix, using English segments where applicable for `en` */
function canonicalToLocalizedRest(locale: SupportedLocale, canonicalPath: string): string {
  const p = normalizeCanonicalPath(canonicalPath)
  if (p === "/") return ""
  if (locale === "en") {
    const enSeg = EN_SEGMENT_BY_CANONICAL[p]
    if (enSeg) return enSeg
    return p.replace(/^\//, "")
  }
  return p.replace(/^\//, "")
}

/**
 * Absolute path on this site for a canonical route and locale (no query string).
 */
export function getLocalizedPathForCanonical(canonicalPath: string, locale: SupportedLocale): string {
  const p = normalizeCanonicalPath(canonicalPath)
  if (locale === DEFAULT_LOCALE) {
    return p === "/" ? "/" : p
  }
  if (!localeHasRoute(locale, p)) {
    return p === "/" ? `/${locale}` : p
  }
  const rest = canonicalToLocalizedRest(locale, p)
  return rest ? `/${locale}/${rest}` : `/${locale}`
}

export function getLocaleFromPathname(pathname: string): SupportedLocale {
  if (!pathname || pathname === "/") return DEFAULT_LOCALE
  const seg = pathname.split("/").filter(Boolean)[0]
  return isSupportedLocale(seg) ? seg : DEFAULT_LOCALE
}

/**
 * Build target URL when switching language from current pathname. Preserves query string separately.
 */
export function buildUrlForLocale(pathname: string, targetLocale: SupportedLocale): string {
  const canonical = pathnameToCanonicalPath(pathname)
  if (!localeHasRoute(targetLocale, canonical)) {
    const fallbackPath = canonical === "/" ? "/" : canonical
    return fallbackPath
  }
  return getLocalizedPathForCanonical(canonical, targetLocale)
}

export function appendQuery(path: string, search: string): string {
  if (!search) return path
  const q = search.startsWith("?") ? search.slice(1) : search
  return q ? `${path}?${q}` : path
}

/** Legacy helpers used by home/contact clients — extend translated paths for EN slugs */
const TRANSLATED_CANONICAL_PATHS = new Set<string>([
  "/",
  "/contatti",
  "/appartamenti",
  "/prenota",
  "/capo-rizzuto",
  "/le-castella",
  "/settembre-capo-rizzuto",
])

export function hasTranslatedRoute(pathname: string): boolean {
  const c = pathnameToCanonicalPath(pathname)
  return TRANSLATED_CANONICAL_PATHS.has(c)
}

export function localizePath(pathname: string, locale: SupportedLocale): string {
  const canonical = pathnameToCanonicalPath(pathname)
  return getLocalizedPathForCanonical(canonical, locale)
}

export function localizeIfTranslated(pathname: string, locale: SupportedLocale): string {
  const canonical = pathnameToCanonicalPath(pathname)
  if (!TRANSLATED_CANONICAL_PATHS.has(canonical)) {
    return canonical === "/" ? "/" : canonical
  }
  return getLocalizedPathForCanonical(canonical, locale)
}

export function localizeOrFallbackToHome(pathname: string, locale: SupportedLocale): string {
  const canonical = pathnameToCanonicalPath(pathname)
  if (!localeHasRoute(locale, canonical)) {
    return getLocalizedPathForCanonical("/", locale)
  }
  return getLocalizedPathForCanonical(canonical, locale)
}

export const publicLocales = SUPPORTED_LOCALES
