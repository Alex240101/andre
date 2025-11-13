"use client"

import { useEffect } from "react"
import Image from "next/image"

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete()
    }, 3000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center animate-fade-in">
        <div className="w-32 h-32 mx-auto mb-8 relative">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-11-12%20a%20las%2015.50.23_b50b406a-t2Jnnc1QIdukgsQ1jCRuwecMMxOetF.jpg"
            alt="Master Sport FC"
            width={128}
            height={128}
            className="rounded-full shadow-2xl"
          />
        </div>
        <h2 className="text-4xl font-bold text-primary mb-4">MASTER SPORT FC</h2>
        <p className="text-foreground text-lg mb-8">Academia de Futbol</p>
        <div className="flex justify-center gap-2">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce delay-100"></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce delay-200"></div>
        </div>
      </div>
    </div>
  )
}
