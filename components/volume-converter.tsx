"use client"

import { useState } from "react"
import { Droplets } from "lucide-react"
import { ConverterCard } from "./converter-card"

export function VolumeConverter() {
  const [liters, setLiters] = useState("")
  const [gallons, setGallons] = useState("")

  const litersToGallons = (l: number) => l * 0.264172
  const gallonsToLiters = (g: number) => g * 3.78541

  const handleLitersChange = (value: string) => {
    setLiters(value)
    if (value === "") {
      setGallons("")
      return
    }
    const numValue = Number.parseFloat(value)
    if (!isNaN(numValue)) {
      setGallons(litersToGallons(numValue).toFixed(4))
    }
  }

  const handleGallonsChange = (value: string) => {
    setGallons(value)
    if (value === "") {
      setLiters("")
      return
    }
    const numValue = Number.parseFloat(value)
    if (!isNaN(numValue)) {
      setLiters(gallonsToLiters(numValue).toFixed(4))
    }
  }

  return (
    <ConverterCard
      title="Volumen"
      icon={<Droplets className="h-5 w-5 text-cyan-500" />}
      unit1="Litros (L)"
      unit2="Galones (gal)"
      value1={liters}
      value2={gallons}
      onChange1={handleLitersChange}
      onChange2={handleGallonsChange}
      placeholder1="Ingresa volumen en litros"
      placeholder2="Ingresa volumen en galones"
    />
  )
}
