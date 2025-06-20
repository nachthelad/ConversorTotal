"use client"

import { useState } from "react"
import { Gauge } from "lucide-react"
import { ConverterCard } from "./converter-card"

export function SpeedConverter() {
  const [kmh, setKmh] = useState("")
  const [mph, setMph] = useState("")

  const kmhToMph = (kmh: number) => kmh * 0.621371
  const mphToKmh = (mph: number) => mph * 1.60934

  const handleKmhChange = (value: string) => {
    setKmh(value)
    if (value === "") {
      setMph("")
      return
    }
    const numValue = Number.parseFloat(value)
    if (!isNaN(numValue)) {
      setMph(kmhToMph(numValue).toFixed(4))
    }
  }

  const handleMphChange = (value: string) => {
    setMph(value)
    if (value === "") {
      setKmh("")
      return
    }
    const numValue = Number.parseFloat(value)
    if (!isNaN(numValue)) {
      setKmh(mphToKmh(numValue).toFixed(4))
    }
  }

  return (
    <ConverterCard
      title="Velocidad"
      icon={<Gauge className="h-5 w-5 text-yellow-500" />}
      unit1="Kilómetros por Hora (km/h)"
      unit2="Millas por Hora (mph)"
      value1={kmh}
      value2={mph}
      onChange1={handleKmhChange}
      onChange2={handleMphChange}
      placeholder1="Ingresa la velocidad en km/h"
      placeholder2="Ingresa la velocidad en mph"
    />
  )
}
