"use client"

import React from "react"

import { motion, type Variants } from "framer-motion"
import { useEffect, useRef, useState } from "react"

type ColumnsConfig =
  | {
      sm?: number
      md?: number
      lg?: number
      xl?: number
      "2xl"?: number
    }
  | number
  | string

type AnimationVariant =
  | "fadeUp"
  | "fadeRight"
  | "fadeLeft"
  | "fadeDown"
  | "scale"
  | "fade"
  | "bounce"
  | "flip"
  | "rotate"

interface StaggerChildrenProps {
  children: React.ReactNode
  delay?: number
  staggerDelay?: number
  threshold?: number
  className?: string
  once?: boolean
  direction?: "row" | "column" | "grid"
  gap?: number | string
  columns?: ColumnsConfig
  animationVariant?: AnimationVariant
  animationDistance?: number
  easing?: string
  duration?: number
}

export function StaggerChildren({
  children,
  delay = 0.2,
  staggerDelay = 0.1,
  threshold = 0.1,
  className = "",
  once = true,
  direction = "row",
  gap = 4,
  columns = 3,
  animationVariant,
  animationDistance = 20,
  easing = "easeOut",
  duration = 0.5,
}: StaggerChildrenProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Determinar a variante de animação padrão com base na direção, se não for especificada
  const defaultVariant = (): AnimationVariant => {
    if (direction === "row") return "fadeRight"
    return "fadeUp"
  }

  // Usar a variante especificada ou a padrão baseada na direção
  const variant = animationVariant || defaultVariant()

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay,
      },
    },
  }

  // Definir as diferentes variantes de animação
  const getItemVariants = (): Variants => {
    switch (variant) {
      case "fadeRight":
        return {
          hidden: { opacity: 0, x: -animationDistance },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: duration, ease: easing },
          },
        }
      case "fadeLeft":
        return {
          hidden: { opacity: 0, x: animationDistance },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: duration, ease: easing },
          },
        }
      case "fadeDown":
        return {
          hidden: { opacity: 0, y: -animationDistance },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: duration, ease: easing },
          },
        }
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: duration, ease: easing },
          },
        }
      case "fade":
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration: duration, ease: easing },
          },
        }
      case "bounce":
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 10,
              duration: 0.7,
            },
          },
        }
      case "flip":
        return {
          hidden: { opacity: 0, rotateY: 90 },
          visible: {
            opacity: 1,
            rotateY: 0,
            transition: { duration: duration, ease: easing },
          },
        }
      case "rotate":
        return {
          hidden: { opacity: 0, rotate: -15 },
          visible: {
            opacity: 1,
            rotate: 0,
            transition: { duration: duration, ease: easing },
          },
        }
      case "fadeUp":
      default:
        return {
          hidden: { opacity: 0, y: animationDistance },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: duration, ease: easing },
          },
        }
    }
  }

  const itemVariants = getItemVariants()

  // Função para gerar as classes de grid com base na configuração de colunas
  const getGridClasses = () => {
    if (typeof columns === "string") {
      return columns // Usar diretamente se for uma string
    }

    if (typeof columns === "number") {
      return `grid-cols-${columns}` // Converter número para classe grid-cols-N
    }

    // Configuração responsiva
    const breakpoints = ["sm", "md", "lg", "xl", "2xl"] as const
    return breakpoints
      .filter((bp) => columns[bp] !== undefined)
      .map((bp) => (bp === "sm" ? `grid-cols-${columns[bp]}` : `${bp}:grid-cols-${columns[bp]}`))
      .join(" ")
  }

  // Determinar as classes de layout com base na direção
  const getLayoutClasses = () => {
    if (direction === "row") {
      return "flex flex-row flex-wrap items-center justify-center"
    } else if (direction === "grid") {
      return `grid ${getGridClasses()}`
    } else {
      return "flex flex-col"
    }
  }

  // Determinar as classes de gap
  const getGapClasses = () => {
    if (typeof gap === "number") {
      return `gap-${gap}`
    }
    return gap
  }

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
        className={`${getLayoutClasses()} ${getGapClasses()}`}
      >
        {React.Children.map(children, (child, index) => (
          <motion.div key={index} variants={itemVariants} className={direction === "row" ? "flex-grow-0 mx-2" : ""}>
            {child}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
