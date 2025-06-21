"use client"

import { Gauge } from "lucide-react"
import { FlexibleUnitConverter } from "@/components/flexible-unit-converter"
import { speedUnits } from "@/lib/conversion-units"

export function SpeedConverter() {
  return (
    <FlexibleUnitConverter
      title="Velocidad"
      icon={<Gauge className="h-5 w-5 text-yellow-500" />}
      category={speedUnits}
    />
  )
}
