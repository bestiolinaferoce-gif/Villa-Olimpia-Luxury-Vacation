# 🚀 Condivisione Rapida - Villa Olimpia

## Metodo 1: Vercel (CONSIGLIATO - 2 minuti)

### Passo 1: Installa Vercel CLI
```bash
npm i -g vercel
```

### Passo 2: Deploy
```bash
cd /Users/francesconigro/Desktop/VillaOlimpia
vercel
```

### Passo 3: Segui le istruzioni
- Login con GitHub/Email
- Conferma le impostazioni (premi Invio per default)
- **FATTO!** 🎉

**Riceverai un URL tipo:** `https://villa-olimpia-xxx.vercel.app`

**Condividi questo URL con i tuoi collaboratori!**

---

## Metodo 2: ngrok (Condivisione Locale)

### Passo 1: Installa ngrok
```bash
brew install ngrok
# oppure scarica da: https://ngrok.com/download
```

### Passo 2: Avvia il tunnel
```bash
# In un nuovo terminale, mentre il server è in esecuzione
ngrok http 3000
```

### Passo 3: Copia l'URL
Vedrai qualcosa come:
```
Forwarding: https://abc123.ngrok.io -> http://localhost:3000
```

**Condividi l'URL `https://abc123.ngrok.io` con i collaboratori**

---

## Metodo 3: GitHub + Vercel (Deploy Automatico)

### Passo 1: Crea repository su GitHub
1. Vai su [github.com](https://github.com)
2. Clicca "New repository"
3. Nome: `villa-olimpia`
4. Crea repository

### Passo 2: Collega il progetto
```bash
cd /Users/francesconigro/Desktop/VillaOlimpia
git remote add origin https://github.com/TUO-USERNAME/villa-olimpia.git
git branch -M main
git push -u origin main
```

### Passo 3: Deploy su Vercel
1. Vai su [vercel.com](https://vercel.com)
2. Login con GitHub
3. "Add New Project"
4. Importa il repository `villa-olimpia`
5. Deploy automatico!

**Ogni push su GitHub aggiornerà automaticamente il sito!**

---

## 📋 Quale Metodo Scegliere?

- **Vercel CLI** → Se vuoi condividere SUBITO (2 minuti)
- **ngrok** → Se vuoi testare in locale condiviso
- **GitHub + Vercel** → Se vuoi collaborazione a lungo termine

---

## 🔗 Condivisione URL

Una volta ottenuto l'URL, puoi condividerlo via:
- Email
- WhatsApp
- Slack
- Link diretto

**Il sito sarà accessibile da chiunque abbia il link!**


