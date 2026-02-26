/**
 * Schema per richieste di prenotazione provenienti da utenti pubblici (anonimi).
 * Isolato dal Booking Board interno - nessuna dipendenza da altri moduli.
 */

export type PublicBookingRequest = {
  id: string;
  lodgeId: string;
  checkIn: string;
  checkOut: string;
  guestName: string;
  guestEmail: string;
  guestPhone?: string;
  guests: number;
  notes?: string;
  status: "pending" | "injected";
  createdAt: string;
};

/**
 * Schema target per integrazione con Booking Board.
 * Definizione locale: nessun tipo Booking esistente nel codebase (vedi ANALISI_BOOKING_BOARD.md).
 * TODO: verificare compatibilità status quando il Board reale sarà integrato.
 */
export type Booking = {
  id: string;
  lodgeId: string;
  checkIn: string;
  checkOut: string;
  guestName: string;
  guestEmail: string;
  guestPhone?: string;
  guests: number;
  notes?: string;
  status: "pending" | "confirmed" | "cancelled" | "injected";
};
