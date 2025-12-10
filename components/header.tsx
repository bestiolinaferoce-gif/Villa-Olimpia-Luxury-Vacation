"use client"

/**
 * Header Component con navigazione stilizzata
 * 
 * MODIFICHE NAVIGAZIONE (reversibili):
 * - Bottoni con cornice bianca quando header è trasparente (sopra hero)
 * - Bottoni con sfondo bianco quando header è scrollato
 * - Per revert: sostituire le classi dei Link nella navigazione desktop con:
 *   className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors relative group"
 */

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { LanguageSelector } from "@/components/language-selector"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/appartamenti", label: "Gli Appartamenti" },
    { href: "/location", label: "La Location" },
    { href: "/servizi", label: "Servizi" },
    { href: "/recensioni", label: "Recensioni" },
    { href: "/faq", label: "FAQ" },
    { href: "/contatti", label: "Contatti" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-white/20 backdrop-blur-md shadow-xl border-b border-white/30"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`text-2xl font-playfair font-bold transition-colors ${
                isScrolled ? "text-blue-600" : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              }`}
            >
              Villa Olimpia
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300
                  relative group
                  ${isScrolled 
                    ? "text-gray-800 bg-white border-2 border-gray-300 hover:border-primary hover:text-primary hover:bg-white shadow-md" 
                    : "text-white bg-white/40 backdrop-blur-md border-2 border-white hover:border-white hover:bg-white/50 shadow-xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
                  }
                `}
              >
                <span className={`relative z-10 ${
                  isScrolled ? "" : "drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                }`}>{item.label}</span>
                {/* Effetto hover sottile */}
                <span className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                  isScrolled 
                    ? "bg-primary/10 opacity-0 group-hover:opacity-100" 
                    : "bg-white/20 opacity-0 group-hover:opacity-100"
                }`} />
              </Link>
            ))}
          </nav>

          {/* CTA Buttons e Language Selector */}
          <div className="hidden lg:flex items-center space-x-3">
            <LanguageSelector />
            <Button 
              size="sm" 
              className={`
                font-semibold transition-all duration-300 shadow-xl
                ${isScrolled 
                  ? "bg-[#FFC107] text-gray-900 hover:bg-[#FFD54F] border-2 border-[#FFC107] shadow-lg" 
                  : "bg-[#FFC107] text-gray-900 hover:bg-[#FFD54F] border-2 border-white shadow-2xl backdrop-blur-sm"
                }
              `}
              asChild
            >
              <Link href="/contatti">Prenota Ora</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`lg:hidden ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "" : "drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "" : "drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"}`} />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t bg-background/95 backdrop-blur-md"
          >
            <nav className="container mx-auto px-4 py-6 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-base font-semibold px-4 py-3 rounded-lg bg-white/90 border-2 border-gray-200 text-gray-800 hover:border-blue-600 hover:text-blue-600 hover:bg-white transition-all duration-300 shadow-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 space-y-3 border-t">
                <div className="px-4">
                  <LanguageSelector />
                </div>
                <Button variant="luxury" className="w-full" asChild>
                  <Link href="/contatti" onClick={() => setIsMenuOpen(false)}>
                    Prenota Ora
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

