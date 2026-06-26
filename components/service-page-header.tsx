import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export function ServicePageHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center px-6 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-sm border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#c6973a] hover:bg-[#c6973a]/10 hover:text-[#c6973a]"
        >
          <ArrowLeft className="h-4 w-4" />
          Home
        </Link>
      </div>
    </header>
  )
}
