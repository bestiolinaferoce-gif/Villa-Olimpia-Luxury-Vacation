import { FAQSection } from "@/components/faq-section"
import { Breadcrumb } from "@/components/breadcrumb"
import { generateMetadata } from "@/lib/metadata"

export const metadata = generateMetadata({
  title: "FAQ su Villa Olimpia, Appartamenti e Prenotazione Diretta",
  description:
    "Domande frequenti su Villa Olimpia a Capopiccolo: check-in, check-out, cancellazioni, WiFi, parcheggio, distanza dalla Spiaggia dei Gigli e prenotazione diretta a Capo Rizzuto.",
  path: "/faq",
  keywords: [
    "FAQ Villa Olimpia",
    "domande frequenti appartamenti Capo Rizzuto",
    "check-in check-out Spiaggia dei Gigli",
    "parcheggio WiFi villa con piscina Calabria",
    "prenotazione diretta villa olimpia faq",
  ],
})

// FAQ Schema Markup
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quali sono gli orari di check-in e check-out?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Il check-in è disponibile dalle 15:00 alle 20:00, mentre il check-out è entro le 11:00. Per orari diversi, contattaci e cercheremo di soddisfare le tue esigenze.",
      },
    },
    {
      "@type": "Question",
      name: "È possibile cancellare la prenotazione?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì, le cancellazioni sono possibili. Per i dettagli completi sulla politica di cancellazione e rimborsi, consulta i nostri Termini e Condizioni o contattaci direttamente.",
      },
    },
    {
      "@type": "Question",
      name: "Gli appartamenti sono adatti per famiglie con bambini?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Assolutamente sì! Molti dei nostri appartamenti sono ideali per famiglie. Su richiesta, possiamo fornire culle, seggioloni e altri accessori per bambini.",
      },
    },
    {
      "@type": "Question",
      name: "C'è il WiFi gratuito?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì, tutti gli appartamenti sono dotati di connessione WiFi ad alta velocità gratuita. Le credenziali ti verranno fornite al check-in.",
      },
    },
    {
      "@type": "Question",
      name: "È disponibile il parcheggio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì, offriamo parcheggio privato gratuito per tutti gli ospiti. Il parcheggio è sicuro e sorvegliato.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto dista la spiaggia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Siamo a meno di 100 metri dalla splendida Spiaggia dei Gigli, raggiungibile in 1 minuto a piedi. Una delle spiagge più belle della Calabria, nell'Area Marina Protetta Capo Rizzuto.",
      },
    },
    {
      "@type": "Question",
      name: "Gli appartamenti hanno l'aria condizionata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì, tutti gli appartamenti sono dotati di aria condizionata e riscaldamento per garantire il massimo comfort in ogni stagione.",
      },
    },
    {
      "@type": "Question",
      name: "Posso portare animali domestici?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alcuni appartamenti accettano animali domestici. Ti preghiamo di contattarci in anticipo per verificare la disponibilità e le condizioni.",
      },
    },
  ],
}

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen pt-20">
        <Breadcrumb items={[{ label: "FAQ" }]} />
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-5">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold">Domande frequenti su Villa Olimpia</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In questa pagina trovi le risposte alle domande più comuni su appartamenti, servizi, check-in,
                parcheggio, distanza dal mare e prenotazione diretta. È un supporto utile sia per chi sta valutando il
                soggiorno sia per chi vuole chiarire rapidamente gli aspetti pratici prima di contattarci.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Se dopo la lettura vuoi ricevere una proposta personalizzata, puoi andare alla pagina{" "}
                <a href="/prenota" className="text-primary underline-offset-2 hover:underline">
                  Prenota
                </a>{" "}
                oppure contattarci direttamente dalla pagina{" "}
                <a href="/contatti?source=faq_intro#prenota" className="text-primary underline-offset-2 hover:underline">
                  Contatti
                </a>.
              </p>
            </div>
          </div>
        </section>
        <FAQSection />
      </div>
    </>
  )
}

