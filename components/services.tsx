"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight, Compass, DraftingCompass, Wrench } from "lucide-react"

const services = [
  {
    icon: Compass,
    title: "Exploration",
    href: "/services/exploration",
    description:
      "Defining and managing mineral resources from the ground up with rigorous geological insight.",
    items: [
      "Mineral Resource Management",
      "Geological Surveys",
      "Sampling Programs",
      "Geological Mapping",
      "Project Management",
    ],
  },
  {
    icon: DraftingCompass,
    title: "Mine Planning & Engineering",
    href: "/services/mine-planning-engineering",
    description:
      "Optimised mine designs and production systems that maximise output and efficiency.",
    items: [
      "Mining Operations Optimization",
      "Mine Planning & Design",
      "Drilling Design",
      "Blasting Design",
      "Loading & Hauling Systems",
      "Hoisting Services",
      "Production Scheduling",
    ],
  },
  {
    icon: Wrench,
    title: "Technical Services",
    href: "/services/technical-services",
    description:
      "Specialist engineering, safety, and environmental services across the mine lifecycle.",
    items: [
      "Health & Safety Programs",
      "Underground Mine Ventilation",
      "Rock Mechanics",
      "Ground Support Systems",
      "Resource Estimation",
      "Reserve Estimation",
      "Environmental Impact Assessment",
      "Mine Rehabilitation Planning",
      "Continuous Improvement Management",
    ],
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

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] },
  },
}

export function Services() {
  return (
    <section id="services" className="relative min-h-screen w-full overflow-hidden bg-[url('/images/services.jpg')] bg-cover bg-center bg-no-repeat py-24 lg:py-32 scroll-mt-20">
      <div className="absolute inset-0 bg-black/72" />

      <div className="relative z-10 mx-auto w-[min(90%,1400px)] px-6 sm:px-8 lg:px-12">
        <motion.div
          className="space-y-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-[#c6a861]">
            Our Capabilities
          </p>
          <h2 className="text-4xl font-black leading-[1.05] tracking-[-0.02em] sm:text-5xl md:text-5xl lg:text-6xl text-[#F3F4F6]">
            Mining Services
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-8 text-[#D1D5DB]">
            Comprehensive consulting solutions for modern mining operations
          </p>
        </motion.div>

        <motion.div
          className="mt-16 rounded-[1.5rem] border border-[#c6973a]/10 bg-[#111827]/95 backdrop-blur-sm p-8 sm:p-10 md:p-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10 lg:gap-12">
            {services.map((service, idx) => (
              <motion.div key={idx} variants={cardVariants}>
                <Link
                  href={service.href}
                  className="group block h-full rounded-[28px] border border-white/10 bg-slate-950/95 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.18)] transition duration-300 will-change-transform hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.28)] hover:border-[#c6973a] hover:bg-slate-900/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6973a] focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#c6973a]/10 border border-[#c6973a]/20 transition duration-300 group-hover:bg-[#c6973a]/15 group-hover:scale-105">
                    <service.icon className="h-8 w-8 text-[#c6973a] transition duration-300" />
                  </div>

                  <div className="mt-6">
                    <h3 className="text-2xl font-semibold tracking-tight text-[#F3F4F6] sm:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#D1D5DB] sm:text-base">
                      {service.description}
                    </p>
                    <span className="mt-4 inline-block text-xs uppercase tracking-[0.35em] text-[#c6a861] transition duration-300 group-hover:text-[#c6973a]">
                      Learn More
                    </span>
                  </div>

                  <ul className="mt-8 space-y-3 border-t border-white/10 pt-6">
                    {service.items.slice(0, 4).map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#c6973a]" />
                        <span>{item}</span>
                      </li>
                    ))}
                    <li className="flex items-start gap-3 text-sm font-semibold text-[#F3F4F6]">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#c6973a]" />
                      <span>+ More specialist services</span>
                    </li>
                  </ul>

                  <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                    <span className="text-sm font-semibold uppercase tracking-[0.24em] text-[#c6a861] transition duration-300 group-hover:text-[#c6973a]">
                      View Details
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-[#c6973a] transition duration-300 group-hover:translate-x-2">
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
