"use client"

import { useState, useEffect } from "react"
import { DollarSign, Euro } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Copy, Share, Check, RefreshCw } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function UsdEurConverter() {
  const [usdAmount, setUsdAmount] = useState("")
  const [eurAmount, setEurAmount] = useState("")
  const [exchangeRate, setExchangeRate] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const { toast } = useToast()

  const fetchExchangeRate = async () => {
    setLoading(true)
    try {
      // Usando ExchangeRate-API que es gratuita y confiable
      const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD")
      const data = await response.json()

      if (data.rates && data.rates.EUR) {
        setExchangeRate(data.rates.EUR)
        setLastUpdated(new Date())
      } else {
        // Fallback rate si la API falla
        setExchangeRate(0.85)
        setLastUpdated(new Date())
        toast({
          description: "Usando cotización de referencia",
          variant: "default",
        })
      }
    } catch (error) {
      console.error("Error fetching exchange rate:", error)
      // Fallback rate
      setExchangeRate(0.85)
      setLastUpdated(new Date())
      toast({
        description: "Error al obtener cotización. Usando valor de referencia.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchExchangeRate()
  }, [])

  const handleUsdChange = (value: string) => {
    setUsdAmount(value)
    if (value === "" || !exchangeRate) {
      setEurAmount("")
      return
    }
    const numValue = Number.parseFloat(value)
    if (!isNaN(numValue) && numValue >= 0) {
      setEurAmount((numValue * exchangeRate).toFixed(2))
    }
  }

  const handleEurChange = (value: string) => {
    setEurAmount(value)
    if (value === "" || !exchangeRate) {
      setUsdAmount("")
      return
    }
    const numValue = Number.parseFloat(value)
    if (!isNaN(numValue) && numValue >= 0) {
      setUsdAmount((numValue / exchangeRate).toFixed(2))
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

    const message = `🔄 Conversión USD ↔ EUR:\n${fromValue} ${fromUnit} es igual a ${toValue} ${toUnit}\nCotización: 1 USD = ${exchangeRate?.toFixed(4)} EUR\n\n✨ Convertido con ConversorTotal`

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
    const whatsappMessage = `🔄 Conversión USD ↔ EUR:\n${message}\nCotización: 1 USD = ${exchangeRate?.toFixed(4)} EUR\n\n✨ Convertido con ConversorTotal`
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  const formatDate = (date: Date) => {
    return date.toLocaleString("es-AR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center justify-between text-lg">
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <DollarSign className="h-5 w-5 text-green-500" />
              <span className="mx-1">↔</span>
              <Euro className="h-5 w-5 text-blue-500" />
            </div>
            <span>USD ↔ EUR</span>
          </div>
          <div className="flex items-center space-x-2">
            {exchangeRate && <div className="text-sm text-muted-foreground">1 USD = {exchangeRate.toFixed(4)} EUR</div>}
            <Button
              variant="ghost"
              size="sm"
              onClick={fetchExchangeRate}
              disabled={loading}
              title="Actualizar cotización"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="usd-amount" className="text-sm font-medium">
            Dólares Estadounidenses (USD)
          </Label>
          <div className="flex space-x-2">
            <Input
              id="usd-amount"
              type="number"
              value={usdAmount}
              onChange={(e) => handleUsdChange(e.target.value)}
              placeholder="Ingresa cantidad en USD"
              className="flex-1"
              min="0"
              step="0.01"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={() => copyToClipboard(usdAmount, "USD", eurAmount, "EUR", "field1")}
              disabled={!usdAmount || usdAmount === "0" || !eurAmount || eurAmount === "0"}
              className="shrink-0"
              title="Copiar resultado"
            >
              {copiedField === "field1" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => shareToWhatsApp(usdAmount, "USD", eurAmount, "EUR")}
              disabled={!usdAmount || usdAmount === "0" || !eurAmount || eurAmount === "0"}
              className="shrink-0"
              title="Compartir por WhatsApp"
            >
              <Share className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="eur-amount" className="text-sm font-medium">
            Euros (EUR)
          </Label>
          <div className="flex space-x-2">
            <Input
              id="eur-amount"
              type="number"
              value={eurAmount}
              onChange={(e) => handleEurChange(e.target.value)}
              placeholder="Ingresa cantidad en EUR"
              className="flex-1"
              min="0"
              step="0.01"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={() => copyToClipboard(eurAmount, "EUR", usdAmount, "USD", "field2")}
              disabled={!usdAmount || usdAmount === "0" || !eurAmount || eurAmount === "0"}
              className="shrink-0"
              title="Copiar resultado"
            >
              {copiedField === "field2" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => shareToWhatsApp(eurAmount, "EUR", usdAmount, "USD")}
              disabled={!usdAmount || usdAmount === "0" || !eurAmount || eurAmount === "0"}
              className="shrink-0"
              title="Compartir por WhatsApp"
            >
              <Share className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="text-xs text-muted-foreground">
          <p>Cotización: 1 USD = {exchangeRate?.toFixed(4) || "..."} EUR</p>
          <p>Actualizado: {lastUpdated ? formatDate(lastUpdated) : "Cargando..."}</p>
          <p className="text-muted-foreground/70">Fuente: ExchangeRate-API</p>
        </div>
      </CardContent>
    </Card>
  )
}
