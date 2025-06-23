import type { Metadata } from "next"
import { TemperatureConverter } from "@/components/temperature-converter"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Conversor de Temperatura - Celsius a Fahrenheit Online Gratis",
  description:
    "Convierte temperatura de Celsius a Fahrenheit y viceversa al instante. Conversor de temperatura online gratuito, preciso y fácil de usar. Resultados inmediatos.",
  keywords: [
    "conversor temperatura",
    "celsius a fahrenheit",
    "fahrenheit a celsius",
    "convertir temperatura",
    "calculadora temperatura",
    "grados celsius",
    "grados fahrenheit",
    "conversion temperatura online",
  ],
  alternates: {
    canonical: "https://conversortotal.vercel.app/conversor-temperatura",
  },
  openGraph: {
    title: "Conversor de Temperatura - Celsius a Fahrenheit",
    description: "Convierte temperatura de Celsius a Fahrenheit y viceversa al instante. Gratis y preciso.",
    url: "https://conversortotal.vercel.app/conversor-temperatura",
  },
}

export default function ConversorTemperaturaPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <Button asChild variant="ghost" size="sm">
          <Link href="/unidades">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a Conversores
          </Link>
        </Button>
      </div>

      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Conversor de Temperatura Online</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Convierte temperatura entre Celsius y Fahrenheit de forma instantánea y precisa. Ideal para cocina, ciencia,
          viajes y uso diario.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <TemperatureConverterFlexible />
      </div>

      {/* SEO Content */}
      <div className="max-w-4xl mx-auto space-y-8 mt-12">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h2>¿Cómo convertir Celsius a Fahrenheit?</h2>
          <p>
            La conversión de temperatura entre Celsius y Fahrenheit es una de las más comunes en el mundo. Nuestro
            conversor utiliza las fórmulas matemáticas exactas para garantizar resultados precisos:
          </p>
          <ul>
            <li>
              <strong>Celsius a Fahrenheit:</strong> °F = (°C × 9/5) + 32
            </li>
            <li>
              <strong>Fahrenheit a Celsius:</strong> °C = (°F - 32) × 5/9
            </li>
          </ul>

          <h3>Ejemplos de conversión de temperatura:</h3>
          <ul>
            <li>0°C = 32°F (punto de congelación del agua)</li>
            <li>100°C = 212°F (punto de ebullición del agua)</li>
            <li>37°C = 98.6°F (temperatura corporal normal)</li>
            <li>20°C = 68°F (temperatura ambiente cómoda)</li>
          </ul>

          <h3>¿Cuándo necesitas convertir temperatura?</h3>
          <ul>
            <li>
              <strong>Cocina:</strong> Recetas internacionales con diferentes escalas
            </li>
            <li>
              <strong>Viajes:</strong> Entender el clima en otros países
            </li>
            <li>
              <strong>Ciencia:</strong> Experimentos y cálculos científicos
            </li>
            <li>
              <strong>Medicina:</strong> Interpretar termómetros de diferentes escalas
            </li>
            <li>
              <strong>Clima:</strong> Comparar temperaturas mundiales
            </li>
          </ul>

          <h3>Ventajas de nuestro conversor de temperatura:</h3>
          <ul>
            <li>
              ✅ <strong>Instantáneo:</strong> Resultados mientras escribes
            </li>
            <li>
              ✅ <strong>Preciso:</strong> Fórmulas matemáticas exactas
            </li>
            <li>
              ✅ <strong>Gratuito:</strong> Sin registros ni pagos
            </li>
            <li>
              ✅ <strong>Fácil:</strong> Interfaz intuitiva y simple
            </li>
            <li>
              ✅ <strong>Compartir:</strong> Copia o envía por WhatsApp
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
