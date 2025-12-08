# 🔄 REDEPLOY NETLIFY - Applicare Variabili Ambiente

## ✅ VARIABILI AMBIENTE CONFIGURATE

✅ Le 4 variabili ambiente sono state aggiunte su Netlify!

---

## 🚀 STEP 1: REDEPLOY

Per applicare le variabili ambiente, devi fare un redeploy:

### Opzione A: Redeploy Manuale (Consigliato)
1. Vai su **"Deploys"** (nel menu laterale di Netlify)
2. Trova l'ultimo deploy nella lista
3. Clicca sui **3 puntini (...)** a destra del deploy
4. Seleziona **"Trigger deploy"** → **"Clear cache and deploy site"**
5. Attendi 2-3 minuti per il deploy

### Opzione B: Redeploy Automatico
- Se fai un nuovo commit su GitHub, Netlify farà il deploy automatico
- Ma è più veloce fare il redeploy manuale

---

## 🗺️ STEP 2: CONFIGURARE RESTRIZIONI GOOGLE MAPS

**IMPORTANTE:** Dopo il deploy, devi aggiungere il dominio Netlify alle restrizioni Google Maps.

1. **Vai su:** https://console.cloud.google.com/apis/credentials
2. **Clicca sulla tua API Key** (`AIzaSyARI-Fmhhh_AMHsJYuBBZBhLEl1rbVAnFo`)
3. **Sezione "Restrizioni applicazione":**
   - Seleziona "Riferimenti HTTP (siti web)"
   - Clicca "Aggiungi elemento"
   - Aggiungi: `*.netlify.app/*`
   - Se hai un dominio personalizzato, aggiungi anche: `tuodominio.com/*`
   - Clicca "Salva"

---

## ✅ STEP 3: TEST FINALE

Dopo il redeploy (2-3 minuti):

1. **Test Mappa:**
   - Vai su: `https://tuosito.netlify.app/location`
   - Ricarica la pagina (Ctrl+Shift+R o Cmd+Shift+R per pulire cache)
   - Dovresti vedere la mappa interattiva Google Maps
   - Clicca sul marker → pannello laterale

2. **Test Form Contatti:**
   - Vai su: `https://tuosito.netlify.app/contatti`
   - Compila e invia il form
   - Verifica email in `Villaolimpiacaporizzuto@gmail.com`

---

## 🐛 SE LA MAPPA NON SI CARICA

### Errore: "This page can't load Google Maps correctly"
**Soluzione:**
1. Verifica che `*.netlify.app/*` sia nelle restrizioni HTTP referrers
2. Redeploy dopo aver modificato le restrizioni
3. Pulisci cache browser (Ctrl+Shift+R)

### La mappa mostra ancora il placeholder
**Soluzione:**
1. Verifica che il redeploy sia completato (status "Published")
2. Pulisci cache browser
3. Controlla console browser (F12) per errori

---

## 📋 CHECKLIST

- [x] Variabili ambiente configurate su Netlify
- [ ] **Redeploy completato** (da fare ora)
- [ ] **Restrizioni Google Maps aggiornate** (dopo redeploy)
- [ ] **Test mappa in produzione** (dopo redeploy)
- [ ] **Test form contatti in produzione** (dopo redeploy)

---

**Fai il redeploy ora e poi configura le restrizioni Google Maps!** 🚀

