"use client"

import { MapPin } from "lucide-react"
import { FlexibleUnitConverter } from "@/components/flexibleUnitConverter/flexible-unit-converter"
import { lengthUnits } from "@/lib/conversion-units"

export function DistanceConverter() {
  return (
    <FlexibleUnitConverter
      title="Distancia"
      icon={<MapPin className="h-5 w-5 text-blue-500" />}
      category={lengthUnits}
    />
  )
}
