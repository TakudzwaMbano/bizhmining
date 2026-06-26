"use client"

import Image from "next/image"
import { Reveal } from "@/components/reveal"

const values = [
  {
    imageSrc: "/images/safety%20(1).jpg",
    alt: "Safety",
    title: "Safety First",
    body: "Zero Harm will always be the target.",
  },
  {
    imageSrc: "/images/cost efficiency.jpg",
    alt: "Cost Optimization",
    title: "Cost Optimization",
    body: "Minimize costs and reduce waste dilution.",
  },
  {
    imageSrc: "/images/execellence.webp",
    alt: "Production Excellence",
    title: "Production Excellence",
    body: "Maximize production and help mines reach full potential.",
  },
  {
    imageSrc: "/images/sustainable.jpg",
    alt: "Sustainable Growth",
    title: "Sustainable Growth",
    body: "Enable continued growth for our customers, communities, and stakeholders.",
  },
]

export function Values() {
  return (
    <section id="values" className="bg-muted py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            What Drives Us
          </span>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Core Values
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-muted-foreground">
            Our values guide everything we do, from engineering precision to cost discipline and sustainable mining performance.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.1}>
              <div className="group h-full overflow-hidden rounded-[16px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-slate-50 transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={value.imageSrc}
                      alt={value.alt}
                      width={64}
                      height={64}
                      className="h-16 w-16 object-cover"
                    />
                  </div>
                </div>
                <div className="mt-8 flex h-full flex-col">
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-4 text-base leading-7 text-muted-foreground">
                    {value.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
