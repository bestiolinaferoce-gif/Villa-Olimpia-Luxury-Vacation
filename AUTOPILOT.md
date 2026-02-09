# Autopilot

Per utenti non tecnici: usa un solo comando.

## Setup automatico

```bash
npm run autopilot:setup
```

Cosa fa:

1. Aggiorna `.env.local` con default utili.
2. Crea `data/leads/` e `data/marketing/`.
3. Genera link campagna pronti in `data/marketing/`.
4. Scrive report stato in `data/marketing/autopilot-status.json`.

## Cosa resta da inserire (se manca)

Nel report trovi `missingExternalConfig`. Questi valori dipendono da servizi esterni:

- `RESEND_API_KEY`
- `LEADS_FROM_EMAIL`
- `WHATSAPP_ACCESS_TOKEN`
- `WHATSAPP_PHONE_NUMBER_ID`

Senza questi, il sito continua a funzionare ma alcune automazioni (email/WhatsApp) restano parziali.
