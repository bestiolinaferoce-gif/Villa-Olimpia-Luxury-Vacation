import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  type SupportedLocale,
} from "@/lib/i18n-config"

export const locales = SUPPORTED_LOCALES
export type Locale = SupportedLocale
export const defaultLocale = DEFAULT_LOCALE

export const localeNames: Record<Locale, string> = {
  it: "Italiano",
  en: "English",
  de: "Deutsch",
  fr: "Français",
}

export const localeFlags: Record<Locale, string> = {
  it: "🇮🇹",
  en: "🇬🇧",
  de: "🇩🇪",
  fr: "🇫🇷",
}
