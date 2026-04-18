import { getRequestConfig } from "next-intl/server"
import { notFound } from "next/navigation"
import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  type SupportedLocale,
} from "@/lib/i18n-config"

export const locales = SUPPORTED_LOCALES
export type Locale = SupportedLocale
export const defaultLocale = DEFAULT_LOCALE

export default getRequestConfig(async ({ requestLocale }) => {
  // v4 API: requestLocale is a Promise<string | undefined>
  // It comes from the [locale] URL segment set by next-intl middleware
  const locale = await requestLocale

  if (locale && !locales.includes(locale as Locale)) {
    notFound()
  }

  const resolved = (locale && locales.includes(locale as Locale) ? locale : defaultLocale) as Locale

  return {
    locale: resolved,
    messages: (await import(`../messages/${resolved}.json`)).default,
  }
})
