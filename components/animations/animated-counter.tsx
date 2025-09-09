"use client"

import { useEffect, useRef, useState } from "react"
import { useInView, useMotionValue, useSpring } from "framer-motion"

interface AnimatedCounterProps {
  from: number
  to: number
  duration?: number
  delay?: number
  className?: string
}

export function AnimatedCounter({
  from,
  to,
  duration = 2,
  delay = 0,
  className = "",
}: AnimatedCounterProps) {
  const nodeRef = useRef<HTMLSpanElement>(null)
  const inView = useInView(nodeRef, { once: true, amount: 0.3 })
  const motionValue = useMotionValue(from)
  const springValue = useSpring(motionValue, { duration: duration * 1000, delay: delay * 1000 })
  const [displayValue, setDisplayValue] = useState(Math.round(from).toString())

  useEffect(() => {
    if (inView) {
      motionValue.set(to)
    }
  }, [inView, motionValue, to])

  useEffect(() => {
    const unsubscribe = springValue.onChange((latest) => {
      setDisplayValue(Math.round(latest).toString())
    })

    return unsubscribe
  }, [springValue])

  return (
    <span ref={nodeRef} className={className}>
      {displayValue}
    </span>
  )
}
