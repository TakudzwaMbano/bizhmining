"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import logo from "../assets/images/logo.png"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Values", href: "#values" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {

  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.header
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/90 border-b border-white/10"
          : "bg-slate-950/80"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-8 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-sm overflow-hidden sm:h-11 sm:w-11">
            <Image src={logo} alt="Bizh Mining logo" width={40} height={40} className="object-contain" />
          </span>
          <span className="flex min-w-0 flex-col leading-none">
            <span className="truncate text-sm font-semibold tracking-tight text-slate-100 sm:text-base">
              Bizh Mining
            </span>
            <span className="hidden sm:block text-[10px] font-medium uppercase tracking-[0.2em] text-[#c6a861]">
              PTY Ltd
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <motion.a
                href={link.href}
                className="relative text-sm font-medium text-slate-200"
                whileHover={{ color: "#c6973a" }}
              >
                {link.label}
                <motion.span
                  className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#c6973a]"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
                />
              </motion.a>
            </li>
          ))}
        </ul>

        <motion.a
          href="#contact"
          className="hidden rounded-sm bg-[#c6973a] px-5 py-2.5 text-sm font-semibold text-slate-950 lg:inline-flex"
          whileHover={{ y: -1, boxShadow: "0 10px 24px rgba(198, 151, 58, 0.18)" }}
          transition={{ duration: 0.2 }}
        >
          Get Consultation
        </motion.a>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center rounded-sm p-2 text-slate-100 lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-navy/70 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed inset-y-0 right-0 z-50 flex w-80 max-w-[85vw] flex-col bg-black/95 px-6 py-6 shadow-2xl lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                  Menu
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-sm p-2 text-white"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <ul className="mt-8 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-white/10 py-4 text-lg font-medium text-white transition-colors hover:text-gold"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-auto rounded-sm bg-gold px-5 py-3.5 text-center text-sm font-semibold text-navy transition-colors hover:bg-gold/90"
              >
                Get Consultation
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
