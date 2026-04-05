"use client"

import "react-calendar/dist/Calendar.css"

import { useEffect, useMemo, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import Calendar, { type CalendarProps } from "react-calendar"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Calendar as CalendarIcon, Users, Mail, MessageSquare, AlertCircle, CheckCircle2, ChevronDown } from "lucide-react"
import { apartments } from "@/data/apartments"
import { trackBookingInitiation, trackEvent } from "@/components/analytics/google-analytics"
import { useSearchParams } from "next/navigation"
import {
  buildMailtoAvailabilityFallback,
  buildOfficialAvailabilityMessage,
  buildWhatsAppUrlFromText,
} from "@/lib/booking-contact"
import emailjs from "@emailjs/browser"

// Client-side guaranteed delivery via EmailJS (backup channel)
async function sendLeadViaEmailJS(data: {
  name: string; email: string; phone: string; checkIn: string; checkOut: string;
  guests: string; apartment?: string; message?: string;
}) {
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  if (!publicKey || !serviceId || !templateId) return
  try {
    await emailjs.send(serviceId, templateId, {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone || "—",
      check_in: data.checkIn,
      check_out: data.checkOut,
      guests: data.guests,
      apartment: data.apartment || "Nessuna preferenza",
      message: data.message || "—",
    }, publicKey)
  } catch {
    // silent — EmailJS is a backup channel
  }
}

const bookingSchema = z.object({
  name: z.string().min(2, "Il nome deve contenere almeno 2 caratteri"),
  email: z.string().email("Email non valida"),
  phone: z.string().min(8, "Numero di telefono non valido"),
  checkIn: z.string().min(1, "Seleziona una data di check-in"),
  checkOut: z.string().min(1, "Seleziona una data di check-out"),
  guests: z.string().min(1, "Seleziona il numero di ospiti"),
  apartment: z.string().optional(),
  agency: z.string().optional(),
  message: z.string().optional(),
  company: z.string().optional(), // honeypot
  source: z.string().optional(),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
  landingPage: z.string().optional(),
})

type BookingFormData = z.infer<typeof bookingSchema>

function DateRangePicker({
  checkIn,
  checkOut,
  onCheckInChange,
  onCheckOutChange,
}: {
  checkIn: string
  checkOut: string
  onCheckInChange: (date: string) => void
  onCheckOutChange: (date: string) => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [localValue, setLocalValue] = useState<CalendarProps["value"]>(null)
  const pickerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (checkIn && checkOut) {
      setLocalValue([new Date(checkIn), new Date(checkOut)])
    }
  }, [checkIn, checkOut])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  const handleSelect: CalendarProps["onChange"] = (value) => {
    if (!value) return
    if (!Array.isArray(value)) {
      setLocalValue(value)
      return
    }
    const [start, end] = value
    setLocalValue(value)
    if (start instanceof Date && end instanceof Date) {
      onCheckInChange(format(start, "yyyy-MM-dd"))
      onCheckOutChange(format(end, "yyyy-MM-dd"))
      setIsOpen(false)
    }
  }

  const displayText = checkIn && checkOut
    ? `${format(new Date(checkIn), "dd MMM yyyy")} → ${format(new Date(checkOut), "dd MMM yyyy")}`
    : "Seleziona date"

  return (
    <div ref={pickerRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-10 px-3 py-2 text-left text-sm rounded-md border border-input bg-background hover:bg-slate-50 transition-colors flex items-center justify-between"
      >
        <span className="text-muted-foreground">{displayText}</span>
        <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 z-50 bg-white border border-slate-200 rounded-lg shadow-lg p-4">
          <style>{`
            .react-calendar {
              width: 100%;
              border: none;
              font-family: inherit;
            }
            .react-calendar__tile--active {
              background: #0f172a;
              color: white;
            }
            .react-calendar__tile--range {
              background: #e2e8f0;
            }
            .react-calendar__tile--rangeStart,
            .react-calendar__tile--rangeEnd {
              background: #0f172a;
              color: white;
            }
            .react-calendar__tile {
              padding: 8px 0;
              font-size: 0.875rem;
            }
            .react-calendar__month-view__days__day {
              padding: 0.5rem;
            }
            .react-calendar__navigation {
              margin-bottom: 1rem;
            }
            .react-calendar__navigation button {
              min-width: auto;
              font-size: 0.875rem;
              padding: 0.5rem;
            }
          `}</style>
          <Calendar
            onChange={handleSelect}
            value={localValue}
            selectRange={true}
            showDoubleView={true}
            minDate={new Date()}
            locale="it-IT"
            tileClassName={({ date, view }) => {
              if (view === "month") {
                if (Array.isArray(localValue) && localValue.length === 2) {
                  const [start, end] = localValue
                  if (start instanceof Date && end instanceof Date) {
                    if (date >= start && date <= end) {
                      if (date.toDateString() === start.toDateString() || date.toDateString() === end.toDateString()) {
                        return "font-bold"
                      }
                      return "bg-slate-200"
                    }
                  }
                }
              }
              return ""
            }}
          />
          <div className="mt-4 flex gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              Chiudi
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export function BookingForm() {
  const searchParams = useSearchParams()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const apartmentOptions = useMemo(
    () => apartments.map((apt) => ({ value: apt.name, label: `Appartamento ${apt.name}` })),
    []
  )

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  })

  const checkIn = watch("checkIn")
  const checkOut = watch("checkOut")

  useEffect(() => {
    const apartment = searchParams.get("apartment")
    const checkIn = searchParams.get("checkIn")
    const checkOut = searchParams.get("checkOut")
    const guests = searchParams.get("guests")
    const agency = searchParams.get("agency")

    if (apartment) setValue("apartment", apartment)
    if (checkIn) setValue("checkIn", checkIn)
    if (checkOut) setValue("checkOut", checkOut)
    if (guests) setValue("guests", guests)
    if (agency) setValue("agency", agency)
  }, [searchParams, setValue])

  const buildMailto = (data: BookingFormData) => {
    const subject = `Richiesta Preventivo - ${data.name}`
    const official = buildOfficialAvailabilityMessage({
      checkIn: data.checkIn,
      checkOut: data.checkOut,
      guests: data.guests,
      apartment: data.apartment,
      sourceLabel: "sito ufficiale",
    })
    const body = [
      official,
      "",
      "Contatto:",
      `Nome: ${data.name}`,
      `Email: ${data.email}`,
      `Telefono: ${data.phone}`,
      ...(data.agency ? [`Agenzia: ${data.agency}`] : []),
      ...(data.message ? ["", "Messaggio:", data.message] : []),
    ].join("\n")
    return buildMailtoAvailabilityFallback(subject, body)
  }

  const getLeadType = (data: BookingFormData) => {
    return data.agency?.trim() ? "Agenzia / intermediario" : "Cliente diretto"
  }

  const getDaysToCheckIn = (checkIn: string) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const target = new Date(checkIn)
    target.setHours(0, 0, 0, 0)

    return Math.max(0, Math.round((target.getTime() - today.getTime()) / 86400000))
  }

  const getUrgencyLabel = (daysToCheckIn: number) => {
    if (daysToCheckIn <= 3) return "Last minute"
    if (daysToCheckIn <= 14) return "Vicino"
    return "Programmabile"
  }

  const buildWhatsAppUrl = (data: BookingFormData) => {
    const official = buildOfficialAvailabilityMessage({
      checkIn: data.checkIn,
      checkOut: data.checkOut,
      guests: data.guests,
      apartment: data.apartment,
      sourceLabel: "sito ufficiale",
    })
    const source = data.source || "Diretta"
    const daysToCheckIn = getDaysToCheckIn(data.checkIn)
    const leadType = getLeadType(data)
    const urgency = getUrgencyLabel(daysToCheckIn)
    const extra = [
      "",
      "Classificazione lead:",
      `Tipo richiesta: ${leadType}`,
      `Urgenza: ${urgency}`,
      `Giorni al check-in: ${daysToCheckIn}`,
      "",
      "Contatto:",
      `Nome: ${data.name}`,
      `Email: ${data.email}`,
      `Telefono: ${data.phone}`,
      `Agenzia: ${data.agency || "Non indicata"}`,
      "",
      "Dettagli soggiorno:",
      `Check-in: ${data.checkIn}`,
      `Check-out: ${data.checkOut}`,
      `Ospiti: ${data.guests}`,
      `Appartamento: ${data.apartment || "Nessuna preferenza"}`,
      "",
      "Messaggio:",
      data.message || "Nessun messaggio aggiuntivo",
      "",
      "Tracking:",
      `Fonte lead: ${source}`,
      `UTM Source: ${data.utmSource || "N/D"}`,
      `UTM Medium: ${data.utmMedium || "N/D"}`,
      `UTM Campaign: ${data.utmCampaign || "N/D"}`,
      `Landing page: ${data.landingPage || "N/D"}`,
    ].join("\n")
    return buildWhatsAppUrlFromText(`${official}\n${extra}`)
  }

  const onSubmit = async (data: BookingFormData) => {
    if (data.company) return

    if (new Date(data.checkIn) >= new Date(data.checkOut)) {
      setSubmitError("Check-out deve essere successivo al check-in.")
      return
    }

    const payload: BookingFormData = {
      ...data,
      source: searchParams.get("source") || "direct_contact_form",
      utmSource: searchParams.get("utm_source") || "",
      utmMedium: searchParams.get("utm_medium") || "",
      utmCampaign: searchParams.get("utm_campaign") || "",
      landingPage: typeof window !== "undefined" ? `${window.location.pathname}${window.location.search}` : "",
    }

    setIsSubmitting(true)
    setSubmitError(null)
    trackBookingInitiation()

    // Fire EmailJS in parallel — guaranteed backup delivery regardless of server
    sendLeadViaEmailJS(payload)

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const serverPayload = await response.json().catch(() => null)

      if (!response.ok || !serverPayload?.ok) {
        trackEvent("lead_submit_fallback", "Conversion", serverPayload?.reason || "unknown")
        setIsSubmitting(false)
        setSubmitError("Invio automatico non disponibile in questo momento. Ti apriamo WhatsApp con il messaggio già compilato.")
        const popup = window.open(buildWhatsAppUrl(payload), "_blank", "noopener,noreferrer")
        if (!popup) {
          window.location.href = buildMailto(payload)
        }
        return
      }

      setIsSubmitting(false)
      setIsSubmitted(true)
      trackEvent("lead_submit_success", "Conversion", payload.apartment || "no_apartment")
      reset()
    } catch (error) {
      setIsSubmitting(false)
      setSubmitError(
        "Invio automatico non riuscito. Ti apriamo WhatsApp con il messaggio già compilato."
      )
      trackEvent("lead_submit_error", "Conversion", "network_error")
      const popup = window.open(buildWhatsAppUrl(payload), "_blank", "noopener,noreferrer")
      if (!popup) {
        window.location.href = buildMailto(payload)
      }
    }
  }

  if (isSubmitted) {
    return (
      <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-6 text-center">
        <div className="flex items-center justify-center gap-3 text-emerald-700">
          <CheckCircle2 className="h-6 w-6" />
          <h3 className="text-lg font-semibold">Richiesta inviata</h3>
        </div>
        <p className="mt-3 text-sm text-emerald-700/80">
          Abbiamo ricevuto la tua richiesta e ti risponderemo il prima possibile. Se preferisci, puoi
          contattarci anche via WhatsApp o email.
        </p>
        <Button
          variant="outline"
          className="mt-5"
          onClick={() => {
            setIsSubmitted(false)
            reset()
          }}
        >
          Invia un&apos;altra richiesta
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Nome e Cognome *</Label>
          <Input
            id="name"
            {...register("name")}
            placeholder="Mario Rossi"
            className={errors.name ? "border-destructive" : ""}
          />
          {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="mario.rossi@email.com"
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Telefono *</Label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder="+39 123 456 7890"
            className={errors.phone ? "border-destructive" : ""}
          />
          {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="agency">Agenzia (opzionale)</Label>
          <Input
            id="agency"
            {...register("agency")}
            placeholder="Nome agenzia o tour operator"
            className={errors.agency ? "border-destructive" : ""}
          />
          {errors.agency && <p className="text-sm text-destructive">{errors.agency.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="guests">Numero Ospiti *</Label>
          <div className="relative">
            <Users className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="guests"
              type="number"
              min="1"
              max="10"
              {...register("guests")}
              placeholder="2"
              className={`pl-9 ${errors.guests ? "border-destructive" : ""}`}
            />
          </div>
          {errors.guests && <p className="text-sm text-destructive">{errors.guests.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label>Seleziona date di check-in e check-out *</Label>
        <DateRangePicker
          checkIn={checkIn}
          checkOut={checkOut}
          onCheckInChange={(date) => setValue("checkIn", date)}
          onCheckOutChange={(date) => setValue("checkOut", date)}
        />
        {(errors.checkIn || errors.checkOut) && (
          <p className="text-sm text-destructive">
            {errors.checkIn?.message || errors.checkOut?.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="apartment">Appartamento preferito</Label>
        <select
          id="apartment"
          {...register("apartment")}
          className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        >
          <option value="">Nessuna preferenza</option>
          {apartmentOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Messaggio</Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Hai domande o richieste speciali?"
          rows={5}
        />
      </div>

      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        {...register("company")}
      />

      {submitError && (
        <div className="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4">
          <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
          <p className="text-sm text-amber-700">{submitError}</p>
        </div>
      )}

      <Button type="submit" variant="luxury" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Invio in corso..." : "Invia richiesta"}
      </Button>

      <p className="text-xs leading-relaxed text-muted-foreground">
        Compila il form per ricevere una risposta chiara e un contatto diretto con Villa Olimpia.
      </p>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-center text-xs font-medium text-slate-700">
          Contatto diretto
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-center text-xs font-medium text-slate-700">
          Risposta rapida
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-center text-xs font-medium text-slate-700">
          Dettagli chiari
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Button
          type="button"
          variant="outline"
          className="w-full"
          asChild
        >
          <a
            href={buildMailtoAvailabilityFallback(
              "Informazioni Villa Olimpia",
              "Richiesta disponibilità Villa Olimpia:\n(scrivi date e ospiti)"
            )}
          >
            <Mail className="mr-2 h-4 w-4" />
            Invia via Email
          </a>
        </Button>
        <Button
          type="button"
          variant="outline"
          className="w-full"
          asChild
        >
          <a
            href={buildWhatsAppUrlFromText(
              "Richiesta disponibilità Villa Olimpia:\nDate: \nOspiti: \nAppartamento: \nFonte: sito ufficiale"
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Scrivi su WhatsApp
          </a>
        </Button>
      </div>
    </form>
  )
}
