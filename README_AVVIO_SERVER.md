# 🚀 COME AVVIARE IL SERVER - GUIDA RAPIDA

## ✅ METODO PIÙ SEMPLICE (1 comando)

```bash
cd /Users/francesconigro/Desktop/VillaOlimpia && ./AVVIA_SERVER_DEFINITIVO.sh
```

**Oppure:**

```bash
cd /Users/francesconigro/Desktop/VillaOlimpia && npm run dev
```

---

## 🌐 URL DEL SITO

Dopo l'avvio, apri nel browser:

**👉 http://localhost:3001**

---

## 🛑 COME FERMARE IL SERVER

Nel terminale dove è in esecuzione, premi:

**`Ctrl + C`**

---

## 🔧 SE IL SERVER NON SI AVVIA

Esegui questo comando (risolve il 99% dei problemi):

```bash
cd /Users/francesconigro/Desktop/VillaOlimpia && \
lsof -ti:3001 | xargs kill -9 2>/dev/null || true && \
rm -rf .next node_modules/.cache .turbo .swc && \
npm run dev
```

---

## 📞 PROBLEMI?

Leggi il file: `SOLUZIONE_DEFINITIVA_LOCALE.md`

---

**✅ Il server è configurato per funzionare su porta 3001**

