import type { Metadata } from "next"
import { DistanceConverter } from "@/components/distance-converter"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Conversor de Distancia - Kilómetros a Millas Online Gratis",
  description:
    "Convierte distancia de kilómetros a millas y viceversa al instante. Conversor de distancia online gratuito, preciso y fácil de usar. Ideal para viajes y navegación.",
  keywords: [
    "conversor distancia",
    "km a millas",
    "millas a km",
    "kilometros a millas",
    "convertir distancia",
    "calculadora distancia",
    "conversion longitud",
  ],
  alternates: {
    canonical: "https://conversortotal.vercel.app/conversor-distancia",
  },
}

export default function ConversorDistanciaPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <Button asChild variant="ghost" size="sm">
          <Link href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver
          </Link>
        </Button>
      </div>

      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Conversor de Distancia Online</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Convierte distancia entre kilómetros y millas de forma instantánea y precisa. Perfecto para viajes, navegación
          y planificación de rutas.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <DistanceConverter />
      </div>

      <div className="max-w-4xl mx-auto space-y-8 mt-12">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h2>¿Cómo convertir kilómetros a millas?</h2>
          <p>
            La conversión entre kilómetros y millas es fundamental para viajes internacionales y navegación. Utilizamos
            las fórmulas de conversión estándar:
          </p>
          <ul>
            <li>
              <strong>Kilómetros a Millas:</strong> mi = km × 0.621371
            </li>
            <li>
              <strong>Millas a Kilómetros:</strong> km = mi × 1.60934
            </li>
          </ul>

          <h3>Ejemplos de conversión de distancia:</h3>
          <ul>
            <li>1 km = 0.62 millas</li>
            <li>5 km = 3.11 millas</li>
            <li>10 km = 6.21 millas</li>
            <li>100 km = 62.14 millas</li>
            <li>1 milla = 1.61 km</li>
          </ul>

          <h3>¿Cuándo necesitas convertir distancia?</h3>
          <ul>
            <li>
              <strong>Viajes:</strong> Planificar rutas en diferentes países
            </li>
            <li>
              <strong>GPS:</strong> Entender distancias en mapas
            </li>
            <li>
              <strong>Deportes:</strong> Carreras y maratones
            </li>
            <li>
              <strong>Aviación:</strong> Distancias de vuelo
            </li>
            <li>
              <strong>Navegación:</strong> Rutas marítimas
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
