import type { LucideIcon } from "lucide-react"
import { MapPin, Users, Utensils, CreditCard } from "lucide-react"

/** Lista articoli blog — usata da /blog, sitemap e schema SEO */
export type BlogListItem = {
  slug: string
  title: string
  description: string
  category: string
  icon: LucideIcon
}

export const BLOG_POSTS: BlogListItem[] = [
  {
    slug: "spiagge-piu-belle-capo-rizzuto",
    title: "Le 10 spiagge più belle vicino a Isola di Capo Rizzuto",
    description:
      "Scopri le 10 spiagge più belle dell'Isola di Capo Rizzuto e della Costa Ionica calabrese: sabbia dorata, acque cristalline e natura incontaminata nell'Area Marina Protetta.",
    category: "Territorio",
    icon: MapPin,
  },
  {
    slug: "vacanze-famiglia-capo-rizzuto-bambini",
    title: "Vacanze in famiglia a Capo Rizzuto: perché è il posto perfetto con i bambini",
    description:
      "Stai pianificando una vacanza in famiglia in Calabria? Scopri perché Capo Rizzuto è la destinazione ideale per famiglie con bambini: mare sicuro, natura protetta e tutto a portata di mano.",
    category: "Famiglie",
    icon: Users,
  },
  {
    slug: "castello-aragonese-le-castella-guida",
    title: "Castello Aragonese di Le Castella: guida completa per la visita",
    description:
      "Tutto quello che devi sapere per visitare il Castello Aragonese di Le Castella: storia, orari, prezzi e consigli pratici. A 5 minuti da Villa Olimpia.",
    category: "Territorio",
    icon: MapPin,
  },
  {
    slug: "prenotazione-diretta-villa-olimpia-vantaggi",
    title:
      "Prenotazione diretta vs Airbnb e Booking: perché conviene prenotare direttamente a Villa Olimpia",
    description:
      "Scopri tutti i vantaggi di prenotare direttamente invece di usare Airbnb o Booking.com. Prezzo migliore garantito e servizio personalizzato.",
    category: "Info & Consigli",
    icon: CreditCard,
  },
  {
    slug: "cucina-calabrese-capo-rizzuto-ristoranti",
    title: "Cucina calabrese a Capo Rizzuto: ristoranti, piatti tipici e i nostri posti del cuore",
    description:
      "Guida alla gastronomia calabrese di Capo Rizzuto: i migliori ristoranti di pesce, i piatti tipici da assaggiare e i consigli dello staff di Villa Olimpia.",
    category: "Gastronomia",
    icon: Utensils,
  },
]

/** Data ultimo aggiornamento contenuti blog (sitemap) */
export const BLOG_LAST_MOD = new Date("2026-03-16")
