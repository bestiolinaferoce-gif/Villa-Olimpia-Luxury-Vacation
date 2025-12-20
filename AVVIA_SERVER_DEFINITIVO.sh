#!/bin/bash

# 🚀 SCRIPT DEFINITIVO - AVVIO SERVER VILLA OLIMPIA
# Questo script risolve tutti i problemi comuni e avvia il server in modo affidabile

set -e  # Esce se c'è un errore

echo "🚀 AVVIO SERVER VILLA OLIMPIA - VERSIONE DEFINITIVA"
echo "=================================================="
echo ""

# Colori per output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Funzione per stampare messaggi
print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${YELLOW}ℹ️  $1${NC}"
}

# Vai nella directory del progetto
PROJECT_DIR="/Users/francesconigro/Desktop/VillaOlimpia"
cd "$PROJECT_DIR" || exit 1

print_info "Directory progetto: $PROJECT_DIR"
echo ""

# STEP 1: Ferma tutti i processi esistenti
print_info "STEP 1: Fermo processi esistenti..."
lsof -ti:3000,3001,3002,3003 2>/dev/null | xargs kill -9 2>/dev/null || true
pkill -f "next dev" 2>/dev/null || true
sleep 2
print_success "Processi terminati"
echo ""

# STEP 2: Pulizia cache completa
print_info "STEP 2: Pulizia cache completa..."
rm -rf .next
rm -rf node_modules/.cache
rm -rf .turbo
rm -rf .swc
print_success "Cache pulita"
echo ""

# STEP 3: Verifica Node.js
print_info "STEP 3: Verifica Node.js..."
if ! command -v node &> /dev/null; then
    print_error "Node.js non trovato! Installa Node.js prima di continuare."
    exit 1
fi
NODE_VERSION=$(node -v)
print_success "Node.js versione: $NODE_VERSION"
echo ""

# STEP 4: Verifica npm
print_info "STEP 4: Verifica npm..."
if ! command -v npm &> /dev/null; then
    print_error "npm non trovato!"
    exit 1
fi
NPM_VERSION=$(npm -v)
print_success "npm versione: $NPM_VERSION"
echo ""

# STEP 5: Verifica dipendenze
print_info "STEP 5: Verifica dipendenze..."
if [ ! -d "node_modules" ]; then
    print_info "node_modules non trovato. Installo dipendenze..."
    npm install --legacy-peer-deps
    print_success "Dipendenze installate"
else
    print_success "Dipendenze presenti"
fi
echo ""

# STEP 6: Verifica file di configurazione
print_info "STEP 6: Verifica configurazione..."
if [ ! -f "package.json" ]; then
    print_error "package.json non trovato!"
    exit 1
fi
if [ ! -f "next.config.js" ]; then
    print_error "next.config.js non trovato!"
    exit 1
fi
print_success "Configurazione OK"
echo ""

# STEP 7: Verifica porta disponibile
print_info "STEP 7: Verifica porta 3001..."
if lsof -Pi :3001 -sTCP:LISTEN -t >/dev/null 2>&1 ; then
    print_error "Porta 3001 già in uso! Termino il processo..."
    lsof -ti:3001 | xargs kill -9 2>/dev/null || true
    sleep 2
fi
print_success "Porta 3001 disponibile"
echo ""

# STEP 8: Avvio server
echo "=================================================="
print_success "TUTTO PRONTO! Avvio server..."
echo "=================================================="
echo ""
print_info "👉 Il sito sarà disponibile su: http://localhost:3001"
print_info "👉 Premi Ctrl+C per fermare il server"
echo ""
echo "=================================================="
echo ""

# Avvia il server con output dettagliato
npm run dev

