import { Metadata } from "next"
import { generateMetadata } from "@/lib/metadata"
import { CapoRizzutoPageView } from "@/components/pages/capo-rizzuto-page-view"

export const metadata: Metadata = generateMetadata({
  title: "Appartamenti Capo Rizzuto | Villa Olimpia | Affitto Vacanze Calabria",
  description:
    "Cerca appartamenti a Capo Rizzuto? Villa Olimpia offre 9 appartamenti vacanza con piscina condivisa, WiFi e parcheggio, a meno di 100 metri dalla Spiaggia dei Gigli e vicino Le Castella.",
  path: "/capo-rizzuto",
})

export default function CapoRizzutoPage() {
  return <CapoRizzutoPageView />
}
