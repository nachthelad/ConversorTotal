"use client"

import { Fuel } from "lucide-react"
import { FlexibleUnitConverter } from "@/components/flexibleUnitConverter/flexible-unit-converter"
import { fuelConsumptionUnits } from "@/lib/conversion-units"

export function FuelConverter() {
  return (
    <FlexibleUnitConverter
      title="Consumo de Combustible"
      icon={<Fuel className="h-5 w-5 text-red-500" />}
      category={fuelConsumptionUnits}
    />
  )
}
