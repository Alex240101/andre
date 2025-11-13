"use client"

import { Suspense, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Header from "@/components/header"

function PaymentContent() {
  const searchParams = useSearchParams()
  const [nombreCompleto, setNombreCompleto] = useState("")

  const sede = searchParams.get("sede") || ""
  const plan = searchParams.get("plan") || ""
  const precio = searchParams.get("precio") || ""

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  const handleEnviarComprobante = () => {
    if (!nombreCompleto.trim()) {
      alert("Por favor, ingresa tu nombre completo")
      return
    }

    const mensaje = `Hola! Soy *${nombreCompleto}*. Acabo de realizar el pago de *${precio} soles* para el plan de *${plan}* en la sede *${sede}*. Adjunto mi comprobante de pago.`
    const whatsappUrl = `https://wa.me/51918701652?text=${encodeURIComponent(mensaje)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12 animate-fade-in text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-serif tracking-tight">Completar Pago</h1>
          <p className="text-lg text-foreground">Último paso para asegurar tu inscripción</p>
        </div>

        <div className="bg-card border-2 border-primary/50 rounded-xl p-8 md:p-12 shadow-lg animate-slide-in">
          {/* Payment details */}
          <div className="mb-8 pb-8 border-b border-border">
            <h2 className="text-2xl font-bold text-primary mb-6 font-serif">Resumen de tu Inscripción</h2>
            <div className="space-y-3 text-foreground">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Sede:</span>
                <span>{sede}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Plan:</span>
                <span>{plan}</span>
              </div>
              <div className="flex justify-between items-center text-xl">
                <span className="font-bold text-primary">Total a Pagar:</span>
                <span className="font-bold text-primary">S/ {precio}</span>
              </div>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6 font-serif text-center">Paga con Yape</h2>
            <div className="bg-background/50 rounded-xl p-8 flex justify-center">
              <div className="max-w-sm w-full">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-11-12%20a%20las%2015.45.37_e763b43b-4YtJ60y1mnE6wrmvipfh6OOGcnHBc5.jpg"
                  alt="Código QR Yape - Saint Andre Pineda Gomez"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-4">Instrucciones de Pago</h3>
            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-lg space-y-4">
              <div className="flex items-start gap-3">
                <span className="bg-primary text-primary-foreground font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  1
                </span>
                <p className="text-foreground">
                  <strong>Escanea el código QR</strong> con tu aplicación Yape. Te aparecerá el nombre:{" "}
                  <span className="text-primary font-semibold">Saint Andre Pineda Gomez</span>
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="bg-primary text-primary-foreground font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  2
                </span>
                <p className="text-foreground">
                  <strong>Digita el monto</strong> correspondiente a tu plan seleccionado:{" "}
                  <span className="text-primary font-bold text-xl">S/ {precio}</span>
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="bg-primary text-primary-foreground font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  3
                </span>
                <p className="text-foreground">
                  <strong>Completa la transacción</strong> y toma una captura de pantalla del comprobante
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="bg-primary text-primary-foreground font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  4
                </span>
                <p className="text-foreground">
                  <strong>Envía el comprobante</strong> al WhatsApp{" "}
                  <span className="text-primary font-semibold">918 701 652</span> o presiona el botón de abajo
                </p>
              </div>
            </div>
          </div>

          {/* Name input and WhatsApp button */}
          <div className="space-y-6">
            <div>
              <label htmlFor="nombre" className="block text-foreground font-semibold mb-3 text-lg">
                Tu Nombre Completo
              </label>
              <input
                id="nombre"
                type="text"
                value={nombreCompleto}
                onChange={(e) => setNombreCompleto(e.target.value)}
                placeholder="Ejemplo: Juan Pérez García"
                className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background text-foreground focus:border-primary focus:outline-none transition-colors"
              />
            </div>

            <button
              onClick={handleEnviarComprobante}
              className="w-full bg-primary text-primary-foreground font-bold py-4 px-6 rounded-lg hover:bg-primary/90 transition-all duration-300 border-2 border-primary hover:shadow-lg text-lg flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              ENVIAR COMPROBANTE
            </button>

            <p className="text-center text-sm text-muted-foreground">
              Al hacer clic, se abrirá WhatsApp con un mensaje prellenado para facilitar tu envío
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-center text-foreground">
              ¿Necesitas ayuda?{" "}
              <a
                href="https://wa.me/51918701652"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                Contáctanos por WhatsApp
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default function PagoPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <p className="text-primary text-xl">Cargando...</p>
        </div>
      }
    >
      <PaymentContent />
    </Suspense>
  )
}
