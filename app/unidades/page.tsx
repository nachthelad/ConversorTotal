import { TemperatureConverterFlexible } from "@/components/temperature-converter-flexible"
import { LengthConverter } from "@/components/length-converter"
import { VolumeConverterFlexible } from "@/components/volume-converter-flexible"
import { TimeConverterFlexible } from "@/components/time-converter-flexible"
import { WeightConverterFlexible } from "@/components/weight-converter-flexible"
import { AreaConverterFlexible } from "@/components/area-converter-flexible"
import { SpeedConverterFlexible } from "@/components/speed-converter-flexible"
import { ClothingSizeConverter } from "@/components/clothing-size-converter"
import { ShoeSizeConverter } from "@/components/shoe-size-converter"
import { ConverterNavigation } from "@/components/converter-navigation"

export default function UnidadesPage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Conversor de Unidades</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Convierte entre diferentes unidades al instante. Elige específicamente qué unidades quieres convertir y copia
          los resultados o compártelos directamente por WhatsApp.
        </p>
      </div>

      {/* Navigation Menu */}
      <ConverterNavigation />

      {/* Espacio para Auto Ads - Google colocará anuncios aquí automáticamente */}
      <div className="min-h-[90px] flex items-center justify-center">
        {/* Este div permite que Auto Ads coloque anuncios aquí */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Conversores Básicos Flexibles */}
        <div id="longitud">
          <LengthConverter />
        </div>
        <div id="peso">
          <WeightConverterFlexible />
        </div>
        <div id="temperatura">
          <TemperatureConverterFlexible />
        </div>
        <div id="volumen">
          <VolumeConverterFlexible />
        </div>

        {/* Espacio entre conversores para Auto Ads */}
        <div className="md:col-span-2 min-h-[200px] flex items-center justify-center">
          {/* Google Auto Ads puede usar este espacio */}
        </div>

        {/* Conversores de Medidas Avanzadas */}
        <div id="area">
          <AreaConverterFlexible />
        </div>
        <div id="velocidad">
          <SpeedConverterFlexible />
        </div>
        <div id="tiempo">
          <TimeConverterFlexible />
        </div>

        {/* Espacio medio para Auto Ads */}
        <div className="md:col-span-2 min-h-[200px] flex items-center justify-center">
          {/* Google Auto Ads puede usar este espacio */}
        </div>

        {/* Conversores Especializados */}
        <div id="tallas-ropa">
          <ClothingSizeConverter />
        </div>
        <div id="tallas-zapatos">
          <ShoeSizeConverter />
        </div>
      </div>

      {/* Información adicional */}
      <div className="max-w-4xl mx-auto mt-12 p-6 bg-muted/50 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">¿Cómo usar los conversores flexibles?</h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div>
            <h3 className="font-semibold text-foreground mb-2">✨ Nuevas características:</h3>
            <ul className="space-y-1">
              <li>• Elige específicamente qué unidades convertir</li>
              <li>• Escribe en cualquier campo para convertir</li>
              <li>• Botón de intercambio rápido</li>
              <li>• Mayor precisión en los resultados</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">🎯 Ejemplos de uso:</h3>
            <ul className="space-y-1">
              <li>• Gramos → Kilogramos</li>
              <li>• Centímetros → Pulgadas</li>
              <li>• Mililitros → Tazas</li>
              <li>• Celsius → Kelvin</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Espacio final para Auto Ads */}
      <div className="min-h-[90px] flex items-center justify-center">{/* Auto Ads puede colocar anuncios aquí */}</div>
    </div>
  )
}
