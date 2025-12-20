export const locales = ['it', 'en', 'de', 'nl', 'es', 'fr'] as const
export type Locale = typeof locales[number]
export const defaultLocale: Locale = 'it'

export const localeNames: Record<Locale, string> = {
  it: 'Italiano',
  en: 'English',
  de: 'Deutsch',
  nl: 'Nederlands',
  es: 'Español',
  fr: 'Français',
}

export const localeFlags: Record<Locale, string> = {
  it: '🇮🇹',
  en: '🇬🇧',
  de: '🇩🇪',
  nl: '🇳🇱',
  es: '🇪🇸',
  fr: '🇫🇷',
}







