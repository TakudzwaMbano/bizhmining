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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0b2239]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.65,
            ease: [0.22, 0.61, 0.36, 1],
          }}
          aria-hidden={!visible}
          aria-label="Loading Bizh Mining"
          role="status"
        >
          <div className="flex flex-col items-center gap-8 px-6">
            <motion.div
              className="relative flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32"
              initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.82 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <motion.span
                className="absolute inset-0 rounded-full border border-[#c6973a]/30"
                animate={
                  shouldReduceMotion
                    ? { opacity: 0.5 }
                    : { scale: [1, 1.12, 1], opacity: [0.35, 0.7, 0.35] }
                }
                transition={{
                  duration: 1.8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.span
                className="absolute inset-3 rounded-full border border-[#c6973a]/20"
                animate={
                  shouldReduceMotion
                    ? { opacity: 0.35 }
                    : { scale: [1.05, 1, 1.05], opacity: [0.2, 0.45, 0.2] }
                }
                transition={{
                  duration: 1.8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
              />
              <Image
                src={logo}
                alt="Bizh Mining logo"
                width={96}
                height={96}
                priority
                className="relative z-10 h-20 w-20 object-contain sm:h-24 sm:w-24"
              />
            </motion.div>

            <motion.div
              className="flex flex-col items-center gap-3"
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <p className="text-sm font-semibold tracking-[0.28em] text-white uppercase sm:text-base">
                Bizh Mining
              </p>
              <p className="text-[10px] font-medium tracking-[0.32em] text-[#c6973a] uppercase">
                PTY Ltd
              </p>
              <div className="mt-2 h-0.5 w-36 overflow-hidden rounded-full bg-white/10">
                <motion.span
                  className="block h-full origin-left rounded-full bg-[#c6973a]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : MIN_DISPLAY_MS / 1000,
                    ease: [0.22, 0.61, 0.36, 1],
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
