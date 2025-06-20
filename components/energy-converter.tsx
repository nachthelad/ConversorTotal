"use client"

import { useState } from "react"
import { Zap } from "lucide-react"
import { ConverterCard } from "./converter-card"

export function EnergyConverter() {
  const [calories, setCalories] = useState("")
  const [joules, setJoules] = useState("")

  const caloriesToJoules = (cal: number) => cal * 4.184
  const joulesToCalories = (j: number) => j * 0.239006

  const handleCaloriesChange = (value: string) => {
    setCalories(value)
    if (value === "") {
      setJoules("")
      return
    }
    const numValue = Number.parseFloat(value)
    if (!isNaN(numValue)) {
      setJoules(caloriesToJoules(numValue).toFixed(4))
    }
  }

  const handleJoulesChange = (value: string) => {
    setJoules(value)
    if (value === "") {
      setCalories("")
      return
    }
    const numValue = Number.parseFloat(value)
    if (!isNaN(numValue)) {
      setCalories(joulesToCalories(numValue).toFixed(4))
    }
  }

  return (
    <ConverterCard
      title="Energía"
      icon={<Zap className="h-5 w-5 text-amber-500" />}
      unit1="Calorías (cal)"
      unit2="Joules (J)"
      value1={calories}
      value2={joules}
      onChange1={handleCaloriesChange}
      onChange2={handleJoulesChange}
      placeholder1="Ingresa valor en calorías"
      placeholder2="Ingresa valor en joules"
    />
  )
}
