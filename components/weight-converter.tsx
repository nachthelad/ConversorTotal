"use client"

import { Scale } from "lucide-react"
import { UnitConverter } from "@/components/unit-converter"

export function WeightConverter() {
  const kgToLbs = (kg: number) => kg * 2.20462
  const lbsToKg = (lbs: number) => lbs / 2.20462

  return (
    <UnitConverter
      title="Peso"
      icon={<Scale className="h-5 w-5 text-purple-500" />}
      unit1="Kilogramos"
      unit2="Libras"
      convert1To2={kgToLbs}
      convert2To1={lbsToKg}
      placeholder1="Ingresa kilogramos"
      placeholder2="Ingresa libras"
    />
  )
}
