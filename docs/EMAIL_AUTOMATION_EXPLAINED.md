# Email Automation Villa Olimpia

## Cosa riceve il cliente

Il cliente riceve una **autorisposta elegante e immediata** quando arriva una richiesta dal sito, se l'autoresponder è attivo.

Contenuto:

- presa in carico rassicurante
- riepilogo rapido di check-in, check-out, ospiti e preferenza lodge
- invito a rispondere direttamente alla mail
- CTA WhatsApp
- firma host professionale Villa Olimpia

Preview pronta:

[email-preview-customer.html](/Users/francesconigro/Documents/New%20project/Villa-Olimpia-Luxury-Vacation-clean/docs/email-preview-customer.html)

## Cosa riceve Villa Olimpia

Villa Olimpia riceve una **notifica interna molto più operativa**.

Contenuto:

- nome ospite in evidenza
- date e numero ospiti in card
- priorità lead
- contatti ospite
- appartamento richiesto o assenza di preferenza
- notti / fonte / timing di risposta
- eventuale nota messaggio
- CTA WhatsApp rapida

Preview pronta:

[email-preview-owner.html](/Users/francesconigro/Documents/New%20project/Villa-Olimpia-Luxury-Vacation-clean/docs/email-preview-owner.html)

## Come funziona il flusso

### 1. Form sito / lead

Quando un ospite invia una richiesta dal sito:

- la route `app/api/lead/route.ts` valida i dati
- arricchisce il lead con priorità e follow-up
- invia email owner-facing via Resend
- invia autoresposta al cliente
- opzionalmente invia template WhatsApp cliente
- opzionalmente invia Telegram operatore
- salva anche su file NDJSON come safety-net

### 2. Richiesta disponibilità sticky

Quando arriva dalla barra disponibilità:

- la route `app/api/availability-request/route.ts` costruisce la notifica
- invia email owner-facing via Resend
- opzionalmente invia Telegram
- salva anche il record su file

## File principali coinvolti

- layout brand email:
  [email-branding.ts](/Users/francesconigro/Documents/New%20project/Villa-Olimpia-Luxury-Vacation-clean/lib/email-branding.ts)

- autoresposta cliente:
  [seasonal-auto-reply-html.ts](/Users/francesconigro/Documents/New%20project/Villa-Olimpia-Luxury-Vacation-clean/lib/seasonal-auto-reply-html.ts)

- lead dal sito:
  [lead/route.ts](/Users/francesconigro/Documents/New%20project/Villa-Olimpia-Luxury-Vacation-clean/app/api/lead/route.ts)

- richiesta disponibilità:
  [availability-request/route.ts](/Users/francesconigro/Documents/New%20project/Villa-Olimpia-Luxury-Vacation-clean/app/api/availability-request/route.ts)

## Comportamento importante

- se `RESEND_API_KEY` manca, l'email non parte
- se `LEADS_AUTOREPLY_ENABLED=false`, il cliente non riceve autoresposta
- il testo `text` resta comunque presente come fallback oltre all'HTML
- il `reply_to` viene impostato sull'email ospite, quindi puoi rispondere direttamente dal thread

## Cosa cambia col deploy

Dopo `commit + push + deploy`:

- le nuove email automatiche diventano attive in produzione
- il cliente vede la nuova email brandizzata
- Villa Olimpia riceve la nuova notifica interna strutturata

## Nota pratica

La firma Gmail manuale e le email automatiche sono due sistemi distinti:

- **Gmail manuale**: usato quando rispondi tu a mano
- **email automatiche sito**: inviate dal backend via Resend

Ora i due sistemi sono molto più coerenti nello stile.
