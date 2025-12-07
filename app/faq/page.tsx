import { FAQSection } from "@/components/faq-section"

export const metadata = {
  title: "FAQ - Villa Olimpia",
  description: "Trova risposte alle domande più frequenti su Villa Olimpia, i nostri appartamenti e i servizi offerti.",
}

export default function FAQPage() {
  return (
    <div className="min-h-screen pt-20">
      <FAQSection />
    </div>
  )
}


