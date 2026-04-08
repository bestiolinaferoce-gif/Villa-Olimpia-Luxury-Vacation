import { generateMetadata } from "@/lib/metadata"
import { SettembreCapoRizzutoPageView } from "@/components/pages/settembre-capo-rizzuto-page-view"

export const metadata = generateMetadata({
  title: "Settembre a Capo Rizzuto | Villa con piscina | Villa Olimpia",
  description:
    "Settembre a Capo Rizzuto: mare ancora caldo, meno folla e soggiorni rilassati a Villa Olimpia. Villa con piscina vicino all'Area Marina Protetta e alla Spiaggia dei Gigli. Prenotazione diretta.",
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
