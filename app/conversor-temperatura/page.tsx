import type { Metadata } from "next"
import { TemperatureConverterFlexible } from "@/components/temperature-converter-flexible"
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
    canonical: "https://conversortotal.online/conversor-temperatura",
  },
  openGraph: {
    title: "Conversor de Temperatura - Celsius a Fahrenheit",
    description: "Convierte temperatura de Celsius a Fahrenheit y viceversa al instante. Gratis y preciso.",
    url: "https://conversortotal.online/conversor-temperatura",
  },
}

export default function ConversorTemperaturaPage() {
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
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Conversor de Temperatura Online</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Convierte temperatura entre Celsius y Fahrenheit de forma instantánea y precisa. Ideal para cocina, ciencia,
          viajes y uso diario.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <TemperatureConverterFlexible />
      </div>

      {/* SEO Content Mejorado */}
      <div className="max-w-4xl mx-auto space-y-8 mt-12">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-2">Conversión de Temperatura: Celsius y Fahrenheit</h2>
          <p>
            Convertir entre <strong>Celsius (°C)</strong> y <strong>Fahrenheit (°F)</strong> es esencial para cocina, ciencia, viajes y el día a día. Utiliza nuestro conversor para obtener resultados instantáneos y precisos, sin complicaciones.
          </p>

          <h3 className="text-xl font-semibold mt-6">Fórmulas de Conversión</h3>
          <ul>
            <li>
              <strong>Celsius a Fahrenheit:</strong> <code>°F = (°C × 9/5) + 32</code>
            </li>
            <li>
              <strong>Fahrenheit a Celsius:</strong> <code>°C = (°F - 32) × 5/9</code>
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Ejemplos Prácticos</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
            <div className="bg-muted rounded-lg p-4 text-center">
              <div className="font-bold text-lg">0°C</div>
              <div className="text-muted-foreground">= 32°F</div>
              <div className="text-xs mt-1">Congelación del agua</div>
            </div>
            <div className="bg-muted rounded-lg p-4 text-center">
              <div className="font-bold text-lg">100°C</div>
              <div className="text-muted-foreground">= 212°F</div>
              <div className="text-xs mt-1">Ebullición del agua</div>
            </div>
            <div className="bg-muted rounded-lg p-4 text-center">
              <div className="font-bold text-lg">37°C</div>
              <div className="text-muted-foreground">= 98.6°F</div>
              <div className="text-xs mt-1">Temperatura corporal</div>
            </div>
            <div className="bg-muted rounded-lg p-4 text-center">
              <div className="font-bold text-lg">20°C</div>
              <div className="text-muted-foreground">= 68°F</div>
              <div className="text-xs mt-1">Ambiente cómodo</div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-6">¿Cuándo usar un conversor de temperatura?</h3>
          <ul>
            <li><strong>Cocina:</strong> Recetas internacionales con diferentes escalas.</li>
            <li><strong>Viajes:</strong> Comprender el clima en otros países.</li>
            <li><strong>Ciencia:</strong> Experimentos y cálculos precisos.</li>
            <li><strong>Medicina:</strong> Interpretar termómetros de distintas escalas.</li>
            <li><strong>Clima:</strong> Comparar temperaturas globales.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Ventajas de nuestro conversor</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 !list-none !pl-0">
            <li className="flex items-center gap-2">
              <span className="text-green-600">✔️</span>
              <span><strong>Instantáneo:</strong> Resultados en tiempo real.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">✔️</span>
              <span><strong>Preciso:</strong> Fórmulas matemáticas exactas.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">✔️</span>
              <span><strong>Gratuito:</strong> Sin registros ni pagos.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">✔️</span>
              <span><strong>Fácil de usar:</strong> Interfaz intuitiva y simple.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">✔️</span>
              <span><strong>Compartir:</strong> Copia o envía resultados por WhatsApp.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-12">
        <h2 className="text-2xl font-bold mb-6 text-primary text-center">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {/* Pregunta 1 */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3 shadow-sm">
            <span className="mt-1 text-primary">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
            </span>
            <div>
              <h3 className="font-semibold text-lg mb-1">¿Cómo convierto Celsius a Fahrenheit?</h3>
              <p className="text-muted-foreground">Ingresa el valor en Celsius, selecciona “Fahrenheit” como unidad de destino y obtendrás el resultado al instante.</p>
            </div>
          </div>
          {/* Pregunta 2 */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3 shadow-sm">
            <span className="mt-1 text-primary">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
            </span>
            <div>
              <h3 className="font-semibold text-lg mb-1">¿Cuál es la fórmula para convertir Fahrenheit a Celsius?</h3>
              <p className="text-muted-foreground">La fórmula es: °C = (°F - 32) × 5/9.</p>
            </div>
          </div>
          {/* Pregunta 3 */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3 shadow-sm">
            <span className="mt-1 text-primary">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
            </span>
            <div>
              <h3 className="font-semibold text-lg mb-1">¿Puedo convertir Kelvin a Celsius?</h3>
              <p className="text-muted-foreground">Sí, selecciona “Kelvin” como unidad de origen y “Celsius” como destino para obtener la conversión.</p>
            </div>
          </div>
          {/* Pregunta 4 */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3 shadow-sm">
            <span className="mt-1 text-primary">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
            </span>
            <div>
              <h3 className="font-semibold text-lg mb-1">¿El conversor de temperatura es gratuito?</h3>
              <p className="text-muted-foreground">Sí, puedes usarlo sin límites y sin registrarte.</p>
            </div>
          </div>
          {/* Pregunta 5 */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3 shadow-sm">
            <span className="mt-1 text-primary">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
            </span>
            <div>
              <h3 className="font-semibold text-lg mb-1">¿Sirve para recetas y ciencia?</h3>
              <p className="text-muted-foreground">Sí, es ideal para cocina, ciencia, clima y uso diario.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
