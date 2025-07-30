import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOBreadcrumbs } from "@/components/layout/seo-breadcrumbs";
import { Cookie, Settings, Shield, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Cookies | ConversorTotal",
  description:
    "Política de cookies de ConversorTotal. Conoce qué cookies utilizamos y cómo gestionarlas para mejorar tu experiencia.",
  keywords:
    "política de cookies, cookies, ConversorTotal, gestión de cookies, RGPD",
  openGraph: {
    title: "Política de Cookies | ConversorTotal",
    description:
      "Política de cookies de ConversorTotal. Conoce qué cookies utilizamos y cómo gestionarlas.",
    url: "https://conversortotal.online/politica-cookies",
    siteName: "ConversorTotal",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Política de Cookies | ConversorTotal",
    description: "Política de cookies de ConversorTotal.",
  },
  alternates: {
    canonical: "https://conversortotal.online/politica-cookies",
  },
};

export default function PoliticaCookiesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <SEOBreadcrumbs
        items={[{ label: "Política de Cookies", href: "/politica-cookies" }]}
      />

      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Cookie className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-3xl font-bold">Política de Cookies</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Última actualización: 19 de junio de 2025
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Info className="h-5 w-5 text-blue-600" />
              <span>¿Qué son las Cookies?</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en tu
              dispositivo cuando visitas nuestro sitio web. Estas cookies nos
              ayudan a mejorar tu experiencia y proporcionar funcionalidades
              esenciales.
            </p>
            <p>
              Las cookies pueden ser temporales (sesión) o permanentes, y pueden
              ser establecidas por nosotros o por terceros como Google AdSense.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-green-600" />
              <span>Cookies Esenciales</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Estas cookies son necesarias para el funcionamiento básico del
              sitio web y no pueden ser desactivadas.
            </p>
            <div className="space-y-2">
              <h4 className="font-semibold">Incluyen:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Cookies de sesión para mantener tu sesión activa</li>
                <li>Cookies de seguridad para proteger contra ataques</li>
                <li>Cookies de preferencias básicas del sitio</li>
                <li>Cookies de rendimiento para optimizar la carga</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="h-5 w-5 text-purple-600" />
              <span>Cookies de Funcionalidad</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Estas cookies permiten que el sitio web recuerde las elecciones
              que haces y proporcionen funcionalidades mejoradas.
            </p>
            <div className="space-y-2">
              <h4 className="font-semibold">Funciones incluidas:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Recordar tus conversiones favoritas</li>
                <li>Guardar preferencias de tema (claro/oscuro)</li>
                <li>Recordar unidades de medida preferidas</li>
                <li>Personalizar la experiencia de usuario</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Cookie className="h-5 w-5 text-orange-600" />
              <span>Cookies de Publicidad (Google AdSense)</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Utilizamos Google AdSense para mostrar anuncios relevantes. Estas
              cookies son establecidas por Google y nos ayudan a mantener el
              sitio gratuito.
            </p>
            <div className="space-y-2">
              <h4 className="font-semibold">Cookies de AdSense incluyen:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Cookies de personalización de anuncios</li>
                <li>Cookies de frecuencia de anuncios</li>
                <li>Cookies de medición de rendimiento</li>
                <li>Cookies de seguridad de anuncios</li>
              </ul>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>Nota:</strong> Puedes optar por no recibir anuncios
                personalizados visitando
                <a
                  href="https://www.google.com/settings/ads"
                  className="text-blue-600 hover:underline ml-1"
                >
                  las configuraciones de anuncios de Google
                </a>
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cookies de Análisis</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Utilizamos cookies de análisis para entender cómo los usuarios
              interactúan con nuestro sitio y mejorar la experiencia.
            </p>
            <div className="space-y-2">
              <h4 className="font-semibold">Datos recopilados:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Páginas más visitadas</li>
                <li>Tiempo de permanencia en el sitio</li>
                <li>Conversores más utilizados</li>
                <li>Información de rendimiento técnico</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Gestión de Cookies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Puedes gestionar las cookies de varias maneras:</p>
            <div className="space-y-2">
              <h4 className="font-semibold">Opciones disponibles:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>
                  <strong>Configuración del navegador:</strong> Cambiar la
                  configuración de cookies en tu navegador
                </li>
                <li>
                  <strong>Herramientas de terceros:</strong> Utilizar
                  extensiones para bloquear cookies
                </li>
                <li>
                  <strong>Modo incógnito:</strong> Navegar sin almacenar cookies
                </li>
                <li>
                  <strong>Contacto directo:</strong> Solicitar la eliminación de
                  datos específicos
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>Importante:</strong> Deshabilitar ciertas cookies puede
                afectar la funcionalidad del sitio web.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cookies de Terceros</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Algunos servicios de terceros pueden establecer cookies en tu
              dispositivo:
            </p>
            <div className="space-y-2">
              <h4 className="font-semibold">Servicios utilizados:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>
                  <strong>Google AdSense:</strong> Para mostrar anuncios
                  relevantes
                </li>
                <li>
                  <strong>Vercel Analytics:</strong> Para análisis de
                  rendimiento
                </li>
                <li>
                  <strong>APIs de cotizaciones:</strong> Para datos de monedas
                  en tiempo real
                </li>
              </ul>
            </div>
            <p className="text-sm text-muted-foreground">
              Cada servicio tiene su propia política de privacidad que puedes
              consultar en sus sitios web.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Actualizaciones de esta Política</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Esta política de cookies puede ser actualizada ocasionalmente. Te
              notificaremos sobre cambios significativos publicando la nueva
              política en esta página.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contacto</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Si tienes preguntas sobre nuestra política de cookies, contáctanos
              en:{" "}
              <a
                href="mailto:privacidad@conversortotal.online"
                className="text-primary hover:underline"
              >
                privacidad@conversortotal.online
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
