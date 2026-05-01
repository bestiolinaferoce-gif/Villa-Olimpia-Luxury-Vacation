import { Metadata } from "next"
import { generateMetadata } from "@/lib/metadata"
import { LeCastellaPageView } from "@/components/pages/le-castella-page-view"

export const metadata: Metadata = generateMetadata({
  title: "Cosa Vedere a Le Castella: Castello Aragonese e Spiagge dell'AMP | Villa Olimpia",
  description:
    "Cosa vedere a Le Castella: il Castello Aragonese, le spiagge dell'Area Marina Protetta e dove passeggiare sul mare. Una guida utile durante il soggiorno a Villa Olimpia, a meno di 100 metri dalla Spiaggia dei Gigli e a 8 minuti di auto dal borgo.",
  path: "/le-castella",
  keywords: [
    "cosa vedere a le castella",
    "castello aragonese le castella",
    "le castella calabria",
    "le castella cosa fare",
    "spiagge le castella",
  ],
})

export default function LeCastellaPage() {
  return <LeCastellaPageView />
}
