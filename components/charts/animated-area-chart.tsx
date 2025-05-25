"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { FadeIn } from "@/components/animations/fade-in"

interface DataPoint {
  name: string
  [key: string]: string | number
}

interface AnimatedAreaChartProps {
  data: DataPoint[]
  areas: {
    dataKey: string
    fill: string
    stroke: string
    name?: string
  }[]
  title?: string
  subtitle?: string
  height?: number
  className?: string
  stacked?: boolean
}

export function AnimatedAreaChart({
  data,
  areas,
  title,
  subtitle,
  height = 300,
  className = "",
  stacked = false,
}: AnimatedAreaChartProps) {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null)

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
          <AreaChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="name"
              tick={{ fill: "#6b7280" }}
              tickLine={{ stroke: "#e5e7eb" }}
              axisLine={{ stroke: "#e5e7eb" }}
            />
            <YAxis tick={{ fill: "#6b7280" }} tickLine={{ stroke: "#e5e7eb" }} axisLine={{ stroke: "#e5e7eb" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                borderRadius: "0.5rem",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                border: "none",
              }}
            />
            <Legend
              onMouseEnter={(e) => setHoveredArea(e.dataKey)}
              onMouseLeave={() => setHoveredArea(null)}
              formatter={(value, entry) => (
                <span style={{ color: hoveredArea === entry.dataKey ? "#1e40af" : "#6b7280" }}>{value}</span>
              )}
            />
            {areas.map((area, index) => (
              <Area
                key={area.dataKey}
                type="monotone"
                dataKey={area.dataKey}
                name={area.name || area.dataKey}
                fill={area.fill}
                stroke={area.stroke}
                strokeWidth={hoveredArea === area.dataKey ? 3 : 2}
                stackId={stacked ? "1" : undefined}
                isAnimationActive={true}
                animationDuration={1500}
                animationEasing="ease-out"
                animationBegin={index * 300}
                style={{
                  opacity: hoveredArea && hoveredArea !== area.dataKey ? 0.7 : 1,
                  transition: "opacity 0.3s",
                }}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  )
}
