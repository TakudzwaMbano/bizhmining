"use client"

import { useState, type FormEvent } from "react"
import { Phone, Mail, MapPin, ArrowRight, CheckCircle2 } from "lucide-react"
import { Reveal } from "@/components/reveal"
import dynamic from "next/dynamic"

const ContactMap = dynamic(() => import("@/components/contact-map").then((mod) => mod.ContactMap), {
  ssr: false,
  loading: () => null,
})

const services = [
  "Exploration",
  "Mine Planning & Engineering",
  "Technical Services",
  "Health & Safety",
  "Environmental Assessment",
  "Other",
]

const addressLines = [
  "369 Dorstone Crescent",
  "Cedar Creek Estate",
  "Broadacres",
  "Johannesburg, South Africa",
]

const southAfricaPhone = "+27 79 174 4275"
const zimbabwePhone = "+263 77 385 2864"
const ceoPhone = "+263 778 069 285"
const emailAddress = "nyashataruvinga@bizhmining.com"
const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(addressLines.join(", "))
const whatsappNumber = southAfricaPhone.replace(/\D/g, "")

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const name = String(formData.get("name") ?? "").trim()
    const company = String(formData.get("company") ?? "").trim()
    const email = String(formData.get("email") ?? "").trim()
    const phone = String(formData.get("phone") ?? "").trim()
    const service = String(formData.get("service") ?? "").trim()
    const message = String(formData.get("message") ?? "").trim()

    const whatsappText = [
      "Hello Bizh Mining,",
      name ? `My name is ${name}.` : "",
      company ? `Company: ${company}.` : "",
      phone ? `Phone: ${phone}.` : "",
      email ? `Email: ${email}.` : "",
      service ? `Service required: ${service}.` : "",
      message ? `Project details: ${message}` : "",
      "Please get in touch with me."
    ]
      .filter(Boolean)
      .join(" ")

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[url('/images/contactsection.jpg')] bg-cover bg-center py-20 lg:py-28 scroll-mt-20"
    >
      <div className="absolute inset-0 bg-[rgba(29,24,24,0.75)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.24),transparent_32%),linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.45))]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="space-y-10">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Contact & Locations
              </span>
              <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Elevate your mining project with expert advisory and clear contact pathways.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                Reach Bizh Mining through our South African office or regional Zimbabwe team. The
                section is designed to be calm, confident and easy to use.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <article className="overflow-hidden rounded-[24px] border border-white/10 bg-navy-secondary/90 p-10 shadow-[0_30px_80px_rgba(0,0,0,0.24)]">
                <div className="space-y-8">
                  <InfoRow
                    icon={MapPin}
                    heading="South Africa Office"
                    details={addressLines}
                    href={googleMapsUrl}
                    actionLabel="View on Google Maps"
                    delay={0.1}
                  />

                  <div className="h-px bg-white/10" />

                  <InfoRow
                    icon={Phone}
                    heading="South Africa"
                    details={[southAfricaPhone]}
                    href={`tel:${southAfricaPhone.replace(/\s+/g, "")}`}
                    delay={0.15}
                  />

                  <div className="h-px bg-white/10" />

                  <InfoRow
                    icon={Phone}
                    heading="Zimbabwe"
                    details={[zimbabwePhone, ceoPhone]}
                    href={`tel:${zimbabwePhone.replace(/\s+/g, "")}`}
                    delay={0.2}
                  />

                  <div className="h-px bg-white/10" />

                  <InfoRow
                    icon={Mail}
                    heading="Email"
                    details={[emailAddress]}
                    href={`mailto:${emailAddress}`}
                    delay={0.25}
                  />
                </div>
              </article>
            </Reveal>
          </div>

          <Reveal delay={0.12} x={80}>
            <div className="rounded-[24px] border border-white/10 bg-navy-secondary/90 p-10 shadow-[0_30px_80px_rgba(0,0,0,0.24)]">
              {submitted ? (
                <div className="flex min-h-[320px] flex-col items-center justify-center gap-4 text-center">
                  <CheckCircle2 className="h-14 w-14 text-gold" aria-hidden="true" />
                  <h3 className="text-2xl font-semibold text-white">Message received</h3>
                  <p className="max-w-sm text-sm leading-6 text-white/70">
                    Thanks for contacting us. A senior Bizh Mining specialist will be in touch to
                    discuss your project and next steps.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name" id="name" placeholder="John Doe" />
                    <Field label="Company" id="company" placeholder="Company name" />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Email" id="email" type="email" placeholder="you@company.com" />
                    <Field label="Phone Number" id="phone" type="tel" placeholder="+27 79 174 4275" />
                  </div>

                  <div>
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

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="mt-2 w-full resize-none rounded-sm border border-white/15 bg-navy px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-gold"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-navy transition duration-300 hover:bg-gold/95"
                  >
                    Request Consultation
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.28}>
          <div className="mt-12 overflow-hidden rounded-[24px] border border-white/10 bg-navy-secondary/90 shadow-[0_30px_80px_rgba(0,0,0,0.24)]">
            <ContactMap />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function InfoRow({
  icon: Icon,
  heading,
  details,
  href,
  actionLabel,
  delay,
}: {
  icon: typeof MapPin
  heading: string
  details: string[]
  href: string
  actionLabel?: string
  delay: number
}) {
  return (
    <Reveal delay={delay}>
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-3xl bg-gold text-navy shadow-[0_14px_30px_rgba(198,151,58,0.18)]">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm font-semibold text-white">{heading}</p>
            <div className="mt-3 space-y-1 text-sm leading-7 text-white/70">
              {details.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </div>

        <a
          href={href}
          target={actionLabel ? "_blank" : "_self"}
          rel={actionLabel ? "noreferrer" : undefined}
          className="inline-flex text-sm font-medium text-gold transition hover:text-white"
        >
          {actionLabel ?? details[0]}
        </a>
      </div>
    </Reveal>
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
