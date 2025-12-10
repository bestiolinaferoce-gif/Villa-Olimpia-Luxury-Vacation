#!/usr/bin/env python3
import os

# Leggi lista duplicati da DUPLICATES_REPORT.txt
report_path = '/Users/francesconigro/Desktop/ViviCalabria.com/DUPLICATES_REPORT.txt'

with open(report_path, 'r') as f:
    content = f.read()

# Estrai path duplicati ed elimina
duplicates_section = content.split('DUPLICATI DA ELIMINARE:')[1].split('NUOVE FOTO')[0]

deleted_count = 0
for line in duplicates_section.strip().split('\n'):
    if line.startswith('- '):
        filepath = line[2:].strip()
        if os.path.exists(filepath):
            os.remove(filepath)
            print(f"✓ Eliminato: {os.path.basename(filepath)}")
            deleted_count += 1

print(f"\n{'='*60}")
print(f"ELIMINATI {deleted_count} DUPLICATI")
print(f"{'='*60}")

