#!/usr/bin/env python3
import os
import hashlib
from pathlib import Path

def get_file_hash(filepath):
    """Calcola MD5 hash del file"""
    hash_md5 = hashlib.md5()
    with open(filepath, "rb") as f:
        for chunk in iter(lambda: f.read(4096), b""):
            hash_md5.update(chunk)
    return hash_md5.hexdigest()

def find_duplicates(uploaded_dir, existing_dir):
    """Trova duplicati tra cartella caricata e progetto"""
    
    print("="*60)
    print("RICERCA DUPLICATI")
    print("="*60)
    
    # Scansiona foto esistenti
    existing_files = {}
    print("\nScansione foto esistenti nel progetto...")
    for ext in ['*.jpg', '*.jpeg', '*.png', '*.webp']:
        for filepath in Path(existing_dir).rglob(ext):
            try:
                file_hash = get_file_hash(filepath)
                file_size = os.path.getsize(filepath)
                file_name = filepath.name.lower()
                
                existing_files[file_hash] = {
                    'path': str(filepath),
                    'name': file_name,
                    'size': file_size
                }
            except Exception as e:
                print(f"Errore su {filepath}: {e}")
    
    print(f"Foto esistenti nel progetto: {len(existing_files)}")
    
    # Scansiona foto caricate
    duplicates = []
    new_files = []
    
    print("\nScansione foto caricate...")
    for ext in ['*.jpg', '*.jpeg', '*.png', '*.webp']:
        for filepath in Path(uploaded_dir).rglob(ext):
            try:
                file_hash = get_file_hash(filepath)
                file_size = os.path.getsize(filepath)
                file_name = filepath.name.lower()
                
                if file_hash in existing_files:
                    # DUPLICATO TROVATO
                    duplicates.append({
                        'uploaded': str(filepath),
                        'existing': existing_files[file_hash]['path'],
                        'name': file_name,
                        'size': file_size,
                        'hash': file_hash
                    })
                else:
                    # NUOVO FILE
                    new_files.append({
                        'path': str(filepath),
                        'name': file_name,
                        'size': file_size,
                        'hash': file_hash
                    })
            except Exception as e:
                print(f"Errore su {filepath}: {e}")
    
    # REPORT
    print("\n" + "="*60)
    print(f"DUPLICATI TROVATI: {len(duplicates)}")
    print("="*60)
    
    if duplicates:
        for i, dup in enumerate(duplicates, 1):
            print(f"\n{i}. DUPLICATO:")
            print(f"   Caricato: {dup['uploaded']}")
            print(f"   Esiste già: {dup['existing']}")
            print(f"   Dimensione: {dup['size']:,} bytes ({dup['size']/1024/1024:.2f} MB)")
            print(f"   Hash: {dup['hash'][:16]}...")
    
    print("\n" + "="*60)
    print(f"NUOVE FOTO DA AGGIUNGERE: {len(new_files)}")
    print("="*60)
    
    if new_files:
        for i, new in enumerate(new_files, 1):
            print(f"{i}. {new['name']} - {new['size']:,} bytes ({new['size']/1024/1024:.2f} MB)")
    
    # Salva report
    report_path = '/Users/francesconigro/Desktop/ViviCalabria.com/DUPLICATES_REPORT.txt'
    with open(report_path, 'w') as f:
        f.write("REPORT DUPLICATI\n")
        f.write("="*60 + "\n\n")
        f.write(f"Duplicati: {len(duplicates)}\n")
        f.write(f"Nuove foto: {len(new_files)}\n\n")
        
        f.write("DUPLICATI DA ELIMINARE:\n")
        for dup in duplicates:
            f.write(f"- {dup['uploaded']}\n")
        
        f.write("\n\nNUOVE FOTO DA PROCESSARE:\n")
        for new in new_files:
            f.write(f"- {new['path']}\n")
    
    print(f"\nReport salvato in: {report_path}")
    
    return duplicates, new_files

# ESEGUI
uploaded_dir = "/Users/francesconigro/Desktop/Foto Villa Olimpia Sito"
existing_dir = "/Users/francesconigro/Desktop/ViviCalabria.com/public/images/villa/appartamenti"

duplicates, new_files = find_duplicates(uploaded_dir, existing_dir)












