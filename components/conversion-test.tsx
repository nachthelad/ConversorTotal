"use client"

import { useState } from "react"
import { convertUnits, weightUnits, lengthUnits } from "@/lib/conversion-units"

export function ConversionTest() {
  const [testResults, setTestResults] = useState<string[]>([])

  const runTests = () => {
    const results: string[] = []

    // Test 1: Conversión básica mg → kg
    const mg = weightUnits.units.find((u) => u.id === "mg")!
    const kg = weightUnits.units.find((u) => u.id === "kg")!
    const g = weightUnits.units.find((u) => u.id === "g")!

    // 1000 mg = 0.001 kg
    const test1 = convertUnits(1000, mg, kg, weightUnits)
    results.push(`Test 1: 1000 mg → kg = ${test1} kg (esperado: 0.001)`)

    // 1000 g = 1 kg
    const test2 = convertUnits(1000, g, kg, weightUnits)
    results.push(`Test 2: 1000 g → kg = ${test2} kg (esperado: 1)`)

    // Test 3: Conversión de longitud
    const mm = lengthUnits.units.find((u) => u.id === "mm")!
    const m = lengthUnits.units.find((u) => u.id === "m")!
    const cm = lengthUnits.units.find((u) => u.id === "cm")!

    // 1000 mm = 1 m
    const test3 = convertUnits(1000, mm, m, lengthUnits)
    results.push(`Test 3: 1000 mm → m = ${test3} m (esperado: 1)`)

    // 1000 cm = 10 m
    const test4 = convertUnits(1000, cm, m, lengthUnits)
    results.push(`Test 4: 1000 cm → m = ${test4} m (esperado: 10)`)

    // Test 5: Conversión inversa
    const test5 = convertUnits(1, kg, g, weightUnits)
    results.push(`Test 5: 1 kg → g = ${test5} g (esperado: 1000)`)

    setTestResults(results)
  }

  return (
    <div className="p-4 border rounded-lg bg-card">
      <h3 className="font-semibold mb-4">Test de Conversiones</h3>
      <button onClick={runTests} className="px-4 py-2 bg-primary text-primary-foreground rounded mb-4">
        Ejecutar Tests
      </button>
      <div className="space-y-2">
        {testResults.map((result, index) => (
          <div key={index} className="text-sm font-mono bg-muted p-2 rounded">
            {result}
          </div>
        ))}
      </div>
    </div>
  )
}
