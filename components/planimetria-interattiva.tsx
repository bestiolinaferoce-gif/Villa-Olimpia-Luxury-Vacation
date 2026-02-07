'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

interface Apartment {
  id: string
  name: string
  slug: string
  coordinates: { x: number; y: number; width: number; height: number }
  color: string
}

// Coordinate placeholder - DA AGGIORNARE in base alla planimetria reale
const apartments: Apartment[] = [
  { id: '1', name: 'Frangipane', slug: 'frangipane', coordinates: { x: 5, y: 5, width: 28, height: 28 }, color: '#FF6B6B' },
  { id: '2', name: 'Fiordaliso', slug: 'fiordaliso', coordinates: { x: 36, y: 5, width: 28, height: 28 }, color: '#4ECDC4' },
  { id: '3', name: 'Giglio', slug: 'giglio', coordinates: { x: 67, y: 5, width: 28, height: 28 }, color: '#95E1D3' },
  { id: '4', name: 'Orchidea', slug: 'orchidea', coordinates: { x: 5, y: 36, width: 28, height: 28 }, color: '#F38181' },
  { id: '5', name: 'Tulipano', slug: 'tulipano', coordinates: { x: 36, y: 36, width: 28, height: 28 }, color: '#AA96DA' },
  { id: '6', name: 'Lavanda', slug: 'lavanda', coordinates: { x: 67, y: 36, width: 28, height: 28 }, color: '#FCBAD3' },
  { id: '7', name: 'Geranio', slug: 'geranio', coordinates: { x: 5, y: 67, width: 28, height: 28 }, color: '#FFFFD2' },
  { id: '8', name: 'Gardenia', slug: 'gardenia', coordinates: { x: 36, y: 67, width: 28, height: 28 }, color: '#A8D8EA' },
  { id: '9', name: 'Azalea', slug: 'azalea', coordinates: { x: 67, y: 67, width: 28, height: 28 }, color: '#FFD3B6' },
]

export default function PlanimetriaInterattiva() {
  const [hoveredApt, setHoveredApt] = useState<string | null>(null)

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Planimetria base */}
      <div className="relative aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-200">
        {/* Immagine planimetria - fallback se non presente */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
          <div className="text-center text-gray-400">
            <p className="text-lg mb-2">Planimetria Villa Olimpia</p>
            <p className="text-sm">Carica planimetria-villa-olimpia.png in public/images/</p>
          </div>
        </div>
        
        {/* Placeholder per immagine planimetria */}
        <Image
          src="/images/planimetria-villa-olimpia.png"
          fill
          className="object-contain opacity-20"
          alt="Planimetria Villa Olimpia"
          onError={(e) => {
            // Nascondi se immagine non esiste
            const target = e.currentTarget as HTMLImageElement
            target.style.display = 'none'
          }}
        />

        {/* SVG overlay con appartamenti cliccabili */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {apartments.map((apt) => (
            <Link key={apt.id} href={`/appartamenti/${apt.slug}`}>
              <motion.g
                onMouseEnter={() => setHoveredApt(apt.id)}
                onMouseLeave={() => setHoveredApt(null)}
                className="cursor-pointer"
              >
                {/* Area appartamento */}
                <motion.rect
                  x={apt.coordinates.x}
                  y={apt.coordinates.y}
                  width={apt.coordinates.width}
                  height={apt.coordinates.height}
                  fill={apt.color}
                  fillOpacity={hoveredApt === apt.id ? 0.8 : 0.5}
                  stroke={hoveredApt === apt.id ? apt.color : 'white'}
                  strokeWidth={hoveredApt === apt.id ? '2' : '1.5'}
                  rx="3"
                  initial={{ scale: 1 }}
                  animate={{ 
                    scale: hoveredApt === apt.id ? 1.02 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                />

                {/* Numero appartamento */}
                <text
                  x={apt.coordinates.x + apt.coordinates.width / 2}
                  y={apt.coordinates.y + apt.coordinates.height / 2 - 3}
                  textAnchor="middle"
                  className="text-xs font-bold fill-white drop-shadow-lg"
                  style={{ 
                    pointerEvents: 'none',
                    fontSize: '4px',
                  }}
                >
                  {apt.id}
                </text>

                {/* Nome appartamento */}
                <text
                  x={apt.coordinates.x + apt.coordinates.width / 2}
                  y={apt.coordinates.y + apt.coordinates.height / 2 + 5}
                  textAnchor="middle"
                  className="font-semibold fill-white drop-shadow-lg"
                  style={{ 
                    pointerEvents: 'none',
                    fontSize: '3px',
                  }}
                >
                  {apt.name}
                </text>
              </motion.g>
            </Link>
          ))}
        </svg>
      </div>

      {/* Legenda */}
      <div className="mt-8 grid grid-cols-3 md:grid-cols-5 gap-4">
        {apartments.map((apt) => (
          <Link
            key={apt.id}
            href={`/appartamenti/${apt.slug}`}
            onMouseEnter={() => setHoveredApt(apt.id)}
            onMouseLeave={() => setHoveredApt(null)}
            className={`flex items-center gap-2 p-3 rounded-lg border-2 transition-all ${
              hoveredApt === apt.id
                ? 'border-primary bg-primary/5 scale-105 shadow-lg'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div
              className="w-6 h-6 rounded flex items-center justify-center text-white text-xs font-bold shadow"
              style={{ backgroundColor: apt.color }}
            >
              {apt.id}
            </div>
            <span className="text-sm font-medium">{apt.name}</span>
          </Link>
        ))}
      </div>

      {/* Tooltip hover */}
      {hoveredApt && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg shadow-xl text-sm font-semibold z-50"
        >
          Click per vedere {apartments.find(a => a.id === hoveredApt)?.name}
        </motion.div>
      )}
    </div>
  )
}












