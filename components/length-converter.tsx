"use client"

import { Ruler } from "lucide-react"
import { FlexibleUnitConverter } from "@/components/flexible-unit-converter"
import { lengthUnits } from "@/lib/conversion-units"

export function LengthConverter() {
  return (
    <FlexibleUnitConverter title="Longitud" icon={<Ruler className="h-5 w-5 text-blue-500" />} category={lengthUnits} />
  )
}
