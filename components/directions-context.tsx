"use client"

import { createContext, useContext, useState, ReactNode } from "react"

interface DirectionsContextType {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const DirectionsContext = createContext<DirectionsContextType | undefined>(undefined)

export function DirectionsProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <DirectionsContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </DirectionsContext.Provider>
  )
}

export function useDirections() {
  const context = useContext(DirectionsContext)
  if (!context) {
    throw new Error("useDirections must be used within DirectionsProvider")
  }
  return context
}

