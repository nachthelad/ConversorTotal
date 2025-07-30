import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOBreadcrumbs } from "@/components/layout/seo-breadcrumbs";
import { Shield, Cookie, Eye, Database, Users, Bell } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidad | ConversorTotal",
  description:
    "Política de privacidad y protección de datos de ConversorTotal. Conoce cómo protegemos tu información personal y utilizamos cookies.",
  keywords:
    "política de privacidad, protección de datos, cookies, ConversorTotal, RGPD",
  openGraph: {
    title: "Política de Privacidad | ConversorTotal",
    description:
      "Política de privacidad y protección de datos de ConversorTotal. Conoce cómo protegemos tu información.",
    url: "https://conversortotal.online/politica-privacidad",
    siteName: "ConversorTotal",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Política de Privacidad | ConversorTotal",
    description:
      "Política de privacidad y protección de datos de ConversorTotal.",
  },
  alternates: {
    canonical: "https://conversortotal.online/politica-privacidad",
  },
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <SEOBreadcrumbs
        items={[
          { label: "Política de Privacidad", href: "/politica-privacidad" },
        ]}
      />

      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Shield className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-3xl font-bold">Política de Privacidad</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Última actualización: 19 de junio de 2025
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Eye className="h-5 w-5 text-blue-600" />
              <span>1. Información que Recopilamos</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              ConversorTotal respeta tu privacidad y se compromete a proteger
              tus datos personales. Esta política describe cómo recopilamos,
              utilizamos y protegemos tu información.
            </p>
            <div className="space-y-2">
              <h4 className="font-semibold">
                Información que recopilamos automáticamente:
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Dirección IP y datos de ubicación aproximada</li>
                <li>Información del navegador y dispositivo</li>
                <li>Páginas visitadas y tiempo de permanencia</li>
                <li>Datos de rendimiento y errores técnicos</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Cookie className="h-5 w-5 text-green-600" />
              <span>2. Uso de Cookies</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Utilizamos cookies y tecnologías similares para mejorar tu
              experiencia y proporcionar funcionalidades esenciales del sitio
              web.
            </p>
            <div className="space-y-2">
              <h4 className="font-semibold">
                Tipos de cookies que utilizamos:
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>
                  <strong>Cookies esenciales:</strong> Necesarias para el
                  funcionamiento básico del sitio
                </li>
                <li>
                  <strong>Cookies de rendimiento:</strong> Para analizar el uso
                  del sitio y mejorar la experiencia
                </li>
                <li>
                  <strong>Cookies de publicidad:</strong> Para mostrar anuncios
                  relevantes (Google AdSense)
                </li>
                <li>
                  <strong>Cookies de funcionalidad:</strong> Para recordar tus
                  preferencias
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Database className="h-5 w-5 text-purple-600" />
              <span>3. Google AdSense y Publicidad</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Este sitio utiliza Google AdSense para mostrar anuncios. Google
              AdSense utiliza cookies para personalizar anuncios según tus
              intereses.
            </p>
            <div className="space-y-2">
              <h4 className="font-semibold">Información sobre AdSense:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>
                  Google AdSense puede recopilar información sobre tu uso del
                  sitio
                </li>
                <li>
                  Los anuncios se personalizan según tu historial de navegación
                </li>
                <li>Puedes optar por no recibir anuncios personalizados</li>
                <li>
                  Google utiliza datos para mejorar la relevancia de los
                  anuncios
                </li>
              </ul>
            </div>
            <p className="text-sm text-muted-foreground">
              Para más información sobre las prácticas de privacidad de Google,
              visita:
              <a
                href="https://policies.google.com/privacy"
                className="text-primary hover:underline ml-1"
              >
                https://policies.google.com/privacy
              </a>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-orange-600" />
              <span>4. Compartir Información</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              No vendemos, alquilamos ni compartimos tu información personal con
              terceros, excepto:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>
                Con proveedores de servicios que nos ayudan a operar el sitio
              </li>
              <li>Con Google AdSense para mostrar anuncios relevantes</li>
              <li>
                Cuando es requerido por ley o para proteger nuestros derechos
              </li>
              <li>Con tu consentimiento explícito</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-red-600" />
              <span>5. Seguridad de Datos</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Implementamos medidas de seguridad técnicas y organizativas para
              proteger tu información:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Conexiones seguras (HTTPS) en todo el sitio</li>
              <li>Encriptación de datos sensibles</li>
              <li>Acceso restringido a información personal</li>
              <li>Monitoreo regular de seguridad</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="h-5 w-5 text-yellow-600" />
              <span>6. Tus Derechos</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Tienes derecho a:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Acceder a la información personal que tenemos sobre ti</li>
              <li>Corregir información inexacta o incompleta</li>
              <li>Solicitar la eliminación de tus datos personales</li>
              <li>Oponerte al procesamiento de tus datos</li>
              <li>Retirar tu consentimiento en cualquier momento</li>
            </ul>
            <p className="text-sm text-muted-foreground">
              Para ejercer estos derechos, contáctanos en:
              <a
                href="mailto:privacidad@conversortotal.online"
                className="text-primary hover:underline ml-1"
              >
                privacidad@conversortotal.online
              </a>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>7. Cambios en esta Política</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Podemos actualizar esta política de privacidad ocasionalmente. Te
              notificaremos sobre cambios significativos publicando la nueva
              política en esta página y actualizando la fecha de "Última
              actualización".
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>8. Contacto</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Si tienes preguntas sobre esta política de privacidad o nuestras
              prácticas de datos, contáctanos en:{" "}
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
