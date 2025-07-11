"use client"

import { ChefHat } from "lucide-react"
import { FlexibleUnitConverter } from "./flexible-unit-converter"
import { cookingUnits } from "@/lib/conversion-units"

export function CookingConverter() {
  return (
    <FlexibleUnitConverter
      title="Medidas de Cocina"
      icon={<ChefHat className="h-5 w-5 text-rose-500" />}
      category={cookingUnits}
    />
  )
}
