"use client"

import { Activity } from "lucide-react"
import { FlexibleUnitConverter } from "@/components/flexible-unit-converter"
import { pressureUnits } from "@/lib/conversion-units"

export function PressureConverter() {
  return (
    <FlexibleUnitConverter
      title="Presión"
      icon={<Activity className="h-5 w-5 text-pink-500" />}
      category={pressureUnits}
    />
  )
}
