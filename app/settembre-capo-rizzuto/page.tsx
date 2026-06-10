import { generateMetadata } from "@/lib/metadata"
import { SettembreCapoRizzutoPageView } from "@/components/pages/settembre-capo-rizzuto-page-view"

export const metadata = generateMetadata({
  title: "Settembre Capo Rizzuto | Villa Olimpia Mare Caldo e Piscina",
  description:
    "Settembre è il mese perfetto a Capo Rizzuto: mare ancora caldo, spiagge più libere e appartamenti con piscina esterna condivisa. Richiedi disponibilità diretta.",
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
