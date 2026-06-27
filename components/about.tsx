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
      className="relative overflow-hidden bg-slate-950 bg-[url('/images/aboutbackground.webp')] bg-cover bg-center bg-no-repeat py-24 lg:py-32 scroll-mt-20"
    >
      <div className="absolute inset-0 bg-slate-950/80" />
      <div className="pointer-events-none absolute left-10 top-1/4 hidden h-80 w-[1px] bg-gradient-to-b from-transparent via-[#c6a861]/30 to-transparent lg:block" />
      <div className="pointer-events-none absolute right-10 bottom-10 hidden h-40 w-40 rounded-full border border-[#c6a861]/10 bg-[#c6a861]/5 blur-2xl lg:block" />

      <div className="relative z-10 mx-auto w-full max-w-[1480px] px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.45em] text-[#c6a861]">
              ABOUT BIZH MINING
            </p>
            <h2 className="mt-6 max-w-3xl text-4xl font-black leading-tight tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              Premier mining consultancy for confident engineering leadership.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Bizh Mining delivers executive-level advisory, rigorous technical planning, and disciplined operational execution for surface and underground mining projects.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.58fr_0.42fr] lg:items-start">
          <motion.div
            className="space-y-10 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_28px_90px_rgba(15,23,42,0.35)] backdrop-blur-xl sm:p-10 lg:p-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={containerVariants}
          >
            <div className="space-y-5">
              <span className="inline-flex rounded-full border border-[#c6a861]/20 bg-[#c6a861]/10 px-4 py-2 text-xs uppercase tracking-[0.36em] text-[#c6a861] shadow-sm">
                Executive Insights
              </span>
              <h3 className="text-3xl font-black tracking-[-0.02em] text-white sm:text-4xl">
                We translate mining engineering into safer, more profitable operations.
              </h3>
              <p className="max-w-2xl text-base leading-8 text-slate-300">
                Our editorial-style approach removes noise, focuses on key investment levers, and presents mining leadership with clarity, credibility, and commercial discipline.
              </p>
            </div>

            <div className="space-y-5">
              {columns.map((col, idx) => (
                <motion.div
                  key={idx}
                  className="group flex items-start gap-5 rounded-[24px] border border-white/10 bg-slate-950/95 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#c6a861]/30 hover:bg-slate-900"
                  variants={columnVariants}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#c6973a]/10 text-[#c6973a] shadow-lg shadow-[#c6973a]/10 transition duration-300 group-hover:scale-[1.04]">
                    <col.icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold tracking-tight text-white">
                      {col.title}
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-slate-300/85">
                      {col.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-[32px] border border-white/10 shadow-[0_35px_120px_rgba(0,0,0,0.45)]"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.88, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-slate-950">
              <Image
                src="/images/new%20nyasha%20image.jpeg"
                alt="Nyasha Taruvinga, CEO and Founder"
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(198,168,97,0.15),_transparent_35%)]" />
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-6 top-12 h-16 w-[1px] bg-gradient-to-b from-transparent via-[#c6a861]/50 to-transparent" />
                <div className="absolute right-6 bottom-16 h-20 w-[1px] bg-gradient-to-t from-transparent via-[#c6a861]/50 to-transparent" />
              </div>

              <div className="relative flex h-full flex-col justify-end p-8 sm:p-10 lg:p-12">
                <span className="inline-flex rounded-full border border-[#c6a861]/20 bg-[#c6a861]/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-[#c6a861]">
                  Founder & CEO
                </span>
                <h3 className="mt-6 text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl">
                  Nyasha Taruvinga
                </h3>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#c6a861]">
                  +263 778 069 285
                </p>
                <p className="mt-2 text-sm font-medium tracking-[0.18em] text-slate-200/90">
                  nyashataruvinga@bizhmining.com
                </p>
                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200/90">
                  “Our commitment is to deliver mining engineering leadership that protects people, strengthens productivity, and builds sustainable value for every stakeholder.”
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
