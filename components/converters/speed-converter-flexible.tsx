"use client"

import { Gauge } from "lucide-react"
import { FlexibleUnitConverter } from "./flexible-unit-converter"
import { speedUnits } from "@/lib/conversion-units"

export function SpeedConverterFlexible() {
  return (
    <FlexibleUnitConverter
      title="Velocidad"
      icon={<Gauge className="h-5 w-5 text-orange-500" />}
      category={speedUnits}
    />
  )
}
