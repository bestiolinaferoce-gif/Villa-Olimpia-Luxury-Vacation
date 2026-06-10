import type { Metadata } from "next"
import { generateMetadata } from "@/lib/metadata"

export const metadata: Metadata = generateMetadata({
  title: "Dove si trova Villa Olimpia e Come Arrivare alla Spiaggia dei Gigli",
  description:
    "Villa Olimpia è a Capopiccolo, a 100 metri dalla Spiaggia dei Gigli (Bandiera Blu), Capo Rizzuto. Come arrivare in auto o dagli aeroporti di Crotone e Lamezia, con distanze reali.",
  path: "/location",
  keywords: [
    "dove si trova Villa Olimpia",
    "spiaggia dei gigli appartamenti",
    "Capopiccolo Isola di Capo Rizzuto alloggi",
    "come arrivare a Villa Olimpia",
    "appartamenti vicino Area Marina Protetta Capo Rizzuto",
  ],
})

export default function LocationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}












