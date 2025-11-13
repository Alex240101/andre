"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  {
    url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&h=600&fit=crop",
    alt: "Campo de futbol profesional",
  },
  {
    url: "https://images.unsplash.com/photo-1518611505868-48510c2e022f?w=1200&h=600&fit=crop",
    alt: "Entrenamiento de futbol",
  },
  {
    url: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=1200&h=600&fit=crop",
    alt: "Jugadores de futbol en accion",
  },
]

export default function Carousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const next = () => setCurrent((prev) => (prev + 1) % images.length)
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length)

  return (
    <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={img.url || "/placeholder.svg"} alt={img.alt} fill className="object-cover" priority={idx === 0} />
        </div>
      ))}

      {/* Botones de navegación */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-primary-foreground p-2 rounded-full transition z-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-primary-foreground p-2 rounded-full transition z-10"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full transition ${
              idx === current ? "bg-secondary w-8" : "bg-primary-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
