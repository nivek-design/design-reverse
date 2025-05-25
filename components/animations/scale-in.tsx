"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

interface ScaleInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  threshold?: number
  className?: string
  once?: boolean
}

export function ScaleIn({
  children,
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  className = "",
  once = true,
}: ScaleInProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [once, threshold])

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  )
}
