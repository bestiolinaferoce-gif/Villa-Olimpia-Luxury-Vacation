#!/bin/bash

# Quick Fix Script per Problemi VPN
# Esegui: bash QUICK_FIX_VPN.sh

echo "🔧 Quick Fix per Problemi VPN..."
echo ""

# 1. Pulisci cache
echo "📦 Pulizia cache..."
rm -rf .next
echo "✅ Cache pulita"
echo ""

# 2. Verifica porta
echo "🔍 Verifica porta 3001..."
if lsof -Pi :3001 -sTCP:LISTEN -t >/dev/null ; then
    echo "⚠️  Porta 3001 occupata, libero..."
    lsof -ti:3001 | xargs kill -9 2>/dev/null || true
    sleep 2
fi
echo "✅ Porta 3001 libera"
echo ""

# 3. Disabilita middleware se esiste
if [ -f "middleware.ts" ]; then
    echo "🔄 Disabilito middleware..."
    mv middleware.ts middleware.ts.disabled
    echo "✅ Middleware disabilitato"
    echo ""
fi

# 4. Avvia server
echo "🚀 Avvio server..."
echo ""
echo "📝 Prova questi URL:"
echo "   - http://localhost:3001"
echo "   - http://127.0.0.1:3001"
echo ""
echo "💡 Se non funziona, prova a disabilitare la VPN temporaneamente"
echo ""

npm run dev






