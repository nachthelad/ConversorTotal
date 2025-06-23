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
    canonical: "https://conversortotal.vercel.app/tallas-zapatillas",
  },
  openGraph: {
    title: "Conversor de Tallas de Zapatillas - Sneakers US, EU, UK",
    description:
      "Encuentra tu talla perfecta de zapatillas. Convierte entre US, EU y UK para Nike, Adidas, Jordan y más marcas.",
    url: "https://conversortotal.vercel.app/tallas-zapatillas",
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
          <Link href="/unidades">
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

      {/* SEO Content */}
      <div className="max-w-4xl mx-auto space-y-8 mt-12">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h2>Guía Completa de Tallas de Zapatillas Internacional</h2>
          <p>
            En el mundo de las zapatillas y sneakers, encontrar la talla correcta es fundamental para la comodidad y el
            estilo. Con el auge del mercado sneakerhead y las compras online internacionales, conocer las equivalencias
            entre diferentes sistemas de tallas se ha vuelto esencial.
          </p>

          <h3>🌍 Sistemas de Tallas de Zapatillas Principales:</h3>
          <ul>
            <li>
              <strong>US (Estados Unidos):</strong> Sistema más común en Nike, Jordan, New Balance
            </li>
            <li>
              <strong>EU (Europa):</strong> Usado por Adidas, Puma, y marcas europeas
            </li>
            <li>
              <strong>UK (Reino Unido):</strong> Sistema británico, común en marcas clásicas
            </li>
          </ul>

          <h3>👟 Marcas Populares y sus Sistemas de Tallas:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">🇺🇸 Marcas que usan tallas US:</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  • <strong>Nike</strong> - Air Max, Air Force 1, Dunk
                </li>
                <li>
                  • <strong>Jordan</strong> - Toda la línea Jordan
                </li>
                <li>
                  • <strong>New Balance</strong> - 990, 550, 2002R
                </li>
                <li>
                  • <strong>Converse</strong> - Chuck Taylor, One Star
                </li>
                <li>
                  • <strong>Vans</strong> - Old Skool, Authentic
                </li>
              </ul>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">🇪🇺 Marcas que usan tallas EU:</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  • <strong>Adidas</strong> - Stan Smith, Gazelle, Yeezy
                </li>
                <li>
                  • <strong>Puma</strong> - Suede, RS-X
                </li>
                <li>
                  • <strong>Balenciaga</strong> - Triple S, Track
                </li>
                <li>
                  • <strong>Common Projects</strong> - Achilles
                </li>
                <li>
                  • <strong>Maison Margiela</strong> - GAT
                </li>
              </ul>
            </div>
          </div>

          <h3>📏 Diferencias por Género en Zapatillas:</h3>
          <p>
            <strong>Zapatillas de Hombre:</strong> Las tallas son más consistentes entre marcas y países. La diferencia
            entre US y EU suele ser de 33 números (ej: US 9 = EU 42).
          </p>
          <p>
            <strong>Zapatillas de Mujer:</strong> Pueden tener mayor variación. Algunas marcas usan tallas específicas
            para mujer (Women's) que difieren de las de hombre.
          </p>

          <h3>🛒 Consejos para Comprar Zapatillas Online:</h3>
          <ul>
            <li>
              ✅ <strong>Mide tus pies:</strong> Hazlo al final del día cuando están más hinchados
            </li>
            <li>
              ✅ <strong>Consulta reviews:</strong> Lee comentarios sobre el fit específico del modelo
            </li>
            <li>
              ✅ <strong>Conoce la marca:</strong> Nike suele tallar más pequeño, Adidas más grande
            </li>
            <li>
              ✅ <strong>Considera el uso:</strong> Para correr, deja medio número más
            </li>
            <li>
              ✅ <strong>Verifica devoluciones:</strong> Política de cambios del vendedor
            </li>
            <li>
              ✅ <strong>Usa nuestro conversor:</strong> Siempre verifica la equivalencia
            </li>
          </ul>

          <h3>🔥 Modelos Populares y sus Características de Talla:</h3>
          <div className="bg-muted/30 p-6 rounded-lg">
            <h4 className="font-semibold mb-4">Guía de Fit por Modelo Popular:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p>
                  <strong>Nike Air Force 1:</strong> Talla grande, considera medio número menos
                </p>
                <p>
                  <strong>Nike Dunk:</strong> Talla normal a grande
                </p>
                <p>
                  <strong>Jordan 1:</strong> Talla normal
                </p>
                <p>
                  <strong>Jordan 4:</strong> Talla normal a pequeña
                </p>
              </div>
              <div>
                <p>
                  <strong>Adidas Stan Smith:</strong> Talla grande
                </p>
                <p>
                  <strong>Yeezy 350 V2:</strong> Talla pequeña, sube medio número
                </p>
                <p>
                  <strong>New Balance 990:</strong> Talla normal
                </p>
                <p>
                  <strong>Converse Chuck Taylor:</strong> Talla muy grande
                </p>
              </div>
            </div>
          </div>

          <h3>📱 Apps y Herramientas Complementarias:</h3>
          <ul>
            <li>
              <strong>Nike Fit:</strong> Escanea tus pies con la cámara
            </li>
            <li>
              <strong>Adidas app:</strong> Recomendaciones de talla por modelo
            </li>
            <li>
              <strong>StockX/GOAT:</strong> Información de fit en cada producto
            </li>
            <li>
              <strong>ConversorTotal:</strong> Nuestro conversor para equivalencias rápidas
            </li>
          </ul>

          <h3>🌟 Cultura Sneakerhead y Tallas:</h3>
          <p>
            En la cultura sneaker, conocer las tallas es crucial no solo para el comfort, sino también para el{" "}
            <strong>resale value</strong>. Las tallas más populares (US 9-11 para hombre, US 7-9 para mujer) suelen
            tener mayor demanda y mejor precio de reventa.
          </p>

          <h3>🚨 Errores Comunes al Convertir Tallas:</h3>
          <ul>
            <li>
              ❌ <strong>No considerar el género:</strong> Las tallas de mujer son diferentes
            </li>
            <li>
              ❌ <strong>Ignorar la marca:</strong> Cada marca tiene su propio fit
            </li>
            <li>
              ❌ <strong>No leer reviews:</strong> El fit puede variar por modelo
            </li>
            <li>
              ❌ <strong>Comprar sin medir:</strong> Tus pies pueden cambiar con el tiempo
            </li>
            <li>
              ❌ <strong>Asumir consistencia:</strong> Incluso dentro de la misma marca puede haber variaciones
            </li>
          </ul>

          <h3>💡 Tips Pro para Sneakerheads:</h3>
          <ul>
            <li>
              🎯 <strong>Crea una tabla personal:</strong> Anota tu talla en cada marca que compres
            </li>
            <li>
              🎯 <strong>Únete a comunidades:</strong> Reddit r/Sneakers tiene info valiosa sobre fit
            </li>
            <li>
              🎯 <strong>Prueba en tienda física:</strong> Cuando sea posible, antes de comprar online
            </li>
            <li>
              🎯 <strong>Considera plantillas:</strong> Pueden ajustar zapatillas que quedan grandes
            </li>
            <li>
              🎯 <strong>Guarda las cajas:</strong> Para posible reventa, mantén el packaging original
            </li>
          </ul>

          <h3>🔄 Conversiones Más Buscadas:</h3>
          <div className="bg-primary/5 p-4 rounded-lg">
            <p className="font-semibold mb-2">Tallas más populares en sneakers:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              <div>US 8 = EU 41</div>
              <div>US 9 = EU 42</div>
              <div>US 10 = EU 43</div>
              <div>US 11 = EU 44</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
