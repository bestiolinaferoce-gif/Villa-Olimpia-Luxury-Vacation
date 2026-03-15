import type { Metadata } from "next"
import { BASE_URL } from "@/lib/metadata"

export const metadata: Metadata = {
  title: "Servizi e Comfort - Villa Olimpia",
  description: "Scopri tutti i servizi inclusi e opzionali di Villa Olimpia. WiFi gratuito, parcheggio, piscina privata, aria condizionata, cucina attrezzata e molto altro. Prenota ora per un soggiorno indimenticabile a Capo Rizzuto.",
  alternates: { canonical: `${BASE_URL}/servizi` },
}

export default function ServiziLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}















