"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface FadeInProps {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right" | "none"
  delay?: number
  duration?: number
  threshold?: number
  className?: string
  once?: boolean
}

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  className = "",
  once = true,
}: FadeInProps) {
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

  // Define as variantes de animação com base na direção
  const getDirectionVariants = () => {
    switch (direction) {
      case "up":
        return {
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }
      case "down":
        return {
          hidden: { opacity: 0, y: -40 },
          visible: { opacity: 1, y: 0 },
        }
      case "left":
        return {
          hidden: { opacity: 0, x: 40 },
          visible: { opacity: 1, x: 0 },
        }
      case "right":
        return {
          hidden: { opacity: 0, x: -40 },
          visible: { opacity: 1, x: 0 },
        }
      case "none":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }
      default:
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }
    }
  }

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={getDirectionVariants()}
        transition={{ duration, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  )
}
