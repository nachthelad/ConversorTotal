import type { Metadata } from "next"
import { ClothingSizeConverter } from "@/components/clothing-size-converter"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Conversor de Talles de Ropa - US, EU, UK Online Gratis",
  description:
    "Convierte talles de ropa entre Estados Unidos, Europa y Reino Unido. Guía completa de tallas para hombre y mujer. Encuentra tu talla perfecta al comprar online.",
  keywords: [
    "talles de ropa",
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
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Conversor de Talles de Ropa Internacional</h1>
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
          <h2 className="text-2xl font-bold mb-2">Guía Visual de Talles de Ropa Internacional</h2>
          <p>
            Comprar ropa online puede ser complicado cuando las tallas varían entre países. Nuestro conversor te ayuda a encontrar la equivalencia exacta entre diferentes sistemas de tallas.
          </p>

          <h3 className="text-xl font-semibold mt-6">Sistemas de Tallas Principales</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
            <div className="bg-muted/50 p-4 rounded-lg text-center">
              <div className="font-bold text-lg">🇺🇸 US</div>
              <div className="text-sm mt-1">XS, S, M, L, XL, XXL</div>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg text-center">
              <div className="font-bold text-lg">🇪🇺 EU</div>
              <div className="text-sm mt-1">Números del 32 al 56</div>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg text-center">
              <div className="font-bold text-lg">🇬🇧 UK</div>
              <div className="text-sm mt-1">Números específicos por género</div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-6">Consejos para Comprar Ropa Online</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 !list-none !pl-0 mt-2">
            <li className="flex items-center gap-2">
              <span className="text-green-600">✔️</span>
              <span><strong>Consulta la tabla de talles:</strong> Siempre revisa la tabla del fabricante.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">✔️</span>
              <span><strong>Mide tu cuerpo:</strong> Antes de comprar, usa una cinta métrica.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">✔️</span>
              <span><strong>Lee reseñas:</strong> Otros compradores pueden dar pistas sobre el ajuste.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">✔️</span>
              <span><strong>Tipo de tela:</strong> Elástica o rígida, influye en el ajuste.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">✔️</span>
              <span><strong>Verifica devoluciones:</strong> Asegúrate de poder cambiar si no te queda bien.</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Diferencias por Género</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div className="bg-muted/50 rounded-lg p-4">
              <strong>Talles de Hombre:</strong> Generalmente más uniformes entre países
            </div>
            <div className="bg-muted/50 rounded-lg p-4">
              <strong>Talles de Mujer:</strong> Mayor variación, especialmente en números
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-6">Marcas Populares por Región</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
            <div className="bg-muted/50 p-4 rounded-lg text-center">
              <div className="font-bold text-lg">US</div>
              <div className="text-sm mt-1">Gap, Old Navy, American Eagle</div>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg text-center">
              <div className="font-bold text-lg">EU</div>
              <div className="text-sm mt-1">Zara, H&M, Mango</div>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg text-center">
              <div className="font-bold text-lg">UK</div>
              <div className="text-sm mt-1">ASOS, Topshop, Next</div>
            </div>
          </div>
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
              <h3 className="font-semibold text-lg mb-1">¿Las talles de hombre y mujer son iguales?</h3>
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
