"use client"

import { useState } from "react"
import { DollarSign, Euro, Banknote } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Copy, Share, Check } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ExchangeRate {
  moneda: string
  casa: string
  nombre: string
  compra: number
  venta: number
  fechaActualizacion: string
}

interface CurrencyConverterProps {
  exchangeRate: ExchangeRate
}

export function CurrencyConverter({ exchangeRate }: CurrencyConverterProps) {
  const [foreignAmount, setForeignAmount] = useState("")
  const [pesosAmount, setPesosAmount] = useState("")
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const { toast } = useToast()

  // Usar precio de venta para convertir de moneda extranjera a pesos
  // Usar precio de compra para convertir de pesos a moneda extranjera
  const rate = exchangeRate.venta || exchangeRate.compra || 1

  const getIcon = () => {
    if (exchangeRate.moneda === "USD") return <DollarSign className="h-5 w-5 text-green-500" />
    if (exchangeRate.moneda === "EUR") return <Euro className="h-5 w-5 text-blue-500" />
    return <Banknote className="h-5 w-5 text-purple-500" />
  }

  const getCurrencyName = () => {
    const currencyNames: { [key: string]: string } = {
      USD: "Dólares",
      EUR: "Euros",
      BRL: "Reales Brasileros",
      CLP: "Pesos Chilenos",
      UYU: "Pesos Uruguayos",
    }
    return currencyNames[exchangeRate.moneda] || exchangeRate.nombre || "Moneda"
  }

  const getCurrencySymbol = () => {
    const symbols: { [key: string]: string } = {
      USD: "US$",
      EUR: "€",
      BRL: "R$",
      CLP: "CLP$",
      UYU: "UY$",
    }
    return symbols[exchangeRate.moneda] || exchangeRate.moneda
  }

  const handleForeignAmountChange = (value: string) => {
    setForeignAmount(value)
    if (value === "") {
      setPesosAmount("")
      return
    }
    const numValue = Number.parseFloat(value)
    if (!isNaN(numValue) && numValue >= 0) {
      setPesosAmount((numValue * rate).toFixed(2))
    }
  }

  const handlePesosAmountChange = (value: string) => {
    setPesosAmount(value)
    if (value === "") {
      setForeignAmount("")
      return
    }
    const numValue = Number.parseFloat(value)
    if (!isNaN(numValue) && numValue >= 0) {
      setForeignAmount((numValue / rate).toFixed(2))
    }
  }

  const copyToClipboard = async (
    fromValue: string,
    fromUnit: string,
    toValue: string,
    toUnit: string,
    field: string,
  ) => {
    if (!fromValue || fromValue === "0" || !toValue || toValue === "0") return

    const title = `${getCurrencyName()} ${exchangeRate.casa ? `(${exchangeRate.casa})` : ""}`
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
  }

  const shareToWhatsApp = (fromValue: string, fromUnit: string, toValue: string, toUnit: string) => {
    if (!fromValue || fromValue === "0" || !toValue || toValue === "0") return

    const title = `${getCurrencyName()} ${exchangeRate.casa ? `(${exchangeRate.casa})` : ""}`
    const message = `${fromValue} ${fromUnit} es igual a ${toValue} ${toUnit}`
    const whatsappMessage = `🔄 Conversión de ${title}:\n${message}\n\n✨ Convertido con ConversorTotal`
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      return date.toLocaleString("es-AR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    } catch {
      return "Fecha no disponible"
    }
  }

  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center justify-between text-lg">
          <div className="flex items-center space-x-2">
            {getIcon()}
            <span>{getCurrencyName()}</span>
            {exchangeRate.casa && <span className="text-sm text-muted-foreground">({exchangeRate.casa})</span>}
          </div>
          <div className="text-sm text-muted-foreground">${rate.toFixed(2)}</div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor={`${exchangeRate.moneda}-${exchangeRate.casa}-foreign`} className="text-sm font-medium">
            {getCurrencyName()} ({getCurrencySymbol()})
          </Label>
          <div className="flex space-x-2">
            <Input
              id={`${exchangeRate.moneda}-${exchangeRate.casa}-foreign`}
              type="number"
              value={foreignAmount}
              onChange={(e) => handleForeignAmountChange(e.target.value)}
              placeholder={`Ingresa cantidad en ${getCurrencySymbol()}`}
              className="flex-1"
              min="0"
              step="0.01"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={() => copyToClipboard(foreignAmount, getCurrencySymbol(), pesosAmount, "ARS$", "field1")}
              disabled={!foreignAmount || foreignAmount === "0" || !pesosAmount || pesosAmount === "0"}
              className="shrink-0"
              title="Copiar resultado"
            >
              {copiedField === "field1" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => shareToWhatsApp(foreignAmount, getCurrencySymbol(), pesosAmount, "ARS$")}
              disabled={!foreignAmount || foreignAmount === "0" || !pesosAmount || pesosAmount === "0"}
              className="shrink-0"
              title="Compartir por WhatsApp"
            >
              <Share className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor={`${exchangeRate.moneda}-${exchangeRate.casa}-pesos`} className="text-sm font-medium">
            Pesos Argentinos (ARS$)
          </Label>
          <div className="flex space-x-2">
            <Input
              id={`${exchangeRate.moneda}-${exchangeRate.casa}-pesos`}
              type="number"
              value={pesosAmount}
              onChange={(e) => handlePesosAmountChange(e.target.value)}
              placeholder="Ingresa cantidad en ARS$"
              className="flex-1"
              min="0"
              step="0.01"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={() => copyToClipboard(pesosAmount, "ARS$", foreignAmount, getCurrencySymbol(), "field2")}
              disabled={!foreignAmount || foreignAmount === "0" || !pesosAmount || pesosAmount === "0"}
              className="shrink-0"
              title="Copiar resultado"
            >
              {copiedField === "field2" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => shareToWhatsApp(pesosAmount, "ARS$", foreignAmount, getCurrencySymbol())}
              disabled={!foreignAmount || foreignAmount === "0" || !pesosAmount || pesosAmount === "0"}
              className="shrink-0"
              title="Compartir por WhatsApp"
            >
              <Share className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="text-xs text-muted-foreground">
          <p>Cotización: ${rate.toFixed(2)} ARS</p>
          <p>Actualizado: {formatDate(exchangeRate.fechaActualizacion)}</p>
        </div>
      </CardContent>
    </Card>
  )
}
