import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Values } from "@/components/values"
import { Services } from "@/components/services"
import { Commodities } from "@/components/commodities"
import { WhyChoose } from "@/components/why-choose"
import { Process } from "@/components/process"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Values />
        <Services />
        <Commodities />
        <WhyChoose />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
