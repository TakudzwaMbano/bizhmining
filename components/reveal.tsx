"use client"

import type { ReactNode } from "react"
import { motion, useReducedMotion } from "motion/react"

type RevealProps = {
  children: ReactNode
  delay?: number
  y?: number
  x?: number
  className?: string
}

export function Reveal({ children, delay = 0, y = 40, x = 0, className }: RevealProps) {
  const shouldReduceMotion = useReducedMotion()

  const wrapperClassName = [className, x !== 0 || y !== 0 ? "overflow-hidden" : ""].filter(Boolean).join(" ")

  return (
    <div className={wrapperClassName}>
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y, x }}
        whileInView={shouldReduceMotion ? { opacity: 1, y: 0, x: 0 } : { opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={
          shouldReduceMotion
            ? undefined
            : { duration: 0.82, delay, ease: [0.22, 0.61, 0.36, 1] }
        }
      >
        {children}
      </motion.div>
    </div>
  )
}
