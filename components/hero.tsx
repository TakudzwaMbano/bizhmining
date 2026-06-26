"use client"

import { motion, useReducedMotion } from "motion/react"
import { ArrowRight } from "lucide-react"

const heroLines = ["Elevating", "Global", "Mining", "Performance"]

const badgeReveal = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.78, ease: [0.22, 0.61, 0.36, 1] },
  },
}

const headlineContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3,
    },
  },
}

const headingLine = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.82,
      ease: [0.22, 0.61, 0.36, 1],
    },
  },
}

const subtitleReveal = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.82,
      ease: [0.22, 0.61, 0.36, 1],
      delay: 1.15,
    },
  },
}

const buttonReveal = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.82,
      ease: [0.22, 0.61, 0.36, 1],
      delay: 1.35,
    },
  },
}

const backgroundZoom = {
  hidden: { scale: 1.05 },
  show: {
    scale: 1,
    transition: { duration: 10, ease: [0.22, 0.61, 0.36, 1] },
  },
}

export function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden text-white"
    >
      <motion.div
        className="absolute inset-0 bg-[url('/images/hero-mining.png')] bg-cover bg-center bg-no-repeat"
        initial={shouldReduceMotion ? { scale: 1 } : "hidden"}
        animate="show"
        variants={backgroundZoom}
      />

      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.04),transparent_24%),linear-gradient(180deg,rgba(10,10,10,0.5),rgba(10,10,10,0.65))]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1600px] items-start px-6 pt-[9rem] pb-24 sm:px-8 lg:px-12">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={badgeReveal}
          className="w-full max-w-[650px] space-y-10"
        >
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={badgeReveal}
            className="text-xs uppercase tracking-[0.42em] text-[#c6a861]"
          >
            Surface & Underground Mining Solutions
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={headlineContainer}
            className="space-y-1"
          >
            {heroLines.map((line) => (
              <motion.span
                key={line}
                variants={headingLine}
                className="block text-[3.2rem] font-black leading-[0.95] tracking-[-0.03em] sm:text-[3.75rem] md:text-[4.3rem] lg:text-[4.8rem] xl:text-[5.2rem]"
              >
                {line}
              </motion.span>
            ))}
          </motion.div>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={subtitleReveal}
            className="max-w-[600px] text-base leading-8 text-slate-200/85 sm:text-lg"
          >
            Delivering enterprise mining solutions, operational excellence, engineering expertise and dependable execution for large-scale surface and underground operations.
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0, scale: 1 } : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={buttonReveal}
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center rounded-sm bg-[#c6973a] px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-black transition duration-300"
              whileHover={{ y: -2, boxShadow: "0 16px 40px rgba(198, 151, 58, 0.2)" }}
            >
              Get Consultation
              <ArrowRight className="ml-3 h-4 w-4" />
            </motion.a>
          </motion.div>
          <div className="hidden lg:block" />
        </motion.div>
      </div>
    </section>
  )
}
