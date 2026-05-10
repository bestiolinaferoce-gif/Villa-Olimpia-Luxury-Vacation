import type { Metadata } from "next"
import { FlightRouteLandingPage } from "@/components/pages/flight-route-landing-page"
import { BASE_URL, generateMetadata } from "@/lib/metadata"

export const metadata: Metadata = (() => {
  const base = generateMetadata({
    title: "Dall'aeroporto di Crotone a Villa Olimpia | Capo Rizzuto",
    description:
      "Guida pratica per arrivare dall'aeroporto di Crotone (CRV) a Villa Olimpia in Capo Rizzuto: il transfer più breve, consigli utili e prenotazione diretta.",
    path: "/aeroporto-crotone-villa-olimpia",
  })

  return {
    ...base,
    alternates: {
      ...base.alternates,
      languages: {
        it: `${BASE_URL}/aeroporto-crotone-villa-olimpia`,
        en: `${BASE_URL}/en/crotone-airport-to-villa-olimpia`,
        "x-default": `${BASE_URL}/en/crotone-airport-to-villa-olimpia`,
      },
    },
  }
})()

export default function AeroportoCrotoneVillaOlimpiaPage() {
  return (
    <FlightRouteLandingPage
      canonical={`${BASE_URL}/aeroporto-crotone-villa-olimpia`}
      homeHref={BASE_URL}
      homeLabel="Home"
      breadcrumbLabel="Aeroporto di Crotone"
      badge="L'aeroporto più vicino a Villa Olimpia"
      title="Dall'aeroporto di Crotone a Villa Olimpia: il transfer più breve per Capo Rizzuto"
      intro="Se atterri all'aeroporto di Crotone (CRV), Villa Olimpia diventa ancora più facile da raggiungere. È lo scalo più vicino alla struttura e una scelta ottima per chi vuole il transfer più rapido verso Capo Piccolo."
      primaryHref="/contatti?source=crotone_airport_it#prenota"
      primaryLabel="Verifica disponibilità"
      secondaryHref="/en/crotone-airport-to-villa-olimpia"
      secondaryLabel="Versione English"
      imageAlt="Villa Olimpia vicino all'aeroporto di Crotone"
      travelHeading="Perché Crotone fa la differenza"
      travelCards={[
        {
          title: "Lo scalo più vicino",
          text: "Crotone è la scelta più diretta per chi vuole minimizzare il tempo di viaggio dopo l'atterraggio.",
        },
        {
          title: "Domanda ad alta intenzione",
          text: "Chi cerca informazioni sull'aeroporto è spesso un ospite già vicino alla prenotazione.",
        },
        {
          title: "Perfetto per soggiorni brevi",
          text: "Più corto è il transfer dall'aeroporto, più forte è la proposta per weekend lunghi e brevi vacanze estive.",
        },
      ]}
      airportHeading="Panoramica dell'arrivo"
      airportCards={[
        {
          title: "Transfer finale più corto",
          text: "Rispetto alle altre opzioni, Crotone offre il tragitto più breve verso Villa Olimpia: ideale per chi vuole massimizzare il tempo in spiaggia a Capo Piccolo.",
        },
        {
          title: "Spostamenti semplici",
          text: "Una volta usciti dall'aeroporto, Villa Olimpia è una base pratica per Spiaggia dei Gigli, Le Castella e l'Area Marina Protetta.",
        },
      ]}
      airportNote="L'operativo voli può cambiare in base alla stagione: verifica sempre il programma aggiornato prima di prenotare."
      whyHeading="Perché gli ospiti apprezzano questa scelta"
      whyItems={[
        "Meno stress dopo lo sbarco grazie al transfer breve.",
        "Piscina esterna condivisa e appartamenti indipendenti per un soggiorno flessibile.",
        "Circa 100 metri dalla spiaggia sabbiosa di Spiaggia dei Gigli.",
        "Supporto diretto del team della struttura per la prenotazione.",
      ]}
      faqHeading="Domande frequenti"
      faqItems={[
        {
          q: "Crotone è davvero l'aeroporto più vicino a Villa Olimpia?",
          a: "Sì. Crotone è lo scalo più prossimo ed è spesso l'opzione più comoda quando l'operativo voli copre la tua città di partenza.",
        },
        {
          q: "Questa rotta è adatta alle vacanze in famiglia?",
          a: "Sì. Un transfer più breve fa una vera differenza quando si viaggia con bambini e bagagli.",
        },
        {
          q: "Quanto è distante la spiaggia?",
          a: "Villa Olimpia si trova a circa 100 metri dalla Spiaggia dei Gigli, raggiungibile comodamente a piedi.",
        },
      ]}
      bottomTitle="Arrivi a Crotone per la tua vacanza in Calabria?"
      bottomText="Inviaci le date di viaggio e il numero di ospiti. Ti suggeriremo l'appartamento più adatto al tuo soggiorno."
      bottomPrimaryHref="/contatti?source=crotone_airport_bottom_it#prenota"
      bottomPrimaryLabel="Contatta Villa Olimpia"
      bottomSecondaryHref="/aeroporto-lamezia-villa-olimpia"
      bottomSecondaryLabel="Oppure arriva via Lamezia"
    />
  )
}
