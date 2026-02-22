import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Privacy Policy - Villa Olimpia",
  description: "Informativa sulla privacy di Villa Olimpia. Scopri come trattiamo i tuoi dati personali.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 bg-gradient-to-br from-ocean/10 to-primary/10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground">
            Ultimo aggiornamento: Dicembre 2024
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Introduzione</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Villa Olimpia (&quot;noi&quot;, &quot;nostro&quot;) rispetta la tua privacy e si
                  impegna a proteggere i tuoi dati personali. Questa informativa
                  sulla privacy ti spiega come raccogliamo, utilizziamo e
                  proteggiamo le tue informazioni quando visiti il nostro sito
                  web o utilizzi i nostri servizi.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Dati che Raccogliamo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Raccogliamo i seguenti tipi di dati personali:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Dati di identificazione:</strong> nome, cognome,
                    indirizzo email, numero di telefono
                  </li>
                  <li>
                    <strong>Dati di prenotazione:</strong> date di check-in e
                    check-out, numero di ospiti, preferenze
                  </li>
                  <li>
                    <strong>Dati di pagamento:</strong> informazioni necessarie
                    per elaborare i pagamenti (gestite da provider terzi sicuri)
                  </li>
                  <li>
                    <strong>Dati tecnici:</strong> indirizzo IP, tipo di browser,
                    pagine visitate
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Come Utilizziamo i Tuoi Dati</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Utilizziamo i tuoi dati personali per:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Gestire e processare le prenotazioni</li>
                  <li>Comunicare con te riguardo alla tua prenotazione</li>
                  <li>Migliorare i nostri servizi</li>
                  <li>Inviare comunicazioni di marketing (solo con il tuo consenso)</li>
                  <li>Rispettare obblighi legali</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Condivisione dei Dati</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Non vendiamo i tuoi dati personali. Possiamo condividere i
                  tuoi dati solo con:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provider di servizi di pagamento</li>
                  <li>Servizi di hosting e cloud</li>
                  <li>Autorità competenti quando richiesto dalla legge</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. I Tuoi Diritti</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Hai il diritto di:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Accedere ai tuoi dati personali</li>
                  <li>Correggere dati inesatti</li>
                  <li>Richiedere la cancellazione dei tuoi dati</li>
                  <li>Opporti al trattamento dei tuoi dati</li>
                  <li>Richiedere la portabilità dei dati</li>
                </ul>
                <p>
                  Per esercitare questi diritti, contattaci all&apos;indirizzo:
                  <a
                    href="mailto:villaolimpiacaporizzuto@gmail.com"
                    className="text-primary hover:underline ml-2"
                  >
                    villaolimpiacaporizzuto@gmail.com
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Sicurezza</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Implementiamo misure di sicurezza tecniche e organizzative
                  appropriate per proteggere i tuoi dati personali da accesso
                  non autorizzato, perdita o distruzione.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Contatti</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Per domande su questa privacy policy, contattaci:
                </p>
                <p className="mt-2">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:villaolimpiacaporizzuto@gmail.com"
                    className="text-primary hover:underline"
                  >
                    villaolimpiacaporizzuto@gmail.com
                  </a>
                </p>
                <p>
                  <strong>Telefono:</strong>{" "}
                  <a
                    href="tel:+393335773390"
                    className="text-primary hover:underline"
                  >
                    +39 333 577 3390
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

