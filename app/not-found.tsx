"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search, MapPin, Calendar, HelpCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

export default function NotFound() {
  const router = useRouter()
  const suggestedPages = [
    { href: "/", label: "Home", icon: Home },
    { href: "/appartamenti", label: "I Nostri Appartamenti", icon: Calendar },
    { href: "/location", label: "La Location", icon: MapPin },
    { href: "/faq", label: "Domande Frequenti", icon: HelpCircle },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-20 bg-gradient-to-br from-background via-primary/5 to-ocean/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="border-2 border-primary/20 shadow-xl">
            <CardHeader className="text-center pb-4">
              <h1 className="text-9xl font-playfair font-bold text-primary mb-4">
                404
              </h1>
              <CardTitle className="text-3xl md:text-4xl font-bold mb-2">
                Pagina Non Trovata
              </CardTitle>
              <CardDescription className="text-lg">
                La pagina che stai cercando non esiste o è stata spostata.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Search Suggestion */}
              <div className="bg-muted/50 rounded-lg p-4 border border-muted">
                <p className="text-sm font-semibold mb-3 flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  Cosa stavi cercando?
                </p>
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Cerca appartamenti, servizi, location..."
                    className="flex-1"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        router.push("/appartamenti")
                      }
                    }}
                  />
                  <Button onClick={() => router.push("/appartamenti")}>
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Suggested Pages */}
              <div>
                <p className="text-sm font-semibold mb-3">Pagine Popolari:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {suggestedPages.map((page) => {
                    const Icon = page.icon
                    return (
                      <Button
                        key={page.href}
                        variant="outline"
                        className="flex flex-col items-center gap-2 h-auto py-4"
                        asChild
                      >
                        <Link href={page.href}>
                          <Icon className="h-5 w-5" />
                          <span className="text-xs">{page.label}</span>
                        </Link>
                      </Button>
                    )
                  })}
                </div>
              </div>

              {/* Primary Actions */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t">
                <Button variant="luxury" size="lg" className="flex-1" asChild>
                  <Link href="/">
                    <Home className="mr-2 h-5 w-5" />
                    Torna alla Home
                  </Link>
                </Button>
                <Button variant="default" size="lg" className="flex-1" asChild>
                  <Link href="/appartamenti">
                    <Calendar className="mr-2 h-5 w-5" />
                    Vedi Appartamenti
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="flex-1" asChild>
                  <Link href="/contatti">
                    Contattaci
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


