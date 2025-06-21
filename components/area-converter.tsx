"use client"

import { Square } from "lucide-react"
import { FlexibleUnitConverter } from "@/components/flexible-unit-converter"
import { areaUnits } from "@/lib/conversion-units"

export function AreaConverter() {
  return (
    <FlexibleUnitConverter title="Área" icon={<Square className="h-5 w-5 text-orange-500" />} category={areaUnits} />
  )
}
