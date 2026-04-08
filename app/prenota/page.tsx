import { generateMetadata } from "@/lib/metadata"
import { PrenotaPageView } from "@/components/pages/prenota-page-view"

export const metadata = generateMetadata({
  title: "Prenotazione Diretta Appartamenti a Capo Rizzuto | Villa Olimpia",
  description:
    "Prenotazione diretta Villa Olimpia: maggio, giugno e settembre sono spesso i mesi migliori per mare più tranquillo e soggiorni di qualità. Famiglie, piccoli gruppi e richieste per più appartamenti o intera struttura: risposta entro 24 ore, proposta su misura, senza intermediari.",
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

export default function PrenotaPage() {
  return <PrenotaPageView />
}
