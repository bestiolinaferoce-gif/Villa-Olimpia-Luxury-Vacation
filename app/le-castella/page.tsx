import { Metadata } from "next"
import { generateMetadata } from "@/lib/metadata"
import { LeCastellaPageView } from "@/components/pages/le-castella-page-view"

export const metadata: Metadata = generateMetadata({
  title: "Le Castella: Cosa Vedere + Dove Soggiornare | Villa Olimpia",
  description:
    "Cosa vedere a Le Castella e dove soggiornare vicino al mare: Castello Aragonese, borgo, spiagge e Villa Olimpia a pochi minuti, a meno di 100 metri dalla Spiaggia dei Gigli.",
  path: "/le-castella",
  keywords: [
    "cosa vedere a le castella",
    "le castella cosa vedere",
    "castello aragonese le castella",
    "le castella calabria",
    "le castella cosa fare la sera",
    "spiagge le castella",
  ],
})

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Cosa vedere a Le Castella?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L'attrazione principale è il Castello Aragonese, fortezza del XV secolo costruita su un'isoletta collegata alla terraferma. Meritano anche il centro storico del borgo, la passeggiata sul lungomare, la Spiaggia Grande e le acque dell'Area Marina Protetta di Capo Rizzuto.",
      },
    },
    {
      "@type": "Question",
      name: "Si può visitare il Castello Aragonese di Le Castella?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì, il Castello Aragonese è visitabile con biglietto d'ingresso. Orari e tariffe variano in base alla stagione: conviene verificare gli orari aggiornati prima della visita, soprattutto fuori dai mesi estivi.",
      },
    },
    {
      "@type": "Question",
      name: "Cosa fare la sera a Le Castella?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La sera Le Castella si anima con la passeggiata sul lungomare, i ristoranti di pesce, le gelaterie e la vista del castello illuminato: è una delle escursioni serali più apprezzate da chi soggiorna a Isola di Capo Rizzuto.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto dista Le Castella da Capo Rizzuto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le Castella è una frazione di Isola di Capo Rizzuto: dal villaggio di Capopiccolo, dove si trova Villa Olimpia, il borgo dista circa 8 chilometri, ovvero 8-10 minuti di auto.",
      },
    },
  ],
}

export default function LeCastellaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <LeCastellaPageView />
    </>
  )
}
