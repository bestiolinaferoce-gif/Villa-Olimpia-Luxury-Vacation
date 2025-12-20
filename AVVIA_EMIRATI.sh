#!/bin/bash

# Script ottimizzato per Emirati Arabi
# Gestisce restrizioni di rete e VPN

echo "🇦🇪 Avvio Server - Configurazione Emirati"
echo "=========================================="
echo ""

# 1. Libera porte
echo "🔓 Libero porte..."
lsof -ti:3001 | xargs kill -9 2>/dev/null || true
lsof -ti:8080 | xargs kill -9 2>/dev/null || true
lsof -ti:3000 | xargs kill -9 2>/dev/null || true
sleep 1

# 2. Pulisci cache
echo "🧹 Pulisco cache..."
rm -rf .next 2>/dev/null || true

# 3. Trova IP locale
echo "🌐 IP locale disponibili:"
ifconfig | grep "inet " | grep -v 127.0.0.1 | awk '{print "   - http://" $2 ":3001"}'
echo ""

# 4. Chiedi metodo
echo "Scegli metodo:"
echo "1) localhost:3001 (standard)"
echo "2) 0.0.0.0:3001 (tutti gli IP)"
echo "3) Porta 8080 (alternativa)"
echo "4) Build statico (nessuna rete)"
echo ""
read -p "Scelta (1-4): " choice

case $choice in
  1)
    echo "🚀 Avvio su localhost:3001"
    npm run dev
    ;;
  2)
    echo "🚀 Avvio su 0.0.0.0:3001"
    next dev -p 3001 -H 0.0.0.0
    ;;
  3)
    echo "🚀 Avvio su porta 8080"
    next dev -p 8080 -H 0.0.0.0
    echo ""
    echo "✅ Apri: http://localhost:8080"
    ;;
  4)
    echo "🏗️  Build statico..."
    npm run build
    echo "✅ Avvio server produzione..."
    npm start
    echo ""
    echo "✅ Apri: http://localhost:3000"
    ;;
  *)
    echo "🚀 Avvio standard..."
    npm run dev
    ;;
esac




