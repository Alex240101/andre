"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { useState } from "react"

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/galeria", label: "Galería" },
    { href: "/inscribete", label: "Inscríbete" },
    { href: "/contacto", label: "Contacto" },
  ]

  return (
    <header className="bg-background text-foreground shadow-xl sticky top-0 z-50 border-b border-border/20">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition">
          <div className="w-12 h-12 relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-11-12%20a%20las%2015.50.23_b50b406a-t2Jnnc1QIdukgsQ1jCRuwecMMxOetF.jpg"
              alt="Master Sport FC Logo"
              width={48}
              height={48}
              className="rounded-full"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-primary hidden sm:block">MASTER SPORT FC</h1>
            <p className="text-xs text-foreground/80 hidden sm:block">Academia de Futbol</p>
          </div>
        </Link>

        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-semibold transition-all duration-300 ${
                isActive(link.href)
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-foreground/90 hover:text-primary hover:border-b-2 hover:border-primary/50 pb-1"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded hover:bg-muted transition"
          aria-label="Abrir menú"
        >
          <span className={`w-6 h-0.5 bg-primary transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-primary transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-primary transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t border-border/20 bg-card/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-semibold transition-all duration-300 py-2 px-4 rounded ${
                  isActive(link.href)
                    ? "text-primary bg-muted"
                    : "text-foreground/90 hover:text-primary hover:bg-muted/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
