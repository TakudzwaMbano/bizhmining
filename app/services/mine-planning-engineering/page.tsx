"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight, Check } from "lucide-react"

const hero = {
  title: "Mine Planning & Engineering",
  description:
    "Strategic mine planning and engineering design that transforms complex geology into efficient, safe, and mineable production systems.",
  image: "/images/services.jpg",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Mine Planning & Engineering", href: "/services/mine-planning-engineering" },
  ],
}

const services = [
  {
    title: "Mine Design & Pit Optimization",
    content: `Efficient mine design requires balance between geological realities, operational requirements, and economic performance. Our design team applies advanced pit optimization methodologies to develop mine geometries that maximize value while maintaining operational practicality. We consider equipment selection, haulage efficiency, and staging strategies from inception.`,
  },
  {
    title: "Production Scheduling & Sequencing",
    content: `Production scheduling translates conceptual designs into executable operational plans. We develop realistic schedules that account for geological variability, processing constraints, and market dynamics. Our scheduling methodologies prioritise schedule certainty and operational flexibility, recognizing that mines operate in volatile market conditions.`,
  },
  {
    title: "Underground Planning",
    content: `Underground mining requires meticulous planning around ground stability, ventilation, and access logistics. Our underground specialists develop integrated decline and stope designs that optimise ore recovery while maintaining operational safety and productivity. We validate designs through geotechnical review and peer assessment.`,
  },
  {
    title: "Infrastructure & Systems Design",
    content: `Sustained mining operations depend on reliable infrastructure for haulage, power, water management, and material handling. We design integrated systems that support target production rates while maintaining service reliability. Our designs account for site-specific constraints and long-term operational demands.`,
  },
]

const methodology = [
  { number: "01", title: "Consultation", description: "Understand project scope, resource definition, and operational objectives." },
  { number: "02", title: "Scoping", description: "Develop preliminary designs and assess technical and economic feasibility." },
  { number: "03", title: "Design", description: "Deliver detailed engineering designs informed by site conditions and operational requirements." },
  { number: "04", title: "Validation", description: "Validate designs through peer review and risk assessment processes." },
  { number: "05", title: "Implementation Support", description: "Support design implementation and adaptive management during mine development." },
]

const industries = [
  "Feasibility Studies",
  "Detailed Design",
  "Production Optimization",
  "Expansion Planning",
  "Operational Review",
]

const whyChoose = [
  "Engineering teams with decades of mine design and operational experience",
  "Proven track record across multiple mining methods and deposit types",
  "Practical designs that balance technical excellence with operational reality",
  "Industry-standard engineering practices and peer review processes",
  "Cost-transparent approach to design and planning",
  "Ongoing support through implementation phases",
]

const quickFacts = [
  "25+ years mine design and planning experience",
  "Projects spanning multiple commodities and geographies",
  "Both surface and underground mining expertise",
  "Feasibility-through-operations scope",
  "Professional engineering certifications",
]

const faq = [
  {
    question: "How do you develop realistic mine plans in the face of uncertainty?",
    answer:
      "We structure plans around core operational assumptions while building in flexibility for adaptation. Our phased approach allows for data refinement and plan adjustment as the project progresses and new information becomes available.",
  },
  {
    question: "Can your team support both surface and underground mine planning?",
    answer:
      "Yes. We have extensive experience in both surface (open pit) and underground mining methods, including block caving, sublevel stoping, and decline mining. We tailor planning methodologies to the specific mining method and deposit characteristics.",
  },
  {
    question: "What is your approach to mine scheduling and production forecasting?",
    answer:
      "Our scheduling approach prioritises practical operability and schedule certainty. We develop schedules that account for geological variability, processing constraints, and market dynamics. We validate schedules through operational simulation and sensitivity analysis.",
  },
  {
    question: "How do you manage design changes during implementation?",
    answer:
      "We establish clear change control processes and maintain adaptive capacity in designs. We provide ongoing support during implementation to address emerging conditions and ensure designs remain aligned with operational requirements.",
  },
]

export default function MinePlanningEngineeringPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] w-full overflow-hidden bg-black">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hero.image})` }}
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: [0.22, 0.61, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-16 text-white sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-5">
            <motion.h1
              className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {hero.title}
            </motion.h1>
            <motion.p
              className="max-w-2xl text-lg leading-relaxed text-slate-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {hero.description}
            </motion.p>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-[1400px] px-6 py-20 sm:px-8 lg:px-12">
        {/* Service Introduction */}
        <section className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">Engineering Excellence</h2>
              <p className="text-lg leading-8 text-slate-100">
                Effective mine planning translates geological understanding into operational reality. Our planning and engineering services combine technical rigour with practical operational knowledge to develop designs that are economically sound, operationally feasible, and sustainably managed.
              </p>
              <p className="text-lg leading-8 text-slate-100">
                We work at all stages of project development, from early-stage feasibility studies through detailed design and implementation support. Our planning methodologies recognize the complexity of mining operations and the importance of flexibility in responding to changing market and operational conditions.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="space-y-4 rounded-lg border border-white/15 bg-slate-900/90 p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-sm uppercase tracking-widest text-[#c6a861]">Quick Facts</h3>
            <div className="space-y-3 border-t border-white/10 pt-4">
              {quickFacts.map((fact) => (
                <div key={fact} className="text-sm leading-6 text-slate-100">
                  {fact}
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Service Details */}
        <section className="mt-20 space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="mb-4 text-2xl font-bold text-white">{service.title}</h3>
              <p className="text-base leading-8 text-slate-100">{service.content}</p>
            </motion.div>
          ))}
        </section>

        {/* Methodology */}
        <section className="mt-20 space-y-12">
          <div className="max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold text-white">Our Approach</h2>
            <p className="text-base leading-8 text-slate-100">
              Our mine planning methodology is structured around five core phases, each designed to progressively develop technical confidence while maintaining practical operability and cost effectiveness.
            </p>
          </div>

          <div className="space-y-6">
            {methodology.map((item, index) => (
              <motion.div
                key={item.number}
                className="flex gap-6 border-l-2 border-[#c6a861]/30 pl-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-[#c6a861]/50 bg-[#c6973a]/10 text-sm font-bold text-[#c6a861]">
                  {item.number}
                </div>
                <div className="pt-1">
                  <h4 className="text-base font-semibold text-white">{item.title}</h4>
                  <p className="mt-1 text-sm leading-6 text-slate-100">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Industries Served */}
        <section className="mt-20 space-y-8">
          <h2 className="text-3xl font-bold text-white">Industries We Serve</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                className="border-l-2 border-[#c6a861]/20 pl-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <p className="text-base font-medium text-white">{industry}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mt-20 space-y-8">
          <h2 className="text-3xl font-bold text-white">Why Choose Bizh Mining</h2>
          <div className="max-w-3xl space-y-4">
            {whyChoose.map((item, index) => (
              <motion.div
                key={item}
                className="flex gap-4 rounded-lg border border-white/10 bg-slate-900/80 p-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Check className="h-5 w-5 flex-shrink-0 text-[#c6a861]" />
                <p className="text-sm leading-6 text-slate-100">{item}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-20 space-y-8">
          <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
          <div className="max-w-3xl space-y-4">
            {faq.map((item, idx) => (
              <motion.details
                key={item.question}
                className="group rounded-lg border border-white/15 bg-slate-900/90 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <summary className="flex cursor-pointer items-start justify-between gap-4 text-base font-semibold text-white">
                  <span>{item.question}</span>
                  <ArrowRight className="h-4 w-4 flex-shrink-0 transition-transform duration-300 group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-sm leading-6 text-slate-100">{item.answer}</p>
              </motion.details>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mt-24 rounded-lg border border-white/15 bg-slate-900/90 px-8 py-16 text-center sm:px-12 sm:py-20">
          <motion.h2
            className="text-3xl font-bold text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Discuss Your Mine Planning Requirements
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our mine planning specialists are ready to assess your project and develop a tailored engineering approach that delivers both technical excellence and operational practicality.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded bg-[#c6973a] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-slate-950 transition hover:bg-[#d0a354]"
            >
              Get Consultation
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded border border-white/20 bg-white/5 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-[#c6973a] hover:bg-[#c6973a]/5"
            >
              Contact Us
            </Link>
          </motion.div>
        </section>
      </main>
    </div>
  )
}
