import { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { MainActionCards } from "@/components/sections/main-action-cards";
import { PopularConverters } from "@/components/sections/popular-converters";
import { CurrencyConversions } from "@/components/sections/currency-conversions";
import { FeaturesSection } from "@/components/sections/features-section";
import { SneakerSection } from "@/components/sections/sneaker-section";
import { ComprehensiveOverview } from "@/components/sections/comprehensive-overview";
import { CTASection } from "@/components/sections/cta-section";
import { FAQSection } from "@/components/sections/faq-section";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <HeroSection />
      <MainActionCards />
      <PopularConverters />
      <CurrencyConversions />
      <FeaturesSection />
      <SneakerSection />
      <ComprehensiveOverview />
      <CTASection />
      <FAQSection />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Conversor de Unidades y Monedas Online Gratis – ConversorTotal",
  description:
    "Convierte unidades de medida y monedas al instante. Conversor online gratuito de temperatura, peso, distancia, tallas, monedas y más. Resultados rápidos y precisos.",
  keywords: [
    "conversor online",
    "convertir unidades",
    "convertir monedas",
    "conversor de temperatura",
    "conversor de peso",
    "conversor de distancia",
    "convertir mts a cm",
    "convertir kg a libras",
    "convertir dólares a pesos",
    "calculadora de conversiones",
    "conversor total",
    "in a mm",
    "in a cm",
    "in a m",
    "convertir pulgadas a milimetros",
    "convertir pulgadas a centimetros",
    "convertir pulgadas a metros",
    "convertir cm a mm",
    "convertir metros a centimetros",
    "convertir centimetros a milimetros",
    "convertir libras a kg",
    "convertir kg a gramos",
    "convertir gramos a libras",
    "convertir celsius a fahrenheit",
    "convertir fahrenheit a celsius",
    "convertir celsius a kelvin",
    "convertir fahrenheit a kelvin",
    "convertir dolares a pesos argentinos",
    "convertir euros a pesos",
    "convertir pesos a dolares",
    "conversor de talles",
    "convertir talles de ropa",
    "convertir talles de zapatillas",
    "conversor de almacenamiento",
    "convertir bytes a mb",
    "convertir mb a gb",
    "convertir gb a tb",
    "conversor de velocidad",
    "convertir kmh a mph",
    "convertir mph a kmh",
    "conversor de area",
    "convertir metros cuadrados",
    "conversor de volumen",
    "convertir litros a galones",
    "convertir galones a litros",
  ],
  alternates: {
    canonical: "https://conversortotal.online",
  },
  openGraph: {
    title: "Conversor de Unidades y Monedas Online Gratis – ConversorTotal",
    description:
      "Convierte unidades y monedas al instante. Herramienta online gratuita, rápida y precisa.",
    url: "https://conversortotal.online",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ConversorTotal - Conversor de Unidades Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conversor de Unidades y Monedas Online Gratis",
    description:
      "Convierte unidades y monedas al instante. Gratis y sin registros.",
    images: ["/og-image.png"],
    creator: "ConversorTotal",
  },
};
