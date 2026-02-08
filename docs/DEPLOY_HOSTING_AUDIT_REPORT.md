# Report audit deploy e hosting – Villa Olimpia

**Data:** 2025  
**Repo:** https://github.com/bestiolinaferoce-gif/Villa-Olimpia-Luxury-Vacation  
**Dominio ufficiale:** **villaolimpiacaporizzuto.com** (confermato)

---

## 1. Hosting collegato

- **Config presenti in repo:** sia **Vercel** che **Netlify**.
  - `vercel.json`: framework Next.js, buildCommand, headers.
  - `netlify.toml`: build `npm run build`, publish `.next`, `@netlify/plugin-nextjs`, Node 20.
- **Da repo/README:** non risulta un badge o link che indichi un solo provider; il README indica deploy su “Vercel, Netlify o qualsiasi piattaforma”.
- **Conclusione:** non è possibile stabilire solo dai file quale sia il provider **effettivamente collegato** al repo. Il sito **villaolimpiacaporizzuto.com** è online e risponde; per sapere se è Vercel o Netlify serve controllare:
  - **GitHub** → Settings → Integrations (Vercel/Netlify) oppure Settings → Pages (se usi GitHub Pages),
  - oppure la **dashboard** del provider dove è aggiunto il progetto e il dominio.

---

## 2. CI/CD e GitHub

- **`.github/workflows`:** non presente (nessun workflow GitHub Actions).
- **GitHub Pages:** da repo non risulta se è attivo; va verificato in **Settings → Pages** della repo.
- **Deploy:** tipicamente automatico al push su `main` se il progetto è collegato a Vercel o Netlify.

---

## 3. Ultimo commit e deploy

- **Commit richiesto:** `43c153a` (“fix: update domain/email, redirects, apartments page”).
- **Stato:** `43c153a` è l’ultimo commit su `main`; un push precedente avrebbe già triggerato il deploy su Vercel/Netlify.
- **Per forzare un redeploy:** dalla dashboard del provider (Vercel o Netlify) usare “Redeploy” / “Deploy” sull’ultimo commit, oppure fare un push vuoto:  
  `git commit --allow-empty -m "chore: trigger deploy" && git push origin main`.

---

## 4. Verifica online (villaolimpiacaporizzuto.com)

| URL | Stato | Note |
|-----|--------|------|
| **Homepage** `/` | OK (200) | Titolo “Villa Olimpia \| 9 Appartamenti con Piscina…” |
| **/appartamenti** | OK (200) | Stesso titolo, pagina lista |
| **/camere** | OK | Redirect a `/appartamenti` (implementato in `app/camere/page.tsx` con `redirect("/appartamenti")`) |
| **/robots.txt** | OK | Generato da `app/robots.ts` con `Sitemap: https://villaolimpiacaporizzuto.com/sitemap.xml` |
| **/sitemap.xml** | Da verificare in browser | In alcuni contesti il fetch remoto può fallire; la route `app/sitemap.ts` è configurata correttamente |

---

## 5. Problemi rilevati e fix applicati

### 5.1 `public/robots.txt` obsoleto
- **Problema:** Conteneva `Sitemap: https://rainbow-clafoutis-de443f.netlify.app/sitemap.xml` (vecchio dominio Netlify).
- **Fix:** Aggiornato a `Sitemap: https://villaolimpiacaporizzuto.com/sitemap.xml`.
- **Nota:** In produzione Next.js usa `app/robots.ts` per `/robots.txt`; il file in `public/` è stato allineato per coerenza e per eventuali build che lo usassero.

### 5.2 Sitemap senza pagine SEO territorio
- **Problema:** In `app/sitemap.ts` mancavano le pagine: capo-rizzuto, le-castella, spiagge-capo-rizzuto, area-marina-protetta, cosa-fare-capo-rizzuto, ciro-wine-tour.
- **Fix:** Aggiunte in `app/sitemap.ts` con priorità e changeFrequency coerenti.

### 5.3 `/sitemap.xml` non raggiungibile in alcuni test
- Se in produzione `/sitemap.xml` restituisce 404 o errore:
  - Verificare che il deploy sia completato (build senza errori).
  - Controllare che non ci siano rewrite/redirect in `next.config.js` o nel provider che intercettino `/sitemap.xml`.
  - Next.js App Router serve la sitemap da `app/sitemap.ts` sul path `/sitemap.xml` senza configurazione aggiuntiva.

---

## 6. Riepilogo

| Voce | Esito |
|------|--------|
| **Dominio ufficiale** | **villaolimpiacaporizzuto.com** (confermato; usato in `lib/metadata.ts`, `lib/constants.ts`, `lib/seo-advanced.ts`, `app/robots.ts`, `app/sitemap.ts`) |
| **Hosting effettivo** | Da definire in dashboard (Vercel o Netlify collegato al repo) |
| **Deploy** | Commit `43c153a` è su `main`; deploy automatico già scattato con il push; redeploy manuale dalla dashboard se necessario |
| **Homepage / appartamenti / camere** | OK; `/camere` fa redirect a `/appartamenti` |
| **robots.txt** | OK (generato da `app/robots.ts`); `public/robots.txt` aggiornato |
| **sitemap.xml** | Route presente; pagine SEO aggiunte; da controllare in produzione dopo il prossimo deploy |

---

## 7. Azioni consigliate

1. **Confermare il provider:** aprire la dashboard Vercel e/o Netlify e verificare quale progetto è collegato a `bestiolinaferoce-gif/Villa-Olimpia-Luxury-Vacation` e al dominio `villaolimpiacaporizzuto.com`.
2. **Redeploy:** dopo le modifiche a `public/robots.txt` e `app/sitemap.ts`, fare commit e push (o redeploy dalla dashboard) per avere il sito aggiornato.
3. **Verifica finale:** in browser aprire `https://villaolimpiacaporizzuto.com/sitemap.xml` e confermare che l’XML sia valido e contenga tutte le pagine (inclusi appartamenti e le nuove pagine SEO).
