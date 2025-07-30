"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, RefreshCw, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

interface ExchangeRate {
  moneda: string;
  casa: string;
  nombre: string;
  compra: number;
  venta: number;
  fechaActualizacion: string;
}

interface ApiResponse {
  data: ExchangeRate[];
  success: boolean;
  usingFallback: boolean;
  successCount: number;
  totalApis: number;
  error?: string;
  timestamp: string;
  lastSuccessfulUpdate?: string;
}

export default function TiposDeCambioPage() {
  const [exchangeRates, setExchangeRates] = useState<ExchangeRate[]>([]);
  const [loading, setLoading] = useState(true);
  const [usingFallback, setUsingFallback] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [lastSuccessfulUpdate, setLastSuccessfulUpdate] = useState<Date | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [apiStats, setApiStats] = useState<{
    success: number;
    total: number;
  } | null>(null);

  const fetchExchangeRates = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log("🔄 Obteniendo tipos de cambio desde nuestra API...");

      const response = await fetch("/api/cotizaciones", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const result: ApiResponse = await response.json();

      console.log("📊 Tipos de cambio obtenidos:", result);

      setExchangeRates(result.data || []);
      setUsingFallback(result.usingFallback);
      setApiStats({ success: result.successCount, total: result.totalApis });
      setLastUpdated(new Date(result.timestamp));

      if (result.lastSuccessfulUpdate) {
        setLastSuccessfulUpdate(new Date(result.lastSuccessfulUpdate));
      }

      if (result.usingFallback) {
        setError(
          `Solo ${result.successCount}/${result.totalApis} fuentes funcionando.`
        );
      }
    } catch (err) {
      console.error("💥 Error al obtener tipos de cambio:", err);
      setError("Error de conexión con el servidor.");
      setUsingFallback(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExchangeRates();
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleString("es-AR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getCurrencyIcon = (moneda: string) => {
    switch (moneda) {
      case "USD":
        return "💵";
      case "EUR":
        return "💶";
      case "BRL":
        return "🇧🇷";
      case "CLP":
        return "🇨🇱";
      case "UYU":
        return "🇺🇾";
      default:
        return "💱";
    }
  };

  // Función para calcular el promedio
  const getAverage = (compra: number, venta: number) => {
    if (compra && venta && Math.abs(compra - venta) > 0.01) {
      return (compra + venta) / 2;
    }
    return venta || compra;
  };

  // Función para determinar si mostrar compra/venta o cotización única
  const shouldShowBuySell = (rate: ExchangeRate) => {
    return (
      rate.compra && rate.venta && Math.abs(rate.compra - rate.venta) > 0.01
    );
  };

  if (loading) {
    return (
      <div className="space-y-8">
        <div className="flex items-center space-x-4">
          <Button asChild variant="ghost" size="sm">
            <Link href="/monedas">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver a Conversores
            </Link>
          </Button>
        </div>
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Tipos de Cambio
          </h1>
          <p className="text-lg text-muted-foreground">
            Obteniendo cotizaciones actualizadas...
          </p>
          <div className="flex justify-center items-center space-x-2">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            <span className="text-sm text-muted-foreground">
              Conectando con DolarAPI...
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <Button asChild variant="ghost" size="sm">
          <Link href="/monedas">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a Conversores
          </Link>
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={fetchExchangeRates}
          disabled={loading}
        >
          <RefreshCw
            className={`h-4 w-4 ${
              loading ? "animate-spin" : ""
            } max-[360px]:mr-0 mr-2`}
          />
          <span className="max-[360px]:hidden">Actualizar</span>
        </Button>
      </div>

      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Tipos de Cambio
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Cotizaciones{" "}
          {usingFallback ? "de referencia" : "actualizadas en tiempo real"}{" "}
          desde Argentina
        </p>

        {!usingFallback && apiStats && (
          <div className="bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-sm text-green-800 dark:text-green-200">
              ✅ Cotizaciones actualizadas - {apiStats.success}/{apiStats.total}{" "}
              fuentes activas
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
              ⚠️ Usando cotizaciones{" "}
              {lastSuccessfulUpdate ? "de cache" : "de referencia"}
              {apiStats &&
                ` - ${apiStats.success}/${apiStats.total} fuentes disponibles`}
            </p>
            {lastSuccessfulUpdate && (
              <p className="text-xs text-yellow-700 dark:text-yellow-300 mt-1">
                Última actualización exitosa: {formatDate(lastSuccessfulUpdate)}
              </p>
            )}
          </div>
        )}

        {error && (
          <div className="bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-sm text-red-800 dark:text-red-200">{error}</p>
          </div>
        )}
      </div>

      {/* Lista de Tipos de Cambio */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {exchangeRates.map((rate, index) => (
            <Card
              key={`${rate.moneda}-${rate.casa}-${index}`}
              className="hover:shadow-md transition-shadow"
            >
              <CardContent className="p-4">
                {/* Layout Desktop (>640px) */}
                <div className="hidden sm:flex items-center justify-between">
                  {/* Lado izquierdo - Info de la moneda */}
                  <div className="flex items-center space-x-3">
                    <div className="text-xl">
                      {getCurrencyIcon(rate.moneda)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-semibold truncate">
                        {rate.nombre}
                        {rate.casa && (
                          <span className="text-xs text-muted-foreground ml-1">
                            ({rate.casa})
                          </span>
                        )}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        1 {rate.moneda} = $
                        {(rate.venta || rate.compra).toFixed(2)} ARS
                      </p>
                    </div>
                  </div>

                  {/* Lado derecho - Precios */}
                  <div className="text-right">
                    {shouldShowBuySell(rate) ? (
                      // Mostrar compra, venta y promedio
                      <div className="space-y-1 w-full">
                        <div className="flex items-center justify-center space-x-4 text-sm">
                          <div className="text-center">
                            <p className="text-sm text-muted-foreground">
                              Compra
                            </p>
                            <p className="text-lg font-semibold text-green-600">
                              ${rate.compra.toFixed(2)}
                            </p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm text-muted-foreground">
                              Venta
                            </p>
                            <p className="text-lg font-semibold text-red-600">
                              ${rate.venta.toFixed(2)}
                            </p>
                          </div>
                        </div>
                        <div className="text-center border-t pt-1 mt-2">
                          <p className="text-sm text-muted-foreground">
                            Promedio
                          </p>
                          <p className="text-lg font-bold text-primary">
                            ${getAverage(rate.compra, rate.venta).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ) : (
                      // Solo mostrar cotización única
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">
                          Cotización
                        </p>
                        <p className="text-xl font-bold text-primary">
                          ${(rate.venta || rate.compra).toFixed(2)}
                        </p>
                      </div>
                    )}
                    <p className="text-sm text-muted-foreground mt-1">
                      {rate.fechaActualizacion &&
                        formatDate(new Date(rate.fechaActualizacion))}
                    </p>
                  </div>
                </div>

                {/* Layout Mobile (≤640px) - En columnas */}
                <div className="sm:hidden space-y-3">
                  {/* Header con moneda */}
                  <div className="flex items-center space-x-3">
                    <div className="text-xl">
                      {getCurrencyIcon(rate.moneda)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">
                        {rate.nombre}
                        {rate.casa && (
                          <span className="text-xs text-muted-foreground ml-1">
                            ({rate.casa})
                          </span>
                        )}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        1 {rate.moneda} = $
                        {(rate.venta || rate.compra).toFixed(2)} ARS
                      </p>
                    </div>
                  </div>

                  {/* Precios en columna */}
                  <div className="space-y-2">
                    {shouldShowBuySell(rate) ? (
                      <>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">
                            Compra:
                          </span>
                          <span className="text-lg font-semibold text-green-600">
                            ${rate.compra.toFixed(2)}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">
                            Venta:
                          </span>
                          <span className="text-lg font-semibold text-red-600">
                            ${rate.venta.toFixed(2)}
                          </span>
                        </div>
                        <div className="flex justify-between items-center border-t pt-2">
                          <span className="text-sm text-muted-foreground">
                            Promedio:
                          </span>
                          <span className="text-lg font-bold text-primary">
                            ${getAverage(rate.compra, rate.venta).toFixed(2)}
                          </span>
                        </div>
                      </>
                    ) : (
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">
                          Cotización:
                        </span>
                        <span className="text-xl font-bold text-primary">
                          ${(rate.venta || rate.compra).toFixed(2)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Fecha */}
                  <p className="text-xs text-muted-foreground text-center">
                    {rate.fechaActualizacion &&
                      formatDate(new Date(rate.fechaActualizacion))}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Información adicional */}
      <div className="max-w-4xl mx-auto">
        <Card className="bg-muted/30">
          <CardContent className="p-6">
            <div className="text-center space-y-2">
              <h3 className="font-semibold">
                Información sobre los tipos de cambio
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-base text-muted-foreground">
                <div>
                  <p>
                    <strong>Compra:</strong> Precio al que el banco/casa de
                    cambio compra la moneda extranjera
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Venta:</strong> Precio al que el banco/casa de
                    cambio vende la moneda extranjera
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Promedio:</strong> Precio medio entre compra y venta
                    para referencia rápida
                  </p>
                </div>
              </div>
              <div className="pt-2 border-t">
                <p className="text-base">
                  <strong>Actualización:</strong>{" "}
                  {lastUpdated ? formatDate(lastUpdated) : "Cargando..."}
                </p>
                <p className="text-base">
                  <strong>Fuente:</strong>{" "}
                  {usingFallback ? "Datos de cache/referencia" : "DolarAPI.com"}
                </p>
                {lastSuccessfulUpdate && usingFallback && (
                  <p className="text-base">
                    <strong>Última actualización exitosa:</strong>{" "}
                    {formatDate(lastSuccessfulUpdate)}
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CTA para conversores */}
      <div className="text-center space-y-4 py-8">
        <h3 className="text-xl font-semibold">¿Necesitas hacer cálculos?</h3>
        <p className="text-muted-foreground">
          Usa nuestros conversores para calcular equivalencias al instante
        </p>
        <Button asChild size="lg">
          <Link href="/monedas">
            Ir a Conversores de Monedas
            <TrendingUp className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
