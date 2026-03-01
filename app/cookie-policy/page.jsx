import { BASE_URL } from "@/lib/metadata"

export const metadata = {
  title: "Cookie Policy | Villa Olimpia",
  description: "Informativa estesa sui cookie utilizzati da Villa Olimpia - GDPR e gestione del consenso.",
  alternates: {
    canonical: `${BASE_URL}/cookie-policy`,
  },
}

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Cookie Policy
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Informativa estesa sui cookie utilizzati da Villa Olimpia - GDPR e gestione del consenso
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="space-y-6 text-foreground">
              <p>
                <strong>Villa Olimpia - Capo Piccolo, Isola di Capo Rizzuto</strong>
              </p>
              <p>
                <strong>Ultimo aggiornamento:</strong> 7 Dicembre 2024<br />
                <strong>Versione:</strong> 1.0
              </p>

              <h2>1. INFORMAZIONI GENERALI</h2>
              <p>
                <strong>Titolare del trattamento:</strong><br />
                Villa Olimpia<br />
                Francesco Nigro<br />
                Capo Piccolo, 88841 Isola di Capo Rizzuto (KR), Italia<br />
                Email: villaolimpiacaporizzuto@gmail.com<br />
                Email GDPR: francesconigro.kr@gmail.com<br />
                Telefono: +39 333 577 3390<br />
                CIN: IT101013C22FCE8T7Y
              </p>

              <h2>2. CHE COSA SONO I COOKIE</h2>
              <p>
                I cookie sono piccoli file di testo che i siti web visitati dall&apos;utente inviano e registrano sul suo computer o dispositivo mobile, per essere poi ritrasmessi agli stessi siti alla visita successiva.
              </p>
              <p>
                I cookie sono utilizzati per diverse finalità: esecuzione di autenticazioni informatiche, monitoraggio di sessioni, memorizzazione di informazioni su specifiche configurazioni riguardanti gli utenti che accedono al server, memorizzazione delle preferenze, ecc.
              </p>

              <h2>3. TIPOLOGIE DI COOKIE UTILIZZATI</h2>

              <h3>3.1 COOKIE TECNICI (Non richiedono consenso)</h3>
              <p>
                <strong>Cookie strettamente necessari:</strong><br />
                Essenziali per il funzionamento del sito web. Senza questi cookie, alcune parti del sito non funzionerebbero.
              </p>
              <p><strong>Esempi:</strong></p>
              <ul>
                <li>Cookie di sessione per la navigazione</li>
                <li>Cookie per memorizzare preferenze di lingua</li>
                <li>Cookie per il carrello/prenotazione</li>
                <li>Cookie di sicurezza</li>
              </ul>
              <p>
                <strong>Durata:</strong> Sessione (cancellati alla chiusura browser) o persistenti (max 12 mesi)
              </p>
              <p>
                <strong>Base giuridica:</strong> Non richiedono consenso (art. 122 Codice Privacy)
              </p>

              <h3>3.2 COOKIE ANALITICI (Richiedono consenso se non anonimizzati)</h3>
              <p>
                <strong>Google Analytics:</strong><br />
                Utilizzato per raccogliere informazioni aggregate e anonime sul numero di utenti e su come questi visitano il sito.
              </p>
              <p><strong>Dati raccolti:</strong></p>
              <ul>
                <li>Numero di visitatori</li>
                <li>Pagine visitate</li>
                <li>Tempo di permanenza</li>
                <li>Sorgente di traffico</li>
                <li>Dispositivo utilizzato</li>
                <li>Posizione geografica approssimativa (città/regione)</li>
              </ul>
              <p>
                <strong>Anonimizzazione IP:</strong> ATTIVA (indirizzo IP mascherato)
              </p>
              <p><strong>Cookie utilizzati:</strong></p>
              <ul>
                <li><code>_ga</code> (durata: 2 anni) - Distingue gli utenti</li>
                <li><code>_gid</code> (durata: 24 ore) - Distingue gli utenti</li>
                <li><code>_gat</code> (durata: 1 minuto) - Limita richieste</li>
              </ul>
              <p>
                <strong>Fornitore:</strong> Google LLC (USA)<br />
                <strong>Privacy Policy:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a><br />
                <strong>Opt-out:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout</a>
              </p>
              <p>
                <strong>Consenso richiesto:</strong> SÌ (prima dell&apos;installazione)
              </p>

              <h3>3.3 COOKIE DI PROFILAZIONE (Richiedono consenso esplicito)</h3>
              <p>
                <strong>Facebook Pixel</strong> (se utilizzato):<br />
                Permette di tracciare le conversioni dalle inserzioni Facebook e creare pubblici personalizzati.
              </p>
              <p><strong>Dati raccolti:</strong></p>
              <ul>
                <li>Azioni sul sito (visualizzazioni pagina, prenotazioni)</li>
                <li>Informazioni sul dispositivo</li>
                <li>Comportamento di navigazione</li>
              </ul>
              <p><strong>Cookie utilizzati:</strong></p>
              <ul>
                <li><code>_fbp</code> (durata: 90 giorni) - Traccia visite e conversioni</li>
                <li><code>fr</code> (durata: 90 giorni) - Pubblicità personalizzata</li>
              </ul>
              <p>
                <strong>Fornitore:</strong> Meta Platforms Ireland Limited<br />
                <strong>Privacy Policy:</strong> <a href="https://www.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer">https://www.facebook.com/privacy/explanation</a><br />
                <strong>Gestione consenso:</strong> <a href="https://www.facebook.com/help/568137493302217" target="_blank" rel="noopener noreferrer">https://www.facebook.com/help/568137493302217</a>
              </p>
              <p>
                <strong>Consenso richiesto:</strong> SÌ (consenso esplicito e specifico)
              </p>
              <p>
                <strong>Stato attuale:</strong> Attivo solo su consenso esplicito dell&apos;utente
              </p>

              <h3>3.4 COOKIE DI TERZE PARTI</h3>
              <p>
                <strong>YouTube</strong> (se video embedded):
              </p>
              <ul>
                <li>Utilizziamo la modalità &quot;privacy-enhanced&quot; che non installa cookie fino a quando l&apos;utente non riproduce il video</li>
                <li>Cookie: <code>YSC</code>, <code>VISITOR_INFO1_LIVE</code>, <code>PREF</code></li>
                <li>Durata: Variabile (da sessione a 6 mesi)</li>
                <li>Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
              </ul>
              <p>
                <strong>Google Maps</strong> (se mappa embedded):
              </p>
              <ul>
                <li>Cookie: <code>NID</code>, <code>1P_JAR</code>, <code>CONSENT</code></li>
                <li>Durata: 6 mesi</li>
                <li>Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
              </ul>
              <p>
                <strong>Booking.com / Airbnb Widgets</strong> (se presenti):
              </p>
              <ul>
                <li>Cookie di prenotazione e affiliazione</li>
                <li>Durata variabile</li>
                <li>Privacy Policy: verificare sui rispettivi siti</li>
              </ul>

              <h2>4. DURATA DEI COOKIE</h2>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Cookie</th>
                      <th>Tipo</th>
                      <th>Durata</th>
                      <th>Finalità</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Cookie sessione</strong></td>
                      <td>Tecnico</td>
                      <td>Chiusura browser</td>
                      <td>Navigazione</td>
                    </tr>
                    <tr>
                      <td><code>_ga</code></td>
                      <td>Analitico</td>
                      <td>2 anni</td>
                      <td>Google Analytics</td>
                    </tr>
                    <tr>
                      <td><code>_gid</code></td>
                      <td>Analitico</td>
                      <td>24 ore</td>
                      <td>Google Analytics</td>
                    </tr>
                    <tr>
                      <td><code>_gat</code></td>
                      <td>Analitico</td>
                      <td>1 minuto</td>
                      <td>Google Analytics</td>
                    </tr>
                    <tr>
                      <td><code>_fbp</code></td>
                      <td>Profilazione</td>
                      <td>90 giorni</td>
                      <td>Facebook Pixel</td>
                    </tr>
                    <tr>
                      <td><code>consent_cookie</code></td>
                      <td>Tecnico</td>
                      <td>12 mesi</td>
                      <td>Memorizza preferenze cookie</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>5. BASE GIURIDICA</h2>
              <p>
                <strong>Cookie tecnici:</strong><br />
                Art. 122, comma 1, Codice Privacy - Non richiedono consenso
              </p>
              <p>
                <strong>Cookie analitici:</strong><br />
                Richiedono consenso preventivo (art. 122 Codice Privacy + GDPR art. 6.1.a) salvo anonimizzazione completa
              </p>
              <p>
                <strong>Cookie di profilazione:</strong><br />
                Richiedono consenso esplicito, specifico, libero e informato (GDPR art. 6.1.a + 7)
              </p>

              <h2>6. GESTIONE DEI COOKIE</h2>

              <h3>6.1 BANNER COOKIE</h3>
              <p>
                Al primo accesso al sito, viene visualizzato un banner che informa l&apos;utente sull&apos;uso dei cookie e richiede il consenso.
              </p>
              <p><strong>Opzioni disponibili:</strong></p>
              <ul>
                <li>✅ <strong>Accetta tutti</strong> - Acconsenti a tutti i cookie (tecnici, analitici, profilazione)</li>
                <li>⚙️ <strong>Personalizza</strong> - Scegli quali categorie di cookie accettare</li>
                <li>❌ <strong>Rifiuta tutti</strong> - Solo cookie tecnici strettamente necessari</li>
                <li>ℹ️ <strong>Maggiori informazioni</strong> - Link a questa Cookie Policy</li>
              </ul>
              <p>
                <strong>Conseguenze del rifiuto:</strong><br />
                Alcune funzionalità del sito potrebbero non funzionare correttamente (es. analytics per migliorare UX, contenuti personalizzati).
              </p>

              <h3>6.2 MODIFICA PREFERENZE</h3>
              <p>
                Puoi modificare o revocare il tuo consenso in qualsiasi momento:
              </p>
              <p>
                <strong>Metodo 1 - Pannello Cookie:</strong><br />
                Clicca sull&apos;icona &quot;Cookie Settings&quot; presente nel footer del sito
              </p>
              <p>
                <strong>Metodo 2 - Browser:</strong><br />
                Gestisci i cookie direttamente dalle impostazioni del browser (vedi sezione 7)
              </p>
              <p>
                <strong>Metodo 3 - Contatti:</strong><br />
                Email a francesconigro.kr@gmail.com con oggetto &quot;Revoca consenso cookie&quot;
              </p>

              <h2>7. DISABILITARE I COOKIE TRAMITE BROWSER</h2>
              <p>
                Puoi bloccare o cancellare i cookie modificando le impostazioni del browser:
              </p>
              <p>
                <strong>Chrome:</strong><br />
                Impostazioni &gt; Privacy e sicurezza &gt; Cookie e altri dati dei siti<br />
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">https://support.google.com/chrome/answer/95647</a>
              </p>
              <p>
                <strong>Firefox:</strong><br />
                Opzioni &gt; Privacy e sicurezza &gt; Cookie e dati dei siti web<br />
                <a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer">https://support.mozilla.org/it/kb/Gestione%20dei%20cookie</a>
              </p>
              <p>
                <strong>Safari:</strong><br />
                Preferenze &gt; Privacy &gt; Gestisci dati siti web<br />
                <a href="https://support.apple.com/it-it/HT201265" target="_blank" rel="noopener noreferrer">https://support.apple.com/it-it/HT201265</a>
              </p>
              <p>
                <strong>Edge:</strong><br />
                Impostazioni &gt; Privacy, ricerca e servizi &gt; Cookie<br />
                <a href="https://support.microsoft.com/it-it/microsoft-edge" target="_blank" rel="noopener noreferrer">https://support.microsoft.com/it-it/microsoft-edge</a>
              </p>
              <p>
                <strong>Opera:</strong><br />
                Impostazioni &gt; Privacy e sicurezza &gt; Cookie<br />
                <a href="https://help.opera.com/en/latest/web-preferences/#cookies" target="_blank" rel="noopener noreferrer">https://help.opera.com/en/latest/web-preferences/#cookies</a>
              </p>
              <p>
                ⚠️ <strong>Nota:</strong> Disabilitare tutti i cookie potrebbe compromettere la funzionalità del sito.
              </p>

              <h2>8. COOKIE DI TERZE PARTI - OPT-OUT</h2>
              <p>
                <strong>Google Analytics:</strong><br />
                Plugin opt-out: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout</a>
              </p>
              <p>
                <strong>Facebook:</strong><br />
                Impostazioni inserzioni: <a href="https://www.facebook.com/settings/?tab=ads" target="_blank" rel="noopener noreferrer">https://www.facebook.com/settings/?tab=ads</a><br />
                Opt-out pubblicità personalizzata: <a href="https://www.youronlinechoices.com/it/" target="_blank" rel="noopener noreferrer">https://www.youronlinechoices.com/it/</a>
              </p>
              <p>
                <strong>Your Online Choices (EU):</strong><br />
                Opt-out pubblicità comportamentale: <a href="http://www.youronlinechoices.com/it/le-tue-scelte" target="_blank" rel="noopener noreferrer">http://www.youronlinechoices.com/it/le-tue-scelte</a>
              </p>
              <p>
                <strong>Network Advertising Initiative:</strong><br />
                Opt-out USA: <a href="http://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer">http://www.networkadvertising.org/choices/</a>
              </p>

              <h2>9. DO NOT TRACK</h2>
              <p>
                Alcuni browser offrono la funzione &quot;Do Not Track&quot; (DNT) che invia un segnale ai siti web per richiedere di non tracciare l&apos;utente.
              </p>
              <p>
                <strong>Posizione Villa Olimpia:</strong><br />
                Attualmente non esiste uno standard universale per interpretare il segnale DNT. Il nostro sito rispetta le preferenze espresse tramite il banner cookie, indipendentemente dall&apos;impostazione DNT del browser.
              </p>

              <h2>10. COOKIE DI SESSIONE VS PERSISTENTI</h2>
              <p>
                <strong>Cookie di sessione:</strong>
              </p>
              <ul>
                <li>Temporanei</li>
                <li>Cancellati automaticamente alla chiusura del browser</li>
                <li>Utilizzati per la navigazione durante la sessione corrente</li>
              </ul>
              <p>
                <strong>Cookie persistenti:</strong>
              </p>
              <ul>
                <li>Rimangono sul dispositivo per un periodo prestabilito</li>
                <li>Utilizzati per memorizzare preferenze tra diverse sessioni</li>
                <li>Cancellabili manualmente dall&apos;utente</li>
              </ul>
              <p>
                <strong>Villa Olimpia utilizza entrambi</strong> secondo necessità e finalità specifiche.
              </p>

              <h2>11. COOKIE DI PRIMA PARTE VS TERZA PARTE</h2>
              <p>
                <strong>Cookie di prima parte:</strong>
              </p>
              <ul>
                <li>Impostati direttamente dal dominio villaolimpia.it</li>
                <li>Utilizzati per funzionalità del sito e analytics di base</li>
              </ul>
              <p>
                <strong>Cookie di terza parte:</strong>
              </p>
              <ul>
                <li>Impostati da domini esterni (es. google.com, facebook.com)</li>
                <li>Utilizzati per servizi integrati (analytics, social media, advertising)</li>
              </ul>
              <p>
                <strong>Villa Olimpia è responsabile</strong> della gestione dei cookie di prima parte e dell&apos;informativa sui cookie di terze parti integrate.
              </p>

              <h2>12. WEB BEACON E PIXEL</h2>
              <p>
                Oltre ai cookie, potremmo utilizzare:
              </p>
              <p>
                <strong>Web Beacon (pixel invisibili):</strong>
              </p>
              <ul>
                <li>Piccole immagini trasparenti incorporate nelle email</li>
                <li>Permettono di verificare l&apos;apertura e la lettura delle email</li>
                <li>Utilizzati per newsletter e comunicazioni marketing (solo con consenso)</li>
              </ul>
              <p>
                <strong>Pixel di tracciamento:</strong>
              </p>
              <ul>
                <li>Codici JavaScript per tracciare conversioni</li>
                <li>Esempio: Facebook Pixel, Google Ads Conversion</li>
                <li>Richiedono consenso esplicito</li>
              </ul>

              <h2>13. LOCAL STORAGE E SESSION STORAGE</h2>
              <p>
                Il sito potrebbe utilizzare tecnologie di storage locale del browser:
              </p>
              <p>
                <strong>Local Storage:</strong>
              </p>
              <ul>
                <li>Memorizza dati senza scadenza</li>
                <li>Utilizzato per preferenze utente, temi, lingua</li>
                <li>Non inviato al server con ogni richiesta</li>
              </ul>
              <p>
                <strong>Session Storage:</strong>
              </p>
              <ul>
                <li>Memorizza dati solo per la durata della sessione</li>
                <li>Cancellato alla chiusura del tab/browser</li>
                <li>Utilizzato per dati temporanei di navigazione</li>
              </ul>
              <p>
                <strong>Gestione:</strong> Cancellabili tramite impostazioni browser &gt; Cancella dati di navigazione
              </p>

              <h2>14. MODIFICHE ALLA COOKIE POLICY</h2>
              <p>
                Villa Olimpia si riserva il diritto di modificare la presente Cookie Policy in qualsiasi momento.
              </p>
              <p><strong>Comunicazione modifiche:</strong></p>
              <ul>
                <li>Pubblicazione versione aggiornata sul sito</li>
                <li>Data ultimo aggiornamento in alto alla pagina</li>
                <li>Notifica tramite banner (per modifiche sostanziali)</li>
                <li>Email agli utenti registrati (modifiche importanti)</li>
              </ul>
              <p>
                <strong>Consiglio:</strong> Consultare periodicamente questa pagina per rimanere aggiornati.
              </p>

              <h2>15. CONTATTI E DIRITTI</h2>
              <p>
                Per esercitare i diritti previsti dal GDPR (accesso, rettifica, cancellazione, limitazione, portabilità, opposizione) o per qualsiasi domanda sui cookie:
              </p>
              <p>
                <strong>Villa Olimpia</strong><br />
                Francesco Nigro<br />
                Capo Piccolo, 88841 Isola di Capo Rizzuto (KR)<br />
                Email generale: villaolimpiacaporizzuto@gmail.com<br />
                Email GDPR: francesconigro.kr@gmail.com<br />
                Telefono: +39 333 577 3390
              </p>
              <p><strong>Per approfondire:</strong></p>
              <ul>
                <li>Privacy Policy completa: <a href="/privacy-policy">/privacy-policy</a></li>
                <li>Autorità Garante Privacy: <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">www.garanteprivacy.it</a></li>
              </ul>

              <h2>16. RIEPILOGO CONSENSI</h2>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Categoria Cookie</th>
                      <th>Finalità</th>
                      <th>Consenso Richiesto</th>
                      <th>Disattivabili</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Tecnici necessari</strong></td>
                      <td>Funzionamento sito</td>
                      <td>❌ NO</td>
                      <td>❌ NO*</td>
                    </tr>
                    <tr>
                      <td><strong>Analitici</strong></td>
                      <td>Statistiche anonime</td>
                      <td>✅ SÌ</td>
                      <td>✅ SÌ</td>
                    </tr>
                    <tr>
                      <td><strong>Profilazione</strong></td>
                      <td>Marketing personalizzato</td>
                      <td>✅ SÌ</td>
                      <td>✅ SÌ</td>
                    </tr>
                    <tr>
                      <td><strong>Terze parti</strong></td>
                      <td>Servizi esterni</td>
                      <td>✅ SÌ</td>
                      <td>✅ SÌ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                *I cookie tecnici non possono essere disattivati perché essenziali per il funzionamento del sito.
              </p>

              <h2>17. COOKIE UTILIZZATI - TABELLA COMPLETA</h2>

              <h3>COOKIE DI PRIMA PARTE (villaolimpia.it)</h3>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Tipo</th>
                      <th>Scopo</th>
                      <th>Durata</th>
                      <th>Consenso</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>session_id</code></td>
                      <td>Tecnico</td>
                      <td>Identificazione sessione</td>
                      <td>Sessione</td>
                      <td>NO</td>
                    </tr>
                    <tr>
                      <td><code>consent_preferences</code></td>
                      <td>Tecnico</td>
                      <td>Memorizza scelte cookie</td>
                      <td>12 mesi</td>
                      <td>NO</td>
                    </tr>
                    <tr>
                      <td><code>language</code></td>
                      <td>Tecnico</td>
                      <td>Preferenza lingua</td>
                      <td>12 mesi</td>
                      <td>NO</td>
                    </tr>
                    <tr>
                      <td><code>booking_data</code></td>
                      <td>Tecnico</td>
                      <td>Dati prenotazione temporanei</td>
                      <td>24 ore</td>
                      <td>NO</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>COOKIE DI TERZE PARTI</h3>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Provider</th>
                      <th>Scopo</th>
                      <th>Durata</th>
                      <th>Consenso</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>_ga</code></td>
                      <td>Google Analytics</td>
                      <td>Analytics</td>
                      <td>2 anni</td>
                      <td>SÌ</td>
                    </tr>
                    <tr>
                      <td><code>_gid</code></td>
                      <td>Google Analytics</td>
                      <td>Analytics</td>
                      <td>24 ore</td>
                      <td>SÌ</td>
                    </tr>
                    <tr>
                      <td><code>_gat</code></td>
                      <td>Google Analytics</td>
                      <td>Throttling</td>
                      <td>1 min</td>
                      <td>SÌ</td>
                    </tr>
                    <tr>
                      <td><code>_fbp</code></td>
                      <td>Facebook</td>
                      <td>Pixel tracking</td>
                      <td>90 giorni</td>
                      <td>SÌ</td>
                    </tr>
                    <tr>
                      <td><code>fr</code></td>
                      <td>Facebook</td>
                      <td>Advertising</td>
                      <td>90 giorni</td>
                      <td>SÌ</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                <strong>Data ultima revisione:</strong> 7 Dicembre 2024
              </p>
              <p>
                © 2024 Villa Olimpia - Tutti i diritti riservati
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

