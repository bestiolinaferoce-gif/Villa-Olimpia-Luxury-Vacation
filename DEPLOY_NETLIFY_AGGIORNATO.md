# 🚀 AGGIORNAMENTO DEPLOY NETLIFY

## ✅ CODICE PUSHATO SU GITHUB

✅ **Completato!**
- Repository: `Villa-Olimpia-Luxury-Vacation`
- Branch: `main`
- Commit: "feat: Integrazione EmailJS e Google Maps"
- Netlify rileverà automaticamente il nuovo commit e farà il deploy

---

## ⚙️ AGGIORNA VARIABILI AMBIENTE SU NETLIFY

### Step 1: Vai su Netlify Dashboard
1. Vai su: https://app.netlify.com
2. Accedi con il tuo account
3. Trova il progetto "Villa-Olimpia-Luxury-Vacation"

### Step 2: Configura Environment Variables
1. Clicca sul progetto
2. Vai su **"Site configuration"** → **"Environment variables"**
3. Clicca **"Add a variable"**

4. **Aggiungi queste 4 variabili:**

   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID = service_bbp2k8u
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = template_2kw4d3d
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = JeiPqp4zNMlRw6ug9
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY = AIzaSyARI-Fmhhh_AMHsJYuBBZBhLEl1rbVAnFo
   ```

   **Per ogni variabile:**
   - **Key:** (es. `NEXT_PUBLIC_EMAILJS_SERVICE_ID`)
   - **Value:** (es. `service_bbp2k8u`)
   - **Scopes:** Seleziona tutte le opzioni (Production, Deploy previews, Branch deploys)
   - Clicca **"Save"**

### Step 3: Redeploy
1. Vai su **"Deploys"** (nel menu laterale)
2. Clicca sui **3 puntini (...)** dell'ultimo deploy
3. Seleziona **"Trigger deploy"** → **"Clear cache and deploy site"**
4. Oppure: Netlify dovrebbe fare il deploy automatico dopo il push su GitHub (già fatto!)

---

## 🗺️ CONFIGURARE GOOGLE MAPS (DOPO DEPLOY)

1. **Vai su:** https://console.cloud.google.com/apis/credentials
2. **Clicca sulla tua API Key** (`AIzaSyARI-Fmhhh_AMHsJYuBBZBhLEl1rbVAnFo`)
3. **Restrizioni Applicazione:**
   - Sezione "Riferimenti HTTP (siti web)"
   - Clicca "Aggiungi elemento"
   - Aggiungi: `*.netlify.app/*`
   - Se hai un dominio personalizzato, aggiungi anche: `tuodominio.com/*`
   - Clicca "Salva"

---

## ✅ TEST FINALE

Dopo il deploy, testa:

1. **Form Contatti:**
   - Vai su: `https://tuosito.netlify.app/contatti`
   - Compila e invia
   - Verifica email in `Villaolimpiacaporizzuto@gmail.com`

2. **Google Maps:**
   - Vai su: `https://tuosito.netlify.app/location`
   - Verifica mappa interattiva
   - Clicca marker → pannello laterale

---

## 📋 VARIABILI AMBIENTE (Copia e Incolla)

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_bbp2k8u
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_2kw4d3d
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=JeiPqp4zNMlRw6ug9
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyARI-Fmhhh_AMHsJYuBBZBhLEl1rbVAnFo
```

---

## 🎯 DEPLOY AUTOMATICO

Netlify dovrebbe fare il deploy automatico perché:
- ✅ Il codice è già pushato su GitHub
- ✅ Netlify è collegato al repository
- ✅ Il nuovo commit triggererà un nuovo deploy

**Ma devi aggiungere le variabili ambiente PRIMA che il deploy finisca!**

---

## ⚠️ IMPORTANTE

1. **Aggiungi le variabili ambiente PRIMA del deploy** (o subito dopo)
2. **Redeploy dopo aver aggiunto le variabili** per assicurarti che siano caricate
3. **Aggiorna le restrizioni Google Maps** con il dominio Netlify

---

## 📋 CHECKLIST

- [x] Codice pushato su GitHub
- [ ] **Variabili ambiente configurate su Netlify** (da fare tu - 5 min)
- [ ] **Redeploy completato** (automatico o manuale)
- [ ] **Restrizioni Google Maps aggiornate** (da fare tu - 2 min)
- [ ] **Test produzione** (da fare tu - 5 min)

---

**Il codice è su GitHub! Netlify farà il deploy automatico, ma aggiungi le variabili ambiente prima!** 🚀















