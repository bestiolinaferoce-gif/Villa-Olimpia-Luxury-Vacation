/**
 * Content coverage per locale (hooks for future CMS / copy — no fake translations).
 */

import type { SupportedLocale } from "@/lib/i18n-config"
import {
  isCoreRoute,
  isPartialLocale,
  isPartialRouteForDeFr,
  normalizeCanonicalPath,
} from "@/lib/i18n-config"

export type ContentCoverage = "full" | "partial" | "italian_fallback"

export function getContentCoverage(
  locale: SupportedLocale,
  canonicalPath: string
): ContentCoverage {
  const p = normalizeCanonicalPath(canonicalPath)

  if (locale === "it") return "full"

  if (locale === "en") {
    if (isCoreRoute(p)) return "full"
    return "italian_fallback"
  }

  if (isPartialLocale(locale)) {
    if (isPartialRouteForDeFr(p)) return "partial"
    return "italian_fallback"
  }

  return "italian_fallback"
}

export function shouldRedirectToItalian(locale: SupportedLocale, canonicalPath: string): boolean {
  const p = normalizeCanonicalPath(canonicalPath)
  if (locale === "it") return false
  if (locale === "en" && isCoreRoute(p)) return false
  if (isPartialLocale(locale) && isPartialRouteForDeFr(p)) return false
  // Non-core localized URL requested → send to Italian equivalent
  if (locale === "en" && !isCoreRoute(p)) return true
  if (isPartialLocale(locale) && !isPartialRouteForDeFr(p)) return true
  return false
}
