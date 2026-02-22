"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"
import { SITE_CONFIG } from "@/lib/constants"
import { CookiePreferencesTrigger } from "@/components/cookie-preferences-trigger"

export function Footer() {
  const { t } = useI18n()
  return (
    <footer className="bg-secondary/30 border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-playfair font-bold text-primary">
              {t.footer.brand.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t.footer.brand.description}
            </p>
            <div className="flex space-x-4">
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook Villa Olimpia"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram Villa Olimpia"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href="/appartamenti"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.nav.apartments}
                </Link>
              </li>
              <li>
                <Link
                  href="/location"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.nav.location}
                </Link>
              </li>
              <li>
                <Link
                  href="/servizi"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link
                  href="/contatti"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.nav.contacts}
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.nav.faq}
                </Link>
              </li>
            </ul>
          </div>

          {/* SEO Local Pages */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.discover}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/capo-rizzuto"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Appartamenti Capo Rizzuto
                </Link>
              </li>
              <li>
                <Link
                  href="/le-castella"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Vacanze Le Castella
                </Link>
              </li>
              <li>
                <Link
                  href="/spiagge-capo-rizzuto"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Spiagge Capo Rizzuto
                </Link>
              </li>
              <li>
                <Link
                  href="/area-marina-protetta"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Area Marina Protetta
                </Link>
              </li>
              <li>
                <Link
                  href="/cosa-fare-capo-rizzuto"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Cosa Fare a Capo Rizzuto
                </Link>
              </li>
              <li>
                <Link
                  href="/ciro-wine-tour"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Tour Enogastronomici Cirò
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.contact}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <a
                    href="tel:+393335773390"
                    className="hover:text-primary transition-colors block"
                  >
                    +39 333 577 3390
                  </a>
                  <a
                    href="tel:+393335773390"
                    className="hover:text-primary transition-colors block"
                  >
                    +39 333 577 3390
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:villaolimpiacaporizzuto@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  villaolimpiacaporizzuto@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Località Capopiccolo snc<br />88841 Isola di Capo Rizzuto (KR), Calabria</span>
              </li>
            </ul>
          </div>

          {/* Prenota Ora - AGGIUNTO */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.bookNow}</h4>
            <p className="text-sm text-muted-foreground mb-4">
              {t.footer.bookNowDescription}
            </p>
            <a
              href={`${SITE_CONFIG.social.whatsapp}?text=${encodeURIComponent("Vorrei informazioni su Villa Olimpia")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#25D366] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#20BA5A] transition-colors"
            >
              💬 {t.footer.whatsapp}
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground space-y-2">
          <p>
            &copy; {new Date().getFullYear()} {t.footer.brand.title} - {t.footer.copyright} | Capo Rizzuto, Calabria
          </p>
          <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <span aria-hidden>·</span>
            <Link href="/cookie-policy" className="hover:text-primary transition-colors">Cookie</Link>
            <span aria-hidden>·</span>
            <CookiePreferencesTrigger className="hover:text-primary transition-colors">
              Preferenze cookie
            </CookiePreferencesTrigger>
            <span aria-hidden>·</span>
            <Link href="/termini" className="hover:text-primary transition-colors">Termini e condizioni</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
