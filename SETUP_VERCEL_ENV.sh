#!/bin/bash
# =============================================================
# SETUP VARIABILI AMBIENTE VERCEL — Villa Olimpia
# Esegui questo script dopo aver fatto: npx vercel login
# =============================================================

echo "🔧 Aggiunta variabili ambiente su Vercel — Villa Olimpia"
echo ""

# Verifica login Vercel
if ! npx vercel whoami &> /dev/null; then
  echo "❌ Non sei loggato su Vercel."
  echo "   Esegui prima: npx vercel login"
  exit 1
fi

PROJECT="villa-olimpia-luxury-vacation"

# ============================================================
# LEADS — webhook n8n (CRITICO: il form non funziona senza)
# ============================================================
echo "➕ LEADS_WEBHOOK_URL..."
echo "http://72.60.20.32:62925/webhook/lead-intake" | npx vercel env add LEADS_WEBHOOK_URL production --scope bestiolinaferoces-projects 2>/dev/null || true
echo "http://72.60.20.32:62925/webhook/lead-intake" | npx vercel env add LEADS_WEBHOOK_URL preview --scope bestiolinaferoces-projects 2>/dev/null || true

echo "➕ LEADS_WEBHOOK_TOKEN..."
echo "6e940a38c400726cd3a28840d9eb0412" | npx vercel env add LEADS_WEBHOOK_TOKEN production --scope bestiolinaferoces-projects 2>/dev/null || true
echo "6e940a38c400726cd3a28840d9eb0412" | npx vercel env add LEADS_WEBHOOK_TOKEN preview --scope bestiolinaferoces-projects 2>/dev/null || true

echo "➕ LEADS_FROM_EMAIL..."
echo "Villa Olimpia <noreply@villaolimpiacaporizzuto.com>" | npx vercel env add LEADS_FROM_EMAIL production --scope bestiolinaferoces-projects 2>/dev/null || true
echo "Villa Olimpia <noreply@villaolimpiacaporizzuto.com>" | npx vercel env add LEADS_FROM_EMAIL preview --scope bestiolinaferoces-projects 2>/dev/null || true

echo "➕ LEADS_AUTOREPLY_ENABLED..."
echo "true" | npx vercel env add LEADS_AUTOREPLY_ENABLED production --scope bestiolinaferoces-projects 2>/dev/null || true

echo "➕ LEADS_TO_EMAIL..."
echo "villaolimpiacaporizzuto@gmail.com" | npx vercel env add LEADS_TO_EMAIL production --scope bestiolinaferoces-projects 2>/dev/null || true

echo ""
echo "✅ Variabili aggiunte! Esegui ora: npx vercel --prod"
echo ""
echo "📋 RIEPILOGO variabili aggiunte:"
echo "   LEADS_WEBHOOK_URL     = http://72.60.20.32:62925/webhook/lead-intake"
echo "   LEADS_WEBHOOK_TOKEN   = 6e940a38c400726cd3a28840d9eb0412"
echo "   LEADS_FROM_EMAIL      = Villa Olimpia <noreply@villaolimpiacaporizzuto.com>"
echo "   LEADS_AUTOREPLY_ENABLED = true"
echo "   LEADS_TO_EMAIL        = villaolimpiacaporizzuto@gmail.com"
