import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-9xl font-playfair font-bold text-primary mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pagina Non Trovata
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            La pagina che stai cercando non esiste o è stata spostata.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="luxury" size="lg" asChild>
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Torna alla Home
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/appartamenti">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Vedi Appartamenti
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

