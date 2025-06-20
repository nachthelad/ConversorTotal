"use client"

import { useState } from "react"
import { Thermometer } from "lucide-react"
import { ConverterCard } from "./converter-card"

export function TemperatureConverter() {
  const [celsius, setCelsius] = useState("")
  const [fahrenheit, setFahrenheit] = useState("")

  const celsiusToFahrenheit = (c: number) => (c * 9) / 5 + 32
  const fahrenheitToCelsius = (f: number) => ((f - 32) * 5) / 9

  const handleCelsiusChange = (value: string) => {
    setCelsius(value)
    if (value === "") {
      setFahrenheit("")
      return
    }
    const numValue = Number.parseFloat(value)
    if (!isNaN(numValue)) {
      setFahrenheit(celsiusToFahrenheit(numValue).toFixed(2))
    }
  }

  const handleFahrenheitChange = (value: string) => {
    setFahrenheit(value)
    if (value === "") {
      setCelsius("")
      return
    }
    const numValue = Number.parseFloat(value)
    if (!isNaN(numValue)) {
      setCelsius(fahrenheitToCelsius(numValue).toFixed(2))
    }
  }

  return (
    <ConverterCard
      title="Temperatura"
      icon={<Thermometer className="h-5 w-5 text-red-500" />}
      unit1="Celsius (°C)"
      unit2="Fahrenheit (°F)"
      value1={celsius}
      value2={fahrenheit}
      onChange1={handleCelsiusChange}
      onChange2={handleFahrenheitChange}
      placeholder1="Ingresa temperatura en Celsius"
      placeholder2="Ingresa temperatura en Fahrenheit"
    />
  )
}
