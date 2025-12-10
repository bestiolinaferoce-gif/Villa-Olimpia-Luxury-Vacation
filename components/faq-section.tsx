"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "Quali sono gli orari di check-in e check-out?",
    answer: "Il check-in è disponibile dalle 15:00 alle 20:00, mentre il check-out è entro le 11:00. Per orari diversi, contattaci e cercheremo di soddisfare le tue esigenze.",
  },
  {
    question: "È possibile cancellare la prenotazione?",
    answer: "Sì, le cancellazioni sono possibili. Per i dettagli completi sulla politica di cancellazione e rimborsi, consulta i nostri Termini e Condizioni o contattaci direttamente.",
  },
  {
    question: "Gli appartamenti sono adatti per famiglie con bambini?",
    answer: "Assolutamente sì! Molti dei nostri appartamenti sono ideali per famiglie. Su richiesta, possiamo fornire culle, seggioloni e altri accessori per bambini.",
  },
  {
    question: "C'è il WiFi gratuito?",
    answer: "Sì, tutti gli appartamenti sono dotati di connessione WiFi ad alta velocità gratuita. Le credenziali ti verranno fornite al check-in.",
  },
  {
    question: "È disponibile il parcheggio?",
    answer: "Sì, offriamo parcheggio privato gratuito per tutti gli ospiti. Il parcheggio è sicuro e sorvegliato.",
  },
  {
    question: "Quanto dista la spiaggia?",
    answer: "Siamo a meno di 100 metri dalla splendida Spiaggia dei Gigli, raggiungibile in 1 minuto a piedi. Una delle spiagge più belle della Calabria, nell'Area Marina Protetta Capo Rizzuto.",
  },
  {
    question: "Gli appartamenti hanno l'aria condizionata?",
    answer: "Sì, tutti gli appartamenti sono dotati di aria condizionata e riscaldamento per garantire il massimo comfort in ogni stagione.",
  },
  {
    question: "Posso portare animali domestici?",
    answer: "Alcuni appartamenti accettano animali domestici. Ti preghiamo di contattarci in anticipo per verificare la disponibilità e le condizioni.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            Domande Frequenti
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trova risposte alle domande più comuni sui nostri appartamenti e servizi
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => toggleFAQ(index)}
            >
              <CardContent className="p-0">
                <div className="flex items-center justify-between p-6">
                  <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Non hai trovato la risposta che cercavi?
          </p>
          <a
            href="/contatti"
            className="text-primary hover:underline font-semibold"
          >
            Contattaci direttamente →
          </a>
        </div>
      </div>
    </section>
  )
}


