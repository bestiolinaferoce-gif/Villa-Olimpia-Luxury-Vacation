"use client"

import { useState, useRef, useEffect } from "react"
import { Globe, Check } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname, useRouter } from "next/navigation"

const languages = [
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "nl", name: "Nederlands", flag: "🇳🇱" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
]

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState("it")
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    // Rileva lingua corrente dal pathname
    const langFromPath = pathname.split('/')[1]
    if (languages.some(l => l.code === langFromPath)) {
      setCurrentLang(langFromPath)
    }
  }, [pathname])

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

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode)
    setIsOpen(false)
    
    // Salva preferenza
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-language', langCode)
      
      // Mostra notifica che la traduzione è in arrivo
      const langName = languages.find(l => l.code === langCode)?.name || langCode
      
      // Crea toast notification semplice
      const toast = document.createElement('div')
      toast.className = 'fixed bottom-4 right-4 z-[200] bg-primary text-white px-6 py-4 rounded-lg shadow-2xl border-2 border-white/30 backdrop-blur-sm'
      toast.innerHTML = `
        <div class="flex items-center gap-3">
          <span class="text-2xl">🌐</span>
          <div>
            <p class="font-semibold">Lingua: ${langName}</p>
            <p class="text-sm text-white/90">Traduzione completa in arrivo</p>
          </div>
        </div>
      `
      document.body.appendChild(toast)
      
      // Rimuovi dopo 3 secondi
      setTimeout(() => {
        toast.style.opacity = '0'
        toast.style.transform = 'translateY(20px)'
        toast.style.transition = 'all 0.3s ease'
        setTimeout(() => toast.remove(), 300)
      }, 3000)
    }
    
    // TODO: Quando routing multilingua sarà pronto, decommentare:
    // router.push(`/${langCode}${pathname}`)
  }

  const currentLanguage = languages.find(l => l.code === currentLang) || languages[0]

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
                    currentLang === lang.code
                      ? "bg-primary/10 text-primary font-semibold"
                      : "hover:bg-primary/5 text-gray-700"
                  }`}
                >
                  <span className="text-xl">{lang.flag}</span>
                  <span className="flex-1 text-sm">{lang.name}</span>
                  {currentLang === lang.code && (
                    <Check className="w-4 h-4 text-primary" />
                  )}
                </button>
              ))}
            </div>
            <div className="px-4 py-2 bg-primary/5 border-t border-primary/10">
              <p className="text-xs text-muted-foreground text-center">
                Multilingua in arrivo
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

