"use client"

import { motion, type MotionProps, type Variant } from "framer-motion"
import { type ReactNode, useState } from "react"

interface HoverCardProps extends Omit<MotionProps, "initial" | "whileHover" | "animate"> {
  children: ReactNode
  className?: string
  scale?: number
  shadowDepth?: "none" | "sm" | "md" | "lg" | "xl"
  duration?: number
  rotateEffect?: boolean
  glowEffect?: boolean
  glowColor?: string
  borderEffect?: boolean
  borderColor?: string
  elevationEffect?: boolean
  clickEffect?: boolean
}

export function HoverCard({
  children,
  className = "",
  scale = 1.03,
  shadowDepth = "md",
  duration = 0.3,
  rotateEffect = false,
  glowEffect = false,
  glowColor = "rgba(66, 153, 225, 0.5)",
  borderEffect = false,
  borderColor = "rgba(66, 153, 225, 0.8)",
  elevationEffect = true,
  clickEffect = false,
  ...motionProps
}: HoverCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  // Shadow configurations based on depth
  const shadowStyles = {
    none: "",
    sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
    md: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    lg: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    xl: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  }

  // Define hover animation variants
  const hoverVariants: Record<string, Variant> = {
    initial: {
      scale: 1,
      boxShadow: shadowDepth !== "none" ? shadowStyles.sm : "none",
      rotate: 0,
      y: 0,
      border: borderEffect ? "1px solid transparent" : undefined,
    },
    hover: {
      scale: scale,
      boxShadow: shadowDepth !== "none" ? shadowStyles[shadowDepth] : "none",
      rotate: rotateEffect ? 1 : 0,
      y: elevationEffect ? -5 : 0,
      border: borderEffect ? `1px solid ${borderColor}` : undefined,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
        duration: duration,
      },
    },
    click: {
      scale: clickEffect ? 0.98 : scale,
      boxShadow: shadowDepth !== "none" ? shadowStyles[shadowDepth] : "none",
      rotate: rotateEffect ? 1 : 0,
      y: elevationEffect ? -3 : 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
        duration: duration * 0.5,
      },
    },
  }

  // Determine the current animation state
  const animationState = isClicked ? "click" : isHovered ? "hover" : "initial"

  return (
    <motion.div
      className={`relative ${className}`}
      initial="initial"
      animate={animationState}
      variants={hoverVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onMouseDown={() => clickEffect && setIsClicked(true)}
      onMouseUp={() => clickEffect && setIsClicked(false)}
      onMouseLeave={() => clickEffect && setIsClicked(false)}
      {...motionProps}
    >
      {glowEffect && isHovered && (
        <motion.div
          className="absolute inset-0 -z-10 rounded-[inherit]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          style={{
            boxShadow: `0 0 20px 5px ${glowColor}`,
            filter: "blur(15px)",
          }}
        />
      )}
      {children}
    </motion.div>
  )
}
