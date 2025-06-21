import type { Metadata } from "next"
import { WeightConverterFlexible } from "@/components/weight-converter-flexible"
import { LengthConverter } from "@/components/length-converter"
import { VolumeConverterFlexible } from "@/components/volume-converter-flexible"
import { TemperatureConverterFlexible } from "@/components/temperature-converter-flexible"
import { AreaConverterFlexible } from "@/components/area-converter-flexible"
import { SpeedConverterFlexible } from "@/components/speed-converter-flexible"
import { TimeConverterFlexible } from "@/components/time-converter-flexible"
import { SEOBreadcrumbs } from "@/components/seo-breadcrumbs"
import { ConversionTest } from "@/components/conversion-test"

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
    <div className="space-y-8">
      <SEOBreadcrumbs items={breadcrumbItems} />

      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Conversores de Unidades</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Convierte entre diferentes unidades de medida con precisión. Elige las unidades específicas que necesitas
          convertir.
        </p>
      </div>

      {/* Espacio para Auto Ads */}
      <div className="min-h-[90px] flex items-center justify-center">
        {/* Google Auto Ads puede usar este espacio */}
      </div>

      <div className="space-y-12">
        {/* Medidas Básicas */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">📏 Medidas Básicas</h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
            <LengthConverter />
            <WeightConverterFlexible />
          </div>
        </section>

        {/* Espacio para Auto Ads */}
        <div className="min-h-[200px] flex items-center justify-center">
          {/* Google Auto Ads puede usar este espacio */}
        </div>

        {/* Temperatura y Volumen */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">🌡️ Temperatura y Volumen</h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
            <TemperatureConverterFlexible />
            <VolumeConverterFlexible />
          </div>
        </section>

        {/* Espacio para Auto Ads */}
        <div className="min-h-[200px] flex items-center justify-center">
          {/* Google Auto Ads puede usar este espacio */}
        </div>

        {/* Área y Velocidad */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">📐 Área y Velocidad</h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
            <AreaConverterFlexible />
            <SpeedConverterFlexible />
          </div>
        </section>

        {/* Espacio para Auto Ads */}
        <div className="min-h-[200px] flex items-center justify-center">
          {/* Google Auto Ads puede usar este espacio */}
        </div>

        {/* Tiempo */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">⏰ Tiempo</h2>
          <div className="grid gap-6 md:grid-cols-1 max-w-2xl mx-auto">
            <TimeConverterFlexible />
          </div>
        </section>

        {/* Información adicional */}
        <div className="mt-16 bg-card rounded-lg shadow-sm border p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-card-foreground mb-4">¿Cómo usar los conversores flexibles?</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium text-card-foreground mb-2">🎯 Selección Flexible</h3>
              <p className="text-muted-foreground">
                Elige exactamente las unidades que necesitas convertir usando los menús desplegables. Por ejemplo:
                "Gramos → Kilogramos" o "Centímetros → Pulgadas".
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-card-foreground mb-2">🔄 Conversión Bidireccional</h3>
              <p className="text-muted-foreground">
                Puedes escribir en cualquier campo y la conversión se actualizará automáticamente. Usa el botón de
                intercambio para cambiar las unidades rápidamente.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-card-foreground mb-2">📋 Copiar y Compartir</h3>
              <p className="text-muted-foreground">
                Copia los resultados al portapapeles o compártelos directamente por WhatsApp con un formato profesional.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-card-foreground mb-2">🎯 Alta Precisión</h3>
              <p className="text-muted-foreground">
                Nuestros conversores utilizan factores de conversión precisos y muestran los decimales necesarios para
                cada tipo de medida.
              </p>
            </div>
          </div>
        </div>

        {/* Test de Conversiones - Solo para verificación */}
        <div className="mt-16 max-w-4xl mx-auto">
          <ConversionTest />
        </div>

        {/* Espacio final para Auto Ads */}
        <div className="min-h-[90px] flex items-center justify-center">
          {/* Google Auto Ads puede usar este espacio */}
        </div>
      </div>
    </div>
  )
}
