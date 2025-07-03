import { useState } from "react"
import { FlexibleCurrencyConverter } from "./flexible-currency-converter"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Euro } from "lucide-react"

interface ExchangeRate {
  moneda: string
  casa: string
  nombre: string
  compra: number
  venta: number
  fechaActualizacion: string
}

interface ArgentinianCurrencyConverterProps {
  exchangeRates: ExchangeRate[]
  loading: boolean
}

const DOLLAR_VARIANTS = [
  { label: "Dólar Blue", value: "blue", icon: <DollarSign className="h-4 w-4 text-muted-foreground" />, tooltip: "Mercado informal, el más usado en la calle" },
  { label: "Dólar Oficial", value: "oficial", icon: <DollarSign className="h-4 w-4 text-muted-foreground" />, tooltip: "Tipo de cambio oficial del gobierno" },
  { label: "Dólar Tarjeta", value: "tarjeta", icon: <DollarSign className="h-4 w-4 text-muted-foreground" />, tooltip: "Compras con tarjeta en el exterior" },
  { label: "Dólar Bolsa", value: "bolsa", icon: <DollarSign className="h-4 w-4 text-muted-foreground" />, tooltip: "Operaciones bursátiles (MEP)" },
  { label: "Dólar Cripto", value: "cripto", icon: <DollarSign className="h-4 w-4 text-muted-foreground" />, tooltip: "Compra/venta de criptomonedas" },
  { label: "Dólar Mayorista", value: "mayorista", icon: <DollarSign className="h-4 w-4 text-muted-foreground" />, tooltip: "Grandes operaciones entre bancos" },
]
const REGIONALS = [
  { label: "Euro", value: "EUR", icon: <Euro className="h-4 w-4 text-muted-foreground" />, tooltip: "Euro oficial en Argentina" },
  { label: "Real Brasilero", value: "BRL", icon: <DollarSign className="h-4 w-4 text-muted-foreground" />, tooltip: "Real oficial en Argentina" },
  { label: "Peso Chileno", value: "CLP", icon: <DollarSign className="h-4 w-4 text-muted-foreground" />, tooltip: "Peso chileno oficial en Argentina" },
  { label: "Peso Uruguayo", value: "UYU", icon: <DollarSign className="h-4 w-4 text-muted-foreground" />, tooltip: "Peso uruguayo oficial en Argentina" },
]

export function ArgentinianCurrencyConverter({ exchangeRates, loading }: ArgentinianCurrencyConverterProps) {
  const [selected, setSelected] = useState<{ type: "dollar" | "regional"; value: string }>({ type: "dollar", value: "blue" })

  let rate: ExchangeRate | undefined
  if (selected.type === "dollar") {
    rate = exchangeRates.find(r => r.moneda === "USD" && r.casa === selected.value)
  } else {
    rate = exchangeRates.find(r => r.moneda === selected.value)
  }

  const presets = [
    ...DOLLAR_VARIANTS.map(d => ({ ...d, type: "dollar" as const })),
    ...REGIONALS.map(r => ({ ...r, type: "regional" as const })),
  ]

  return (
    <Card className="shadow-lg max-w-xl mx-auto">
      <CardHeader>
        <CardTitle className="text-lg text-center">Convertí entre variantes del dólar y monedas regionales</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div>
          <div className="grid grid-cols-2 sm:[grid-template-columns:repeat(auto-fit,minmax(140px,1fr))] gap-2 justify-center mb-2">
            {presets.map((preset) => (
              <Button
                key={preset.value}
                size="sm"
                variant={selected.value === preset.value && selected.type === preset.type ? "default" : "outline"}
                onClick={() => setSelected({ type: preset.type, value: preset.value })}
                title={preset.label}
                className="rounded-lg flex items-center gap-1 px-2 py-2 text-xs w-full"
              >
                {preset.icon}
                {preset.label}
              </Button>
            ))}
          </div>
        </div>
        {rate && (
          <div className="flex flex-col items-center">
            <FlexibleCurrencyConverter
              monedaOrigen={rate.moneda}
              monedaDestino="ARS"
              nombreOrigen={rate.nombre}
              nombreDestino="Peso Argentino"
              simboloOrigen={rate.moneda === "USD" ? "US$" : rate.moneda === "EUR" ? "€" : rate.moneda}
              simboloDestino="ARS$"
              cotizacion={rate.venta || rate.compra}
              fecha={rate.fechaActualizacion}
              fuente="DolarAPI.com"
            />
          </div>
        )}
        {selected.type === "dollar" && (
          <div className="text-xs text-muted-foreground text-center mt-2">
            Mostrando cotización de <b>{DOLLAR_VARIANTS.find(d => d.value === selected.value)?.label}</b> contra el Peso Argentino.
          </div>
        )}
      </CardContent>
    </Card>
  )
} 