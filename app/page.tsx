"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import LoadingScreen from "@/components/loading-screen"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Bienvenido a Master Sport FC",
      subtitle: "Academia de Fútbol Profesional",
      image: "/soccer-field-professional.jpg",
    },
    {
      title: "Excelencia en Formación",
      subtitle: "Entrenadores Certificados",
      image: "/soccer-training-academy.jpg",
    },
    {
      title: "Únete a Nuestra Comunidad",
      subtitle: "Sedes en Santa Anita y La Molina",
      image: "/young-soccer-players-team.jpg",
    },
  ]

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Carousel - Fully Responsive */}
          <div className="mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-lg sm:rounded-2xl shadow-lg sm:shadow-2xl">
              {slides.map((slide, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    idx === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-2 sm:mb-4 font-serif tracking-tight">
                      {slide.title}
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-secondary/90 font-light">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              ))}

              {/* Carousel Indicators */}
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`transition-all ${
                      idx === currentSlide
                        ? "bg-primary w-6 sm:w-8 h-2"
                        : "bg-primary/50 hover:bg-primary/70 w-2 h-2 sm:w-2.5 sm:h-2.5"
                    } rounded-full`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Main Message - Responsive Text Sizing */}
          <div className="mb-12 sm:mb-16 lg:mb-20 animate-slide-in">
            <div className="bg-card border-2 border-primary/50 rounded-lg sm:rounded-2xl p-6 sm:p-10 lg:p-16 shadow-lg">
              <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6 font-serif tracking-tight">
                  Atención: GRAN CONVOCATORIA
                </h2>
                <div className="w-12 sm:w-16 h-1 bg-primary mx-auto mb-6 sm:mb-8" />
              </div>

              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12 max-w-3xl mx-auto">
                <p className="text-base sm:text-lg md:text-xl text-foreground leading-relaxed">
                  ¿Eres un apasionado del fútbol? ¿Sientes la pasión en cada latido de tu corazón cada vez que el balón
                  toca la red?
                </p>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-primary leading-relaxed font-serif">
                  Entonces este es el momento que has estado esperando toda tu vida.
                </p>
                <p className="text-base sm:text-lg text-foreground leading-relaxed">
                  Demuestra tu talento. Demuestra que dominas el balón. Master Sport FC te espera para escribir tu
                  historia en el mundo del fútbol.
                </p>
              </div>

              <div className="bg-primary/20 text-foreground rounded-lg sm:rounded-xl p-6 sm:p-10 lg:p-12 mb-8 sm:mb-12 border-2 border-primary">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 font-serif text-primary">
                  Master Sport FC te espera
                </h3>
                <p className="text-base sm:text-lg mb-2 sm:mb-3 font-light">No lo pienses, ¡ÚNETE A LA FAMILIA!</p>
                <p className="text-sm sm:text-base font-light">
                  Únete a la Academia Master Sport FC y juntos hagamos historia en el mundo del fútbol. Inscripciones
                  abiertas, cupos limitados.
                </p>
              </div>

              {/* Buttons - Responsive Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-2xl mx-auto">
                <a
                  href="/inscribete"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-all duration-300 text-center border-2 border-primary hover:shadow-lg text-sm sm:text-base"
                >
                  Inscríbete Ahora
                </a>
                <a
                  href="/galeria"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-all duration-300 text-center text-sm sm:text-base"
                >
                  Ver Galería
                </a>
                <a
                  href="/contacto"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-all duration-300 text-center border-2 border-secondary text-sm sm:text-base"
                >
                  Contáctanos
                </a>
              </div>
            </div>
          </div>

          {/* Features Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 py-8 sm:py-12 lg:py-16">
            {[
              {
                icon: "⚽",
                title: "Entrenamiento Profesional",
                desc: "Coaches certificados con experiencia internacional",
              },
              { icon: "🏆", title: "Formación Integral", desc: "Desarrollo técnico, táctico y personal" },
              { icon: "👥", title: "Comunidad Unida", desc: "Familia de futbolistas apasionados" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="text-center p-6 sm:p-8 rounded-lg sm:rounded-xl bg-card border border-primary/30 hover:border-primary transition-all"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{item.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-foreground/80 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
