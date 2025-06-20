import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://conversortotal.vercel.app"),
  title: {
    default: "ConversorTotal - Conversor de Unidades y Monedas Online Gratis",
    template: "%s | ConversorTotal - Conversor Online Gratis",
  },
  description:
    "Conversor online gratuito de unidades de medida y monedas. Convierte temperatura, distancia, peso, área, velocidad, tallas de ropa, zapatos y más. Resultados instantáneos y precisos.",
  keywords: [
    "conversor de unidades",
    "convertir unidades online",
    "conversor de temperatura",
    "celsius a fahrenheit",
    "conversor de peso",
    "kg a libras",
    "conversor de distancia",
    "km a millas",
    "conversor de monedas",
    "dolar blue",
    "cotizacion dolar",
    "tallas de ropa",
    "tallas de zapatos",
    "conversor gratuito",
    "calculadora de conversiones",
  ],
  authors: [{ name: "ConvierteYa" }],
  creator: "ConversorTotal",
  publisher: "ConversorTotal",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#5B9BD5" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "ConversorTotal",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://conversortotal.vercel.app",
    siteName: "ConversorTotal",
    title: "ConversorTotal - Conversor de Unidades y Monedas Online Gratis",
    description:
      "Conversor online gratuito de unidades de medida y monedas. Convierte temperatura, distancia, peso, área, velocidad, tallas y más. Resultados instantáneos.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ConvierteYa - Conversor de Unidades Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ConversorTotal - Conversor de Unidades Online Gratis",
    description:
      "Convierte unidades de temperatura, peso, distancia, tallas y monedas al instante. Gratis y sin registros.",
    images: ["/og-image.png"],
    creator: "ConversorTotal",
  },
  alternates: {
    canonical: "https://conversortotal.vercel.app",
  },
  verification: {
    google: "google-adsense-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="google-adsense-account" content="ca-pub-1027418154196814" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "ConversorTotal",
              description: "Conversor online gratuito de unidades de medida y monedas",
              url: "https://conversortotal.vercel.app",
              applicationCategory: "UtilitiesApplication",
              operatingSystem: "Web Browser",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "Conversor de temperatura",
                "Conversor de peso y masa",
                "Conversor de distancia",
                "Conversor de área",
                "Conversor de velocidad",
                "Conversor de presión",
                "Conversor de energía",
                "Conversor de potencia",
                "Conversor de tallas de ropa",
                "Conversor de tallas de zapatos",
                "Conversor de combustible",
                "Conversor de medidas de cocina",
                "Conversor de monedas",
                "Cotizaciones en tiempo real",
              ],
            }),
          }}
        />

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1027418154196814"
          crossOrigin="anonymous"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.adsbygoogle = window.adsbygoogle || [];
              (adsbygoogle = window.adsbygoogle || []).push({
                google_ad_client: "ca-pub-1027418154196814",
                enable_page_level_ads: true
              });
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Script
          id="google-adsense"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1027418154196814"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />

        <Script
          id="adsense-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                (adsbygoogle = window.adsbygoogle || []).push({});
              } catch (e) {
                console.log('AdSense error:', e);
              }
            `,
          }}
        />

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="container mx-auto px-4 py-8 flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
