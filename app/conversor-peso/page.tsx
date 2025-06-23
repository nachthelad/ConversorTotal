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
    canonical: "https://conversortotal.vercel.app/conversor-peso",
  },
  openGraph: {
    title: "Conversor de Peso - Kilogramos a Libras",
    description: "Convierte peso de kilogramos a libras y viceversa al instante. Gratis y preciso.",
    url: "https://conversortotal.vercel.app/conversor-peso",
  },
}

export default function ConversorPesoPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <Button asChild variant="ghost" size="sm">
          <Link href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a Conversores
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

      {/* SEO Content */}
      <div className="max-w-4xl mx-auto space-y-8 mt-12">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h2>¿Cómo convertir kilogramos a libras?</h2>
          <p>
            La conversión entre kilogramos y libras es esencial en muchas situaciones cotidianas. Nuestro conversor
            utiliza la relación exacta entre estas unidades de masa:
          </p>
          <ul>
            <li>
              <strong>Kilogramos a Libras:</strong> lbs = kg × 2.20462
            </li>
            <li>
              <strong>Libras a Kilogramos:</strong> kg = lbs × 0.453592
            </li>
          </ul>

          <h3>Ejemplos de conversión de peso:</h3>
          <ul>
            <li>1 kg = 2.20 lbs</li>
            <li>5 kg = 11.02 lbs</li>
            <li>10 kg = 22.05 lbs</li>
            <li>70 kg = 154.32 lbs (peso promedio adulto)</li>
            <li>100 lbs = 45.36 kg</li>
          </ul>

          <h3>¿Cuándo necesitas convertir peso?</h3>
          <ul>
            <li>
              <strong>Fitness y Dietas:</strong> Seguimiento de peso corporal
            </li>
            <li>
              <strong>Viajes:</strong> Límites de equipaje en aerolíneas
            </li>
            <li>
              <strong>Medicina:</strong> Dosificación de medicamentos
            </li>
            <li>
              <strong>Cocina:</strong> Recetas internacionales
            </li>
            <li>
              <strong>Deportes:</strong> Categorías de peso en competencias
            </li>
            <li>
              <strong>Compras:</strong> Productos importados
            </li>
          </ul>

          <h3>Diferencia entre peso y masa:</h3>
          <p>Aunque comúnmente usamos "peso" y "masa" indistintamente, técnicamente son diferentes:</p>
          <ul>
            <li>
              <strong>Masa:</strong> Cantidad de materia (kg, libras)
            </li>
            <li>
              <strong>Peso:</strong> Fuerza gravitacional sobre la masa (Newtons)
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
