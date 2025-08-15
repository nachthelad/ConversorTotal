import { useState, useEffect, useCallback } from "react";

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

export function useExchangeRates() {
  const [exchangeRates, setExchangeRates] = useState<ExchangeRate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [usingFallback, setUsingFallback] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [lastSuccessfulUpdate, setLastSuccessfulUpdate] = useState<Date | null>(
    null
  );

  const fetchExchangeRates = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("/api/cotizaciones", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
      });
      if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
      const result: ApiResponse = await response.json();
      if (result && result.data && Array.isArray(result.data)) {
        setExchangeRates(result.data);
        setUsingFallback(result.usingFallback);
        setLastUpdated(new Date(result.timestamp));
        if (result.lastSuccessfulUpdate)
          setLastSuccessfulUpdate(new Date(result.lastSuccessfulUpdate));
        setError(null);
      } else {
        throw new Error("Estructura de datos inválida");
      }
    } catch (err) {
      setError("Error de conexión. Reintentando...");
      setUsingFallback(true);
      setLastUpdated(new Date());
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchExchangeRates();
    const interval = setInterval(() => {
      if (!usingFallback) fetchExchangeRates();
    }, 3 * 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchExchangeRates, usingFallback]);

  return {
    exchangeRates,
    loading,
    error,
    usingFallback,
    lastUpdated,
    lastSuccessfulUpdate,
    refetch: fetchExchangeRates,
  };
}
