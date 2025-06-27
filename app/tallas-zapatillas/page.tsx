import type { Metadata } from "next"
import { ShoeSizeConverter } from "@/components/shoe-size-converter"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Conversor de Tallas de Zapatillas - US, EU, UK Online Gratis",
  description:
    "Convierte tallas de zapatillas y sneakers entre Estados Unidos, Europa y Reino Unido. Guía completa para hombre y mujer. Encuentra tu talla perfecta para Nike, Adidas, Jordan y más.",
  keywords: [
    "tallas de zapatillas",
    "tallas sneakers",
    "conversor tallas zapatos",
    "tallas US EU UK zapatillas",
    "tallas Nike Adidas",
    "tallas Jordan",
    "sneakerhead tallas",
    "convertir tallas zapatillas",
    "guia tallas sneakers",
    "equivalencia tallas zapatos",
    "tallas zapatillas hombre mujer",
    "como saber mi talla zapatillas",
  ],
  alternates: {
    canonical: "https://conversortotal.online/tallas-zapatillas",
  },
  openGraph: {
    title: "Conversor de Tallas de Zapatillas - Sneakers US, EU, UK",
    description:
      "Encuentra tu talla perfecta de zapatillas. Convierte entre US, EU y UK para Nike, Adidas, Jordan y más marcas.",
    url: "https://conversortotal.online/tallas-zapatillas",
    images: [
      {
        url: "/og-zapatillas.png",
        width: 1200,
        height: 630,
        alt: "Conversor de Tallas de Zapatillas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conversor de Tallas de Zapatillas - Sneakers",
    description:
      "Encuentra tu talla perfecta de zapatillas entre US, EU y UK. Para sneakerheads y amantes del calzado.",
    images: ["/og-zapatillas.png"],
  },
}

export default function TallasZapatillasPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <Button asChild variant="ghost" size="sm">
          <Link href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver
          </Link>
        </Button>
      </div>

      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Conversor de Tallas de Zapatillas y Sneakers
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Encuentra tu talla perfecta de zapatillas al convertir entre sistemas de Estados Unidos, Europa y Reino Unido.
          Ideal para sneakerheads y compras online de Nike, Adidas, Jordan y más.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <ShoeSizeConverter />
      </div>

      {/* SEO Content Mejorado */}
      <div className="max-w-4xl mx-auto space-y-8 mt-12">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-2">Guía Visual de Tallas de Zapatillas Internacional</h2>
          <p>
            Encontrar la talla perfecta de zapatillas es clave para la comodidad y el estilo. Nuestro conversor te ayuda a comparar tallas entre <strong>US</strong>, <strong>EU</strong> y <strong>UK</strong> para marcas como Nike, Adidas, Jordan y más.
          </p>

          <h3 className="text-xl font-semibold mt-6">Sistemas de Tallas Principales</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
            <div className="bg-muted/50 p-4 rounded-lg text-center">
              <div className="font-bold text-lg">🇺🇸 US</div>
              <div className="text-sm mt-1">Nike, Jordan, New Balance, Converse, Vans</div>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg text-center">
              <div className="font-bold text-lg">🇪🇺 EU</div>
              <div className="text-sm mt-1">Adidas, Puma, Balenciaga, Common Projects</div>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg text-center">
              <div className="font-bold text-lg">🇬🇧 UK</div>
              <div className="text-sm mt-1">Clarks, Dr. Martens, marcas británicas</div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-6">Ejemplos de Conversión Rápida</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
            <div className="bg-muted rounded-lg p-4 text-center">
              <div className="font-bold text-lg">US 8</div>
              <div className="text-muted-foreground">= EU 41</div>
            </div>
            <div className="bg-muted rounded-lg p-4 text-center">
              <div className="font-bold text-lg">US 9</div>
              <div className="text-muted-foreground">= EU 42</div>
            </div>
            <div className="bg-muted rounded-lg p-4 text-center">
              <div className="font-bold text-lg">US 10</div>
              <div className="text-muted-foreground">= EU 43</div>
            </div>
            <div className="bg-muted rounded-lg p-4 text-center">
              <div className="font-bold text-lg">US 11</div>
              <div className="text-muted-foreground">= EU 44</div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-6">Consejos para Comprar Zapatillas Online</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 !list-none !pl-0 mt-2">
            <li className="flex items-center gap-2">
              <span className="text-green-600">✔️</span>
              <span><strong>Mide tus pies:</strong> Hazlo al final del día.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">✔️</span>
              <span><strong>Consulta reviews:</strong> Lee comentarios sobre el fit.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">✔️</span>
              <span><strong>Conoce la marca:</strong> Nike talla pequeño, Adidas grande.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">✔️</span>
              <span><strong>Considera el uso:</strong> Para correr, deja medio número más.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">✔️</span>
              <span><strong>Verifica devoluciones:</strong> Política de cambios.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">✔️</span>
              <span><strong>Usa nuestro conversor:</strong> Verifica la equivalencia.</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Errores Comunes al Convertir Tallas</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 !list-none !pl-0 mt-2">
            <li className="flex items-center gap-2">
              <span className="text-red-500">❌</span>
              <span><strong>No considerar el género:</strong> Las tallas de mujer son diferentes.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-red-500">❌</span>
              <span><strong>Ignorar la marca:</strong> Cada marca tiene su propio fit.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-red-500">❌</span>
              <span><strong>No leer reviews:</strong> El fit varía por modelo.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-red-500">❌</span>
              <span><strong>Comprar sin medir:</strong> Tus pies pueden cambiar.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-red-500">❌</span>
              <span><strong>Asumir consistencia:</strong> Incluso dentro de la misma marca puede haber variaciones.</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Pro tips para Sneakerheads</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 !list-none !pl-0 mt-2">
            <li className="flex items-center gap-2">
              <span className="text-blue-600">🎯</span>
              <span><strong>Crea una tabla personal:</strong> Anota tu talla en cada marca.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">🎯</span>
              <span><strong>Únete a comunidades:</strong> Reddit r/Sneakers tiene info valiosa.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">🎯</span>
              <span><strong>Prueba en tienda física:</strong> Cuando sea posible, antes de comprar online.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">🎯</span>
              <span><strong>Considera plantillas:</strong> Ajustan zapatillas grandes.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600">🎯</span>
              <span><strong>Guarda las cajas:</strong> Para posible reventa, mantén el packaging original.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
