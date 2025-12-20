# ✅ STEP 5: Test EmailJS

## 🎉 CONFIGURAZIONE COMPLETATA!

Il file `.env.local` è stato creato con successo con le tue credenziali EmailJS.

---

## 🧪 TEST FINALE

### STEP 1: Riavvia il Server
**IMPORTANTE:** Next.js carica le variabili d'ambiente solo all'avvio. Devi riavviare il server!

1. Se il server è in esecuzione, **fermalo** (Ctrl+C nel terminale)
2. Riavvia con:
   ```bash
   npm run dev
   ```

### STEP 2: Vai alla Pagina Contatti
1. Apri il browser
2. Vai su: `http://localhost:3000/contatti`
3. Oppure clicca su "Contatti" nel menu del sito

### STEP 3: Compila il Form
Compila tutti i campi:
- **Nome:** (es: "Mario Rossi")
- **Email:** (usa la tua email per ricevere il test)
- **Telefono:** (es: "+39 123 456 7890")
- **Check-in:** (seleziona una data)
- **Check-out:** (seleziona una data)
- **Ospiti:** (seleziona un numero)
- **Appartamento:** (opzionale)
- **Messaggio:** (opzionale, es: "Test EmailJS")

### STEP 4: Invia il Form
1. Clicca su **"Invia Richiesta"**
2. Dovresti vedere un messaggio di successo: **"Richiesta inviata con successo!"**
3. Controlla la console del browser (F12) per eventuali errori

### STEP 5: Verifica Email
1. Controlla la tua email: **Villaolimpiacaporizzuto@gmail.com**
2. Dovresti ricevere un'email con tutti i dati del form
3. L'oggetto dovrebbe essere: **"Nuova Richiesta Prenotazione - [Nome]"**

---

## ✅ CHECKLIST VERIFICA

- [ ] Server riavviato (`npm run dev`)
- [ ] Form compilato completamente
- [ ] Messaggio di successo visualizzato
- [ ] Email ricevuta in `Villaolimpiacaporizzuto@gmail.com`
- [ ] Tutti i dati del form sono presenti nell'email
- [ ] Nessun errore nella console del browser

---

## 🐛 SE QUALCOSA NON FUNZIONA

### Errore: "Service ID not found"
- ✅ Verifica che il file `.env.local` esista nella root del progetto
- ✅ Verifica che le variabili inizino con `NEXT_PUBLIC_`
- ✅ **Riavvia il server** (le variabili si caricano solo all'avvio)

### Errore: "Template ID not found"
- ✅ Verifica che il Template ID sia corretto in `.env.local`
- ✅ Verifica che il template esista in EmailJS

### Errore: "Public Key invalid"
- ✅ Verifica che la Public Key sia corretta in `.env.local`
- ✅ Verifica che la Public Key sia quella giusta in EmailJS → Account → General

### Email non arriva
- ✅ Controlla la cartella spam
- ✅ Verifica che il Service (Gmail) sia connesso correttamente
- ✅ Controlla la console del browser per errori
- ✅ Verifica in EmailJS → Email History se l'email è stata inviata

---

## 🎯 PROSSIMI PASSI

Una volta che il test funziona:
1. ✅ EmailJS è configurato e funzionante!
2. ⏭️ Possiamo passare a Google Maps (se vuoi)
3. ⏭️ Possiamo testare anche il form di prenotazione nella pagina appartamenti

---

**Riavvia il server e testa!** 🚀















