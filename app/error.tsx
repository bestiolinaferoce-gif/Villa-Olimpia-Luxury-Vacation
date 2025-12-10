"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, RefreshCw, AlertCircle, Mail, Phone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to monitoring service (e.g., Sentry)
    console.error("Application error:", error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-20 bg-gradient-to-br from-background via-primary/5 to-ocean/5">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-primary/20 shadow-xl">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
                <AlertCircle className="h-10 w-10 text-red-600" />
              </div>
              <CardTitle className="text-4xl md:text-5xl font-playfair font-bold mb-2">
                Qualcosa è Andato Storto
              </CardTitle>
              <CardDescription className="text-lg">
                Si è verificato un errore imprevisto. Ci scusiamo per l'inconveniente.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted/50 rounded-lg p-4 border border-muted">
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Messaggio errore:</strong>
                </p>
                <p className="text-sm font-mono bg-background p-2 rounded border">
                  {error.message || "Errore sconosciuto"}
                </p>
                {error.digest && (
                  <p className="text-xs text-muted-foreground mt-2">
                    Codice errore: {error.digest}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button
                  variant="default"
                  size="lg"
                  onClick={reset}
                  className="w-full group"
                >
                  <RefreshCw className="mr-2 h-5 w-5 group-hover:rotate-180 transition-transform" />
                  Riprova
                </Button>
                <Button variant="luxury" size="lg" asChild className="w-full">
                  <Link href="/">
                    <Home className="mr-2 h-5 w-5" />
                    Torna alla Home
                  </Link>
                </Button>
              </div>

              <div className="pt-6 border-t">
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Se il problema persiste, contattaci direttamente:
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/contatti">
                      <Mail className="mr-2 h-4 w-4" />
                      Contattaci via Email
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://wa.me/393290479193" target="_blank" rel="noopener noreferrer">
                      <Phone className="mr-2 h-4 w-4" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              <div className="text-center pt-4">
                <p className="text-xs text-muted-foreground">
                  Puoi anche provare a navigare verso:{" "}
                  <Link href="/appartamenti" className="text-primary hover:underline">
                    Appartamenti
                  </Link>
                  {" • "}
                  <Link href="/location" className="text-primary hover:underline">
                    Location
                  </Link>
                  {" • "}
                  <Link href="/servizi" className="text-primary hover:underline">
                    Servizi
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


