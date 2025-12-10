"use client"

/**
 * Componente temporaneo per debug variabili ambiente
 * Rimuovere dopo aver verificato che tutto funzioni
 */
export function EnvDebug() {
  if (process.env.NODE_ENV === 'production') {
    return null // Non mostrare in produzione
  }

  const envVars = {
    EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'NON CONFIGURATO',
    EMAILJS_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'NON CONFIGURATO',
    EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ? '***CONFIGURATO***' : 'NON CONFIGURATO',
    GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ? '***CONFIGURATO***' : 'NON CONFIGURATO',
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white text-xs p-3 rounded-lg z-50 max-w-xs">
      <div className="font-bold mb-2">🔍 Debug Env Vars (solo dev)</div>
      <div className="space-y-1">
        {Object.entries(envVars).map(([key, value]) => (
          <div key={key}>
            <span className="text-gray-400">{key}:</span> <span className={value.includes('NON') ? 'text-red-400' : 'text-green-400'}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

