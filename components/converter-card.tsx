"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Copy, Share, Check } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ConverterCardProps {
  title: string
  icon: React.ReactNode
  unit1: string
  unit2: string
  value1: string
  value2: string
  onChange1: (value: string) => void
  onChange2: (value: string) => void
  placeholder1?: string
  placeholder2?: string
}

export function ConverterCard({
  title,
  icon,
  unit1,
  unit2,
  value1,
  value2,
  onChange1,
  onChange2,
  placeholder1,
  placeholder2,
}: ConverterCardProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const { toast } = useToast()

  const copyToClipboard = async (
    fromValue: string,
    fromUnit: string,
    toValue: string,
    toUnit: string,
    field: string,
  ) => {
    if (!fromValue || fromValue === "0" || !toValue || toValue === "0") return

    const message = `🔄 ${title}: ${fromValue} ${fromUnit} = ${toValue} ${toUnit}\n\n✨ ConversorTotal`

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
  }

  const shareToWhatsApp = (fromValue: string, fromUnit: string, toValue: string, toUnit: string) => {
    if (!fromValue || fromValue === "0" || !toValue || toValue === "0") return

    const message = `${fromValue} ${fromUnit} es igual a ${toValue} ${toUnit}`
    const whatsappMessage = `🔄 ${title}: ${message}\n\n✨ ConversorTotal`
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

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
          <Label htmlFor={`${title}-input1`} className="text-sm font-medium">
            {unit1}
          </Label>
          <div className="flex space-x-2">
            <Input
              id={`${title}-input1`}
              type="number"
              value={value1}
              onChange={(e) => onChange1(e.target.value)}
              placeholder={placeholder1 || `Ingresa ${unit1.toLowerCase()}`}
              className="flex-1"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={() => copyToClipboard(value1, unit1, value2, unit2, "field1")}
              disabled={!value1 || value1 === "0" || !value2 || value2 === "0"}
              className="shrink-0"
              title="Copiar resultado"
            >
              {copiedField === "field1" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => shareToWhatsApp(value1, unit1, value2, unit2)}
              disabled={!value1 || value1 === "0" || !value2 || value2 === "0"}
              className="shrink-0"
              title="Compartir por WhatsApp"
            >
              <Share className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor={`${title}-input2`} className="text-sm font-medium">
            {unit2}
          </Label>
          <div className="flex space-x-2">
            <Input
              id={`${title}-input2`}
              type="number"
              value={value2}
              onChange={(e) => onChange2(e.target.value)}
              placeholder={placeholder2 || `Ingresa ${unit2.toLowerCase()}`}
              className="flex-1"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={() => copyToClipboard(value2, unit2, value1, unit1, "field2")}
              disabled={!value1 || value1 === "0" || !value2 || value2 === "0"}
              className="shrink-0"
              title="Copiar resultado"
            >
              {copiedField === "field2" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => shareToWhatsApp(value2, unit2, value1, unit1)}
              disabled={!value1 || value1 === "0" || !value2 || value2 === "0"}
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
