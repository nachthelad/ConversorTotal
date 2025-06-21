"use client"

import { FlexibleUnitConverter } from "./flexible-unit-converter"
import { AREA_UNITS } from "@/lib/conversion-units"

export function AreaConverterFlexible() {
  return (
    <FlexibleUnitConverter
      title="Conversor de Área"
      units={AREA_UNITS}
      defaultFromUnit="m²"
      defaultToUnit="ft²"
      icon="📐"
      description="Convierte entre diferentes unidades de área"
    />
  )
}
