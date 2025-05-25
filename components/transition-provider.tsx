"use client"

import type React from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Chave única para forçar a remontagem do componente quando a URL mudar
  const routeKey = `${pathname}${searchParams ? `?${searchParams}` : ""}`

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={routeKey}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="w-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  )
}
