import type { Metadata } from "next"
import MonedasClient from "@/components/monedas-client"

export const metadata: Metadata = {
  title: "Conversor de Monedas Online – Cotizaciones en Tiempo Real | ConversorTotal",
  description:
    "Convierte entre más de 30 monedas con cotizaciones actualizadas en tiempo real. Sin comisiones ocultas, gratis y fácil de usar. Consulta tipos de cambio, gráficos y preguntas frecuentes.",
  keywords: [
    "conversor de monedas",
    "tipo de cambio",
    "cotización dólar",
    "cotización euro",
    "peso argentino",
    "cambio de divisas",
    "convertir monedas",
    "cotizaciones en tiempo real",
    "sin comisiones",
    "gráfico de divisas",
    "calculadora de monedas",
    "cambio euro dólar",
    "cambio peso dólar",
    "cambio real brasileño",
    "cambio peso chileno",
    "cambio peso uruguayo"
  ],
  openGraph: {
    title: "Conversor de Monedas Online – Cotizaciones en Tiempo Real | ConversorTotal",
    description:
      "Convierte entre más de 30 monedas con cotizaciones actualizadas en tiempo real. Sin comisiones ocultas, gratis y fácil de usar. Consulta tipos de cambio, gráficos y preguntas frecuentes.",
    url: "https://conversortotal.online/monedas",
    type: "website",
  },
  alternates: {
    canonical: "https://conversortotal.online/monedas",
  },
}

export default function MonedasPage() {
  return <MonedasClient />
}
