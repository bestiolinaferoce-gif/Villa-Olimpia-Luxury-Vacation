"use client"

import Link from "next/link"
import { useState, FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { apartments } from "@/data/apartments"
import type { MonthConfig, SeasonalMonth } from "@/lib/seasonalConfig"
import { whatsappUrlForConfig } from "@/lib/seasonalConfig"
import {
  buildMailtoAvailabilityFallback,
  buildOfficialAvailabilityMessage,
  buildWhatsAppUrlFromText,
} from "@/lib/booking-contact"
import {
  trackEvent,
  trackFormStart,
  trackPhoneClick,
  trackWhatsAppClick,
} from "@/components/analytics/google-analytics"
import { MessageCircle, Phone } from "lucide-react"
import { DEFAULT_LOCALE, type SupportedLocale } from "@/lib/i18n-config"
import { getSeasonalLandingCopy } from "@/lib/seasonal-landing-copy"

export interface SeasonalUrgencyFormProps {
  config: MonthConfig
  monthKey: Exclude<SeasonalMonth, "other">
  defaultCheckIn: string
  defaultCheckOut: string
  locale?: SupportedLocale
}

export function SeasonalUrgencyForm({
  config,
  monthKey,
  defaultCheckIn,
  defaultCheckOut,
  locale = DEFAULT_LOCALE,
}: SeasonalUrgencyFormProps) {
  const copy = getSeasonalLandingCopy(locale)
  const isDefaultLocale = locale === DEFAULT_LOCALE
  const monthLabel = isDefaultLocale ? config.label : copy.monthLabel
  const submitLabel = isDefaultLocale ? config.ctaLabel : copy.form.submit
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
  const [formStarted, setFormStarted] = useState(false)

  const onFormStart = () => {
    if (formStarted) return
    setFormStarted(true)
    trackFormStart(`seasonal_${monthKey}`)
  }

  const openFallbackContact = () => {
    const summary = buildOfficialAvailabilityMessage({
      checkIn,
      checkOut,
      guests,
      apartment,
      sourceLabel: `landing ${monthKey}`,
    })
    const body = [
      summary,
      "",
      `Nome: ${name}`,
      `Email: ${email}`,
      `Telefono: ${phone}`,
      message ? `Messaggio: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n")
    const popup = window.open(buildWhatsAppUrlFromText(body), "_blank", "noopener,noreferrer")
    if (!popup) {
      window.location.href = buildMailtoAvailabilityFallback(config.emailSubject, body)
    }
  }

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
        trackEvent("lead_submit_success", "Conversion", `seasonal_${monthKey}`)
        try {
          localStorage.setItem("lead_submitted_v1", "1")
        } catch {
          /* ignore */
        }
      } else {
        setStatus("error")
        trackEvent("lead_submit_error", "Conversion", `seasonal_${monthKey}_server`)
        openFallbackContact()
      }
    } catch {
      setStatus("error")
      trackEvent("lead_submit_error", "Conversion", `seasonal_${monthKey}_network`)
      openFallbackContact()
    }
  }

  const options = apartments.filter((a) => a.active !== false)

  return (
    <section className="mx-auto max-w-3xl px-4 py-14">
      <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
        {monthLabel}
      </div>
      <h2 className="mt-3 font-playfair text-3xl font-bold tracking-tight text-slate-900">{copy.form.title}</h2>
      <p className="mt-2 text-slate-600 leading-relaxed">{copy.form.intro}</p>

      <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50/80 to-white p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">{copy.form.immediateLabel}</p>
          <p className="mt-1 text-sm text-slate-600">{copy.form.immediateNote}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" className="gap-1.5" asChild>
            <a
              href={whatsappUrlForConfig(config)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick(`seasonal_${monthKey}_form`)}
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </Button>
          <Button variant="outline" size="sm" className="gap-1.5" asChild>
            <a
              href="tel:+393335773390"
              onClick={() => trackPhoneClick(`+393335773390_seasonal_${monthKey}_form`)}
            >
              <Phone className="h-4 w-4" />
              {copy.form.call}
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/contatti?source=seasonal_form_full#prenota">{copy.form.fullForm}</Link>
          </Button>
        </div>
      </div>

      <form
        onSubmit={onSubmit}
        onFocus={onFormStart}
        className="mt-8 space-y-4 rounded-2xl border border-primary/10 bg-white p-6 shadow-md ring-1 ring-slate-100"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="sn">{copy.form.name}</Label>
            <Input id="sn" value={name} onChange={(e) => setName(e.target.value)} required minLength={2} />
          </div>
          <div>
            <Label htmlFor="se">{copy.form.email}</Label>
            <Input id="se" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="sp">{copy.form.phone}</Label>
            <Input id="sp" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="sg">{copy.form.guests}</Label>
            <Input id="sg" value={guests} onChange={(e) => setGuests(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="sci">{copy.form.checkIn}</Label>
            <Input id="sci" type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="sco">{copy.form.checkOut}</Label>
            <Input id="sco" type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} required />
          </div>
        </div>
        <div>
          <Label htmlFor="sap">{copy.form.lodge}</Label>
          <select
            id="sap"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            value={apartment}
            onChange={(e) => setApartment(e.target.value)}
          >
            <option value="">{copy.form.noPreference}</option>
            {options.map((a) => (
              <option key={a.id} value={a.name}>
                {a.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Label htmlFor="sm">{copy.form.message}</Label>
          <Textarea id="sm" value={message} onChange={(e) => setMessage(e.target.value)} rows={4} />
        </div>
        <label className="flex items-start gap-2 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={marketingOptIn}
            onChange={(e) => setMarketingOptIn(e.target.checked)}
            className="mt-1"
          />
          {copy.form.consent}
        </label>
        <Button
          type="submit"
          variant="luxury"
          size="lg"
          className="w-full"
          disabled={status === "loading" || status === "done"}
        >
          {status === "done" ? copy.form.sent : status === "loading" ? copy.form.sending : submitLabel}
        </Button>
        {status === "error" && <p className="text-sm text-red-600">{copy.form.error}</p>}
      </form>
      <p className="mt-4 text-center text-sm text-slate-600">{copy.form.footer}</p>
    </section>
  )
}
