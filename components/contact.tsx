"use client"

import { useState, type FormEvent } from "react"
import { Phone, Mail, MapPin, ArrowRight, CheckCircle2 } from "lucide-react"
import { Reveal } from "@/components/reveal"

const services = [
  "Exploration",
  "Mine Planning & Engineering",
  "Technical Services",
  "Health & Safety",
  "Environmental Assessment",
  "Other",
]

const details = [
  { icon: Phone, label: "Phone", value: "+27 (0) 11 000 0000" },
  { icon: Mail, label: "Email", value: "info@bizhmining.co.za" },
  { icon: MapPin, label: "Office", value: "Johannesburg, South Africa" },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-navy py-20 lg:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Get In Touch
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let&apos;s Discuss Your Mining Project
            </h2>
            <p className="mt-5 max-w-md text-pretty leading-relaxed text-white/60">
              Whether you&apos;re planning a new operation, optimizing production, or improving
              safety performance, Bizh Mining is ready to help.
            </p>

            <div className="mt-10 space-y-5">
              {details.map((detail) => (
                <div key={detail.label} className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-white/10 bg-navy-secondary text-gold">
                    <detail.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/50">
                      {detail.label}
                    </p>
                    <p className="text-sm font-medium text-white">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-sm border border-white/10 bg-navy-secondary p-7 sm:p-9">
              {submitted ? (
                <div className="flex h-full min-h-80 flex-col items-center justify-center text-center">
                  <CheckCircle2 className="h-14 w-14 text-gold" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-semibold text-white">Thank you</h3>
                  <p className="mt-2 max-w-xs text-sm text-white/60">
                    Your request has been received. Our team will be in touch shortly to
                    discuss your mining project.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Name" id="name" placeholder="John Doe" />
                  <Field label="Company" id="company" placeholder="Company name" />
                  <Field label="Email" id="email" type="email" placeholder="you@company.com" />
                  <Field label="Phone Number" id="phone" type="tel" placeholder="+27 ..." />

                  <div className="sm:col-span-2">
                    <Label htmlFor="service">Service Required</Label>
                    <select
                      id="service"
                      name="service"
                      defaultValue=""
                      className="mt-2 w-full rounded-sm border border-white/15 bg-navy px-4 py-3 text-sm text-white outline-none transition-colors focus:border-gold"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="mt-2 w-full resize-none rounded-sm border border-white/15 bg-navy px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-gold"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-gold/90"
                  >
                    Request Consultation
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="text-xs font-medium uppercase tracking-wider text-white/60">
      {children}
    </label>
  )
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
}: {
  label: string
  id: string
  type?: string
  placeholder?: string
}) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-sm border border-white/15 bg-navy px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-gold"
      />
    </div>
  )
}
