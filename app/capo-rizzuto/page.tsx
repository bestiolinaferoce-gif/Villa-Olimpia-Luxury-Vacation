import { Metadata } from "next"
import { generateMetadata } from "@/lib/metadata"
import { CapoRizzutoPageView } from "@/components/pages/capo-rizzuto-page-view"

export const metadata: Metadata = generateMetadata({
  title: "Appartamenti Capo Rizzuto | Villa Olimpia | Affitto Vacanze Calabria",
  description: "Cerca appartamenti a Capo Rizzuto? Villa Olimpia offre 9 appartamenti vacanza con piscina, WiFi, parcheggio. Vicino Le Castella e spiagge.",
  path: "/capo-rizzuto",
})

export default function CapoRizzutoPage() {
  return <CapoRizzutoPageView />
}
