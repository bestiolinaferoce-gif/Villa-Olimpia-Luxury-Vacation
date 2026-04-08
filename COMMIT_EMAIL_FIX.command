#!/bin/bash
# COMMIT_EMAIL_FIX.command — Committa il fix email e pusha su GitHub
# Doppio click su questo file dal Mac

cd "$(dirname "$0")"

echo "========================================"
echo "  Villa Olimpia — Fix Email Notifications"
echo "========================================"
echo ""

# Rimuovi lock se esiste
rm -f .git/index.lock 2>/dev/null && echo "✓ Lock rimosso" || true

echo ""
echo "Stato del file modificato:"
git diff --stat lib/lead-inbox.ts

echo ""
echo "Aggiungo lib/lead-inbox.ts allo staging..."
git add lib/lead-inbox.ts

echo ""
echo "Creo il commit..."
git commit -m "fix(email): route lead notifications via Resend-registered inbox

PRIMARY_LEADS_INBOX ora punta a bestiolinaferoce@gmail.com
(email registrata sull'account Resend) per evitare il 403.
Gmail forwarding bestiolinaferoce -> villaolimpiacaporizzuto
è già attivo e instrada le email alla inbox ufficiale.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"

COMMIT_EXIT=$?
if [ $COMMIT_EXIT -ne 0 ]; then
  echo ""
  echo "❌ Commit fallito. Nessuna modifica da committare?"
  git status
  read -p "Premi INVIO per chiudere..."
  exit 1
fi

echo ""
echo "Pushing su GitHub..."
git push origin main

PUSH_EXIT=$?
echo ""
if [ $PUSH_EXIT -eq 0 ]; then
  echo "========================================"
  echo "  ✅ FATTO! Deploy Vercel partito."
  echo "  https://vercel.com/bestiolinaferoces-projects/villa-olimpia-luxury-vacation"
  echo "========================================"
else
  echo "❌ Push fallito (exit $PUSH_EXIT)"
  echo ""
  echo "Tentativo con pull --rebase + push..."
  git pull --rebase origin main && git push origin main
fi

echo ""
read -p "Premi INVIO per chiudere..."
