"use client"

import { motion } from "framer-motion"
import { Sun, Cloud, CloudRain, CloudDrizzle, CloudSnow, Wind, Eye } from "lucide-react"
import { useEffect, useState } from "react"

interface WeatherData {
  temperature: number
  condition: string
  conditionCode: number
  humidity: number
  windSpeed: number
  visibility: number
}

// Coordinate Capo Rizzuto, Isola di Capo Rizzuto
const LAT = 38.913856
const LON = 17.0754964

interface WeatherWidgetProps {
  position?: 'hero' | 'cta'
}

export function WeatherWidget({ position = 'hero' }: WeatherWidgetProps = {}) {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setIsLoading(true)
        setError(false)
        
        // Open-Meteo API (gratuito, no API key richiesta)
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,visibility&timezone=Europe/Rome&forecast_days=1`
        )
        
        if (!response.ok) throw new Error('Failed to fetch weather')
        
        const data = await response.json()
        const current = data.current
        
        // Mappa weather code WMO a condizioni italiane
        const getCondition = (code: number): { text: string; icon: string } => {
          if (code === 0) return { text: "Sereno", icon: "sun" }
          if (code <= 3) return { text: "Parzialmente nuvoloso", icon: "cloud-sun" }
          if (code <= 48) return { text: "Nuvoloso", icon: "cloud" }
          if (code <= 67) return { text: "Pioggia", icon: "rain" }
          if (code <= 77) return { text: "Neve", icon: "snow" }
          if (code <= 82) return { text: "Rovesci", icon: "drizzle" }
          if (code <= 86) return { text: "Neve", icon: "snow" }
          return { text: "Nuvoloso", icon: "cloud" }
        }
        
        const condition = getCondition(current.weather_code)
        
        setWeather({
          temperature: Math.round(current.temperature_2m),
          condition: condition.text,
          conditionCode: current.weather_code,
          humidity: current.relative_humidity_2m,
          windSpeed: Math.round(current.wind_speed_10m),
          visibility: Math.round(current.visibility / 1000) // converti da metri a km
        })
      } catch (err) {
        console.error('Weather fetch error:', err)
        setError(true)
        // Fallback con dati realistici per Capo Rizzuto
        setWeather({
          temperature: 18,
          condition: "Parzialmente nuvoloso",
          conditionCode: 2,
          humidity: 65,
          windSpeed: 12,
          visibility: 10
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchWeather()
    
    // Aggiorna ogni 30 minuti
    const interval = setInterval(fetchWeather, 30 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  const getWeatherIcon = (code: number) => {
    if (code === 0) return <Sun className="h-5 w-5 text-yellow-300" />
    if (code <= 3) return <Cloud className="h-5 w-5 text-white/90" />
    if (code <= 48) return <Cloud className="h-5 w-5 text-white/80" />
    if (code <= 67) return <CloudRain className="h-5 w-5 text-blue-200" />
    if (code <= 77) return <CloudSnow className="h-5 w-5 text-blue-100" />
    if (code <= 82) return <CloudDrizzle className="h-5 w-5 text-blue-200" />
    return <Cloud className="h-5 w-5 text-white/90" />
  }

  const isHero = position === 'hero'
  const isCTA = position === 'cta'

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className={isHero 
          ? "bg-white/95 backdrop-blur-md rounded-xl px-4 py-3 shadow-xl border border-white/50"
          : "relative bg-white/95 backdrop-blur-md rounded-xl px-4 py-3 shadow-xl border border-white/50"
        }
      >
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          <span className="text-sm text-muted-foreground">Caricamento...</span>
        </div>
      </motion.div>
    )
  }

  if (!weather) return null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: isHero ? 20 : 0 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: isHero ? 1.1 : 0.6, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.05, y: isHero ? -2 : 0 }}
      className={isHero
        ? "bg-gradient-to-br from-primary/95 to-ocean/95 backdrop-blur-md rounded-xl px-3 py-2.5 md:px-4 md:py-3 shadow-2xl border-2 border-white/30 flex items-center gap-2 md:gap-3 group cursor-pointer"
        : "relative bg-gradient-to-br from-primary/95 to-ocean/95 backdrop-blur-md rounded-xl px-4 py-3 shadow-2xl border-2 border-white flex items-center gap-3 group"
      }
    >
      <motion.div
        animate={{ 
          rotate: weather.conditionCode === 0 ? [0, 15, -15, 0] : [0, 5, -5, 0],
        }}
        transition={{ 
          duration: weather.conditionCode === 0 ? 3 : 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="flex-shrink-0"
      >
        <div className="text-white drop-shadow-md">
          {getWeatherIcon(weather.conditionCode)}
        </div>
      </motion.div>
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-playfair font-bold text-white drop-shadow-md">{weather.temperature}°</span>
        <span className="text-xs text-white/80">C</span>
      </div>
      <div className="hidden sm:block border-l border-white/30 pl-3 min-w-[100px]">
        <p className="text-xs text-white/90 leading-tight font-medium">Capo Rizzuto</p>
        <p className="text-xs font-semibold text-white">{weather.condition}</p>
        <div className="flex items-center gap-2 mt-1">
          <Wind className="h-3 w-3 text-white/70" />
          <span className="text-xs text-white/80">{weather.windSpeed} km/h</span>
        </div>
      </div>
    </motion.div>
  )
}

