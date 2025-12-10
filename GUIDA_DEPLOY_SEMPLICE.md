# 🚀 GUIDA DEPLOY SEMPLICE - VILLA OLIMPIA

## ⚠️ IMPORTANTE: Non Posso Fare Deploy Automatico

Per motivi di sicurezza, **non posso eseguire commit e push automatici**. Ecco i comandi da eseguire manualmente.

---

## 📋 COMANDI PER DEPLOY

### Passo 1: Apri Terminal

Apri il terminale sul tuo Mac e vai nella cartella del progetto:

```bash
cd /Users/francesconigro/Desktop/ViviCalabria.com
```

### Passo 2: Verifica Stato

```bash
git status
```

Questo mostra tutti i file modificati.

### Passo 3: Aggiungi File Modificati

```bash
git add .
```

Oppure aggiungi file specifici:

```bash
git add components/
git add app/
git add data/
git add lib/
git add next.config.js
```

### Passo 4: Crea Commit

```bash
git commit -m "fix: Corretti modal Come Raggiungerci, selettore lingua e sezione territorio

- Modal Come Raggiungerci: posizionamento e overflow corretti
- Selettore lingua: funziona con notifica (traduzione in arrivo)
- Sezione Territorio: aggiunta con 8 mete turistiche principali
- Recensioni: gestione errori migliorata
- Sezione territorio integrata in homepage"
```

### Passo 5: Push su GitHub

```bash
git push origin main
```

**✅ Dopo il push, Vercel farà il deploy automaticamente!**

---

## 🔍 VERIFICA DEPLOY

### Dopo il Push

1. Vai su [Vercel Dashboard](https://vercel.com/dashboard)
2. Trova il progetto "Villa Olimpia"
3. Vedi il deploy in corso
4. Attendi 1-2 minuti
5. ✅ Deploy completato!

---

## 🆘 PROBLEMI COMUNI

### Errore: "Your branch is ahead of 'origin/main'"

Significa che hai commit locali non pushati. Risolvi così:

```bash
git pull origin main
# Se ci sono conflitti, risolvili, poi:
git push origin main
```

### Errore: "Changes not staged for commit"

Devi aggiungere i file prima del commit:

```bash
git add .
git commit -m "messaggio"
git push origin main
```

### Errore: "Permission denied"

Verifica di avere i permessi sul repository GitHub. Se non li hai, chiedi al proprietario del repo.

---

## 📝 ALTERNATIVA: GitHub Desktop

Se preferisci un'interfaccia grafica:

1. Apri **GitHub Desktop**
2. Seleziona il repository "Villa Olimpia"
3. Vedrai tutti i file modificati
4. Scrivi un messaggio di commit
5. Clicca **"Commit to main"**
6. Clicca **"Push origin"**

---

## ✅ CHECKLIST PRE-DEPLOY

- [ ] Build locale funziona: `npm run build`
- [ ] Nessun errore TypeScript
- [ ] Testato localmente: `npm run dev`
- [ ] Tutti i file modificati aggiunti: `git add .`
- [ ] Commit creato
- [ ] Push eseguito
- [ ] Deploy verificato su Vercel

---

## 🎯 DOPO IL DEPLOY

1. ✅ Verifica sito in produzione
2. ✅ Testa pagina recensioni
3. ✅ Testa modal "Come Raggiungerci"
4. ✅ Testa selettore lingua
5. ✅ Verifica sezione territorio

---

**Hai bisogno di aiuto?** Fammi sapere se hai problemi con questi comandi!

