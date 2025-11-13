"use client"

import { useEffect } from "react"
import Header from "@/components/header"
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react"

export default function Contacto() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61550574376985",
      icon: Facebook,
      color: "#1877F2",
      bgColor: "hover:bg-blue-100 dark:hover:bg-blue-900/30",
      iconColor: "text-blue-600",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/mastersportfc3/",
      icon: Instagram,
      color: "#E1306C",
      bgColor: "hover:bg-pink-100 dark:hover:bg-pink-900/30",
      iconColor: "text-pink-600",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@mastersportfc?is_from_webapp=1&sender_device=pc",
      icon: null,
      color: "#000000",
      bgColor: "hover:bg-gray-100 dark:hover:bg-gray-900/30",
      iconColor: "text-black dark:text-white",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Títulos */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4">Contacto</h1>
            <p className="text-base sm:text-lg lg:text-xl text-foreground/80 font-light">
              Ponte en contacto con Master Sport FC
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 lg:mb-20">
            {/* Teléfono */}
            <div className="flex flex-col items-center text-center p-6 sm:p-8 bg-card rounded-xl border border-border/50 transition hover:border-primary/50">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <Phone className="text-primary w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="font-bold text-foreground text-lg sm:text-xl mb-2">Teléfono</h3>
              <a
                href="tel:+51918701652"
                className="text-primary hover:text-primary/80 transition font-semibold text-sm sm:text-base"
              >
                +51 918 701 652
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center text-center p-6 sm:p-8 bg-card rounded-xl border border-border/50 transition hover:border-primary/50">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <Mail className="text-primary w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="font-bold text-foreground text-lg sm:text-xl mb-2">Email</h3>
              <a
                href="mailto:info@mastersportfc.com"
                className="text-primary hover:text-primary/80 transition font-semibold text-sm sm:text-base break-all"
              >
                info@mastersportfc.com
              </a>
            </div>

            {/* Ubicación */}
            <div className="flex flex-col items-center text-center p-6 sm:p-8 bg-card rounded-xl border border-border/50 transition hover:border-primary/50 sm:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <MapPin className="text-primary w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="font-bold text-foreground text-lg sm:text-xl mb-2">Sedes</h3>
              <p className="text-foreground/70 text-sm sm:text-base font-medium">Santa Anita - La Molina</p>
            </div>
          </div>

          {/* Horarios */}
          <div className="mb-12 sm:mb-16 lg:mb-20 p-6 sm:p-8 lg:p-10 bg-card rounded-xl border border-primary/20">
            <h2 className="font-bold text-primary text-xl sm:text-2xl mb-6 sm:mb-8">Horarios de Atención</h2>
            <div className="text-center p-6 sm:p-8 bg-background/50 rounded-lg border border-primary/30">
              <p className="font-semibold text-foreground text-base sm:text-lg mb-2">Lunes a Domingo</p>
              <p className="text-primary font-bold text-lg sm:text-xl">Disponible las 24 Horas</p>
              <p className="text-foreground/70 text-sm sm:text-base mt-3">Contacta con nosotros en cualquier momento</p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="font-bold text-primary text-xl sm:text-2xl mb-8 sm:mb-10">Síguenos en Redes Sociales</h2>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-10">
              {/* Facebook */}
              <a
                href={socialLinks[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
                aria-label="Facebook"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <Facebook className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-600" />
                </div>
                <span className="mt-3 sm:mt-4 font-semibold text-foreground text-sm sm:text-base">Facebook</span>
              </a>

              {/* Instagram */}
              <a
                href={socialLinks[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
                aria-label="Instagram"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <Instagram className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-pink-600" />
                </div>
                <span className="mt-3 sm:mt-4 font-semibold text-foreground text-sm sm:text-base">Instagram</span>
              </a>

              {/* TikTok */}
              <a
                href={socialLinks[2].url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
                aria-label="TikTok"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gray-100 dark:bg-gray-900/30 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  {/* TikTok SVG Icon */}
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-black dark:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.96-.1z" />
                  </svg>
                </div>
                <span className="mt-3 sm:mt-4 font-semibold text-foreground text-sm sm:text-base">TikTok</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
