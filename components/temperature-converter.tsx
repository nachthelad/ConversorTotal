"use client"

import { Thermometer } from "lucide-react"
import { UnitConverter } from "@/components/unit-converter"

export function TemperatureConverter() {
  const celsiusToFahrenheit = (celsius: number) => (celsius * 9) / 5 + 32
  const fahrenheitToCelsius = (fahrenheit: number) => ((fahrenheit - 32) * 5) / 9

  return (
    <UnitConverter
      title="Temperatura"
      icon={<Thermometer className="h-5 w-5 text-red-500" />}
      unit1="Celsius"
      unit2="Fahrenheit"
      convert1To2={celsiusToFahrenheit}
      convert2To1={fahrenheitToCelsius}
      placeholder1="Ingresa grados Celsius"
      placeholder2="Ingresa grados Fahrenheit"
    />
  )
}
