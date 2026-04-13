"use client"

import { useMemo } from "react"
import { BookingForm } from "@/components/booking-form"
import type { BookingFormCopy } from "@/lib/booking-form-copy"
import { DEFAULT_BOOKING_FORM_COPY } from "@/lib/booking-form-copy"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, MessageCircle, Sparkles, Clock, Waves, Heart } from "lucide-react"
import { trackWhatsAppClick } from "@/components/analytics/google-analytics"
import { Breadcrumb } from "@/components/breadcrumb"
import { ShareKit, type ShareKitCopy } from "@/components/conversion/share-kit"
import { TrackContactSource } from "@/components/analytics/track-contact-source"
import { useI18n } from "@/components/i18n-provider"
import { localizeIfTranslated } from "@/lib/i18n/routing"
import type { Locale } from "@/lib/i18n/config"

type ContactPageCopy = {
  breadcrumbLabel: string
  badge: string
  title: string
  intro: string
  chips: {
    fastReply: string
    closeToSea: string
    familyFriendly: string
    flexibleCancellation: string
    longStayDiscount: string
  }
  quoteCard: {
    title: string
    description: string
  }
  directContacts: {
    title: string
    description: string
    phone: string
    email: string
    address: string
    openMaps: string
  }
  b2b: {
    title: string
    description: string
    cta: string
    note: string
  }
  whatsapp: {
    title: string
    description: string
    primary: string
    secondary: string
  }
  availability: {
    title: string
    mondayFriday: string
    saturday: string
    sunday: string
  }
  share: ShareKitCopy
  form: BookingFormCopy
}

const contactPageCopy: Record<Locale, ContactPageCopy> = {
  it: {
    breadcrumbLabel: "Contatti",
    badge: "Risposta veloce, assistenza reale",
    title: "Prenota la tua vacanza a Villa Olimpia",
    intro:
      "Raccontaci le tue date e ti rispondiamo con un preventivo preciso. Prenotando qui hai il canale diretto con Villa Olimpia, senza commissioni di portali, con piscina condivisa, giardino mediterraneo e mare a pochi passi.",
    chips: {
      fastReply: "Risposta entro 24h",
      closeToSea: "A 100m dal mare",
      familyFriendly: "Perfetto per famiglie",
      flexibleCancellation: "Cancellazione flessibile fino a 30 giorni prima",
      longStayDiscount: "Sconto soggiorni 7+ notti (Giugno/Luglio)",
    },
    quoteCard: {
      title: "Richiedi un preventivo",
      description: "Inserisci le date e le preferenze. Ti risponderemo con la miglior proposta disponibile.",
    },
    directContacts: {
      title: "Contatti diretti",
      description: "Risposta immediata per urgenze o richieste rapide.",
      phone: "Telefono",
      email: "Email",
      address: "Indirizzo",
      openMaps: "Apri su Google Maps",
    },
    b2b: {
      title: "Sei un'agenzia?",
      description: "Collaboriamo con agenzie viaggi e tour operator per disponibilità e tariffe dedicate.",
      cta: "Richiedi collaborazione B2B",
      note: "Nel form a sinistra puoi compilare anche il campo Agenzia per una gestione prioritaria.",
    },
    whatsapp: {
      title: "WhatsApp immediato",
      description: "Scrivici ora per una risposta veloce.",
      primary: "WhatsApp: 333 577 3390",
      secondary: "WhatsApp: 333 577 3390",
    },
    availability: {
      title: "Orari di disponibilità",
      mondayFriday: "Lunedì - Venerdì",
      saturday: "Sabato",
      sunday: "Domenica",
    },
    share: {
      title: "Condividi e fai girare il passaparola",
      description: "A costo zero puoi aiutarci con un semplice messaggio. Ti forniamo il testo pronto.",
      shareText:
        "Consiglio Villa Olimpia a Capopiccolo: appartamenti con piscina a 100m dal mare. Rispondono entro 24h.",
      shareOnWhatsApp: "Condividi su WhatsApp",
      copyText: "Copia testo",
      copiedText: "Copiato",
    },
    form: DEFAULT_BOOKING_FORM_COPY,
  },
  en: {
    breadcrumbLabel: "Contact",
    badge: "Fast reply, real assistance",
    title: "Book your stay at Villa Olimpia",
    intro:
      "Tell us your travel dates and we will answer with a precise quote. Booking here means a direct channel with Villa Olimpia, no OTA commissions, a shared pool, Mediterranean garden and the sea just a short walk away.",
    chips: {
      fastReply: "Reply within 24h",
      closeToSea: "about 100 meters from the sandy beach",
      familyFriendly: "Perfect for families",
      flexibleCancellation: "Flexible cancellation up to 30 days before arrival",
      longStayDiscount: "Discount for stays of 7+ nights (June/July)",
    },
    quoteCard: {
      title: "Request a quote",
      description: "Enter your dates and preferences. We will reply with the best available option.",
    },
    directContacts: {
      title: "Direct contacts",
      description: "Fast response for urgent or quick requests.",
      phone: "Phone",
      email: "Email",
      address: "Address",
      openMaps: "Open in Google Maps",
    },
    b2b: {
      title: "Are you a travel agency?",
      description: "We work with travel agencies and tour operators for dedicated availability and rates.",
      cta: "Request B2B collaboration",
      note: "In the form you can also fill in the Agency field for priority handling.",
    },
    whatsapp: {
      title: "Instant WhatsApp",
      description: "Message us now for a quick answer.",
      primary: "WhatsApp: 333 577 3390",
      secondary: "WhatsApp backup: 333 577 3390",
    },
    availability: {
      title: "Availability hours",
      mondayFriday: "Monday - Friday",
      saturday: "Saturday",
      sunday: "Sunday",
    },
    share: {
      title: "Share Villa Olimpia",
      description: "A simple message can help us. We prepared the text for you.",
      shareText:
        "I recommend Villa Olimpia in Capopiccolo: apartments with outdoor shared swimming pool, about 100 meters from the sandy beach. They reply within 24h.",
      shareOnWhatsApp: "Share on WhatsApp",
      copyText: "Copy text",
      copiedText: "Copied",
    },
    form: {
      labels: {
        name: "Full name *",
        email: "Email *",
        phone: "Phone *",
        guests: "Guests *",
        checkIn: "Check-in *",
        checkOut: "Check-out *",
        apartment: "Preferred apartment",
        agency: "Agency (optional)",
        message: "Message",
      },
      placeholders: {
        name: "John Smith",
        email: "john.smith@email.com",
        phone: "+44 1234 567890",
        guests: "2",
        agency: "Agency or tour operator name",
        message: "Any questions or special requests?",
      },
      validation: {
        nameMin: "Name must contain at least 2 characters",
        emailInvalid: "Invalid email",
        phoneMin: "Invalid phone number",
        checkInRequired: "Select a check-in date",
        checkOutRequired: "Select a check-out date",
        guestsRequired: "Select the number of guests",
        invalidDateRange: "Check-out must be after check-in.",
      },
      apartmentOptions: {
        labelPrefix: "Apartment",
        noPreference: "No preference",
      },
      status: {
        submitting: "Sending...",
        submit: "Check availability",
        submitUnavailable:
          "Automatic sending is not available right now. We are opening WhatsApp with your prefilled message.",
        submitFailed:
          "Automatic sending failed. We are opening WhatsApp with your prefilled message.",
        requestReadyTitle: "Request ready",
        requestReadyDescription:
          "We received your request. If you do not see the outgoing email, you can still send it via WhatsApp or email with the buttons below.",
        sendAnother: "Send another request",
      },
      helperText:
        "With this form you speak directly with Villa Olimpia: no OTA commissions and the best rate available for the same dates. Stays of 7+ nights get a dedicated discount. Flexible cancellation up to 30 days before arrival.",
      quickActions: {
        email: "Send by email",
        whatsapp: "Write on WhatsApp",
      },
      messageTemplate: {
        subject: "Quote request",
        title: "Villa Olimpia availability request:",
        dates: "Dates",
        guests: "Guests",
        apartment: "Apartment",
        source: "Source",
        sourceLabel: "official website",
        noPreference: "No preference",
        additionalDetails: "Additional details:",
        contactDetails: "Contact details:",
        name: "Name",
        email: "Email",
        phone: "Phone",
        agency: "Agency",
        notProvided: "Not provided",
        utmSource: "UTM Source",
        utmMedium: "UTM Medium",
        utmCampaign: "UTM Campaign",
        message: "Message",
        noAdditionalMessage: "No additional message",
        emailFallback: "Villa Olimpia information",
        whatsappFallback: "Villa Olimpia availability request:\nDates: \nGuests: \nApartment: \nSource: official website",
      },
    },
  },
  de: {
    breadcrumbLabel: "Kontakt",
    badge: "Schnelle Antwort, echte Betreuung",
    title: "Buchen Sie Ihren Aufenthalt in der Villa Olimpia",
    intro:
      "Teilen Sie uns Ihre Reisedaten mit und wir antworten mit einem genauen Angebot. Hier buchen Sie direkt bei Villa Olimpia, ohne Portalprovisionen, mit Gemeinschaftspool, mediterranem Garten und Meer nur wenige Schritte entfernt.",
    chips: {
      fastReply: "Antwort innerhalb von 24h",
      closeToSea: "100m vom Meer",
      familyFriendly: "Perfekt für Familien",
      flexibleCancellation: "Flexible Stornierung bis 30 Tage vor Anreise",
      longStayDiscount: "Rabatt für Aufenthalte ab 7 Nächten (Juni/Juli)",
    },
    quoteCard: {
      title: "Angebot anfragen",
      description: "Geben Sie Ihre Daten und Wünsche ein. Wir antworten mit dem besten verfügbaren Angebot.",
    },
    directContacts: {
      title: "Direkte Kontakte",
      description: "Schnelle Antwort für dringende oder kurze Anfragen.",
      phone: "Telefon",
      email: "E-Mail",
      address: "Adresse",
      openMaps: "In Google Maps öffnen",
    },
    b2b: {
      title: "Sind Sie eine Reiseagentur?",
      description: "Wir arbeiten mit Reiseagenturen und Veranstaltern mit speziellen Verfügbarkeiten und Tarifen.",
      cta: "B2B-Zusammenarbeit anfragen",
      note: "Im Formular können Sie auch das Feld Agentur ausfüllen, um priorisiert betreut zu werden.",
    },
    whatsapp: {
      title: "Sofort per WhatsApp",
      description: "Schreiben Sie uns jetzt für eine schnelle Antwort.",
      primary: "WhatsApp: 333 577 3390",
      secondary: "WhatsApp Backup: 333 577 3390",
    },
    availability: {
      title: "Erreichbarkeit",
      mondayFriday: "Montag - Freitag",
      saturday: "Samstag",
      sunday: "Sonntag",
    },
    share: {
      title: "Villa Olimpia weiterempfehlen",
      description: "Mit einer einfachen Nachricht können Sie uns helfen. Den Text haben wir vorbereitet.",
      shareText:
        "Ich empfehle Villa Olimpia in Capopiccolo: Apartments mit Pool nur 100m vom Meer entfernt. Antwort innerhalb von 24h.",
      shareOnWhatsApp: "Per WhatsApp teilen",
      copyText: "Text kopieren",
      copiedText: "Kopiert",
    },
    form: {
      labels: {
        name: "Vor- und Nachname *",
        email: "E-Mail *",
        phone: "Telefon *",
        guests: "Gäste *",
        checkIn: "Check-in *",
        checkOut: "Check-out *",
        apartment: "Bevorzugtes Apartment",
        agency: "Agentur (optional)",
        message: "Nachricht",
      },
      placeholders: {
        name: "Max Mustermann",
        email: "max@email.de",
        phone: "+49 1234 567890",
        guests: "2",
        agency: "Name der Agentur oder des Veranstalters",
        message: "Haben Sie Fragen oder besondere Wünsche?",
      },
      validation: {
        nameMin: "Der Name muss mindestens 2 Zeichen enthalten",
        emailInvalid: "Ungültige E-Mail",
        phoneMin: "Ungültige Telefonnummer",
        checkInRequired: "Bitte Check-in-Datum auswählen",
        checkOutRequired: "Bitte Check-out-Datum auswählen",
        guestsRequired: "Bitte Anzahl der Gäste auswählen",
        invalidDateRange: "Check-out muss nach dem Check-in liegen.",
      },
      apartmentOptions: {
        labelPrefix: "Apartment",
        noPreference: "Keine Präferenz",
      },
      status: {
        submitting: "Wird gesendet...",
        submit: "Verfügbarkeit prüfen",
        submitUnavailable:
          "Automatischer Versand ist gerade nicht verfügbar. Wir öffnen WhatsApp mit Ihrer vorausgefüllten Nachricht.",
        submitFailed:
          "Automatischer Versand ist fehlgeschlagen. Wir öffnen WhatsApp mit Ihrer vorausgefüllten Nachricht.",
        requestReadyTitle: "Anfrage bereit",
        requestReadyDescription:
          "Wir haben Ihre Anfrage erhalten. Falls Sie keine ausgehende E-Mail sehen, können Sie sie unten per WhatsApp oder E-Mail senden.",
        sendAnother: "Weitere Anfrage senden",
      },
      helperText:
        "Mit diesem Formular sprechen Sie direkt mit Villa Olimpia: keine Portalprovisionen und der beste verfügbare Preis für dieselben Daten. Für Aufenthalte ab 7 Nächten gilt ein Sonderrabatt. Flexible Stornierung bis 30 Tage vor Anreise.",
      quickActions: {
        email: "Per E-Mail senden",
        whatsapp: "Über WhatsApp schreiben",
      },
      messageTemplate: {
        subject: "Angebotsanfrage",
        title: "Verfügbarkeitsanfrage Villa Olimpia:",
        dates: "Daten",
        guests: "Gäste",
        apartment: "Apartment",
        source: "Quelle",
        sourceLabel: "offizielle Website",
        noPreference: "Keine Präferenz",
        additionalDetails: "Zusätzliche Details:",
        contactDetails: "Kontaktdaten:",
        name: "Name",
        email: "E-Mail",
        phone: "Telefon",
        agency: "Agentur",
        notProvided: "Nicht angegeben",
        utmSource: "UTM Source",
        utmMedium: "UTM Medium",
        utmCampaign: "UTM Campaign",
        message: "Nachricht",
        noAdditionalMessage: "Keine zusätzliche Nachricht",
        emailFallback: "Villa Olimpia Informationen",
        whatsappFallback: "Verfügbarkeitsanfrage Villa Olimpia:\nDaten: \nGäste: \nApartment: \nQuelle: offizielle Website",
      },
    },
  },
  fr: {
    breadcrumbLabel: "Contact",
    badge: "Réponse rapide, assistance réelle",
    title: "Réservez votre séjour à Villa Olimpia",
    intro:
      "Indiquez-nous vos dates et nous vous répondrons avec un devis précis. Réserver ici signifie un contact direct avec Villa Olimpia, sans commission OTA, avec piscine partagée, jardin méditerranéen et mer à quelques pas.",
    chips: {
      fastReply: "Réponse sous 24h",
      closeToSea: "À 100m de la mer",
      familyFriendly: "Parfait pour les familles",
      flexibleCancellation: "Annulation flexible jusqu'à 30 jours avant l'arrivée",
      longStayDiscount: "Remise pour séjours de 7+ nuits (juin/juillet)",
    },
    quoteCard: {
      title: "Demander un devis",
      description: "Saisissez vos dates et préférences. Nous répondrons avec la meilleure proposition disponible.",
    },
    directContacts: {
      title: "Contacts directs",
      description: "Réponse immédiate pour les demandes urgentes ou rapides.",
      phone: "Téléphone",
      email: "E-mail",
      address: "Adresse",
      openMaps: "Ouvrir dans Google Maps",
    },
    b2b: {
      title: "Vous êtes une agence ?",
      description: "Nous collaborons avec les agences de voyage et tour-opérateurs avec disponibilités et tarifs dédiés.",
      cta: "Demander une collaboration B2B",
      note: "Dans le formulaire, vous pouvez aussi remplir le champ Agence pour un traitement prioritaire.",
    },
    whatsapp: {
      title: "WhatsApp immédiat",
      description: "Écrivez-nous maintenant pour une réponse rapide.",
      primary: "WhatsApp : 333 577 3390",
      secondary: "WhatsApp secours : 333 577 3390",
    },
    availability: {
      title: "Horaires de disponibilité",
      mondayFriday: "Lundi - Vendredi",
      saturday: "Samedi",
      sunday: "Dimanche",
    },
    share: {
      title: "Partagez Villa Olimpia",
      description: "Un simple message peut nous aider. Nous avons préparé le texte pour vous.",
      shareText:
        "Je recommande Villa Olimpia à Capopiccolo : appartements avec piscine à 100m de la mer. Réponse sous 24h.",
      shareOnWhatsApp: "Partager sur WhatsApp",
      copyText: "Copier le texte",
      copiedText: "Copié",
    },
    form: {
      labels: {
        name: "Nom complet *",
        email: "E-mail *",
        phone: "Téléphone *",
        guests: "Voyageurs *",
        checkIn: "Arrivée *",
        checkOut: "Départ *",
        apartment: "Appartement préféré",
        agency: "Agence (optionnel)",
        message: "Message",
      },
      placeholders: {
        name: "Jean Dupont",
        email: "jean.dupont@email.com",
        phone: "+33 1234 567890",
        guests: "2",
        agency: "Nom de l'agence ou du tour-opérateur",
        message: "Des questions ou des demandes particulières ?",
      },
      validation: {
        nameMin: "Le nom doit contenir au moins 2 caractères",
        emailInvalid: "E-mail invalide",
        phoneMin: "Numéro de téléphone invalide",
        checkInRequired: "Sélectionnez une date d'arrivée",
        checkOutRequired: "Sélectionnez une date de départ",
        guestsRequired: "Sélectionnez le nombre de voyageurs",
        invalidDateRange: "Le départ doit être après l'arrivée.",
      },
      apartmentOptions: {
        labelPrefix: "Appartement",
        noPreference: "Aucune préférence",
      },
      status: {
        submitting: "Envoi...",
        submit: "Vérifier la disponibilité",
        submitUnavailable:
          "L'envoi automatique n'est pas disponible pour le moment. Nous ouvrons WhatsApp avec votre message prérempli.",
        submitFailed:
          "L'envoi automatique a échoué. Nous ouvrons WhatsApp avec votre message prérempli.",
        requestReadyTitle: "Demande prête",
        requestReadyDescription:
          "Nous avons bien reçu votre demande. Si vous ne voyez pas l'e-mail sortant, vous pouvez toujours l'envoyer via WhatsApp ou e-mail avec les boutons ci-dessous.",
        sendAnother: "Envoyer une autre demande",
      },
      helperText:
        "Avec ce formulaire, vous parlez directement avec Villa Olimpia : aucune commission OTA et le meilleur tarif disponible aux mêmes dates. Les séjours de 7+ nuits bénéficient d'une remise dédiée. Annulation flexible jusqu'à 30 jours avant l'arrivée.",
      quickActions: {
        email: "Envoyer par e-mail",
        whatsapp: "Écrire sur WhatsApp",
      },
      messageTemplate: {
        subject: "Demande de devis",
        title: "Demande de disponibilité Villa Olimpia :",
        dates: "Dates",
        guests: "Voyageurs",
        apartment: "Appartement",
        source: "Source",
        sourceLabel: "site officiel",
        noPreference: "Aucune préférence",
        additionalDetails: "Détails supplémentaires :",
        contactDetails: "Coordonnées :",
        name: "Nom",
        email: "E-mail",
        phone: "Téléphone",
        agency: "Agence",
        notProvided: "Non indiquée",
        utmSource: "UTM Source",
        utmMedium: "UTM Medium",
        utmCampaign: "UTM Campaign",
        message: "Message",
        noAdditionalMessage: "Aucun message supplémentaire",
        emailFallback: "Informations Villa Olimpia",
        whatsappFallback: "Demande de disponibilité Villa Olimpia :\nDates : \nVoyageurs : \nAppartement : \nSource : site officiel",
      },
    },
  },
}

export default function ContactPageClient() {
  const { locale, t } = useI18n()
  const copy = useMemo(() => contactPageCopy[locale], [locale])
  const calendarLocale = useMemo(() => {
    const m: Record<Locale, string> = {
      it: "it-IT",
      en: "en-GB",
      de: "de-DE",
      fr: "fr-FR",
    }
    return m[locale] ?? "it-IT"
  }, [locale])
  const homeHref = localizeIfTranslated("/", locale)
  const contactHref = localizeIfTranslated("/contatti", locale)

  return (
    <div className="min-h-screen pt-20">
      <TrackContactSource />
      <Breadcrumb
        items={[{ label: copy.breadcrumbLabel }]}
        homeHref={homeHref}
        homeLabel={t.nav.home}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-ocean/15 via-primary/10 to-amber-50 py-16">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-primary/40 blur-3xl" />
          <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-sky-300/40 blur-3xl" />
        </div>
        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-primary shadow">
              <Sparkles className="h-4 w-4" />
              {copy.badge}
            </div>
            <h1 className="mt-6 text-4xl font-playfair font-bold text-slate-900 md:text-5xl">
              {copy.title}
            </h1>
            <p className="mt-4 text-lg text-slate-600">{copy.intro}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm text-slate-700 shadow">
                <Clock className="h-4 w-4 text-primary" />
                {copy.chips.fastReply}
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm text-slate-700 shadow">
                <Waves className="h-4 w-4 text-primary" />
                {copy.chips.closeToSea}
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm text-slate-700 shadow">
                <Heart className="h-4 w-4 text-primary" />
                {copy.chips.familyFriendly}
              </div>
              <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm text-slate-700 shadow border border-emerald-200">
                <span className="text-emerald-600 font-semibold">✓</span>
                {copy.chips.flexibleCancellation}
              </div>
              <div className="flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm text-slate-700 shadow border border-amber-200">
                <span className="text-amber-600 font-semibold">−</span>
                {copy.chips.longStayDiscount}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div id="prenota" className="scroll-mt-24">
            <Card className="border-2 border-primary/10 shadow-2xl">
              <CardHeader>
                <CardTitle>{copy.quoteCard.title}</CardTitle>
                <CardDescription>{copy.quoteCard.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <BookingForm copy={copy.form} calendarLocale={calendarLocale} />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <ShareKit copy={copy.share} path={contactHref} />

            <Card className="border-2 border-primary/10 bg-gradient-to-br from-white to-primary/5">
              <CardHeader>
                <CardTitle>{copy.directContacts.title}</CardTitle>
                <CardDescription>{copy.directContacts.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">{copy.directContacts.phone}</p>
                    <div className="space-y-1">
                      <a href="tel:+393335773390" className="block text-muted-foreground hover:text-primary">
                        +39 333 577 3390
                      </a>
                      <a href="tel:+393290479193" className="block text-muted-foreground hover:text-primary">
                        +39 329 047 9193
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">{copy.directContacts.email}</p>
                    <a href="mailto:villaolimpiacaporizzuto@gmail.com" className="text-muted-foreground hover:text-primary">
                      villaolimpiacaporizzuto@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">{copy.directContacts.address}</p>
                    <p className="text-muted-foreground">
                      Località Capopiccolo snc
                      <br />
                      Isola di Capo Rizzuto 88841 (KR)
                    </p>
                    <Button asChild variant="outline" size="sm" className="mt-3">
                      <a
                        href="https://maps.google.com/?q=Villa+Olimpia+Capo+Rizzuto"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {copy.directContacts.openMaps}
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/15 bg-gradient-to-br from-sky-50 to-white">
              <CardHeader>
                <CardTitle>{copy.b2b.title}</CardTitle>
                <CardDescription>{copy.b2b.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="luxury" className="w-full" asChild>
                  <a href="mailto:villaolimpiacaporizzuto@gmail.com?subject=Collaborazione%20Agenzia%20-%20Villa%20Olimpia">
                    {copy.b2b.cta}
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground">{copy.b2b.note}</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle>{copy.whatsapp.title}</CardTitle>
                <CardDescription>{copy.whatsapp.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="luxury" className="w-full" asChild>
                  <a href="https://wa.me/393335773390" target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick("contact_sidebar", locale)}>
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp · 333 577 3390
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10 bg-gradient-to-br from-amber-50 via-white to-sky-50">
              <CardHeader>
                <CardTitle>{copy.availability.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{copy.availability.mondayFriday}</span>
                    <span className="font-medium">9:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{copy.availability.saturday}</span>
                    <span className="font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{copy.availability.sunday}</span>
                    <span className="font-medium">10:00 - 16:00</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
