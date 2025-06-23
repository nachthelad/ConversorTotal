import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SEOBreadcrumbs } from "@/components/seo-breadcrumbs"
import { FileText, Shield, AlertCircle, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Términos y Condiciones | ConversorTotal",
  description:
    "Términos y condiciones de uso de ConversorTotal. Conoce nuestras políticas y condiciones para el uso de nuestros conversores de unidades, monedas y tallas.",
  keywords: "términos y condiciones, políticas de uso, ConversorTotal, conversor de unidades",
  openGraph: {
    title: "Términos y Condiciones | ConversorTotal",
    description:
      "Términos y condiciones de uso de ConversorTotal. Conoce nuestras políticas y condiciones para el uso de nuestros conversores.",
    url: "https://conversortotal.vercel.app/terminos-y-condiciones",
    siteName: "ConversorTotal",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Términos y Condiciones | ConversorTotal",
    description: "Términos y condiciones de uso de ConversorTotal.",
  },
  alternates: {
    canonical: "https://conversortotal.vercel.app/terminos-y-condiciones",
  },
}

export default function TerminosYCondicionesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <SEOBreadcrumbs
        items={[
          { label: "Términos y Condiciones", href: "/terminos-y-condiciones" },
        ]}
      />

      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <FileText className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-3xl font-bold">Términos y Condiciones</h1>
        </div>
        <p className="text-muted-foreground text-lg">Última actualización: 19 de junio de 2025</p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-green-600" />
              <span>1. Aceptación de los Términos</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Al acceder y utilizar ConversorTotal, usted acepta estar sujeto a estos términos y condiciones de uso. Si
              no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro servicio.
            </p>
            <p>
              ConversorTotal es una herramienta gratuita de conversión de unidades, monedas y tallas que proporciona
              información con fines educativos e informativos.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertCircle className="h-5 w-5 text-blue-600" />
              <span>2. Uso del Servicio</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              <strong>Uso Permitido:</strong> Puede utilizar ConversorTotal para realizar conversiones de unidades,
              consultar tipos de cambio y convertir tallas de ropa y calzado.
            </p>
            <p>
              <strong>Uso Prohibido:</strong> No está permitido:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Usar el servicio para actividades ilegales o no autorizadas</li>
              <li>Intentar acceder a sistemas o datos no autorizados</li>
              <li>Interferir con el funcionamiento del servicio</li>
              <li>Reproducir o distribuir el contenido sin autorización</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-orange-600" />
              <span>3. Precisión de la Información</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              <strong>Tipos de Cambio:</strong> Los tipos de cambio se obtienen de fuentes externas y se actualizan
              regularmente. Sin embargo, no garantizamos la precisión absoluta de esta información.
            </p>
            <p>
              <strong>Conversiones:</strong> Las conversiones de unidades y tallas se basan en estándares
              internacionales reconocidos, pero pueden variar según el fabricante o región.
            </p>
            <p>
              <strong>Responsabilidad:</strong> ConversorTotal no se hace responsable por decisiones tomadas basándose
              en la información proporcionada. Para transacciones importantes, consulte fuentes oficiales.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>4. Propiedad Intelectual</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Todo el contenido, diseño, código y funcionalidades de ConversorTotal están protegidos por derechos de
              autor y otras leyes de propiedad intelectual.
            </p>
            <p>
              El uso del servicio no le otorga ningún derecho de propiedad sobre el contenido o las funcionalidades.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>5. Limitación de Responsabilidad</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              ConversorTotal se proporciona "tal como está" sin garantías de ningún tipo. No garantizamos que el
              servicio sea ininterrumpido, libre de errores o completamente seguro.
            </p>
            <p>
              En ningún caso seremos responsables por daños directos, indirectos, incidentales o consecuentes que
              resulten del uso o la imposibilidad de usar nuestro servicio.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>6. Modificaciones</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios
              entrarán en vigor inmediatamente después de su publicación en esta página.
            </p>
            <p>Es su responsabilidad revisar periódicamente estos términos para estar al tanto de cualquier cambio.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>7. Contacto</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Si tiene preguntas sobre estos términos y condiciones, puede contactarnos en:</p>
            <p className="font-medium text-primary mt-2">📧 nachthelad.dev@gmail.com</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
