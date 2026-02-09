# WhatsApp Cloud Setup

## Obiettivo
Inviare automaticamente un messaggio WhatsApp al cliente dopo la richiesta preventivo dal sito.

## Variabili `.env.local`

```env
WHATSAPP_ACCESS_TOKEN=EAAG...
WHATSAPP_PHONE_NUMBER_ID=123456789012345
WHATSAPP_TEMPLATE_NAME=lead_confirmation
WHATSAPP_TEMPLATE_LANG=it
```

## Template Meta consigliato

Nel WhatsApp Manager crea un template:

- Nome: `lead_confirmation`
- Categoria: `UTILITY`
- Lingua: `Italian`

Testo body (4 variabili):

```text
Ciao {{1}}, abbiamo ricevuto la tua richiesta per Villa Olimpia.
Periodo richiesto: dal {{2}} al {{3}} per {{4}} ospiti.
Ti risponderemo al più presto con la proposta migliore.
```

Versione EN (facoltativa, se usi `WHATSAPP_TEMPLATE_LANG=en`):

```text
Hi {{1}}, we received your request for Villa Olimpia.
Requested stay: from {{2}} to {{3}} for {{4}} guests.
We will reply shortly with the best proposal.
```

## Test rapido configurazione

1. Avvia test:
   - `npm run whatsapp:test -- +393XXXXXXXXX`
2. Se il template è approvato e i token sono corretti, il messaggio arriva subito.

## Errori comuni

- `missing_whatsapp_config`: mancano token o phone number id.
- `whatsapp_error_400`: template non approvato o parametri non coerenti.
- `whatsapp_error_401`: token scaduto/non valido.
- `whatsapp_error_403`: numero non autorizzato in ambiente test sandbox.

## Note operative

- In produzione usa token non in scadenza e ruotazione periodica.
- Mantieni nome template e variabili coerenti con il codice API lead.
