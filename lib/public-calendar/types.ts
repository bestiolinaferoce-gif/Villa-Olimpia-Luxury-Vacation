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
  status: "pending";
  createdAt: string;
};
