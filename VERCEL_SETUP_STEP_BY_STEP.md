# 🚀 SETUP VERCEL - GUIDA PASSO PASSO

## 📋 INFORMAZIONI PROGETTO

- **Repository GitHub**: `bestiolinaferoce-gif/Villa-Olimpia-Luxury-Vacation`
- **Framework**: Next.js (rilevato automaticamente)
- **Variabili Ambiente Necessarie**: 4

---

## ✅ STEP 1: CREA ACCOUNT VERCEL

1. **Vai su**: https://vercel.com
2. **Clicca**: "Sign Up" (in alto a destra)
3. **Scegli**: "Continue with GitHub" 
4. **Autorizza**: Vercel ad accedere al tuo GitHub account
5. ✅ **Account creato!**

---

## ✅ STEP 2: IMPORTA IL PROGETTO

1. **Dopo il login**, vedrai la dashboard
2. **Clicca**: "Add New..." → "Project"
3. **Cerca**: "Villa-Olimpia-Luxury-Vacation"
4. **Clicca**: "Import" sul repository

---

## ✅ STEP 3: CONFIGURAZIONE PROGETTO

Vercel rileverà automaticamente Next.js, quindi:

### Framework Preset
- ✅ Dovrebbe essere già: **Next.js**

### Build Settings
- ✅ **Root Directory**: `./` (lascia vuoto)
- ✅ **Build Command**: `npm run build` (già impostato)
- ✅ **Output Directory**: `.next` (già impostato)
- ✅ **Install Command**: `npm install` (già impostato)

**NON modificare nulla qui, è già corretto!**

---

## ✅ STEP 4: VARIABILI AMBIENTE (IMPORTANTE!)

**PRIMA di cliccare "Deploy"**, aggiungi le variabili ambiente:

### Come Aggiungere:

1. **Scorri in basso** nella pagina di configurazione
2. **Trova la sezione**: "Environment Variables"
3. **Clicca**: "Add" per ogni variabile

### Variabili da Aggiungere:

#### 1️⃣ EmailJS Service ID
- **Name**: `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- **Value**: `service_bbp2k8u`
- **Environment**: ✅ Production, ✅ Preview, ✅ Development

#### 2️⃣ EmailJS Template ID
- **Name**: `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- **Value**: `template_2kw4d3d`
- **Environment**: ✅ Production, ✅ Preview, ✅ Development

#### 3️⃣ EmailJS Public Key
- **Name**: `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- **Value**: `JeiPqp4zNMlRw6ug9`
- **Environment**: ✅ Production, ✅ Preview, ✅ Development

#### 4️⃣ Google Maps API Key
- **Name**: `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
- **Value**: *(il tuo Google Maps API key - stesso che avevi su Netlify)*
- **Environment**: ✅ Production, ✅ Preview, ✅ Development

**⚠️ IMPORTANTE**: 
- ✅ Seleziona tutte e 3 le checkbox (Production, Preview, Development) per ogni variabile
- ✅ Assicurati che i nomi inizino con `NEXT_PUBLIC_`

---

## ✅ STEP 5: DEPLOY

1. **Dopo aver aggiunto tutte le variabili**, clicca **"Deploy"**
2. **Attendi**: Il build impiegherà 2-3 minuti
3. **Monitora**: Vedrai i log del build in tempo reale

---

## ✅ STEP 6: VERIFICA DEPLOY

### Durante il Build:
- ✅ Verifica che non ci siano errori nei log
- ✅ Se vedi errori, fermati e dimmelo

### Dopo il Build:
- ✅ Vercel ti darà un URL tipo: `villa-olimpia-luxury-vacation.vercel.app`
- ✅ **Clicca sul link** per aprire il sito
- ✅ **Verifica** che il sito funzioni

---

## ✅ STEP 7: TEST FUNZIONALITÀ

Dopo il deploy, testa:

1. ✅ **Homepage**: Si carica correttamente?
2. ✅ **Form Contatto**: Funziona? (EmailJS)
3. ✅ **Mappa**: Si visualizza? (Google Maps)
4. ✅ **Navigazione**: Tutti i link funzionano?
5. ✅ **Console Browser**: Nessun errore? (F12 → Console)

---

## 🆘 SE QUALCOSA NON FUNZIONA

### Build Fallisce:
- Controlla i log di build su Vercel
- Verifica che tutte le variabili siano state aggiunte
- Dimmi l'errore e lo risolvo

### Variabili Non Funzionano:
- Verifica che inizino con `NEXT_PUBLIC_`
- Verifica che siano selezionate per Production
- Riavvia il deploy dopo aver aggiunto le variabili

### Sito Non Funziona:
- Controlla la console del browser (F12)
- Verifica i log su Vercel dashboard
- Dimmi cosa vedi e lo risolvo

---

## 🎯 DOPO IL DEPLOY RIUSCITO

1. ✅ **URL Vercel**: Ti sarà dato automaticamente
2. ✅ **Deploy Automatici**: Ogni push su GitHub triggera un nuovo deploy
3. ✅ **Preview Deployments**: Ogni PR crea un preview deployment
4. ✅ **Analytics**: Disponibili su Vercel dashboard

---

## 📝 NOTE FINALI

- ✅ **Vercel è gratuito** per progetti come il tuo
- ✅ **Build più veloci** rispetto a Netlify
- ✅ **Ottimizzato per Next.js** (creato da loro!)
- ✅ **Deploy automatici** da GitHub

---

**Pronto? Inizia dallo STEP 1 e dimmi quando sei arrivato allo STEP 4 (variabili ambiente)!** 🚀
















