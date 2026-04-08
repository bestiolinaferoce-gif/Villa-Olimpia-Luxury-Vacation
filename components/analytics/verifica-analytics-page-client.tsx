"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  RESOLVED_GTM_ID,
  getResolvedGaMeasurementId,
  isMetaPixelIdConfigured,
} from "@/components/analytics/analytics-config"
import { readMarketingConsentFromStorage } from "@/components/analytics/meta-pixel"

type Tri = "yes" | "no" | "checking"

function scriptSrcHasGtmLoader(): boolean {
  if (typeof document === "undefined") return false
  const scripts = document.querySelectorAll("script[src]")
  for (const s of scripts) {
    const src = s.getAttribute("src") || ""
    if (src.includes("googletagmanager.com/gtm.js")) return true
  }
  return false
}

export function VerificaAnalyticsPageClient() {
  const [mounted, setMounted] = useState(false)
  const [gtmScript, setGtmScript] = useState<Tri>("checking")
  const [dataLayerLen, setDataLayerLen] = useState(0)
  const [gtagFn, setGtagFn] = useState<Tri>("checking")
  const [marketingStored, setMarketingStored] = useState(false)

  const gaId = getResolvedGaMeasurementId()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const run = () => {
      const dl = (typeof window !== "undefined" && (window as unknown as { dataLayer?: unknown }).dataLayer) as
        | unknown[]
        | undefined
      setDataLayerLen(Array.isArray(dl) ? dl.length : 0)
      setGtmScript(scriptSrcHasGtmLoader() ? "yes" : "no")
      setGtagFn(typeof (window as unknown as { gtag?: unknown }).gtag === "function" ? "yes" : "no")
      setMarketingStored(readMarketingConsentFromStorage())
    }

    run()
    const t1 = window.setTimeout(run, 500)
    const t2 = window.setTimeout(run, 1500)
    return () => {
      window.clearTimeout(t1)
      window.clearTimeout(t2)
    }
  }, [mounted])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <p className="text-gray-500">Caricamento diagnostica…</p>
      </div>
    )
  }

  const gtmOk = gtmScript === "yes"
  const pixelConfigured = isMetaPixelIdConfigured()

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-lg mx-auto bg-white rounded-xl shadow p-6 space-y-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-900 mb-1">Verifica analytics (interno)</h1>
          <p className="text-sm text-gray-500">
            Controlli lato browser su questa sessione. Non sostituisce GTM Preview né GA4 DebugView.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-gray-50/80 p-3 text-xs text-gray-700 space-y-1">
          <p>
            <span className="font-semibold text-gray-800">Consent Mode (default):</span> nel layout,{" "}
            <code className="rounded bg-gray-200 px-1">analytics_storage</code> e{" "}
            <code className="rounded bg-gray-200 px-1">ad_storage</code> partono da{" "}
            <strong>denied</strong> fino ad aggiornamento tramite banner cookie.
          </p>
          <p className="text-gray-600">
            Un <code className="rounded bg-gray-200 px-1">dataLayer</code> non vuoto è normale anche prima del
            caricamento di <code className="rounded bg-gray-200 px-1">gtm.js</code> (push iniziali / consent).
          </p>
        </div>

        <div className="space-y-3">
          <Row
            label="Container GTM (risolto in build)"
            value={RESOLVED_GTM_ID}
            mono
            status="info"
          />
          <Row
            label="Script gtm.js nel DOM"
            value={
              gtmScript === "checking"
                ? "Verifica…"
                : gtmScript === "yes"
                  ? "Trovato"
                  : "Non trovato (attendi o controlla blocchi / CSP)"
            }
            status={gtmScript === "yes" ? "ok" : gtmScript === "no" ? "warn" : "neutral"}
          />
          <Row
            label="dataLayer — numero push"
            value={String(dataLayerLen)}
            mono
            status="info"
          />
          <Row
            label="Funzione window.gtag"
            value={
              gtagFn === "checking"
                ? "Verifica…"
                : gtagFn === "yes"
                  ? "Definita (bootstrap layout; non implica solo GA4)"
                  : "Non definita"
            }
            status={gtagFn === "yes" ? "info" : gtagFn === "no" ? "warn" : "neutral"}
          />
          <Row
            label="GA4 Measurement ID (NEXT_PUBLIC nel bundle)"
            value={gaId ?? "Non impostato o segnaposto in .env locale"}
            mono={Boolean(gaId)}
            status={gaId ? "info" : "warn"}
          />
          <Row
            label="Meta Pixel ID (env)"
            value={pixelConfigured ? "Presente nel bundle (ID numerico)" : "Assente o non valido"}
            status={pixelConfigured ? "info" : "neutral"}
          />
          <Row
            label="Marketing consent (localStorage)"
            value={marketingStored ? "Segnalato accettato / marketing" : "Non accettato o non presente"}
            status={marketingStored ? "ok" : "neutral"}
          />
        </div>

        {gtmOk && gaId ? (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-sm text-green-900">
            GTM risulta caricato e c&apos;è un GA4 ID nel bundle. Per confermare hit: GA4 Realtime / DebugView e
            GTM Preview.
          </div>
        ) : (
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-900">
            Se <strong>gtm.js</strong> manca: verifica estensioni, CSP in produzione, e che il deploy includa{" "}
            <code className="rounded bg-amber-100 px-1">AnalyticsUnified</code>. Se GA ID manca in locale,
            imposta <code className="rounded bg-amber-100 px-1">NEXT_PUBLIC_GA_MEASUREMENT_ID</code> in{" "}
            <code className="rounded bg-amber-100 px-1">.env.local</code> e riavvia il dev server.
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-primary text-white px-4 py-2 text-sm font-medium hover:opacity-90"
          >
            Torna alla home
          </Link>
          <a
            href="https://analytics.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-700 px-4 py-2 text-sm font-medium hover:bg-gray-50"
          >
            Apri Google Analytics
          </a>
        </div>
      </div>
    </div>
  )
}

function Row({
  label,
  value,
  mono,
  status,
}: {
  label: string
  value: string
  mono?: boolean
  status: "ok" | "warn" | "info" | "neutral"
}) {
  const valueClass =
    status === "ok"
      ? "text-green-700"
      : status === "warn"
        ? "text-amber-800"
        : status === "info"
          ? "text-gray-900"
          : "text-gray-600"
  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 py-2 border-b border-gray-100 last:border-0">
      <span className="text-gray-700 text-sm shrink-0">{label}</span>
      <span className={`text-sm font-medium text-right sm:max-w-[60%] break-all ${valueClass} ${mono ? "font-mono text-xs" : ""}`}>
        {value}
      </span>
    </div>
  )
}
