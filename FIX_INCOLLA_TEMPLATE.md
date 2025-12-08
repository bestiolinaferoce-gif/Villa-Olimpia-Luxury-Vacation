# 🔧 FIX: Non riesco a incollare il template

## ✅ SOLUZIONE IMMEDIATA

L'editor EmailJS ha due modalità. Devi usare la modalità **"Code View"** per incollare il testo.

---

## 📝 STEP-BY-STEP

### STEP 1: Attiva Code View
1. Nella **toolbar** dell'editor (in alto)
2. Cerca l'icona **`<>`** (due parentesi angolari)
3. **Clicca sull'icona `<>`**
4. L'editor cambierà e vedrai il codice HTML

### STEP 2: Cancella il contenuto esistente
1. Seleziona **TUTTO** il testo che vedi (Cmd+A o Ctrl+A)
2. **Cancella** (Backspace o Delete)
3. L'area dovrebbe essere vuota

### STEP 3: Incolla il template
1. **Copia** questo testo (senza le parentesi graffe):

```
Ciao,

Nuova richiesta prenotazione da Villa Olimpia:

Nome: {{from_name}}
Email: {{from_email}}
Telefono: {{phone}}
Check-in: {{check_in}}
Check-out: {{check_out}}
Ospiti: {{guests}}
Appartamento: {{apartment}}
Messaggio: {{message}}

Rispondi entro 24 ore.

Villa Olimpia
```

2. **Incolla** nell'editor (Cmd+V o Ctrl+V)

### STEP 4: Torna alla visualizzazione normale
1. Clicca di nuovo sull'icona **`<>`** per tornare alla visualizzazione normale
2. Dovresti vedere il testo formattato

### STEP 5: Salva
1. Clicca **"Applica le modifiche"** (pulsante blu in basso)
2. Il template verrà salvato

---

## 🎯 VERSIONE ANCORA PIÙ SEMPLICE

Se ancora non funziona, prova così:

### Opzione A: Modifica il testo esistente
1. **NON cancellare** tutto
2. **Modifica** solo le variabili:
   - Cambia `{{name}}` in `{{from_name}}`
   - Cambia `{{time}}` in `{{check_in}}`
   - Cambia `{{message}}` in `{{message}}`
3. Aggiungi le altre variabili:
   - `{{from_email}}`
   - `{{phone}}`
   - `{{check_out}}`
   - `{{guests}}`
   - `{{apartment}}`

### Opzione B: Usa solo le variabili essenziali
Se proprio non riesci, usa questo template MINIMO:

**Subject:**
```
Prenotazione Villa Olimpia
```

**Content (in Code View):**
```
Nome: {{from_name}}
Email: {{from_email}}
Telefono: {{phone}}
Check-in: {{check_in}}
Check-out: {{check_out}}
Ospiti: {{guests}}
```

Anche questo funzionerà!

---

## 💡 TIPS

- **Code View (`<>`)** è la modalità per editare HTML/testo puro
- **Visual View** è la modalità WYSIWYG (What You See Is What You Get)
- Per incollare testo semplice, usa sempre **Code View**

---

**Prova con Code View (`<>`) e dimmi se funziona!** 🚀

