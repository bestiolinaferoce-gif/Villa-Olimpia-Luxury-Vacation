#!/usr/bin/env python3
import os
import shutil
import subprocess
from pathlib import Path

def execute_rename_operations():
    """Esegue copia e rinominazione file"""
    
    print("\n" + "="*60)
    print("ESECUZIONE COPIA FILE")
    print("="*60)
    
    plan_path = '/Users/francesconigro/Desktop/ViviCalabria.com/RENAME_PLAN.txt'
    operations = []
    
    with open(plan_path, 'r') as f:
        for line in f:
            if ' → ' in line:
                parts = line.strip().split(' → ')
                if len(parts) == 2:
                    operations.append({
                        'old': parts[0],
                        'new': parts[1]
                    })
    
    success = 0
    errors = 0
    
    for op in operations:
        try:
            old_path = op['old']
            new_path = op['new']
            
            # Crea directory se non esiste
            os.makedirs(os.path.dirname(new_path), exist_ok=True)
            
            # Se PNG, converti in JPG
            if old_path.lower().endswith('.png'):
                # Usa sips per convertire PNG→JPG
                subprocess.run(['sips', '-s', 'format', 'jpeg', old_path, '--out', new_path], 
                             check=True, capture_output=True)
                print(f"✓ {Path(new_path).name} (PNG→JPG)")
            else:
                # Copia file
                shutil.copy2(old_path, new_path)
                print(f"✓ {Path(new_path).name}")
            
            success += 1
        except Exception as e:
            print(f"✗ Errore {Path(op['new']).name}: {e}")
            errors += 1
    
    print("\n" + "="*60)
    print(f"COMPLETATO: {success} successi, {errors} errori")
    print("="*60)
    
    # Log finale
    log_path = '/Users/francesconigro/Desktop/ViviCalabria.com/COPY_LOG.txt'
    with open(log_path, 'w') as f:
        f.write(f"Successi: {success}\n")
        f.write(f"Errori: {errors}\n\n")
        for op in operations:
            if op['new']:
                f.write(f"✓ {op['new']}\n")
    
    print(f"\nLog salvato: {log_path}")

execute_rename_operations()

