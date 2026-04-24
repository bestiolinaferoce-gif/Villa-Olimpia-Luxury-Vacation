#!/bin/zsh

set -euo pipefail

CANONICAL_PATH="/Users/francesconigro/Documents/New project/Villa-Olimpia-Luxury-Vacation-clean"
CURRENT_PATH="$(pwd)"

echo "Current path: $CURRENT_PATH"
echo "Canonical path: $CANONICAL_PATH"

if [[ "$CURRENT_PATH" != "$CANONICAL_PATH" ]]; then
  echo
  echo "ERROR: non sei nella repo canonica."
  echo "Usa solo: $CANONICAL_PATH"
  exit 1
fi

echo
echo "Repo canonica confermata."
echo
git remote -v
echo
git rev-parse --short HEAD
