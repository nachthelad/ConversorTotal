import React from "react"
import { useState, useMemo } from "react"
import { FlexibleCurrencyConverter } from "./flexible-currency-converter"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeftRight, DollarSign, Euro } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ExchangeRate {
  moneda: string
  casa: string
  nombre: string
  compra: number
  venta: number
  fechaActualizacion: string
}

interface SuperCurrencyConverterProps {
  exchangeRates: ExchangeRate[]
  loading: boolean
}

const PRESETS = [
  { from: "USD_OF", to: "ARS" },
  { from: "USD", to: "ARS" },
  { from: "EUR", to: "ARS" },
  { from: "USD", to: "EUR" },
  { from: "BRL", to: "ARS" },
  { from: "CLP", to: "ARS" },
]

const PRINCIPAL_COINS = ["USD_OF", "USD", "EUR", "BRL", "CLP", "UYU", "ARS"]

const COIN_ICONS: Record<string, React.ReactNode> = {
  USD_OF: <DollarSign className="h-4 w-4 text-primary" />,
  USD: <DollarSign className="h-4 w-4 text-muted-foreground" />,
  EUR: <Euro className="h-4 w-4 text-muted-foreground" />,
  BRL: <DollarSign className="h-4 w-4 text-muted-foreground" />,
  CLP: <DollarSign className="h-4 w-4 text-muted-foreground" />,
  UYU: <DollarSign className="h-4 w-4 text-muted-foreground" />,
  ARS: <DollarSign className="h-4 w-4 text-muted-foreground" />,
}

export function SuperCurrencyConverter({ exchangeRates, loading }: SuperCurrencyConverterProps) {
  // Obtener lista única de monedas
  const monedas = useMemo(() => {
    const set = new Set<string>()
    exchangeRates.forEach((r) => {
      if (PRINCIPAL_COINS.includes(r.moneda)) set.add(r.moneda)
    })
    set.add("ARS")
    return Array.from(set)
  }, [exchangeRates])

  // Estado de selección
  const [monedaOrigen, setMonedaOrigen] = useState("USD")
  const [monedaDestino, setMonedaDestino] = useState("ARS")

  // Buscar cotización
  const cotizacion = useMemo(() => {
    if (monedaOrigen === monedaDestino) return 1
    // USD oficial
    if (monedaOrigen === "USD_OF") {
      const rate = exchangeRates.find((r) => r.moneda === "USD" && r.casa === "oficial")
      if (monedaDestino === "ARS") return rate ? rate.venta || rate.compra : 1
      const rateTo = exchangeRates.find((r) => r.moneda === monedaDestino)
      if (rate && rateTo) return (rate.venta || rate.compra) / (rateTo.venta || rateTo.compra)
      return 1
    }
    // USD blue
    if (monedaOrigen === "USD") {
      const rate = exchangeRates.find((r) => r.moneda === "USD" && r.casa === "blue")
      if (monedaDestino === "ARS") return rate ? rate.venta || rate.compra : 1
      // USD→otra: USDblue→ARS / otra→ARS
      const rateTo = exchangeRates.find((r) => r.moneda === monedaDestino)
      if (rate && rateTo) return (rate.venta || rate.compra) / (rateTo.venta || rateTo.compra)
      return 1
    }
    if (monedaDestino === "USD") {
      const rate = exchangeRates.find((r) => r.moneda === "USD" && r.casa === "blue")
      const rateFrom = exchangeRates.find((r) => r.moneda === monedaOrigen)
      if (rate && rateFrom) return (rateFrom.venta || rateFrom.compra) / (rate.venta || rate.compra)
      return 1
    }
    if (monedaDestino === "ARS") {
      const rate = exchangeRates.find((r) => r.moneda === monedaOrigen)
      return rate ? rate.venta || rate.compra : 1
    }
    if (monedaOrigen === "ARS") {
      const rate = exchangeRates.find((r) => r.moneda === monedaDestino)
      return rate ? 1 / (rate.venta || rate.compra) : 1
    }
    // Conversión indirecta (ej: EUR→BRL)
    const rateFrom = exchangeRates.find((r) => r.moneda === monedaOrigen)
    const rateTo = exchangeRates.find((r) => r.moneda === monedaDestino)
    if (rateFrom && rateTo) {
      return (rateFrom.venta || rateFrom.compra) / (rateTo.venta || rateTo.compra)
    }
    return 1
  }, [exchangeRates, monedaOrigen, monedaDestino])

  // Buscar info de monedas
  const getNombre = (moneda: string) => {
    if (moneda === "ARS") return "Peso Argentino"
    if (moneda === "USD_OF") return "Dólar Oficial"
    if (moneda === "USD") return "Dólar Blue"
    const rate = exchangeRates.find((r) => r.moneda === moneda)
    return rate ? rate.nombre : moneda
  }
  const getSimbolo = (moneda: string) => {
    if (moneda === "ARS") return "ARS$"
    if (moneda === "USD_OF" || moneda === "USD") return "US$"
    if (moneda === "EUR") return "€"
    if (moneda === "BRL") return "R$"
    if (moneda === "CLP") return "CLP$"
    if (moneda === "UYU") return "UY$"
    return moneda
  }
  const getFecha = (moneda: string) => {
    if (moneda === "ARS") return new Date().toISOString()
    const rate = exchangeRates.find((r) => r.moneda === moneda)
    return rate ? rate.fechaActualizacion : new Date().toISOString()
  }

  // Preset handler
  const handlePreset = (from: string, to: string) => {
    setMonedaOrigen(from)
    setMonedaDestino(to)
  }

  return (
    <Card className="shadow-lg max-w-xl mx-auto">
      <CardHeader>
        <CardTitle className="text-lg text-center">Conversor Internacional de Monedas</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Presets */}
        <div>
          <div className="grid grid-cols-2 sm:[grid-template-columns:repeat(auto-fit,minmax(140px,1fr))] gap-2 justify-center mb-2">
            {PRESETS.map((preset) => (
              <Button
                key={`${preset.from}-${preset.to}`}
                size="sm"
                variant={monedaOrigen === preset.from && monedaDestino === preset.to ? "default" : "outline"}
                onClick={() => handlePreset(preset.from, preset.to)}
                title={`Conversión ${preset.from} → ${preset.to}`}
                className="rounded-lg flex items-center gap-1 px-2 py-2 text-xs w-full"
              >
                {COIN_ICONS[preset.from]}
                {preset.from} → {preset.to}
                {COIN_ICONS[preset.to]}
              </Button>
            ))}
          </div>
        </div>
        {/* Selectores */}
        <div className="flex flex-row gap-2 items-center justify-center">
          <Select value={monedaOrigen} onValueChange={setMonedaOrigen}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Moneda origen" />
            </SelectTrigger>
            <SelectContent>
              {monedas.map((m) => (
                <SelectItem key={m} value={m} className="pl-6">
                  <span className="inline-flex items-center gap-1">{COIN_ICONS[m]} {m}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant="ghost" size="icon" aria-label="Invertir monedas" onClick={() => {
            setMonedaOrigen(monedaDestino)
            setMonedaDestino(monedaOrigen)
          }}>
            <ArrowLeftRight className="h-5 w-5" />
          </Button>
          <Select value={monedaDestino} onValueChange={setMonedaDestino}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Moneda destino" />
            </SelectTrigger>
            <SelectContent>
              {monedas.map((m) => (
                <SelectItem key={m} value={m} className="pl-6">
                  <span className="inline-flex items-center gap-1">{COIN_ICONS[m]} {m}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {/* Conversor flexible */}
        <div className="flex flex-col items-center">
          <FlexibleCurrencyConverter
            monedaOrigen={monedaOrigen}
            monedaDestino={monedaDestino}
            nombreOrigen={getNombre(monedaOrigen)}
            nombreDestino={getNombre(monedaDestino)}
            simboloOrigen={getSimbolo(monedaOrigen)}
            simboloDestino={getSimbolo(monedaDestino)}
            cotizacion={cotizacion}
            fecha={getFecha(monedaOrigen)}
            fuente="DolarAPI.com"
          />
        </div>
        <div className="flex justify-center mt-2">
          <span className="bg-primary/10 text-xs px-3 py-1 rounded-full">
            Fuente: DolarAPI.com · Actualizado: {getFecha(monedaOrigen) ? new Date(getFecha(monedaOrigen)).toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" }) : "-"}
          </span>
        </div>
        {monedaOrigen === "USD" || monedaDestino === "USD" ? (
          <div className="text-xs text-muted-foreground text-center mt-2">
            Se utiliza el <b>Dólar Blue</b> como referencia para reflejar el valor real en Argentina.
          </div>
        ) : null}
      </CardContent>
    </Card>
  )
} 