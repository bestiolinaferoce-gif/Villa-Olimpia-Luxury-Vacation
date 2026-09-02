/**
 * Copy localizzato della landing stagionale (attualmente /settembre-capo-rizzuto).
 *
 * Perche' esiste: la view e i tre componenti stagionali avevano il testo cablato in italiano,
 * quindi `de`, `fr` e i nuovi `no`/`sv` uscivano con navigazione e metadata tradotti ma corpo
 * italiano. Qui il testo diventa un dato, indicizzato per locale.
 *
 * Regola: `it` e' la fonte. Le altre lingue traducono le stesse affermazioni, senza aggiungerne:
 * nessun prezzo, nessuno sconto, nessuna temperatura, nessun claim che non sia gia' in italiano.
 */

import { SEASONAL_CAMPAIGN_YEAR } from "@/lib/seasonalConfig"
import { DEFAULT_LOCALE, type SupportedLocale } from "@/lib/i18n-config"

export interface SeasonalLandingCopy {
  /** Nome del mese nella lingua del locale, usato in intestazioni composte */
  monthName: string
  /** Etichetta "Mese Anno" gia' formattata */
  monthLabel: string
  breadcrumb: string
  hero: {
    badge: string
    title: string
    intro: string
    ctaPrimary: string
    ctaSecondary: string
    note: string
  }
  reasonsTitle: string
  reasons: Array<{ title: string; text: string }>
  idealTitle: string
  ideal: Array<{ title: string; text: string }>
  band: { title: string; text: string; call: string; form: string }
  closing: { title: string; text: string; apartments: string; home: string }
  grid: {
    title: string
    note: string
    badgeVerified: string
    badgeStale: string
    badgeLoading: string
    badgeUnknown: string
    /** contiene il segnaposto {guests} */
    guestsLabel: string
    rateNote: string
    requestLodge: string
  }
  form: {
    title: string
    intro: string
    immediateLabel: string
    immediateNote: string
    call: string
    fullForm: string
    name: string
    email: string
    phone: string
    guests: string
    checkIn: string
    checkOut: string
    lodge: string
    noPreference: string
    message: string
    consent: string
    submit: string
    sending: string
    sent: string
    error: string
    footer: string
  }
  faqHeading: string
  faq: Array<{ q: string; a: string }>
}

const it: SeasonalLandingCopy = {
  monthName: "settembre",
  monthLabel: `Settembre ${SEASONAL_CAMPAIGN_YEAR}`,
  breadcrumb: "Settembre a Capo Rizzuto",
  hero: {
    badge: "Settembre · quiet luxury vicino al mare",
    title: "Settembre a Capo Rizzuto: il mese più elegante per il mare",
    intro:
      "Villa Olimpia è una base perfetta per chi ama la Calabria autentica: piscina condivisa, nove appartamenti indipendenti e la comodità di essere a due passi dall'Area Marina Protetta. A settembre il mare si vive con luce speciale, meno folla e un soggiorno più rilassato — senza rinunciare a qualità e servizi.",
    ctaPrimary: "Disponibilità settembre",
    ctaSecondary: "Form prenotazione diretta",
    note: "Canale diretto Villa Olimpia · risposta in giornata lavorativa",
  },
  reasonsTitle: "Perché scegliere settembre a Villa Olimpia",
  reasons: [
    {
      title: "Mare ancora caldo",
      text: "In molte settimane di settembre il mare resta invitante: nuotate piacevoli e giornate luminose senza la ressa di agosto.",
    },
    {
      title: "Meno affollamento",
      text: "Spiagge e strade sono più vivibili: ti godi Capopiccolo, la Spiaggia dei Gigli e l'Area Marina Protetta con più spazio e calma.",
    },
    {
      title: "Atmosfera più rilassata",
      text: "Il ritmo è più elegante: piscina, terrazze e momenti conviviali in villa senza stress da alta stagione.",
    },
    {
      title: "Qualità per famiglie e coppie",
      text: "Ideale se cerchi un soggiorno curato, con servizi chiari e contatto diretto con chi gestisce Villa Olimpia.",
    },
  ],
  idealTitle: "Ideale per",
  ideal: [
    {
      title: "Coppie",
      text: "Ritmo lento, tramonti sul mare e giornate da dedicare a spiagge e borghi vicini.",
    },
    {
      title: "Famiglie",
      text: "Spazi comodi, piscina e mare vicino: equilibrio tra relax per genitori e divertimento per i più piccoli.",
    },
    {
      title: "Ospiti dal Nord Europa",
      text: "Maggio, giugno e settembre sono spesso i mesi migliori per chi viene dal Nord Europa: mare ancora piacevole, meno folla e soggiorni curati a Capo Rizzuto, con più spazio per vivere la costa a ritmo lento.",
    },
  ],
  band: {
    title: "Parla subito con noi",
    text: "Stesso team che gestisce la struttura: niente call center, niente OTA.",
    call: "Chiama 333 577 3390",
    form: "Form e email",
  },
  closing: {
    title: "Scegli l'unità e completa la richiesta",
    text: "Ogni lodge ha caratteristiche diverse: dalla coppia alla famiglia numerosa. Poi chiudi il cerchio con il form o su WhatsApp.",
    apartments: "Tutti gli appartamenti",
    home: "Home Villa Olimpia",
  },
  grid: {
    title: "Lodge",
    note: "I calendari Airbnb vengono sincronizzati automaticamente. La disponibilità finale viene sempre confermata sulle date richieste.",
    badgeVerified: "CALENDARIO SINCRONIZZATO",
    badgeStale: "DA AGGIORNARE",
    badgeLoading: "CONTROLLO…",
    badgeUnknown: "VERIFICA LE DATE",
    guestsLabel: "Fino a {guests} ospiti",
    rateNote: "Tariffa e disponibilità confermate in base a date e numero di ospiti.",
    requestLodge: "Richiedi questo lodge",
  },
  form: {
    title: "Preventivo per questo periodo",
    intro:
      "Compila il form: riceviamo la richiesta sulla casella operativa e ti rispondiamo con una proposta chiara, senza intermediari.",
    immediateLabel: "Contatto immediato",
    immediateNote: "Stesso giorno lavorativo · Villa Olimpia diretta",
    call: "Chiama",
    fullForm: "Form completo",
    name: "Nome",
    email: "Email",
    phone: "Telefono",
    guests: "Ospiti",
    checkIn: "Check-in",
    checkOut: "Check-out",
    lodge: "Lodge preferito",
    noPreference: "Nessuna preferenza",
    message: "Messaggio (opzionale)",
    consent: "Voglio ricevere aggiornamenti e offerte dedicate sul canale diretto (opt-in).",
    submit: "Richiedi disponibilità Settembre",
    sending: "Invio…",
    sent: "Richiesta inviata",
    error: "Invio non riuscito. Riprova o usa WhatsApp.",
    footer:
      "La richiesta arriva sul canale operativo: ti rispondiamo appena possibile, di solito entro un giorno lavorativo.",
  },
  faqHeading: `FAQ · settembre ${SEASONAL_CAMPAIGN_YEAR}`,
  faq: [
    {
      q: "Settembre è adatto al mercato Nord Europa?",
      a: "Sì: per chi arriva da Nord Europa settembre unisce mare ancora piacevole, meno folla e migliore valore rispetto all'alta stagione. È il mese da promuovere per coppie, famiglie flessibili e soggiorni 7+ notti.",
    },
    {
      q: "Meglio prenotare direttamente o via portale?",
      a: "Per settembre conviene scriverci direttamente: possiamo proporre il lodge più adatto, verificare più appartamenti nella stessa struttura e rispondere con una tariffa chiara senza commissioni OTA.",
    },
    {
      q: "La piscina e il mare sono ancora utilizzabili?",
      a: "Il mare a settembre è spesso ancora piacevole. Per piscina e servizi stagionali confermiamo sempre nella risposta in base alle date precise del soggiorno.",
    },
  ],
}

const en: SeasonalLandingCopy = {
  monthName: "September",
  monthLabel: `September ${SEASONAL_CAMPAIGN_YEAR}`,
  breadcrumb: "September in Capo Rizzuto",
  hero: {
    badge: "September · quiet luxury by the sea",
    title: "September in Capo Rizzuto: the most elegant month by the sea",
    intro:
      "Villa Olimpia is a perfect base for anyone who loves authentic Calabria: a shared pool, nine independent apartments and the Marine Protected Area just a short walk away. In September the sea comes with a special light, fewer crowds and a more relaxed stay — without giving up quality and service.",
    ctaPrimary: "September availability",
    ctaSecondary: "Direct booking form",
    note: "Villa Olimpia direct channel · reply within one working day",
  },
  reasonsTitle: "Why choose September at Villa Olimpia",
  reasons: [
    {
      title: "The sea is still warm",
      text: "Through many weeks of September the sea stays inviting: pleasant swims and bright days without the August crush.",
    },
    {
      title: "Fewer crowds",
      text: "Beaches and roads are easier to live with: you enjoy Capopiccolo, Spiaggia dei Gigli and the Marine Protected Area with more space and calm.",
    },
    {
      title: "A more relaxed atmosphere",
      text: "The pace is more elegant: pool, terraces and time together at the villa without high-season stress.",
    },
    {
      title: "Quality for families and couples",
      text: "Ideal if you want a well-kept stay, with clear services and direct contact with the people who run Villa Olimpia.",
    },
  ],
  idealTitle: "Ideal for",
  ideal: [
    {
      title: "Couples",
      text: "A slow pace, sunsets over the sea and days to spend on nearby beaches and villages.",
    },
    {
      title: "Families",
      text: "Comfortable space, a pool and the sea close by: a balance between rest for parents and fun for the little ones.",
    },
    {
      title: "Guests from Northern Europe",
      text: "May, June and September are often the best months for those coming from Northern Europe: the sea is still pleasant, there are fewer crowds and stays in Capo Rizzuto are well looked after, with more room to enjoy the coast at a slow pace.",
    },
  ],
  band: {
    title: "Talk to us directly",
    text: "The same team that runs the property: no call centre, no OTA.",
    call: "Call +39 333 577 3390",
    form: "Form and email",
  },
  closing: {
    title: "Choose your unit and complete the request",
    text: "Every lodge is different, from couples to large families. Then close the loop with the form or on WhatsApp.",
    apartments: "All apartments",
    home: "Villa Olimpia home",
  },
  grid: {
    title: "Lodges",
    note: "Airbnb calendars are synced automatically. Final availability is always confirmed for the dates you request.",
    badgeVerified: "CALENDAR SYNCED",
    badgeStale: "NEEDS UPDATING",
    badgeLoading: "CHECKING…",
    badgeUnknown: "CHECK YOUR DATES",
    guestsLabel: "Up to {guests} guests",
    rateNote: "Rate and availability confirmed based on your dates and number of guests.",
    requestLodge: "Request this lodge",
  },
  form: {
    title: "A quote for these dates",
    intro:
      "Fill in the form: the request reaches our operations inbox and we reply with a clear proposal, with no intermediaries.",
    immediateLabel: "Immediate contact",
    immediateNote: "Same working day · Villa Olimpia direct",
    call: "Call",
    fullForm: "Full form",
    name: "Name",
    email: "Email",
    phone: "Phone",
    guests: "Guests",
    checkIn: "Check-in",
    checkOut: "Check-out",
    lodge: "Preferred lodge",
    noPreference: "No preference",
    message: "Message (optional)",
    consent: "I would like to receive updates and offers on the direct channel (opt-in).",
    submit: "Request September availability",
    sending: "Sending…",
    sent: "Request sent",
    error: "Sending failed. Try again or use WhatsApp.",
    footer:
      "Your request reaches our operations channel: we reply as soon as we can, usually within one working day.",
  },
  faqHeading: `FAQ · September ${SEASONAL_CAMPAIGN_YEAR}`,
  faq: [
    {
      q: "Is September a good fit for Northern European guests?",
      a: "Yes: for those arriving from Northern Europe, September combines a sea that is still pleasant, fewer crowds and better value than high season. It is the month we recommend for couples, flexible families and stays of 7+ nights.",
    },
    {
      q: "Is it better to book directly or through a portal?",
      a: "For September it is worth writing to us directly: we can suggest the most suitable lodge, check several apartments in the same property and reply with a clear rate without OTA commission.",
    },
    {
      q: "Are the pool and the sea still usable?",
      a: "In September the sea is often still pleasant. For the pool and seasonal services we always confirm in our reply, based on the exact dates of your stay.",
    },
  ],
}

const de: SeasonalLandingCopy = {
  monthName: "September",
  monthLabel: `September ${SEASONAL_CAMPAIGN_YEAR}`,
  breadcrumb: "September in Capo Rizzuto",
  hero: {
    badge: "September · Quiet Luxury am Meer",
    title: "September in Capo Rizzuto: der eleganteste Monat am Meer",
    intro:
      "Villa Olimpia ist die passende Basis für alle, die das authentische Kalabrien mögen: Gemeinschaftspool, neun eigenständige Wohnungen und das Meeresschutzgebiet nur wenige Schritte entfernt. Im September zeigt sich das Meer in besonderem Licht, mit weniger Andrang und einem entspannteren Aufenthalt — ohne auf Qualität und Service zu verzichten.",
    ctaPrimary: "Verfügbarkeit im September",
    ctaSecondary: "Formular für Direktbuchung",
    note: "Direkter Kanal der Villa Olimpia · Antwort innerhalb eines Werktags",
  },
  reasonsTitle: "Warum der September in der Villa Olimpia",
  reasons: [
    {
      title: "Das Meer ist noch warm",
      text: "In vielen Septemberwochen bleibt das Meer einladend: angenehmes Schwimmen und helle Tage ohne das Gedränge im August.",
    },
    {
      title: "Weniger Andrang",
      text: "Strände und Straßen sind angenehmer: Sie genießen Capopiccolo, die Spiaggia dei Gigli und das Meeresschutzgebiet mit mehr Platz und Ruhe.",
    },
    {
      title: "Entspanntere Atmosphäre",
      text: "Der Rhythmus ist eleganter: Pool, Terrassen und gemeinsame Momente in der Villa ohne den Stress der Hochsaison.",
    },
    {
      title: "Qualität für Familien und Paare",
      text: "Ideal, wenn Sie einen gepflegten Aufenthalt suchen, mit klaren Leistungen und direktem Kontakt zu den Gastgebern der Villa Olimpia.",
    },
  ],
  idealTitle: "Ideal für",
  ideal: [
    {
      title: "Paare",
      text: "Langsamer Rhythmus, Sonnenuntergänge am Meer und Tage für Strände und Orte in der Umgebung.",
    },
    {
      title: "Familien",
      text: "Bequeme Räume, Pool und Meer in der Nähe: ein Gleichgewicht zwischen Erholung für die Eltern und Spaß für die Kleinen.",
    },
    {
      title: "Gäste aus Nordeuropa",
      text: "Mai, Juni und September sind für Gäste aus Nordeuropa oft die besten Monate: das Meer ist noch angenehm, es ist weniger los, und die Aufenthalte in Capo Rizzuto sind gepflegt, mit mehr Raum, die Küste in Ruhe zu erleben.",
    },
  ],
  band: {
    title: "Sprechen Sie direkt mit uns",
    text: "Dasselbe Team, das die Anlage führt: kein Callcenter, keine OTA.",
    call: "Anrufen: +39 333 577 3390",
    form: "Formular und E-Mail",
  },
  closing: {
    title: "Wählen Sie die Einheit und schließen Sie die Anfrage ab",
    text: "Jedes Lodge ist anders, vom Paar bis zur großen Familie. Danach schließen Sie den Kreis über das Formular oder WhatsApp.",
    apartments: "Alle Wohnungen",
    home: "Startseite Villa Olimpia",
  },
  grid: {
    title: "Lodges",
    note: "Die Airbnb-Kalender werden automatisch synchronisiert. Die endgültige Verfügbarkeit bestätigen wir immer für die angefragten Daten.",
    badgeVerified: "KALENDER SYNCHRONISIERT",
    badgeStale: "ZU AKTUALISIEREN",
    badgeLoading: "PRÜFUNG…",
    badgeUnknown: "DATEN PRÜFEN",
    guestsLabel: "Bis zu {guests} Gäste",
    rateNote: "Preis und Verfügbarkeit werden nach Daten und Gästezahl bestätigt.",
    requestLodge: "Dieses Lodge anfragen",
  },
  form: {
    title: "Angebot für diesen Zeitraum",
    intro:
      "Füllen Sie das Formular aus: Die Anfrage erreicht unser Betriebspostfach, und wir antworten mit einem klaren Vorschlag, ohne Zwischenhändler.",
    immediateLabel: "Sofortiger Kontakt",
    immediateNote: "Am selben Werktag · Villa Olimpia direkt",
    call: "Anrufen",
    fullForm: "Vollständiges Formular",
    name: "Name",
    email: "E-Mail",
    phone: "Telefon",
    guests: "Gäste",
    checkIn: "Check-in",
    checkOut: "Check-out",
    lodge: "Bevorzugtes Lodge",
    noPreference: "Keine Präferenz",
    message: "Nachricht (optional)",
    consent: "Ich möchte Neuigkeiten und Angebote über den direkten Kanal erhalten (Opt-in).",
    submit: "Verfügbarkeit im September anfragen",
    sending: "Wird gesendet…",
    sent: "Anfrage gesendet",
    error: "Senden fehlgeschlagen. Bitte erneut versuchen oder WhatsApp nutzen.",
    footer:
      "Ihre Anfrage erreicht unseren Betriebskanal: Wir antworten so schnell wie möglich, in der Regel innerhalb eines Werktags.",
  },
  faqHeading: `FAQ · September ${SEASONAL_CAMPAIGN_YEAR}`,
  faq: [
    {
      q: "Passt der September für Gäste aus Nordeuropa?",
      a: "Ja: Für Gäste aus Nordeuropa verbindet der September ein noch angenehmes Meer, weniger Andrang und ein besseres Verhältnis als in der Hochsaison. Es ist der Monat für Paare, flexible Familien und Aufenthalte ab 7 Nächten.",
    },
    {
      q: "Direkt buchen oder über ein Portal?",
      a: "Für den September lohnt es sich, uns direkt zu schreiben: Wir können das passende Lodge vorschlagen, mehrere Wohnungen derselben Anlage prüfen und mit einem klaren Preis ohne OTA-Provision antworten.",
    },
    {
      q: "Sind Pool und Meer noch nutzbar?",
      a: "Im September ist das Meer oft noch angenehm. Pool und saisonale Leistungen bestätigen wir immer in unserer Antwort, abhängig von den genauen Daten Ihres Aufenthalts.",
    },
  ],
}

const fr: SeasonalLandingCopy = {
  monthName: "septembre",
  monthLabel: `Septembre ${SEASONAL_CAMPAIGN_YEAR}`,
  breadcrumb: "Septembre à Capo Rizzuto",
  hero: {
    badge: "Septembre · quiet luxury au bord de la mer",
    title: "Septembre à Capo Rizzuto : le mois le plus élégant au bord de la mer",
    intro:
      "Villa Olimpia est une base idéale pour qui aime la Calabre authentique : piscine partagée, neuf appartements indépendants et l'Aire Marine Protégée à deux pas. En septembre, la mer se vit dans une lumière particulière, avec moins de monde et un séjour plus détendu — sans renoncer à la qualité ni aux services.",
    ctaPrimary: "Disponibilités en septembre",
    ctaSecondary: "Formulaire de réservation directe",
    note: "Canal direct Villa Olimpia · réponse sous un jour ouvré",
  },
  reasonsTitle: "Pourquoi choisir septembre à Villa Olimpia",
  reasons: [
    {
      title: "La mer est encore chaude",
      text: "Pendant de nombreuses semaines de septembre, la mer reste accueillante : des baignades agréables et des journées lumineuses sans la cohue d'août.",
    },
    {
      title: "Moins de monde",
      text: "Les plages et les routes sont plus agréables : vous profitez de Capopiccolo, de la Spiaggia dei Gigli et de l'Aire Marine Protégée avec plus d'espace et de calme.",
    },
    {
      title: "Une atmosphère plus détendue",
      text: "Le rythme est plus élégant : piscine, terrasses et moments conviviaux à la villa, sans le stress de la haute saison.",
    },
    {
      title: "De la qualité pour les familles et les couples",
      text: "Idéal si vous cherchez un séjour soigné, avec des services clairs et un contact direct avec ceux qui gèrent Villa Olimpia.",
    },
  ],
  idealTitle: "Idéal pour",
  ideal: [
    {
      title: "Couples",
      text: "Un rythme lent, des couchers de soleil sur la mer et des journées à consacrer aux plages et aux villages voisins.",
    },
    {
      title: "Familles",
      text: "Des espaces confortables, une piscine et la mer tout près : l'équilibre entre le repos des parents et le plaisir des plus petits.",
    },
    {
      title: "Voyageurs d'Europe du Nord",
      text: "Mai, juin et septembre sont souvent les meilleurs mois pour ceux qui viennent d'Europe du Nord : mer encore agréable, moins de monde et des séjours soignés à Capo Rizzuto, avec plus d'espace pour vivre la côte à un rythme tranquille.",
    },
  ],
  band: {
    title: "Parlez-nous directement",
    text: "La même équipe qui gère la propriété : ni centre d'appels, ni OTA.",
    call: "Appeler le +39 333 577 3390",
    form: "Formulaire et e-mail",
  },
  closing: {
    title: "Choisissez le logement et finalisez la demande",
    text: "Chaque lodge est différent, du couple à la grande famille. Ensuite, bouclez la boucle avec le formulaire ou sur WhatsApp.",
    apartments: "Tous les appartements",
    home: "Accueil Villa Olimpia",
  },
  grid: {
    title: "Lodges",
    note: "Les calendriers Airbnb sont synchronisés automatiquement. La disponibilité finale est toujours confirmée pour les dates demandées.",
    badgeVerified: "CALENDRIER SYNCHRONISÉ",
    badgeStale: "À METTRE À JOUR",
    badgeLoading: "VÉRIFICATION…",
    badgeUnknown: "VÉRIFIEZ VOS DATES",
    guestsLabel: "Jusqu'à {guests} personnes",
    rateNote: "Tarif et disponibilité confirmés selon vos dates et le nombre de personnes.",
    requestLodge: "Demander ce lodge",
  },
  form: {
    title: "Un devis pour cette période",
    intro:
      "Remplissez le formulaire : la demande arrive sur notre boîte opérationnelle et nous répondons avec une proposition claire, sans intermédiaires.",
    immediateLabel: "Contact immédiat",
    immediateNote: "Le jour ouvré même · Villa Olimpia en direct",
    call: "Appeler",
    fullForm: "Formulaire complet",
    name: "Nom",
    email: "E-mail",
    phone: "Téléphone",
    guests: "Personnes",
    checkIn: "Arrivée",
    checkOut: "Départ",
    lodge: "Lodge préféré",
    noPreference: "Aucune préférence",
    message: "Message (facultatif)",
    consent: "Je souhaite recevoir des actualités et des offres sur le canal direct (opt-in).",
    submit: "Demander les disponibilités de septembre",
    sending: "Envoi…",
    sent: "Demande envoyée",
    error: "Échec de l'envoi. Réessayez ou utilisez WhatsApp.",
    footer:
      "Votre demande arrive sur notre canal opérationnel : nous répondons dès que possible, en général sous un jour ouvré.",
  },
  faqHeading: `FAQ · septembre ${SEASONAL_CAMPAIGN_YEAR}`,
  faq: [
    {
      q: "Septembre convient-il aux voyageurs d'Europe du Nord ?",
      a: "Oui : pour ceux qui arrivent d'Europe du Nord, septembre réunit une mer encore agréable, moins de monde et un meilleur rapport qualité-prix qu'en haute saison. C'est le mois à privilégier pour les couples, les familles flexibles et les séjours de 7 nuits et plus.",
    },
    {
      q: "Vaut-il mieux réserver en direct ou via un portail ?",
      a: "Pour septembre, il vaut mieux nous écrire directement : nous pouvons proposer le lodge le plus adapté, vérifier plusieurs appartements dans la même propriété et répondre avec un tarif clair, sans commission d'OTA.",
    },
    {
      q: "La piscine et la mer sont-elles encore utilisables ?",
      a: "En septembre, la mer est souvent encore agréable. Pour la piscine et les services saisonniers, nous confirmons toujours dans notre réponse, selon les dates exactes du séjour.",
    },
  ],
}

const no: SeasonalLandingCopy = {
  monthName: "september",
  monthLabel: `September ${SEASONAL_CAMPAIGN_YEAR}`,
  breadcrumb: "September på Capo Rizzuto",
  hero: {
    badge: "September · rolig luksus ved havet",
    title: "September på Capo Rizzuto: den fineste måneden ved havet",
    intro:
      "Villa Olimpia er et godt utgangspunkt for deg som liker det ekte Calabria: felles basseng, ni selvstendige leiligheter og det marine verneområdet noen få skritt unna. I september får havet et helt spesielt lys, det er færre folk og oppholdet blir roligere — uten at du gir slipp på kvalitet og service.",
    ctaPrimary: "Ledige datoer i september",
    ctaSecondary: "Skjema for direkte booking",
    note: "Villa Olimpias direkte kanal · svar innen en virkedag",
  },
  reasonsTitle: "Hvorfor velge september på Villa Olimpia",
  reasons: [
    {
      title: "Havet er fortsatt varmt",
      text: "Store deler av september er havet fortsatt innbydende: gode bad og lyse dager uten trengselen fra august.",
    },
    {
      title: "Færre folk",
      text: "Strender og veier er lettere å leve med: du får Capopiccolo, Spiaggia dei Gigli og det marine verneområdet med bedre plass og mer ro.",
    },
    {
      title: "Roligere stemning",
      text: "Tempoet er finere: basseng, terrasser og hyggelige stunder i villaen uten stresset fra høysesongen.",
    },
    {
      title: "Kvalitet for familier og par",
      text: "Ideelt hvis du vil ha et gjennomtenkt opphold, med tydelige tjenester og direkte kontakt med dem som driver Villa Olimpia.",
    },
  ],
  idealTitle: "Passer for",
  ideal: [
    {
      title: "Par",
      text: "Rolig tempo, solnedganger over havet og dager til strender og landsbyer i nærheten.",
    },
    {
      title: "Familier",
      text: "God plass, basseng og havet like ved: balanse mellom hvile for foreldrene og moro for de minste.",
    },
    {
      title: "Gjester fra Nord-Europa",
      text: "Mai, juni og september er ofte de beste månedene for dem som kommer fra Nord-Europa: havet er fortsatt behagelig, det er færre folk, og oppholdene på Capo Rizzuto er godt ivaretatt, med bedre plass til å oppleve kysten i rolig tempo.",
    },
  ],
  band: {
    title: "Snakk direkte med oss",
    text: "Samme team som driver stedet: ingen kundesenter, ingen OTA.",
    call: "Ring +39 333 577 3390",
    form: "Skjema og e-post",
  },
  closing: {
    title: "Velg enheten og fullfør forespørselen",
    text: "Hver lodge er forskjellig, fra par til store familier. Deretter fullfører du med skjemaet eller på WhatsApp.",
    apartments: "Alle leiligheter",
    home: "Villa Olimpia hjem",
  },
  grid: {
    title: "Lodger",
    note: "Airbnb-kalenderne synkroniseres automatisk. Endelig tilgjengelighet bekreftes alltid for datoene du spør om.",
    badgeVerified: "KALENDER SYNKRONISERT",
    badgeStale: "MÅ OPPDATERES",
    badgeLoading: "SJEKKER…",
    badgeUnknown: "SJEKK DATOENE",
    guestsLabel: "Opptil {guests} gjester",
    rateNote: "Pris og tilgjengelighet bekreftes ut fra datoer og antall gjester.",
    requestLodge: "Spør om denne lodgen",
  },
  form: {
    title: "Tilbud for denne perioden",
    intro:
      "Fyll ut skjemaet: forespørselen kommer til vår driftspostkasse, og vi svarer med et tydelig forslag, uten mellomledd.",
    immediateLabel: "Direkte kontakt",
    immediateNote: "Samme virkedag · Villa Olimpia direkte",
    call: "Ring",
    fullForm: "Fullstendig skjema",
    name: "Navn",
    email: "E-post",
    phone: "Telefon",
    guests: "Gjester",
    checkIn: "Innsjekk",
    checkOut: "Utsjekk",
    lodge: "Ønsket lodge",
    noPreference: "Ingen preferanse",
    message: "Melding (valgfritt)",
    consent: "Jeg vil gjerne motta nyheter og tilbud på den direkte kanalen (samtykke).",
    submit: "Spør om ledige datoer i september",
    sending: "Sender…",
    sent: "Forespørsel sendt",
    error: "Sendingen mislyktes. Prøv igjen eller bruk WhatsApp.",
    footer:
      "Forespørselen kommer til driftskanalen vår: vi svarer så snart vi kan, vanligvis innen en virkedag.",
  },
  faqHeading: `FAQ · september ${SEASONAL_CAMPAIGN_YEAR}`,
  faq: [
    {
      q: "Passer september for gjester fra Nord-Europa?",
      a: "Ja: for dem som kommer fra Nord-Europa kombinerer september et hav som fortsatt er behagelig, færre folk og bedre verdi enn i høysesongen. Det er måneden vi anbefaler for par, fleksible familier og opphold fra 7 netter.",
    },
    {
      q: "Er det best å booke direkte eller via portal?",
      a: "For september lønner det seg å skrive direkte til oss: vi kan foreslå den lodgen som passer best, sjekke flere leiligheter på samme sted og svare med en tydelig pris uten OTA-provisjon.",
    },
    {
      q: "Kan bassenget og havet fortsatt brukes?",
      a: "I september er havet ofte fortsatt behagelig. Basseng og sesongtjenester bekrefter vi alltid i svaret vårt, ut fra de nøyaktige datoene for oppholdet.",
    },
  ],
}

const sv: SeasonalLandingCopy = {
  monthName: "september",
  monthLabel: `September ${SEASONAL_CAMPAIGN_YEAR}`,
  breadcrumb: "September på Capo Rizzuto",
  hero: {
    badge: "September · lugn lyx vid havet",
    title: "September på Capo Rizzuto: den finaste månaden vid havet",
    intro:
      "Villa Olimpia är en bra utgångspunkt för dig som gillar det äkta Kalabrien: gemensam pool, nio fristående lägenheter och det marina naturreservatet bara några steg bort. I september får havet ett alldeles särskilt ljus, det är färre människor och vistelsen blir lugnare — utan att du ger avkall på kvalitet och service.",
    ctaPrimary: "Lediga datum i september",
    ctaSecondary: "Formulär för direktbokning",
    note: "Villa Olimpias direkta kanal · svar inom en arbetsdag",
  },
  reasonsTitle: "Varför välja september på Villa Olimpia",
  reasons: [
    {
      title: "Havet är fortfarande varmt",
      text: "Under stora delar av september är havet fortfarande inbjudande: sköna bad och ljusa dagar utan trängseln i augusti.",
    },
    {
      title: "Färre människor",
      text: "Stränder och vägar är lättare att leva med: du njuter av Capopiccolo, Spiaggia dei Gigli och det marina naturreservatet med mer utrymme och lugn.",
    },
    {
      title: "Lugnare stämning",
      text: "Tempot är finare: pool, terrasser och trevliga stunder i villan utan högsäsongens stress.",
    },
    {
      title: "Kvalitet för familjer och par",
      text: "Perfekt om du vill ha en genomtänkt vistelse, med tydliga tjänster och direkt kontakt med dem som driver Villa Olimpia.",
    },
  ],
  idealTitle: "Passar för",
  ideal: [
    {
      title: "Par",
      text: "Lugnt tempo, solnedgångar över havet och dagar för stränder och byar i närheten.",
    },
    {
      title: "Familjer",
      text: "Gott om plats, pool och havet nära: balans mellan vila för föräldrarna och lek för de minsta.",
    },
    {
      title: "Gäster från Nordeuropa",
      text: "Maj, juni och september är ofta de bästa månaderna för dem som kommer från Nordeuropa: havet är fortfarande behagligt, det är färre människor, och vistelserna på Capo Rizzuto är väl omhändertagna, med mer utrymme att uppleva kusten i lugn takt.",
    },
  ],
  band: {
    title: "Prata direkt med oss",
    text: "Samma team som driver anläggningen: inget callcenter, ingen OTA.",
    call: "Ring +39 333 577 3390",
    form: "Formulär och e-post",
  },
  closing: {
    title: "Välj enheten och slutför förfrågan",
    text: "Varje lodge är olika, från par till stora familjer. Sedan avslutar du med formuläret eller på WhatsApp.",
    apartments: "Alla lägenheter",
    home: "Villa Olimpia hem",
  },
  grid: {
    title: "Lodger",
    note: "Airbnb-kalendrarna synkroniseras automatiskt. Den slutliga tillgängligheten bekräftas alltid för de datum du frågar om.",
    badgeVerified: "KALENDER SYNKAD",
    badgeStale: "BEHÖVER UPPDATERAS",
    badgeLoading: "KONTROLLERAR…",
    badgeUnknown: "KONTROLLERA DATUMEN",
    guestsLabel: "Upp till {guests} gäster",
    rateNote: "Pris och tillgänglighet bekräftas utifrån datum och antal gäster.",
    requestLodge: "Fråga om den här lodgen",
  },
  form: {
    title: "Offert för den här perioden",
    intro:
      "Fyll i formuläret: förfrågan kommer till vår driftsbrevlåda och vi svarar med ett tydligt förslag, utan mellanhänder.",
    immediateLabel: "Direkt kontakt",
    immediateNote: "Samma arbetsdag · Villa Olimpia direkt",
    call: "Ring",
    fullForm: "Fullständigt formulär",
    name: "Namn",
    email: "E-post",
    phone: "Telefon",
    guests: "Gäster",
    checkIn: "Incheckning",
    checkOut: "Utcheckning",
    lodge: "Önskad lodge",
    noPreference: "Ingen preferens",
    message: "Meddelande (valfritt)",
    consent: "Jag vill få nyheter och erbjudanden via den direkta kanalen (opt-in).",
    submit: "Fråga om lediga datum i september",
    sending: "Skickar…",
    sent: "Förfrågan skickad",
    error: "Sändningen misslyckades. Försök igen eller använd WhatsApp.",
    footer:
      "Din förfrågan kommer till vår driftskanal: vi svarar så snart vi kan, oftast inom en arbetsdag.",
  },
  faqHeading: `FAQ · september ${SEASONAL_CAMPAIGN_YEAR}`,
  faq: [
    {
      q: "Passar september för gäster från Nordeuropa?",
      a: "Ja: för dem som kommer från Nordeuropa kombinerar september ett hav som fortfarande är behagligt, färre människor och bättre värde än under högsäsong. Det är månaden vi rekommenderar för par, flexibla familjer och vistelser från 7 nätter.",
    },
    {
      q: "Är det bättre att boka direkt eller via en portal?",
      a: "För september lönar det sig att skriva direkt till oss: vi kan föreslå den lodge som passar bäst, kontrollera flera lägenheter på samma anläggning och svara med ett tydligt pris utan OTA-provision.",
    },
    {
      q: "Går poolen och havet fortfarande att använda?",
      a: "I september är havet ofta fortfarande behagligt. Pool och säsongstjänster bekräftar vi alltid i vårt svar, utifrån de exakta datumen för vistelsen.",
    },
  ],
}

const COPY_BY_LOCALE: Record<SupportedLocale, SeasonalLandingCopy> = {
  it,
  en,
  de,
  fr,
  no,
  sv,
  // `nl` non ha una landing stagionale propria (viene reindirizzato alla versione italiana):
  // la voce esiste solo per completezza del record.
  nl: it,
}

export function getSeasonalLandingCopy(locale: SupportedLocale = DEFAULT_LOCALE): SeasonalLandingCopy {
  return COPY_BY_LOCALE[locale] ?? it
}
