# ⚙️ STEP 4: Configura File .env.local

## 📝 COSA DEVI FARE

Creare il file `.env.local` nella root del progetto con le variabili EmailJS.

---

## 🎯 I 3 CODICI CHE MI SERVE

Per completare la configurazione, ho bisogno di questi 3 codici che hai copiato:

1. **Service ID** - Tipo: `service_bbp2k8u` o `service_xxxxxxxxx`
2. **Template ID** - Tipo: `template_xxxxx` (quello che hai creato)
3. **Public Key** - Tipo: `abc123xyz789...` (quello che hai appena copiato)

---

## 📋 COME TROVARLI

### Service ID
- Vai su **Email Services** nel menu EmailJS
- Clicca sul servizio che hai creato (Gmail)
- Il Service ID è visibile nella pagina (tipo `service_bbp2k8u`)

### Template ID
- Vai su **Email Templates** nel menu EmailJS
- Clicca sul template "Contattaci" che hai creato
- Il Template ID è nell'URL o nella pagina (tipo `template_xxxxx`)

### Public Key
- Vai su **Account** → **General**
- È la stringa lunga che hai appena copiato

---

## ✅ DOPO CHE MI DAI I 3 CODICI

Creerò automaticamente il file `.env.local` con questa struttura:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxxx
```

---

**Incolla qui i 3 codici e procedo!** 🚀

Formato:
- Service ID: `service_xxxxx`
- Template ID: `template_xxxxx`
- Public Key: `xxxxx...`















