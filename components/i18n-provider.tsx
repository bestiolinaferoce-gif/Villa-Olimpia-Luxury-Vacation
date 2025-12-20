'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { Locale, defaultLocale, locales } from '@/lib/i18n/config'
import { getTranslations, Translation } from '@/lib/i18n'

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translation
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children, initialLocale }: { children: React.ReactNode, initialLocale?: Locale }) {
  // FIX HYDRATION: Inizia sempre con defaultLocale per SSR, poi aggiorna nel client
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Mark as mounted to avoid hydration mismatch
    setMounted(true)
    
    // Try to get locale from localStorage AFTER mount
    if (typeof window !== 'undefined') {
      try {
        const savedLocale = localStorage.getItem('preferred-language') as Locale
        if (savedLocale && locales.includes(savedLocale)) {
          setLocaleState(savedLocale)
        }
      } catch (error) {
        // Se localStorage non disponibile (privacy mode, restrizioni), usa default
        console.warn('localStorage not available, using default locale')
      }
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('preferred-language', newLocale)
      } catch (error) {
        // Se localStorage non disponibile, continua comunque
        console.warn('Could not save locale preference to localStorage')
      }
      // Update document language (sempre possibile)
      try {
        document.documentElement.lang = newLocale
      } catch (error) {
        // Ignora errori document
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


