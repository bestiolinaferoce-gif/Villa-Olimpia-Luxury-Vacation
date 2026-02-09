export type LeadTier = "HOT" | "WARM" | "COLD"
export type LeadUrgency = "last_minute" | "planning" | "far"
export type FollowUpChannel = "phone_whatsapp_first" | "email_first"

export interface FollowUpPlan {
  firstContactBy: string
  firstContactWithinMinutes: number
  channel: FollowUpChannel
  priorityReason: string
  whatsappDraft: string
  emailDraftSubject: string
  emailDraftBody: string
}

export interface LeadPayload {
  name: string
  email: string
  phone: string
  checkIn: string
  checkOut: string
  guests: string
  apartment?: string
  message?: string
  agency?: string
  company?: string
  source?: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  landingPage?: string
}

export interface EnrichedLead extends LeadPayload {
  leadId: string
  receivedAt: string
  leadScore: number
  leadTier: LeadTier
  urgency: LeadUrgency
  isAgency: boolean
  stayNights: number
  daysToCheckIn: number
  sourceNormalized: string
  utm: {
    source: string
    medium: string
    campaign: string
  }
  context: {
    ip: string
    userAgent: string
    referer: string
  }
  followUpPlan: FollowUpPlan
}

function daysBetween(a: Date, b: Date) {
  return Math.ceil((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24))
}

function normalize(value?: string) {
  return (value || "").trim()
}

function leadTierFromScore(score: number): LeadTier {
  if (score >= 75) return "HOT"
  if (score >= 45) return "WARM"
  return "COLD"
}

function urgencyFromDays(daysToCheckIn: number): LeadUrgency {
  if (daysToCheckIn <= 7) return "last_minute"
  if (daysToCheckIn <= 45) return "planning"
  return "far"
}

export function buildEnrichedLead(
  lead: LeadPayload,
  input: { ip: string; userAgent: string; referer: string; now?: Date }
): EnrichedLead {
  const now = input.now || new Date()
  const checkIn = new Date(lead.checkIn)
  const checkOut = new Date(lead.checkOut)
  const stayNights =
    Number.isNaN(checkIn.getTime()) || Number.isNaN(checkOut.getTime())
      ? 0
      : Math.max(0, daysBetween(checkIn, checkOut))
  const daysToCheckIn = Number.isNaN(checkIn.getTime()) ? 0 : Math.max(0, daysBetween(now, checkIn))
  const isAgency = Boolean(normalize(lead.agency))
  const guests = Number(lead.guests || "0")

  let score = 0
  if (isAgency) score += 40
  if (guests >= 5) score += 20
  else if (guests >= 3) score += 10
  if (stayNights >= 7) score += 15
  else if (stayNights >= 4) score += 8
  if (daysToCheckIn <= 7) score += 25
  else if (daysToCheckIn <= 30) score += 15
  if (normalize(lead.apartment)) score += 8
  if (normalize(lead.message).length >= 30) score += 5

  const utmMedium = normalize(lead.utmMedium).toLowerCase()
  if (utmMedium === "cpc" || utmMedium === "paid" || utmMedium === "ppc") score += 8

  score = Math.max(0, Math.min(score, 100))
  const leadTier = leadTierFromScore(score)
  const urgency = urgencyFromDays(daysToCheckIn)
  const followUpPlan = buildFollowUpPlan({
    lead,
    now,
    leadTier,
    urgency,
    isAgency,
    daysToCheckIn,
  })

  return {
    ...lead,
    leadId: `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    receivedAt: now.toISOString(),
    leadScore: score,
    leadTier,
    urgency,
    isAgency,
    stayNights,
    daysToCheckIn,
    sourceNormalized: normalize(lead.source) || "direct_contact_form",
    utm: {
      source: normalize(lead.utmSource) || "n/a",
      medium: normalize(lead.utmMedium) || "n/a",
      campaign: normalize(lead.utmCampaign) || "n/a",
    },
    context: {
      ip: input.ip || "unknown",
      userAgent: input.userAgent || "unknown",
      referer: input.referer || "unknown",
    },
    followUpPlan,
  }
}

export function leadPriorityTag(lead: EnrichedLead) {
  const agency = lead.isAgency ? "B2B" : "B2C"
  return `${lead.leadTier}-${agency}`
}

function buildFollowUpPlan(input: {
  lead: LeadPayload
  now: Date
  leadTier: LeadTier
  urgency: LeadUrgency
  isAgency: boolean
  daysToCheckIn: number
}): FollowUpPlan {
  const { lead, now, leadTier, urgency, isAgency, daysToCheckIn } = input
  const contactMinutes = leadTier === "HOT" ? 10 : leadTier === "WARM" ? 60 : 240
  const channel: FollowUpChannel = isAgency || urgency === "last_minute" ? "phone_whatsapp_first" : "email_first"
  const firstContactBy = new Date(now.getTime() + contactMinutes * 60 * 1000).toISOString()

  const reasonParts = [
    `tier=${leadTier}`,
    `urgency=${urgency}`,
    isAgency ? "agency=yes" : "agency=no",
    `d2ci=${daysToCheckIn}`,
  ]

  const whatsappDraft = [
    `Ciao ${lead.name}, grazie per la richiesta a Villa Olimpia.`,
    `Abbiamo disponibilita per il periodo ${lead.checkIn} - ${lead.checkOut} per ${lead.guests} ospiti.`,
    `Se vuoi, ti invio ora la proposta migliore${lead.apartment ? ` per ${lead.apartment}` : ""}.`,
  ].join(" ")

  const emailDraftSubject = `Proposta soggiorno Villa Olimpia - ${lead.checkIn} / ${lead.checkOut}`
  const emailDraftBody = [
    `Ciao ${lead.name},`,
    "",
    "grazie per averci contattato. Ecco un riepilogo della tua richiesta:",
    `- Check-in: ${lead.checkIn}`,
    `- Check-out: ${lead.checkOut}`,
    `- Ospiti: ${lead.guests}`,
    `- Appartamento: ${lead.apartment || "Nessuna preferenza"}`,
    "",
    "Se vuoi, rispondi a questa email con eventuali richieste aggiuntive.",
    "",
    "A presto,",
    "Villa Olimpia",
  ].join("\n")

  return {
    firstContactBy,
    firstContactWithinMinutes: contactMinutes,
    channel,
    priorityReason: reasonParts.join(" | "),
    whatsappDraft,
    emailDraftSubject,
    emailDraftBody,
  }
}
