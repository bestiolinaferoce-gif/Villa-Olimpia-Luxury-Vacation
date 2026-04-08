# Task list per Cursor — Villa Olimpia

Questi fix sono stati identificati e documentati. Cursor deve implementarli uno per uno.

---

## ✅ PRIORITÀ 1 — Fix n8n Code nodes (BLOCCANTE)

**Problema**: Il workflow n8n `lead-intake-vacation-rental` (ID: j7PTnrkpyAG8Pcp7) usa `process.env.VARIABILE` nei Code nodes, ma n8n blocca l'accesso alle env vars via `process.env`. Tutti i nodi falliscono silenziosamente.

**Soluzione**: Aprire n8n su http://72.60.20.32:62925/workflow/j7PTnrkpyAG8Pcp7 e nei Code nodes sostituire ogni `process.env.NOME_VAR` con `$vars.NOME_VAR`.

Poi in n8n → Settings → Variables, aggiungere:

| Nome variabile n8n | Valore |
|---|---|
| OPENAI_API_KEY | [inserire chiave OpenAI] |
| WA_TOKEN | [inserire token WhatsApp Business] |
| WA_PHONE_ID | [inserire Phone Number ID WhatsApp] |
| WA_TO_NUMBER | [numero WhatsApp proprietario, es. 393XXXXXXXXX] |
| RESEND_API_KEY | re_URwRSH2h_C7RrMhH9fbSyDMV6A4ZFazbs |
| EMAIL_FROM | Villa Olimpia <onboarding@resend.dev> |
| EMAIL_OWNER | villaolimpiacaporizzuto@gmail.com |

---

## ✅ PRIORITÀ 2 — Aggiungere log errore Resend nell'API route

**File**: `app/api/lead/route.ts`

**Problema**: Quando Resend restituisce un errore, il campo `errorBody` viene catturato ma non viene fatto un `console.error()`. Questo rende impossibile il debug dai Vercel Runtime Logs.

**Fix**: Alla riga 122-128 (blocco `if (!response.ok)`), aggiungere:
```typescript
console.error("[Resend] Error:", response.status, errorBody)
```

---

## ✅ PRIORITÀ 3 — Fix schema JSON-LD identifier negli appartamenti

**File**: `app/appartamenti/[id]/page.tsx`

**Problema**: Google Search Console segnala che lo schema `Accommodation` manca del campo `identifier`.

**Fix**: Nel componente che genera lo schema JSON-LD `LodgingBusiness/Accommodation`, aggiungere:
```json
"identifier": {
  "@type": "PropertyValue",
  "name": "internal-slug",
  "value": "[slug-appartamento]"
}
```

---

## ✅ PRIORITÀ 4 — Push del codice già pronto

Eseguire `PULL_E_PUSH.command` nella cartella del sito (doppio click su macOS) per pushare su GitHub:
- EmailJS client-side fallback in `components/booking-form.tsx`
- API route masking fix in `app/api/lead/route.ts` (webhookDelivery escluso da deliveredAny)
- Pagina contatti rinnovata in `app/contatti/page.tsx`

---

## Riepilogo stato sistema email

| Componente | Stato |
|---|---|
| RESEND_API_KEY su Vercel | ✅ Presente (da Mar 21) |
| LEADS_TO_EMAIL su Vercel | ✅ Presente (da Mar 21) |
| LEADS_FROM_EMAIL su Vercel | ❌ Punta a dominio non verificato — cambiare a `Villa Olimpia <onboarding@resend.dev>` |
| EmailJS client-side backup | ⏳ In attesa di push su GitHub |
| n8n Code nodes | ❌ Falliscono con "access to env vars denied" |
| Telegram bot | ❌ Token non configurato su Vercel |
