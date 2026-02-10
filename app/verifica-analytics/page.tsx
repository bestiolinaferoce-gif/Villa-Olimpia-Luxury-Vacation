"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

type Status = "ok" | "no" | "checking"

export default function VerificaAnalyticsPage() {
  const [gtm, setGtm] = useState<Status>("checking")
  const [ga, setGa] = useState<Status>("checking")
  const [dataLayerLen, setDataLayerLen] = useState<number>(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const check = () => {
      const dl = typeof window !== "undefined" ? (window as any).dataLayer : null
      const gtagFn = typeof window !== "undefined" ? (window as any).gtag : null

      setDataLayerLen(Array.isArray(dl) ? dl.length : 0)
      setGtm(Array.isArray(dl) && dl.length > 0 ? "ok" : "no")
      setGa(typeof gtagFn === "function" ? "ok" : "no")
    }

    check()
    const t = setTimeout(check, 500)
    return () => clearTimeout(t)
  }, [mounted])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <p className="text-gray-500">Caricamento...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-lg mx-auto bg-white rounded-xl shadow p-6">
        <h1 className="text-xl font-semibold text-gray-900 mb-2">
          Verifica Google Analytics e Tag Manager
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Controlla che i tag siano caricati correttamente su questa pagina.
        </p>

        <div className="space-y-4">
          <div className="flex items-center justify-between py-2 border-b">
            <span className="text-gray-700">Google Tag Manager (dataLayer)</span>
            <span
              className={
                gtm === "ok"
                  ? "text-green-600 font-medium"
                  : gtm === "no"
                    ? "text-red-600 font-medium"
                    : "text-gray-400"
              }
            >
              {gtm === "ok" ? "Attivo" : gtm === "no" ? "Non rilevato" : "Verifica..."}
            </span>
          </div>
          <div className="flex items-center justify-between py-2 border-b">
            <span className="text-gray-700">Google Analytics (gtag)</span>
            <span
              className={
                ga === "ok"
                  ? "text-green-600 font-medium"
                  : ga === "no"
                    ? "text-red-600 font-medium"
                    : "text-gray-400"
              }
            >
              {ga === "ok" ? "Attivo" : ga === "no" ? "Non rilevato" : "Verifica..."}
            </span>
          </div>
          <div className="flex items-center justify-between py-2 border-b">
            <span className="text-gray-700">Eventi in dataLayer</span>
            <span className="text-gray-900 font-mono">{dataLayerLen}</span>
          </div>
        </div>

        {(gtm === "ok" && ga === "ok") ? (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 text-sm font-medium">
              Tutto ok. I tag sono caricati. Apri Google Analytics → Real-time e visita questa pagina per vedere la visita.
            </p>
          </div>
        ) : (
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-amber-800 text-sm">
              Se uno o più tag risultano &quot;Non rilevato&quot;, attendi qualche secondo e ricarica la pagina. Se persiste, controlla che le variabili d&apos;ambiente su Vercel siano impostate e che il deploy sia completato.
            </p>
          </div>
        )}

        <div className="mt-6 flex gap-3">
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
