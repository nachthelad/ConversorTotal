import { NextResponse } from "next/server";

interface ExchangeRate {
  moneda: string;
  casa: string;
  nombre: string;
  compra: number;
  venta: number;
  fechaActualizacion: string;
}

// Cache para almacenar los últimos valores exitosos
let lastSuccessfulRates: ExchangeRate[] | null = null;
let lastUpdateTime: Date | null = null;

// Datos de fallback iniciales (se actualizarán con valores reales)
const fallbackRates: ExchangeRate[] = [
  {
    moneda: "USD",
    casa: "oficial",
    nombre: "Dólar Oficial",
    compra: 1100.0,
    venta: 1100.0,
    fechaActualizacion: new Date().toISOString(),
  },
  {
    moneda: "USD",
    casa: "blue",
    nombre: "Dólar Blue",
    compra: 1020.0,
    venta: 1040.0,
    fechaActualizacion: new Date().toISOString(),
  },
  {
    moneda: "USD",
    casa: "bolsa",
    nombre: "Dólar Bolsa",
    compra: 1015.0,
    venta: 1025.0,
    fechaActualizacion: new Date().toISOString(),
  },
  {
    moneda: "USD",
    casa: "cripto",
    nombre: "Dólar Cripto",
    compra: 1030.0,
    venta: 1050.0,
    fechaActualizacion: new Date().toISOString(),
  },
  {
    moneda: "USD",
    casa: "tarjeta",
    nombre: "Dólar Tarjeta",
    compra: 572.0,
    venta: 572.0,
    fechaActualizacion: new Date().toISOString(),
  },
  {
    moneda: "USD",
    casa: "mayorista",
    nombre: "Dólar Mayorista",
    compra: 1010.0,
    venta: 1020.0,
    fechaActualizacion: new Date().toISOString(),
  },
  {
    moneda: "EUR",
    casa: "",
    nombre: "Euro",
    compra: 1100.0,
    venta: 1120.0,
    fechaActualizacion: new Date().toISOString(),
  },
  {
    moneda: "BRL",
    casa: "",
    nombre: "Real Brasilero",
    compra: 180.0,
    venta: 185.0,
    fechaActualizacion: new Date().toISOString(),
  },
  {
    moneda: "CLP",
    casa: "",
    nombre: "Peso Chileno",
    compra: 1.19,
    venta: 1.24,
    fechaActualizacion: new Date().toISOString(),
  },
  {
    moneda: "UYU",
    casa: "",
    nombre: "Peso Uruguayo",
    compra: 27.45,
    venta: 29.15,
    fechaActualizacion: new Date().toISOString(),
  },
];

const apiCalls = [
  {
    url: "https://dolarapi.com/v1/dolares/oficial",
    name: "Dólar Oficial",
    index: 0,
  },
  {
    url: "https://dolarapi.com/v1/dolares/blue",
    name: "Dólar Blue",
    index: 1,
  },
  {
    url: "https://dolarapi.com/v1/dolares/bolsa",
    name: "Dólar Bolsa",
    index: 2,
  },
  {
    url: "https://dolarapi.com/v1/dolares/cripto",
    name: "Dólar Cripto",
    index: 3,
  },
  {
    url: "https://dolarapi.com/v1/dolares/tarjeta",
    name: "Dólar Tarjeta",
    index: 4,
  },
  {
    url: "https://dolarapi.com/v1/dolares/mayorista",
    name: "Dólar Mayorista",
    index: 5,
  },
  {
    url: "https://dolarapi.com/v1/cotizaciones/eur",
    name: "Euro",
    index: 6,
  },
  {
    url: "https://dolarapi.com/v1/cotizaciones/brl",
    name: "Real Brasilero",
    index: 7,
  },
  {
    url: "https://dolarapi.com/v1/cotizaciones/clp",
    name: "Peso Chileno",
    index: 8,
  },
  {
    url: "https://dolarapi.com/v1/cotizaciones/uyu",
  name: "Peso Uruguayo",
  index: 9,
},
];

type ApiResult = {
  success: boolean;
  data?: ExchangeRate;
  index: number;
};

const isFulfilled = (
  result: PromiseSettledResult<ApiResult>
): result is PromiseFulfilledResult<ApiResult> => result.status === "fulfilled";

function processExchangeRate(data: any): ExchangeRate {
  // Corregir nombres de dólar
  if (data.moneda === "USD") {
    switch (data.casa) {
      case "oficial":
        data.nombre = "Dólar Oficial";
        break;
      case "blue":
        data.nombre = "Dólar Blue";
        break;
      case "bolsa":
        data.nombre = "Dólar Bolsa";
        break;
      case "cripto":
        data.nombre = "Dólar Cripto";
        break;
      case "tarjeta":
        data.nombre = "Dólar Tarjeta";
        break;
      case "mayorista":
        data.nombre = "Dólar Mayorista";
        break;
    }
  }

  // Para CLP y UYU, crear valores de compra/venta realistas
  if (data.moneda === "CLP") {
    // Si viene un solo valor, crear spread realista
    const baseRate = data.venta || data.compra || 1.22;
    data.compra = Math.round(baseRate * 0.98 * 100) / 100; // 2% menos, redondeado
    data.venta = Math.round(baseRate * 1.02 * 100) / 100; // 2% más, redondeado
  }

  if (data.moneda === "UYU") {
    // Si viene un solo valor, crear spread realista
    const baseRate = data.venta || data.compra || 28.3;
    data.compra = Math.round(baseRate * 0.97 * 100) / 100; // 3% menos, redondeado
    data.venta = Math.round(baseRate * 1.03 * 100) / 100; // 3% más, redondeado
  }

  return data;
}

export async function GET() {
  try {
    // Hacer todas las llamadas en paralelo con timeout
    const results = await Promise.allSettled<ApiResult>(
      apiCalls.map(async ({ url, name, index }) => {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 10000);

          const response = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "User-Agent":
                "ConversorTotal/1.0 (https://conversortotal.online)",
              Accept: "application/json",
            },
            signal: controller.signal,
          });

          clearTimeout(timeoutId);

          if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
          }

          const data = await response.json();
          const processedData = processExchangeRate(data);

          return { success: true, data: processedData, index };
        } catch (error) {
          console.error(`❌ Error fetching ${name}:`, error);
          return { success: false, index };
        }
      })
    );

    // Obtener EUR/USD
    let eurUsdRate = 1.08;
    try {
      const eurUsdResponse = await fetch(
        "https://api.exchangerate-api.com/v4/latest/EUR",
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (eurUsdResponse.ok) {
        const eurUsdData = await eurUsdResponse.json();
        if (eurUsdData.rates && eurUsdData.rates.USD) {
          eurUsdRate = eurUsdData.rates.USD;
        }
      }
    } catch (error) {
      console.warn("Error fetching EUR/USD rate:", error);
    }

    // Procesar resultados
    const data: ExchangeRate[] = [];
    let successCount = 0;
    let usingFallback = false;

    // Usar los últimos valores exitosos como fallback si están disponibles
    const currentFallback = lastSuccessfulRates || fallbackRates;

    results.forEach((result, index) => {
      if (isFulfilled(result) && result.value.success && result.value.data) {
        data.push(result.value.data);
        successCount++;
      } else {
        const fallbackIndex = isFulfilled(result)
          ? result.value.index
          : index;
        data.push(currentFallback[fallbackIndex] || fallbackRates[fallbackIndex]);
        usingFallback = true;
      }
    });

    // Si obtuvimos datos exitosos, actualizar el cache
    if (successCount > 0) {
      lastSuccessfulRates = [...data];
      lastUpdateTime = new Date();

      // Actualizar fallbackRates con los nuevos valores exitosos
      data.forEach((rate, index) => {
        const result = results[index];
        if (isFulfilled(result) && result.value.success) {
          fallbackRates[index] = { ...rate };
        }
      });
    }

    if (successCount === 0) {
      console.warn(
        "🚨 Todas las APIs fallaron, usando datos de cache/fallback"
      );
      usingFallback = true;
    }

    return NextResponse.json({
      data,
      success: true,
      usingFallback,
      successCount,
      totalApis: apiCalls.length,
      timestamp: new Date().toISOString(),
      lastSuccessfulUpdate: lastUpdateTime?.toISOString() || null,
      eurUsdRate,
    });
  } catch (error) {
    console.error("💥 Error general en API Route:", error);

    // Log detallado del error para debugging
    const errorDetails = {
      message: error instanceof Error ? error.message : "Error desconocido",
      stack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString(),
      endpoint: "/api/cotizaciones",
    };

    // Usar cache si está disponible, sino fallback
    const dataToReturn = lastSuccessfulRates || fallbackRates;

    return NextResponse.json(
      {
        data: dataToReturn,
        success: false,
        usingFallback: true,
        successCount: 0,
        totalApis: apiCalls.length,
        error: "Error interno del servidor",
        errorDetails:
          process.env.NODE_ENV === "development" ? errorDetails : undefined,
        timestamp: new Date().toISOString(),
        lastSuccessfulUpdate: lastUpdateTime?.toISOString() || null,
      },
      {
        status: 500,
        headers: {
          "Cache-Control": "no-cache",
          "Content-Type": "application/json",
        },
      }
    );
  }
}
