"use client"

import type React from "react"

import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { PageTransition } from "./page-transition"
import { Suspense } from "react"

function TransitionContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <PageTransition key={pathname}>{children}</PageTransition>
    </AnimatePresence>
  )
}

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        </div>
      }
    >
      <TransitionContent>{children}</TransitionContent>
    </Suspense>
  )
}
