#!/bin/bash

# Script di Diagnostica Completa
# Esegui: bash COMANDO_DIAGNOSTICA.sh

echo "🔍 DIAGNOSTICA COMPLETA - Villa Olimpia"
echo "========================================"
echo ""

# 1. Verifica Node.js
echo "1️⃣ Verifica Node.js..."
node --version || echo "❌ Node.js non trovato"
echo ""

# 2. Verifica npm
echo "2️⃣ Verifica npm..."
npm --version || echo "❌ npm non trovato"
echo ""

# 3. Verifica directory
echo "3️⃣ Verifica directory..."
pwd
echo ""

# 4. Verifica file chiave
echo "4️⃣ Verifica file chiave..."
[ -f "package.json" ] && echo "✅ package.json" || echo "❌ package.json mancante"
[ -f "next.config.js" ] && echo "✅ next.config.js" || echo "❌ next.config.js mancante"
[ -f "app/layout.tsx" ] && echo "✅ app/layout.tsx" || echo "❌ app/layout.tsx mancante"
[ -f "components/header.tsx" ] && echo "✅ components/header.tsx" || echo "❌ components/header.tsx mancante"
echo ""

# 5. Verifica middleware
echo "5️⃣ Verifica middleware..."
if [ -f "middleware.ts" ]; then
    echo "⚠️  middleware.ts presente (potrebbe causare problemi)"
else
    echo "✅ middleware.ts non presente (ok)"
fi
echo ""

# 6. Verifica porta
echo "6️⃣ Verifica porta 3001..."
if lsof -Pi :3001 -sTCP:LISTEN -t >/dev/null ; then
    echo "⚠️  Porta 3001 occupata"
    echo "   Processo:"
    lsof -Pi :3001 -sTCP:LISTEN
else
    echo "✅ Porta 3001 libera"
fi
echo ""

# 7. Verifica dipendenze
echo "7️⃣ Verifica dipendenze..."
if [ -d "node_modules" ]; then
    echo "✅ node_modules presente"
    [ -f "node_modules/next/package.json" ] && echo "✅ Next.js installato" || echo "❌ Next.js non installato"
else
    echo "❌ node_modules mancante - Esegui: npm install"
fi
echo ""

# 8. Pulisci cache
echo "8️⃣ Pulizia cache..."
rm -rf .next 2>/dev/null && echo "✅ Cache .next rimossa" || echo "⚠️  Cache .next non presente"
rm -rf node_modules/.cache 2>/dev/null && echo "✅ Cache node_modules rimossa" || echo "⚠️  Cache node_modules non presente"
echo ""

# 9. Test compilazione
echo "9️⃣ Test compilazione TypeScript..."
npx tsc --noEmit --skipLibCheck 2>&1 | head -20 || echo "⚠️  Errori TypeScript trovati"
echo ""

echo "========================================"
echo "✅ Diagnostica completata!"
echo ""
echo "🚀 Prossimi passi:"
echo "   1. Se tutto ok, esegui: npm run dev"
echo "   2. Apri: http://localhost:3001"
echo "   3. Se ci sono errori, condividi l'output sopra"
echo ""






