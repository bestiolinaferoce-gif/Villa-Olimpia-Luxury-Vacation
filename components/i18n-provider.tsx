'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Locale, defaultLocale } from '@/lib/i18n/config'
import { getTranslations, Translation } from '@/lib/i18n'
import { getLocaleFromPathname } from '@/lib/i18n-routing'

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translation
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({
  children,
  initialLocale,
}: {
  children: React.ReactNode
  initialLocale?: Locale
}) {
  const pathname = usePathname() || '/'
  const fromUrl = getLocaleFromPathname(pathname)
  const [locale, setLocaleState] = useState<Locale>(initialLocale ?? fromUrl ?? defaultLocale)

  useEffect(() => {
    setLocaleState(getLocaleFromPathname(pathname))
  }, [pathname])

  // Keep document.documentElement.lang in sync with the derived locale so that
  // the HTML attribute is correct after hydration even though the root layout
  // emits lang="it" in the static SSR shell.
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale
    }
  }, [locale])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    if (typeof document !== 'undefined') {
      try {
        document.documentElement.lang = newLocale
      } catch {
        /* ignore */
      }
    }
  }

  const t = getTranslations(locale)

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}
