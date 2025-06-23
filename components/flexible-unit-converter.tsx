"use client"

import type React from "react"
import { useState, useCallback, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Copy, Share, Check, ArrowUpDown } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { convertUnits, type UnitCategory } from "@/lib/conversion-units"

interface FlexibleUnitConverterProps {
  title: string
  icon: React.ReactNode
  category: UnitCategory
}

export function FlexibleUnitConverter({ title, icon, category }: FlexibleUnitConverterProps) {
  const [fromValue, setFromValue] = useState("")
  const [toValue, setToValue] = useState("")
  const [fromUnitId, setFromUnitId] = useState(category.units[0].id)
  const [toUnitId, setToUnitId] = useState(category.units[1]?.id || category.units[0].id)
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const { toast } = useToast()

  const fromUnit = useMemo(
    () => category.units.find((unit) => unit.id === fromUnitId) || category.units[0],
    [fromUnitId, category.units],
  )

  const toUnit = useMemo(
    () => category.units.find((unit) => unit.id === toUnitId) || category.units[0],
    [toUnitId, category.units],
  )

  const handleFromValueChange = useCallback(
    (value: string) => {
      setFromValue(value)
      if (value === "" || isNaN(Number(value))) {
        setToValue("")
        return
      }

      const numValue = Number(value)
      const converted = convertUnits(numValue, fromUnit, toUnit, category)
      setToValue(converted.toFixed(6).replace(/\.?0+$/, ""))
    },
    [fromUnit, toUnit, category],
  )

  const handleToValueChange = useCallback(
    (value: string) => {
      setToValue(value)
      if (value === "" || isNaN(Number(value))) {
        setFromValue("")
        return
      }

      const numValue = Number(value)
      const converted = convertUnits(numValue, toUnit, fromUnit, category)
      setFromValue(converted.toFixed(6).replace(/\.?0+$/, ""))
    },
    [fromUnit, toUnit, category],
  )

  const handleFromUnitChange = useCallback(
    (unitId: string) => {
      setFromUnitId(unitId)

      // Si hay un valor válido en el campo de origen, recalcular
      if (fromValue && !isNaN(Number(fromValue)) && Number(fromValue) !== 0) {
        const newFromUnit = category.units.find((unit) => unit.id === unitId) || category.units[0]
        const converted = convertUnits(Number(fromValue), newFromUnit, toUnit, category)
        const formattedResult = converted.toFixed(8).replace(/\.?0+$/, "")
        setToValue(formattedResult)
      }
    },
    [fromValue, toUnit, category],
  )

  const handleToUnitChange = useCallback(
    (unitId: string) => {
      setToUnitId(unitId)

      // Si hay un valor válido en el campo de origen, recalcular
      if (fromValue && !isNaN(Number(fromValue)) && Number(fromValue) !== 0) {
        const newToUnit = category.units.find((unit) => unit.id === unitId) || category.units[0]
        const converted = convertUnits(Number(fromValue), fromUnit, newToUnit, category)
        const formattedResult = converted.toFixed(8).replace(/\.?0+$/, "")
        setToValue(formattedResult)
      }
    },
    [fromValue, fromUnit, category],
  )

  const swapUnits = useCallback(() => {
    const tempUnitId = fromUnitId
    const tempValue = fromValue

    setFromUnitId(toUnitId)
    setToUnitId(tempUnitId)
    setFromValue(toValue)
    setToValue(tempValue)
  }, [fromUnitId, toUnitId, fromValue, toValue])

  const copyToClipboard = useCallback(
    async (field: string) => {
      const sourceValue = field === "from" ? fromValue : toValue
      const sourceUnit = field === "from" ? fromUnit : toUnit
      const targetValue = field === "from" ? toValue : fromValue
      const targetUnit = field === "from" ? toUnit : fromUnit

      if (!sourceValue || !targetValue) return

      const message = `🔄 Conversión de ${title}:\n${sourceValue} ${sourceUnit.name} = ${targetValue} ${targetUnit.name}\n\n✨ Convertido con ConversorTotal`

      try {
        await navigator.clipboard.writeText(message)
        setCopiedField(field)
        toast({
          description: "Copiado al portapapeles",
        })
        setTimeout(() => setCopiedField(null), 2000)
      } catch (err) {
        toast({
          description: "Error al copiar al portapapeles",
          variant: "destructive",
        })
      }
    },
    [title, fromValue, toValue, fromUnit, toUnit, toast],
  )

  const shareToWhatsApp = useCallback(() => {
    if (!fromValue || !toValue) return

    const message = `🔄 Conversión de ${title}:\n${fromValue} ${fromUnit.name} = ${toValue} ${toUnit.name}\n\n✨ Convertido con ConversorTotal`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }, [title, fromValue, toValue, fromUnit, toUnit])

  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center space-x-2 text-lg">
          {icon}
          <span>Conversor de {title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Desde */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Desde:</Label>
          <div className="flex space-x-2">
            <Select value={fromUnitId} onValueChange={handleFromUnitChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {category.units.map((unit) => (
                  <SelectItem key={unit.id} value={unit.id}>
                    {unit.name} ({unit.symbol})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type="number"
              value={fromValue}
              onChange={(e) => handleFromValueChange(e.target.value)}
              placeholder={`Ingresa ${fromUnit.name.toLowerCase()}`}
              className="flex-1"
            />
          </div>
        </div>

        {/* Botón de intercambio */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            size="icon"
            onClick={swapUnits}
            className="rounded-full"
            title="Intercambiar unidades"
          >
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        </div>

        {/* Hacia */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Hacia:</Label>
          <div className="flex space-x-2">
            <Select value={toUnitId} onValueChange={handleToUnitChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {category.units.map((unit) => (
                  <SelectItem key={unit.id} value={unit.id}>
                    {unit.name} ({unit.symbol})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type="number"
              value={toValue}
              onChange={(e) => handleToValueChange(e.target.value)}
              placeholder={`Resultado en ${toUnit.name.toLowerCase()}`}
              className="flex-1"
            />
          </div>
        </div>

        {/* Botones de acción */}
        {fromValue && toValue && (
          <div className="flex justify-center space-x-2 pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => copyToClipboard("from")}
              className="flex items-center space-x-1"
            >
              {copiedField === "from" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              <span>Copiar</span>
            </Button>
            <Button variant="outline" size="sm" onClick={shareToWhatsApp} className="flex items-center space-x-1">
              <Share className="h-4 w-4" />
              <span>Compartir</span>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
