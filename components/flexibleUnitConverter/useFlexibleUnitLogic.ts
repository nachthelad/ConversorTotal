import { useCallback } from "react"
import { convertUnits, Unit, UnitCategory } from "@/lib/conversion-units"

// Limpia y normaliza la entrada: quita espacios, comillas y normaliza separador a 'x'
export function cleanDimensionInput(input: string): string {
  return input
    .replace(/['"”]/g, "") // quita comillas
    .replace(/\s*([xX×])\s*/g, "x") // normaliza separador x
    .replace(/\s+/g, "") // quita espacios extra
}

// Detecta si la entrada es compuesta (ej: 1x2x3)
export function isCompositeDimension(input: string): boolean {
  return /^(\d+(?:\.\d+)?x)+\d+(?:\.\d+)?$/.test(cleanDimensionInput(input))
}

// Parsea la entrada compuesta a array de números
export function parseCompositeDimension(input: string): number[] {
  return cleanDimensionInput(input)
    .split("x")
    .map((v) => parseFloat(v))
    .filter((v) => !isNaN(v))
}

// Formatea el array de números a string compuesto
export function formatCompositeDimension(values: number[]): string {
  return values.map((v) => Number(v.toFixed(6)).toString().replace(/\.?0+$/, "")).join("x")
}

// Convierte cada valor del array de una unidad a otra
export function convertCompositeDimension(
  values: number[],
  fromUnit: Unit,
  toUnit: Unit,
  category: UnitCategory
): number[] {
  return values.map((v) => convertUnits(v, fromUnit, toUnit, category))
}

// Hook principal para manejar la lógica de dimensiones compuestas
export function useFlexibleUnitLogic({
  category,
  fromUnit,
  toUnit,
  onFromValue,
  onToValue,
}: {
  category: UnitCategory
  fromUnit: Unit
  toUnit: Unit
  onFromValue: (val: string) => void
  onToValue: (val: string) => void
}) {
  // Handler para el input de origen
  const handleFromValueChange = useCallback(
    (value: string) => {
      const cleaned = cleanDimensionInput(value)
      if (category.id === "length" && isCompositeDimension(cleaned)) {
        const values = parseCompositeDimension(cleaned)
        const converted = convertCompositeDimension(values, fromUnit, toUnit, category)
        onFromValue(cleaned)
        onToValue(formatCompositeDimension(converted))
      } else {
        // fallback: valor simple
        onFromValue(value)
        if (value === "" || isNaN(Number(value))) {
          onToValue("")
          return
        }
        const numValue = Number(value)
        const converted = convertUnits(numValue, fromUnit, toUnit, category)
        onToValue(Number(converted.toFixed(6)).toString().replace(/\.?0+$/, ""))
      }
    },
    [category, fromUnit, toUnit, onFromValue, onToValue]
  )

  // Handler para el input de destino
  const handleToValueChange = useCallback(
    (value: string) => {
      const cleaned = cleanDimensionInput(value)
      if (category.id === "length" && isCompositeDimension(cleaned)) {
        const values = parseCompositeDimension(cleaned)
        const converted = convertCompositeDimension(values, toUnit, fromUnit, category)
        onToValue(cleaned)
        onFromValue(formatCompositeDimension(converted))
      } else {
        // fallback: valor simple
        onToValue(value)
        if (value === "" || isNaN(Number(value))) {
          onFromValue("")
          return
        }
        const numValue = Number(value)
        const converted = convertUnits(numValue, toUnit, fromUnit, category)
        onFromValue(Number(converted.toFixed(6)).toString().replace(/\.?0+$/, ""))
      }
    },
    [category, fromUnit, toUnit, onFromValue, onToValue]
  )

  return {
    handleFromValueChange,
    handleToValueChange,
    cleanDimensionInput,
    isCompositeDimension,
  }
} 