import { TemperatureConverter } from "@/components/temperature-converter"
import { DistanceConverter } from "@/components/distance-converter"
import { VolumeConverter } from "@/components/volume-converter"
import { TimeConverter } from "@/components/time-converter"
import { WeightConverter } from "@/components/weight-converter"
import { AreaConverter } from "@/components/area-converter"
import { SpeedConverter } from "@/components/speed-converter"
import { PressureConverter } from "@/components/pressure-converter"
import { EnergyConverter } from "@/components/energy-converter"
import { PowerConverter } from "@/components/power-converter"
import { ClothingSizeConverter } from "@/components/clothing-size-converter"
import { ShoeSizeConverter } from "@/components/shoe-size-converter"
import { FuelConverter } from "@/components/fuel-converter"
import { CookingConverter } from "@/components/cooking-converter"
import { ConverterNavigation } from "@/components/converter-navigation"

export default function UnidadesPage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Conversor de Unidades</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Convierte entre diferentes unidades al instante. Copia los resultados o compártelos directamente por WhatsApp.
        </p>
      </div>

      {/* Navigation Menu */}
      <ConverterNavigation />

      {/* Espacio para Auto Ads - Google colocará anuncios aquí automáticamente */}
      <div className="min-h-[90px] flex items-center justify-center">
        {/* Este div permite que Auto Ads coloque anuncios aquí */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Conversores Básicos */}
        <div id="temperatura">
          <TemperatureConverter />
        </div>
        <div id="distancia">
          <DistanceConverter />
        </div>
        <div id="volumen">
          <VolumeConverter />
        </div>
        <div id="tiempo">
          <TimeConverter />
        </div>

        {/* Espacio entre conversores para Auto Ads */}
        <div className="md:col-span-2 min-h-[250px] flex items-center justify-center">
          {/* Google Auto Ads puede usar este espacio */}
        </div>

        {/* Nuevos Conversores de Medidas */}
        <div id="peso">
          <WeightConverter />
        </div>
        <div id="area">
          <AreaConverter />
        </div>
        <div id="velocidad">
          <SpeedConverter />
        </div>
        <div id="presion">
          <PressureConverter />
        </div>
        <div id="energia">
          <EnergyConverter />
        </div>
        <div id="potencia">
          <PowerConverter />
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
        <div id="combustible">
          <FuelConverter />
        </div>
        <div id="cocina">
          <CookingConverter />
        </div>
      </div>

      {/* Espacio final para Auto Ads */}
      <div className="min-h-[90px] flex items-center justify-center">{/* Auto Ads puede colocar anuncios aquí */}</div>
    </div>
  )
}
