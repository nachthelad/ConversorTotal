import { useState } from "react"

interface UseFlexibleCurrencyConverterProps {
  cotizacion: number
}

export function useFlexibleCurrencyConverter({ cotizacion }: UseFlexibleCurrencyConverterProps) {
  const [valorOrigen, setValorOrigen] = useState("")
  const [valorDestino, setValorDestino] = useState("")

  const handleOrigenChange = (value: string) => {
    setValorOrigen(value)
    if (value === "") {
      setValorDestino("")
      return
    }
    const numValue = Number.parseFloat(value)
    if (!isNaN(numValue) && numValue >= 0) {
      setValorDestino((numValue * cotizacion).toFixed(2))
    }
  }

  const handleDestinoChange = (value: string) => {
    setValorDestino(value)
    if (value === "") {
      setValorOrigen("")
      return
    }
    const numValue = Number.parseFloat(value)
    if (!isNaN(numValue) && numValue >= 0) {
      setValorOrigen((numValue / cotizacion).toFixed(2))
    }
  }

  return {
    valorOrigen,
    setValorOrigen,
    valorDestino,
    setValorDestino,
    handleOrigenChange,
    handleDestinoChange,
  }
} 