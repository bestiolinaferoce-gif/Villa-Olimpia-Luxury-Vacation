"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle, XCircle } from "lucide-react"

interface EnvVarStatus {
  name: string
  value: string
  present: boolean
  length: number
}

export function DebugPanel() {
  const [envVars, setEnvVars] = useState<EnvVarStatus[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    const vars: EnvVarStatus[] = [
      {
        name: 'NEXT_PUBLIC_GOOGLE_MAPS_API_KEY',
        value: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
        present: Boolean(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY && process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY.length > 10),
        length: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.length || 0,
      },
      {
        name: 'NEXT_PUBLIC_EMAILJS_SERVICE_ID',
        value: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        present: Boolean(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID && process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID.length > 5),
        length: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?.length || 0,
      },
      {
        name: 'NEXT_PUBLIC_EMAILJS_TEMPLATE_ID',
        value: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        present: Boolean(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID && process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID.length > 5),
        length: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?.length || 0,
      },
      {
        name: 'NEXT_PUBLIC_EMAILJS_PUBLIC_KEY',
        value: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
        present: Boolean(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY && process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY.length > 5),
        length: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.length || 0,
      },
    ]
    
    setEnvVars(vars)
  }, [])

  if (!isClient) return null

  const allPresent = envVars.every(v => v.present)
  const missingCount = envVars.filter(v => !v.present).length

  return (
    <Card className="fixed bottom-4 left-4 z-50 max-w-md bg-white/95 backdrop-blur-sm border-2 border-primary/20 shadow-xl">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-bold flex items-center gap-2">
          {allPresent ? (
            <CheckCircle className="h-4 w-4 text-green-500" />
          ) : (
            <AlertCircle className="h-4 w-4 text-red-500" />
          )}
          Debug Panel - Variabili Ambiente
        </CardTitle>
        <CardDescription className="text-xs">
          {allPresent 
            ? '✅ Tutte le variabili sono presenti' 
            : `⚠️ ${missingCount} variabile/i mancante/i`}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {envVars.map((envVar) => (
          <div
            key={envVar.name}
            className={`text-xs p-2 rounded border ${
              envVar.present
                ? 'bg-green-50 border-green-200'
                : 'bg-red-50 border-red-200'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono font-semibold">{envVar.name}</span>
              {envVar.present ? (
                <CheckCircle className="h-3 w-3 text-green-500" />
              ) : (
                <XCircle className="h-3 w-3 text-red-500" />
              )}
            </div>
            <div className="text-gray-600">
              {envVar.present ? (
                <>
                  <span className="text-green-700">✅ Presente</span>
                  <span className="ml-2 text-gray-500">
                    ({envVar.length} caratteri)
                  </span>
                  <div className="mt-1 font-mono text-[10px] text-gray-500">
                    {envVar.value.substring(0, 15)}...
                  </div>
                </>
              ) : (
                <span className="text-red-700">❌ MANCANTE</span>
              )}
            </div>
          </div>
        ))}
        <div className="mt-3 pt-2 border-t border-gray-200">
          <p className="text-[10px] text-gray-500">
            💡 Se vedi "MANCANTE", configura le variabili su Vercel → Settings → Environment Variables e fai un Redeploy
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

