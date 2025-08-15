"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, RefreshCw, Clock } from "lucide-react";
import Link from "next/link";
import { useExchangeRates } from "@/hooks/use-exchange-rates";
import { ArgentinianCurrencyConverter } from "./argentinian-currency-converter";
import { SuperCurrencyConverter } from "./super-currency-converter";

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
  lastSuccessfulUpdate?: string | null;
}

export default function MonedasClient() {
  const {
    exchangeRates,
    loading,
    error,
    usingFallback,
    lastUpdated,
    lastSuccessfulUpdate,
    refetch,
  } = useExchangeRates();

  const formatDate = (date: Date) => {
    return date.toLocaleString("es-AR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Conversor de Monedas Online – Cotizaciones en Tiempo Real
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
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Conversor de Monedas Online – Cotizaciones en Tiempo Real
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Convierte entre distintas monedas con cotizaciones actualizadas. Sin
          comisiones ocultas, gratis y fácil de usar. Consulta tipos de cambio y
          preguntas frecuentes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mt-6">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-center">
            <h2 className="font-semibold text-lg mb-1">
              Cotizaciones en tiempo real
            </h2>
            <p className="text-muted-foreground text-sm">
              Actualizaciones desde múltiples fuentes confiables.
            </p>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-center">
            <h2 className="font-semibold text-lg mb-1">
              Fácil, gratis y seguro
            </h2>
            <p className="text-muted-foreground text-sm">
              Convierte monedas al instante, sin registros ni anuncios molestos.
            </p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center space-x-4">
        <Button
          asChild
          variant="secondary"
          size="lg"
          className="max-[460px]:px-3"
        >
          <Link href="/monedas/tipos-de-cambio">
            <TrendingUp className="h-4 w-4 min-[461px]:mr-2" />
            <span className="max-[460px]:hidden">Ver Tipos de Cambio</span>
          </Link>
        </Button>
        <Button
          variant="secondary"
          size="lg"
          className="max-[460px]:px-3 flex items-center"
          onClick={refetch}
          disabled={loading}
        >
          <RefreshCw className="h-4 w-4 min-[461px]:mr-2" />
          <span className="max-[460px]:hidden">Actualizar</span>
        </Button>
      </div>
      {/* Horario de actualización global destacado */}
      <div className="flex justify-center mt-4">
        <div
          className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm border ${
            usingFallback
              ? "bg-yellow-100 border-yellow-300 text-yellow-900"
              : "bg-green-100 border-green-300 text-green-900"
          }`}
        >
          <Clock className="h-5 w-5" />
          <span className="font-medium">
            {!usingFallback && lastSuccessfulUpdate && (
              <>
                Última actualización global exitosa:{" "}
                {formatDate(lastSuccessfulUpdate)}
              </>
            )}
            {usingFallback && lastUpdated && (
              <>
                Última actualización (cache/referencia):{" "}
                {formatDate(lastUpdated)}
              </>
            )}
          </span>
        </div>
      </div>

      {/* Conversores */}
      <div id="conversores" className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-primary text-center">
            Conversor de Monedas Argentinas
          </h2>
          <ArgentinianCurrencyConverter
            exchangeRates={exchangeRates}
            loading={loading}
          />
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-primary text-center">
            Conversor Internacional
          </h2>
          <SuperCurrencyConverter
            exchangeRates={exchangeRates}
            loading={loading}
          />
        </section>
      </div>

      <div className="max-w-3xl mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-6 text-primary text-center">
          Preguntas Frecuentes sobre el Conversor de Monedas
        </h2>
        <div className="space-y-4">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3 shadow-sm">
            <span className="mt-1 text-primary">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
            </span>
            <div>
              <h3 className="font-semibold text-lg mb-1">
                ¿Cómo convierto monedas?
              </h3>
              <p className="text-muted-foreground">
                Selecciona la moneda de origen y destino, ingresa el monto y
                obtén el resultado al instante con el tipo de cambio más
                actualizado.
              </p>
            </div>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3 shadow-sm">
            <span className="mt-1 text-primary">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
            </span>
            <div>
              <h3 className="font-semibold text-lg mb-1">
                ¿Por qué varía el tipo de cambio?
              </h3>
              <p className="text-muted-foreground">
                El tipo de cambio fluctúa según la oferta y demanda global,
                políticas económicas y eventos internacionales.
              </p>
            </div>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3 shadow-sm">
            <span className="mt-1 text-primary">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
            </span>
            <div>
              <h3 className="font-semibold text-lg mb-1">
                ¿Qué monedas puedo convertir?
              </h3>
              <p className="text-muted-foreground">
                Puedes convertir entre dólar, euro, peso argentino, real
                brasileño, peso chileno, peso uruguayo y muchas otras monedas
                internacionales.
              </p>
            </div>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3 shadow-sm">
            <span className="mt-1 text-primary">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
            </span>
            <div>
              <h3 className="font-semibold text-lg mb-1">
                ¿Con qué frecuencia se actualizan las cotizaciones?
              </h3>
              <p className="text-muted-foreground">
                Las cotizaciones se actualizan automáticamente cada 3 minutos
                para ofrecerte siempre el valor más reciente.
              </p>
            </div>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3 shadow-sm">
            <span className="mt-1 text-primary">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
            </span>
            <div>
              <h3 className="font-semibold text-lg mb-1">
                ¿El conversor es gratuito?
              </h3>
              <p className="text-muted-foreground">
                Sí, puedes usar el conversor de monedas de ConversorTotal sin
                ningún costo ni registro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
