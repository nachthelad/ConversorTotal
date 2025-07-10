"use client"

import { Square } from "lucide-react"
import { FlexibleUnitConverter } from "@/components/flexibleUnitConverter/flexible-unit-converter"
import { areaUnits } from "@/lib/conversion-units"

export function AreaConverterFlexible() {
  return (
    <FlexibleUnitConverter title="Área" icon={<Square className="h-5 w-5 text-green-500" />} category={areaUnits} />
  )
}
