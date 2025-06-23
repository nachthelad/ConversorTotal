import type { Metadata } from "next"
import { ClothingSizeConverter } from "@/components/clothing-size-converter"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Conversor de Tallas de Ropa - US, EU, UK Online Gratis",
  description:
    "Convierte tallas de ropa entre Estados Unidos, Europa y Reino Unido. Guía completa de tallas para hombre y mujer. Encuentra tu talla perfecta al comprar online.",
  keywords: [
    "tallas de ropa",
    "conversor tallas",
    "tallas US EU UK",
    "tallas hombre mujer",
    "guia tallas ropa",
    "convertir tallas",
    "tallas internacionales",
    "equivalencia tallas",
  ],
  alternates: {
    canonical: "https://conversortotal.vercel.app/tallas-ropa",
  },
}

export default function TallasRopaPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <Button asChild variant="ghost" size="sm">
          <Link href="/unidades">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver
          </Link>
        </Button>
      </div>

      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Conversor de Tallas de Ropa Internacional</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Encuentra tu talla perfecta al convertir entre sistemas de Estados Unidos, Europa y Reino Unido. Guía completa
          para hombre y mujer.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <ClothingSizeConverter />
      </div>

      <div className="max-w-4xl mx-auto space-y-8 mt-12">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h2>Guía de Tallas de Ropa Internacional</h2>
          <p>
            Comprar ropa online puede ser complicado cuando las tallas varían entre países. Nuestro conversor te ayuda a
            encontrar la equivalencia exacta entre diferentes sistemas de tallas.
          </p>

          <h3>Sistemas de Tallas Principales:</h3>
          <ul>
            <li>
              <strong>US (Estados Unidos):</strong> XS, S, M, L, XL, XXL
            </li>
            <li>
              <strong>EU (Europa):</strong> Números del 32 al 56
            </li>
            <li>
              <strong>UK (Reino Unido):</strong> Números específicos por género
            </li>
          </ul>

          <h3>Consejos para Comprar Ropa Online:</h3>
          <ul>
            <li>✅ Siempre consulta la tabla de tallas del fabricante</li>
            <li>✅ Mide tu cuerpo antes de comprar</li>
            <li>✅ Lee las reseñas sobre el ajuste</li>
            <li>✅ Considera el tipo de tela (elástica vs rígida)</li>
            <li>✅ Verifica la política de devoluciones</li>
          </ul>

          <h3>Diferencias por Género:</h3>
          <p>
            <strong>Tallas de Hombre:</strong> Generalmente más uniformes entre países
          </p>
          <p>
            <strong>Tallas de Mujer:</strong> Mayor variación, especialmente en números
          </p>

          <h3>Marcas Populares por Región:</h3>
          <ul>
            <li>
              <strong>US:</strong> Gap, Old Navy, American Eagle
            </li>
            <li>
              <strong>EU:</strong> Zara, H&M, Mango
            </li>
            <li>
              <strong>UK:</strong> ASOS, Topshop, Next
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
