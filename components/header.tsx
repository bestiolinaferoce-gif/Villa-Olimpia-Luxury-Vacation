"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { LanguageSelector } from "@/components/language-selector"
import { useI18n } from "@/components/i18n-provider"
import { getLocalizedPathForCanonical } from "@/lib/i18n-routing"
import type { SupportedLocale } from "@/lib/i18n-config"

const navLinkClass = (scrolled: boolean) =>
  scrolled
    ? "text-sm font-medium text-slate-700 hover:text-primary px-3 py-2 rounded-md transition-colors hover:bg-slate-100"
    : "text-sm font-medium text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)] hover:bg-white/15 px-3 py-2 rounded-md transition-colors"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const { t, locale } = useI18n()
  const currentLocale = (locale ?? "it") as SupportedLocale

  useEffect(() => {
    if (typeof window === "undefined") return
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Ogni href usa il percorso canonico italiano → getLocalizedPathForCanonical
  // lo traduce nel path corretto per la lingua attiva (/en/apartments, /de/contatti, ecc.)
  // Per route non tradotte (location, servizi, recensioni, faq) il path resta invariato.
  const loc = getLocalizedPathForCanonical
  const navItems = [
    { href: loc("/", currentLocale), label: t.nav.home },
    { href: loc("/appartamenti", currentLocale), label: t.nav.apartments },
    { href: loc("/location", currentLocale), label: t.nav.location },
    { href: loc("/servizi", currentLocale), label: t.nav.services },
    { href: loc("/recensioni", currentLocale), label: t.nav.reviews },
    { href: loc("/faq", currentLocale), label: t.nav.faq },
    { href: `${loc("/contatti", currentLocale)}?source=header_menu`, label: t.nav.contacts },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-slate-200/90 bg-white/95 shadow-sm backdrop-blur-md"
          : "border-b border-white/25 bg-black/20 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex h-[4.5rem] items-center justify-between gap-4">
          <Link href={loc("/", currentLocale)} className="shrink-0">
            <motion.span
              whileHover={{ scale: 1.02 }}
              className={`font-playfair text-xl font-bold tracking-tight sm:text-2xl ${
                isScrolled ? "text-primary" : "text-white drop-shadow-md"
              }`}
            >
              Villa Olimpia
            </motion.span>
          </Link>

          <nav
            className="hidden items-center gap-0.5 lg:flex xl:gap-1"
            aria-label="Principale"
          >
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={navLinkClass(isScrolled)}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <LanguageSelector />
            <Button size="sm" className="font-semibold shadow-sm" asChild>
              <Link href={`${loc("/contatti", currentLocale)}?source=header_cta#prenota`}>{t.common.bookNow}</Link>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className={`lg:hidden ${isScrolled ? "text-slate-800" : "text-white drop-shadow-md"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Apri menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-slate-200 bg-white lg:hidden"
          >
            <nav className="container mx-auto max-w-7xl px-4 py-2" aria-label="Mobile">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block border-b border-slate-100 py-3.5 text-base font-medium text-slate-800 last:border-b-0 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 border-t border-slate-100 py-4">
                <LanguageSelector />
                <Button className="w-full font-semibold" asChild>
                  <Link href={`${loc("/contatti", currentLocale)}?source=header_mobile_cta#prenota`} onClick={() => setIsMenuOpen(false)}>
                    {t.common.bookNow}
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
