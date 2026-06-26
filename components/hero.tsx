"use client"

import { motion, useReducedMotion } from "motion/react"
import { ArrowRight } from "lucide-react"

const heroLines = ["Elevating Global", "Mining", "Performance"]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const subtitleReveal = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.9,
    },
  },
}

const buttonReveal = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay: 1.05,
    },
  },
}

const backgroundZoom = {
  hidden: { scale: 1 },
  show: {
    scale: 1,
    transition: { duration: 10, ease: [0.22, 0.61, 0.36, 1] },
  },
}

export function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="home" className="relative min-h-[100vh] w-full overflow-hidden scroll-mt-20 text-white">
      <motion.video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-mining.png"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <source src="/VIDEOS/mining-stock.webm" type="video/webm" />
      </motion.video>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(29,24,24,0.55),rgba(29,24,24,0.35),rgba(29,24,24,0.60))]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.04),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(198,151,58,0.06),transparent_18%)]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-[1600px] items-center px-6 pt-20 pb-8 sm:px-8 lg:px-12">
        <motion.div
          className="w-full max-w-[680px] space-y-6"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : "hidden"}
          animate="show"
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.42em] text-[#c6a861]">
            SURFACE & UNDERGROUND MINING SOLUTIONS
          </motion.p>

          <motion.div variants={staggerContainer} className="space-y-1">
            {heroLines.map((line) => (
              <motion.span key={line} variants={fadeUp} className="block hero-heading">
                {line}
              </motion.span>
            ))}
          </motion.div>

          <motion.p variants={subtitleReveal} className="hero-subtitle text-slate-200/90">
            Delivering enterprise mining solutions, operational excellence, engineering expertise and dependable execution for large-scale surface and underground operations.
          </motion.p>

          <motion.div variants={buttonReveal}>
            <motion.a
              href="#services"
              className="hero-button inline-flex w-max items-center justify-center rounded-sm bg-[#c6973a] px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-slate-950 transition duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#c6973a]/80"
              whileHover={{ y: -2, scale: 1.02, boxShadow: "0 22px 55px rgba(198, 151, 58, 0.20)" }}
              whileTap={{ scale: 0.99 }}
            >
              Explore Services
              <ArrowRight className="ml-3 h-4 w-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
