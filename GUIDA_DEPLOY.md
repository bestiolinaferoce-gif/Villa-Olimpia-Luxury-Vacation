# 🚀 GUIDA DEPLOY - Villa Olimpia

## 📋 OPZIONI DI DEPLOY

Il progetto è configurato per **Netlify** (consigliato) o **Vercel**.

---

## 🌐 OPZIONE 1: NETLIFY (Consigliato)

### Prerequisiti
- Account Netlify (gratuito): https://app.netlify.com
- Repository GitHub già configurato ✅

### Deploy Automatico (GitHub Integration)

1. **Accedi a Netlify**
   - Vai su https://app.netlify.com
   - Fai login con GitHub

2. **Crea Nuovo Site**
   - Clicca su "Add new site" → "Import an existing project"
   - Seleziona "GitHub"
   - Autorizza Netlify ad accedere ai tuoi repository

3. **Seleziona Repository**
   - Scegli: `Villa-Olimpia-Luxury-Vacation`
   - Branch: `main`

4. **Configurazione Build**
   - Netlify rileverà automaticamente le impostazioni da `netlify.toml`
   - Verifica che siano:
     - **Build command:** `npm run build`
     - **Publish directory:** `.next`
     - **Node version:** 20

5. **Deploy**
   - Clicca "Deploy site"
   - Attendi 2-5 minuti per il build
   - Il sito sarà disponibile su: `https://[nome-random].netlify.app`

6. **Configura Dominio Personalizzato** (opzionale)
   - Settings → Domain management
   - Aggiungi il tuo dominio (es. `villaolimpia.com`)
   - Segui le istruzioni per configurare DNS

### Deploy Manuale (Netlify CLI)

```bash
# Installa Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

---

## ⚡ OPZIONE 2: VERCEL

### Deploy Automatico (GitHub Integration)

1. **Accedi a Vercel**
   - Vai su https://vercel.com
   - Fai login con GitHub

2. **Importa Progetto**
   - Clicca "Add New Project"
   - Seleziona repository: `Villa-Olimpia-Luxury-Vacation`
   - Vercel rileverà automaticamente Next.js

3. **Configurazione**
   - Framework Preset: Next.js (automatico)
   - Build Command: `npm run build` (automatico)
   - Output Directory: `.next` (automatico)

4. **Deploy**
   - Clicca "Deploy"
   - Attendi 2-3 minuti
   - Il sito sarà disponibile su: `https://[nome-progetto].vercel.app`

---

## 🔧 CONFIGURAZIONI POST-DEPLOY

### 1. Aggiorna Sitemap con URL Finale

Dopo il deploy, aggiorna `app/sitemap.js` con il tuo dominio finale:

```javascript
const baseUrl = "https://villaolimpia.com" // o il tuo dominio Netlify/Vercel
```

### 2. Variabili d'Ambiente (se necessario)

Se usi variabili d'ambiente:

**Netlify:**
- Settings → Environment variables
- Aggiungi le variabili necessarie

**Vercel:**
- Settings → Environment Variables
- Aggiungi le variabili necessarie

### 3. Verifica Build

Dopo il deploy, verifica:
- ✅ Homepage carica correttamente
- ✅ Tutte le pagine sono accessibili
- ✅ Cookie banner funziona
- ✅ Immagini caricano
- ✅ Form contatti funziona

---

## 📝 CHECKLIST PRE-DEPLOY

Prima di fare il deploy, assicurati:

- [x] Build locale funziona: `npm run build`
- [x] Nessun errore TypeScript
- [x] Tutte le dipendenze installate
- [x] File `netlify.toml` configurato
- [x] Repository GitHub aggiornato
- [ ] Sitemap aggiornata con URL finale
- [ ] Variabili d'ambiente configurate (se necessarie)

---

## 🐛 TROUBLESHOOTING

### Build Fallisce su Netlify

1. **Verifica Node Version**
   - Netlify usa Node 20 (già configurato in `netlify.toml`)

2. **Verifica Dipendenze**
   - Assicurati che `package.json` sia aggiornato
   - Netlify esegue `npm install` automaticamente

3. **Verifica Log Build**
   - Netlify Dashboard → Deploys → Click sul deploy fallito
   - Controlla i log per errori specifici

### Immagini Non Caricano

- Verifica che le immagini siano in `public/images/`
- Controlla i path relativi nei componenti
- Verifica configurazione `next.config.js` per immagini

### Cookie Banner Non Appare

- Verifica che `CookieConsent` sia importato in `app/layout.tsx`
- Controlla console browser per errori JavaScript
- Verifica localStorage non bloccato

---

## 🔄 DEPLOY AUTOMATICO (CI/CD)

Con GitHub integration, ogni push su `main` triggera automaticamente un nuovo deploy:

```bash
# Fai le modifiche
git add .
git commit -m "Aggiornamento sito"
git push origin main

# Netlify/Vercel deployerà automaticamente
```

---

## 📞 SUPPORTO

Per problemi con il deploy:
- Netlify Docs: https://docs.netlify.com
- Vercel Docs: https://vercel.com/docs
- Next.js Deploy: https://nextjs.org/docs/deployment

---

**✅ Il progetto è pronto per il deploy!**
















