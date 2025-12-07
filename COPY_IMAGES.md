# 📸 Guida per Copiare le Immagini

## Passo 1: Trova la Cartella "Villa Olimpia 2026"

La cartella dovrebbe essere in una di queste posizioni:
- `~/Villa Olimpia 2026/`
- `~/Desktop/Villa Olimpia 2026/`
- `~/Documents/Villa Olimpia 2026/`

## Passo 2: Copia le Immagini

### Opzione A: Usando il Terminale

```bash
# Vai nella directory del progetto
cd /Users/francesconigro/Desktop/VillaOlimpia

# Crea le cartelle necessarie
mkdir -p public/images/villa/{hero,gallery,apartments,location}

# Copia le immagini (sostituisci il path con quello corretto)
cp -r ~/Villa\ Olimpia\ 2026/* public/images/villa/gallery/

# Oppure se la cartella è altrove:
cp -r "/path/to/Villa Olimpia 2026"/* public/images/villa/gallery/
```

### Opzione B: Usando Finder (Mac)

1. Apri Finder
2. Vai alla cartella "Villa Olimpia 2026"
3. Seleziona tutte le immagini
4. Copia (Cmd+C)
5. Vai a: `/Users/francesconigro/Desktop/VillaOlimpia/public/images/villa/gallery/`
6. Incolla (Cmd+V)

## Passo 3: Organizza le Immagini

Organizza le immagini nelle cartelle appropriate:

```
public/images/villa/
├── hero/
│   ├── villa-olimpia-hero.jpg (immagine principale)
│   └── villa-olimpia-hero-mobile.jpg (versione mobile)
├── gallery/
│   ├── vista-mare-1.jpg
│   ├── piscina.jpg
│   ├── terrazza.jpg
│   └── ... (altre foto generali)
├── apartments/
│   ├── olimpia-1/
│   │   ├── main.jpg
│   │   ├── sala.jpg
│   │   └── ...
│   ├── olimpia-2/
│   └── olimpia-3/
└── location/
    ├── capopiccolo.jpg
    ├── spiaggia.jpg
    └── ...
```

## Passo 4: Ottimizza le Immagini

Prima di caricare, ottimizza le immagini:

1. **Riduci le dimensioni**: Max 2000px per lato
2. **Comprimi**: Usa [TinyPNG](https://tinypng.com) o [Squoosh](https://squoosh.app)
3. **Formato**: Converti in WebP se possibile (Next.js lo supporta)

## Passo 5: Aggiorna i Path

Dopo aver copiato le immagini, aggiorna i path in:
- `lib/image-loader.ts`
- `lib/images-config.ts`
- Componenti che usano le immagini

## ✅ Checklist

- [ ] Cartella "Villa Olimpia 2026" trovata
- [ ] Immagini copiate in `public/images/villa/`
- [ ] Immagini organizzate per categoria
- [ ] Immagini ottimizzate (dimensioni e compressione)
- [ ] Path aggiornati nel codice
- [ ] Testato che le immagini si caricano correttamente

## 🆘 Se Non Trovi la Cartella

Esegui questo comando per cercarla:

```bash
find ~ -name "*Villa Olimpia 2026*" -type d 2>/dev/null
```

Questo cercherà la cartella in tutta la home directory.


