"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { FadeIn } from "@/components/animations/fade-in"

interface DataPoint {
  name: string
  [key: string]: string | number
}

interface AnimatedBarChartProps {
  data: DataPoint[]
  bars: {
    dataKey: string
    fill: string
    name?: string
  }[]
  title?: string
  subtitle?: string
  height?: number
  className?: string
  layout?: "vertical" | "horizontal"
}

export function AnimatedBarChart({
  data,
  bars,
  title,
  subtitle,
  height = 300,
  className = "",
  layout = "vertical",
}: AnimatedBarChartProps) {
  const [hoveredBar, setHoveredBar] = useState<string | null>(null)

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
          <BarChart
            data={data}
            layout={layout}
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
              type={layout === "vertical" ? "category" : "number"}
              tick={{ fill: "#6b7280" }}
              tickLine={{ stroke: "#e5e7eb" }}
              axisLine={{ stroke: "#e5e7eb" }}
            />
            <YAxis
              type={layout === "vertical" ? "number" : "category"}
              tick={{ fill: "#6b7280" }}
              tickLine={{ stroke: "#e5e7eb" }}
              axisLine={{ stroke: "#e5e7eb" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                borderRadius: "0.5rem",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                border: "none",
              }}
            />
            <Legend
              onMouseEnter={(e) => setHoveredBar(e.dataKey)}
              onMouseLeave={() => setHoveredBar(null)}
              formatter={(value, entry) => (
                <span style={{ color: hoveredBar === entry.dataKey ? "#1e40af" : "#6b7280" }}>{value}</span>
              )}
            />
            {bars.map((bar, index) => (
              <Bar
                key={bar.dataKey}
                dataKey={bar.dataKey}
                name={bar.name || bar.dataKey}
                fill={bar.fill}
                radius={[4, 4, 0, 0]}
                isAnimationActive={true}
                animationDuration={1500}
                animationEasing="ease-out"
                animationBegin={index * 300}
                onMouseOver={() => setHoveredBar(bar.dataKey)}
                onMouseLeave={() => setHoveredBar(null)}
                style={{
                  filter: hoveredBar === bar.dataKey ? "drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07))" : "none",
                  opacity: hoveredBar && hoveredBar !== bar.dataKey ? 0.7 : 1,
                  transition: "opacity 0.3s, filter 0.3s",
                }}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  )
}
