#!/usr/bin/env python3
"""
Script per verificare che le foto degli appartamenti siano corrette
e non ci siano foto duplicate o sbagliate
"""

import os
import json
from pathlib import Path

# Directory base
BASE_DIR = Path(__file__).parent.parent
APARTMENTS_DIR = BASE_DIR / "public" / "images" / "villa" / "appartamenti"
APARTMENTS_TS = BASE_DIR / "data" / "apartments.ts"

APARTMENTS = {
    "azalea": 9,
    "fiordaliso": 2,
    "frangipane": 1,
    "gardenia": 8,
    "geranio": 7,
    "giglio": 5,
    "lavanda": 6,
    "orchidea": 3,
    "tulipano": 4,
}

def get_photos_from_ts():
    """Estrae le foto dall'array images in apartments.ts"""
    with open(APARTMENTS_TS, 'r') as f:
        content = f.read()
    
    photos_by_apt = {}
    
    # Estrai immagini per ogni appartamento
    for apt_name, apt_id in APARTMENTS.items():
        photos = []
        # Cerca il pattern images: [ ... ]
        start_idx = content.find(f'id: {apt_id}')
        if start_idx == -1:
            continue
        
        # Trova la sezione images
        images_start = content.find('images: [', start_idx)
        if images_start == -1:
            continue
        
        # Trova la fine dell'array
        bracket_count = 0
        i = images_start + len('images: [')
        while i < len(content):
            if content[i] == '[':
                bracket_count += 1
            elif content[i] == ']':
                if bracket_count == 0:
                    break
                bracket_count -= 1
            elif content[i] == '"' or content[i] == "'":
                # Trova la stringa completa
                quote_char = content[i]
                i += 1
                start_quote = i
                while i < len(content) and content[i] != quote_char:
                    i += 1
                if i < len(content):
                    photo_path = content[start_quote:i]
                    if photo_path.startswith('/images/villa/appartamenti/'):
                        # Estrai solo il nome file
                        filename = photo_path.split('/')[-1]
                        photos.append(filename)
            i += 1
        
        photos_by_apt[apt_name] = photos
    
    return photos_by_apt

def get_actual_photos():
    """Ottiene le foto effettivamente presenti nelle cartelle"""
    actual_photos = {}
    
    for apt_name in APARTMENTS.keys():
        apt_dir = APARTMENTS_DIR / apt_name
        if apt_dir.exists():
            photos = [
                f.name for f in apt_dir.iterdir() 
                if f.is_file() and f.suffix.lower() in ['.jpg', '.jpeg', '.png', '.webp']
            ]
            actual_photos[apt_name] = sorted(photos)
    
    return actual_photos

def find_wrong_photos():
    """Trova foto che hanno nomi che non corrispondono all'appartamento"""
    wrong_photos = {}
    
    for apt_name in APARTMENTS.keys():
        apt_dir = APARTMENTS_DIR / apt_name
        if not apt_dir.exists():
            continue
        
        wrong = []
        for photo_file in apt_dir.iterdir():
            if not photo_file.is_file():
                continue
            
            filename_lower = photo_file.name.lower()
            
            # Controlla se il nome contiene riferimenti ad altri appartamenti
            for other_apt in APARTMENTS.keys():
                if other_apt != apt_name and other_apt in filename_lower:
                    wrong.append(photo_file.name)
                    break
        
        if wrong:
            wrong_photos[apt_name] = wrong
    
    return wrong_photos

def main():
    print("=" * 60)
    print("VERIFICA FOTO APPARTAMENTI")
    print("=" * 60)
    
    # 1. Trova foto sbagliate (con nomi di altri appartamenti)
    print("\n1. RICERCA FOTO CON NOMI SBAGLIATI:")
    print("-" * 60)
    wrong_photos = find_wrong_photos()
    
    if wrong_photos:
        print("⚠️  FOTO TROVATE CON NOMI SBAGLIATI:")
        for apt, photos in wrong_photos.items():
            print(f"\n  {apt.upper()}:")
            for photo in photos:
                print(f"    - {photo}")
    else:
        print("✅ Nessuna foto con nome sbagliato trovata")
    
    # 2. Verifica foto configurate vs foto reali
    print("\n2. VERIFICA FOTO CONFIGURATE VS FOTO REALI:")
    print("-" * 60)
    
    configured_photos = get_photos_from_ts()
    actual_photos = get_actual_photos()
    
    for apt_name in APARTMENTS.keys():
        configured = set(configured_photos.get(apt_name, []))
        actual = set(actual_photos.get(apt_name, []))
        
        missing_in_config = actual - configured
        missing_in_folder = configured - actual
        
        if missing_in_config or missing_in_folder:
            print(f"\n  {apt_name.upper()}:")
            if missing_in_config:
                print(f"    ⚠️  Foto presenti ma non configurate: {len(missing_in_config)}")
                for photo in sorted(missing_in_config):
                    print(f"      - {photo}")
            if missing_in_folder:
                print(f"    ❌ Foto configurate ma mancanti: {len(missing_in_folder)}")
                for photo in sorted(missing_in_folder):
                    print(f"      - {photo}")
    
    # 3. Riepilogo
    print("\n3. RIEPILOGO:")
    print("-" * 60)
    
    total_wrong = sum(len(photos) for photos in wrong_photos.values())
    print(f"  Foto con nomi sbagliati: {total_wrong}")
    
    total_configured = sum(len(photos) for photos in configured_photos.values())
    total_actual = sum(len(photos) for photos in actual_photos.values())
    print(f"  Foto configurate: {total_configured}")
    print(f"  Foto presenti: {total_actual}")
    
    print("\n" + "=" * 60)
    print("VERIFICA COMPLETATA")
    print("=" * 60)

if __name__ == "__main__":
    main()












