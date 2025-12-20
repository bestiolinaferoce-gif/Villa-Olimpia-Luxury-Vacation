"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { apartments } from "@/data/apartments"
import { MapPin, X, Home, ArrowUp, ArrowDown, Star, Bath, Users, Square } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

interface ApartmentPosition {
  id: number
  name: string
  floor: "Piano Terra" | "Primo Piano"
  position: string
  x: number
  y: number
  width: number
  height: number
}

const apartmentPositions: ApartmentPosition[] = [
  { id: 1, name: "Frangipane", floor: "Piano Terra", position: "Basso sinistra", x: 5, y: 70, width: 20, height: 25 },
  { id: 2, name: "Fiordaliso", floor: "Piano Terra", position: "Sinistra", x: 5, y: 40, width: 20, height: 25 },
  { id: 3, name: "Orchidea", floor: "Piano Terra", position: "Alto destra", x: 75, y: 5, width: 20, height: 25 },
  { id: 4, name: "Tulipano", floor: "Piano Terra", position: "Centro-destra", x: 50, y: 40, width: 20, height: 25 },
  { id: 5, name: "Giglio", floor: "Piano Terra", position: "Basso-destra", x: 75, y: 70, width: 20, height: 25 },
  { id: 6, name: "Lavanda", floor: "Piano Terra", position: "A fianco Giglio", x: 50, y: 70, width: 20, height: 25 },
  { id: 7, name: "Geranio", floor: "Primo Piano", position: "Sinistra (più grande)", x: 5, y: 30, width: 30, height: 35 },
  { id: 8, name: "Gardenia", floor: "Primo Piano", position: "Centro", x: 40, y: 30, width: 25, height: 35 },
  { id: 9, name: "Azalea", floor: "Primo Piano", position: "Destra", x: 70, y: 30, width: 25, height: 35 },
]

export function VillaInteractiveMap() {
  const [selectedFloor, setSelectedFloor] = useState<"Piano Terra" | "Primo Piano">("Piano Terra")
  const [selectedApartment, setSelectedApartment] = useState<number | null>(null)
  const [hoveredApartment, setHoveredApartment] = useState<number | null>(null)

  const currentFloorApartments = apartmentPositions.filter(apt => apt.floor === selectedFloor)
  const selectedApartmentData = selectedApartment 
    ? apartments.find(apt => apt.id === selectedApartment)
    : null

  return (
    <div className="w-full py-16 bg-gradient-to-b from-slate-50 via-blue-50/30 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Premium */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Mappa Interattiva</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
            Mappa Interattiva della Villa
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Esplora la planimetria interattiva e scopri l'esatta posizione di ogni appartamento all'interno di Villa Olimpia. 
            Clicca su un appartamento per vedere tutti i dettagli.
          </p>
        </motion.div>

        {/* Floor Selector Premium */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex justify-center gap-4 mb-10"
        >
          <Button
            variant={selectedFloor === "Piano Terra" ? "default" : "outline"}
            onClick={() => {
              setSelectedFloor("Piano Terra")
              setSelectedApartment(null)
            }}
            size="lg"
            className={`flex items-center gap-3 px-8 py-6 text-lg font-semibold transition-all ${
              selectedFloor === "Piano Terra"
                ? "bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg scale-105"
                : "bg-white hover:bg-gray-50 border-2"
            }`}
          >
            <ArrowDown className="w-5 h-5" />
            Piano Terra
            <span className="ml-2 text-sm opacity-80">(6 appartamenti)</span>
          </Button>
          <Button
            variant={selectedFloor === "Primo Piano" ? "default" : "outline"}
            onClick={() => {
              setSelectedFloor("Primo Piano")
              setSelectedApartment(null)
            }}
            size="lg"
            className={`flex items-center gap-3 px-8 py-6 text-lg font-semibold transition-all ${
              selectedFloor === "Primo Piano"
                ? "bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg scale-105"
                : "bg-white hover:bg-gray-50 border-2"
            }`}
          >
            <ArrowUp className="w-5 h-5" />
            Primo Piano
            <span className="ml-2 text-sm opacity-80">(3 appartamenti)</span>
          </Button>
        </motion.div>

        {/* Interactive Map Premium */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative bg-white rounded-3xl shadow-2xl p-6 md:p-10 mb-10 border-2 border-primary/10 overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #0077BE 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="relative w-full" style={{ aspectRatio: "16/10", minHeight: "600px" }}>
            <svg
              viewBox="0 0 1000 600"
              className="w-full h-full"
              style={{ 
                background: "linear-gradient(135deg, #f8fafc 0%, #e0f2fe 20%, #f0f9ff 100%)",
                borderRadius: "20px"
              }}
            >
              {/* Griglia elegante */}
              <defs>
                <pattern id="grid-premium" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#cbd5e1" strokeWidth="0.5" opacity="0.2"/>
                </pattern>
                <linearGradient id="apartment-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0077BE" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="apartment-hover" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1E40AF" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity="0.8" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-premium)" />

              {/* Area Piscina (solo piano terra) */}
              {selectedFloor === "Piano Terra" && (
                <motion.g
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <rect
                    x="300"
                    y="400"
                    width="400"
                    height="150"
                    rx="25"
                    fill="url(#apartment-gradient)"
                    opacity="0.4"
                    className="drop-shadow-xl"
                  />
                  <text
                    x="500"
                    y="485"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#0077BE"
                    fontSize="18"
                    fontWeight="bold"
                    className="pointer-events-none"
                  >
                    🏊 Piscina Condivisa
                  </text>
                </motion.g>
              )}

              {/* Appartamenti */}
              {currentFloorApartments.map((apt) => {
                const apartmentData = apartments.find(a => a.id === apt.id)
                const isSelected = selectedApartment === apt.id
                const isHovered = hoveredApartment === apt.id
                
                return (
                  <g key={apt.id}>
                    <motion.rect
                      x={`${apt.x}%`}
                      y={`${apt.y}%`}
                      width={`${apt.width}%`}
                      height={`${apt.height}%`}
                      rx="12"
                      fill={isSelected ? "url(#apartment-hover)" : isHovered ? "#3B82F6" : "url(#apartment-gradient)"}
                      opacity={isSelected ? 1 : isHovered ? 0.8 : 0.7}
                      stroke={isSelected ? "#1E40AF" : "#2563EB"}
                      strokeWidth={isSelected ? 4 : isHovered ? 3 : 2}
                      filter={isSelected ? "url(#glow)" : undefined}
                      className="cursor-pointer transition-all"
                      initial={{ scale: 1 }}
                      animate={{ 
                        scale: isHovered || isSelected ? 1.05 : 1,
                      }}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setSelectedApartment(apt.id)}
                      onMouseEnter={() => setHoveredApartment(apt.id)}
                      onMouseLeave={() => setHoveredApartment(null)}
                    />
                    <text
                      x={`${apt.x + apt.width / 2}%`}
                      y={`${apt.y + apt.height / 2 - 4}%`}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="white"
                      fontSize="16"
                      fontWeight="bold"
                      className="pointer-events-none select-none drop-shadow-lg"
                    >
                      {apt.name}
                    </text>
                    {apartmentData?.premium && (
                      <text
                        x={`${apt.x + apt.width / 2}%`}
                        y={`${apt.y + apt.height / 2 + 8}%`}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#FFD700"
                        fontSize="12"
                        fontWeight="bold"
                        className="pointer-events-none select-none drop-shadow-lg"
                      >
                        ⭐ PREMIUM
                      </text>
                    )}
                    <text
                      x={`${apt.x + apt.width / 2}%`}
                      y={`${apt.y + apt.height / 2 + 20}%`}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="white"
                      fontSize="11"
                      className="pointer-events-none select-none opacity-90"
                    >
                      {apartmentData?.guests} ospiti • {apartmentData?.bedrooms} camere
                    </text>
                  </g>
                )
              })}

              {/* Legenda Premium */}
              <g transform="translate(20, 20)">
                <rect width="220" height="140" rx="12" fill="white" opacity="0.95" stroke="#3B82F6" strokeWidth="2" className="drop-shadow-xl"/>
                <text x="110" y="28" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1E40AF">
                  Legenda
                </text>
                <circle cx="35" cy="50" r="10" fill="url(#apartment-gradient)" opacity="0.7"/>
                <text x="50" y="55" fontSize="13" fill="#1E40AF" fontWeight="500">Appartamento</text>
                <rect x="20" y="70" width="25" height="18" rx="5" fill="url(#apartment-gradient)" opacity="0.4"/>
                <text x="50" y="82" fontSize="13" fill="#1E40AF" fontWeight="500">Piscina</text>
                <text x="110" y="125" textAnchor="middle" fontSize="11" fill="#64748B" fontWeight="500">
                  👆 Clicca per dettagli
                </text>
              </g>
            </svg>
          </div>
        </motion.div>

        {/* Apartment Info Panel Premium */}
        <AnimatePresence>
          {selectedApartmentData && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.4, type: "spring" }}
            >
              <Card className="border-2 border-primary/30 shadow-2xl overflow-hidden bg-gradient-to-br from-white to-blue-50/30">
                <CardHeader className="bg-gradient-to-r from-primary to-blue-600 text-white p-8">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <Home className="w-6 h-6" />
                        </div>
                        <div>
                          <CardTitle className="text-3xl font-playfair mb-1 text-white">
                            {selectedApartmentData.name}
                          </CardTitle>
                          <CardDescription className="text-white/90 text-base">
                            {selectedApartmentData.floor} • {selectedApartmentData.position}
                          </CardDescription>
                        </div>
                      </div>
                      {selectedApartmentData.premium && (
                        <div className="inline-flex items-center gap-2 bg-yellow-400/20 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-400/30 mt-2">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-bold text-yellow-200">Appartamento Premium</span>
                        </div>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setSelectedApartment(null)}
                      className="text-white hover:bg-white/20 h-10 w-10"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  {/* Immagine principale */}
                  {selectedApartmentData.image && (
                    <div className="relative h-64 rounded-xl overflow-hidden mb-6 shadow-lg">
                      <Image
                        src={selectedApartmentData.image}
                        fill
                        className="object-cover"
                        alt={selectedApartmentData.name}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                  )}

                  {/* Stats Grid Premium */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <motion.div
                      whileHover={{ scale: 1.05, y: -4 }}
                      className="text-center p-4 bg-gradient-to-br from-blue-50 to-primary/10 rounded-xl border-2 border-primary/20 shadow-md"
                    >
                      <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-3xl font-bold text-primary mb-1">{selectedApartmentData.guests}</p>
                      <p className="text-xs text-muted-foreground font-medium">Ospiti</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -4 }}
                      className="text-center p-4 bg-gradient-to-br from-blue-50 to-primary/10 rounded-xl border-2 border-primary/20 shadow-md"
                    >
                      <Home className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-3xl font-bold text-primary mb-1">{selectedApartmentData.bedrooms}</p>
                      <p className="text-xs text-muted-foreground font-medium">Camere</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -4 }}
                      className="text-center p-4 bg-gradient-to-br from-blue-50 to-primary/10 rounded-xl border-2 border-primary/20 shadow-md"
                    >
                      <Bath className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-3xl font-bold text-primary mb-1">{selectedApartmentData.bathrooms}</p>
                      <p className="text-xs text-muted-foreground font-medium">Bagni</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -4 }}
                      className="text-center p-4 bg-gradient-to-br from-blue-50 to-primary/10 rounded-xl border-2 border-primary/20 shadow-md"
                    >
                      <Square className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-xl font-bold text-primary mb-1">{selectedApartmentData.size}</p>
                      <p className="text-xs text-muted-foreground font-medium">Superficie</p>
                    </motion.div>
                  </div>
                  
                  {/* Descrizione */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold mb-3 text-gray-900">Descrizione</h3>
                    <p className="text-gray-700 leading-relaxed text-base">
                      {selectedApartmentData.fullDescription || selectedApartmentData.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold mb-3 text-gray-900">Caratteristiche Principali</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedApartmentData.features.slice(0, 6).map((feature, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          className="px-4 py-2 bg-gradient-to-r from-primary/10 to-blue-600/10 text-primary rounded-full text-sm font-medium border border-primary/20 shadow-sm"
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Prezzo e CTA */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">A partire da</p>
                      <p className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                        €{selectedApartmentData.price}
                        <span className="text-xl text-gray-600 font-normal">/notte</span>
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" asChild size="lg" className="font-semibold">
                        <Link href={`/appartamenti/apartment-${selectedApartmentData.id}`}>
                          <Home className="w-4 h-4 mr-2" />
                          Dettagli
                        </Link>
                      </Button>
                      <Button asChild size="lg" className="bg-gradient-to-r from-primary to-blue-600 font-semibold shadow-lg">
                        <Link href="/contatti#prenota">
                          <MapPin className="w-4 h-4 mr-2" />
                          Prenota
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Apartment List Premium */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-2 text-gray-900">
              Appartamenti al {selectedFloor}
            </h3>
            <p className="text-gray-600">
              Clicca su un appartamento per vedere la posizione sulla planimetria
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {apartments
              .filter(apt => apt.floor === selectedFloor)
              .map((apt) => (
                <motion.div
                  key={apt.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: apt.id * 0.05 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card
                    className={`cursor-pointer transition-all h-full ${
                      selectedApartment === apt.id
                        ? "border-2 border-primary shadow-xl bg-gradient-to-br from-primary/5 to-blue-50/50"
                        : "border border-gray-200 hover:border-primary/50 hover:shadow-lg bg-white"
                    }`}
                    onClick={() => setSelectedApartment(apt.id)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg font-playfair mb-1">{apt.name}</CardTitle>
                          <CardDescription className="text-sm">{apt.position}</CardDescription>
                        </div>
                        {apt.premium && (
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4 text-primary" />
                          <span className="font-medium">{apt.guests}</span>
                        </div>
                        <span className="text-gray-300">•</span>
                        <div className="flex items-center gap-1">
                          <Home className="w-4 h-4 text-primary" />
                          <span className="font-medium">{apt.bedrooms}</span>
                        </div>
                        <span className="text-gray-300">•</span>
                        <span className="font-bold text-primary text-base">€{apt.price}</span>
                      </div>
                      <div className="pt-3 border-t border-gray-100">
                        <span className="text-xs text-gray-500">{apt.size}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
