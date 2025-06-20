"use client"

import { useState } from "react"
import { Square } from "lucide-react"
import { ConverterCard } from "./converter-card"

export function AreaConverter() {
  const [squareMeters, setSquareMeters] = useState("")
  const [squareFeet, setSquareFeet] = useState("")

  const m2ToFt2 = (m2: number) => m2 * 10.7639
  const ft2ToM2 = (ft2: number) => ft2 * 0.092903

  const handleSquareMetersChange = (value: string) => {
    setSquareMeters(value)
    if (value === "") {
      setSquareFeet("")
      return
    }
    const numValue = Number.parseFloat(value)
    if (!isNaN(numValue)) {
      setSquareFeet(m2ToFt2(numValue).toFixed(4))
    }
  }

  const handleSquareFeetChange = (value: string) => {
    setSquareFeet(value)
    if (value === "") {
      setSquareMeters("")
      return
    }
    const numValue = Number.parseFloat(value)
    if (!isNaN(numValue)) {
      setSquareMeters(ft2ToM2(numValue).toFixed(4))
    }
  }

  return (
    <ConverterCard
      title="Área"
      icon={<Square className="h-5 w-5 text-orange-500" />}
      unit1="Metros Cuadrados (m²)"
      unit2="Pies Cuadrados (ft²)"
      value1={squareMeters}
      value2={squareFeet}
      onChange1={handleSquareMetersChange}
      onChange2={handleSquareFeetChange}
      placeholder1="Ingresa área en m²"
      placeholder2="Ingresa área en ft²"
    />
  )
}
