"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight, Check } from "lucide-react"

const hero = {
  title: "Mineral Exploration",
  description:
    "Disciplined mineral exploration services that deliver technical confidence for early-stage discovery through advanced field assessment and geological interpretation.",
  image: "/images/hero-mining.png",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Mineral Exploration", href: "/services/exploration" },
  ],
}

const services = [
  {
    title: "Geological Mapping & Interpretation",
    content: `Our geological mapping services combine systematic field assessment with advanced data interpretation. We conduct comprehensive structural and lithological surveys that establish baseline understanding of deposit geometry, mineralisation controls, and geotechnical parameters. Our team delivers defensible geological models that support confident capital decisions.`,
  },
  {
    title: "Surface Sampling & Geochemistry",
    content: `We design and execute targeted surface sampling programmes that maximize information density while minimising cost and timeline. Our geochemical protocols follow industry-standard quality assurance procedures. Results are interpreted within rigorous geological frameworks to identify meaningful exploration targets and reduce false signals.`,
  },
  {
    title: "Resource Estimation & Classification",
    content: `Resource estimation requires technical discipline and transparent methodology. We apply industry-standard geostatistical techniques, validating results against geological observations and historical precedent. Our classification frameworks align with major reporting standards, providing stakeholders with clear confidence statements and risk attribution.`,
  },
  {
    title: "GIS Integration & Spatial Analysis",
    content: `Spatial data synthesis is fundamental to modern exploration. We integrate geological, geochemical, geophysical, and operational data into comprehensive GIS platforms that support systematic target generation and risk assessment. Our analytical workflows prioritise clarity and defensibility over analytical complexity.`,
  },
]

const methodology = [
  { number: "01", title: "Discovery", description: "Define exploration objectives aligned with deposit geology and project economics." },
  { number: "02", title: "Assessment", description: "Execute systematic field programmes and collect representative geological data." },
  { number: "03", title: "Interpretation", description: "Develop rigorous geological and geochemical models supported by industry-standard analysis." },
  { number: "04", title: "Validation", description: "Validate interpretations against independent data sources and peer expertise." },
  { number: "05", title: "Reporting", description: "Deliver defensible technical outputs that support investment and operational decisions." },
]

const industries = [
  "Greenfield Exploration",
  "Brownfield Development",
  "Regional Development",
  "Feasibility Assessment",
  "Pre-development Planning",
]

const whyChoose = [
  "Experienced mineral exploration teams with deep field expertise",
  "Technical rigour and independent geological interpretation",
  "Proven delivery across multiple deposit types and geological settings",
  "Industry-standard methodologies and quality assurance protocols",
  "Clear communication of technical findings and risk attribution",
  "Regulatory and investor-aligned reporting frameworks",
]

const quickFacts = [
  "20+ years mineral exploration experience",
  "Projects across multiple continents",
  "Diverse deposit type expertise",
  "Industry standard certifications",
  "Peer-reviewed methodologies",
]

const faq = [
  {
    question: "What exploration services does Bizh Mining provide?",
    answer:
      "We provide geological mapping, surface sampling, resource estimation, GIS analysis, and comprehensive exploration assessments. Our services span early-stage discovery through feasibility-level work.",
  },
  {
    question: "How do you ensure geological interpretation is rigorous and defensible?",
    answer:
      "We apply industry-standard methodologies, validate interpretations against multiple data sources, and subject our work to peer review. Our outputs align with major reporting standards and professional guidelines.",
  },
  {
    question: "Can you support exploration programmes in challenging geological settings?",
    answer:
      "Yes. Our team has experience across diverse geological environments, from greenfield regions to complex mineralised terranes. We tailor methodologies to site-specific conditions and data constraints.",
  },
  {
    question: "How is project timeline and cost structured?",
    answer:
      "Exploration programmes are typically structured in phases aligned with your discovery objectives. We provide fixed scopes with transparent cost models, allowing staged investment as confidence develops.",
  },
]

export default function ExplorationPage() {
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
              <h2 className="text-4xl font-bold text-white">Exploration Excellence</h2>
              <p className="text-lg leading-8 text-slate-100">
                Effective mineral exploration requires technical discipline, systematic methodology, and clear communication of uncertainty. Our exploration services combine field expertise with rigorous analytical frameworks to deliver defensible technical assessments that support capital investment decisions.
              </p>
              <p className="text-lg leading-8 text-slate-100">
                We work across greenfield and brownfield settings, adapting our methodologies to local geological conditions, data constraints, and project stage. Whether supporting regional reconnaissance or feasibility-level assessment, our objective is to provide technically sound geological interpretation and risk-aware recommendations.
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
              Our exploration methodology is structured around five core phases, each designed to progressively reduce uncertainty while maintaining technical rigour and cost efficiency.
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
            Discuss Your Exploration Programme
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our exploration specialists are ready to assess your project requirements and develop a tailored technical approach.
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
