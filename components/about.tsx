"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { Target, Eye, HeartHandshake } from "lucide-react"
import { Reveal } from "@/components/reveal"

const columns = [
  {
    icon: Target,
    title: "Industry Expertise",
    body: "Over a decade of deep mining operations knowledge combined with technical excellence across surface and underground projects.",
  },
  {
    icon: Eye,
    title: "Operational Excellence",
    body: "Proven track record delivering reliable solutions that maximize efficiency, safety, and sustainable practice across large-scale operations.",
  },
  {
    icon: HeartHandshake,
    title: "Reliable Delivery",
    body: "Enterprise-grade execution with disciplined project management, operational precision, and dependable performance on every engagement.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

const columnVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] },
  },
}

export function About() {
  return (
    <section
      id="about"
      className="relative min-h-[110vh] w-full overflow-hidden bg-[url('/images/about-engineering.png')] bg-cover bg-center bg-no-repeat py-24 lg:py-28"
    >
      <div className="absolute inset-0 bg-black/72" />

      <div className="relative z-10 mx-auto w-full max-w-[1480px] px-6 sm:px-8 lg:px-12">
        <motion.div
          className="space-y-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-140px" }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-[#c6a861]">
            Over A Decade Of Experience
          </p>
          <h2 className="text-4xl font-black leading-[1.05] tracking-[-0.02em] sm:text-5xl md:text-5xl lg:text-6xl text-white">
            About Bizh Mining
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.45fr_1fr] lg:items-center lg:gap-12">
          <motion.div
            className="space-y-10 rounded-[2rem] border border-white/10 bg-[#141414]/95 p-10 shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:p-12 lg:p-14"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-140px" }}
            variants={containerVariants}
          >
            <div className="space-y-6 max-w-2xl">
              <p className="text-lg font-semibold uppercase tracking-[0.24em] text-[#c6a861]">
                Mining Leadership & Legacy
              </p>
              <p className="text-lg leading-9 text-slate-200/85 sm:text-xl">
                Bizh Mining delivers enterprise-scale mining solutions with a sharp focus on efficiency, safety, and long-term value across surface and underground operations.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                {columns.map((col, idx) => (
                  <motion.div
                    key={idx}
                    className="rounded-3xl border border-white/10 bg-slate-950/80 p-6"
                    variants={columnVariants}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c6973a]/10 border border-[#c6973a]/30">
                      <col.icon className="h-6 w-6 text-[#c6973a]" />
                    </div>
                    <h3 className="mt-5 text-base font-semibold tracking-tight text-white">
                      {col.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-200/75">
                      {col.body}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90 shadow-[0_30px_90px_rgba(0,0,0,0.4)]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-140px" }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-slate-950/90">
              <Image
                src="/images/CEO.png"
                alt="Tinashe Taruvinga, CEO and Founder"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
                <p className="text-xs uppercase tracking-[0.36em] text-[#c6a861]">
                  CEO & Founder
                </p>
                <h3 className="mt-4 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">
                  Tinashe Taruvinga
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-slate-200/80 sm:text-base">
                  Leading the company with a bold vision for resilient mining systems, strategic partnerships, and disciplined operational delivery.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
