import Image from "next/image"
import { Mountain } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
]

const serviceLinks = [
  { label: "Exploration", href: "#services" },
  { label: "Mine Planning", href: "#services" },
  { label: "Engineering", href: "#services" },
  { label: "Technical Services", href: "#services" },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-secondary">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-2 lg:pr-12">
            <a href="#home" className="flex items-center gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-sm border border-white/10 bg-[#0f0f0f]">
                <Image
                  src="/images/logo.png"
                  alt="Bizh Mining logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="flex flex-col leading-none">
                <span className="text-base font-semibold tracking-tight text-white">
                  Bizh Mining
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
                  PTY Ltd
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              Providing sustainable underground and surface mining solutions that improve
              productivity, safety, and operational excellence.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-white/50">
            &copy; 2026 Bizh Mining (PTY) Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
