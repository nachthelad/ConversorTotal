"use client"

import { Scale } from "lucide-react"
import { FlexibleUnitConverter } from "@/components/flexible-unit-converter"
import { weightUnits } from "@/lib/conversion-units"

export function WeightConverter() {
  return (
    <FlexibleUnitConverter title="Peso" icon={<Scale className="h-5 w-5 text-purple-500" />} category={weightUnits} />
  )
}
