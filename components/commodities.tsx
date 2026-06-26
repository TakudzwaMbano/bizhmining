"use client"

import Image from "next/image"
import { Reveal } from "@/components/reveal"

const commodities = [
  { image: "/images/coal.webp", name: "Coal", note: "Thermal & coking" },
  { image: "/images/chrome.webp", name: "Chrome", note: "PGM-bearing reefs" },
  { image: "/images/iron.jpg", name: "Iron Ore", note: "Surface operations" },
  { image: "/images/gold.jpg", name: "Gold", note: "Deep-level mining" },
]

export function Commodities() {
  return (
    <section id="industries" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Industries We Serve
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Mining Expertise Across Multiple Commodities
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {commodities.map((commodity, i) => (
            <Reveal key={commodity.name} delay={i * 0.1}>
              <div className="group relative flex h-full flex-col items-center overflow-hidden rounded-sm border border-border bg-card p-8 text-center transition-all hover:-translate-y-1 hover:border-gold hover:shadow-xl hover:shadow-navy/5">
                <div className="relative h-16 w-16 overflow-hidden rounded-sm border border-white/10 bg-navy">
                  <Image
                    src={commodity.image}
                    alt={commodity.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{commodity.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{commodity.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
