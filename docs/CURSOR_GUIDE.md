# Guida Cursor: Villa Olimpia Content Management

## 🎯 Quick Start per Cursor

### 1. Aprire il Progetto in Cursor

```bash
# Naviga nella directory
cd /Users/francesconigro/Desktop/ViviCalabria.com

# Apri con Cursor
cursor .
```

### 2. Attivare Claude Agent

**Shortcut**: `Cmd/Ctrl + L` per aprire Claude Chat in Cursor

## 📝 Prompt Ottimizzati per Claude Agent

### A. Generazione Contenuti

#### Template Base

```
Analizza la struttura di Villa Olimpia e genera contenuti professionali 
per l'appartamento [NOME] con le seguenti caratteristiche:

- Lingua: [IT/EN]
- Tipo: [long/ota]
- Tono: Professionale, accogliente, orientato al turismo di qualità
- Keywords: [lista keywords specifiche]
- USP: [punti di forza unici dell'appartamento]

Rispetta i limiti:
- OTA: max 500 caratteri
- Long: min 100 caratteri, descrizione dettagliata

Il contenuto deve evidenziare: posizione, comfort, servizi, atmosfera.
```

#### Esempio Pratico

```
Genera descrizione completa (long) in italiano per l'appartamento Azalea.

Caratteristiche da evidenziare:
- Vista panoramica
- Arredamento moderno
- Vicinanza al centro
- Ideale per coppie
- Wi-Fi gratuito, cucina completa

Scrivi in tono elegante ma caldo, enfatizzando l'esperienza ospite.
```

### B. Validazione e Verifica

```
Esegui validazione completa dei contenuti Villa Olimpia:

1. Verifica che tutti i file esistano
2. Controlla presenza di placeholder
3. Valida lunghezze (OTA max 500 chars)
4. Verifica encoding UTF-8
5. Genera report dettagliato

Usa lo script: scripts/read-and-integrate-content.js
```

### C. Ottimizzazione per OTA

```
Ottimizza la descrizione OTA per [NOME APPARTAMENTO] considerando:

- Keywords per SEO Booking/Airbnb: [lista]
- Lunghezza ottimale: 300-500 caratteri
- Prima frase: hook immediato
- Bullet points: benefici chiave
- Call-to-action: sottile ma efficace

Analizza le best practices delle piattaforme OTA e applica.
```

### D. Traduzione e Sincronizzazione

```
Traduci il contenuto di [APPARTAMENTO] da italiano a inglese:

- Mantieni il tono e lo stile
- Adatta espressioni culturali
- Ottimizza per SEO inglese
- Verifica terminologia alberghiera corretta
- Mantieni la stessa struttura del contenuto IT

Salva in: data/apartments/en/[APPARTAMENTO]_[tipo].txt
```

### E. Export per CMS

```
Prepara export dei contenuti Villa Olimpia per [Next.js/WordPress/Custom CMS]:

1. Carica tutti i contenuti da data/apartments/
2. Struttura in formato JSON ottimizzato per [framework]
3. Includi metadata: slug, id, categoria
4. Genera file separati per lingua se necessario
5. Valida output JSON

Usa script: scripts/read-and-integrate-content.js
Personalizza output per [specifiche del CMS]
```

## 🔧 Comandi Cursor AI Composer

### Modalità Composer (`Cmd+I`)

**Generazione Multi-File**:

```
@workspace Genera contenuti per tutti gli appartamenti Villa Olimpia:

- Crea descrizioni long e ota
- Sia in italiano che inglese  
- Usa template coerente
- Salva nei percorsi corretti: data/apartments/{lang}/{apt}_{tipo}.txt
```

**Refactoring Globale**:

```
@workspace Aggiorna tutti i file OTA per ridurre lunghezza sotto 450 chars 
mantenendo informazioni chiave e ottimizzando per keywords SEO
```

## 📊 Workflow Consigliato

### Fase 1: Setup Iniziale (Fatto ✅)

- [x] Struttura directory creata
- [x] File di configurazione pronti
- [x] Script di utilità disponibili
- [x] Documentazione completa

### Fase 2: Content Generation (Da fare con Cursor)

1. **Appartamento per Appartamento**

   ```
   Per ogni appartamento:
   1. Chiedi a Claude di generare contenuto IT (long + ota)
   2. Review e affina
   3. Genera traduzione EN
   4. Valida con script
   ```

2. **Batch Generation** (più veloce)

   ```
   Usa Composer per generare 2-3 appartamenti alla volta
   Poi review e affina in batch
   ```

### Fase 3: Validazione

```bash
# In Cursor terminal
cd /Users/francesconigro/Desktop/ViviCalabria.com
node scripts/read-and-integrate-content.js
```

### Fase 4: Export

```bash
# Genera tutti gli export
node scripts/read-and-integrate-content.js

# Verifica output in data/apartment-content.ts
```

## 💡 Tips & Tricks

### 1. Context Management

Cursor ha limiti di context. Per progetti con molti file:

- Usa `@file` per referenziare file specifici
- Usa `@folder` per directory
- Chiudi file non necessari per liberare context

### 2. Iterative Refinement

```
Genera → Review → Affina → Valida
└─> Loop fino a soddisfazione
```

### 3. Template Consistency

Dopo aver generato il primo appartamento perfetto:

```
Usa [Azalea] come template di riferimento per generare 
gli altri appartamenti mantenendo stile e struttura
```

### 4. Multi-Language Workflow

```
1. Completa prima TUTTI gli appartamenti in IT
2. Poi traduci TUTTI in EN
→ Più coerente e veloce della traduzione one-by-one
```

## 🐛 Troubleshooting

### Claude non trova i file

```
@workspace mostra la struttura del progetto
→ Poi referenzia esplicitamente: @file data/apartments/it/Azalea_long.txt
```

### Output troppo lungo

```
Il contenuto generato supera i limiti. Rigenera [NOME]_ota.txt 
con massimo 450 caratteri, mantenendo solo informazioni essenziali
```

### Stile incoerente

```
Analizza @file data/apartments/it/Azalea_long.txt come reference.
Rigenera [altro appartamento] usando lo stesso tono e struttura
```

## 📋 Checklist Pre-Deploy

Prima di integrare con il sito web, verifica:

- [ ] Tutti i 9 appartamenti hanno contenuti completi (IT + EN)
- [ ] Nessun placeholder nei file
- [ ] Script `read-and-integrate-content.js` passa senza errori
- [ ] Descrizioni OTA sotto 500 caratteri
- [ ] Descrizioni long > 100 caratteri
- [ ] Tono e stile uniformi tra appartamenti
- [ ] Keywords SEO inserite naturalmente
- [ ] Traduzioni EN accurate e naturali
- [ ] Export JSON generati correttamente
- [ ] Metadata corretti in project-config.json

## 🚀 Next Steps

1. **Integrazione Immagini** (Gemini + Nanobanana)

   ```
   Genera prompt per immagini AI di ogni appartamento
   Coordina stile visivo con tono testuale
   ```

2. **SEO Optimization**

   ```
   Analizza keywords e ottimizza tutti i testi
   Genera meta descriptions
   ```

3. **CMS Integration**

   ```
   Import contenuti nel CMS scelto
   Test visualizzazione
   ```

---

**Pro Tip**: Salva questa guida negli snippet di Cursor per accesso rapido!















