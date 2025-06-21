"use client"

import type React from "react"
import { useState, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Copy, Share, Check } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface UnitConverterProps {
  title: string
  icon: React.ReactNode
  unit1: string
  unit2: string
  convert1To2: (value: number) => number
  convert2To1: (value: number) => number
  placeholder1?: string
  placeholder2?: string
}

export function UnitConverter({
  title,
  icon,
  unit1,
  unit2,
  convert1To2,
  convert2To1,
  placeholder1,
  placeholder2,
}: UnitConverterProps) {
  const [value1, setValue1] = useState("")
  const [value2, setValue2] = useState("")
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const { toast } = useToast()

  const handleValue1Change = useCallback(
    (value: string) => {
      setValue1(value)
      const numValue = Number(value)
      if (!isNaN(numValue)) {
        setValue2(convert1To2(numValue).toFixed(2))
      } else {
        setValue2("")
      }
    },
    [convert1To2],
  )

  const handleValue2Change = useCallback(
    (value: string) => {
      setValue2(value)
      const numValue = Number(value)
      if (!isNaN(numValue)) {
        setValue1(convert2To1(numValue).toFixed(2))
      } else {
        setValue1("")
      }
    },
    [convert2To1],
  )

  const copyToClipboard = useCallback(
    async (field: string) => {
      const fromValue = field === "value1" ? value1 : value2
      const fromUnit = field === "value1" ? unit1 : unit2
      const toValue = field === "value1" ? value2 : value1
      const toUnit = field === "value1" ? unit2 : unit1

      if (!fromValue || !toValue) return

      const message = `🔄 Conversión de ${title}:\n${fromValue} ${fromUnit} es igual a ${toValue} ${toUnit}\n\n✨ Convertido con ConversorTotal`

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
    [title, value1, value2, unit1, unit2, toast],
  )

  const shareToWhatsApp = useCallback(() => {
    if (!value1 || !value2) return

    const message = `🔄 Conversión de ${title}:\n${value1} ${unit1} es igual a ${value2} ${unit2}\n\n✨ Convertido con ConversorTotal`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }, [title, value1, value2, unit1, unit2])

  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center space-x-2 text-lg">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="input1" className="text-sm font-medium">
            {unit1}
          </Label>
          <div className="flex space-x-2">
            <Input
              id="input1"
              type="number"
              value={value1}
              onChange={(e) => handleValue1Change(e.target.value)}
              placeholder={placeholder1 || `Ingresa ${unit1.toLowerCase()}`}
              className="flex-1"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={() => copyToClipboard("value1")}
              disabled={!value1 || !value2}
              className="shrink-0"
              title="Copiar resultado"
            >
              {copiedField === "value1" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={shareToWhatsApp}
              disabled={!value1 || !value2}
              className="shrink-0"
              title="Compartir por WhatsApp"
            >
              <Share className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="input2" className="text-sm font-medium">
            {unit2}
          </Label>
          <div className="flex space-x-2">
            <Input
              id="input2"
              type="number"
              value={value2}
              onChange={(e) => handleValue2Change(e.target.value)}
              placeholder={placeholder2 || `Ingresa ${unit2.toLowerCase()}`}
              className="flex-1"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={() => copyToClipboard("value2")}
              disabled={!value1 || !value2}
              className="shrink-0"
              title="Copiar resultado"
            >
              {copiedField === "value2" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={shareToWhatsApp}
              disabled={!value1 || !value2}
              className="shrink-0"
              title="Compartir por WhatsApp"
            >
              <Share className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
