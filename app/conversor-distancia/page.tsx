import type { Metadata } from "next";
import { DistanceConverter } from "@/components/converters/distance-converter";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Conversor de Distancia Online -  Pulgadas a Centímetros",
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
    "pulgadas a cm",
    "inches to cm",
  ],
  alternates: {
    canonical: "https://conversortotal.online/conversor-distancia",
  },
  openGraph: {
    title: "Conversor de Distancia - Pulgadas a Centímetros",
    description:
      "Convierte distancias de metros a kilometros y viceversa al instante. Gratis y preciso.",
    url: "https://conversortotal.online/conversor-distancia",
  },
};

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
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Conversor de Distancia Online
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Convierte distancia entre kilómetros y millas de forma instantánea y
          precisa. Perfecto para viajes, navegación y planificación de rutas.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <DistanceConverter />
      </div>

      <div className="max-w-4xl mx-auto space-y-8 mt-12">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-2">
            Conversión de Distancia: Kilómetros y Millas
          </h2>
          <p>
            Convertir entre <strong>kilómetros (km)</strong> y{" "}
            <strong>millas (mi)</strong> es fundamental para viajes, deportes y
            navegación. Utiliza nuestro conversor para obtener resultados
            instantáneos y precisos.
          </p>

          <h3 className="text-xl font-semibold mt-6">Fórmulas de Conversión</h3>
          <ul>
            <li>
              <strong>Kilómetros a Millas:</strong>{" "}
              <code>mi = km × 0.621371</code>
            </li>
            <li>
              <strong>Millas a Kilómetros:</strong>{" "}
              <code>km = mi × 1.60934</code>
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

          <h3 className="text-xl font-semibold mt-6">
            ¿Cuándo usar un conversor de distancia?
          </h3>
          <ul>
            <li>
              <strong>Viajes:</strong> Planificar rutas en diferentes países.
            </li>
            <li>
              <strong>GPS:</strong> Entender distancias en mapas.
            </li>
            <li>
              <strong>Deportes:</strong> Carreras y maratones.
            </li>
            <li>
              <strong>Aviación:</strong> Distancias de vuelo.
            </li>
            <li>
              <strong>Navegación:</strong> Rutas marítimas.
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-12">
        <h2 className="text-2xl font-bold mb-6 text-primary text-center">
          Preguntas Frecuentes
        </h2>
        <div className="space-y-4">
          {/* Pregunta 1 */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3 shadow-sm">
            <span className="mt-1 text-primary">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
            </span>
            <div>
              <h3 className="font-semibold text-lg mb-1">
                ¿Cómo convierto kilómetros a millas?
              </h3>
              <p className="text-muted-foreground">
                Ingresa el valor en kilómetros, selecciona "millas" como unidad
                de destino y obtendrás el resultado automáticamente.
              </p>
            </div>
          </div>
          {/* Pregunta 2 */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3 shadow-sm">
            <span className="mt-1 text-primary">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
            </span>
            <div>
              <h3 className="font-semibold text-lg mb-1">
                ¿Cuántos metros hay en un kilómetro?
              </h3>
              <p className="text-muted-foreground">
                Un kilómetro equivale a 1.000 metros.
              </p>
            </div>
          </div>
          {/* Pregunta 3 */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3 shadow-sm">
            <span className="mt-1 text-primary">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
            </span>
            <div>
              <h3 className="font-semibold text-lg mb-1">
                ¿Puedo convertir millas a metros?
              </h3>
              <p className="text-muted-foreground">
                Sí, selecciona "millas" como unidad de origen y "metros" como
                destino para obtener la conversión.
              </p>
            </div>
          </div>
          {/* Pregunta 4 */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3 shadow-sm">
            <span className="mt-1 text-primary">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
            </span>
            <div>
              <h3 className="font-semibold text-lg mb-1">
                ¿El conversor de distancia es gratuito?
              </h3>
              <p className="text-muted-foreground">
                Sí, puedes usarlo sin límites y sin registrarte.
              </p>
            </div>
          </div>
          {/* Pregunta 5 */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3 shadow-sm">
            <span className="mt-1 text-primary">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
            </span>
            <div>
              <h3 className="font-semibold text-lg mb-1">
                ¿Sirve para convertir distancias para deportes o viajes?
              </h3>
              <p className="text-muted-foreground">
                Sí, es ideal para calcular distancias en carreras, rutas de
                viaje, navegación y más.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Structured data (FAQ) */}
      <Script id="faq-distancia-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "¿Cómo convierto kilómetros a millas?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ingresa el valor en kilómetros y selecciona millas como unidad de destino. La fórmula es mi = km × 0.621371.",
              },
            },
          ],
        })}
      </Script>
    </div>
  );
}
