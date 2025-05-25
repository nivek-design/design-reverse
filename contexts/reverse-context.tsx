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
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
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
    // Fallback para quando o contexto não está disponível
    return {
      isReversed: false,
      toggleReverse: () => {},
    }
  }
  return context
}
