import type { Metadata } from "next";
import { SEOBreadcrumbs } from "@/components/layout/seo-breadcrumbs";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Sobre nosotros | ConversorTotal",
  description:
    "ConversorTotal busca ayudar a las personas a obtener mediciones básicas y conversiones útiles de manera simple y rápida. Páginas sencillas con herramientas claras y contenido al alcance de la mano.",
  alternates: {
    canonical: "https://conversortotal.online/sobre-nosotros",
  },
  openGraph: {
    title: "Sobre nosotros | ConversorTotal",
    description:
      "Nuestra idea es construir páginas web sencillas que ayuden a las personas a usar conversores y contenidos prácticos sin complicaciones.",
    url: "https://conversortotal.online/sobre-nosotros",
    type: "website",
  },
};

export default function SobreNosotrosPage() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <SEOBreadcrumbs
        items={[{ label: "Sobre nosotros", href: "/sobre-nosotros" }]}
      />

      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Sobre nosotros
        </h1>
        <p className="text-lg text-muted-foreground">
          ConversorTotal existe con un objetivo simple: ayudar a las personas a
          obtener <strong>mediciones básicas</strong> y realizar conversiones
          útiles <strong>de forma clara y rápida</strong>.
        </p>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
        <section>
          <h2>Nuestra idea</h2>
          <p>
            Crear <strong>páginas web sencillas</strong> que pongan a mano
            conversores e información práctica. Sin vueltas: interfaces limpias,
            ejemplos claros y resultados al instante.
          </p>
        </section>

        <section>
          <h2>Qué vas a encontrar</h2>
          <ul>
            <li>
              Conversores de unidades (temperatura, peso, distancia y más).
            </li>
            <li>Conversor de monedas con cotizaciones actualizadas.</li>
            <li>Guías breves, ejemplos y tablas de referencia.</li>
          </ul>
        </section>

        <section>
          <h2>Principios</h2>
          <ul>
            <li>Claro antes que complejo.</li>
            <li>Útil antes que extenso.</li>
            <li>Rápido y accesible en cualquier dispositivo.</li>
          </ul>
        </section>

        <section>
          <h2>Contacto</h2>
          <p>
            ¿Tenés una sugerencia o encontraste un error? Escribinos desde la
            página de <a href="/contacto">Contacto</a>.
          </p>
        </section>
      </div>

      {/* Structured data: AboutPage */}
      <Script id="about-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          mainEntityOfPage: "https://conversortotal.online/sobre-nosotros",
          description:
            "ConversorTotal ayuda a obtener mediciones básicas y conversiones útiles con páginas simples y contenido al alcance de la mano.",
        })}
      </Script>
    </div>
  );
}
