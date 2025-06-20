"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"
import { ConverterCard } from "./converter-card"

export function DistanceConverter() {
  const [kilometers, setKilometers] = useState("")
  const [miles, setMiles] = useState("")

  const kmToMiles = (km: number) => km * 0.621371
  const milesToKm = (miles: number) => miles * 1.60934

  const handleKilometersChange = (value: string) => {
    setKilometers(value)
    if (value === "") {
      setMiles("")
      return
    }
    const numValue = Number.parseFloat(value)
    if (!isNaN(numValue)) {
      setMiles(kmToMiles(numValue).toFixed(4))
    }
  }

  const handleMilesChange = (value: string) => {
    setMiles(value)
    if (value === "") {
      setKilometers("")
      return
    }
    const numValue = Number.parseFloat(value)
    if (!isNaN(numValue)) {
      setKilometers(milesToKm(numValue).toFixed(4))
    }
  }

  return (
    <ConverterCard
      title="Distancia"
      icon={<MapPin className="h-5 w-5 text-blue-500" />}
      unit1="Kilómetros (km)"
      unit2="Millas (mi)"
      value1={kilometers}
      value2={miles}
      onChange1={handleKilometersChange}
      onChange2={handleMilesChange}
      placeholder1="Ingresa distancia en kilómetros"
      placeholder2="Ingresa distancia en millas"
    />
  )
}
