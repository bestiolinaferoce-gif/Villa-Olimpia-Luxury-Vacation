#!/bin/bash

# Comando per liberare porta e avviare server locale
# Esegui: bash AVVIA_LOCALE.sh

echo "🚀 Avvio server locale..."
echo ""

# 1. Libera porta 3001
echo "🔓 Libero porta 3001..."
lsof -ti:3001 | xargs kill -9 2>/dev/null || echo "Porta già libera"
sleep 1

# 2. Pulisci cache
echo "🧹 Pulisco cache..."
rm -rf .next 2>/dev/null || true

# 3. Avvia server
echo "✅ Avvio server su http://localhost:3001"
echo ""
npm run dev





