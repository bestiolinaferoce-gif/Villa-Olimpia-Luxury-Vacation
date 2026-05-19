import type { Metadata } from "next"
import { BASE_URL } from "@/lib/metadata"

export const metadata: Metadata = {
  title: "Servizi e Comfort - Villa Olimpia",
  description: "Servizi Villa Olimpia a Capo Rizzuto: piscina condivisa, WiFi, parcheggio, aria condizionata, cucine attrezzate e supporto diretto.",
  alternates: { canonical: `${BASE_URL}/servizi` },
}

export default function ServiziLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}














