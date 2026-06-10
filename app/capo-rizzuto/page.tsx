import { Metadata } from "next"
import { generateMetadata } from "@/lib/metadata"
import { CapoRizzutoPageView } from "@/components/pages/capo-rizzuto-page-view"

export const metadata: Metadata = generateMetadata({
  title: "Appartamenti a Capo Rizzuto con Piscina, a 100 m dal Mare | Villa Olimpia",
  description:
    "9 appartamenti con piscina a Capo Rizzuto, a 100 metri dalla Spiaggia dei Gigli Bandiera Blu. Prenotazione diretta senza commissioni, risposta in 24 ore. Scopri disponibilità e prezzi.",
  path: "/capo-rizzuto",
})

export default function CapoRizzutoPage() {
  return <CapoRizzutoPageView />
}
