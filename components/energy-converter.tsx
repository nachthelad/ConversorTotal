"use client"

import { Zap } from "lucide-react"
import { FlexibleUnitConverter } from "@/components/flexible-unit-converter"
import { energyUnits } from "@/lib/conversion-units"

export function EnergyConverter() {
  return (
    <FlexibleUnitConverter title="Energía" icon={<Zap className="h-5 w-5 text-amber-500" />} category={energyUnits} />
  )
}
