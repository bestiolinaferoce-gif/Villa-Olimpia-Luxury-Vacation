import type { Metadata } from "next"
import { FlightRouteLandingPage } from "@/components/pages/flight-route-landing-page"
import { BASE_URL, generateMetadata } from "@/lib/metadata"

export const metadata: Metadata = (() => {
  const base = generateMetadata({
    title: "Da Oslo a Lamezia per Villa Olimpia | Come arrivare in Calabria",
    description:
      "Guida pratica per arrivare da Oslo a Villa Olimpia via Lamezia Terme. Scopri perché questo collegamento è strategico per Capo Rizzuto.",
    path: "/oslo-lamezia-villa-olimpia",
  })

  return {
    ...base,
    alternates: {
      ...base.alternates,
      languages: {
        it: `${BASE_URL}/oslo-lamezia-villa-olimpia`,
        en: `${BASE_URL}/en/oslo-to-lamezia-villa-olimpia`,
        no: `${BASE_URL}/no/oslo-til-lamezia-villa-olimpia`,
        "x-default": `${BASE_URL}/en/oslo-to-lamezia-villa-olimpia`,
      },
    },
  }
})()

export default function OsloLameziaVillaOlimpiaPage() {
  return (
    <FlightRouteLandingPage
      canonical={`${BASE_URL}/oslo-lamezia-villa-olimpia`}
      homeHref={BASE_URL}
      homeLabel="Home"
      breadcrumbLabel="Oslo e Lamezia"
      badge="Landing strategica per il mercato Nord Europa"
      title="Da Oslo a Villa Olimpia via Lamezia: la rotta più naturale per raggiungere Capo Rizzuto"
      intro="Per gli ospiti che partono da Oslo, Lamezia Terme è spesso la porta d'ingresso più naturale per arrivare a Villa Olimpia. Una volta atterrati, Capo Piccolo è una base ideale per una vacanza in Calabria tra mare, spiaggia e prenotazione diretta."
      primaryHref="/contatti?source=oslo_lamezia_it#prenota"
      primaryLabel="Verifica disponibilità"
      secondaryHref="/en/oslo-to-lamezia-villa-olimpia"
      secondaryLabel="Versione English"
      imageAlt="Villa Olimpia per chi arriva da Oslo via Lamezia"
      travelHeading="Perché questa rotta conta davvero"
      travelCards={[
        {
          title: "Intercetta una domanda reale",
          text: "Chi cerca Oslo e Lamezia vuole capire subito qual è l'aeroporto giusto per raggiungere la struttura.",
        },
        {
          title: "Accorcia il percorso verso il lead",
          text: "Quando il viaggio è chiaro, l'utente passa più facilmente da ricerca informativa a richiesta disponibilità.",
        },
        {
          title: "Perfetta per fly and drive",
          text: "È una soluzione pratica per chi vuole alternare spiagge, borghi e giornate in autonomia sul territorio.",
        },
      ]}
      airportHeading="Come si inserisce Villa Olimpia in questo itinerario"
      airportCards={[
        {
          title: "Lamezia come aeroporto di accesso",
          text: "Per molti viaggiatori del Nord Europa Lamezia è il punto di arrivo più lineare per poi raggiungere Capo Rizzuto e Capo Piccolo.",
        },
        {
          title: "Poi si prosegue verso Capo Piccolo",
          text: "Da lì Villa Olimpia diventa una base pratica per Spiaggia dei Gigli, Le Castella e Area Marina Protetta.",
        },
      ]}
      airportNote="I voli stagionali possono cambiare: prima della prenotazione conviene sempre verificare l'operativo aggiornato."
      whyHeading="Perché questa vacanza funziona bene"
      whyItems={[
        "9 appartamenti adatti a coppie, famiglie e piccoli gruppi.",
        "Piscina esterna condivisa riservata agli ospiti della struttura.",
        "Circa 100 metri da Spiaggia dei Gigli, raggiungibile a piedi.",
        "Contatto diretto con Villa Olimpia per un preventivo chiaro e rapido.",
      ]}
      faqHeading="Domande frequenti"
      faqItems={[
        {
          q: "Per chi parte da Oslo Lamezia è la soluzione più semplice?",
          a: "Molto spesso sì, perché la logica del collegamento verso Capo Rizzuto è più lineare rispetto ad altre combinazioni.",
        },
        {
          q: "Serve l'auto una volta atterrati?",
          a: "Nella maggior parte dei casi sì, perché permette di muoversi con libertà tra spiagge, Le Castella e i dintorni.",
        },
        {
          q: "Quanto dista il mare da Villa Olimpia?",
          a: "Villa Olimpia si trova a circa 100 metri da Spiaggia dei Gigli, quindi la spiaggia è facilmente raggiungibile a piedi.",
        },
      ]}
      bottomTitle="Vuoi intercettare la Calabria partendo da Oslo?"
      bottomText="Scrivici date, numero di ospiti e preferenze. Ti rispondiamo con gli appartamenti più adatti e una proposta diretta."
      bottomPrimaryHref="/contatti?source=oslo_lamezia_bottom_it#prenota"
      bottomPrimaryLabel="Contatta Villa Olimpia"
      bottomSecondaryHref="/aeroporto-lamezia-villa-olimpia"
      bottomSecondaryLabel="Guida all'aeroporto di Lamezia"
    />
  )
}
