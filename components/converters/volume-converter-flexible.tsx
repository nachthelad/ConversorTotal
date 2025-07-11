"use client"

import { Droplets } from "lucide-react"
import { FlexibleUnitConverter } from "./flexible-unit-converter"
import { volumeUnits } from "@/lib/conversion-units"

export function VolumeConverterFlexible() {
  return (
    <FlexibleUnitConverter
      title="Volumen"
      icon={<Droplets className="h-5 w-5 text-cyan-500" />}
      category={volumeUnits}
    />
  )
}
