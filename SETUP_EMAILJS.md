# 📧 Setup EmailJS per Form Contatti

## 🎯 Problema Risolto

Il form contatti non funzionava perché mancava `NEXT_PUBLIC_EMAILJS_SERVICE_ID` o altre variabili EmailJS non erano configurate correttamente su Vercel.

---

## 🔍 Dove Trovare le Credenziali EmailJS

### 1. Vai su EmailJS Dashboard

👉 **https://dashboard.emailjs.com/**

### 2. Login con le tue credenziali

### 3. Recupera le 3 credenziali necessarie:

#### **Service ID**
1. Dashboard → **Email Services** → [Il tuo servizio (es. Gmail)]
2. Copia il **"Service ID"** 
   - Formato: `service_xxxxxxx`
   - Esempio: `service_bbp2k8u`

#### **Template ID**
1. Dashboard → **Email Templates** → [Il tuo template]
2. Copia il **"Template ID"**
   - Formato: `template_xxxxxxx`
   - Esempio: `template_2kw4d3d`

#### **Public Key**
1. Dashboard → **Account** → **General**
2. Copia il **"Public Key"**
   - Formato: `xxxxxxxxxxxxxxx`
   - Esempio: `JeiPqp4zNMlRw6ug9`

---

## ✅ Credenziali Trovate nel Progetto

Ho trovato queste credenziali nei file di configurazione:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_bbp2k8u
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_2kw4d3d
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=JeiPqp4zNMlRw6ug9
```

**⚠️ IMPORTANTE:** Verifica che queste credenziali siano ancora valide su EmailJS Dashboard!

---

## 🔧 Configurazione Vercel

### Step 1: Vai su Vercel Dashboard

1. Apri: **https://vercel.com/dashboard**
2. Seleziona progetto: **villa-olimpia-lusso-vacanza**
3. Vai in: **Settings** → **Environment Variables**

### Step 2: Aggiungi le 3 Variabili

Aggiungi queste variabili una alla volta:

#### Variabile 1: Service ID
- **Key:** `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- **Value:** `service_bbp2k8u`
- **Environment:** Seleziona **Production**, **Preview**, **Development** (o "All Environments")

#### Variabile 2: Template ID
- **Key:** `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- **Value:** `template_2kw4d3d`
- **Environment:** Seleziona **Production**, **Preview**, **Development**

#### Variabile 3: Public Key
- **Key:** `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- **Value:** `JeiPqp4zNMlRw6ug9`
- **Environment:** Seleziona **Production**, **Preview**, **Development**

### Step 3: Redeploy

**⚠️ CRITICO:** Le variabili ambiente vengono incluse solo nei nuovi deploy!

1. Vai su **Deployments**
2. Clicca i **3 puntini** (⋮) sull'ultimo deploy
3. Clicca **"Redeploy"**
4. Attendi 2-3 minuti

---

## 🧪 Test del Form

Dopo il deploy:

1. Apri il sito live su Vercel
2. Vai alla pagina **/contatti**
3. Apri **DevTools** (F12) → Tab **Console**
4. Compila il form e invia
5. Verifica in console:
   - ✅ Se vedi `✅ EmailJS - Configurazione completa` → **OK!**
   - ✅ Se vedi `✅ EmailJS - Email inviata con successo` → **Perfetto!**
   - ❌ Se vedi `❌ EmailJS - Variabili mancanti: [SERVICE_ID]` → Ricontrolla configurazione Vercel

---

## 🐛 Troubleshooting

### Errore: "Configurazione email non completa"

**Causa:** Una o più variabili EmailJS non sono configurate su Vercel.

**Soluzione:**
1. Vai su Vercel → Settings → Environment Variables
2. Verifica che ci siano tutte e 3 le variabili
3. Verifica che abbiano "All Environments" selezionato
4. **Fai un Redeploy**

### Errore: "SERVICE_ID is undefined"

**Causa:** La variabile non è stata salvata correttamente o non è stato fatto un redeploy.

**Soluzione:**
1. Elimina la variabile su Vercel
2. Aggiungila di nuovo
3. Verifica che il valore sia corretto (senza spazi extra)
4. **Fai un Redeploy**

### Email non arriva

**Possibili cause:**
1. **Limite EmailJS raggiunto:** Controlla EmailJS Dashboard → Usage
2. **Template non configurato:** Verifica che il template esista e sia attivo
3. **Service non connesso:** Verifica che il servizio email (Gmail) sia connesso correttamente

**Soluzione:**
1. Vai su EmailJS Dashboard
2. Controlla **Usage** per vedere se ci sono limiti
3. Verifica che il **Service** sia connesso e attivo
4. Verifica che il **Template** esista e abbia i campi corretti

---

## 📋 Checklist Finale

- [ ] Credenziali EmailJS recuperate da Dashboard
- [ ] Service ID aggiunto su Vercel
- [ ] Template ID aggiunto su Vercel
- [ ] Public Key aggiunta su Vercel
- [ ] Tutte le variabili hanno "All Environments" selezionato
- [ ] Redeploy effettuato
- [ ] Form contatti testato
- [ ] Email di test ricevuta

---

## 📞 Supporto

Se dopo questi step il form non funziona:

1. **Screenshot della console** (F12 → Console)
2. **Screenshot Vercel Environment Variables**
3. **Screenshot EmailJS Dashboard** (se possibile)
4. Contatta supporto con questi screenshot

---

## 🔗 Link Utili

- **EmailJS Dashboard:** https://dashboard.emailjs.com/
- **EmailJS Docs:** https://www.emailjs.com/docs/
- **Vercel Environment Variables:** https://vercel.com/docs/concepts/projects/environment-variables

