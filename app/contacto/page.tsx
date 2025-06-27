import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SEOBreadcrumbs } from "@/components/seo-breadcrumbs"
import { Mail, MessageCircle, Clock, Send, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contacto | ConversorTotal",
  description:
    "Contáctanos para sugerencias, consultas o reportar problemas con ConversorTotal. Estamos aquí para ayudarte con nuestros conversores de unidades, monedas y tallas.",
  keywords: "contacto, soporte, ayuda, ConversorTotal, sugerencias, consultas",
  openGraph: {
    title: "Contacto | ConversorTotal",
    description: "Contáctanos para sugerencias, consultas o reportar problemas con ConversorTotal.",
    url: "https://conversortotal.online/contacto",
    siteName: "ConversorTotal",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contacto | ConversorTotal",
    description: "Contáctanos para sugerencias, consultas o reportar problemas con ConversorTotal.",
  },
  alternates: {
    canonical: "https://conversortotal.online/contacto",
  },
}

export default function ContactoPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <SEOBreadcrumbs
        items={[
          { label: "Contacto", href: "/contacto" },
        ]}
      />

      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-3xl font-bold">Contacto</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          ¿Tienes alguna pregunta, sugerencia o encontraste un problema? ¡Nos encantaría escucharte!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Send className="h-5 w-5 text-primary" />
                <span>Envíanos un Email</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Para consultas, sugerencias o reportar problemas, envíanos un email a:</p>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <Link
                  href="mailto:nachthelad.dev@gmail.com"
                  className="text-primary font-medium text-lg hover:underline flex items-center space-x-2"
                >
                  <Mail className="h-5 w-5" />
                  <span>nachthelad.dev@gmail.com</span>
                </Link>
              </div>
              <Button asChild className="w-full">
                <Link href="mailto:nachthelad.dev@gmail.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Enviar Email
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-green-600" />
                <span>Tiempo de Respuesta</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Nos esforzamos por responder todos los emails dentro de <strong>24-48 horas</strong>. Para consultas
                urgentes, por favor indícalo en el asunto del mensaje.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5 text-blue-600" />
                <span>Síguenos</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">También puedes seguirnos en nuestras redes sociales:</p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://github.com/nachthelad" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://www.linkedin.com/in/ignacio-ventura/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ / Common Topics */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>¿En qué podemos ayudarte?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 bg-muted/50 rounded-lg">
                  <h3 className="font-medium mb-1">🐛 Reportar un Error</h3>
                  <p className="text-sm text-muted-foreground">
                    ¿Encontraste algo que no funciona correctamente? Cuéntanos los detalles.
                  </p>
                </div>

                <div className="p-3 bg-muted/50 rounded-lg">
                  <h3 className="font-medium mb-1">💡 Sugerir Mejoras</h3>
                  <p className="text-sm text-muted-foreground">
                    ¿Tienes ideas para nuevas funciones o mejoras? ¡Nos encanta escuchar sugerencias!
                  </p>
                </div>

                <div className="p-3 bg-muted/50 rounded-lg">
                  <h3 className="font-medium mb-1">❓ Hacer Preguntas</h3>
                  <p className="text-sm text-muted-foreground">
                    ¿Dudas sobre cómo usar alguna función? Te ayudamos a resolverlas.
                  </p>
                </div>

                <div className="p-3 bg-muted/50 rounded-lg">
                  <h3 className="font-medium mb-1">🤝 Colaborar</h3>
                  <p className="text-sm text-muted-foreground">
                    ¿Interesado en contribuir al proyecto? Hablemos sobre las posibilidades.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Información Útil</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm">
                <strong>Al contactarnos, por favor incluye:</strong>
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li>• Una descripción clara del problema o consulta</li>
                <li>• El navegador y dispositivo que estás usando</li>
                <li>• Pasos para reproducir el problema (si aplica)</li>
                <li>• Capturas de pantalla si es necesario</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
