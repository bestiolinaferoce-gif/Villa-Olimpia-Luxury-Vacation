# 🔧 FIX ERRORE EMAILJS - "Insufficient authentication scopes"

## ❌ ERRORE ATTUALE
```
412 Gmail_API: Request had insufficient authentication scopes
```

**Causa:** Quando hai autorizzato EmailJS, non hai concesso il permesso "Send email on your behalf".

---

## ✅ SOLUZIONE PASSO-PASSO

### STEP 1: Disconnetti Gmail (Nella finestra aperta)

1. **Nella finestra "Config Service"** che hai aperto
2. Clicca sul pulsante **"Disconnect"** (accanto a villaolimpiacaporizzuto@gmail.com)
3. Attendi la disconnessione

---

### STEP 2: Riconnetti Gmail con TUTTI i permessi

1. **Nella stessa finestra**, clicca di nuovo per connettere Gmail
2. **IMPORTANTE:** Quando Google ti chiede i permessi, assicurati di:
   - ✅ Spuntare TUTTE le caselle
   - ✅ In particolare, concedere il permesso **"Send email on your behalf"**
   - ✅ Non saltare nessun permesso

3. **Autorizza completamente** l'accesso

---

### STEP 3: Verifica la connessione

1. Dopo la riconnessione, dovresti vedere:
   - ✅ "Connected as villaolimpiacaporizzuto@gmail.com"
   - ✅ Nessun errore rosso
   - ✅ La checkbox "Send test email" funzionante

2. **Spunta** "Send test email to verify configuration"

3. Clicca **"Create Service"**

---

### STEP 4: Se l'errore persiste

Se vedi ancora l'errore dopo la riconnessione:

#### Opzione A: Revoca permessi e riautorizza
1. Vai su: https://myaccount.google.com/permissions
2. Trova "EmailJS" nella lista
3. Clicca "Revoke" (Revoca)
4. Torna su EmailJS e riconnetti Gmail
5. **Questa volta** concedi TUTTI i permessi

#### Opzione B: Usa un altro provider
1. Nella finestra "Config Service", prova con:
   - **Outlook** (se hai account Microsoft)
   - **Yahoo Mail**
   - **Custom SMTP** (più complesso)

---

## 🎯 CHECKLIST

Prima di cliccare "Create Service", verifica:
- [ ] Gmail è connesso come villaolimpiacaporizzuto@gmail.com
- [ ] NON c'è errore rosso
- [ ] La checkbox "Send test email" è selezionata
- [ ] Hai concesso TUTTI i permessi a Google

---

## 💡 PERCHÉ SUCCEDE?

Google richiede permessi specifici per inviare email. Se durante l'autorizzazione hai cliccato "Skip" o "Deny" su qualche permesso, EmailJS non può inviare email.

**Soluzione:** Riconnetti e questa volta concedi TUTTI i permessi richiesti.

---

**Procedi con Step 1: Disconnetti e riconnetti Gmail!** 🔄
















