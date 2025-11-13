"use client"

import { useEffect } from "react"
import Header from "@/components/header"

const videos = [
  { id: "1", title: "Entrenamiento Futbol 1", filename: "video1.mp4" },
  { id: "2", title: "Entrenamiento Futbol 2", filename: "video2.mp4" },
  { id: "3", title: "Entrenamiento Futbol 3", filename: "video3.mp4" },
  { id: "4", title: "Técnica de Pases", filename: "video4.mp4" },
  { id: "5", title: "Técnica de Tiros", filename: "video5.mp4" },
  { id: "6", title: "Defensa Futbolística", filename: "video6.mp4" },
  { id: "7", title: "Posicionamiento", filename: "video7.mp4" },
  { id: "8", title: "Condición Física", filename: "video8.mp4" },
  { id: "9", title: "Partidos Amistosos 1", filename: "video9.mp4" },
  { id: "10", title: "Partidos Amistosos 2", filename: "video10.mp4" },
  { id: "11", title: "Master Sport Highlights", filename: "video11.mp4" },
  { id: "12", title: "Competiciones", filename: "video12.mp4" },
  { id: "13", title: "Entrenamientos Santa Anita", filename: "video13.mp4" },
  { id: "14", title: "Entrenamientos La Molina", filename: "video14.mp4" },
  { id: "15", title: "Academia Master Sport FC", filename: "video15.mp4" },
]

export default function Gallery() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4 font-serif">
              Galería de Videos
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-foreground/80 font-light">
              Conoce nuestras instalaciones, entrenamientos y momentos especiales de Master Sport FC
            </p>
          </div>

          {/* Video Grid - Fully Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {videos.map((video) => (
              <div
                key={video.id}
                className="group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-card border border-border/50 hover:border-primary/50"
              >
                {/* Video Container */}
                <div className="relative w-full bg-black aspect-video overflow-hidden">
                  <video
                    src={`/videos/${video.filename}`}
                    title={video.title}
                    className="w-full h-full object-cover"
                    controls
                    preload="lazy"
                  />
                </div>

                {/* Video Title */}
                <div className="p-3 sm:p-4 lg:p-5">
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-foreground group-hover:text-primary transition line-clamp-2">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Info Section */}
          <div className="mt-12 sm:mt-16 lg:mt-20 p-6 sm:p-8 lg:p-10 bg-card border-2 border-primary/30 rounded-xl text-center">
            <p className="text-base sm:text-lg text-foreground mb-3">
              ¿Quieres más información? Contáctanos directamente
            </p>
            <a
              href="tel:+51918701652"
              className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition text-sm sm:text-base"
            >
              Llamar Ahora
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
