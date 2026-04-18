import createMiddleware from 'next-intl/middleware'
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from './lib/i18n-config'

/**
 * next-intl middleware — sets x-next-intl-locale header so that:
 * - app/layout.tsx can read the correct locale for <html lang="">
 * - getRequestConfig receives the correct requestLocale
 *
 * localePrefix: 'as-needed' → Italian (default) served at root, others with prefix
 * localeDetection: false    → no auto-redirect based on Accept-Language header
 * alternateLinks: false     → hreflang managed by our own metadata utilities
 */
export default createMiddleware({
  locales: SUPPORTED_LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localePrefix: 'as-needed',
  localeDetection: false,
  alternateLinks: false,
})

export const config = {
  // Match all routes except static assets and API routes
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
