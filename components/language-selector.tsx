"use client"

import { useState, useRef, useEffect, useMemo } from "react"
import { Globe, Check } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useI18n } from "@/components/i18n-provider"
import { locales, localeNames, localeFlags, type Locale } from "@/lib/i18n/config"

const languages = locales.map(code => ({
  code,
  name: localeNames[code],
  flag: localeFlags[code],
}))

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const { locale, setLocale } = useI18n()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Update document language when locale changes
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale
    }
  }, [locale])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  const handleLanguageChange = (langCode: Locale) => {
    setLocale(langCode)
    setIsOpen(false)
    
    // Show success notification
    if (typeof window !== 'undefined') {
      const langName = localeNames[langCode]
      
      // Create toast notification
      const toast = document.createElement('div')
      toast.className = 'fixed bottom-4 right-4 z-[200] bg-primary text-white px-6 py-4 rounded-lg shadow-2xl border-2 border-white/30 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4'
      toast.innerHTML = `
        <div class="flex items-center gap-3">
          <span class="text-2xl">🌐</span>
          <div>
            <p class="font-semibold">Lingua: ${langName}</p>
            <p class="text-sm text-white/90">Traduzione applicata</p>
          </div>
        </div>
      `
      document.body.appendChild(toast)
      
      // Remove after 3 seconds
      setTimeout(() => {
        toast.style.opacity = '0'
        toast.style.transform = 'translateY(20px)'
        toast.style.transition = 'all 0.3s ease'
        setTimeout(() => toast.remove(), 300)
      }, 3000)
    }
  }

  const currentLanguage = useMemo(() => 
    languages.find(l => l.code === locale) || languages[0],
    [locale]
  )

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all text-white text-sm font-medium"
        aria-label="Seleziona lingua"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{currentLanguage.flag}</span>
        <span className="hidden md:inline text-xs">{currentLanguage.code.toUpperCase()}</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border-2 border-primary/20 overflow-hidden z-50"
          >
            <div className="p-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left ${
                    locale === lang.code
                      ? "bg-primary/10 text-primary font-semibold"
                      : "hover:bg-primary/5 text-gray-700"
                  }`}
                >
                  <span className="text-xl">{lang.flag}</span>
                  <span className="flex-1 text-sm">{lang.name}</span>
                  {locale === lang.code && (
                    <Check className="w-4 h-4 text-primary" />
                  )}
                </button>
              ))}
            </div>
            <div className="px-4 py-2 bg-primary/5 border-t border-primary/10">
              <p className="text-xs text-muted-foreground text-center">
                ✓ Traduzione attiva
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

