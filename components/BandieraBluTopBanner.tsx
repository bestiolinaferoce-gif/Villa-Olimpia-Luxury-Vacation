"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

const STORAGE_KEY = "villaolimpia.fine-estate-2026.dismissed"

const COPY = {
  it: {
    label: "Settembre 2026: verifica le date disponibili",
    sub: "Verifica ora · preventivo diretto",
    dismiss: "Chiudi",
    landing: "/contatti?source=top_banner_fine_estate#prenota",
  },
  en: {
    label: "Last dates: late August and September 2026",
    sub: "Check now · direct quote",
    dismiss: "Close",
    landing: "/en/contact?source=top_banner_late_summer#prenota",
  },
  de: {
    label: "Letzte Termine: Ende August und September 2026",
    sub: "Jetzt anfragen · direktes Angebot",
    dismiss: "Schließen",
    landing: "/de/contatti?source=top_banner_spaetsommer#prenota",
  },
  fr: {
    label: "Dernières dates : fin août et septembre 2026",
    sub: "Vérifiez maintenant · devis direct",
    dismiss: "Fermer",
    landing: "/fr/contatti?source=top_banner_fin_ete#prenota",
  },
  nl: {
    label: "Laatste data: eind augustus en september 2026",
    sub: "Controleer nu · directe offerte",
    dismiss: "Sluiten",
    landing: "/nl/contatti?source=top_banner_nazomer#prenota",
  },
  no: {
    label: "Siste datoer: slutten av august og september 2026",
    sub: "Sjekk nå · direkte tilbud",
    dismiss: "Lukk",
    landing: "/no/contatti?source=top_banner_sensommer#prenota",
  },
  sv: {
    label: "Sista datum: slutet av augusti och september 2026",
    sub: "Kontrollera nu · direkt offert",
    dismiss: "Stäng",
    landing: "/sv/contatti?source=top_banner_sensommar#prenota",
  },
} as const

type Locale = keyof typeof COPY

function detectLocale(pathname: string): Locale {
  const seg = pathname.split("/")[1] ?? ""
  if (seg === "en" || seg === "de" || seg === "fr" || seg === "nl" || seg === "no" || seg === "sv") {
    return seg
  }
  return "it"
}

export function BandieraBluTopBanner() {
  const [hidden, setHidden] = useState(true)
  const pathname = usePathname() || "/"
  const locale = detectLocale(pathname)
  const t = COPY[locale]

  useEffect(() => {
    try {
      const dismissed = window.localStorage.getItem(STORAGE_KEY)
      if (!dismissed) setHidden(false)
    } catch {
      setHidden(false)
    }
  }, [])

  function dismiss() {
    setHidden(true)
    try {
      window.localStorage.setItem(STORAGE_KEY, new Date().toISOString())
    } catch {
      // ignore
    }
  }

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    const isHome = pathname === "/" || pathname === "/" + locale || pathname === "/" + locale + "/"
    if (isHome) {
      const target = document.getElementById("bandiera-blu-2026-title")
      if (target) {
        e.preventDefault()
        target.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }

  if (hidden) return null

  return (
    <div
      role="region"
      aria-label="Offerta fine estate 2026"
      className="relative w-full"
      style={{
        background: "linear-gradient(90deg, #062a44 0%, #0a3d62 50%, #0e5a8a 100%)",
      }}
    >
      <div className="relative mx-auto flex max-w-7xl items-center gap-3 px-4 py-2 sm:px-6 lg:px-8">
        <svg
          aria-hidden="true"
          width="22"
          height="22"
          viewBox="0 0 160 160"
          className="shrink-0"
        >
          <defs>
            <linearGradient id="bbTbGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f0c75a" />
              <stop offset="100%" stopColor="#a87f2a" />
            </linearGradient>
          </defs>
          <circle cx="80" cy="80" r="76" fill="#0a4570" />
          <circle cx="80" cy="80" r="68" fill="none" stroke="url(#bbTbGold)" strokeWidth="6" />
          <text
            x="80"
            y="100"
            fontFamily="Georgia, serif"
            fontSize="56"
            fontWeight="800"
            fill="#ffffff"
            textAnchor="middle"
          >
            ★
          </text>
        </svg>

        <a
          href={t.landing}
          onClick={handleClick}
          className="flex flex-1 flex-col items-start gap-0 text-left text-white sm:flex-row sm:items-center sm:gap-3"
        >
          <span className="text-sm font-semibold leading-tight">
            <span style={{ color: "#f4d27a" }}>★</span> {t.label}
          </span>
          <span className="hidden text-xs text-white/75 sm:inline">·</span>
          <span className="text-xs leading-tight text-white/85">{t.sub}</span>
        </a>

        <button
          type="button"
          onClick={dismiss}
          aria-label={t.dismiss}
          className="ml-2 shrink-0 rounded-full p-1 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default BandieraBluTopBanner
