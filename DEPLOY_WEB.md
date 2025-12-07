# 🚀 Deploy su Vercel - Metodo Web (SENZA INSTALLAZIONE)

## ✅ Metodo Più Semplice - Usa il Sito Web di Vercel

Non serve installare nulla! Puoi fare tutto dal browser.

### Passo 1: Prepara il Progetto per GitHub

```bash
# Nel terminale di Cursor, nella directory VillaOlimpia
cd /Users/francesconigro/Desktop/VillaOlimpia

# Verifica che Git sia inizializzato (già fatto ✅)
git status
```

### Passo 2: Crea Repository su GitHub

1. Vai su [github.com](https://github.com) e fai login
2. Clicca il pulsante **"+"** in alto a destra → **"New repository"**
3. Nome repository: `villa-olimpia`
4. Scegli **Public** o **Private**
5. **NON** spuntare "Initialize with README" (abbiamo già i file)
6. Clicca **"Create repository"**

### Passo 3: Collega il Progetto a GitHub

Copia il comando che GitHub ti mostra (tipo "push an existing repository") e eseguilo nel terminale di Cursor:

```bash
git remote add origin https://github.com/TUO-USERNAME/villa-olimpia.git
git branch -M main
git push -u origin main
```

**Sostituisci `TUO-USERNAME` con il tuo username GitHub!**

### Passo 4: Deploy su Vercel (SENZA INSTALLAZIONE)

1. Vai su [vercel.com](https://vercel.com)
2. Clicca **"Sign Up"** o **"Login"**
3. Scegli **"Continue with GitHub"** (più facile)
4. Autorizza Vercel ad accedere a GitHub
5. Clicca **"Add New Project"**
6. Seleziona il repository **`villa-olimpia`**
7. Vercel rileva automaticamente Next.js
8. Clicca **"Deploy"**

**FATTO! 🎉** In 2-3 minuti avrai il sito online!

### Passo 5: Condividi l'URL

Vercel ti darà un URL tipo:
```
https://villa-olimpia.vercel.app
```

**Condividi questo URL con i tuoi collaboratori!**

---

## 🔄 Aggiornamenti Automatici

Ogni volta che fai:
```bash
git add .
git commit -m "Aggiornamento"
git push
```

Il sito su Vercel si aggiorna automaticamente! ✨

---

## 📝 Note

- ✅ Non serve installare nulla
- ✅ Funziona tutto dal browser
- ✅ Deploy automatico ad ogni push
- ✅ HTTPS gratuito incluso
- ✅ URL permanente

---

## 🆘 Problemi?

**Se non hai un account GitHub:**
1. Crea account su [github.com](https://github.com) (gratuito)
2. Poi segui i passi sopra

**Se hai problemi con Git:**
- Assicurati di essere nella directory corretta
- Verifica con `pwd` che sei in `/Users/francesconigro/Desktop/VillaOlimpia`


