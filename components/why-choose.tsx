"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import { Reveal } from "@/components/reveal"

const features = [
  "Underground & Surface Mining Expertise",
  "Safety-Driven Operations",
  "Cost Effective Solutions",
  "Sustainable Mining Practices",
  "Production Optimization",
  "Experienced Technical Team",
]

const stats = [
  { value: "Zero Harm", label: "Safety Focus" },
  { value: "Sustainable", label: "Operations" },
  { value: "Multi-Commodity", label: "Expertise" },
  { value: "Production", label: "Optimization Specialists" },
]

export function WhyChoose() {
  return (
    <section className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-sm">
              <div className="relative aspect-4/3 w-full">
                <Image
                  src="/images/why-choose-background.jpg"
                  alt="Underground mining tunnel with ground support and industrial lighting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                The Bizh Advantage
              </span>
              <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Why Clients Choose Us
              </h2>
            </Reveal>

            <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              {features.map((feature, i) => (
                <Reveal key={feature} delay={i * 0.06}>
                  <li className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-navy text-gold">
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium text-foreground">{feature}</span>
                  </li>
                </Reveal>
              ))}
            </ul>

            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border">
              {stats.map((stat, i) => (
                <Reveal key={stat.value} delay={i * 0.08}>
                  <div className="h-full bg-card p-5">
                    <p className="text-lg font-bold text-navy">{stat.value}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
