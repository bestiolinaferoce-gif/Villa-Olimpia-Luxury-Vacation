# 🔍 Verifica Variabili Ambiente su Vercel

## ⚠️ PROBLEMA: Mappa e Form non funzionano

Se la mappa Google Maps e il form contatti non funzionano, probabilmente le variabili ambiente non sono configurate correttamente su Vercel.

---

## ✅ SOLUZIONE PASSO-PASSO

### STEP 1: Verifica Variabili su Vercel

1. Vai su **Vercel Dashboard** → Il tuo progetto
2. Clicca **Settings** (in alto)
3. Clicca **Environment Variables** (menu laterale sinistro)
4. Verifica che ci siano queste **4 variabili**:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
```

### STEP 2: Se le variabili NON ci sono

1. Clicca **"Add New"** o **"Import .env"**
2. Aggiungi una variabile alla volta:

**Variabile 1:**
- **Key:** `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- **Value:** `service_bbp2k8u`
- **Environment:** Seleziona **"Production", "Preview", "Development"** (tutti e tre)

**Variabile 2:**
- **Key:** `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- **Value:** `template_2kw4d3d`
- **Environment:** Seleziona **"Production", "Preview", "Development"**

**Variabile 3:**
- **Key:** `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- **Value:** `JeiPqp4zNMlRw6ug9`
- **Environment:** Seleziona **"Production", "Preview", "Development"**

**Variabile 4:**
- **Key:** `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
- **Value:** `AIzaSyARI-Fmhhh_AMHsJYuBBZBhLEl1rbVAnFo`
- **Environment:** Seleziona **"Production", "Preview", "Development"**

3. Clicca **"Save"** dopo ogni variabile

### STEP 3: Redeploy

Dopo aver aggiunto tutte le variabili:

1. Vai su **Deployments** (menu in alto)
2. Trova l'ultimo deploy
3. Clicca i **3 puntini** (⋮) a destra
4. Clicca **"Redeploy"**
5. Seleziona **"Use existing Build Cache"** (opzionale)
6. Clicca **"Redeploy"**

### STEP 4: Attendi e Verifica

1. Attendi 2-3 minuti per il deploy
2. Quando il deploy è completato (stato "Ready"), clicca **"Visit"**
3. Testa:
   - **Mappa:** Dovrebbe caricare Google Maps
   - **Form Contatti:** Dovrebbe inviare email via EmailJS

---

## 🐛 TROUBLESHOOTING

### La mappa mostra ancora "Configura NEXT_PUBLIC_GOOGLE_MAPS_API_KEY"

**Causa:** La variabile non è configurata o il deploy non ha incluso le nuove variabili.

**Soluzione:**
1. Verifica che la variabile esista su Vercel
2. Fai un **Redeploy** (le variabili vengono incluse solo nei nuovi deploy)
3. Attendi che il deploy sia completato

### Il form mostra "Service ID non configurato"

**Causa:** Le variabili EmailJS non sono configurate.

**Soluzione:**
1. Verifica che tutte e 3 le variabili EmailJS siano presenti su Vercel
2. Controlla che i valori siano corretti (senza spazi extra)
3. Fai un **Redeploy**

### Le variabili ci sono ma non funziona ancora

**Possibili cause:**
1. **Deploy vecchio:** Le variabili vengono incluse solo nei nuovi deploy
2. **Cache browser:** Prova in incognito o pulisci la cache
3. **Valori errati:** Controlla che i valori siano esatti (copia-incolla)

**Soluzione:**
1. Fai un **Redeploy** completo
2. Testa in **modalità incognito**
3. Verifica i valori delle variabili su Vercel

---

## 📋 CHECKLIST RAPIDA

- [ ] Le 4 variabili sono presenti su Vercel
- [ ] Tutte le variabili hanno "Production", "Preview", "Development" selezionati
- [ ] I valori delle variabili sono corretti (senza spazi)
- [ ] Ho fatto un **Redeploy** dopo aver aggiunto le variabili
- [ ] Il deploy è completato (stato "Ready")
- [ ] Ho testato in modalità incognito

---

## 💡 NOTA IMPORTANTE

**Le variabili ambiente vengono incluse solo nei nuovi deploy!**

Se aggiungi o modifichi una variabile ambiente su Vercel, devi sempre fare un **Redeploy** per applicare le modifiche.

---

## 🆘 SE NULLA FUNZIONA

Se dopo aver seguito tutti i passaggi nulla funziona:

1. **Verifica i log di build su Vercel:**
   - Vai su **Deployments** → Clicca sul deploy → **"Build Logs"**
   - Cerca errori o warning

2. **Verifica la console del browser:**
   - Apri il sito → F12 (DevTools)
   - Tab **Console**
   - Cerca errori JavaScript

3. **Contattami con:**
   - Screenshot delle variabili ambiente su Vercel
   - Screenshot degli errori nella console
   - URL del sito Vercel

