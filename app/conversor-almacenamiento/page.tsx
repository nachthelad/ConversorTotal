import type { Metadata } from "next"
import { FlexibleUnitConverter } from "@/components/flexibleUnitConverter/flexible-unit-converter"
import { storageUnits } from "@/lib/conversion-units"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Conversor de Almacenamiento Digital - Bytes, KB, MB, GB, TB Online Gratis",
  description:
    "Convierte almacenamiento digital entre Bytes, KB, MB, GB, TB y más. Conversor online gratuito, preciso y fácil de usar. Ideal para tecnología, archivos y cloud.",
  keywords: [
    "conversor almacenamiento",
    "bytes a kb",
    "mb a gb",
    "convertir almacenamiento digital",
    "calculadora almacenamiento",
    "conversion bytes",
    "kilobytes megabytes gigabytes terabytes",
    "espacio en disco",
    "cloud storage",
  ],
  alternates: {
    canonical: "https://conversortotal.online/conversor-almacenamiento",
  },
  openGraph: {
    title: "Conversor de Almacenamiento Digital - Bytes, KB, MB, GB, TB",
    description: "Convierte almacenamiento digital entre Bytes, KB, MB, GB, TB y más. Gratis y preciso.",
    url: "https://conversortotal.online/conversor-almacenamiento",
  },
}

export default function ConversorAlmacenamientoPage() {
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
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Conversor de Almacenamiento Digital</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Convierte almacenamiento entre Bytes, KB, MB, GB, TB y más de forma instantánea y precisa. Ideal para tecnología, archivos, cloud y desarrollo.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <FlexibleUnitConverter
          title="Almacenamiento Digital"
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7l9-4 9 4M3 7h18" /></svg>}
          category={storageUnits}
        />
      </div>

      {/* SEO Content Mejorado */}
      <div className="max-w-4xl mx-auto space-y-8 mt-12">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-2">Conversión de Almacenamiento Digital: Bytes, KB, MB, GB, TB</h2>
          <p>
            El almacenamiento digital se mide en múltiplos de bytes: <strong>KB</strong>, <strong>MB</strong>, <strong>GB</strong>, <strong>TB</strong> y más. Utiliza nuestro conversor para transformar cualquier cantidad entre estas unidades de forma instantánea y precisa.
          </p>
          <h3 className="text-xl font-semibold mt-6">Equivalencias principales</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
            <div className="bg-muted rounded-lg p-4 text-center">
              <div className="font-bold text-lg">1 KB</div>
              <div className="text-muted-foreground">= 1,024 Bytes</div>
            </div>
            <div className="bg-muted rounded-lg p-4 text-center">
              <div className="font-bold text-lg">1 MB</div>
              <div className="text-muted-foreground">= 1,024 KB</div>
            </div>
            <div className="bg-muted rounded-lg p-4 text-center">
              <div className="font-bold text-lg">1 GB</div>
              <div className="text-muted-foreground">= 1,024 MB</div>
            </div>
            <div className="bg-muted rounded-lg p-4 text-center">
              <div className="font-bold text-lg">1 TB</div>
              <div className="text-muted-foreground">= 1,024 GB</div>
            </div>
          </div>
          <h3 className="text-xl font-semibold mt-6">¿Cuándo necesitas convertir almacenamiento?</h3>
          <ul>
            <li><strong>Compras de tecnología:</strong> Saber cuántas fotos, videos o apps caben en tu dispositivo.</li>
            <li><strong>Transferencia de archivos:</strong> Calcular el tamaño antes de enviar o subir archivos.</li>
            <li><strong>Cloud y backups:</strong> Planificar espacio en la nube o discos externos.</li>
            <li><strong>Desarrollo y hosting:</strong> Optimizar recursos en servidores y sitios web.</li>
          </ul>
          <h3 className="text-xl font-semibold mt-6">Tips para entender el almacenamiento digital</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 !list-none !pl-0 mt-2">
            <li className="flex items-center gap-2">
              <span className="text-green-600">✔️</span>
              <span><strong>1,000 ≠ 1,024:</strong> En informática, 1 KB = 1,024 bytes (no 1,000).</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">✔️</span>
              <span><strong>Redondeo:</strong> Los sistemas operativos pueden mostrar valores redondeados.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">✔️</span>
              <span><strong>Unidades grandes:</strong> 1 TB = 1,024 GB, pero también existen PB, EB, ZB, YB.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">✔️</span>
              <span><strong>Comparar siempre:</strong> No todos los fabricantes usan la misma base.</span>
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
              <h3 className="font-semibold text-lg mb-1">¿Cómo convierto de MB a GB?</h3>
              <p className="text-muted-foreground">Ingresa el valor en MB, selecciona 'GB' como unidad de destino y obtendrás el resultado automáticamente.</p>
            </div>
          </div>
          {/* Pregunta 2 */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3 shadow-sm">
            <span className="mt-1 text-primary">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
            </span>
            <div>
              <h3 className="font-semibold text-lg mb-1">¿Cuántos bytes hay en un kilobyte?</h3>
              <p className="text-muted-foreground">Un kilobyte (KB) equivale a 1.024 bytes en informática.</p>
            </div>
          </div>
          {/* Pregunta 3 */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3 shadow-sm">
            <span className="mt-1 text-primary">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
            </span>
            <div>
              <h3 className="font-semibold text-lg mb-1">¿Puedo convertir entre cualquier unidad de almacenamiento digital?</h3>
              <p className="text-muted-foreground">Sí, puedes convertir entre bytes, KB, MB, GB, TB y más usando el conversor flexible.</p>
            </div>
          </div>
          {/* Pregunta 4 */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3 shadow-sm">
            <span className="mt-1 text-primary">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
            </span>
            <div>
              <h3 className="font-semibold text-lg mb-1">¿El conversor de almacenamiento es gratuito?</h3>
              <p className="text-muted-foreground">Sí, puedes usarlo sin límites y sin registrarte.</p>
            </div>
          </div>
          {/* Pregunta 5 */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3 shadow-sm">
            <span className="mt-1 text-primary">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
            </span>
            <div>
              <h3 className="font-semibold text-lg mb-1">¿Sirve para calcular espacio en la nube o discos externos?</h3>
              <p className="text-muted-foreground">Sí, es ideal para planificar espacio en la nube, discos externos, transferencias de archivos y más.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 