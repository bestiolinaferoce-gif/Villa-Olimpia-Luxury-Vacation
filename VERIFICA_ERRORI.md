# 🔍 VERIFICA ERRORI - Diagnostica

## 📋 CHECKLIST DIAGNOSTICA

Per aiutarti a risolvere gli errori, ho bisogno di sapere:

### 1. **Tipo di Errore**
- [ ] Errore nel terminale quando avvii `npm run dev`?
- [ ] Errore nella console del browser (F12)?
- [ ] Errore quando invii il form?
- [ ] Errore di build (`npm run build`)?

### 2. **Messaggio Errore Esatto**
Incolla qui il messaggio di errore completo che vedi.

### 3. **Quando Compare l'Errore**
- [ ] All'avvio del server?
- [ ] Quando carichi la pagina `/contatti`?
- [ ] Quando compili il form?
- [ ] Quando clicchi "Invia"?

---

## 🔧 VERIFICHE AUTOMATICHE

Ho già verificato:
- ✅ Build compila senza errori
- ✅ Nessun errore di linting
- ✅ EmailJS è installato (`@emailjs/browser`)
- ✅ File `.env.local` esiste e contiene le variabili
- ✅ Codice del form è corretto

---

## 🐛 ERRORI COMUNI E SOLUZIONI

### Errore: "Cannot find module '@emailjs/browser'"
**Soluzione:**
```bash
npm install @emailjs/browser
```

### Errore: "EmailJS non configurato"
**Soluzione:**
- Verifica che `.env.local` esista nella root del progetto
- Riavvia il server (`npm run dev`)
- Le variabili si caricano solo all'avvio!

### Errore: "process.env is undefined"
**Soluzione:**
- Le variabili devono iniziare con `NEXT_PUBLIC_`
- Riavvia il server dopo aver modificato `.env.local`

### Errore nella console: "Failed to send email"
**Soluzione:**
- Verifica che Service ID, Template ID e Public Key siano corretti
- Controlla in EmailJS → Email History se l'email è stata inviata

---

**Condividi il messaggio di errore esatto e procedo con la risoluzione!** 🔧

