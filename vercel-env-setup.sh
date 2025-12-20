#!/bin/bash

# Script per aggiungere variabili ambiente su Vercel automaticamente

echo "🔧 Configurazione variabili ambiente Vercel..."
echo ""

# Verifica che vercel CLI sia disponibile
if ! command -v vercel &> /dev/null; then
    echo "📦 Installazione Vercel CLI..."
    npm install -g vercel
fi

# Aggiungi variabili ambiente
echo "➕ Aggiungendo variabili ambiente..."

# EmailJS Service ID
vercel env add NEXT_PUBLIC_EMAILJS_SERVICE_ID production <<< "service_bbp2k8u"
vercel env add NEXT_PUBLIC_EMAILJS_SERVICE_ID preview <<< "service_bbp2k8u"
vercel env add NEXT_PUBLIC_EMAILJS_SERVICE_ID development <<< "service_bbp2k8u"

# EmailJS Template ID
vercel env add NEXT_PUBLIC_EMAILJS_TEMPLATE_ID production <<< "template_2kw4d3d"
vercel env add NEXT_PUBLIC_EMAILJS_TEMPLATE_ID preview <<< "template_2kw4d3d"
vercel env add NEXT_PUBLIC_EMAILJS_TEMPLATE_ID development <<< "template_2kw4d3d"

# EmailJS Public Key
vercel env add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY production <<< "JeiPqp4zNMlRw6ug9"
vercel env add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY preview <<< "JeiPqp4zNMlRw6ug9"
vercel env add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY development <<< "JeiPqp4zNMlRw6ug9"

echo ""
echo "✅ Variabili EmailJS aggiunte!"
echo ""
echo "⚠️  Per Google Maps API Key, devi inserirlo manualmente o dirmi il valore"
echo ""















