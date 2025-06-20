"use client"

import { useState } from "react"
import { ChefHat } from "lucide-react"
import { ConverterCard } from "./converter-card"

export function CookingConverter() {
  const [tablespoons, setTablespoons] = useState("")
  const [milliliters, setMilliliters] = useState("")

  const tbspToMl = (tbsp: number) => tbsp * 14.7868
  const mlToTbsp = (ml: number) => ml * 0.067628

  const handleTablespoonsChange = (value: string) => {
    setTablespoons(value)
    if (value === "") {
      setMilliliters("")
      return
    }
    const numValue = Number.parseFloat(value)
    if (!isNaN(numValue)) {
      setMilliliters(tbspToMl(numValue).toFixed(2))
    }
  }

  const handleMillilitersChange = (value: string) => {
    setMilliliters(value)
    if (value === "") {
      setTablespoons("")
      return
    }
    const numValue = Number.parseFloat(value)
    if (!isNaN(numValue)) {
      setTablespoons(mlToTbsp(numValue).toFixed(2))
    }
  }

  return (
    <ConverterCard
      title="Medidas de Cocina"
      icon={<ChefHat className="h-5 w-5 text-rose-500" />}
      unit1="Cucharadas (cdas)"
      unit2="Mililitros (ml)"
      value1={tablespoons}
      value2={milliliters}
      onChange1={handleTablespoonsChange}
      onChange2={handleMillilitersChange}
      placeholder1="Ingresa cucharadas"
      placeholder2="Ingresa mililitros"
    />
  )
}
