import { Locale } from './config'
import { it } from './translations/it'
import { en } from './translations/en'
import { de } from './translations/de'
import { nl } from './translations/nl'
import { es } from './translations/es'
import { fr } from './translations/fr'

export const translations = {
  it,
  en,
  de,
  nl,
  es,
  fr,
} as const

export type Translation = typeof it

export function getTranslations(locale: Locale): Translation {
  return translations[locale] || translations.it
}

export function t(locale: Locale) {
  return getTranslations(locale)
}







