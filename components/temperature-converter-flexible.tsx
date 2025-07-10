"use client"

import { Thermometer } from "lucide-react"
import { FlexibleUnitConverter } from "@/components/flexibleUnitConverter/flexible-unit-converter"
import { temperatureUnits } from "@/lib/conversion-units"

export function TemperatureConverterFlexible() {
  return (
    <FlexibleUnitConverter
      title="Temperatura"
      icon={<Thermometer className="h-5 w-5 text-red-500" />}
      category={temperatureUnits}
    />
  )
}
