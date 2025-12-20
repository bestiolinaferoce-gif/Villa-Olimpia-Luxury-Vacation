# 🇦🇪 COMANDI PER EMIRATI ARABI

## 🚀 Soluzione 1: Build Statico (CONSIGLIATO - Nessuna Rete)

```bash
cd /Users/francesconigro/Desktop/ViviCalabria.com
rm -rf .next
npm run build
npm start
```

**Apri**: `http://localhost:3000`

**Vantaggi**: 
- ✅ Non richiede connessione
- ✅ Funziona sempre
- ✅ Più veloce

## 🌐 Soluzione 2: IP Locale Esplicito

```bash
cd /Users/francesconigro/Desktop/ViviCalabria.com
lsof -ti:3001 | xargs kill -9 2>/dev/null || true
rm -rf .next
next dev -p 3001 -H 0.0.0.0
```

Poi trova il tuo IP:
```bash
ifconfig | grep "inet " | grep -v 127.0.0.1
```

Apri: `http://TUO_IP:3001`

## 🔄 Soluzione 3: Porta Alternativa

```bash
cd /Users/francesconigro/Desktop/ViviCalabria.com
lsof -ti:8080 | xargs kill -9 2>/dev/null || true
rm -rf .next
next dev -p 8080 -H 0.0.0.0
```

**Apri**: `http://localhost:8080`

## 📱 Soluzione 4: Script Interattivo

```bash
cd /Users/francesconigro/Desktop/ViviCalabria.com
bash AVVIA_EMIRATI.sh
```

Ti chiederà quale metodo preferisci.

## ⚡ Comando Rapido (Build Statico)

```bash
cd /Users/francesconigro/Desktop/ViviCalabria.com && rm -rf .next && npm run build && npm start
```

Poi apri: `http://localhost:3000`

---

**🎯 CONSIGLIO: Usa la Soluzione 1 (build statico) - funziona sempre!**




