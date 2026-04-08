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
import { Users, Mail, MessageSquare, AlertCircle, CheckCircle2, ChevronDown } from "lucide-react"
import { apartments } from "@/data/apartments"
import { trackBookingInitiation, trackEvent } from "@/components/analytics/google-analytics"
import { useSearchParams } from "next/navigation"
import {
  buildMailtoAvailabilityFallback,
  buildOfficialAvailabilityMessage,
  buildWhatsAppUrlFromText,
} from "@/lib/booking-contact"
import {
  type BookingFormCopy,
  type BookingFormCopyResolved,
  resolveBookingFormCopy,
} from "@/lib/booking-form-copy"
import emailjs from "@emailjs/browser"

export type { BookingFormCopy } from "@/lib/booking-form-copy"

function availabilityI18n(mt: BookingFormCopyResolved["messageTemplate"]) {
  return {
    title: mt.title,
    dates: mt.dates,
    guests: mt.guests,
    apartment: mt.apartment,
    source: mt.source,
    noPreference: mt.noPreference,
    defaultSourceLabel: mt.sourceLabel,
  }
}

function createBookingSchema(validation: BookingFormCopyResolved["validation"]) {
  return z.object({
    name: z.string().min(2, validation.nameMin),
    email: z.string().email(validation.emailInvalid),
    phone: z.string().min(8, validation.phoneMin),
    checkIn: z.string().min(1, validation.checkInRequired),
    checkOut: z.string().min(1, validation.checkOutRequired),
    guests: z.string().min(1, validation.guestsRequired),
    apartment: z.string().optional(),
    agency: z.string().optional(),
    message: z.string().optional(),
    company: z.string().optional(),
    source: z.string().optional(),
    utmSource: z.string().optional(),
    utmMedium: z.string().optional(),
    utmCampaign: z.string().optional(),
    landingPage: z.string().optional(),
  })
}

type BookingFormData = z.infer<ReturnType<typeof createBookingSchema>>

async function sendLeadViaEmailJS(
  data: {
    name: string
    email: string
    phone: string
    checkIn: string
    checkOut: string
    guests: string
    apartment?: string
    message?: string
  },
  apartmentFallback: string
) {
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  if (!publicKey || !serviceId || !templateId) return
  try {
    await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone || "—",
        check_in: data.checkIn,
        check_out: data.checkOut,
        guests: data.guests,
        apartment: data.apartment || apartmentFallback,
        message: data.message || "—",
      },
      publicKey
    )
  } catch {
    // silent — EmailJS is a backup channel
  }
}

function DateRangePicker({
  checkIn,
  checkOut,
  onCheckInChange,
  onCheckOutChange,
  picker,
  calendarLocale,
}: {
  checkIn: string
  checkOut: string
  onCheckInChange: (date: string) => void
  onCheckOutChange: (date: string) => void
  picker: BookingFormCopyResolved["picker"]
  calendarLocale: string
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

  const displayText =
    checkIn && checkOut
      ? `${format(new Date(checkIn), "dd MMM yyyy")} → ${format(new Date(checkOut), "dd MMM yyyy")}`
      : picker.selectRangePlaceholder

  return (
    <div ref={pickerRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-10 px-3 py-2 text-left text-sm rounded-md border border-input bg-background hover:bg-slate-50 transition-colors flex items-center justify-between"
      >
        <span className="text-muted-foreground">{displayText}</span>
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
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
            locale={calendarLocale}
            tileClassName={({ date, view }) => {
              if (view === "month") {
                if (Array.isArray(localValue) && localValue.length === 2) {
                  const [start, end] = localValue
                  if (start instanceof Date && end instanceof Date) {
                    if (date >= start && date <= end) {
                      if (
                        date.toDateString() === start.toDateString() ||
                        date.toDateString() === end.toDateString()
                      ) {
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
            <Button type="button" variant="outline" size="sm" className="w-full" onClick={() => setIsOpen(false)}>
              {picker.close}
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export function BookingForm({
  copy,
  calendarLocale = "it-IT",
}: {
  copy?: BookingFormCopy
  calendarLocale?: string
}) {
  const searchParams = useSearchParams()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const t = useMemo(() => resolveBookingFormCopy(copy), [copy])

  const bookingSchema = useMemo(() => createBookingSchema(t.validation), [t.validation])

  const apartmentOptions = useMemo(
    () =>
      apartments.map((apt) => ({
        value: apt.name,
        label: `${t.apartmentOptions.labelPrefix} ${apt.name}`,
      })),
    [t.apartmentOptions.labelPrefix]
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
    const checkInParam = searchParams.get("checkIn")
    const checkOutParam = searchParams.get("checkOut")
    const guests = searchParams.get("guests")
    const agency = searchParams.get("agency")

    if (apartment) setValue("apartment", apartment)
    if (checkInParam) setValue("checkIn", checkInParam)
    if (checkOutParam) setValue("checkOut", checkOutParam)
    if (guests) setValue("guests", guests)
    if (agency) setValue("agency", agency)
  }, [searchParams, setValue])

  const buildMailto = (data: BookingFormData) => {
    const mt = t.messageTemplate
    const subject = `${mt.subject} - ${data.name}`
    const official = buildOfficialAvailabilityMessage({
      checkIn: data.checkIn,
      checkOut: data.checkOut,
      guests: data.guests,
      apartment: data.apartment,
      sourceLabel: mt.sourceLabel,
      i18n: availabilityI18n(mt),
    })
    const body = [
      official,
      "",
      mt.contactDetails,
      `${mt.name}: ${data.name}`,
      `${mt.email}: ${data.email}`,
      `${mt.phone}: ${data.phone}`,
      ...(data.agency ? [`${mt.agency}: ${data.agency}`] : []),
      ...(data.message ? ["", `${mt.message}:`, data.message] : []),
    ].join("\n")
    return buildMailtoAvailabilityFallback(subject, body)
  }

  const getLeadType = (data: BookingFormData) => {
    return data.agency?.trim() ? "Agenzia / intermediario" : "Cliente diretto"
  }

  const getDaysToCheckIn = (checkInStr: string) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const target = new Date(checkInStr)
    target.setHours(0, 0, 0, 0)

    return Math.max(0, Math.round((target.getTime() - today.getTime()) / 86400000))
  }

  const getUrgencyLabel = (daysToCheckIn: number) => {
    if (daysToCheckIn <= 3) return "Last minute"
    if (daysToCheckIn <= 14) return "Vicino"
    return "Programmabile"
  }

  const buildWhatsAppUrl = (data: BookingFormData) => {
    const mt = t.messageTemplate
    const official = buildOfficialAvailabilityMessage({
      checkIn: data.checkIn,
      checkOut: data.checkOut,
      guests: data.guests,
      apartment: data.apartment,
      sourceLabel: mt.sourceLabel,
      i18n: availabilityI18n(mt),
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
      mt.contactDetails,
      `${mt.name}: ${data.name}`,
      `${mt.email}: ${data.email}`,
      `${mt.phone}: ${data.phone}`,
      `${mt.agency}: ${data.agency || mt.notProvided}`,
      "",
      `${mt.dates} / soggiorno:`,
      `${data.checkIn} → ${data.checkOut}`,
      `${mt.guests}: ${data.guests}`,
      `${mt.apartment}: ${data.apartment || mt.noPreference}`,
      "",
      `${mt.message}:`,
      data.message || mt.noAdditionalMessage,
      "",
      "Tracking:",
      `Fonte lead: ${source}`,
      `${mt.utmSource}: ${data.utmSource || "N/D"}`,
      `${mt.utmMedium}: ${data.utmMedium || "N/D"}`,
      `${mt.utmCampaign}: ${data.utmCampaign || "N/D"}`,
      `Landing page: ${data.landingPage || "N/D"}`,
    ].join("\n")
    return buildWhatsAppUrlFromText(`${official}\n${extra}`)
  }

  const onSubmit = async (data: BookingFormData) => {
    if (data.company) return

    if (new Date(data.checkIn) >= new Date(data.checkOut)) {
      setSubmitError(t.validation.invalidDateRange)
      return
    }

    const payload: BookingFormData = {
      ...data,
      source: searchParams.get("source") || "direct_contact_form",
      utmSource: searchParams.get("utm_source") || "",
      utmMedium: searchParams.get("utm_medium") || "",
      utmCampaign: searchParams.get("utm_campaign") || "",
      landingPage:
        typeof window !== "undefined" ? `${window.location.pathname}${window.location.search}` : "",
    }

    setIsSubmitting(true)
    setSubmitError(null)
    trackBookingInitiation()

    sendLeadViaEmailJS(payload, t.messageTemplate.noPreference)

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
        setSubmitError(t.status.submitUnavailable)
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
    } catch {
      setIsSubmitting(false)
      setSubmitError(t.status.submitFailed)
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
          <h3 className="text-lg font-semibold">{t.status.requestReadyTitle}</h3>
        </div>
        <p className="mt-3 text-sm text-emerald-700/80">{t.status.requestReadyDescription}</p>
        <Button
          variant="outline"
          className="mt-5"
          onClick={() => {
            setIsSubmitted(false)
            reset()
          }}
        >
          {t.status.sendAnother}
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">{t.labels.name}</Label>
          <Input
            id="name"
            {...register("name")}
            placeholder={t.placeholders.name}
            className={errors.name ? "border-destructive" : ""}
          />
          {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">{t.labels.email}</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder={t.placeholders.email}
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">{t.labels.phone}</Label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder={t.placeholders.phone}
            className={errors.phone ? "border-destructive" : ""}
          />
          {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="agency">{t.labels.agency}</Label>
          <Input
            id="agency"
            {...register("agency")}
            placeholder={t.placeholders.agency}
            className={errors.agency ? "border-destructive" : ""}
          />
          {errors.agency && <p className="text-sm text-destructive">{errors.agency.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="guests">{t.labels.guests}</Label>
          <div className="relative">
            <Users className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="guests"
              type="number"
              min="1"
              max="10"
              {...register("guests")}
              placeholder={t.placeholders.guests}
              className={`pl-9 ${errors.guests ? "border-destructive" : ""}`}
            />
          </div>
          {errors.guests && <p className="text-sm text-destructive">{errors.guests.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label>{t.picker.dateRangeLabel}</Label>
        <DateRangePicker
          checkIn={checkIn}
          checkOut={checkOut}
          onCheckInChange={(date) => setValue("checkIn", date)}
          onCheckOutChange={(date) => setValue("checkOut", date)}
          picker={t.picker}
          calendarLocale={calendarLocale}
        />
        {(errors.checkIn || errors.checkOut) && (
          <p className="text-sm text-destructive">
            {errors.checkIn?.message || errors.checkOut?.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="apartment">{t.labels.apartment}</Label>
        <select
          id="apartment"
          {...register("apartment")}
          className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        >
          <option value="">{t.apartmentOptions.noPreference}</option>
          {apartmentOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{t.labels.message}</Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder={t.placeholders.message}
          rows={5}
        />
      </div>

      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register("company")} />

      {submitError && (
        <div className="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4">
          <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
          <p className="text-sm text-amber-700">{submitError}</p>
        </div>
      )}

      <Button type="submit" variant="luxury" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? t.status.submitting : t.status.submit}
      </Button>

      <p className="text-xs leading-relaxed text-muted-foreground">{t.helperText}</p>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-center text-xs font-medium text-slate-700">
          {t.trustRow.direct}
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-center text-xs font-medium text-slate-700">
          {t.trustRow.fast}
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-center text-xs font-medium text-slate-700">
          {t.trustRow.clear}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Button type="button" variant="outline" className="w-full" asChild>
          <a href={buildMailtoAvailabilityFallback(t.messageTemplate.emailFallback, t.messageTemplate.whatsappFallback)}>
            <Mail className="mr-2 h-4 w-4" />
            {t.quickActions.email}
          </a>
        </Button>
        <Button type="button" variant="outline" className="w-full" asChild>
          <a
            href={buildWhatsAppUrlFromText(t.messageTemplate.whatsappFallback)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            {t.quickActions.whatsapp}
          </a>
        </Button>
      </div>
    </form>
  )
}
