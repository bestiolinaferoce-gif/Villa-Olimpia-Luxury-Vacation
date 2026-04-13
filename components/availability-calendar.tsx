"use client"

import { useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import type { OccupiedRange } from "@/lib/public-calendar/occupancy"

interface AvailabilityCalendarProps {
  occupiedRanges: OccupiedRange[]
}

const weekdayLabels = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"]

function getMonthStartOffset(year: number, monthIndex: number) {
  const jsDay = new Date(year, monthIndex, 1).getDay()
  return (jsDay + 6) % 7
}

function isDateOccupied(dateStr: string, ranges: OccupiedRange[]): boolean {
  const d = new Date(dateStr).getTime()
  return ranges.some((r) => {
    const s = new Date(r.start).getTime()
    const e = new Date(r.end).getTime()
    return d >= s && d < e
  })
}

function formatMonthYear(year: number, monthIndex: number): string {
  const label = new Date(year, monthIndex).toLocaleDateString("it-IT", { month: "long" })
  return `${label.charAt(0).toUpperCase()}${label.slice(1)} ${year}`
}

function MonthGrid({
  year,
  monthIndex,
  occupiedRanges,
}: {
  year: number
  monthIndex: number
  occupiedRanges: OccupiedRange[]
}) {
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate()
  const startOffset = getMonthStartOffset(year, monthIndex)
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return (
    <div className="space-y-2">
      <p className="text-center text-sm font-semibold text-slate-700">
        {formatMonthYear(year, monthIndex)}
      </p>
      <div className="grid grid-cols-7 gap-1 text-xs text-muted-foreground">
        {weekdayLabels.map((label) => (
          <div key={label} className="text-center font-semibold uppercase tracking-wide">
            {label}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: startOffset }).map((_, i) => (
          <div key={`empty-${i}`} className="h-8" />
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1
          const dateStr = `${year}-${String(monthIndex + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
          const date = new Date(dateStr)
          const isPast = date < today
          const occupied = !isPast && isDateOccupied(dateStr, occupiedRanges)

          let className = "h-8 rounded-md border text-xs font-semibold flex items-center justify-center "
          if (isPast) {
            className += "bg-slate-50 text-slate-300 border-slate-100"
          } else if (occupied) {
            className += "bg-rose-100 text-rose-800 border-rose-200"
          } else {
            className += "bg-emerald-50 text-emerald-800 border-emerald-200"
          }

          return (
            <div key={day} className={className}>
              {day}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function AvailabilityCalendar({ occupiedRanges }: AvailabilityCalendarProps) {
  const months = useMemo(() => {
    const now = new Date()
    return [0, 1, 2].map((offset) => {
      const d = new Date(now.getFullYear(), now.getMonth() + offset, 1)
      return { year: d.getFullYear(), monthIndex: d.getMonth() }
    })
  }, [])

  return (
    <Card className="border-2 border-primary/10 shadow-lg">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-primary" />
          <CardTitle className="text-lg">Disponibilità</CardTitle>
        </div>
        <CardDescription>
          Aggiornamento automatico ogni ora
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {months.map(({ year, monthIndex }) => (
          <MonthGrid
            key={`${year}-${monthIndex}`}
            year={year}
            monthIndex={monthIndex}
            occupiedRanges={occupiedRanges}
          />
        ))}

        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground pt-1 border-t">
          <div className="flex items-center gap-1.5">
            <span className="inline-flex h-3 w-3 rounded-full border bg-emerald-50 border-emerald-200" />
            <span>Disponibile</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="inline-flex h-3 w-3 rounded-full border bg-rose-100 border-rose-200" />
            <span>Occupato</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="inline-flex h-3 w-3 rounded-full border bg-slate-50 border-slate-100" />
            <span>Passato</span>
          </div>
        </div>

        {occupiedRanges.length === 0 && (
          <div className="rounded-xl border border-dashed border-primary/30 bg-primary/5 px-4 py-3 text-sm text-primary/80">
            Disponibilità in aggiornamento: stiamo importando le date reali per questo appartamento.
          </div>
        )}
      </CardContent>
    </Card>
  )
}
