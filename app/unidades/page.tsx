import type { Metadata } from "next"
import { WeightConverterFlexible } from "@/components/weight-converter-flexible"
import { LengthConverter } from "@/components/length-converter"
import { VolumeConverterFlexible } from "@/components/volume-converter-flexible"
import { TemperatureConverterFlexible } from "@/components/temperature-converter-flexible"
import { AreaConverterFlexible } from "@/components/area-converter-flexible"
import { SpeedConverterFlexible } from "@/components/speed-converter-flexible"
import { TimeConverterFlexible } from "@/components/time-converter-flexible"
import { AdBanner } from "@/components/ad-banner"
import { SEOBreadcrumbs } from "@/components/seo-breadcrumbs"

export const metadata: Metadata = {
  title: "Conversores de Unidades - ConvierteYa | Herramientas de Conversión",
  description:
    "Convierte entre diferentes unidades de medida: peso, longitud, temperatura, volumen, área, velocidad y tiempo. Herramientas precisas y fáciles de usar.",
  keywords: "conversor unidades, convertir medidas, peso, longitud, temperatura, volumen, área, velocidad, tiempo",
  openGraph: {
    title: "Conversores de Unidades - ConvierteYa",
    description: "Convierte entre diferentes unidades de medida con precisión y facilidad",
    type: "website",
  },
}

const breadcrumbItems = [
  { label: "Inicio", href: "/" },
  { label: "Conversores de Unidades", href: "/unidades" },
]

export default function UnidadesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <SEOBreadcrumbs items={breadcrumbItems} />

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Conversores de Unidades</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Convierte entre diferentes unidades de medida con precisión. Elige las unidades específicas que necesitas
            convertir.
          </p>
        </div>

        <div className="grid gap-8 md:gap-12">
          {/* Medidas Básicas */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">📏 Medidas Básicas</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              <LengthConverter />
              <WeightConverterFlexible />
            </div>
          </section>

          <AdBanner slot="unidades-medidas-basicas" format="horizontal" />

          {/* Temperatura y Volumen */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">🌡️ Temperatura y Volumen</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              <TemperatureConverterFlexible />
              <VolumeConverterFlexible />
            </div>
          </section>

          <AdBanner slot="unidades-temperatura-volumen" format="horizontal" />

          {/* Área y Velocidad */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">📐 Área y Velocidad</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              <AreaConverterFlexible />
              <SpeedConverterFlexible />
            </div>
          </section>

          <AdBanner slot="unidades-area-velocidad" format="horizontal" />

          {/* Tiempo */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">⏰ Tiempo</h2>
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1 max-w-2xl mx-auto">
              <TimeConverterFlexible />
            </div>
          </section>

          <AdBanner slot="unidades-tiempo" format="horizontal" />
        </div>

        {/* Información adicional */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">¿Cómo usar los conversores flexibles?</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">🎯 Selección Flexible</h3>
              <p className="text-gray-600">
                Elige exactamente las unidades que necesitas convertir usando los menús desplegables. Por ejemplo:
                "Gramos → Kilogramos" o "Centímetros → Pulgadas".
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">🔄 Conversión Bidireccional</h3>
              <p className="text-gray-600">
                Puedes escribir en cualquier campo y la conversión se actualizará automáticamente. Usa el botón de
                intercambio para cambiar las unidades rápidamente.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">📋 Copiar y Compartir</h3>
              <p className="text-gray-600">
                Copia los resultados al portapapeles o compártelos directamente por WhatsApp con un formato profesional.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">🎯 Alta Precisión</h3>
              <p className="text-gray-600">
                Nuestros conversores utilizan factores de conversión precisos y muestran los decimales necesarios para
                cada tipo de medida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
