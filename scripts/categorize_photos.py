#!/usr/bin/env python3
import os
import re
from pathlib import Path

APARTMENTS = ['azalea', 'fiordaliso', 'frangipane', 'gardenia', 
              'geranio', 'giglio', 'lavanda', 'orchidea', 'tulipano']

def identify_apartment(filename):
    """Identifica appartamento dal nome file"""
    filename_lower = filename.lower()
    name_without_ext = Path(filename).stem.lower()
    
    # Cerca keyword appartamento
    for apt in APARTMENTS:
        if apt in name_without_ext:
            return apt
    
    return None  # Non identificato (foto esterne/villa)

def categorize_photos(new_files):
    """Categorizza tutte le foto per appartamento"""
    
    categorized = {apt: [] for apt in APARTMENTS}
    uncategorized = []
    
    for photo in new_files:
        filename = Path(photo['path']).name
        apartment = identify_apartment(filename)
        
        if apartment:
            categorized[apartment].append(photo)
        else:
            uncategorized.append(photo)
    
    # REPORT
    print("\n" + "="*60)
    print("CATEGORIZZAZIONE FOTO")
    print("="*60)
    
    for apt in APARTMENTS:
        count = len(categorized[apt])
        if count > 0:
            print(f"\n{apt.upper()}: {count} foto")
            for photo in categorized[apt]:
                print(f"  - {Path(photo['path']).name}")
    
    if uncategorized:
        print(f"\n⚠️  NON CATEGORIZZATE (Foto esterne/Villa): {len(uncategorized)}")
        for i, photo in enumerate(uncategorized, 1):
            print(f"{i}. {Path(photo['path']).name}")
    
    # Salva report
    report_path = '/Users/francesconigro/Desktop/ViviCalabria.com/CATEGORIZATION_REPORT.txt'
    with open(report_path, 'w') as f:
        for apt in APARTMENTS:
            if categorized[apt]:
                f.write(f"{apt.upper()}:\n")
                for photo in categorized[apt]:
                    f.write(f"  {photo['path']}\n")
        
        if uncategorized:
            f.write(f"\nNON CATEGORIZZATE (Foto esterne/Villa):\n")
            for photo in uncategorized:
                f.write(f"  {photo['path']}\n")
    
    print(f"\nReport salvato: {report_path}")
    return categorized, uncategorized

# Leggi nuove foto da DUPLICATES_REPORT.txt
new_files = []
with open('/Users/francesconigro/Desktop/ViviCalabria.com/DUPLICATES_REPORT.txt', 'r') as f:
    content = f.read()
    new_section = content.split('NUOVE FOTO DA PROCESSARE:')[1]
    for line in new_section.strip().split('\n'):
        if line.startswith('- '):
            filepath = line[2:].strip()
            if os.path.exists(filepath):
                file_size = os.path.getsize(filepath)
                new_files.append({
                    'path': filepath,
                    'name': Path(filepath).name,
                    'size': file_size
                })

import os
categorized, uncategorized = categorize_photos(new_files)

