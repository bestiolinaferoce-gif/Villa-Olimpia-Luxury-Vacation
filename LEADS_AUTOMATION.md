# Leads Automation

## Obiettivo
Automatizzare raccolta e gestione lead con priorita e follow-up veloce.

## Variabili ambiente
Configurare in `.env.local`:

- `RESEND_API_KEY`
- `LEADS_TO_EMAIL`
- `LEADS_FROM_EMAIL`
- `LEADS_WEBHOOK_URL` (opzionale ma consigliato)
- `LEADS_WEBHOOK_TOKEN` (opzionale)
- `LEADS_TELEGRAM_BOT_TOKEN` (opzionale)
- `LEADS_TELEGRAM_CHAT_ID` (opzionale)
- `LEADS_AUTOREPLY_ENABLED=true`
- `LEADS_STORE_DIR` (opzionale, default `data/leads`)
- `WHATSAPP_ACCESS_TOKEN` (opzionale, WhatsApp Cloud API)
- `WHATSAPP_PHONE_NUMBER_ID` (opzionale, WhatsApp Cloud API)
- `WHATSAPP_TEMPLATE_NAME` (opzionale, default `lead_confirmation`)
- `WHATSAPP_TEMPLATE_LANG` (opzionale, default `it`)

## Comandi operativi

- Report lead:
  - `npm run leads:report`
- Coda follow-up (priorita e bozza messaggio):
  - `npm run leads:queue`
  - `npm run leads:queue -- --only-overdue`
- Link campagne UTM:
  - `npm run marketing:links spring_2026`
- Test template WhatsApp:
  - `npm run whatsapp:test -- +393XXXXXXXXX`

## Pipeline attiva su invio form

1. Validazione payload + antispam.
2. Scoring lead (`HOT/WARM/COLD`) + piano follow-up.
3. Consegna multi-canale:
   - email interna
   - webhook CRM/automation
   - alert Telegram
   - persistenza locale NDJSON
4. Autoresponder automatico al cliente.
5. Messaggio template WhatsApp al cliente (se configurato).
