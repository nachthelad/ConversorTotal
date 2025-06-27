import type { Metadata } from "next"
import { WeightConverter } from "@/components/weight-converter"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Conversor de Peso - Kilogramos a Libras Online Gratis",
  description:
    "Convierte peso de kilogramos a libras y viceversa al instante. Conversor de peso y masa online gratuito, preciso y fácil de usar. Ideal para dietas, ejercicio y viajes.",
  keywords: [
    "conversor peso",
    "kg a libras",
    "libras a kg",
    "kilogramos a libras",
    "convertir peso",
    "calculadora peso",
    "conversion masa",
    "peso corporal",
  ],
  alternates: {
    canonical: "https://conversortotal.online/conversor-peso",
  },
  openGraph: {
    title: "Conversor de Peso - Kilogramos a Libras",
    description: "Convierte peso de kilogramos a libras y viceversa al instante. Gratis y preciso.",
    url: "https://conversortotal.online/conversor-peso",
  },
}

export default function ConversorPesoPage() {
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
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Conversor de Peso y Masa Online</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Convierte peso entre kilogramos y libras de forma instantánea y precisa. Perfecto para dietas, ejercicio,
          viajes y uso médico.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <WeightConverter />
      </div>

      {/* SEO Content Mejorado */}
      <div className="max-w-4xl mx-auto space-y-8 mt-12">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-2">Conversión de Peso: Kilogramos y Libras</h2>
          <p>
            Convertir entre <strong>kilogramos (kg)</strong> y <strong>libras (lbs)</strong> es fundamental para dietas, ejercicio, viajes y uso médico. Utiliza nuestro conversor para obtener resultados instantáneos y precisos.
          </p>

          <h3 className="text-xl font-semibold mt-6">Fórmulas de Conversión</h3>
          <ul>
            <li>
              <strong>Kilogramos a Libras:</strong> <code>lbs = kg × 2.20462</code>
            </li>
            <li>
              <strong>Libras a Kilogramos:</strong> <code>kg = lbs × 0.453592</code>
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Ejemplos Prácticos</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 my-4">
            <div className="bg-muted rounded-lg p-4 text-center">
              <div className="font-bold text-lg">1 kg</div>
              <div className="text-muted-foreground">= 2.20 lbs</div>
            </div>
            <div className="bg-muted rounded-lg p-4 text-center">
              <div className="font-bold text-lg">5 kg</div>
              <div className="text-muted-foreground">= 11.02 lbs</div>
            </div>
            <div className="bg-muted rounded-lg p-4 text-center">
              <div className="font-bold text-lg">10 kg</div>
              <div className="text-muted-foreground">= 22.05 lbs</div>
            </div>
            <div className="bg-muted rounded-lg p-4 text-center">
              <div className="font-bold text-lg">70 kg</div>
              <div className="text-muted-foreground">= 154.32 lbs</div>
              <div className="text-xs mt-1">Peso promedio adulto</div>
            </div>
            <div className="bg-muted rounded-lg p-4 text-center">
              <div className="font-bold text-lg">100 lbs</div>
              <div className="text-muted-foreground">= 45.36 kg</div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-6">¿Cuándo usar un conversor de peso?</h3>
          <ul>
            <li><strong>Fitness y Dietas:</strong> Seguimiento de peso corporal.</li>
            <li><strong>Viajes:</strong> Límites de equipaje en aerolíneas.</li>
            <li><strong>Medicina:</strong> Dosificación de medicamentos.</li>
            <li><strong>Cocina:</strong> Recetas internacionales.</li>
            <li><strong>Deportes:</strong> Categorías de peso en competencias.</li>
            <li><strong>Compras:</strong> Productos importados.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Diferencia entre peso y masa</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div className="bg-muted/50 rounded-lg p-4">
              <strong>Masa:</strong> Cantidad de materia (kg, libras)
            </div>
            <div className="bg-muted/50 rounded-lg p-4">
              <strong>Peso:</strong> Fuerza gravitacional sobre la masa (Newtons)
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
