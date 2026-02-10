import type { Metadata } from "next"
import { generateMetadata } from "@/lib/metadata"

export const metadata: Metadata = generateMetadata({
  title: "Dove si trova Villa Olimpia - Capopiccolo, Spiaggia dei Gigli, Isola di Capo Rizzuto",
  description:
    "Villa Olimpia si trova a Capopiccolo, a meno di 100 metri dalla Spiaggia dei Gigli Bandiera Blu, nell’Area Marina Protetta Capo Rizzuto. Scopri come arrivare in auto, treno, nave o aereo e tutte le attrazioni vicine.",
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















