# ✅ SOLUZIONE DEFINITIVA - Server Locale

## 🚀 METODO 1: Script Automatico (CONSIGLIATO)

Ho creato uno script che risolve automaticamente tutti i problemi comuni.

### Come usarlo:

```bash
cd /Users/francesconigro/Desktop/VillaOlimpia
./AVVIA_SERVER_DEFINITIVO.sh
```

**Lo script fa automaticamente:**
- ✅ Ferma tutti i processi esistenti
- ✅ Pulisce tutta la cache
- ✅ Verifica Node.js e npm
- ✅ Controlla le dipendenze
- ✅ Verifica la configurazione
- ✅ Libera la porta 3001
- ✅ Avvia il server

**Risultato:** Il sito sarà disponibile su **http://localhost:3001**

---

## 🔧 METODO 2: Comandi Manuali

Se preferisci fare tutto manualmente:

```bash
# 1. Vai nella directory
cd /Users/francesconigro/Desktop/VillaOlimpia

# 2. Ferma processi esistenti
lsof -ti:3000,3001 | xargs kill -9 2>/dev/null || true

# 3. Pulisci cache
rm -rf .next node_modules/.cache .turbo .swc

# 4. Verifica dipendenze (se necessario)
npm install --legacy-peer-deps

# 5. Avvia server
npm run dev
```

---

## 🎯 METODO 3: Comando Unico (Copia e Incolla)

```bash
cd /Users/francesconigro/Desktop/VillaOlimpia && lsof -ti:3000,3001 | xargs kill -9 2>/dev/null || true && rm -rf .next node_modules/.cache .turbo .swc && npm run dev
```

---

## ✅ VERIFICA FUNZIONAMENTO

Dopo l'avvio, dovresti vedere:

```
▲ Next.js 16.0.7
- Local:        http://localhost:3001
- Ready in X.Xs
```

**Apri il browser su:** http://localhost:3001

---

## 🔍 RISOLUZIONE PROBLEMI

### Problema: "Port already in use"
**Soluzione:**
```bash
lsof -ti:3001 | xargs kill -9
npm run dev
```

### Problema: "Cannot find module"
**Soluzione:**
```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
npm run dev
```

### Problema: "Turbopack runtime error"
**Soluzione:**
```bash
rm -rf .next node_modules/.cache .turbo .swc
npm run dev
```

### Problema: Server si blocca
**Soluzione:**
```bash
# Reset completo
cd /Users/francesconigro/Desktop/VillaOlimpia
lsof -ti:3000,3001 | xargs kill -9 2>/dev/null || true
rm -rf .next node_modules/.cache .turbo .swc node_modules package-lock.json
npm install --legacy-peer-deps
npm run dev
```

---

## 📋 CHECKLIST PRE-AVVIO

Prima di avviare, verifica:

- [x] Sei nella directory: `/Users/francesconigro/Desktop/VillaOlimpia`
- [x] Node.js installato (`node -v` deve funzionare)
- [x] npm installato (`npm -v` deve funzionare)
- [x] `node_modules` presente (se no: `npm install`)
- [x] Nessun processo sulla porta 3001

---

## 🎯 CONFIGURAZIONE ATTUALE

- **Porta**: 3001 (configurata in `package.json`)
- **Framework**: Next.js 16.0.7
- **React**: 18.3.1
- **Node**: 20+ (raccomandato)

---

## 💡 SUGGERIMENTI

1. **Usa sempre lo script automatico** (`AVVIA_SERVER_DEFINITIVO.sh`) per evitare problemi
2. **Se il server non parte**, esegui prima lo script di pulizia
3. **Non chiudere il terminale** mentre il server è in esecuzione
4. **Per fermare il server**, premi `Ctrl+C` nel terminale

---

## 🆘 SE NIENTE FUNZIONA

**Reset completo del progetto:**

```bash
cd /Users/francesconigro/Desktop/VillaOlimpia

# Ferma tutto
lsof -ti:3000,3001 | xargs kill -9 2>/dev/null || true
pkill -f "next dev" 2>/dev/null || true

# Pulisci TUTTO
rm -rf .next node_modules/.cache .turbo .swc node_modules package-lock.json

# Reinstalla
npm install --legacy-peer-deps

# Avvia
npm run dev
```

---

## ✅ RISULTATO FINALE

Dopo aver seguito questi passaggi, il server locale funzionerà su:

**👉 http://localhost:3001**

**Il sito sarà completamente funzionante! 🎉**

---

**Ultimo aggiornamento:** 10 Dicembre 2024
**Versione script:** 2.0 (Definitiva)

