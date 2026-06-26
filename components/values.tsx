"use client"

import { ShieldCheck, Coins, Gauge, Sprout } from "lucide-react"
import { Reveal } from "@/components/reveal"

const values = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    body: "Zero Harm will always be the target.",
  },
  {
    icon: Coins,
    title: "Cost Optimization",
    body: "Minimize costs and reduce waste dilution.",
  },
  {
    icon: Gauge,
    title: "Production Excellence",
    body: "Maximize production and help mines reach full potential.",
  },
  {
    icon: Sprout,
    title: "Sustainable Growth",
    body: "Enable continued growth for our customers, communities, and stakeholders.",
  },
]

export function Values() {
  return (
    <section id="values" className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            What Drives Us
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Core Values
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.1}>
              <div className="group relative h-full overflow-hidden rounded-sm border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-xl hover:shadow-navy/5">
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
                <span className="flex h-14 w-14 items-center justify-center rounded-sm bg-navy text-gold">
                  <value.icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
