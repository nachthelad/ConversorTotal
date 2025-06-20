"use client"

import { useState } from "react"
import { Scale } from "lucide-react"
import { ConverterCard } from "./converter-card"

export function WeightConverter() {
  const [kilograms, setKilograms] = useState("")
  const [pounds, setPounds] = useState("")

  const kgToPounds = (kg: number) => kg * 2.20462
  const poundsToKg = (pounds: number) => pounds * 0.453592

  const handleKilogramsChange = (value: string) => {
    setKilograms(value)
    if (value === "") {
      setPounds("")
      return
    }
    const numValue = Number.parseFloat(value)
    if (!isNaN(numValue)) {
      setPounds(kgToPounds(numValue).toFixed(4))
    }
  }

  const handlePoundsChange = (value: string) => {
    setPounds(value)
    if (value === "") {
      setKilograms("")
      return
    }
    const numValue = Number.parseFloat(value)
    if (!isNaN(numValue)) {
      setKilograms(poundsToKg(numValue).toFixed(4))
    }
  }

  return (
    <ConverterCard
      title="Peso"
      icon={<Scale className="h-5 w-5 text-purple-500" />}
      unit1="Kilogramos (kg)"
      unit2="Libras (lbs)"
      value1={kilograms}
      value2={pounds}
      onChange1={handleKilogramsChange}
      onChange2={handlePoundsChange}
      placeholder1="Ingresa peso en kilogramos"
      placeholder2="Ingresa peso en libras"
    />
  )
}
