"use client"

import { Reveal } from "@/components/reveal"

const steps = [
  {
    number: "01",
    title: "Assessment",
    body: "Analyze mine operations and opportunities.",
  },
  {
    number: "02",
    title: "Planning",
    body: "Develop tailored mining strategies.",
  },
  {
    number: "03",
    title: "Implementation",
    body: "Deploy operational improvements.",
  },
  {
    number: "04",
    title: "Optimization",
    body: "Measure, refine, and maximize performance.",
  },
]

export function Process() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Our Methodology
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How We Work
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-border lg:block" />
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.12}>
                <div className="relative">
                  <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-sm bg-navy text-xl font-bold text-gold">
                    {step.number}
                  </span>
                  <h3 className="mt-6 text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
