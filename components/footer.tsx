import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-playfair font-bold text-primary">
              Villa Olimpia
            </h3>
            <p className="text-sm text-muted-foreground">
              Il tuo rifugio di lusso in Calabria. 9 appartamenti eleganti con piscina privata, 
              a soli 100m dalla splendida Spiaggia dei Gigli.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Link Rapidi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/appartamenti"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Gli Appartamenti
                </Link>
              </li>
              <li>
                <Link
                  href="/location"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  La Location
                </Link>
              </li>
              <li>
                <Link
                  href="/servizi"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Servizi e Comfort
                </Link>
              </li>
              <li>
                <Link
                  href="/contatti"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contatti
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contatti</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <a
                    href="tel:+393290479193"
                    className="hover:text-primary transition-colors block"
                  >
                    +39 329 047 9193
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
            <h4 className="font-semibold mb-4">Prenota Ora</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Contattaci via WhatsApp per disponibilità e preventivi personalizzati
            </p>
            <a
              href="https://wa.me/393335773390?text=Vorrei%20informazioni%20su%20Villa%20Olimpia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#25D366] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#20BA5A] transition-colors"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Villa Olimpia - Tutti i diritti riservati | Capo Rizzuto, Calabria
          </p>
        </div>
      </div>
    </footer>
  )
}

