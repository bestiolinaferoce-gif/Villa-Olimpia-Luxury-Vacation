"use client"

import Link from "next/link"
import { BookingForm } from "@/components/booking-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Clock, Waves, MessageCircle, Users, Home, Building2 } from "lucide-react"
import { EN_BOOKING_FORM_COPY } from "@/lib/booking-form-copy"
import { trackWhatsAppClick } from "@/components/analytics/google-analytics"

export type PrenotaPageViewProps = {
  locale?: "it" | "en"
  apartmentsHref?: string
  settembreHref?: string
  interaVillaHref?: string
}

const pageCopy = {
  it: {
    eyebrow: "Maggio · Giugno · Luglio · Settembre — diretto con la struttura",
    title: "Prenota il tuo soggiorno a Villa Olimpia",
    intro:
      "Maggio, giugno e settembre sono spesso i mesi migliori per chi cerca mare bello, meno affollamento e ritmi piu tranquilli. Villa Olimpia e una base comoda per famiglie, piccoli gruppi e ospiti che vogliono una proposta diretta: risposta entro 24 ore, preventivo personalizzato e nessun intermediario.",
    steps: ["Date e ospiti nel form", "Risposta con preventivo chiaro"],
    cards: [
      ["Trasparenza e fiducia", "Preventivo chiaro, nessuna sorpresa e contatto diretto."],
      ["Posizione strategica", "Capopiccolo, Area Marina Protetta e Spiaggia dei Gigli a pochi passi."],
    ],
    stayTypes: [
      [
        "Vacanza in famiglia",
        "Spazi comodi, piscina condivisa e spiaggia vicina: ideale per bambini e genitori che cercano una base rilassata tra Capopiccolo e l'Area Marina Protetta.",
      ],
      [
        "Soggiorno di gruppo",
        "Piccoli gruppi di amici o parenti: indicaci le esigenze e valutiamo piu appartamenti nella stessa struttura.",
      ],
      [
        "Intera struttura o piu appartamenti",
        "Per famiglie allargate o richieste speciali: comunica numero ospiti e date flessibili, verifichiamo la disponibilita reale insieme.",
      ],
    ],
    marketTitle: "Ideale per soggiorni diretti",
    marketText:
      "Prenotare direttamente con Villa Olimpia significa ricevere una risposta personale e chiara, utile soprattutto per soggiorni lunghi, famiglie e richieste con piu appartamenti.",
    septemberLink: "Settembre a Capo Rizzuto",
    groupLink: "Richieste gruppi e intera struttura",
    badges: ["Risposta entro 24h", "Spiaggia circa 100 m", "9 appartamenti indipendenti"],
    primaryCta: "Verifica disponibilita",
    secondaryCta: "Vedi appartamenti",
    formTitle: "Verifica disponibilita",
    formDescription: "Un solo passaggio: date, ospiti e contatto. Rispondiamo direttamente, senza commissioni OTA.",
    whatsappTitle: "Preferisci WhatsApp?",
    whatsappText: "Linea diretta Villa Olimpia, risposta nel piu breve tempo possibile.",
    whatsappCta: "Apri WhatsApp · 333 577 3390",
    formLocale: "it-IT",
  },
  en: {
    eyebrow: "May · June · July · September — direct with the property",
    title: "Book your stay at Villa Olimpia",
    intro:
      "May, June and September are often the best months for guests looking for a beautiful sea with fewer crowds, generous light and a more relaxed pace. Villa Olimpia is a great base for families, small groups and guests from Northern Europe: direct booking, reply within 24 hours and a personalised offer — even if you need multiple apartments in the same complex or a solution for the entire property.",
    steps: ["Dates and guests in the form", "Reply with a clear quote"],
    cards: [
      ["Transparency & trust", "Clear quote, no surprises and direct contact."],
      ["Prime location", "Capopiccolo, Marine Protected Area and Gigli beach just steps away."],
    ],
    stayTypes: [
      [
        "Family holiday",
        "Comfortable spaces, shared pool and beach access: ideal for children and parents looking for a relaxed base between Capopiccolo and the Marine Protected Area.",
      ],
      [
        "Group stay",
        "Small groups of friends or relatives: ask us how to organise multiple apartments in the same complex while keeping everyone together.",
      ],
      [
        "Entire property or multiple apartments",
        "For extended families or special needs: describe the number of guests and flexible dates — we will assess availability together, no promises upfront.",
      ],
    ],
    marketTitle: "Ideal for Northern European guests",
    marketText:
      "May, June and September are often the best months for guests looking for sea, sun and quieter stays in Calabria. Direct booking with Villa Olimpia means a clear, personal reply — perfect if you are planning a longer stay or travelling with family and friends.",
    septemberLink: "September in Capo Rizzuto",
    groupLink: "Groups & entire property requests",
    badges: ["Reply within 24h", "Beach about 100m", "9 independent apartments"],
    primaryCta: "Check availability",
    secondaryCta: "View apartments",
    formTitle: "Check availability",
    formDescription: "One step: dates, guests and contact. We reply directly, no OTA commissions.",
    whatsappTitle: "Prefer WhatsApp?",
    whatsappText: "Same business day, direct Villa Olimpia line.",
    whatsappCta: "Open WhatsApp · 333 577 3390",
    formLocale: "en-GB",
  },
} as const

export function PrenotaPageView({
  locale = "it",
  apartmentsHref = "/appartamenti",
  settembreHref = "/settembre-capo-rizzuto",
  interaVillaHref = "/intera-villa-calabria",
}: PrenotaPageViewProps) {
  const copy = pageCopy[locale]
  const bookingFormCopy = locale === "en" ? EN_BOOKING_FORM_COPY : undefined

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-white via-slate-50/60 to-white">
      <section className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              {copy.eyebrow}
            </div>
            <h1 className="mt-6 text-4xl font-playfair font-bold tracking-tight text-slate-900 md:text-5xl md:leading-tight">
              {copy.title}
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              {copy.intro}
            </p>
            <ol className="mt-5 flex flex-col gap-2 text-sm text-slate-600 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-1">
              <li className="flex items-center gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                  1
                </span>
                {copy.steps[0]}
              </li>
              <li className="hidden text-slate-300 sm:block" aria-hidden>
                →
              </li>
              <li className="flex items-center gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                  2
                </span>
                {copy.steps[1]}
              </li>
            </ol>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-900">{copy.cards[0][0]}</p>
                <p className="mt-2 text-sm text-slate-600">{copy.cards[0][1]}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-900">{copy.cards[1][0]}</p>
                <p className="mt-2 text-sm text-slate-600">{copy.cards[1][1]}</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="border border-primary/15 bg-white shadow-sm">
                <CardHeader className="pb-2">
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Home className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-playfair">{copy.stayTypes[0][0]}</CardTitle>
                  <CardDescription>
                    {copy.stayTypes[0][1]}
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border border-primary/15 bg-white shadow-sm">
                <CardHeader className="pb-2">
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-playfair">{copy.stayTypes[1][0]}</CardTitle>
                  <CardDescription>
                    {copy.stayTypes[1][1]}
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border border-primary/15 bg-white shadow-sm">
                <CardHeader className="pb-2">
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-playfair">{copy.stayTypes[2][0]}</CardTitle>
                  <CardDescription>
                    {copy.stayTypes[2][1]}
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
              <p className="text-sm font-semibold text-slate-900">
                {copy.marketTitle}
              </p>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {copy.marketText}
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500">
                <Link href={settembreHref} className="underline-offset-2 hover:underline text-primary">
                  {copy.septemberLink}
                </Link>
                <span aria-hidden>·</span>
                <Link href={interaVillaHref} className="underline-offset-2 hover:underline text-primary">
                  {copy.groupLink}
                </Link>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-slate-700 shadow">
                <Clock className="h-4 w-4 text-primary" />
                {copy.badges[0]}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-slate-700 shadow">
                <Waves className="h-4 w-4 text-primary" />
                {copy.badges[1]}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-slate-700 shadow">
                <Shield className="h-4 w-4 text-primary" />
                {copy.badges[2]}
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button variant="luxury" size="lg" className="w-full sm:w-auto shadow-md" asChild>
                <Link href="#prenota">{copy.primaryCta}</Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <Link href={apartmentsHref}>{copy.secondaryCta}</Link>
              </Button>
            </div>
          </div>

          <div id="prenota" className="scroll-mt-24 lg:sticky lg:top-24 lg:self-start">
            <Card className="border-2 border-primary/15 shadow-2xl shadow-primary/5 ring-1 ring-primary/5">
              <CardHeader className="space-y-1 pb-2">
                <CardTitle className="font-playfair text-2xl">{copy.formTitle}</CardTitle>
                <CardDescription className="text-base text-slate-600">
                  {copy.formDescription}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <BookingForm copy={bookingFormCopy} calendarLocale={copy.formLocale} />
              </CardContent>
            </Card>

            <div className="mt-5 rounded-2xl border-2 border-emerald-500/20 bg-gradient-to-br from-emerald-50/80 to-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">{copy.whatsappTitle}</p>
              <p className="mt-1 text-sm text-slate-600">{copy.whatsappText}</p>
              <Button variant="luxury" className="mt-4 w-full bg-[#25D366] hover:bg-[#1ebe5d]" asChild>
                <a href="https://wa.me/393335773390" target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick("prenota_sidebar", "en")}>
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {copy.whatsappCta}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
