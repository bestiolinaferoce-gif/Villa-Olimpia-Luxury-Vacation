# 📝 Integrazione Contenuti Appartamenti

## 🎯 Panoramica

Questo documento spiega come integrare i contenuti degli appartamenti da file esterni nel sito web Villa Olimpia.

## 📁 Struttura File

I contenuti devono essere nella directory:
```
~/Desktop/Villa Olimpia 2026/villa_olimpia_final/
```

### Formato File Richiesto

Ogni appartamento deve avere 4 file (2 lingue × 2 tipi):

```
[Nome]_ITA_long.txt    → Descrizione completa in italiano
[Nome]_ITA_OTA.txt     → Descrizione breve per OTA (max 500 caratteri)
[Nome]_ENG_long.txt    → Descrizione completa in inglese
[Nome]_ENG_OTA.txt     → Descrizione breve per OTA in inglese
```

### Esempio

```
Frangipane_ITA_long.txt
Frangipane_ITA_OTA.txt
Frangipane_ENG_long.txt
Frangipane_ENG_OTA.txt
```

## 🚀 Come Usare

### Opzione 1: Script Automatico (Consigliato)

```bash
# Esegui lo script di importazione
node scripts/read-and-integrate-content.js
```

Lo script:
- ✅ Legge tutti i file dalla directory esterna
- ✅ Verifica che non siano placeholder
- ✅ Genera automaticamente `data/apartment-content.ts`
- ✅ Mantiene la struttura esistente
- ✅ Estrae features e "perfect for" automaticamente

### Opzione 2: Integrazione Manuale

Se preferisci integrare manualmente:

1. **Leggi i file** dalla directory esterna
2. **Copia i contenuti** in `data/apartment-content.ts`
3. **Aggiorna** i campi corrispondenti:
   - `fullPremiumDescription` ← `[Nome]_ITA_long.txt`
   - `otaDescription` ← `[Nome]_ITA_OTA.txt`
   - `shortDescription` ← estratto da OTA o long

## 📊 Mapping Appartamenti

| Nome File | ID | Nome Appartamento |
|-----------|----|-------------------|
| Frangipane | 1 | Frangipane |
| Fiordaliso | 2 | Fiordaliso |
| Orchidea | 3 | Orchidea |
| Tulipano | 4 | Tulipano |
| Geranio | 5 | Geranio |
| Giglio | 6 | Giglio |
| Lavanda | 7 | Lavanda |
| Gardenia | 8 | Gardenia |
| Azalea | 9 | Azalea |

## ✅ Checklist Pre-Importazione

Prima di eseguire l'importazione, verifica:

- [ ] Tutti i 9 appartamenti hanno file ITA_long.txt
- [ ] Tutti i 9 appartamenti hanno file ITA_OTA.txt
- [ ] I file non contengono placeholder
- [ ] I contenuti sono completi e corretti
- [ ] Le descrizioni OTA sono max 500 caratteri
- [ ] Le descrizioni long sono complete e dettagliate

## 🔍 Verifica Contenuti

Dopo l'importazione, verifica:

```bash
# Controlla che il file sia stato generato
cat data/apartment-content.ts

# Verifica che non ci siano errori TypeScript
npm run build
```

## 📝 Struttura Contenuti Generati

Lo script genera automaticamente:

```typescript
export const apartmentContent: Record<number, ApartmentContent> = {
  1: {
    seoTitle: "Appartamento Frangipane – Villa Olimpia Capo Rizzuto",
    airbnbTitle: "🏖️ Frangipane – Appartamento con Piscina | Villa Olimpia",
    shortDescription: "...", // Da OTA o estratto
    fullPremiumDescription: "...", // Da long
    otaDescription: "...", // Da OTA
    features: [...], // Estratte automaticamente
    perfectFor: [...], // Estratte automaticamente
    seoParagraph: "...", // Da long
    technicalSummary: {...}
  },
  // ... altri appartamenti
}
```

## 🐛 Troubleshooting

### Errore: "Directory non trovata"

**Soluzione**: Verifica che la directory esista:
```bash
ls ~/Desktop/Villa\ Olimpia\ 2026/villa_olimpia_final/
```

### Errore: "Nessun contenuto trovato"

**Possibili cause**:
1. I file contengono ancora placeholder
2. I file hanno nomi diversi dal formato atteso
3. I contenuti sono troppo corti (< 50 caratteri)

**Soluzione**: 
- Verifica che i file non contengano "contenuto completo da inserire"
- Controlla i nomi dei file
- Assicurati che i contenuti siano completi

### Errore: "Appartamento non mappato"

**Soluzione**: Verifica che il nome del file corrisponda esattamente a uno dei nomi nella mappa:
- Frangipane
- Fiordaliso
- Orchidea
- Tulipano
- Geranio
- Giglio
- Lavanda
- Gardenia
- Azalea

## 🔄 Workflow Completo

1. **Prepara i contenuti** nei file esterni
2. **Esegui lo script** di importazione
3. **Verifica** che `data/apartment-content.ts` sia aggiornato
4. **Testa** il sito con `npm run dev`
5. **Build** per verificare errori: `npm run build`
6. **Deploy** quando tutto è pronto

## 📞 Supporto

Se hai problemi:
1. Controlla i log dello script
2. Verifica i nomi dei file
3. Assicurati che i contenuti non siano placeholder
4. Controlla che la directory esista

## 🎉 Risultato Finale

Dopo l'importazione riuscita:
- ✅ Tutti i contenuti sono integrati nel sito
- ✅ Le pagine degli appartamenti mostrano i nuovi contenuti
- ✅ SEO ottimizzato con descrizioni complete
- ✅ Descrizioni OTA pronte per Booking/Airbnb















