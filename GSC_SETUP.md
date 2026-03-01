# Google Search Console — Checklist post-deploy

## 1. Verifica proprietà
- Vai su https://search.google.com/search-console
- Aggiungi proprietà → Prefisso URL: `https://villaolimpiacaporizzuto.com`
- Metodo: Tag HTML
- Copia il valore `content="..."` dal meta tag mostrato

## 2. Imposta variabile d'ambiente
Su Vercel: Project Settings → Environment Variables
- Nome: `NEXT_PUBLIC_GSC_VERIFICATION`
- Valore: [codice dal passo 1]
- Ambiente: Production (e Preview se desiderato)

## 3. Redeploy
Dopo aver salvato la variabile, triggera un nuovo deploy (o attendi il prossimo push).

## 4. Completare verifica in GSC
- Torna su GSC → Verifica
- Clicca "Verifica"

## 5. Invio sitemap
- GSC → Sitemap
- Aggiungi: `https://villaolimpiacaporizzuto.com/sitemap.xml`
- Invia

## 6. Richiesta indicizzazione URL chiave (opzionale)
- Inspect URL → Inserisci URL (es. homepage, /appartamenti)
- Richiedi indicizzazione
