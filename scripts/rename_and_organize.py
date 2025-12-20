#!/usr/bin/env python3
import os
import shutil
from pathlib import Path

def rename_and_organize():
    """Rinomina e organizza foto per appartamento"""
    
    print("\n" + "="*60)
    print("RINOMINAZIONE E ORGANIZZAZIONE")
    print("="*60)
    
    operations = []
    
    # Leggi foto Frangipane da categorizzazione
    frangipane_files = [
        "/Users/francesconigro/Desktop/Foto Villa Olimpia Sito/Bagno Frangipane completo.jpg",
        "/Users/francesconigro/Desktop/Foto Villa Olimpia Sito/Camera da letto matrimoniale A Frangipane 1.png"
    ]
    
    existing_dir = "/Users/francesconigro/Desktop/ViviCalabria.com/public/images/villa/appartamenti/frangipane"
    gallery_dir = "/Users/francesconigro/Desktop/ViviCalabria.com/public/images/villa/gallery"
    hero_dir = "/Users/francesconigro/Desktop/ViviCalabria.com/public/images/villa/hero"
    location_dir = "/Users/francesconigro/Desktop/ViviCalabria.com/public/images/villa/location"
    
    # Conta foto esistenti Frangipane
    existing_count = len(list(Path(existing_dir).glob("*.jpg"))) + len(list(Path(existing_dir).glob("*.png")))
    
    print(f"\nFRANGIPANE:")
    print(f"  Foto esistenti: {existing_count}")
    print(f"  Nuove foto: {len(frangipane_files)}")
    
    # Rinomina foto Frangipane
    for i, photo_path in enumerate(frangipane_files):
        if not os.path.exists(photo_path):
            continue
            
        old_path = photo_path
        ext = Path(old_path).suffix.lower()
        
        # Converti PNG in JPG se necessario
        if ext == '.png':
            new_name = "camera-matrimoniale-frangipane-2.jpg"
        else:
            # Bagno completo - verifica se già esiste
            if 'bagno' in Path(old_path).name.lower():
                new_name = "bagno-frangipane-completo.jpg"
            else:
                new_name = f"frangipane-{existing_count + i + 1}.jpg"
        
        new_path = os.path.join(existing_dir, new_name)
        
        operations.append({
            'old': old_path,
            'new': new_path,
            'apartment': 'frangipane',
            'name': new_name
        })
        
        print(f"  {Path(old_path).name} → {new_name}")
    
    # Organizza foto esterne/Villa
    external_files = {
        'gallery': [
            ("Esterni Villa Olimpia.jpg", "esterni-villa-olimpia.jpg"),
            ("Facciata esterna Villa Olimpia ( 3).jpg", "facciata-esterna-villa-olimpia-3.jpg"),
            ("Facciata Villa Olimpia .jpg", "facciata-villa-olimpia.jpg"),
            ("Gazebo notte Olimpia.jpg", "gazebo-notte-olimpia.jpg"),
            ("Gazebo Olimpia 2.jpg", "gazebo-olimpia-2.jpg"),
            ("Ingresso Villa Olimpia.jpg", "ingresso-villa-olimpia.jpg"),
            ("Piscina Villa Olimpia ( 3).jpg", "piscina-villa-olimpia-3.jpg"),
            ("Piscina Villa Olimpia .jpg", "piscina-villa-olimpia.jpg"),
            ("Piscina.jpg", "piscina.jpg"),
            ("Villa Olimpia Notte ( 2).jpg", "villa-olimpia-notte-2.jpg"),
        ],
        'hero': [
            ("Facciata esterna Villa Olimpia Notte.jpg", "facciata-esterna-villa-olimpia-notte.jpg"),
        ],
        'location': [
            ("Spiaggia dei Gigli .jpg", "spiaggia-dei-gigli.jpg"),
            ("Spiaggia dei Gigli 2.jpg", "spiaggia-dei-gigli-2.jpg"),
            ("Spiaggia dei Gigli notturna.jpg", "spiaggia-dei-gigli-notturna.jpg"),
        ]
    }
    
    base_path = "/Users/francesconigro/Desktop/Foto Villa Olimpia Sito"
    
    for category, files in external_files.items():
        print(f"\n{category.upper()}: {len(files)} foto")
        dest_dir = gallery_dir if category == 'gallery' else (hero_dir if category == 'hero' else location_dir)
        
        for old_name, new_name in files:
            old_path = os.path.join(base_path, old_name)
            if os.path.exists(old_path):
                new_path = os.path.join(dest_dir, new_name)
                operations.append({
                    'old': old_path,
                    'new': new_path,
                    'apartment': category,
                    'name': new_name
                })
                print(f"  {old_name} → {new_name}")
    
    # CONFERMA OPERAZIONI
    print("\n" + "="*60)
    print(f"TOTALE OPERAZIONI: {len(operations)}")
    print("="*60)
    
    # Salva piano
    plan_path = '/Users/francesconigro/Desktop/ViviCalabria.com/RENAME_PLAN.txt'
    with open(plan_path, 'w') as f:
        for op in operations:
            f.write(f"{op['old']} → {op['new']}\n")
    
    print(f"\nPIANO RINOMINAZIONE SALVATO IN: {plan_path}")
    return operations

operations = rename_and_organize()











