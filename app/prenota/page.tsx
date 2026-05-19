import { buildHreflangLanguages, generateMetadata } from "@/lib/metadata"
import { PrenotaPageView } from "@/components/pages/prenota-page-view"

export const metadata = generateMetadata({
  title: "Prenotazione Diretta Appartamenti a Capo Rizzuto | Villa Olimpia",
  description:
    "Prenota direttamente Villa Olimpia a Capo Rizzuto: appartamenti con piscina, risposta entro 24 ore e proposta su misura senza intermediari.",
  path: "/prenota",
  keywords: [
    "prenota villa olimpia",
    "prenotazione diretta appartamento capo rizzuto",
    "prenota appartamenti capopiccolo",
    "vacanza maggio giugno settembre calabria",
    "villa famiglie piccoli gruppi capo rizzuto",
    "prenotazione più appartamenti stessa struttura",
    "area marina protetta capo rizzuto alloggio diretto",
    "richiesta disponibilità villa olimpia",
  ],
})

metadata.alternates = {
  ...metadata.alternates,
  languages: buildHreflangLanguages("/prenota"),
}

export default function PrenotaPage() {
  return <PrenotaPageView />
}
