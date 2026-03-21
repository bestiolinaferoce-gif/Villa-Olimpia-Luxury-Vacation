"use client"

import { useMemo, useState, FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { apartments } from "@/data/apartments"
import { reviews } from "@/data/reviews-complete"
import type { MonthConfig, SeasonalMonth } from "@/lib/seasonalConfig"
import { trackEvent } from "@/components/analytics/google-analytics"
import { Star } from "lucide-react"

export interface SeasonalUrgencyFormProps {
  config: MonthConfig
  monthKey: Exclude<SeasonalMonth, "other">
  defaultCheckIn: string
  defaultCheckOut: string
}

export function SeasonalUrgencyForm({
  config,
  monthKey,
  defaultCheckIn,
  defaultCheckOut,
}: SeasonalUrgencyFormProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [checkIn, setCheckIn] = useState(defaultCheckIn)
  const [checkOut, setCheckOut] = useState(defaultCheckOut)
  const [guests, setGuests] = useState("2")
  const [apartment, setApartment] = useState("")
  const [message, setMessage] = useState("")
  const [marketingOptIn, setMarketingOptIn] = useState(false)
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle")

  const topReviews = useMemo(
    () => reviews.filter((r) => r.rating >= 5).slice(0, 3),
    []
  )

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    trackEvent("seasonal_form_submit", "Conversion", monthKey)
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          checkIn,
          checkOut,
          guests,
          apartment,
          message,
          source: `seasonal_landing_${monthKey}`,
          landingPage: typeof window !== "undefined" ? window.location.href : "",
          seasonalMonth: monthKey,
          marketingOptIn,
          company: "",
        }),
      })
      const data = await res.json().catch(() => null)
      if (res.ok && data?.ok) {
        setStatus("done")
        try {
          localStorage.setItem("lead_submitted_v1", "1")
        } catch {
          /* ignore */
        }
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  const options = apartments.filter((a) => a.active !== false)

  return (
    <section className="mx-auto max-w-3xl px-4 py-14">
      <h2 className="font-playfair text-3xl font-bold text-slate-900">Preventivo rapido</h2>
      <p className="mt-2 text-slate-600">
        Compila il form: riceviamo la richiesta sulla casella operativa e ti rispondiamo al più presto.
      </p>
      <form onSubmit={onSubmit} className="mt-8 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="sn">Nome</Label>
            <Input id="sn" value={name} onChange={(e) => setName(e.target.value)} required minLength={2} />
          </div>
          <div>
            <Label htmlFor="se">Email</Label>
            <Input id="se" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="sp">Telefono</Label>
            <Input id="sp" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="sg">Ospiti</Label>
            <Input id="sg" value={guests} onChange={(e) => setGuests(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="sci">Check-in</Label>
            <Input id="sci" type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="sco">Check-out</Label>
            <Input id="sco" type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} required />
          </div>
        </div>
        <div>
          <Label htmlFor="sap">Lodge preferito</Label>
          <select
            id="sap"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            value={apartment}
            onChange={(e) => setApartment(e.target.value)}
          >
            <option value="">Nessuna preferenza</option>
            {options.map((a) => (
              <option key={a.id} value={a.name}>
                {a.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Label htmlFor="sm">Messaggio (opzionale)</Label>
          <Textarea id="sm" value={message} onChange={(e) => setMessage(e.target.value)} rows={4} />
        </div>
        <label className="flex items-start gap-2 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={marketingOptIn}
            onChange={(e) => setMarketingOptIn(e.target.checked)}
            className="mt-1"
          />
          Voglio ricevere aggiornamenti e offerte dedicate sul canale diretto (opt-in).
        </label>
        <Button type="submit" className="w-full sm:w-auto" disabled={status === "loading" || status === "done"}>
          {status === "done" ? "Richiesta inviata" : status === "loading" ? "Invio…" : config.ctaLabel}
        </Button>
        {status === "error" && (
          <p className="text-sm text-red-600">Invio non riuscito. Riprova o usa WhatsApp.</p>
        )}
      </form>
      <p className="mt-4 text-center text-sm text-slate-600">
        Non perdiamo mai una richiesta operativa: ti rispondiamo appena possibile (di solito entro un giorno lavorativo).
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {topReviews.map((r) => (
          <div key={r.id} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">
            <div className="flex items-center gap-1 text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <p className="mt-2 text-slate-700 line-clamp-4">{r.text}</p>
            <p className="mt-2 text-xs text-slate-500">{r.author}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
