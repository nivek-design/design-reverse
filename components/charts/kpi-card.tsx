"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"

interface KPICardProps {
  title: string
  value: number | string
  change?: number
  changeLabel?: string
  icon?: React.ReactNode
  formatter?: (value: number | string) => string
  className?: string
  iconBgColor?: string
  changeTimeframe?: string
}

export function KPICard({
  title,
  value,
  change,
  changeLabel,
  icon,
  formatter = (val) => (typeof val === "number" ? val.toLocaleString() : val),
  className = "",
  iconBgColor = "bg-blue-100",
  changeTimeframe = "vs. último período",
}: KPICardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const getChangeColor = () => {
    if (!change) return "text-gray-500"
    return change > 0 ? "text-green-500" : change < 0 ? "text-red-500" : "text-gray-500"
  }

  const getChangeIcon = () => {
    if (!change) return <Minus className="h-4 w-4" />
    return change > 0 ? (
      <ArrowUpRight className="h-4 w-4" />
    ) : change < 0 ? (
      <ArrowDownRight className="h-4 w-4" />
    ) : (
      <Minus className="h-4 w-4" />
    )
  }

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const numberVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1], // Spring-like effect
      },
    },
  }

  return (
    <div
      ref={ref}
      className={`bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg ${className}`}
    >
      <FadeIn direction="up">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          {icon && <div className={`p-2 rounded-full ${iconBgColor}`}>{icon}</div>}
        </div>
      </FadeIn>

      <motion.div
        variants={numberVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-3xl font-bold text-gray-900 mb-2"
      >
        {formatter(value)}
      </motion.div>

      {change !== undefined && (
        <motion.div
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex items-center"
        >
          <div className={`flex items-center ${getChangeColor()}`}>
            {getChangeIcon()}
            <span className="ml-1 font-medium">
              {change > 0 ? "+" : ""}
              {change}%
            </span>
          </div>
          <span className="text-gray-500 text-sm ml-2">{changeLabel || changeTimeframe}</span>
        </motion.div>
      )}
    </div>
  )
}
