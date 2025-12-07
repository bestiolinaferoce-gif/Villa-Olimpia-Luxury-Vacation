#!/usr/bin/env python3
"""
Script per copiare automaticamente tutte le foto dei 3 appartamenti
"""

import os
import shutil
from pathlib import Path

HOME = Path.home()
DESKTOP = HOME / "Desktop"
DEST_BASE = Path(__file__).parent.parent / "public" / "images" / "villa" / "appartamenti"

print("📸 COPIA AUTOMATICA TUTTE LE FOTO")
print("=" * 40)
print()

# Crea cartelle
for folder in ["frangipane", "fiordaliso", "orchidea"]:
    (DEST_BASE / folder).mkdir(parents=True, exist_ok=True)
    print(f"✅ Cartella creata/verificata: {folder}")

copied = 0
errors = 0

# FRANGIPANE
print("\n📸 FRANGIPANE:")
frangipane_source = DESKTOP / "Frangipane"
if frangipane_source.exists():
    files = {
        "Camera Matrimoniale Appartamento Frangipane(2).jpg": "main.jpg",
        "Camera Matrimoniale Frangipane (1).jpg": "camera-matrimoniale-frangipane-1.jpg",
        "Cucina Appartamento Frangipane 1.jpg": "cucina-appartamento-frangipane-1.jpg",
        "Cucina appartamento Frangipane 3 .jpg": "cucina-appartamento-frangipane-3.jpg",
        "Bagno Frangipane .jpg": "bagno-frangipane.jpg",
        "Zona Living Appartamento Lavanda .jpg": "zona-living-appartamento-lavanda.jpg",
    }
    
    for source_name, dest_name in files.items():
        source = frangipane_source / source_name
        dest = DEST_BASE / "frangipane" / dest_name
        if source.exists():
            try:
                shutil.copy2(source, dest)
                print(f"  ✅ {dest_name}")
                copied += 1
            except Exception as e:
                print(f"  ❌ Errore {source_name}: {e}")
                errors += 1
        else:
            print(f"  ⚠️  Non trovato: {source_name}")
else:
    print(f"  ⚠️  Cartella non trovata: {frangipane_source}")

# FIORDALISO
print("\n📸 FIORDALISO:")
photo_source = DESKTOP / "Foto Villa Olimpia Sito"
if photo_source.exists():
    files = {
        "Living Room appartamento Azalea .jpg": "main.jpg",
        "Zona Living Appartamento Tulipano ( 1).jpg": "living-1.jpg",
        "Zona Living Appartamento Tulipano ( 2).jpg": "living-2.jpg",
    }
    
    for source_name, dest_name in files.items():
        source = photo_source / source_name
        dest = DEST_BASE / "fiordaliso" / dest_name
        if source.exists():
            try:
                shutil.copy2(source, dest)
                print(f"  ✅ {dest_name}")
                copied += 1
            except Exception as e:
                print(f"  ❌ Errore {source_name}: {e}")
                errors += 1
        else:
            print(f"  ⚠️  Non trovato: {source_name}")

# ORCHIDEA
print("\n📸 ORCHIDEA:")
if photo_source.exists():
    files = {
        "Camera Matrimoniale Appartamento Gardenia.jpg": "main.jpg",
        "Camera Matrimoniale Appartamento Gardenia (1).jpg": "camera-matrimoniale-gardenia-1.jpg",
        "Terrazza Appartamento Azalea .jpg": "terrazza-appartamento-azalea.jpg",
        "Terrazza Azalea 3.jpg": "terrazza-azalea-3.jpg",
    }
    
    for source_name, dest_name in files.items():
        source = photo_source / source_name
        dest = DEST_BASE / "orchidea" / dest_name
        if source.exists():
            try:
                shutil.copy2(source, dest)
                print(f"  ✅ {dest_name}")
                copied += 1
            except Exception as e:
                print(f"  ❌ Errore {source_name}: {e}")
                errors += 1
        else:
            print(f"  ⚠️  Non trovato: {source_name}")

# RIEPILOGO
print("\n📊 RIEPILOGO:")
print(f"  ✅ Foto copiate: {copied}")
if errors > 0:
    print(f"  ❌ Errori: {errors}")

print("\n📁 FOTO FINALI:")
for folder in ["frangipane", "fiordaliso", "orchidea"]:
    folder_path = DEST_BASE / folder
    if folder_path.exists():
        files = list(folder_path.glob("*.jpg"))
        print(f"  {folder}: {len(files)} foto")

print("\n✅ Operazione completata!")
print("\n💡 Ricarica la pagina nel browser per vedere le nuove foto!")


