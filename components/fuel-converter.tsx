"use client"

import { useState } from "react"
import { Fuel } from "lucide-react"
import { ConverterCard } from "./converter-card"

export function FuelConverter() {
  const [liters100km, setLiters100km] = useState("")
  const [mpg, setMpg] = useState("")

  const liters100kmToMpg = (l100km: number) => 235.214 / l100km
  const mpgToLiters100km = (mpg: number) => 235.214 / mpg

  const handleLiters100kmChange = (value: string) => {
    setLiters100km(value)
    if (value === "") {
      setMpg("")
      return
    }
    const numValue = Number.parseFloat(value)
    if (!isNaN(numValue) && numValue > 0) {
      setMpg(liters100kmToMpg(numValue).toFixed(2))
    }
  }

  const handleMpgChange = (value: string) => {
    setMpg(value)
    if (value === "") {
      setLiters100km("")
      return
    }
    const numValue = Number.parseFloat(value)
    if (!isNaN(numValue) && numValue > 0) {
      setLiters100km(mpgToLiters100km(numValue).toFixed(2))
    }
  }

  return (
    <ConverterCard
      title="Consumo de Combustible"
      icon={<Fuel className="h-5 w-5 text-red-500" />}
      unit1="Litros/100km"
      unit2="Millas por Galón (MPG)"
      value1={liters100km}
      value2={mpg}
      onChange1={handleLiters100kmChange}
      onChange2={handleMpgChange}
      placeholder1="Ingresa litros por 100km"
      placeholder2="Ingresa millas por galón"
    />
  )
}
