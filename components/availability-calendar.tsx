"use client"

import { useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import { AvailabilityStatus, getAvailabilityForApartment } from "@/data/availability-aug-2026"

interface AvailabilityCalendarProps {
  apartmentId: number
}

const weekdayLabels = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"]

const statusStyles: Record<AvailabilityStatus, { label: string; className: string }> = {
  available: {
    label: "Disponibile",
    className: "bg-emerald-100 text-emerald-900 border-emerald-200",
  },
  booked: {
    label: "Occupato",
    className: "bg-rose-100 text-rose-900 border-rose-200",
  },
  changeover: {
    label: "Cambio",
    className: "bg-amber-100 text-amber-900 border-amber-200",
  },
  option: {
    label: "Opzione",
    className: "bg-sky-100 text-sky-900 border-sky-200",
  },
  unknown: {
    label: "In aggiornamento",
    className: "bg-slate-100 text-slate-700 border-slate-200",
  },
}

function getMonthStartOffset(year: number, monthIndex: number) {
  const jsDay = new Date(year, monthIndex, 1).getDay()
  return (jsDay + 6) % 7
}

export function AvailabilityCalendar({ apartmentId }: AvailabilityCalendarProps) {
  const availability = getAvailabilityForApartment(apartmentId)

  const { daysInMonth, monthYear, startOffset, isUnknown } = useMemo(() => {
    const base = availability || {
      month: "2026-08",
      updatedAt: "2026-02-08",
      days: {},
    }
    const [year, month] = base.month.split("-").map(Number)
    const monthIndex = month - 1
    const daysInMonth = new Date(year, month, 0).getDate()
    const startOffset = getMonthStartOffset(year, monthIndex)
    const monthLabel = new Date(year, monthIndex).toLocaleDateString("it-IT", { month: "long" })
    const monthYear = `${monthLabel.charAt(0).toUpperCase()}${monthLabel.slice(1)} ${year}`
    const isUnknown = Object.values(base.days || {}).every((value) => value === "unknown") || !Object.keys(base.days || {}).length

    return { daysInMonth, monthYear, startOffset, isUnknown }
  }, [availability])

  return (
    <Card className="border-2 border-primary/10 shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-primary" />
          <CardTitle className="text-lg">Disponibilità</CardTitle>
        </div>
        <CardDescription>
          {monthYear} · aggiornamento manuale
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-7 gap-2 text-xs text-muted-foreground">
          {weekdayLabels.map((label) => (
            <div key={label} className="text-center font-semibold uppercase tracking-wide">
              {label}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: startOffset }).map((_, index) => (
            <div key={`empty-${index}`} className="h-9" />
          ))}
          {Array.from({ length: daysInMonth }).map((_, index) => {
            const day = index + 1
            const status = availability?.days?.[day] ?? "unknown"
            const style = statusStyles[status]

            return (
              <div
                key={day}
                className={`h-9 rounded-lg border text-xs font-semibold flex items-center justify-center ${style.className}`}
              >
                {day}
              </div>
            )
          })}
        </div>

        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
          {Object.entries(statusStyles).map(([key, meta]) => (
            <div key={key} className="flex items-center gap-2">
              <span className={`inline-flex h-3 w-3 rounded-full border ${meta.className}`} />
              <span>{meta.label}</span>
            </div>
          ))}
        </div>

        {isUnknown && (
          <div className="rounded-xl border border-dashed border-primary/30 bg-primary/5 px-4 py-3 text-sm text-primary/80">
            Disponibilità in aggiornamento: stiamo importando le date reali per questo appartamento.
          </div>
        )}
      </CardContent>
    </Card>
  )
}
