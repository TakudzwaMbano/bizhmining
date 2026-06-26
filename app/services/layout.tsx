import { ServicePageHeader } from "@/components/service-page-header"
import { Footer } from "@/components/footer"

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <ServicePageHeader />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  )
}
