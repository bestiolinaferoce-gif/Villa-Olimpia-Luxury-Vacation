// Allineato a i18n/request.ts e messages/*.json (solo locale con file presenti)
export const locales = ['it', 'en', 'de', 'fr', 'nl'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'it'

export const localeNames: Record<Locale, string> = {
  it: 'Italiano',
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  nl: 'Nederlands',
}

export const localeFlags: Record<Locale, string> = {
  it: '🇮🇹',
  en: '🇬🇧',
  de: '🇩🇪',
  fr: '🇫🇷',
  nl: '🇳🇱',
}







