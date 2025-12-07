# 🚀 SOLUZIONE DEFINITIVA - Avvio Server Locale

**Problema**: Il server non si avvia correttamente su localhost:3001

**Causa**: Next.js di default usa la porta 3000, non 3001

---

## ✅ SOLUZIONE RAPIDA

### Opzione 1: Usa porta 3000 (Consigliato)

Next.js usa automaticamente la porta 3000. Se è occupata, usa la successiva disponibile.

**Comandi da eseguire nel Terminal del Mac:**

```bash
# 1. Vai nella directory del progetto
cd /Users/francesconigro/Desktop/VillaOlimpia

# 2. Ferma eventuali processi in esecuzione
lsof -ti:3000 -ti:3001 | xargs kill -9 2>/dev/null || true

# 3. Pulisci la cache
rm -rf .next node_modules/.cache .turbo

# 4. Avvia il server
npm run dev
```

**Il server si avvierà su:**
👉 http://localhost:3000

---

### Opzione 2: Forza porta 3001

Se vuoi usare specificamente la porta 3001:

**Modifica `package.json`:**

```json
"scripts": {
  "dev": "next dev -p 3001",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

Poi esegui:
```bash
npm run dev
```

---

## 🔧 SE CI SONO ERRORI

### Errore: "Port already in use"

**Soluzione:**
```bash
# Trova e termina il processo sulla porta
lsof -ti:3000 | xargs kill -9
# Oppure per porta 3001
lsof -ti:3001 | xargs kill -9

# Poi riavvia
npm run dev
```

### Errore: "Cannot find module"

**Soluzione:**
```bash
# Reinstalla dipendenze
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Errore: "Turbopack runtime"

**Soluzione:**
```bash
# Pulisci tutto e riavvia
rm -rf .next node_modules/.cache .turbo
npm run dev
```

---

## 📋 CHECKLIST AVVIO

Prima di avviare, verifica:

- [ ] Sei nella directory corretta: `/Users/francesconigro/Desktop/VillaOlimpia`
- [ ] `node_modules` è presente (se no: `npm install`)
- [ ] Nessun processo sulla porta 3000/3001
- [ ] Cache pulita (`.next`, `node_modules/.cache`)

---

## 🎯 COMANDI RAPIDI

**Avvio completo (copia e incolla):**
```bash
cd /Users/francesconigro/Desktop/VillaOlimpia && \
lsof -ti:3000 -ti:3001 | xargs kill -9 2>/dev/null || true && \
rm -rf .next node_modules/.cache .turbo && \
npm run dev
```

**Dopo l'avvio:**
- Apri: http://localhost:3000
- Se vedi errori, premi `Ctrl+C` e riprova

---

## ✅ VERIFICA FUNZIONAMENTO

Dopo l'avvio, dovresti vedere:

```
▲ Next.js 16.0.7
- Local:        http://localhost:3000
- Ready in X.Xs
```

Se vedi questo messaggio, il server è attivo! 🎉

---

## 🆘 SE NIENTE FUNZIONA

**Reset completo:**

```bash
cd /Users/francesconigro/Desktop/VillaOlimpia

# Ferma tutto
lsof -ti:3000 -ti:3001 | xargs kill -9 2>/dev/null || true

# Pulisci tutto
rm -rf .next node_modules/.cache .turbo node_modules package-lock.json

# Reinstalla
npm install

# Avvia
npm run dev
```

---

**Il server dovrebbe funzionare su http://localhost:3000** 🚀
