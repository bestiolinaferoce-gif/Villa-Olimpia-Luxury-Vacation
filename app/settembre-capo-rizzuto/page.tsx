import { generateMetadata } from "@/lib/metadata"
import { SettembreCapoRizzutoPageView } from "@/components/pages/settembre-capo-rizzuto-page-view"

export const metadata = generateMetadata({
  title: "Settembre Capo Rizzuto | Mare 26°C Villa Olimpia con Piscina",
  description:
    "Settembre è il mese perfetto a Capo Rizzuto: acqua calda, spiagge libere e prezzi più bassi. Appartamenti con piscina disponibili. Prenota online.",
  path: "/settembre-capo-rizzuto",
  keywords: [
    "settembre capo rizzuto",
    "vacanza settembre calabria",
    "september calabria beach holiday",
    "villa con piscina settembre calabria",
    "villa olimpia settembre",
    "mare settembre calabria",
  ],
})

export default function SettembreCapoRizzutoPage() {
  return <SettembreCapoRizzutoPageView />
}
