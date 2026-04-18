import type { Locale } from "./config"
import { it } from "./translations/it"
import { en } from "./translations/en"
import { de } from "./translations/de"
import { fr } from "./translations/fr"
import { nl } from "./translations/nl"
import { no } from "./translations/no"

export const translations = {
  it,
  en,
  de,
  fr,
  nl,
  no,
} as const

export type Translation = typeof it

export function getTranslations(locale: Locale): Translation {
  return translations[locale] ?? translations.it
}

export function t(locale: Locale) {
  return getTranslations(locale)
}
