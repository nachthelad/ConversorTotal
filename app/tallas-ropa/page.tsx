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
    canonical: "https://conversortotal.online/tallas-ropa",
  },
}

export default function TallasRopaPage() {
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

      <div className="max-w-3xl mx-auto mt-12">
        <h2 className="text-2xl font-bold mb-6 text-primary text-center">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {/* Pregunta 1 */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3 shadow-sm">
            <span className="mt-1 text-primary">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
            </span>
            <div>
              <h3 className="font-semibold text-lg mb-1">¿Cómo convierto mi talla de ropa de US a EU?</h3>
              <p className="text-muted-foreground">Selecciona tu talla en el sistema US y el conversor te mostrará la equivalencia en EU y UK.</p>
            </div>
          </div>
          {/* Pregunta 2 */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3 shadow-sm">
            <span className="mt-1 text-primary">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
            </span>
            <div>
              <h3 className="font-semibold text-lg mb-1">¿Las tallas de hombre y mujer son iguales?</h3>
              <p className="text-muted-foreground">No, las tallas varían según el género y la prenda. Consulta siempre la guía específica.</p>
            </div>
          </div>
          {/* Pregunta 3 */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3 shadow-sm">
            <span className="mt-1 text-primary">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
            </span>
            <div>
              <h3 className="font-semibold text-lg mb-1">¿Sirve para todas las marcas?</h3>
              <p className="text-muted-foreground">Sí, incluye Zara, H&M, Gap, Old Navy, ASOS y más.</p>
            </div>
          </div>
          {/* Pregunta 4 */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3 shadow-sm">
            <span className="mt-1 text-primary">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
            </span>
            <div>
              <h3 className="font-semibold text-lg mb-1">¿El conversor es gratuito?</h3>
              <p className="text-muted-foreground">Sí, puedes usarlo sin límites y sin registrarte.</p>
            </div>
          </div>
          {/* Pregunta 5 */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3 shadow-sm">
            <span className="mt-1 text-primary">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
            </span>
            <div>
              <h3 className="font-semibold text-lg mb-1">¿Qué hago si estoy entre dos tallas?</h3>
              <p className="text-muted-foreground">Se recomienda elegir la talla más grande o consultar la política de cambios de la tienda.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
