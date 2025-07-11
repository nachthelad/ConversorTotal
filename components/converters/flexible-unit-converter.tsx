"use client"

import type React from "react"
import { useState, useCallback, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Copy, Share, Check, ArrowUpDown, Ruler, MapPin, Scale, Droplets, Thermometer, Square, Gauge, Clock, Activity, Zap, Power, Fuel, ChefHat, Database } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { convertUnits, type UnitCategory } from "@/lib/conversion-units"
import { presetsByCategory, UnitPreset } from "@/lib/presets"
import { useFlexibleUnitLogic, isCompositeDimension } from "@/lib/useFlexibleUnitLogic"

interface FlexibleUnitConverterProps {
  title: string
  icon: React.ReactNode
  category: UnitCategory
}

const iconMap: Record<string, React.ComponentType<any>> = {
  Ruler,
  MapPin,
  Scale,
  Droplets,
  Thermometer,
  Square,
  Gauge,
  Clock,
  Activity,
  Zap,
  Power,
  Fuel,
  ChefHat,
  Database,
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

  const presets: UnitPreset[] | undefined = presetsByCategory[category.id]

  // --- Lógica flexible para dimensiones compuestas (solo para longitud) ---
  const {
    handleFromValueChange: flexibleFromValueChange,
    handleToValueChange: flexibleToValueChange,
    cleanDimensionInput,
  } = useFlexibleUnitLogic({
    category,
    fromUnit,
    toUnit,
    onFromValue: setFromValue,
    onToValue: setToValue,
  })

  // Handlers para inputs
  const handleFromValueChange = useCallback(
    (value: string) => {
      if (category.id === "length") {
        flexibleFromValueChange(value)
      } else {
        setFromValue(value)
        if (value === "" || isNaN(Number(value))) {
          setToValue("")
          return
        }
        const numValue = Number(value)
        const converted = convertUnits(numValue, fromUnit, toUnit, category)
        setToValue(converted.toFixed(6).replace(/\.?0+$/, ""))
      }
    },
    [category, fromUnit, toUnit, flexibleFromValueChange],
  )

  const handleToValueChange = useCallback(
    (value: string) => {
      if (category.id === "length") {
        flexibleToValueChange(value)
      } else {
        setToValue(value)
        if (value === "" || isNaN(Number(value))) {
          setFromValue("")
          return
        }
        const numValue = Number(value)
        const converted = convertUnits(numValue, toUnit, fromUnit, category)
        setFromValue(converted.toFixed(6).replace(/\.?0+$/, ""))
      }
    },
    [category, fromUnit, toUnit, flexibleToValueChange],
  )

  // Limpiar automáticamente la entrada pegada (solo para longitud)
  const handleFromInputPaste = useCallback(
    (e: React.ClipboardEvent<HTMLInputElement>) => {
      if (category.id === "length") {
        const pasted = e.clipboardData.getData("text")
        const cleaned = cleanDimensionInput(pasted)
        e.preventDefault()
        flexibleFromValueChange(cleaned)
      }
    },
    [category, flexibleFromValueChange, cleanDimensionInput],
  )

  const handleToInputPaste = useCallback(
    (e: React.ClipboardEvent<HTMLInputElement>) => {
      if (category.id === "length") {
        const pasted = e.clipboardData.getData("text")
        const cleaned = cleanDimensionInput(pasted)
        e.preventDefault()
        flexibleToValueChange(cleaned)
      }
    },
    [category, flexibleToValueChange, cleanDimensionInput],
  )

  const handleFromUnitChange = useCallback(
    (unitId: string) => {
      setFromUnitId(unitId)
      setFromValue("")
      setToValue("")
    },
    [],
  )

  const handleToUnitChange = useCallback(
    (unitId: string) => {
      setToUnitId(unitId)
      setFromValue("")
      setToValue("")
    },
    [],
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
    <div>
      {/* Presets de conversiones rápidas */}
      {presets && presets.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          {presets.map((preset, idx) => {
            const Icon = iconMap[preset.icon] || Ruler
            return (
              <Button
                key={idx}
                variant="secondary"
                size="sm"
                className="px-2 py-1 h-7 text-xs flex items-center gap-1 rounded-full"
                onClick={() => {
                  setFromUnitId(preset.from)
                  setToUnitId(preset.to)
                  setFromValue("")
                  setToValue("")
                }}
                type="button"
              >
                <Icon className="h-3 w-3" />
                {preset.label}
              </Button>
            )
          })}
        </div>
      )}
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
                type="text"
                value={fromValue}
                onChange={(e) => handleFromValueChange(e.target.value)}
                onPaste={handleFromInputPaste}
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
                type="text"
                value={toValue}
                onChange={(e) => handleToValueChange(e.target.value)}
                onPaste={handleToInputPaste}
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
    </div>
  )
}
