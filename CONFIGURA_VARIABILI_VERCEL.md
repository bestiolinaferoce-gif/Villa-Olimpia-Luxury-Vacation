# 🚀 Configurazione Automatica Variabili Vercel

## Metodo Rapido (Script Automatico)

### Step 1: Assicurati di essere autenticato
```bash
npx vercel login
```

### Step 2: Esegui lo script
```bash
node scripts/setup-vercel-env.js
```

Lo script ti chiederà:
- **NEXT_PUBLIC_GA_MEASUREMENT_ID**: Il tuo Google Analytics ID (es. `G-ABC123XYZ`)
- **NEXT_PUBLIC_GTM_ID**: Il tuo Google Tag Manager ID (default: `GTM-K5NQGHBD`)

### Step 3: Redeploy
Dopo aver configurato le variabili, fai un redeploy:
```bash
npx vercel --prod
```

---

## Metodo Manuale (Dashboard Vercel)

Se preferisci configurare manualmente:

1. Vai su: https://vercel.com/dashboard
2. Seleziona il progetto: **villa-olimpia-luxury-vacation**
3. Vai su: **Settings** → **Environment Variables**
4. Aggiungi queste variabili:

### Variabile 1: Google Analytics
- **Name**: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- **Value**: Il tuo GA4 Measurement ID (es. `G-ABC123XYZ`)
- **Environments**: ✅ Production, ✅ Preview, ✅ Development

### Variabile 2: Google Tag Manager
- **Name**: `NEXT_PUBLIC_GTM_ID`
- **Value**: Il tuo GTM Container ID (es. `GTM-K5NQGHBD`)
- **Environments**: ✅ Production, ✅ Preview, ✅ Development

5. Clicca **Save**
6. Vai su **Deployments** → Clicca sui tre puntini (...) → **Redeploy**

---

## Metodo CLI Diretto (Se hai già i valori)

Se hai già i valori delle variabili, puoi configurarle direttamente:

```bash
# Google Analytics
echo "G-TUO-ID-QUI" | npx vercel env add NEXT_PUBLIC_GA_MEASUREMENT_ID production
echo "G-TUO-ID-QUI" | npx vercel env add NEXT_PUBLIC_GA_MEASUREMENT_ID preview
echo "G-TUO-ID-QUI" | npx vercel env add NEXT_PUBLIC_GA_MEASUREMENT_ID development

# Google Tag Manager
echo "GTM-K5NQGHBD" | npx vercel env add NEXT_PUBLIC_GTM_ID production
echo "GTM-K5NQGHBD" | npx vercel env add NEXT_PUBLIC_GTM_ID preview
echo "GTM-K5NQGHBD" | npx vercel env add NEXT_PUBLIC_GTM_ID development
```

---

## Verifica

Dopo il deploy, verifica che i tag siano presenti:

1. Installa [Google Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)
2. Visita il tuo sito deployato
3. Abilita Tag Assistant
4. Dovresti vedere:
   - ✅ Google Tag Manager: 1 tag trovato
   - ✅ Google Analytics: 1 tag trovato (se configurato)

---

## Note

- Se non configuri `NEXT_PUBLIC_GA_MEASUREMENT_ID`, Google Analytics non verrà caricato (nessun errore)
- Se non configuri `NEXT_PUBLIC_GTM_ID`, verrà usato il default `GTM-K5NQGHBD`
- Le variabili devono essere configurate per tutti e tre gli ambienti (Production, Preview, Development)
