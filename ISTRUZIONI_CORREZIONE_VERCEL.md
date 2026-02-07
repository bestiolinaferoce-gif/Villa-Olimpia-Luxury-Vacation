# 🔧 ISTRUZIONI CORREZIONE VERCEL - PASSO PASSO

## 🚨 PROBLEMA IDENTIFICATO

Dallo screenshot vedo che la variabile Google Maps ha un **nome ERRATO**:

**❌ ERRATO:** `EXT_PUBLIC_GOOGLE_MAPS_API_KEY` (manca la "N")  
**✅ CORRETTO:** `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` (con la "N")

---

## 📋 ISTRUZIONI PASSO PASSO

### PASSO 1: Elimina la Variabile Errata

1. Vai su Vercel Dashboard → **Settings** → **Environment Variables**
2. Trova la variabile: `EXT_PUBLIC_GOOGLE_MAPS_API_KEY` (quella con nome errato)
3. Clicca i **3 puntini** (⋮) sulla destra di quella variabile
4. Clicca **"Delete"**
5. Conferma eliminazione

### PASSO 2: Aggiungi la Variabile Corretta

1. Clicca il pulsante **"Add New"** (in alto a destra)
2. Nel campo **"Key"**, inserisci:
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
   ```
   ⚠️ **IMPORTANTE:** Deve iniziare con **"NEXT_"** (con la "N"!)
3. Nel campo **"Value"**, inserisci:
   ```
   AIzaSyARI-Fmhhh_AMHsJYuBBZBhLEl1rbVAnFo
   ```
4. Nel dropdown **"Environment"**, seleziona:
   - ✅ **Production**
   - ✅ **Preview**
   - ✅ **Development**
   
   Oppure seleziona direttamente **"All Environments"**
5. Clicca **"Save"**

### PASSO 3: Verifica Tutte le Variabili

Assicurati che ci siano esattamente queste **4 variabili** (controlla i nomi!):

1. ✅ `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` ← **Deve iniziare con "NEXT_"**
2. ✅ `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
3. ✅ `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
4. ✅ `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

**Tutte devono avere "All Environments" selezionato.**

### PASSO 4: Redeploy

**⚠️ CRITICO:** Le variabili vengono incluse solo nei nuovi deploy!

1. Vai su **Deployments** (nella barra di navigazione superiore)
2. Trova l'ultimo deploy (quello più recente)
3. Clicca i **3 puntini** (⋮) sulla destra
4. Clicca **"Redeploy"**
5. **NON selezionare** "Use existing Build Cache"
6. Clicca **"Redeploy"** per confermare
7. Attendi 2-3 minuti che il deploy finisca

### PASSO 5: Test

Dopo il deploy:

1. Apri il sito live su Vercel
2. Vai alla pagina **/location** → La mappa dovrebbe caricarsi
3. Vai alla pagina **/contatti** → Compila il form e invia
4. Apri **Console Browser** (F12) → Dovresti vedere log di successo

---

## 🐛 SE IL FORM NON FUNZIONA IN LOCALE

Ho creato il file `.env.local` per te. Per farlo funzionare:

1. **Riavvia il server di sviluppo:**
   ```bash
   # Ferma il server corrente (Ctrl+C)
   # Poi riavvia:
   npm run dev
   ```

2. **Verifica che il file `.env.local` esista:**
   ```bash
   cat .env.local
   ```

3. **Se il file non esiste, crealo manualmente** con questo contenuto:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_bbp2k8u
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_2kw4d3d
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=JeiPqp4zNMlRw6ug9
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyARI-Fmhhh_AMHsJYuBBZBhLEl1rbVAnFo
   ```

---

## ✅ CHECKLIST FINALE

- [ ] Eliminata variabile errata `EXT_PUBLIC_GOOGLE_MAPS_API_KEY`
- [ ] Aggiunta variabile corretta `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` (con la "N"!)
- [ ] Verificate tutte e 4 le variabili (nomi corretti)
- [ ] Tutte le variabili hanno "All Environments"
- [ ] Redeploy effettuato
- [ ] File `.env.local` creato per sviluppo locale
- [ ] Server locale riavviato (se necessario)
- [ ] Testato mappa (funziona?)
- [ ] Testato form (funziona?)

---

## 📞 SE ANCORA NON FUNZIONA

Se dopo queste correzioni ancora non funziona:

1. **Screenshot della pagina Vercel Environment Variables** (dopo le correzioni)
2. **Screenshot della console browser** (F12 → Console) quando provi a usare mappa/form
3. **URL del sito Vercel**

Con questi informazioni posso aiutarti ulteriormente.

---

**✅ SEGUI QUESTI PASSI E TUTTO DOVREBBE FUNZIONARE!**

Il problema principale è il nome errato della variabile Google Maps. Una volta corretta, tutto dovrebbe funzionare.
















