"use client"

import { useEffect, useRef, useState } from "react"
import { useInView, useMotionValue, useSpring } from "framer-motion"

interface AnimatedCounterProps {
  from: number
  to: number
  duration?: number
  delay?: number
  className?: string
  formatter?: (value: number) => string
}

export function AnimatedCounter({
  from,
  to,
  duration = 2,
  delay = 0,
  className = "",
  formatter = (value) => Math.round(value).toString(),
}: AnimatedCounterProps) {
  const nodeRef = useRef<HTMLSpanElement>(null)
  const inView = useInView(nodeRef, { once: true, amount: 0.3 })
  const motionValue = useMotionValue(from)
  const springValue = useSpring(motionValue, { duration: duration * 1000, delay: delay * 1000 })
  const [displayValue, setDisplayValue] = useState(formatter(from))

  useEffect(() => {
    if (inView) {
      motionValue.set(to)
    }
  }, [inView, motionValue, to])

  useEffect(() => {
    const unsubscribe = springValue.onChange((latest) => {
      setDisplayValue(formatter(latest))
    })

    return unsubscribe
  }, [formatter, springValue])

  return (
    <span ref={nodeRef} className={className}>
      {displayValue}
    </span>
  )
}
