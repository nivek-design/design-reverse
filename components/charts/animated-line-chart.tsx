"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { FadeIn } from "@/components/animations/fade-in"

interface DataPoint {
  name: string
  [key: string]: string | number
}

interface AnimatedLineChartProps {
  data: DataPoint[]
  lines: {
    dataKey: string
    stroke: string
    name?: string
  }[]
  title?: string
  subtitle?: string
  height?: number
  className?: string
}

export function AnimatedLineChart({
  data,
  lines,
  title,
  subtitle,
  height = 300,
  className = "",
}: AnimatedLineChartProps) {
  const [hoveredLine, setHoveredLine] = useState<string | null>(null)

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
          <LineChart
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
              onMouseEnter={(e) => setHoveredLine(e.dataKey)}
              onMouseLeave={() => setHoveredLine(null)}
              formatter={(value, entry) => (
                <span style={{ color: hoveredLine === entry.dataKey ? "#1e40af" : "#6b7280" }}>{value}</span>
              )}
            />
            {lines.map((line, index) => (
              <Line
                key={line.dataKey}
                type="monotone"
                dataKey={line.dataKey}
                name={line.name || line.dataKey}
                stroke={line.stroke}
                strokeWidth={hoveredLine === line.dataKey ? 3 : 2}
                dot={{ r: 4, strokeWidth: 2 }}
                activeDot={{ r: 6, strokeWidth: 0, fill: line.stroke }}
                isAnimationActive={true}
                animationDuration={1500}
                animationEasing="ease-out"
                animationBegin={index * 300}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  )
}
