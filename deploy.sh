#!/bin/bash

# Script per deploy automatico su Netlify
# Esegui: bash deploy.sh

echo "🚀 Preparazione deploy Netlify..."

# Verifica build
echo "📦 Verificando build..."
if npm run build > /dev/null 2>&1; then
    echo "✅ Build completata con successo"
else
    echo "❌ Errore nella build. Correggi gli errori prima di continuare."
    exit 1
fi

# Deploy con Netlify CLI
echo "🌐 Avviando deploy su Netlify..."
echo ""
echo "⚠️  Se è la prima volta, ti verrà chiesto di:"
echo "   1. Aprire il browser per il login"
echo "   2. Autorizzare Netlify"
echo "   3. Scegliere se creare un nuovo sito o collegarne uno esistente"
echo ""

npx netlify-cli deploy --prod --dir=.next

echo ""
echo "✅ Deploy completato!"
echo "🌐 Il tuo sito è ora live su Netlify!"

