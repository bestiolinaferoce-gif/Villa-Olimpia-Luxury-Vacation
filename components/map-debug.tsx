"use client"

import { useEffect, useState } from "react"

/**
 * Componente di debug temporaneo per verificare le variabili ambiente
 * Rimuovere dopo aver verificato che tutto funzioni
 */
export function MapDebug() {
  const [envVars, setEnvVars] = useState<{
    apiKey: string
    hasApiKey: boolean
    apiKeyLength: number
  }>({
    apiKey: '',
    hasApiKey: false,
    apiKeyLength: 0,
  })

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''
    setEnvVars({
      apiKey: apiKey ? `${apiKey.substring(0, 10)}...` : 'NON TROVATA',
      hasApiKey: Boolean(apiKey && apiKey.length > 10),
      apiKeyLength: apiKey.length,
    })
  }, [])

  // Mostra solo in produzione per debug
  if (process.env.NODE_ENV === 'production') {
    return (
      <div className="fixed bottom-20 right-4 bg-black/90 text-white text-xs p-3 rounded-lg z-50 max-w-xs font-mono">
        <div className="font-bold mb-2">🔍 Debug Mappa (solo produzione)</div>
        <div className="space-y-1">
          <div>
            <span className="text-gray-400">API Key:</span>{' '}
            <span className={envVars.hasApiKey ? 'text-green-400' : 'text-red-400'}>
              {envVars.apiKey}
            </span>
          </div>
          <div>
            <span className="text-gray-400">Lunghezza:</span>{' '}
            <span className={envVars.hasApiKey ? 'text-green-400' : 'text-red-400'}>
              {envVars.apiKeyLength}
            </span>
          </div>
          <div>
            <span className="text-gray-400">Stato:</span>{' '}
            <span className={envVars.hasApiKey ? 'text-green-400' : 'text-red-400'}>
              {envVars.hasApiKey ? '✅ OK' : '❌ MANCANTE'}
            </span>
          </div>
        </div>
        <div className="mt-2 pt-2 border-t border-gray-700 text-[10px] text-gray-500">
          Rimuovere dopo verifica
        </div>
      </div>
    )
  }

  return null
}

