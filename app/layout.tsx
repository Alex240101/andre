import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Master Sport FC | Academia de Fútbol Profesional en Lima - Santa Anita y La Molina",
  description:
    "Academia de fútbol profesional Master Sport FC. Entrenamiento de calidad en Santa Anita y La Molina, Lima. Clases para niños, jóvenes y adultos. Inscripciones abiertas con cupos limitados.",
  keywords: [
    // Términos principales
    "academia de futbol lima",
    "escuela de futbol profesional",
    "Master Sport FC",
    "futbol santa anita",
    "futbol la molina",

    // Ubicaciones específicas
    "futbol santa anita lima",
    "futbol la molina lima",
    "canchas futbol santa anita",
    "canchas futbol la molina",
    "entrenamientos futbol lima",
    "clases futbol lima",

    // Tipos de programas
    "futbol para niños",
    "futbol para jóvenes",
    "futbol para adultos",
    "escuela futbol para principiantes",
    "escuela futbol avanzada",
    "entrenamiento futbol profesional",
    "curso futbol lima",
    "campamento futbol",
    "torneo futbol lima",

    // Técnica y entrenamiento
    "técnica futbol",
    "táctica futbol",
    "control de balón",
    "dribling futbol",
    "pase futbol",
    "tiro futbol",
    "posicionamiento futbol",
    "defensa futbol",
    "ataque futbol",
    "juego futbol",
    "estrategia futbol",
    "formación futbol",

    // Nivel de juego
    "futbol amateur",
    "futbol recreativo",
    "futbol competitivo",
    "futbol de alto rendimiento",
    "preparación futbol",
    "acondicionamiento futbol",

    // Entrenadores y desarrollo
    "entrenador futbol",
    "coach futbol",
    "entrenador profesional futbol",
    "desarrollo futbol",
    "formación deportiva",
    "mentalidad futbol",

    // Elementos del juego
    "balón futbol",
    "portero futbol",
    "defensa futbol",
    "centrocampista",
    "delantero futbol",
    "lateral futbol",
    "medio futbol",

    // Competiciones y eventos
    "liga futbol lima",
    "campeonato futbol",
    "partido futbol",
    "amistoso futbol",
    "encuentro futbol",

    // Características de los servicios
    "inscripciones abiertas futbol",
    "cupos limitados",
    "horarios flexibles futbol",
    "precio accesible futbol",
    "planes de pago futbol",
    "matricula futbol",
    "arancel futbol",

    // Beneficios
    "mejorar futbol",
    "aprender futbol",
    "entrenar futbol",
    "jugar futbol",
    "passion futbol",
    "pasión por el futbol",
    "familia futbol",
    "equipo futbol",
    "compañerismo",
    "disciplina deportiva",

    // Búsquedas locales
    "futbol santa anita canchas sport plaza",
    "futbol la molina javier prado",
    "futbol cerca de santa anita",
    "futbol cerca de la molina",
    "futbol este de lima",
    "futbol zona sur lima",

    // Horarios específicos
    "futbol lunes",
    "futbol martes",
    "futbol miércoles",
    "futbol jueves",
    "futbol viernes",
    "futbol sabado",
    "futbol domingo",
    "futbol mañana",
    "futbol tarde",
    "futbol noche",
    "futbol 8pm",
    "futbol 9pm",

    // Métodos de pago
    "pago futbol yape",
    "pago futbol tarjeta",
    "pago futbol efectivo",
    "inscripcion futbol online",

    // Extras
    "comunidad futbol",
    "eventos futbol",
    "galeria futbol",
    "fotos futbol",
    "videos futbol",
    "contacto futbol",
    "ubicacion futbol",
    "horario futbol",
    "disponibilidad futbol",

    // Palabras de intención
    "inscribirse futbol",
    "registrarse futbol",
    "unirse futbol",
    "jugar futbol en lima",
    "entrenar futbol en lima",
    "aprender futbol en lima",
    "mejorar futbol en lima",

    // Variaciones
    "fútbol",
    "futbol",
    "football",
    "soccer",
    "academia",
    "escuela",
    "entrenamiento",
    "clase",
    "curso",
    "taller",

    // Competidores y similares
    "academia futbol lima",
    "escuela futbol lima",
    "club futbol lima",
    "asociacion futbol",
    "federacion futbol",
    "liga futbol",

    // Preguntas frecuentes
    "como inscribirse futbol",
    "cuanto cuesta futbol",
    "donde entrenar futbol",
    "mejor academia futbol lima",
    "futbol para mi hijo",
    "futbol para adultos lima",
    "donde aprender futbol",
    "como mejorar futbol",
    "tecnicas futbol",
    "ejercicios futbol",

    // Características adicionales
    "canchas profesionales",
    "entrenadores certificados",
    "programa estructurado",
    "evaluación continua",
    "torneos internos",
    "partidos amistosos",

    // Más búsquedas específicas
    "master sport fc",
    "master sport fc lima",
    "master sport fc santa anita",
    "master sport fc la molina",
    "academia master sport",
    "futbol master sport",

    // Edades
    "futbol ninos 5 anos",
    "futbol ninos 6 anos",
    "futbol ninos 7 anos",
    "futbol ninos 8 anos",
    "futbol ninos 9 anos",
    "futbol ninos 10 anos",
    "futbol adolescentes",
    "futbol jovenes",
    "futbol adultos",

    // Modalidades
    "futbol 5",
    "futbol 7",
    "futbol 11",
    "futbol sala",
    "futbol playa",

    // Posiciones
    "entrenamiento porteros",
    "entrenamiento defensores",
    "entrenamiento mediocampistas",
    "entrenamiento delanteros",
    "posicion portero",
    "posicion defensa",
    "posicion delantero",

    // Habilidades
    "control de balon futbol",
    "regateo futbol",
    "tiro clasificado",
    "pase corto",
    "pase largo",
    "recepcion balon",
    "visión de juego",
    "lectura de juego",
    "movimientos sin balon",

    // Condición física
    "resistencia futbol",
    "velocidad futbol",
    "fuerza futbol",
    "agilidad futbol",
    "coordinacion futbol",
    "equilibrio futbol",
    "capacidad cardiovascular",

    // Aspecto psicológico
    "mentalidad ganadora futbol",
    "autoestima futbol",
    "trabajo en equipo",
    "liderazgo futbol",
    "concentración futbol",
    "motivación futbol",

    // Aspectos administrativos
    "registro futbol",
    "afiliacion futbol",
    "licencia futbol",
    "carnet futbol",

    // Instalaciones
    "cancha futbol pasto",
    "cancha futbol sintetico",
    "vestiarios",
    "servicios futbol",
    "estacionamiento",

    // Especifico de redes y presencia
    "instagram master sport fc",
    "tiktok master sport fc",
    "facebook master sport fc",
    "redes sociales futbol",
    "contactenos futbol",
    "llamenos futbol",
    "escribenos futbol",
    "chat futbol",
    "whatsapp futbol",

    // Búsquedas combinadas
    "mejor futbol en santa anita",
    "mejor futbol en la molina",
    "futbol cercano mi ubicacion",
    "futbol recomendado lima",
    "futbol con buenas instalaciones",
    "futbol con buenos entrenadores",
    "futbol barato lima",
    "futbol economico",
    "futbol de calidad",
    "futbol confiable",

    // Contenido visual
    "fotos futbol lima",
    "videos futbol entrenamiento",
    "galeria futbol",
    "streaming futbol",
    "partido en vivo futbol",

    // Otro idioma (búsquedas posibles)
    "football academy lima",
    "soccer training lima",
    "football school santa anita",
    "soccer lessons",
    "football coaching",

    // Marca personal
    "mastersportfc",
    "master sport",
    "master futbol",

    // Emergencias/urgencia
    "futbol disponible ahora",
    "futbol inscripcion rapida",
    "futbol ultimo minuto",
    "futbol sin requisitos",

    // Producto/Servicio específicos
    "entrenamiento especifico futbol",
    "plan entrenamiento futbol",
    "programa futbol",
    "sistema futbol",
    "metodologia futbol",

    // Certificaciones
    "futbol certificado",
    "entrenador certificado",
    "programa oficial futbol",

    // Contexto temporal
    "futbol 2024",
    "futbol 2025",
    "futbol nuevo",
    "futbol actual",

    // Inclusividad
    "futbol para todos",
    "futbol sin discriminacion",
    "futbol inclusivo",
    "futbol accesible",

    // Más variaciones de ubicación
    "canchas sport plaza santa anita",
    "cancha javier prado la molina",
    "futbol deportop la molina",
    "futbol canchas sport santa anita",

    // Transporte/Accesibilidad
    "futbol facil de llegar",
    "futbol cerca de metro",
    "futbol estacionamiento",
    "futbol transporte publico",

    // Reclutamiento/Representación
    "talento futbol",
    "scout futbol",
    "cantera futbol",
    "promesas futbol",
    "seleccion futbol",

    // Tipo de coaching
    "coaching futbol",
    "mentoring futbol",
    "asesoramiento futbol",
    "consejeria futbol",

    // Comparativas
    "futbol vs otro deporte",
    "mejor academia futbol",
    "futbol profesional",
    "futbol amateur",

    // Historias de éxito
    "exito futbol",
    "logros futbol",
    "historia master sport",
    "testimonios futbol",

    // Futuro
    "futbol futuro",
    "carrera futbol",
    "profesion futbol",
    "oportunidad futbol",

    // Adicionales
    "diversión futbol",
    "entretenimiento futbol",
    "pasatiempo futbol",
    "hobby futbol",
    "actividad futbol",
    "deporte futbol",
    "ejercicio futbol",
    "fitness futbol",
    "salud futbol",
    "bienestar futbol",
    "recreacion futbol",
  ].slice(0, 1000),
  openGraph: {
    title: "Master Sport FC | Academia de Fútbol Profesional",
    description:
      "Únete a la mejor academia de fútbol en Lima. Entrenamientos profesionales en Santa Anita y La Molina.",
    type: "website",
    locale: "es_PE",
    url: "https://andre-dusky.vercel.app",
    siteName: "Master Sport FC",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-11-12%20a%20las%2015.50.23_b50b406a-t2Jnnc1QIdukgsQ1jCRuwecMMxOetF.jpg",
        width: 1200,
        height: 1200,
        alt: "Master Sport FC Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Sport FC | Academia de Fútbol",
    description: "Entrenamientos de fútbol profesional en Lima",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Deporte",
  authors: [{ name: "Master Sport FC" }],
  creator: "Master Sport FC",
  publisher: "Master Sport FC",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#702828" />
        <meta name="language" content="es" />
        <meta name="author" content="Master Sport FC" />
        <meta name="copyright" content="Master Sport FC" />
        <meta name="generator" content="Next.js" />
        <link rel="canonical" href="https://andre-dusky.vercel.app" />
        <link rel="alternate" hrefLang="es-PE" href="https://andre-dusky.vercel.app" />
        <link rel="sitemap" href="/sitemap.xml" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
              window.addEventListener('beforeunload', () => {
                window.scrollTo(0, 0);
              });
            `,
          }}
        />

        {/* Schema.org Structured Data para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsActivityLocation",
              name: "Master Sport FC",
              description: "Academia de fútbol profesional en Lima",
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-11-12%20a%20las%2015.50.23_b50b406a-t2Jnnc1QIdukgsQ1jCRuwecMMxOetF.jpg",
              address: [
                {
                  "@type": "PostalAddress",
                  streetAddress: "Canchas Sport Plaza",
                  addressLocality: "Santa Anita",
                  addressRegion: "Lima",
                  postalCode: "Lima",
                  addressCountry: "PE",
                },
                {
                  "@type": "PostalAddress",
                  streetAddress: "Javier Prado",
                  addressLocality: "La Molina",
                  addressRegion: "Lima",
                  postalCode: "Lima",
                  addressCountry: "PE",
                },
              ],
              telephone: "+51 918701652",
              sameAs: [
                "https://www.facebook.com/profile.php?id=61550574376985",
                "https://www.instagram.com/mastersportfc3/",
                "https://www.tiktok.com/@mastersportfc",
              ],
              priceRange: "$$",
              areaServed: "Lima",
            }),
          }}
        />
      </head>
      <body className={`${geist.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
