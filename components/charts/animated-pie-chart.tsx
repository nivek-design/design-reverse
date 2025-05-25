"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"
import { FadeIn } from "@/components/animations/fade-in"

interface DataPoint {
  name: string
  value: number
  color: string
}

interface AnimatedPieChartProps {
  data: DataPoint[]
  title?: string
  subtitle?: string
  height?: number
  className?: string
  innerRadius?: number
  outerRadius?: number
}

export function AnimatedPieChart({
  data,
  title,
  subtitle,
  height = 300,
  className = "",
  innerRadius = 60,
  outerRadius = 80,
}: AnimatedPieChartProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index)
  }

  const onPieLeave = () => {
    setActiveIndex(null)
  }

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-md shadow-md border border-gray-100">
          <p className="font-medium text-gray-900">{payload[0].name}</p>
          <p className="text-gray-600">
            {payload[0].value.toLocaleString()} ({((payload[0].value / sum) * 100).toFixed(1)}%)
          </p>
        </div>
      )
    }
    return null
  }

  const sum = data.reduce((acc, item) => acc + item.value, 0)

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      {title && (
        <FadeIn direction="up">
          <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
          {subtitle && <p className="text-sm text-gray-500 mb-4">{subtitle}</p>}
        </FadeIn>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full"
        style={{ height }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              dataKey="value"
              onMouseEnter={onPieEnter}
              onMouseLeave={onPieLeave}
              isAnimationActive={true}
              animationDuration={1500}
              animationEasing="ease-out"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  stroke={activeIndex === index ? "#fff" : "none"}
                  strokeWidth={2}
                  style={{
                    filter: activeIndex === index ? "drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07))" : "none",
                    opacity: activeIndex !== null && activeIndex !== index ? 0.7 : 1,
                    transition: "opacity 0.3s, filter 0.3s",
                    transform: activeIndex === index ? "scale(1.05)" : "scale(1)",
                    transformOrigin: "center",
                  }}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend
              layout="vertical"
              verticalAlign="middle"
              align="right"
              formatter={(value, entry, index) => (
                <span
                  style={{
                    color: activeIndex === index ? "#1e40af" : "#6b7280",
                    fontWeight: activeIndex === index ? "bold" : "normal",
                  }}
                >
                  {value}
                </span>
              )}
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            />
          </PieChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  )
}
