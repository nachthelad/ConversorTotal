"use client"

import { MapPin } from "lucide-react"
import { UnitConverter } from "@/components/unit-converter"

export function DistanceConverter() {
  const kmToMiles = (km: number) => km * 0.621371
  const milesToKm = (miles: number) => miles / 0.621371

  return (
    <UnitConverter
      title="Distancia"
      icon={<MapPin className="h-5 w-5 text-blue-500" />}
      unit1="Kilómetros"
      unit2="Millas"
      convert1To2={kmToMiles}
      convert2To1={milesToKm}
      placeholder1="Ingresa kilómetros"
      placeholder2="Ingresa millas"
    />
  )
}
