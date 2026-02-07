# 🔍 Come Analizzare il Sito con Claude

## 📍 METODI PER FORNIRE IL PERCORSO DEL SITO

### 1️⃣ **ANALISI DEL CODICE (Path Relativo)**

Se vuoi che analizzi file specifici del progetto, puoi:

**In VS Code/Cursor:**
1. Clic destro sul file
2. Seleziona **"Copy Relative Path"**
3. Incolla qui, esempio:
   ```
   app/page.tsx
   components/hero-section-premium.tsx
   ```

**Oppure dimmi semplicemente:**
- "Analizza la homepage" → Analizzerò `app/page.tsx`
- "Analizza il componente hero" → Analizzerò `components/hero-section-premium.tsx`
- "Analizza tutto il progetto" → Farò una ricerca completa

---

### 2️⃣ **ANALISI SITO LIVE (URL Pubblico)**

Se il sito Next.js è già deployato su Vercel/Netlify:

**Fornisci l'URL completo:**
```
https://villa-olimpia.vercel.app
```
oppure
```
https://villaolimpia.vercel.app
```

**Claude può:**
- ✅ Navigare il sito con browser integrato
- ✅ Analizzare HTML/CSS/JS renderizzato
- ✅ Verificare console errors
- ✅ Controllare network requests
- ✅ Verificare meta tags e SEO
- ✅ Testare performance

**Come usarlo:**
```
Analizza questo sito: https://villa-olimpia.vercel.app
```

---

### 3️⃣ **ANALISI SITO LOCALE (Localhost)**

Se il sito gira su localhost:

**Avvia il server:**
```bash
npm run dev
```

**Fornisci l'URL locale:**
```
http://localhost:3000
```

**Nota:** Claude può accedere solo a siti pubblicamente raggiungibili. Per localhost, usa invece l'analisi del codice (metodo 1).

---

### 4️⃣ **ANALISI COMPLETA DEL PROGETTO**

Per un'analisi completa, posso:

**1. Listare struttura progetto:**
```bash
tree -L 3 -I 'node_modules'
```

**2. Cercare pattern nel codice:**
```bash
grep -r "pattern" .
```

**3. Analizzare file specifici:**
- Leggere file chiave (page.tsx, layout.tsx, etc.)
- Verificare configurazioni (next.config.js, package.json)
- Controllare componenti principali

---

## 🎯 ESEMPI PRATICI

### Analisi Homepage:
```
"Analizza app/page.tsx"
```
o
```
"Fai un'analisi SEO della homepage"
```

### Analisi Componente Specifico:
```
"Analizza components/hero-section-premium.tsx"
```

### Analisi Performance:
```
"Verifica le ottimizzazioni performance in next.config.js"
```

### Analisi SEO:
```
"Controlla tutti i metadata in lib/metadata.ts"
```

### Analisi Sito Live:
```
"Analizza https://villa-olimpia.vercel.app"
```

---

## 🔧 ANALISI AUTOMATICHE CHE POSSO FARE

### Analisi Codice:
- ✅ SEO (meta tags, structured data)
- ✅ Performance (ottimizzazioni, lazy loading)
- ✅ Accessibility (ARIA, semantic HTML)
- ✅ Best practices (TypeScript, component structure)
- ✅ Security (headers, sanitization)
- ✅ Errori e warning

### Analisi Sito Live (se URL fornito):
- ✅ Visual rendering
- ✅ Console errors/warnings
- ✅ Network requests
- ✅ Meta tags nel DOM
- ✅ Structured data
- ✅ Performance metrics (se disponibili)

---

## 📝 COMANDI UTILI

**Per vedere struttura progetto:**
```bash
find . -type f -name "*.tsx" -o -name "*.ts" | head -20
```

**Per cercare pattern:**
```bash
grep -r "export.*metadata" app/
```

**Per analizzare build:**
```bash
npm run build
```

---

## ✅ QUINDI, PER ANALIZZARE:

**Opzione 1 (Codice):**
```
Analizza: app/page.tsx
```

**Opzione 2 (Sito Live):**
```
Analizza: https://tuo-sito.vercel.app
```

**Opzione 3 (Completa):**
```
Fai un'analisi completa del progetto
```

---

**Basta che mi dici cosa vuoi analizzare e come!** 🚀












