# 🚀 DEPLOY COMPLETO - Guida Passo-Passo

## ✅ STEP 1: CODICE PUSHATO SU GITHUB

✅ **Completato!**
- Commit creato: "feat: Integrazione EmailJS e Google Maps"
- Push su GitHub: `main` branch
- Repository: `Villa-Olimpia-Luxury-Vacation`

---

## 🎯 STEP 2: CONFIGURAZIONE VERCEL

### Opzione A: Se hai già un progetto Vercel

1. **Vai su Vercel Dashboard**
   - https://vercel.com/dashboard
   - Accedi con il tuo account

2. **Trova il progetto "Villa-Olimpia-Luxury-Vacation"**
   - Dovrebbe essere nella lista dei progetti

3. **Vai su Settings → Environment Variables**

4. **Aggiungi queste variabili:**

   **EmailJS:**
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID = service_bbp2k8u
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = template_2kw4d3d
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = JeiPqp4zNMlRw6ug9
   ```

   **Google Maps:**
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY = AIzaSyARI-Fmhhh_AMHsJYuBBZBhLEl1rbVAnFo
   ```

5. **Per ogni variabile:**
   - Clicca "Add New"
   - Inserisci il nome (es: `NEXT_PUBLIC_EMAILJS_SERVICE_ID`)
   - Inserisci il valore (es: `service_bbp2k8u`)
   - Seleziona "Production", "Preview", e "Development"
   - Clicca "Save"

6. **Redeploy**
   - Vai su "Deployments"
   - Clicca sui 3 puntini (...) dell'ultimo deployment
   - Seleziona "Redeploy"
   - Oppure fai un nuovo commit per trigger automatico

---

### Opzione B: Se NON hai ancora un progetto Vercel

1. **Vai su Vercel**
   - https://vercel.com
   - Accedi con GitHub

2. **Importa Progetto**
   - Clicca "Add New Project"
   - Seleziona repository: `Villa-Olimpia-Luxury-Vacation`
   - Vercel rileverà automaticamente Next.js

3. **Configurazione Build**
   - Framework: Next.js (automatico)
   - Build Command: `npm run build` (automatico)
   - Output Directory: `.next` (automatico)
   - **NON modificare nulla!**

4. **Environment Variables** (PRIMA di fare Deploy)
   - Clicca "Environment Variables"
   - Aggiungi le 4 variabili (vedi sopra)
   - Per ogni variabile, seleziona "Production", "Preview", "Development"

5. **Deploy**
   - Clicca "Deploy"
   - Attendi 2-3 minuti

---

## 🗺️ STEP 3: CONFIGURARE RESTRIZIONI GOOGLE MAPS

**IMPORTANTE:** Dopo il deploy, devi aggiungere il dominio Vercel alle restrizioni Google Maps.

1. **Vai su Google Cloud Console**
   - https://console.cloud.google.com/apis/credentials
   - Clicca sulla tua API Key

2. **Restrizioni Applicazione**
   - Sezione "Restrizioni applicazione"
   - Aggiungi il dominio Vercel:
     ```
     *.vercel.app/*
     tuodominio.com/* (se hai dominio personalizzato)
     ```

3. **Salva**

---

## ✅ STEP 4: TEST PRODUZIONE

Dopo il deploy, testa:

1. **Form Contatti**
   - Vai su: `https://tuosito.vercel.app/contatti`
   - Compila e invia il form
   - Verifica che l'email arrivi a `Villaolimpiacaporizzuto@gmail.com`

2. **Google Maps**
   - Vai su: `https://tuosito.vercel.app/location`
   - Verifica che la mappa si carichi
   - Clicca sul marker e verifica il pannello laterale

---

## 📋 CHECKLIST FINALE

- [x] Codice pushato su GitHub
- [ ] Variabili ambiente configurate su Vercel
- [ ] Deploy completato
- [ ] Restrizioni Google Maps aggiornate
- [ ] Test form contatti in produzione
- [ ] Test mappa Google Maps in produzione

---

## 🐛 TROUBLESHOOTING

### Errore: "EmailJS non configurato"
- ✅ Verifica che le variabili ambiente siano configurate su Vercel
- ✅ Verifica che siano selezionate per "Production"
- ✅ Redeploy dopo aver aggiunto le variabili

### Errore: "This page can't load Google Maps correctly"
- ✅ Verifica che l'API Key sia corretta
- ✅ Aggiungi `*.vercel.app/*` alle restrizioni HTTP referrers
- ✅ Verifica che "Maps JavaScript API" sia abilitata

### La mappa non si carica
- ✅ Controlla la console del browser (F12)
- ✅ Verifica le restrizioni API Key
- ✅ Redeploy dopo aver modificato le restrizioni

---

**Il codice è su GitHub! Ora configura le variabili ambiente su Vercel e fai il deploy!** 🚀

