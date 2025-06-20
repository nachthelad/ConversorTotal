"use client"

import { useState, useEffect } from "react"
import { CurrencyConverter } from "@/components/currency-converter"
import { UsdEurConverter } from "@/components/usd-eur-converter"
import { Button } from "@/components/ui/button"
import { TrendingUp, RefreshCw } from "lucide-react"
import Link from "next/link"

interface ExchangeRate {
  moneda: string
  casa: string
  nombre: string
  compra: number
  venta: number
  fechaActualizacion: string
}

interface ApiResponse {
  data: ExchangeRate[]
  success: boolean
  usingFallback: boolean
  successCount: number
  totalApis: number
  error?: string
  timestamp: string
}

export default function MonedasPage() {
  const [exchangeRates, setExchangeRates] = useState<ExchangeRate[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [usingFallback, setUsingFallback] = useState(false)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const [apiStats, setApiStats] = useState<{ success: number; total: number } | null>(null)

  const fetchExchangeRates = async () => {
    try {
      setLoading(true)
      setError(null)
      console.log("🔄 Obteniendo cotizaciones desde nuestra API...")

      const response = await fetch("/api/cotizaciones", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // Cache por 1 minuto para evitar requests excesivos
        next: { revalidate: 60 },
      })

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`)
      }

      const result: ApiResponse = await response.json()

      console.log("📊 Respuesta de API:", result)

      // Validar que result.data existe y es un array
      if (result && result.data && Array.isArray(result.data)) {
        setExchangeRates(result.data)
        setUsingFallback(result.usingFallback)
        setApiStats({ success: result.successCount, total: result.totalApis })
        setLastUpdated(new Date(result.timestamp))

        if (result.usingFallback) {
          setError(
            `Solo ${result.successCount}/${result.totalApis} fuentes funcionando. Algunos datos pueden no estar actualizados.`,
          )
        } else {
          setError(null)
        }
      } else {
        throw new Error("Estructura de datos inválida")
      }
    } catch (err) {
      console.error("💥 Error al obtener cotizaciones:", err)
      setError("Error de conexión. Reintentando...")
      setUsingFallback(true)

      // En caso de error total, usar datos básicos
      setExchangeRates([
        {
          moneda: "USD",
          casa: "blue",
          nombre: "Dólar Blue",
          compra: 1020.0,
          venta: 1040.0,
          fechaActualizacion: new Date().toISOString(),
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchExchangeRates()

    // Auto-refresh cada 3 minutos si tenemos datos reales
    const interval = setInterval(
      () => {
        if (!usingFallback) {
          console.log("🔄 Auto-refresh de cotizaciones...")
          fetchExchangeRates()
        }
      },
      3 * 60 * 1000,
    )

    return () => clearInterval(interval)
  }, [])

  const formatDate = (date: Date) => {
    return date.toLocaleString("es-AR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  if (loading) {
    return (
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Conversor de Monedas</h1>
          <p className="text-lg text-muted-foreground">Obteniendo cotizaciones actualizadas...</p>
          <div className="flex justify-center items-center space-x-2">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            <span className="text-sm text-muted-foreground">Conectando con DolarAPI...</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Conversor de Monedas</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Convierte entre diferentes monedas con cotizaciones{" "}
          {usingFallback ? "de referencia" : "actualizadas en tiempo real"} desde Argentina.
        </p>

        {/* Status indicators */}
        {!usingFallback && apiStats && (
          <div className="bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-sm text-green-800 dark:text-green-200">
              ✅ Cotizaciones actualizadas - {apiStats.success}/{apiStats.total} fuentes activas
            </p>
            {lastUpdated && (
              <p className="text-xs text-green-700 dark:text-green-300 mt-1">
                Última actualización: {formatDate(lastUpdated)}
              </p>
            )}
          </div>
        )}

        {usingFallback && (
          <div className="bg-yellow-100 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              ⚠️ Usando cotizaciones de referencia
              {apiStats && ` - ${apiStats.success}/${apiStats.total} fuentes disponibles`}
            </p>
          </div>
        )}

        {error && (
          <div className="bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-sm text-red-800 dark:text-red-200">{error}</p>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="flex justify-center space-x-4">
        <Button asChild variant="outline" size="lg" className="max-[460px]:px-3">
          <Link href="/monedas/tipos-de-cambio">
            <TrendingUp className="h-4 w-4 min-[461px]:mr-2" />
            <span className="max-[460px]:hidden">Ver Tipos de Cambio</span>
          </Link>
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={fetchExchangeRates}
          disabled={loading}
          className="max-[460px]:px-3"
        >
          <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""} min-[461px]:mr-2`} />
          <span className="max-[460px]:hidden">Actualizar</span>
        </Button>
      </div>

      {/* Espacio para Auto Ads */}
      <div className="min-h-[90px] flex items-center justify-center">{/* Auto Ads */}</div>

      {/* Conversores */}
      {exchangeRates && exchangeRates.length > 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {exchangeRates.slice(0, 4).map((rate, index) => (
              <CurrencyConverter key={`${rate.moneda}-${rate.casa}-${index}`} exchangeRate={rate} />
            ))}
          </div>

          {/* Dólar Tarjeta y Mayorista lado a lado */}
          {exchangeRates.length > 5 && exchangeRates[4] && exchangeRates[5] && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              <CurrencyConverter
                key={`${exchangeRates[4].moneda}-${exchangeRates[4].casa}-4`}
                exchangeRate={exchangeRates[4]}
              />
              <CurrencyConverter
                key={`${exchangeRates[5].moneda}-${exchangeRates[5].casa}-5`}
                exchangeRate={exchangeRates[5]}
              />
            </div>
          )}

          {/* Espacio entre conversores para Auto Ads */}
          <div className="min-h-[250px] flex items-center justify-center">{/* Google Auto Ads */}</div>

          {/* Resto de conversores */}
          {exchangeRates.length > 6 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {exchangeRates.slice(6).map((rate, index) => (
                <CurrencyConverter key={`${rate.moneda}-${rate.casa}-${index + 6}`} exchangeRate={rate} />
              ))}
            </div>
          )}
        </>
      )}

      {/* USD to EUR Converter */}
      <div className="max-w-2xl mx-auto">
        <UsdEurConverter />
      </div>

      {/* Espacio final para Auto Ads */}
      <div className="min-h-[90px] flex items-center justify-center">{/* Auto Ads */}</div>

      <div className="text-center text-sm text-muted-foreground space-y-1">
        {!usingFallback ? (
          <>
            <p>✅ Cotizaciones actualizadas cada 3 minutos</p>
            <p>Fuente: DolarAPI.com vía servidor proxy</p>
          </>
        ) : (
          <>
            <p>📊 Cotizaciones de referencia</p>
            <p>Reintentando conexión automáticamente...</p>
          </>
        )}
      </div>
    </div>
  )
}
