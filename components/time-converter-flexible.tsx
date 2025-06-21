"use client"

import { Clock } from "lucide-react"
import { FlexibleUnitConverter } from "@/components/flexible-unit-converter"
import { timeUnits } from "@/lib/conversion-units"

export function TimeConverterFlexible() {
  return (
    <FlexibleUnitConverter title="Tiempo" icon={<Clock className="h-5 w-5 text-indigo-500" />} category={timeUnits} />
  )
}
