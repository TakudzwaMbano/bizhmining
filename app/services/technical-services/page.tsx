"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight, Check } from "lucide-react"

const hero = {
  title: "Technical Services",
  description:
    "Independent technical assessments that bring clarity to complex mining challenges through rigorous analysis and expert interpretation.",
  image: "/images/services.jpg",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Technical Services", href: "/services/technical-services" },
  ],
}

const services = [
  {
    title: "Technical Reporting & Documentation",
    content: `Clear, accurate technical documentation is essential for stakeholder confidence and regulatory compliance. We prepare comprehensive technical reports that communicate complex mining concepts with appropriate technical depth. Our reporting adheres to industry-standard frameworks and professional guidelines, ensuring defensibility and investor alignment.`,
  },
  {
    title: "Resource & Reserve Assessment",
    content: `Mineral resource and ore reserve classification requires disciplined application of professional standards and transparent confidence assessment. We conduct independent reviews of resource models and participate in mineral resource and ore reserve estimation. Our assessments align with major reporting codes and provide clear risk attribution.`,
  },
  {
    title: "Mine Audits & Technical Review",
    content: `Operational audits provide valuable independent perspective on mine performance, technical practices, and opportunity areas. Our audit teams assess operational safety, production efficiency, cost management, and technical decision-making. We deliver actionable recommendations that support continuous improvement.`,
  },
  {
    title: "Due Diligence & Independent Assessment",
    content: `Mining acquisitions and investments require independent technical assessment to inform investment decisions. We conduct comprehensive technical due diligence covering geology, reserve estimation, mine planning, infrastructure, and operational performance. Our assessments identify technical risks and value drivers.`,
  },
]

const methodology = [
  { number: "01", title: "Engagement", description: "Clarify assessment objectives and define scope and technical standards." },
  { number: "02", title: "Review", description: "Conduct systematic review of technical data, reports, and operational documentation." },
  { number: "03", title: "Assessment", description: "Develop independent technical assessment based on industry-standard methodologies." },
  { number: "04", title: "Validation", description: "Validate conclusions through site inspection, peer review, and industry comparison." },
  { number: "05", title: "Reporting", description: "Deliver clear, defensible assessment outputs with explicit risk and confidence communication." },
]

const industries = [
  "Corporate Technical Review",
  "Investment Due Diligence",
  "Regulatory Compliance",
  "Operational Audit",
  "Feasibility Assurance",
]

const whyChoose = [
  "Truly independent technical perspective backed by decades of mining experience",
  "Rigorous assessment methodologies aligned with industry professional standards",
  "Clear communication of technical findings and explicit risk attribution",
  "Track record supporting major mining acquisitions and investments",
  "Access to peer expert network for specialized technical assessment",
  "Regulatory and investor-aligned reporting frameworks",
]

const quickFacts = [
  "20+ years independent technical assessment experience",
  "Projects across multiple continents and commodities",
  "Major investment and M&A advisory track record",
  "Industry professional standards compliance",
  "Peer-reviewed technical methodologies",
]

const faq = [
  {
    question: "What is independent technical assessment and why does it matter?",
    answer:
      "Independent technical assessment provides objective evaluation of mining projects by experts not directly involved in project development. This independent perspective is critical for investment decisions, regulatory submissions, and corporate governance. It helps identify technical risks and value drivers that might otherwise be overlooked.",
  },
  {
    question: "How do you maintain independence in technical assessments?",
    answer:
      "We do not participate in mine development or operations at assessed properties, ensuring our assessments are not influenced by financial incentives tied to project advancement. Our reputation depends on providing accurate, unbiased technical assessment.",
  },
  {
    question: "What technical standards do you use for resource and reserve assessment?",
    answer:
      "We align with international technical standards including CRIRSCO, NI 43-101, JORC, and other major reporting codes as applicable. Our assessments are transparent about methodology and confidence levels, supporting regulatory and investor requirements.",
  },
  {
    question: "Can you support due diligence on mining acquisitions?",
    answer:
      "Yes. We have extensive experience conducting technical due diligence on mining acquisitions ranging from small explorers to major operating mines. Our assessment covers all technical aspects including geology, reserves, mine planning, operations, and infrastructure.",
  },
]

export default function TechnicalServicesPage() {
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
              <h2 className="text-4xl font-bold text-white">Technical Rigor & Independence</h2>
              <p className="text-lg leading-8 text-slate-100">
                Mining projects face complex technical challenges that benefit from independent expert assessment. Our technical services combine deep industry experience with rigorous methodologies to deliver clear assessments that inform strategic decisions.
              </p>
              <p className="text-lg leading-8 text-slate-100">
                We work with mining companies, investment firms, and government agencies to provide objective technical evaluation of mining projects. Our assessments support investment decisions, regulatory submissions, and operational improvement initiatives. We maintain strict independence from project development incentives, ensuring our technical conclusions are unbiased and reliable.
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
              Our technical assessment methodology is structured around five core phases, each designed to develop robust independent conclusions while maintaining transparency and industry-standard rigor.
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
            Discuss Your Technical Assessment Needs
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our technical specialists are ready to discuss your project requirements and deliver independent assessment that informs confident decision-making.
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
