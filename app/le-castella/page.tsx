import { Metadata } from "next"
import { generateMetadata } from "@/lib/metadata"
import { LeCastellaPageView } from "@/components/pages/le-castella-page-view"

export const metadata: Metadata = generateMetadata({
  title: "Le Castella e Castello Aragonese | Villa Olimpia vicino Capopiccolo",
  description: "Scopri Le Castella e il Castello Aragonese durante il soggiorno a Villa Olimpia. Appartamenti con piscina a Capopiccolo, a pochi minuti da una delle mete più belle della Calabria.",
  path: "/le-castella",
})

export default function LeCastellaPage() {
  return <LeCastellaPageView />
}
