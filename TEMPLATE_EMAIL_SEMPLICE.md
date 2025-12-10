# 📧 CREA TEMPLATE EMAIL - Guida Super Semplice

## 🎯 COSA DEVI FARE

Creare un template email in EmailJS è come scrivere una email normale, ma con alcuni "segnaposto" speciali.

---

## 📝 STEP-BY-STEP SUPER DETTAGLIATO

### 1. VAI SU EMAIL TEMPLATES
- Nel menu a **sinistra** di EmailJS
- Clicca su **"Email Templates"** (terza voce dall'alto)
- Dovresti vedere una pagina con un pulsante **"Create New Template"**

### 2. CLICCA "CREATE NEW TEMPLATE"
- Clicca il pulsante blu **"Create New Template"** (in alto a destra)
- Si aprirà una finestra/modale

### 3. COMPILA I CAMPI

#### Campo 1: "Name" (Nome Template)
```
Prenotazione Villa Olimpia
```

#### Campo 2: "Subject" (Oggetto Email)
```
Nuova Richiesta Prenotazione - {{from_name}}
```

**IMPORTANTE:** Le parentesi graffe `{{from_name}}` sono un segnaposto che verrà sostituito con il nome della persona che compila il form.

#### Campo 3: "Content" (Corpo Email)
Copia e incolla **ESATTAMENTE** questo testo:

```
Ciao,

Nuova richiesta prenotazione da Villa Olimpia:

Nome: {{from_name}}
Email: {{from_email}}
Telefono: {{phone}}
Check-in: {{check_in}}
Check-out: {{check_out}}
Ospiti: {{guests}}
Appartamento: {{apartment}}
Messaggio: {{message}}

Rispondi entro 24 ore.

Villa Olimpia
```

### 4. CLICCA "SAVE"
- In basso nella finestra, clicca il pulsante **"Save"**
- Il template verrà creato

### 5. COPIA IL TEMPLATE ID
- Dopo il salvataggio, vedrai il Template ID (tipo `template_abc123`)
- **COPIALO** - ti servirà dopo

---

## ❓ PROBLEMI COMUNI

### "Non vedo il campo Content"
- Cerca un campo chiamato "Body", "Message", o "Email Content"
- Potrebbe essere un editor di testo grande

### "Non so dove incollare il testo"
- Cerca una casella di testo grande (come un editor di email)
- Incolla il testo lì dentro

### "Le parentesi graffe {{ }} non funzionano"
- Assicurati di copiare ESATTAMENTE come scritto
- Non aggiungere spazi extra
- Le parentesi graffe devono essere doppie: `{{` e `}}`

---

## 🎯 VERSIONE ANCORA PIÙ SEMPLICE

Se proprio non riesci, usa questo template MINIMO:

**Subject:**
```
Prenotazione Villa Olimpia
```

**Content:**
```
Nome: {{from_name}}
Email: {{from_email}}
Telefono: {{phone}}
Check-in: {{check_in}}
Check-out: {{check_out}}
Ospiti: {{guests}}
```

Anche questo funzionerà! Poi possiamo migliorarlo dopo.

---

## 💡 ALTERNATIVA: Fammi sapere dove ti blocchi

Se non riesci, dimmi:
1. **Dove ti blocchi esattamente?** (non trovi il pulsante? non vedi i campi?)
2. **Cosa vedi sullo schermo?** (descrivi quello che appare)
3. **Hai qualche errore?** (se sì, copia il messaggio)

Così posso aiutarti meglio! 🚀

