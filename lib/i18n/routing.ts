import { isSupportedLocale, type SupportedLocale } from "@/lib/i18n-config"
import {
  buildUrlForLocale,
  getLocaleFromPathname,
  getLocalizedPathForCanonical,
  hasTranslatedRoute,
  localizeIfTranslated,
  localizeOrFallbackToHome,
  localizePath,
  pathnameToCanonicalPath,
  publicLocales,
  stripLocalePrefix,
} from "@/lib/i18n-routing"

export { publicLocales }

export function isLocale(value: string | null | undefined): value is SupportedLocale {
  return isSupportedLocale(value)
}

export {
  stripLocalePrefix,
  getLocaleFromPathname,
  localizePath,
  hasTranslatedRoute,
  localizeIfTranslated,
  localizeOrFallbackToHome,
  pathnameToCanonicalPath,
  buildUrlForLocale,
  getLocalizedPathForCanonical,
}
