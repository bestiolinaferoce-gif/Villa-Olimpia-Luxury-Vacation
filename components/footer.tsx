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
              Luxury vacation rentals in the heart of Calabria. Experience the
              Mediterranean lifestyle in our stunning apartments with sea views.
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
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contatti</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+393491234567"
                  className="hover:text-primary transition-colors"
                >
                  +39 349 123 4567
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@villaolimpia.com"
                  className="hover:text-primary transition-colors"
                >
                  info@villaolimpia.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Tropea, Calabria, Italia</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Informazioni</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/termini"
                  className="hover:text-primary transition-colors"
                >
                  Termini e Condizioni
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie"
                  className="hover:text-primary transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Villa Olimpia. Tutti i diritti
            riservati.
          </p>
        </div>
      </div>
    </footer>
  )
}

