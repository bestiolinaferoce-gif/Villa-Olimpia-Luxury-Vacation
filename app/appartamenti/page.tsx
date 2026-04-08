import { generateMetadata } from "@/lib/metadata"
import { AppartamentiIndexPageView } from "@/components/pages/appartamenti-index-page-view"

export const metadata = generateMetadata({
  title: "Appartamenti a Capo Rizzuto con Piscina | Villa Olimpia Capopiccolo",
  description:
    "Scopri gli appartamenti di Villa Olimpia a Capopiccolo, Capo Rizzuto: soluzioni per coppie, famiglie e piccoli gruppi con piscina, giardino e Spiaggia dei Gigli a pochi passi.",
  path: "/appartamenti",
  keywords: [
    "appartamenti Villa Olimpia",
    "appartamenti Capo Rizzuto piscina",
    "case vacanze Spiaggia dei Gigli",
    "appartamenti Capopiccolo Isola di Capo Rizzuto",
    "alloggi famiglia Calabria mare",
  ],
})

export default function AppartamentiPage() {
  return <AppartamentiIndexPageView mapLanguage="it" />
}
