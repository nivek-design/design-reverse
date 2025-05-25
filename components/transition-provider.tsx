"use client"

import type React from "react"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { Suspense } from "react"

// Componente interno que usa useSearchParams
function TransitionContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

// Loading fallback para o Suspense
function TransitionFallback() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
    </div>
  )
}

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<TransitionFallback />}>
      <TransitionContent>{children}</TransitionContent>
    </Suspense>
  )
}
