"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"

export function AvailabilityCalendar() {
  // This is a UI-only component. In production, you would integrate with a booking API
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-primary" />
          <CardTitle className="text-lg">Disponibilità</CardTitle>
        </div>
        <CardDescription>
          Seleziona le date per verificare la disponibilità
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground text-center py-8">
          <p>Calendario disponibilità</p>
          <p className="mt-2 text-xs">
            Contattaci per verificare le date disponibili
          </p>
        </div>
        {/* In production, integrate with react-calendar or a booking system */}
      </CardContent>
    </Card>
  )
}


