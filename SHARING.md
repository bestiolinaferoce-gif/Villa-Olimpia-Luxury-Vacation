# 🔗 Guida alla Condivisione del Progetto

## Opzioni per Condividere il Sito con i Collaboratori

### 1. 🚀 **Vercel (CONSIGLIATO - Gratuito e Veloce)**

Il modo più semplice per condividere il sito in tempo reale.

#### Setup Vercel:

```bash
# 1. Installa Vercel CLI
npm i -g vercel

# 2. Nel progetto VillaOlimpia
cd /Users/francesconigro/Desktop/VillaOlimpia

# 3. Deploy
vercel

# 4. Segui le istruzioni:
# - Login con GitHub/Email
# - Conferma le impostazioni
# - Il sito sarà live in 2 minuti!
```

**Vantaggi:**
- ✅ URL pubblico immediato (es: `villa-olimpia.vercel.app`)
- ✅ Aggiornamenti automatici ad ogni push
- ✅ Preview per ogni branch
- ✅ HTTPS gratuito
- ✅ Gratuito per progetti personali

**URL condiviso:** `https://villa-olimpia-xxx.vercel.app`

---

### 2. 🌐 **ngrok (Tunneling Locale)**

Condividi il tuo localhost:3000 in tempo reale.

#### Setup ngrok:

```bash
# 1. Installa ngrok
brew install ngrok
# oppure scarica da: https://ngrok.com/download

# 2. Avvia il tunnel
ngrok http 3000

# 3. Copia l'URL fornito (es: https://abc123.ngrok.io)
```

**Vantaggi:**
- ✅ Condivisione immediata
- ✅ Funziona con localhost
- ✅ URL temporaneo (gratuito) o permanente (a pagamento)

**Nota:** L'URL gratuito cambia ad ogni avvio. Per URL fisso serve account a pagamento.

---

### 3. 📦 **GitHub + Vercel/Netlify**

Condividi il codice e deploy automatico.

#### Setup GitHub:

```bash
# 1. Crea repository su GitHub
# Vai su github.com e crea un nuovo repository

# 2. Nel progetto
cd /Users/francesconigro/Desktop/VillaOlimpia

# 3. Inizializza Git (se non già fatto)
git init
git add .
git commit -m "Initial commit - Villa Olimpia"

# 4. Collega a GitHub
git remote add origin https://github.com/TUO-USERNAME/villa-olimpia.git
git branch -M main
git push -u origin main
```

#### Deploy Automatico:

**Vercel:**
1. Vai su [vercel.com](https://vercel.com)
2. Login con GitHub
3. "Import Project"
4. Seleziona il repository
5. Deploy automatico!

**Netlify:**
1. Vai su [netlify.com](https://netlify.com)
2. "Add new site" → "Import from Git"
3. Connetti GitHub
4. Seleziona repository
5. Deploy!

**Vantaggi:**
- ✅ Deploy automatico ad ogni push
- ✅ Preview per ogni PR
- ✅ Collaborazione via Git
- ✅ Storia delle modifiche

---

### 4. 🔒 **Cloudflare Tunnel (Gratuito e Permanente)**

Tunnel gratuito con URL permanente.

```bash
# 1. Installa cloudflared
brew install cloudflared

# 2. Avvia tunnel
cloudflared tunnel --url http://localhost:3000
```

**Vantaggi:**
- ✅ URL permanente gratuito
- ✅ HTTPS incluso
- ✅ Nessun limite di tempo

---

### 5. 🏠 **Rete Locale (Stessa WiFi)**

Se i collaboratori sono sulla stessa rete.

```bash
# 1. Trova il tuo IP locale
ifconfig | grep "inet " | grep -v 127.0.0.1

# 2. Avvia Next.js con IP esposto
npm run dev -- -H 0.0.0.0

# 3. Condividi: http://TUO-IP:3000
# Esempio: http://192.168.1.100:3000
```

**Vantaggi:**
- ✅ Nessun servizio esterno
- ✅ Veloce sulla stessa rete
- ❌ Funziona solo in locale

---

## 🎯 Raccomandazione

**Per sviluppo collaborativo:**
1. **GitHub** per il codice
2. **Vercel** per il deploy automatico
3. **ngrok** per test rapidi locali

---

## 📝 Checklist Condivisione

- [ ] Repository GitHub creato
- [ ] Codice pushato su GitHub
- [ ] Vercel/Netlify configurato
- [ ] URL condiviso con collaboratori
- [ ] Permessi GitHub configurati
- [ ] Documentazione aggiornata

---

## 🔐 Permessi Collaboratori

### GitHub:
1. Vai su repository → Settings → Collaborators
2. Aggiungi collaboratori per email/username
3. Scegli permessi (Read/Write/Admin)

### Vercel:
1. Project Settings → Team
2. Invita membri del team
3. Assegna ruoli (Member/Admin)

---

## 💡 Tips

- Usa **branch** per feature diverse
- **Pull Requests** per review codice
- **Issues** per tracciare task
- **Vercel Preview** per testare prima del merge

