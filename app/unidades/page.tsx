import type { Metadata } from "next";
import { WeightConverterFlexible } from "@/components/converters/weight-converter-flexible";
import { LengthConverter } from "@/components/converters/length-converter";
import { VolumeConverterFlexible } from "@/components/converters/volume-converter-flexible";
import { TemperatureConverterFlexible } from "@/components/converters/temperature-converter-flexible";
import { AreaConverterFlexible } from "@/components/converters/area-converter-flexible";
import { SpeedConverterFlexible } from "@/components/converters/speed-converter-flexible";
import { TimeConverterFlexible } from "@/components/converters/time-converter-flexible";
import { ShoeSizeConverter } from "@/components/converters/shoe-size-converter";
import { SEOBreadcrumbs } from "@/components/layout/seo-breadcrumbs";
import { storageUnits } from "@/lib/conversion-units";
import { FlexibleUnitConverter } from "@/components/converters/flexible-unit-converter";

export const metadata: Metadata = {
  title:
    "Conversores de Unidades - ConversorTotal | Herramientas de Conversión",
  description:
    "Convierte entre diferentes unidades de medida: peso, longitud, temperatura, volumen, área, velocidad y tiempo. Herramientas precisas y fáciles de usar.",
  keywords:
    "conversor unidades, convertir medidas, peso, longitud, temperatura, volumen, área, velocidad, tiempo",
  openGraph: {
    title: "Conversores de Unidades - ConversorTotal",
    description:
      "Convierte entre diferentes unidades de medida con precisión y facilidad",
    type: "website",
  },
};

const breadcrumbItems = [
  { label: "Conversores de Unidades", href: "/unidades" },
];

export default function UnidadesPage() {
  return (
    <div className="space-y-8">
      <SEOBreadcrumbs items={breadcrumbItems} />

      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Conversores de Unidades
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Convierte entre diferentes unidades de medida con precisión. Elige las
          unidades específicas que necesitas convertir.
        </p>
      </div>

      <div className="space-y-12">
        {/* Medidas Básicas */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
            Medidas Básicas
          </h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
            <LengthConverter />
            <WeightConverterFlexible />
          </div>
        </section>

        {/* Temperatura y Volumen */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
            Temperatura y Volumen
          </h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
            <TemperatureConverterFlexible />
            <VolumeConverterFlexible />
          </div>
        </section>

        {/* Área y Velocidad */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
            Área y Velocidad
          </h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
            <AreaConverterFlexible />
            <SpeedConverterFlexible />
          </div>
        </section>

        {/* Tiempo */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
            Tiempo y Almacenamiento digital
          </h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
            <TimeConverterFlexible />
            <FlexibleUnitConverter
              title="Almacenamiento Digital"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7l9-4 9 4M3 7h18"
                  />
                </svg>
              }
              category={storageUnits}
            />
          </div>
        </section>

        {/* Almacenamiento Digital */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
            Zapatillas
          </h2>
          <div className="grid gap-6 md:grid-cols-1 max-w-3xl mx-auto">
            <ShoeSizeConverter />
          </div>
        </section>

        {/* Información adicional */}
        <div className="mt-16 bg-card rounded-lg shadow-sm border p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-card-foreground mb-4">
            ¿Cómo usar los conversores?
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium text-card-foreground mb-2">
                🎯 Selección Flexible
              </h3>
              <p className="text-muted-foreground">
                Elige exactamente las unidades que necesitas convertir usando
                los menús desplegables. Por ejemplo: "Gramos → Kilogramos" o
                "Centímetros → Pulgadas".
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-card-foreground mb-2">
                🔄 Conversión Bidireccional
              </h3>
              <p className="text-muted-foreground">
                Puedes escribir en cualquier campo y la conversión se
                actualizará automáticamente. Usa el botón de intercambio para
                cambiar las unidades rápidamente.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-card-foreground mb-2">
                📋 Copiar y Compartir
              </h3>
              <p className="text-muted-foreground">
                Copia los resultados al portapapeles o compártelos directamente
                por WhatsApp con un formato profesional.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-card-foreground mb-2">
                🎯 Alta Precisión
              </h3>
              <p className="text-muted-foreground">
                Nuestros conversores utilizan factores de conversión precisos y
                muestran los decimales necesarios para cada tipo de medida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
