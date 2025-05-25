"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FadeIn } from "@/components/animations/fade-in"

interface ProgressBarProps {
  title: string
  value: number
  max?: number
  color?: string
  className?: string
  showPercentage?: boolean
  height?: number
  subtitle?: string
}

export function ProgressBar({
  title,
  value,
  max = 100,
  color = "bg-blue-500",
  className = "",
  showPercentage = true,
  height = 8,
  subtitle,
}: ProgressBarProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const percentage = Math.round((value / max) * 100)

  return (
    <div ref={ref} className={`${className}`}>
      <FadeIn direction="up">
        <div className="flex justify-between items-center mb-2">
          <div>
            <h3 className="text-sm font-medium text-gray-700">{title}</h3>
            {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
          </div>
          {showPercentage && <span className="text-sm font-medium text-gray-700">{percentage}%</span>}
        </div>
      </FadeIn>

      <div className={`w-full bg-gray-200 rounded-full h-[${height}px]`} style={{ height: `${height}px` }}>
        <motion.div
          className={`${color} rounded-full h-full`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}
