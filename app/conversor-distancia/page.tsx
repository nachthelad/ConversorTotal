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
    canonical: "https://conversortotal.online/conversor-distancia",
  },
  openGraph: {
    title: "Conversor de Distancia - Kilómetros a Millas",
    description: "Convierte distancias de metros a kilometros y viceversa al instante. Gratis y preciso.",
    url: "https://conversortotal.online/conversor-almacenamiento",
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
          <h2 className="text-2xl font-bold mb-2">Conversión de Distancia: Kilómetros y Millas</h2>
          <p>
            Convertir entre <strong>kilómetros (km)</strong> y <strong>millas (mi)</strong> es fundamental para viajes, deportes y navegación. Utiliza nuestro conversor para obtener resultados instantáneos y precisos.
          </p>

          <h3 className="text-xl font-semibold mt-6">Fórmulas de Conversión</h3>
          <ul>
            <li>
              <strong>Kilómetros a Millas:</strong> <code>mi = km × 0.621371</code>
            </li>
            <li>
              <strong>Millas a Kilómetros:</strong> <code>km = mi × 1.60934</code>
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Ejemplos Prácticos</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 my-4">
            <div className="bg-muted rounded-lg p-4 text-center">
              <div className="font-bold text-lg">1 km</div>
              <div className="text-muted-foreground">= 0.62 mi</div>
            </div>
            <div className="bg-muted rounded-lg p-4 text-center">
              <div className="font-bold text-lg">5 km</div>
              <div className="text-muted-foreground">= 3.11 mi</div>
            </div>
            <div className="bg-muted rounded-lg p-4 text-center">
              <div className="font-bold text-lg">10 km</div>
              <div className="text-muted-foreground">= 6.21 mi</div>
            </div>
            <div className="bg-muted rounded-lg p-4 text-center">
              <div className="font-bold text-lg">100 km</div>
              <div className="text-muted-foreground">= 62.14 mi</div>
            </div>
            <div className="bg-muted rounded-lg p-4 text-center">
              <div className="font-bold text-lg">1 mi</div>
              <div className="text-muted-foreground">= 1.61 km</div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-6">¿Cuándo usar un conversor de distancia?</h3>
          <ul>
            <li><strong>Viajes:</strong> Planificar rutas en diferentes países.</li>
            <li><strong>GPS:</strong> Entender distancias en mapas.</li>
            <li><strong>Deportes:</strong> Carreras y maratones.</li>
            <li><strong>Aviación:</strong> Distancias de vuelo.</li>
            <li><strong>Navegación:</strong> Rutas marítimas.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
