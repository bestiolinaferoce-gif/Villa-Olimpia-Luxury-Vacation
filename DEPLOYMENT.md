# Deploy — Sistema Prenotazione Pubblica e iCal

## Variabili d'ambiente richieste

| Chiave | Descrizione |
|-------|-------------|
| `PUBLIC_REQUEST_TOKEN` | Token per API public-request, inject, ical-sync |
| `LODGE_1_AIRBNB_ICAL_URL` | Feed iCal Airbnb lodge 1 |
| `LODGE_1_BOOKING_ICAL_URL` | Feed iCal Booking.com lodge 1 |
| `LODGE_2_AIRBNB_ICAL_URL` | ... |
| `LODGE_2_BOOKING_ICAL_URL` | ... |
| *(ripeti per lodge 3-9)* | |

## Checklist pre-produzione

- [ ] Tutti i test E2E (Fase 5) passati in preview
- [ ] Variabili d'ambiente configurate su Vercel
- [ ] `vercel.json` con cron `/api/ical-sync` (ogni 15 min)
- [ ] `.gitignore` include `/data/public-requests.json`, `/data/booking-board.json`, `/data/ical-cache/`
- [ ] Nessun `console.log` con dati sensibili
- [ ] Zero modifiche distruttive al sito esistente verificate

## Endpoint

| Endpoint | Metodo | Auth | Descrizione |
|----------|--------|------|-------------|
| `/api/public-request` | POST | x-request-token | Riceve richiesta prenotazione pubblica |
| `/api/public-request/inject` | POST | x-request-token | Inietta richiesta nel Booking Board |
| `/api/public-request/availability` | GET | No | Disponibilità per lodge (query: lodgeId) |
| `/api/ical-sync` | GET/POST | x-request-token o x-vercel-cron | Sincronizza feed iCal |

## Cron Vercel

Il cron `*/15 * * * *` chiama `/api/ical-sync` ogni 15 minuti. L'header `x-vercel-cron: 1` sostituisce il token in produzione.
