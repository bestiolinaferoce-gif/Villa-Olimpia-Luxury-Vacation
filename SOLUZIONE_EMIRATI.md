# 🇦🇪 SOLUZIONE PER EMIRATI ARABI

## 🔍 Problema Identificato

Negli Emirati Arabi potrebbero esserci:
- Firewall che blocca localhost
- Restrizioni DNS
- VPN che interferisce
- Porte bloccate
- Proxy aziendale

## ✅ SOLUZIONI

### Soluzione 1: Usa IP Locale Esplicito

```bash
cd /Users/francesconigro/Desktop/ViviCalabria.com

# Trova il tuo IP locale
ifconfig | grep "inet " | grep -v 127.0.0.1

# Avvia con IP esplicito
next dev -p 3001 -H 0.0.0.0
```

Poi apri: `http://TUO_IP_LOCALE:3001`

### Soluzione 2: Porta Diversa (8080)

```bash
cd /Users/francesconigro/Desktop/ViviCalabria.com
lsof -ti:8080 | xargs kill -9 2>/dev/null || true
next dev -p 8080 -H 0.0.0.0
```

Apri: `http://localhost:8080`

### Soluzione 3: Disabilita VPN Temporaneamente

1. Disconnetti VPN completamente
2. Riavvia server
3. Se funziona → problema VPN
4. Configura VPN per bypassare localhost

### Soluzione 4: Usa Build Statico (Nessuna Rete Richiesta)

```bash
cd /Users/francesconigro/Desktop/ViviCalabria.com

# Build
npm run build

# Serve (usa porta 3000)
npm start
```

Apri: `http://localhost:3000`

### Soluzione 5: Tunnel Locale (ngrok/tunnelmole)

```bash
# Installa tunnelmole
npm install -g tunnelmole

# Avvia server
npm run dev

# In altro terminale, crea tunnel
tmole 3001
```

Usa l'URL fornito da tunnelmole.

## 🎯 Test Rapido

### Test 1: Verifica Server Si Avvia

```bash
npm run dev
```

**Cosa vedi?**
- ✅ "Ready in X seconds" → Server OK
- ❌ Errori → Condividi output

### Test 2: Verifica Connessione

```bash
# Test se porta risponde
curl http://localhost:3001
```

Se risponde → server OK, problema browser/rete
Se non risponde → server non parte

### Test 3: Browser Diverso

Prova:
- Chrome
- Firefox
- Safari
- Edge

## 🔧 Configurazione VPN

Se devi usare VPN:

1. **Aggiungi localhost al bypass**:
   - `127.0.0.1`
   - `localhost`
   - `*.local`

2. **Disabilita VPN per connessioni locali**

3. **Usa split tunneling** (solo traffico esterno via VPN)

## 📋 Checklist

- [ ] Server si avvia (vedi "Ready")
- [ ] Prova IP locale invece di localhost
- [ ] Prova porta diversa (8080)
- [ ] Disabilita VPN per test
- [ ] Prova build statico
- [ ] Verifica firewall locale

## 🆘 Se Nulla Funziona

**Condividi:**
1. Output completo `npm run dev`
2. Risultato `curl http://localhost:3001`
3. Errori console browser
4. Tipo connessione (WiFi, Ethernet, VPN)

---

**Prova prima la Soluzione 4 (build statico) - non richiede rete!**




