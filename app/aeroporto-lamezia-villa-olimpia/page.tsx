import type { Metadata } from "next"
import { FlightRouteLandingPage } from "@/components/pages/flight-route-landing-page"
import { BASE_URL, generateMetadata } from "@/lib/metadata"

export const metadata: Metadata = (() => {
  const base = generateMetadata({
    title: "Dall’aeroporto di Lamezia a Villa Olimpia | Guida arrivo",
    description:
      "Guida pratica per arrivare dall’aeroporto di Lamezia Terme a Villa Olimpia e capire quando Lamezia è la scelta più flessibile per Capo Rizzuto.",
    path: "/aeroporto-lamezia-villa-olimpia",
  })

  return {
    ...base,
    alternates: {
      ...base.alternates,
      languages: {
        it: `${BASE_URL}/aeroporto-lamezia-villa-olimpia`,
        en: `${BASE_URL}/en/lamezia-airport-to-villa-olimpia`,
        "x-default": `${BASE_URL}/en/lamezia-airport-to-villa-olimpia`,
      },
    },
  }
})()

export default function AeroportoLameziaVillaOlimpiaPage() {
  return (
    <FlightRouteLandingPage
      canonical={`${BASE_URL}/aeroporto-lamezia-villa-olimpia`}
      homeHref={BASE_URL}
      homeLabel="Home"
      breadcrumbLabel="Aeroporto di Lamezia"
      badge="La scelta più flessibile per molti mercati"
      title="Dall’aeroporto di Lamezia a Villa Olimpia: la guida utile per arrivare a Capo Rizzuto"
      intro="Lamezia Terme è spesso l’aeroporto più flessibile per chi vuole raggiungere Villa Olimpia. È particolarmente utile quando servono più combinazioni di volo prima di proseguire verso Capo Piccolo."
      primaryHref="/contatti?source=lamezia_airport_it#prenota"
      primaryLabel="Verifica disponibilità"
      secondaryHref="/en/lamezia-airport-to-villa-olimpia"
      secondaryLabel="Versione English"
      imageAlt="Villa Olimpia per chi arriva dall’aeroporto di Lamezia"
      travelHeading="Perché Lamezia resta strategico"
      travelCards={[
        {
          title: "Più flessibilità",
          text: "Per molti viaggiatori europei Lamezia offre una logica di collegamenti più ampia rispetto ad aeroporti più piccoli.",
        },
        {
          title: "Molto utile per traffico internazionale",
          text: "Anche lato SEO e campagne, Lamezia intercetta una domanda più larga e spesso più spendibile.",
        },
        {
          title: "Buon equilibrio",
          text: "Rappresenta un compromesso efficace tra disponibilità voli e facilità di arrivo verso Villa Olimpia.",
        },
      ]}
      airportHeading="Come si inserisce Villa Olimpia"
      airportCards={[
        {
          title: "Lamezia come hub di accesso",
          text: "Per molti mercati è l’aeroporto più comodo quando servono più opzioni di volo e maggiore flessibilità organizzativa.",
        },
        {
          title: "Poi si arriva a Capo Piccolo",
          text: "Da lì Villa Olimpia diventa una base forte per spiaggia, vacanza famiglia e scoperta di Capo Rizzuto.",
        },
      ]}
      airportNote="Prima di confermare il viaggio conviene sempre verificare operativo voli e disponibilità autonoleggio."
      whyHeading="Perché la struttura ripaga il trasferimento"
      whyItems={[
        "9 appartamenti per coppie, famiglie e piccoli gruppi.",
        "Piscina esterna condivisa dedicata agli ospiti della struttura.",
        "Circa 100 metri dalla spiaggia sabbiosa di Spiaggia dei Gigli.",
        "Contatto diretto con Villa Olimpia per un preventivo più semplice e rapido.",
      ]}
      faqHeading="Domande frequenti"
      faqItems={[
        {
          q: "Lamezia è sempre meglio di Crotone?",
          a: "Non sempre: Crotone è più vicino, ma Lamezia è spesso più flessibile per numero di rotte e combinazioni disponibili.",
        },
        {
          q: "Conviene noleggiare un’auto a Lamezia?",
          a: "Nella maggior parte dei casi sì, perché semplifica l’arrivo e permette di muoversi liberamente sul territorio.",
        },
        {
          q: "La spiaggia è vicina alla struttura?",
          a: "Sì, Villa Olimpia si trova a circa 100 metri da Spiaggia dei Gigli.",
        },
      ]}
      bottomTitle="Arrivi a Lamezia per la tua vacanza in Calabria?"
      bottomText="Scrivici date, numero ospiti e preferenze. Ti rispondiamo con la soluzione più adatta e un preventivo diretto."
      bottomPrimaryHref="/contatti?source=lamezia_airport_bottom_it#prenota"
      bottomPrimaryLabel="Contatta Villa Olimpia"
      bottomSecondaryHref="/capo-rizzuto"
      bottomSecondaryLabel="Scopri Capo Rizzuto"
    />
  )
}
