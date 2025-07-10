"use client"

import { Power } from "lucide-react"
import { FlexibleUnitConverter } from "@/components/flexibleUnitConverter/flexible-unit-converter"
import { powerUnits } from "@/lib/conversion-units"

export function PowerConverter() {
  return (
    <FlexibleUnitConverter
      title="Potencia"
      icon={<Power className="h-5 w-5 text-indigo-500" />}
      category={powerUnits}
    />
  )
}
