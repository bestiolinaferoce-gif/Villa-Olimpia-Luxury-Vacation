#!/bin/bash

# Script per avviare il server Villa Olimpia

echo "🚀 Avvio server Villa Olimpia..."
echo ""

# Vai nella directory del progetto
cd /Users/francesconigro/Desktop/VillaOlimpia

# Ferma eventuali processi in esecuzione
echo "🛑 Fermo processi esistenti..."
lsof -ti:3000 -ti:3001 | xargs kill -9 2>/dev/null || echo "Nessun processo da terminare"

# Pulisci cache
echo "🧹 Pulizia cache..."
rm -rf .next node_modules/.cache .turbo

# Avvia il server
echo "✅ Avvio server su porta 3001..."
echo ""
echo "👉 Il sito sarà disponibile su: http://localhost:3001"
echo ""
echo "Premi Ctrl+C per fermare il server"
echo ""

npm run dev


