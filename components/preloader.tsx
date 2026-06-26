"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import logo from "@/assets/images/logo.png"

const MIN_DISPLAY_MS = 1400

export function Preloader() {
  const [visible, setVisible] = useState(true)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const startedAt = Date.now()

    const hide = () => {
      const elapsed = Date.now() - startedAt
      const delay = Math.max(0, MIN_DISPLAY_MS - elapsed)
      window.setTimeout(() => setVisible(false), delay)
    }

    if (document.readyState === "complete") {
      hide()
      return
    }

    window.addEventListener("load", hide)
    return () => window.removeEventListener("load", hide)
  }, [])

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [visible])

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.5,
            ease: [0.22, 0.61, 0.36, 1],
          }}
          aria-hidden={!visible}
          aria-label="Loading Bizh Mining"
          role="status"
        >
          <motion.div
            className="relative flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28"
            initial={shouldReduceMotion ? { scale: 1 } : { scale: 1.02 }}
            animate={
              shouldReduceMotion
                ? { scale: 1 }
                : { scale: [1, 1.05, 1] }
            }
            transition={{
              duration: shouldReduceMotion ? 0 : 1.5,
              repeat: shouldReduceMotion ? 0 : Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <Image
              src={logo}
              alt="Bizh Mining logo"
              width={104}
              height={104}
              priority
              className="h-24 w-24 object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
