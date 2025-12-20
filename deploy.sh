#!/bin/bash

# Script di Deploy Automatico per Villa Olimpia
# Questo script prepara e deploya il sito su Vercel

set -e  # Exit on error

echo "🚀 Avvio deploy automatico per Villa Olimpia..."
echo ""

# Colori per output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 1. Verifica che siamo nella directory corretta
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Errore: package.json non trovato. Assicurati di essere nella directory del progetto.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Directory progetto verificata${NC}"

# 2. Verifica che il build funzioni
echo ""
echo "📦 Eseguo build di verifica..."
if npm run build > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Build completato con successo${NC}"
else
    echo -e "${RED}❌ Errore durante il build. Controlla gli errori sopra.${NC}"
    exit 1
fi

# 3. Verifica se Vercel è installato
echo ""
echo "🔍 Verifico Vercel CLI..."
if ! command -v vercel &> /dev/null && ! npx vercel --version &> /dev/null; then
    echo -e "${YELLOW}⚠️  Vercel CLI non trovato. Installazione tramite npx...${NC}"
fi

# 4. Deploy su Vercel
echo ""
echo "🚀 Avvio deploy su Vercel..."
echo -e "${YELLOW}Nota: Se non sei autenticato, ti verrà chiesto di fare login${NC}"
echo ""

# Usa npx per assicurarsi che Vercel sia disponibile
npx vercel --prod --yes

echo ""
echo -e "${GREEN}✅ Deploy completato!${NC}"
echo ""
echo "🌐 Il tuo sito dovrebbe essere disponibile su Vercel."
echo "📊 Controlla il dashboard Vercel per i dettagli."
