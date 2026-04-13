/**
 * Copy for BookingForm (labels, validation, outbound message templates).
 * Italian default fills optional sections (picker, trustRow) when locales omit them.
 */

export type BookingFormCopyResolved = {
  labels: {
    name: string
    email: string
    phone: string
    guests: string
    checkIn: string
    checkOut: string
    apartment: string
    agency: string
    message: string
  }
  placeholders: {
    name: string
    email: string
    phone: string
    guests: string
    agency: string
    message: string
  }
  validation: {
    nameMin: string
    emailInvalid: string
    phoneMin: string
    checkInRequired: string
    checkOutRequired: string
    guestsRequired: string
    invalidDateRange: string
  }
  apartmentOptions: {
    labelPrefix: string
    noPreference: string
  }
  status: {
    submitting: string
    submit: string
    submitUnavailable: string
    submitFailed: string
    requestReadyTitle: string
    requestReadyDescription: string
    sendAnother: string
  }
  helperText: string
  quickActions: {
    email: string
    whatsapp: string
  }
  messageTemplate: {
    subject: string
    title: string
    dates: string
    guests: string
    apartment: string
    source: string
    sourceLabel: string
    noPreference: string
    additionalDetails: string
    contactDetails: string
    name: string
    email: string
    phone: string
    agency: string
    notProvided: string
    utmSource: string
    utmMedium: string
    utmCampaign: string
    message: string
    noAdditionalMessage: string
    emailFallback: string
    whatsappFallback: string
  }
  picker: {
    selectRangePlaceholder: string
    close: string
    dateRangeLabel: string
  }
  trustRow: {
    direct: string
    fast: string
    clear: string
  }
}

export type BookingFormCopy = Omit<BookingFormCopyResolved, "picker" | "trustRow"> & {
  picker?: Partial<BookingFormCopyResolved["picker"]>
  trustRow?: Partial<BookingFormCopyResolved["trustRow"]>
}

export const DEFAULT_BOOKING_FORM_COPY: BookingFormCopyResolved = {
  labels: {
    name: "Nome e Cognome *",
    email: "Email *",
    phone: "Telefono *",
    guests: "Numero Ospiti *",
    checkIn: "Check-in *",
    checkOut: "Check-out *",
    apartment: "Appartamento preferito",
    agency: "Agenzia (opzionale)",
    message: "Messaggio",
  },
  placeholders: {
    name: "Mario Rossi",
    email: "mario.rossi@email.com",
    phone: "+39 123 456 7890",
    guests: "2",
    agency: "Nome agenzia o tour operator",
    message: "Hai domande o richieste speciali?",
  },
  validation: {
    nameMin: "Il nome deve contenere almeno 2 caratteri",
    emailInvalid: "Email non valida",
    phoneMin: "Numero di telefono non valido",
    checkInRequired: "Seleziona una data di check-in",
    checkOutRequired: "Seleziona una data di check-out",
    guestsRequired: "Seleziona il numero di ospiti",
    invalidDateRange: "Check-out deve essere successivo al check-in.",
  },
  apartmentOptions: {
    labelPrefix: "Appartamento",
    noPreference: "Nessuna preferenza",
  },
  status: {
    submitting: "Invio in corso...",
    submit: "Verifica disponibilità",
    submitUnavailable:
      "Invio automatico non disponibile in questo momento. Ti apriamo WhatsApp con il messaggio già compilato.",
    submitFailed:
      "Invio automatico non riuscito. Ti apriamo WhatsApp con il messaggio già compilato.",
    requestReadyTitle: "Richiesta pronta",
    requestReadyDescription:
      "Abbiamo ricevuto la tua richiesta. Se non vedi la mail in uscita, puoi inviarla via WhatsApp o email con i pulsanti qui sotto.",
    sendAnother: "Invia un'altra richiesta",
  },
  helperText:
    "Prenotando da questo form parli direttamente con Villa Olimpia: nessuna commissione di portali e migliore tariffa disponibile sulle stesse date. Soggiorni di 7+ notti: sconto dedicato. Cancellazione flessibile fino a 30 giorni prima dell'arrivo.",
  quickActions: {
    email: "Invia via Email",
    whatsapp: "Scrivi su WhatsApp",
  },
  messageTemplate: {
    subject: "Richiesta Preventivo",
    title: "Richiesta disponibilità Villa Olimpia:",
    dates: "Date",
    guests: "Ospiti",
    apartment: "Appartamento",
    source: "Fonte",
    sourceLabel: "sito ufficiale",
    noPreference: "Nessuna preferenza",
    additionalDetails: "Dettagli aggiuntivi:",
    contactDetails: "Dettagli contatto:",
    name: "Nome",
    email: "Email",
    phone: "Telefono",
    agency: "Agenzia",
    notProvided: "Non indicata",
    utmSource: "UTM Source",
    utmMedium: "UTM Medium",
    utmCampaign: "UTM Campaign",
    message: "Messaggio",
    noAdditionalMessage: "Nessun messaggio aggiuntivo",
    emailFallback: "Informazioni Villa Olimpia",
    whatsappFallback: "Richiesta disponibilità Villa Olimpia:\nDate: \nOspiti: \nAppartamento: \nFonte: sito ufficiale",
  },
  picker: {
    selectRangePlaceholder: "Seleziona date",
    close: "Chiudi",
    dateRangeLabel: "Seleziona date di check-in e check-out *",
  },
  trustRow: {
    direct: "Contatto diretto",
    fast: "Risposta rapida",
    clear: "Dettagli chiari",
  },
}

/** English form copy — used by EN contact and EN prenota pages */
export const EN_BOOKING_FORM_COPY: BookingFormCopy = {
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
    submitFailed: "Automatic sending failed. We are opening WhatsApp with your prefilled message.",
    requestReadyTitle: "Request received",
    requestReadyDescription:
      "We have received your request and will reply within 24 hours with availability and pricing.",
    sendAnother: "Send another request",
  },
  helperText:
    "With this form you speak directly with Villa Olimpia: no OTA commissions and the best available rate. Stays of 7+ nights get a dedicated discount. Flexible cancellation up to 30 days before arrival.",
  quickActions: {
    email: "Send by email",
    whatsapp: "Write on WhatsApp",
  },
  messageTemplate: {
    subject: "Availability request",
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
    whatsappFallback:
      "Villa Olimpia availability request:\nDates: \nGuests: \nApartment: \nSource: official website",
  },
  picker: {
    selectRangePlaceholder: "Select dates",
    close: "Close",
    dateRangeLabel: "Select check-in and check-out dates *",
  },
  trustRow: {
    direct: "Direct contact",
    fast: "Fast reply",
    clear: "Clear details",
  },
}

export function resolveBookingFormCopy(copy?: BookingFormCopy): BookingFormCopyResolved {
  if (!copy) return DEFAULT_BOOKING_FORM_COPY
  return {
    ...DEFAULT_BOOKING_FORM_COPY,
    ...copy,
    labels: { ...DEFAULT_BOOKING_FORM_COPY.labels, ...copy.labels },
    placeholders: { ...DEFAULT_BOOKING_FORM_COPY.placeholders, ...copy.placeholders },
    validation: { ...DEFAULT_BOOKING_FORM_COPY.validation, ...copy.validation },
    apartmentOptions: { ...DEFAULT_BOOKING_FORM_COPY.apartmentOptions, ...copy.apartmentOptions },
    status: { ...DEFAULT_BOOKING_FORM_COPY.status, ...copy.status },
    quickActions: { ...DEFAULT_BOOKING_FORM_COPY.quickActions, ...copy.quickActions },
    messageTemplate: { ...DEFAULT_BOOKING_FORM_COPY.messageTemplate, ...copy.messageTemplate },
    picker: { ...DEFAULT_BOOKING_FORM_COPY.picker, ...copy.picker },
    trustRow: { ...DEFAULT_BOOKING_FORM_COPY.trustRow, ...copy.trustRow },
  }
}
