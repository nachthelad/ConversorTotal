"use client"

import { FlexibleUnitConverter } from "./flexible-unit-converter"
import { TIME_UNITS } from "@/lib/conversion-units"

export function TimeConverterFlexible() {
  return (
    <FlexibleUnitConverter
      title="Conversor de Tiempo"
      units={TIME_UNITS}
      defaultFromUnit="horas"
      defaultToUnit="minutos"
      icon="⏰"
      description="Convierte entre diferentes unidades de tiempo"
    />
  )
}
