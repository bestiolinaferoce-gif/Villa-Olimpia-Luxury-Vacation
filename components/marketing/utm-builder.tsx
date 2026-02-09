"use client"

import { useMemo, useState } from "react"
import { SITE_CONFIG } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Copy, Link2, Sparkles } from "lucide-react"
import { trackEvent } from "@/components/analytics/google-analytics"

const defaultBasePath = "/contatti"

export function UtmBuilder() {
  const [basePath, setBasePath] = useState(defaultBasePath)
  const [source, setSource] = useState("")
  const [medium, setMedium] = useState("")
  const [campaign, setCampaign] = useState("")
  const [content, setContent] = useState("")
  const [term, setTerm] = useState("")
  const [copied, setCopied] = useState(false)

  const url = useMemo(() => {
    const base = `${SITE_CONFIG.url}${basePath}`
    const params = new URLSearchParams()
    if (source) params.set("utm_source", source)
    if (medium) params.set("utm_medium", medium)
    if (campaign) params.set("utm_campaign", campaign)
    if (content) params.set("utm_content", content)
    if (term) params.set("utm_term", term)
    return params.toString() ? `${base}?${params.toString()}` : base
  }, [basePath, source, medium, campaign, content, term])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      trackEvent("utm_copy", "Marketing", campaign || "campaign")
      setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="rounded-3xl border border-primary/10 bg-white p-8 shadow-xl">
      <div className="flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-primary" />
        <h2 className="text-2xl md:text-3xl font-playfair font-bold text-slate-900">UTM Builder</h2>
      </div>
      <p className="mt-2 text-sm text-slate-600">
        Genera link tracciati per campagne social, WhatsApp e referral senza costi.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="basePath">Pagina di destinazione</Label>
          <Input
            id="basePath"
            value={basePath}
            onChange={(event) => setBasePath(event.target.value.trim() || "/")}
            placeholder="/contatti"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="utmSource">UTM Source</Label>
          <Input
            id="utmSource"
            value={source}
            onChange={(event) => setSource(event.target.value)}
            placeholder="instagram"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="utmMedium">UTM Medium</Label>
          <Input
            id="utmMedium"
            value={medium}
            onChange={(event) => setMedium(event.target.value)}
            placeholder="social"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="utmCampaign">UTM Campaign</Label>
          <Input
            id="utmCampaign"
            value={campaign}
            onChange={(event) => setCampaign(event.target.value)}
            placeholder="always_on_2026"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="utmContent">UTM Content</Label>
          <Input
            id="utmContent"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            placeholder="bio_link"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="utmTerm">UTM Term</Label>
          <Input
            id="utmTerm"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
            placeholder="capopiccolo"
          />
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
          <Link2 className="h-4 w-4" />
          Link generato
        </div>
        <p className="mt-2 break-all text-slate-800">{url}</p>
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <Button variant="luxury" onClick={handleCopy}>
          <Copy className="mr-2 h-4 w-4" />
          {copied ? "Copiato" : "Copia link"}
        </Button>
        <Button variant="outline" asChild>
          <a href={url} target="_blank" rel="noopener noreferrer">
            Apri link
          </a>
        </Button>
      </div>
    </div>
  )
}
