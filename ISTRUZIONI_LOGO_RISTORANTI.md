# 📸 ISTRUZIONI - Aggiungere Logo Ristoranti

## 🎯 OBIETTIVO
Aggiungere logo/immagini reali per ogni ristorante nella mappa interattiva.

---

## 📋 PROCEDURA PASSO-PASSO

### STEP 1: PREPARA LE IMMAGINI

**Requisiti**:
- **Formato**: JPG o PNG
- **Dimensioni**: 200x200px (quadrato consigliato)
- **Peso**: < 100KB (ottimizzato)
- **Sfondo**: Trasparente o bianco (preferibile)

**Nomi File**:
- `micomare-logo.jpg`
- `da-mimmo-logo.jpg`
- `aragosta-logo.jpg`
- `da-annibale-logo.jpg`
- `lido-bahama-logo.jpg`

---

### STEP 2: COPIA LE IMMAGINI

**Destinazione**:
```
public/images/ristoranti/
```

**Comando** (se hai le immagini sul Desktop):
```bash
# Esempio per Micomare
cp ~/Desktop/micomare-logo.jpg public/images/ristoranti/micomare-logo.jpg

# Oppure usa Finder:
# 1. Apri Finder
# 2. Vai a ~/Desktop/
# 3. Trova il logo
# 4. Copia in: public/images/ristoranti/
```

---

### STEP 3: VERIFICA

**Controlla che i file esistano**:
```bash
ls -la public/images/ristoranti/
```

**Dovresti vedere**:
```
micomare-logo.jpg
da-mimmo-logo.jpg
aragosta-logo.jpg
da-annibale-logo.jpg
lido-bahama-logo.jpg
```

---

### STEP 4: TESTA NEL BROWSER

1. **Avvia il server**:
   ```bash
   npm run dev
   ```

2. **Visita la pagina**:
   ```
   http://localhost:3001/enogastronomia
   ```

3. **Verifica**:
   - I logo appaiono nella sidebar della mappa
   - I logo appaiono nel modal dettaglio
   - Se un logo non esiste, viene mostrato un placeholder elegante (🍴)

---

## ⚠️ NOTA IMPORTANTE

**Se un logo non esiste**:
- ✅ Il sistema mostra automaticamente un placeholder elegante
- ✅ Non ci sono errori o immagini rotte
- ✅ L'esperienza utente rimane fluida

**Puoi aggiungere i logo quando disponibili**, il sito funziona perfettamente anche senza!

---

## 🎨 ALTERNATIVE SE NON HAI I LOGO

### Opzione 1: Usa Foto del Ristorante
- Prendi una foto dell'esterno o interno
- Ritagliala in formato quadrato 200x200px
- Usala come logo

### Opzione 2: Crea Logo Semplice
- Usa un tool online (Canva, Figma)
- Crea un logo semplice con nome ristorante
- Esporta come JPG 200x200px

### Opzione 3: Usa Placeholder Temporaneo
- Il sistema mostra già un placeholder elegante
- Puoi aggiungere i logo reali in seguito

---

## ✅ CHECKLIST

- [ ] Logo Micomare aggiunto
- [ ] Logo Da Mimmo aggiunto
- [ ] Logo L'Aragosta aggiunto
- [ ] Logo Da Annibale aggiunto
- [ ] Logo Lido Bahama aggiunto
- [ ] Testato nel browser
- [ ] Verificato che appaiano correttamente

---

**Il sito funziona perfettamente anche senza i logo reali!** ✅











