"use client"

import { FlexibleUnitConverter } from "./flexible-unit-converter"
import { SPEED_UNITS } from "@/lib/conversion-units"

export function SpeedConverterFlexible() {
  return (
    <FlexibleUnitConverter
      title="Conversor de Velocidad"
      units={SPEED_UNITS}
      defaultFromUnit="km/h"
      defaultToUnit="mph"
      icon="🚗"
      description="Convierte entre diferentes unidades de velocidad"
    />
  )
}
