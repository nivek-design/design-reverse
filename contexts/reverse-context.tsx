"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface ReverseContextType {
  isReversed: boolean
  toggleReverse: () => void
}

const ReverseContext = createContext<ReverseContextType | undefined>(undefined)

export function ReverseProvider({ children }: { children: React.ReactNode }) {
  const [isReversed, setIsReversed] = useState(false)

  useEffect(() => {
    // Recuperar preferência salva
    const saved = localStorage.getItem("reverseMode")
    if (saved === "true") {
      setIsReversed(true)
      document.documentElement.classList.add("reverse-mode")
    }
  }, [])

  const toggleReverse = () => {
    const newState = !isReversed
    setIsReversed(newState)

    // Salvar preferência
    localStorage.setItem("reverseMode", newState.toString())

    // Adicionar ou remover classe do HTML
    if (newState) {
      document.documentElement.classList.add("reverse-mode")
    } else {
      document.documentElement.classList.remove("reverse-mode")
    }
  }

  return <ReverseContext.Provider value={{ isReversed, toggleReverse }}>{children}</ReverseContext.Provider>
}

export function useReverse() {
  const context = useContext(ReverseContext)
  if (context === undefined) {
    throw new Error("useReverse must be used within a ReverseProvider")
  }
  return context
}
