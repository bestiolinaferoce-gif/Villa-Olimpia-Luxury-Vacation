"use client"

/**
 * Crawlable language links.
 *
 * Perche' esiste: il LanguageSelector nell'header e' costruito con <button> +
 * router.push() e il menu viene montato solo quando e' aperto. Googlebot non
 * clicca bottoni e non apre dropdown, quindi finora le versioni /de, /fr, /nl,
 * /no, /sv non ricevevano NESSUN link interno: erano pagine orfane, presenti
 * solo in sitemap. Questo blocco emette veri <a href> sempre presenti nel DOM,
 * cosi' il crawler raggiunge e collega le versioni linguistiche.
 *
 * Regola: si linkano solo le rotte che esistono davvero per quel locale
 * (localeHasRoute), per non creare URL fantasma o redirect in catena.
 */

import Link from "next/link"
import { usePathname } from "next/navigation"
import { localeNames, localeFlags } from "@/lib/i18n/config"
import { SUPPORTED_LOCALES, localeHasRoute, type SupportedLocale } from "@/lib/i18n-config"
import { getLocalizedPathForCanonical, pathnameToCanonicalPath } from "@/lib/i18n-routing"

/** /no non ha la home: la landing norvegese reale e' /no/norway */
const NORWAY_LANDING_PATH = "/no/norway"

export function buildLanguageLinks(pathname: string): Array<{
  locale: SupportedLocale
  href: string
  label: string
  flag: string
}> {
  const canonical = pathnameToCanonicalPath(pathname || "/")

  return SUPPORTED_LOCALES.flatMap((locale) => {
    const isNorwegianHome = locale === "no" && canonical === "/"

    if (!localeHasRoute(locale, canonical) && !isNorwegianHome) return []

    const href = isNorwegianHome
      ? NORWAY_LANDING_PATH
      : getLocalizedPathForCanonical(canonical, locale)

    return [
      {
        locale,
        href,
        label: localeNames[locale],
        flag: localeFlags[locale],
      },
    ]
  })
}

export function LanguageLinks({ className = "" }: { className?: string }) {
  const pathname = usePathname() || "/"
  const links = buildLanguageLinks(pathname)
  const currentLocale = links.find((l) => pathname === l.href)?.locale

  if (links.length < 2) return null

  return (
    <nav aria-label="Lingue disponibili" className={className}>
      <ul className="flex flex-wrap items-center gap-x-4 gap-y-2">
        {links.map((link) => {
          const isCurrent = link.locale === currentLocale
          return (
            <li key={link.locale}>
              <Link
                href={link.href}
                hrefLang={link.locale}
                lang={link.locale}
                prefetch={false}
                aria-current={isCurrent ? "page" : undefined}
                className={`inline-flex items-center gap-1.5 text-sm transition-colors ${
                  isCurrent
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                <span aria-hidden="true">{link.flag}</span>
                <span>{link.label}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
