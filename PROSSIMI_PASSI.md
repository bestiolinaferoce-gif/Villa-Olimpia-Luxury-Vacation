# 🎯 Prossimi Passi - Guida Step by Step

## ✅ STEP 1: Crea Repository su GitHub

1. **Vai su [github.com](https://github.com)** e fai login
2. Clicca il pulsante **"+"** in alto a destra → **"New repository"**
3. Compila:
   - **Repository name:** `villa-olimpia`
   - **Description:** "Luxury vacation rentals website in Calabria"
   - Scegli **Public** o **Private**
   - **NON spuntare** "Add a README file" (abbiamo già tutto)
4. Clicca **"Create repository"**

---

## ✅ STEP 2: Collega il Progetto a GitHub

**Nel terminale di Cursor**, esegui questi comandi:

```bash
# Assicurati di essere nella directory corretta
cd /Users/francesconigro/Desktop/VillaOlimpia

# Aggiungi il remote (SOSTITUISCI TUO-USERNAME con il tuo username GitHub)
git remote add origin https://github.com/TUO-USERNAME/villa-olimpia.git

# Rinomina il branch
git branch -M main

# Carica il codice su GitHub
git push -u origin main
```

**Nota:** GitHub ti mostrerà questi comandi dopo aver creato il repository. Copiali e incollali nel terminale di Cursor.

---

## ✅ STEP 3: Deploy su Vercel (SENZA INSTALLAZIONE)

1. **Vai su [vercel.com](https://vercel.com)**
2. Clicca **"Sign Up"** o **"Login"**
3. Scegli **"Continue with GitHub"** (più facile)
4. Autorizza Vercel ad accedere a GitHub
5. Clicca **"Add New Project"** o **"Import Project"**
6. Seleziona il repository **`villa-olimpia`**
7. Vercel rileva automaticamente Next.js - **NON cambiare nulla**
8. Clicca **"Deploy"**

**Attendi 2-3 minuti** ⏱️

---

## ✅ STEP 4: Ottieni l'URL e Condividi

Dopo il deploy, Vercel ti darà un URL tipo:
```
https://villa-olimpia.vercel.app
```

**Questo è l'URL da condividere con i tuoi collaboratori!** 🎉

---

## 🔄 STEP 5: Aggiornamenti Automatici

Ogni volta che modifichi il codice:

```bash
git add .
git commit -m "Descrizione modifiche"
git push
```

**Il sito su Vercel si aggiorna automaticamente!** ✨

---

## 📋 Checklist

- [ ] Account GitHub creato/login fatto
- [ ] Repository `villa-olimpia` creato
- [ ] Codice pushato su GitHub
- [ ] Account Vercel creato/login fatto
- [ ] Progetto deployato su Vercel
- [ ] URL condiviso con collaboratori

---

## 🆘 Problemi Comuni

**"Repository not found"**
→ Verifica di aver sostituito `TUO-USERNAME` con il tuo username GitHub

**"Permission denied"**
→ Assicurati di aver autorizzato Vercel ad accedere a GitHub

**"Build failed"**
→ Controlla i log su Vercel, di solito è un problema di dipendenze

---

## 💡 Tips

- L'URL Vercel è permanente e gratuito
- Ogni push aggiorna automaticamente il sito
- Puoi creare preview per ogni branch
- HTTPS è incluso automaticamente


