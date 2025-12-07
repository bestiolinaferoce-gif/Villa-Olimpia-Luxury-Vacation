"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users, Mail, Phone, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"

const bookingSchema = z.object({
  name: z.string().min(2, "Il nome deve contenere almeno 2 caratteri"),
  email: z.string().email("Email non valida"),
  phone: z.string().min(10, "Numero di telefono non valido"),
  checkIn: z.string().min(1, "Seleziona una data di check-in"),
  checkOut: z.string().min(1, "Seleziona una data di check-out"),
  guests: z.string().min(1, "Seleziona il numero di ospiti"),
  apartment: z.string().optional(),
  message: z.string().optional(),
})

type BookingFormData = z.infer<typeof bookingSchema>

export function BookingForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  })

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    // Booking data ready for submission
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-2xl font-bold mb-2">Richiesta Inviata!</h3>
        <p className="text-muted-foreground mb-6">
          Ti risponderemo entro 24 ore per confermare la tua prenotazione.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setIsSubmitted(false)
            setCurrentStep(1)
          }}
        >
          Invia Nuova Richiesta
        </Button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Step 1: Personal Info */}
      {currentStep === 1 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <div>
            <Label htmlFor="name">Nome e Cognome *</Label>
            <Input
              id="name"
              {...register("name")}
              placeholder="Mario Rossi"
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && (
              <p className="text-sm text-destructive mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="mario.rossi@email.com"
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="text-sm text-destructive mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="phone">Telefono *</Label>
            <Input
              id="phone"
              type="tel"
              {...register("phone")}
              placeholder="+39 123 456 7890"
              className={errors.phone ? "border-destructive" : ""}
            />
            {errors.phone && (
              <p className="text-sm text-destructive mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => setCurrentStep(2)}
          >
            Continua
          </Button>
        </motion.div>
      )}

      {/* Step 2: Booking Details */}
      {currentStep === 2 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="checkIn">Check-in *</Label>
              <Input
                id="checkIn"
                type="date"
                {...register("checkIn")}
                className={errors.checkIn ? "border-destructive" : ""}
              />
              {errors.checkIn && (
                <p className="text-sm text-destructive mt-1">
                  {errors.checkIn.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="checkOut">Check-out *</Label>
              <Input
                id="checkOut"
                type="date"
                {...register("checkOut")}
                className={errors.checkOut ? "border-destructive" : ""}
              />
              {errors.checkOut && (
                <p className="text-sm text-destructive mt-1">
                  {errors.checkOut.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="guests">Numero Ospiti *</Label>
            <Input
              id="guests"
              type="number"
              min="1"
              max="10"
              {...register("guests")}
              placeholder="2"
              className={errors.guests ? "border-destructive" : ""}
            />
            {errors.guests && (
              <p className="text-sm text-destructive mt-1">
                {errors.guests.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="apartment">Appartamento Preferito (opzionale)</Label>
            <Input
              id="apartment"
              {...register("apartment")}
              placeholder="Es: Appartamento Vista Mare"
            />
          </div>

          <div className="flex gap-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => setCurrentStep(1)}
            >
              Indietro
            </Button>
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => setCurrentStep(3)}
            >
              Continua
            </Button>
          </div>
        </motion.div>
      )}

      {/* Step 3: Message & Submit */}
      {currentStep === 3 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <div>
            <Label htmlFor="message">Messaggio (opzionale)</Label>
            <Textarea
              id="message"
              {...register("message")}
              placeholder="Hai domande o richieste speciali?"
              rows={5}
            />
          </div>

          <div className="flex gap-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => setCurrentStep(2)}
            >
              Indietro
            </Button>
            <Button
              type="submit"
              variant="luxury"
              className="flex-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Invio in corso..." : "Invia Richiesta"}
            </Button>
          </div>
        </motion.div>
      )}

      {/* Progress Indicator */}
      <div className="flex items-center justify-center gap-2 pt-4">
        {[1, 2, 3].map((step) => (
          <div
            key={step}
            className={`h-2 w-2 rounded-full transition-colors ${
              step === currentStep
                ? "bg-primary"
                : step < currentStep
                ? "bg-primary/50"
                : "bg-muted"
            }`}
          />
        ))}
      </div>
    </form>
  )
}

