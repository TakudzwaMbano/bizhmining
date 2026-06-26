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
    <section id="services" className="relative min-h-screen w-full overflow-hidden bg-[url('/images/services.jpg')] bg-cover bg-center bg-no-repeat py-24 lg:py-32">
      <div className="absolute inset-0 bg-black/72" />

      <div className="relative z-10 mx-auto w-[min(90%,1400px)] px-6 sm:px-8 lg:px-12">
        <motion.div
          className="space-y-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
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
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.75, ease: [0.22, 0.61, 0.36, 1], delay: 0.1 }}
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10 lg:gap-12">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                className="group"
                variants={cardVariants}
              >
                <Link
                  href={service.href}
                  className="flex h-full flex-col rounded-xl border border-white/10 bg-slate-950/90 p-8 transition duration-300 will-change-transform hover:-translate-y-1 hover:scale-[1.01] hover:border-[#c6973a] hover:bg-slate-900/95"
                >
                  <motion.div
                    className="flex h-16 w-16 items-center justify-center rounded-sm bg-[#c6973a]/10 border border-[#c6973a]/20 transition will-change-transform"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
                  >
                    <service.icon className="h-8 w-8 text-[#c6973a] transition-colors duration-300 group-hover:text-white" />
                  </motion.div>

                  <div className="mt-6 flex items-center justify-between gap-4">
                    <h3 className="text-xl font-semibold tracking-tight text-[#F3F4F6]">
                      {service.title}
                    </h3>
                    <ArrowRight className="h-5 w-5 text-transparent transition-colors duration-300 group-hover:text-[#c6973a]" />
                  </div>

                  <p className="mt-3 text-sm leading-8 text-[#D1D5DB]">
                    {service.description}
                  </p>

                  <ul className="mt-8 space-y-3 border-t border-white/10 pt-6">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c6973a]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
