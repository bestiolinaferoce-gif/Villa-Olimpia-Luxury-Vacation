# ANALISI 2.1 — Schema Booking esistente (READ ONLY)

## Esito ricerca
- **Nessun tipo `Booking`** trovato nel codebase.
- **Nessuno store Zustand** presente (package.json non include zustand).
- **Nessun endpoint interno** per inserimento booking.

## Strutture rilevate
- `data/apartments.ts`: tipo `Apartment` con id, name, floor, guests, etc. (9 appartamenti).
- `components/booking-form.tsx`: `bookingSchema` (zod) con name, email, phone, checkIn, checkOut, guests, apartment, agency, message. Il form invia via mailto/WhatsApp, non persiste.
- `lodgeId` nel nostro sistema: mappabile a apartment id (es. lodge-1 → Frangipane id 1).

## Valori status possibili
Nessuno schema `status` definito. Useremo `"pending"` come valore standard per nuove richieste.

## Strategia adottata
Creare un file di persistenza `data/booking-board.json` che simula lo store. L'adapter produce oggetti compatibili con un futuro tipo Booking. Quando verrà aggiunto un vero Booking Board (Zustand o API), si sostituirà solo la funzione di persistenza.
