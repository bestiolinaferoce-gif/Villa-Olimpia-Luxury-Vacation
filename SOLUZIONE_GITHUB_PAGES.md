# 🌐 SOLUZIONE ALTERNATIVA - GitHub Pages (Static Export)

**Se Netlify non va bene, usa GitHub Pages con export statico**

---

## ⚠️ LIMITAZIONE

GitHub Pages supporta solo siti statici. Next.js App Router richiede export statico.

---

## 🔧 CONFIGURAZIONE

### STEP 1: Modifica next.config.js

Aggiungi `output: 'export'`:

```javascript
const nextConfig = {
  output: 'export', // Export statico per GitHub Pages
  reactStrictMode: true,
  // ... resto configurazione
}
```

### STEP 2: Build Statico

```bash
npm run build
```

Questo genererà una cartella `out/` con il sito statico.

### STEP 3: Push su GitHub

```bash
git add out/
git commit -m "Add static export for GitHub Pages"
git push
```

### STEP 4: Configura GitHub Pages

1. Vai su: https://github.com/bestiolinaferoce-gif/Villa-Olimpia-Luxury-Vacation/settings/pages
2. Source: Seleziona "Deploy from a branch"
3. Branch: `main`
4. Folder: `/out`
5. Clicca "Save"

---

## ⚠️ SVANTAGGI

- ❌ Niente server-side rendering
- ❌ Alcune funzionalità Next.js non funzionano
- ❌ Routing limitato

---

**Consiglio: Usa Netlify invece!** ✅

