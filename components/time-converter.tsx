"use client"

import { useState } from "react"
import { Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Share, Check, Copy } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function TimeConverter() {
  const [timeHHMM, setTimeHHMM] = useState("")
  const [decimalHours, setDecimalHours] = useState("")
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const { toast } = useToast()

  const timeToDecimal = (time: string) => {
    const [hours, minutes] = time.split(":").map(Number)
    if (isNaN(hours) || isNaN(minutes)) return Number.NaN
    return hours + minutes / 60
  }

  const decimalToTime = (decimal: number) => {
    const hours = Math.floor(decimal)
    const minutes = Math.round((decimal - hours) * 60)
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
  }

  const handleTimeChange = (value: string) => {
    setTimeHHMM(value)
    if (value === "") {
      setDecimalHours("")
      return
    }

    // Validar formato HH:MM
    const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/
    if (timeRegex.test(value)) {
      const decimal = timeToDecimal(value)
      if (!isNaN(decimal)) {
        setDecimalHours(decimal.toFixed(4))
      }
    }
  }

  const handleDecimalChange = (value: string) => {
    setDecimalHours(value)
    if (value === "") {
      setTimeHHMM("")
      return
    }
    const numValue = Number.parseFloat(value)
    if (!isNaN(numValue) && numValue >= 0 && numValue < 24) {
      setTimeHHMM(decimalToTime(numValue))
    }
  }

  const copyToClipboard = async (field: string) => {
    if (!timeHHMM || !decimalHours) return

    const baseMessage =
      field === "time"
        ? `${timeHHMM} es igual a ${decimalHours} horas decimales`
        : `${decimalHours} horas decimales es igual a ${timeHHMM}`

    const message = `🔄 Conversión de Tiempo:\n${baseMessage}\n\n✨ Convertido con ConversorTotal`

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

  const shareToWhatsApp = (field: string) => {
    if (!timeHHMM || !decimalHours) return

    const message =
      field === "time"
        ? `${timeHHMM} es igual a ${decimalHours} horas decimales`
        : `${decimalHours} horas decimales es igual a ${timeHHMM}`

    const whatsappMessage = `🔄 Conversión de Tiempo:\n${message}\n\n✨ Convertido con ConversorTotal`
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center space-x-2 text-lg">
          <Clock className="h-5 w-5 text-green-500" />
          <span>Tiempo</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="time-hhmm" className="text-sm font-medium">
            Tiempo (HH:MM)
          </Label>
          <div className="flex space-x-2">
            <Input
              id="time-hhmm"
              type="text"
              value={timeHHMM}
              onChange={(e) => handleTimeChange(e.target.value)}
              placeholder="Ingresa tiempo (ej: 14:30)"
              pattern="^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$"
              className="flex-1"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={() => copyToClipboard("time")}
              disabled={!timeHHMM || !decimalHours}
              className="shrink-0"
              title="Copiar resultado"
            >
              {copiedField === "time" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => shareToWhatsApp("time")}
              disabled={!timeHHMM || !decimalHours}
              className="shrink-0"
              title="Compartir por WhatsApp"
            >
              <Share className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="decimal-hours" className="text-sm font-medium">
            Horas Decimales
          </Label>
          <div className="flex space-x-2">
            <Input
              id="decimal-hours"
              type="number"
              value={decimalHours}
              onChange={(e) => handleDecimalChange(e.target.value)}
              placeholder="Ingresa horas decimales (ej: 14.5)"
              min="0"
              max="23.9999"
              step="0.0001"
              className="flex-1"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={() => copyToClipboard("decimal")}
              disabled={!timeHHMM || !decimalHours}
              className="shrink-0"
              title="Copiar resultado"
            >
              {copiedField === "decimal" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => shareToWhatsApp("decimal")}
              disabled={!timeHHMM || !decimalHours}
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
