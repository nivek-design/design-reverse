"use client"

import { motion, useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface TextRevealProps {
  text?: string
  children?: ReactNode
  className?: string
  delay?: number
  duration?: number
  once?: boolean
}

export function TextReveal({
  text,
  children,
  className = "",
  delay = 0,
  duration = 0.05,
  once = true,
}: TextRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once })

  // Se text não for fornecido, tenta extrair o texto de children
  let content = text

  // Se não tiver text mas tiver children, e children for uma string
  if (!content && typeof children === "string") {
    content = children
  }

  // Se children for um elemento React, tenta extrair o texto
  if (!content && children && typeof children === "object") {
    try {
      // Tenta extrair o texto do children se for um elemento React com props.children
      const childrenObj = children as any
      if (childrenObj.props && childrenObj.props.children) {
        if (typeof childrenObj.props.children === "string") {
          content = childrenObj.props.children
        }
      }
    } catch (e) {
      // Fallback para evitar erros
      content = "Texto não disponível"
    }
  }

  // Fallback final para evitar erros
  if (!content) {
    content = "Texto não disponível"
  }

  const words = content.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: delay * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  // Se children for fornecido e não for uma string, renderiza children diretamente
  if (children && typeof children !== "string") {
    return (
      <motion.div
        ref={ref}
        className={`overflow-hidden ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          type: "spring",
          damping: 12,
          stiffness: 100,
          delay: delay,
        }}
      >
        {children}
      </motion.div>
    )
  }

  // Caso contrário, renderiza o texto com animação por palavra
  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <motion.span key={index} className="inline-block mr-1" variants={child}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
