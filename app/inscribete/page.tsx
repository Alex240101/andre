"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/header"

export default function Inscribete() {
  const router = useRouter()
  const [selectedSede, setSelectedSede] = useState<"santa-anita" | "santa-anita-miercoles" | "la-molina" | null>(null)

  const sedes = {
    "santa-anita": {
      nombre: "Santa Anita - Martes y Jueves",
      ubicacion: "Canchas Sport Plaza - Frente al Moll",
      horarios: "Martes y Jueves",
      horario_detalle: "9:00 PM a 11:00 PM",
      precios: [
        { meses: "1 MES", precio: "S/180", precioNumero: 180, original: "S/200" },
        { meses: "2 MESES", precio: "S/320", precioNumero: 320, original: "S/400" },
        { meses: "3 MESES", precio: "S/480", precioNumero: 480, original: "S/540" },
      ],
      flyer:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-11-12%20a%20las%2015.50.22_5ee8a678-Uyh2jPbhNingdfxxWRgHsyjzt5lETA.jpg",
    },
    "santa-anita-miercoles": {
      nombre: "Santa Anita - Miércoles y Viernes",
      ubicacion: "Canchas Sport Plaza - Frente al Moll",
      horarios: "Miércoles y Viernes",
      horario_detalle: "8:00 PM a 9:00 PM",
      precios: [
        { meses: "1 MES", precio: "S/130", precioNumero: 130, original: "S/150" },
        { meses: "2 MESES", precio: "S/240", precioNumero: 240, original: "S/300" },
        { meses: "3 MESES", precio: "S/350", precioNumero: 350, original: "S/450" },
      ],
      flyer:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-11-12%20a%20las%2015.50.22_340ace03-aAzm5YCEF5Ka0tH9EMr5xMGJjNFZFu.jpg",
    },
    "la-molina": {
      nombre: "La Molina",
      ubicacion: "Javier Prado Canchas Deportop - Referencia Costado de Metro",
      horarios: "Lunes y Miércoles",
      horario_detalle: "8:00 PM a 9:00 PM",
      precios: [
        { meses: "1 MES", precio: "S/150", precioNumero: 150, original: "S/170" },
        { meses: "2 MESES", precio: "S/250", precioNumero: 250, original: "S/300" },
        { meses: "3 MESES", precio: "S/300", precioNumero: 300, original: "S/450" },
      ],
      flyer:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-11-12%20a%20las%2015.50.23_6e26a28e-sUsHi9yTrZYfimzr49TxXRzKZFHkBR.jpg",
    },
  }

  const handlePlanSelection = (plan: { meses: string; precio: string; precioNumero: number }) => {
    if (selectedSede) {
      const sedeData = sedes[selectedSede]
      router.push(
        `/pago?sede=${encodeURIComponent(sedeData.nombre)}&plan=${encodeURIComponent(plan.meses)}&precio=${plan.precioNumero}`,
      )
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4 font-serif tracking-tight">
              Inscríbete Ahora
            </h1>
            <p className="text-base sm:text-lg text-foreground">
              Selecciona tu sede preferida y elige tu plan de entrenamiento
            </p>
          </div>

          {/* Flyers Section - Responsive Grid */}
          <div className="mb-12 sm:mb-16 lg:mb-20 bg-card border-2 border-primary/50 rounded-lg sm:rounded-xl overflow-hidden shadow-lg">
            <div className="p-6 sm:p-8 lg:p-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 sm:mb-8 font-serif">
                Flyers Informativos
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                <div className="bg-background rounded-lg p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold text-primary mb-4">Santa Anita - Martes y Jueves</h3>
                  <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96">
                    <img
                      src={sedes["santa-anita"].flyer || "/placeholder.svg"}
                      alt="Flyer Santa Anita Martes Jueves"
                      className="w-full h-full object-contain rounded"
                    />
                  </div>
                </div>

                <div className="bg-background rounded-lg p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold text-primary mb-4">
                    Santa Anita - Miércoles y Viernes
                  </h3>
                  <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96">
                    <img
                      src={sedes["santa-anita-miercoles"].flyer || "/placeholder.svg"}
                      alt="Flyer Santa Anita Miércoles Viernes"
                      className="w-full h-full object-contain rounded"
                    />
                  </div>
                </div>

                <div className="bg-background rounded-lg p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
                  <h3 className="text-base sm:text-lg font-bold text-primary mb-4">La Molina</h3>
                  <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96">
                    <img
                      src={sedes["la-molina"].flyer || "/placeholder.svg"}
                      alt="Flyer La Molina"
                      className="w-full h-full object-contain rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sede Selection - Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20">
            {(Object.entries(sedes) as [string, (typeof sedes)["santa-anita"]][]).map(([key, sede]) => (
              <button
                key={key}
                onClick={() => setSelectedSede(key as "santa-anita" | "santa-anita-miercoles" | "la-molina")}
                className={`p-6 sm:p-8 rounded-lg sm:rounded-xl border-2 transition-all duration-300 text-left text-sm sm:text-base ${
                  selectedSede === key
                    ? "border-primary bg-card shadow-lg"
                    : "border-border hover:border-primary bg-card/50"
                }`}
              >
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4 font-serif">{sede.nombre}</h3>
                <p className="text-foreground mb-2 text-xs sm:text-sm">📍 {sede.ubicacion}</p>
                <p className="text-foreground font-semibold text-xs sm:text-sm">{sede.horarios}</p>
                <p className="text-primary font-bold text-xs sm:text-sm">{sede.horario_detalle}</p>
              </button>
            ))}
          </div>

          {/* Plans Section - Responsive */}
          {selectedSede && (
            <div className="space-y-8 sm:space-y-12 animate-slide-in">
              <div className="bg-card border-2 border-primary/50 rounded-lg sm:rounded-xl p-6 sm:p-10 lg:p-16 shadow-lg">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-6 sm:mb-8 lg:mb-10 font-serif">
                  {sedes[selectedSede].nombre}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4">Ubicación</h3>
                    <p className="text-base sm:text-lg text-foreground leading-relaxed">
                      {sedes[selectedSede].ubicacion}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4">Horarios</h3>
                    <p className="text-base sm:text-lg text-foreground">
                      <span className="font-semibold">{sedes[selectedSede].horarios}</span>
                    </p>
                    <p className="text-base sm:text-lg text-primary font-bold">{sedes[selectedSede].horario_detalle}</p>
                  </div>
                </div>

                <div className="mb-8 sm:mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 sm:mb-8 font-serif">
                    Planes de Inscripción
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                    {sedes[selectedSede].precios.map((plan, idx) => (
                      <div
                        key={idx}
                        className="bg-background/50 border-2 border-primary/50 rounded-lg sm:rounded-xl p-6 sm:p-8 text-center hover:shadow-lg transition-all hover:border-primary"
                      >
                        <p className="text-xs sm:text-sm text-primary font-bold mb-2 sm:mb-3 uppercase tracking-wide">
                          Promoción
                        </p>
                        <p className="text-base sm:text-lg font-bold text-foreground mb-3 sm:mb-4">{plan.meses}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground line-through mb-2 sm:mb-3">
                          Precio Regular {plan.original}
                        </p>
                        <p className="text-3xl sm:text-4xl font-bold text-primary mb-4 sm:mb-6 font-serif">
                          {plan.precio}
                        </p>
                        <button
                          onClick={() => handlePlanSelection(plan)}
                          className="w-full bg-primary text-primary-foreground font-bold py-2 sm:py-3 px-4 rounded-lg hover:bg-primary/90 transition-all duration-300 border border-primary hover:shadow-md text-sm sm:text-base"
                        >
                          Seleccionar Plan
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-primary/20 border-l-4 border-primary p-6 sm:p-8 rounded-lg">
                  <p className="text-foreground mb-2 sm:mb-3 font-semibold text-sm sm:text-base">
                    ✓ Inscripciones ABIERTAS - Cupos Limitados
                  </p>
                  <p className="text-foreground mb-2 text-xs sm:text-sm">
                    Aceptamos todas las tarjetas de crédito y débito
                  </p>
                  <p className="text-foreground text-xs sm:text-sm text-muted-foreground">
                    Para más información, contáctanos directamente
                  </p>
                </div>
              </div>
            </div>
          )}

          {!selectedSede && (
            <div className="text-center py-12 sm:py-16 bg-card border-2 border-primary/50 rounded-lg sm:rounded-xl">
              <p className="text-base sm:text-lg lg:text-xl text-foreground font-light">
                Selecciona una de nuestras sedes para ver los detalles completos y planes disponibles
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
