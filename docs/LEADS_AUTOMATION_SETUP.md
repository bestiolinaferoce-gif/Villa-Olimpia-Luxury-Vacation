# Lead Automation Setup

Questa guida completa la configurazione delle automazioni lead (email, WhatsApp, webhook, Telegram, salvataggio locale).

## Variabili ambiente

### Email (Resend)
- `RESEND_API_KEY`
- `LEADS_TO_EMAIL` (default: `villaolimpiacaporizzuto@gmail.com`)
- `LEADS_FROM_EMAIL` (default: `Villa Olimpia <onboarding@resend.dev>`)
- `LEADS_AUTOREPLY_ENABLED` (default: `true`)

### WhatsApp Business (template)
- `WHATSAPP_ACCESS_TOKEN`
- `WHATSAPP_PHONE_NUMBER_ID`
- `WHATSAPP_TEMPLATE_NAME` (default: `lead_confirmation`)
- `WHATSAPP_TEMPLATE_LANG` (default: `it`)

### Webhook CRM
- `LEADS_WEBHOOK_URL`
- `LEADS_WEBHOOK_TOKEN` (opzionale)

### Telegram alert
- `LEADS_TELEGRAM_BOT_TOKEN`
- `LEADS_TELEGRAM_CHAT_ID`

### Persistenza locale (ndjson)
- `LEADS_PERSIST_ENABLED` (default: `true`)
- `LEADS_STORE_DIR` (opzionale; default: `data/leads`)

## Test rapido
- Stato canali: `GET /api/lead/status`
- Invio lead: `POST /api/lead`

## Note
- I lead vengono sempre instradati verso almeno un canale valido; in caso di fallimento totale viene restituito errore 503 al frontend.
- Se `LEADS_PERSIST_ENABLED=false`, il salvataggio su file viene disabilitato.
