"use client"

import { useState } from "react"
import { Power } from "lucide-react"
import { ConverterCard } from "./converter-card"

export function PowerConverter() {
  const [horsepower, setHorsepower] = useState("")
  const [kilowatts, setKilowatts] = useState("")

  const hpToKw = (hp: number) => hp * 0.745699
  const kwToHp = (kw: number) => kw * 1.34102

  const handleHorsepowerChange = (value: string) => {
    setHorsepower(value)
    if (value === "") {
      setKilowatts("")
      return
    }
    const numValue = Number.parseFloat(value)
    if (!isNaN(numValue)) {
      setKilowatts(hpToKw(numValue).toFixed(4))
    }
  }

  const handleKilowattsChange = (value: string) => {
    setKilowatts(value)
    if (value === "") {
      setHorsepower("")
      return
    }
    const numValue = Number.parseFloat(value)
    if (!isNaN(numValue)) {
      setHorsepower(kwToHp(numValue).toFixed(4))
    }
  }

  return (
    <ConverterCard
      title="Potencia"
      icon={<Power className="h-5 w-5 text-indigo-500" />}
      unit1="Caballos de Fuerza (HP)"
      unit2="Kilowatts (kW)"
      value1={horsepower}
      value2={kilowatts}
      onChange1={handleHorsepowerChange}
      onChange2={handleKilowattsChange}
      placeholder1="Ingresa potencia en HP"
      placeholder2="Ingresa potencia en kW"
    />
  )
}
