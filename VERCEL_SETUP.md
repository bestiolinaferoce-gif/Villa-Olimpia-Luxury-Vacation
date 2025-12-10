# 🔧 Configurazione Vercel - AZIONI RICHIESTE

## ⚠️ AZIONE IMMEDIATA NECESSARIA

Il codice è stato aggiornato con error handling robusto, ma **DEVI configurare le variabili ambiente su Vercel** per far funzionare il form e la mappa.

---

## 📋 Step da Completare

### 1. Recupera le Credenziali EmailJS

**Opzione A - Se hai accesso EmailJS Dashboard:**

1. Vai su: **https://dashboard.emailjs.com/admin**
2. Sezione **"Email Services"**
3. Clicca sul tuo servizio (es. Gmail)
4. **Copia il "Service ID"** (formato: `service_xxxxxxx`)

**Opzione B - Usa i valori trovati nel progetto:**

Ho trovato queste credenziali nei file di configurazione:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_bbp2k8u
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_2kw4d3d
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=JeiPqp4zNMlRw6ug9
```

**⚠️ IMPORTANTE:** Verifica che queste credenziali siano ancora valide su EmailJS Dashboard!

**Opzione C - Se non trovi le credenziali:**

1. Nel vecchio progetto Netlify, vai su: **Site Settings** → **Build & Deploy** → **Environment**
2. Cerca `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
3. Copia il valore

---

### 2. Configura Vercel Dashboard

#### Step 2.1: Apri Vercel Dashboard

1. Apri: **https://vercel.com/dashboard**
2. Seleziona: **villa-olimpia-lusso-vacanza**
3. Vai in: **Settings** → **Environment Variables**

#### Step 2.2: Aggiungi le 4 Variabili

Aggiungi queste variabili **una alla volta**:

**Variabile 1: EmailJS Service ID**
- **Key:** `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- **Value:** `service_bbp2k8u`
- **Environment:** Seleziona **Production**, **Preview**, **Development** (o "All Environments")
- Clicca **"Save"**

**Variabile 2: EmailJS Template ID**
- **Key:** `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- **Value:** `template_2kw4d3d`
- **Environment:** Seleziona **Production**, **Preview**, **Development**
- Clicca **"Save"**

**Variabile 3: EmailJS Public Key**
- **Key:** `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- **Value:** `JeiPqp4zNMlRw6ug9`
- **Environment:** Seleziona **Production**, **Preview**, **Development**
- Clicca **"Save"**

**Variabile 4: Google Maps API Key**
- **Key:** `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
- **Value:** `AIzaSyARI-Fmhhh_AMHsJYuBBZBhLEl1rbVAnFo`
- **Environment:** Seleziona **Production**, **Preview**, **Development**
- Clicca **"Save"**

---

### 3. Redeploy

**⚠️ CRITICO:** Le variabili ambiente vengono incluse solo nei nuovi deploy!

1. Vai in: **Deployments**
2. Clicca sul deployment più recente
3. Clicca i **3 puntini** (⋮) → **"Redeploy"**
4. **NON selezionare** "Use existing Build Cache"
5. Clicca **"Redeploy"**
6. Attendi 2-3 minuti

---

### 4. Verifica Funzionamento

Dopo 1-2 minuti:

#### Test Form Contatti:

1. Apri il sito live su Vercel
2. Vai alla pagina **/contatti**
3. Apri **DevTools** (F12) → Tab **Console**
4. Compila il form e invia
5. Verifica in console:
   - ✅ Se vedi `✅ EmailJS - Configurazione completa` → **OK!**
   - ✅ Se vedi `✅ EmailJS - Email inviata con successo` → **Perfetto!**
   - ❌ Se vedi `❌ EmailJS - Variabili mancanti: [SERVICE_ID]` → Ricontrolla step 2

#### Test Google Maps:

1. Apri il sito live su Vercel
2. Vai alla pagina **/location**
3. Guarda in **basso a sinistra**: vedrai il **Debug Panel**
4. Verifica che tutte le variabili siano **verdi** (presenti)
5. Verifica che la mappa si carichi correttamente

---

## 🎯 Checklist Finale

- [ ] Service ID recuperato da EmailJS o Netlify
- [ ] Service ID aggiunto su Vercel
- [ ] Template ID aggiunto su Vercel
- [ ] Public Key aggiunta su Vercel
- [ ] Google Maps API Key aggiunta su Vercel
- [ ] Tutte le variabili hanno "All Environments" selezionato
- [ ] Redeploy effettuato
- [ ] Form contatti testato e funzionante
- [ ] Email di test ricevuta
- [ ] Mappa Google Maps funzionante

---

## 🐛 Troubleshooting

### Form mostra errore "Configurazione email non completa"

**Causa:** Service ID o altre variabili EmailJS non configurate o errate su Vercel.

**Soluzione:**
1. Vai su Vercel → Settings → Environment Variables
2. Verifica che ci siano tutte e 4 le variabili
3. Verifica che i valori siano corretti (copia da `vercel.env`)
4. Verifica che tutte abbiano "All Environments"
5. **Fai un Redeploy**

### Console mostra "SERVICE_ID is undefined"

**Causa:** Variabile non è stata salvata correttamente o non è stato fatto un redeploy.

**Soluzione:**
1. Elimina la variabile su Vercel
2. Aggiungila di nuovo con il valore esatto
3. Verifica che non ci siano spazi extra
4. **Fai un Redeploy**
5. Attendi che il deploy sia completato
6. Testa in modalità incognito (per evitare cache)

### Mappa non si carica

**Causa:** Google Maps API Key non configurata o restrizioni su Google Cloud Console.

**Soluzione:**
1. Verifica che `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` sia presente su Vercel
2. Vai su **Google Cloud Console** → **APIs & Services** → **Credentials**
3. Seleziona la tua API Key
4. In **"Application restrictions"**:
   - Seleziona **"HTTP referrers (web sites)"**
   - Aggiungi: `https://*.vercel.app/*`
5. In **"API restrictions"**:
   - Assicurati che **"Maps JavaScript API"** sia abilitata
6. **Salva** e attendi 5 minuti
7. Testa di nuovo

### Email non arriva

**Possibili cause:**
1. Limite EmailJS raggiunto
2. Template non configurato correttamente
3. Service email non connesso

**Soluzione:**
1. Vai su EmailJS Dashboard → **Usage**
2. Verifica che non ci siano limiti raggiunti
3. Verifica che il **Service** sia connesso e attivo
4. Verifica che il **Template** esista e abbia i campi corretti

---

## 📞 Supporto

Se dopo questi step il form o la mappa non funzionano:

1. **Screenshot della console** (F12 → Console)
2. **Screenshot Vercel Environment Variables**
3. **Screenshot Debug Panel** (se visibile)
4. **URL del sito Vercel**

Contatta supporto con questi screenshot.

---

## 🔗 Link Utili

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Vercel Environment Variables:** https://vercel.com/docs/concepts/projects/environment-variables
- **EmailJS Dashboard:** https://dashboard.emailjs.com/
- **Google Cloud Console:** https://console.cloud.google.com/apis/credentials

---

## 💡 Note Importanti

1. **Le variabili ambiente vengono incluse solo nei nuovi deploy!**
   - Se aggiungi o modifichi una variabile, devi SEMPRE fare un **Redeploy**

2. **Debug Panel visibile su tutte le pagine**
   - Guarda in basso a sinistra per vedere lo stato delle variabili
   - Verde = presente, Rosso = mancante

3. **Console del browser per troubleshooting**
   - Apri F12 → Console per vedere log dettagliati
   - Cerca log che iniziano con `✅ EmailJS` o `❌ EmailJS`

---

**✅ Dopo aver completato tutti gli step, form e mappa funzioneranno correttamente!**

