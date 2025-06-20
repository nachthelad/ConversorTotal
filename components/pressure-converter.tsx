"use client"

import { useState } from "react"
import { Activity } from "lucide-react"
import { ConverterCard } from "./converter-card"

export function PressureConverter() {
  const [bar, setBar] = useState("")
  const [psi, setPsi] = useState("")

  const barToPsi = (bar: number) => bar * 14.5038
  const psiToBar = (psi: number) => psi * 0.0689476

  const handleBarChange = (value: string) => {
    setBar(value)
    if (value === "") {
      setPsi("")
      return
    }
    const numValue = Number.parseFloat(value)
    if (!isNaN(numValue)) {
      setPsi(barToPsi(numValue).toFixed(4))
    }
  }

  const handlePsiChange = (value: string) => {
    setPsi(value)
    if (value === "") {
      setBar("")
      return
    }
    const numValue = Number.parseFloat(value)
    if (!isNaN(numValue)) {
      setBar(psiToBar(numValue).toFixed(4))
    }
  }

  return (
    <ConverterCard
      title="Presión"
      icon={<Activity className="h-5 w-5 text-pink-500" />}
      unit1="Bar"
      unit2="PSI (libras por pulgada²)"
      value1={bar}
      value2={psi}
      onChange1={handleBarChange}
      onChange2={handlePsiChange}
      placeholder1="Ingresa presión en bar"
      placeholder2="Ingresa presión en PSI"
    />
  )
}
