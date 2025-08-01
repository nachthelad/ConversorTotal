import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import { CookieBanner } from "@/components/ui/cookie-banner";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://conversortotal.online"),
  title: {
    default: "ConversorTotal - Conversor de Unidades y Monedas Online Gratis",
    template: "%s | ConversorTotal - Conversor Online Gratis",
  },
  description:
    "Conversor online gratuito de unidades de medida y monedas. Convierte temperatura, distancia, peso, área, velocidad, talles de ropa, zapatos y más. Resultados instantáneos y precisos.",
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
    "talles de ropa",
    "talles de zapatos",
    "conversor gratuito",
    "calculadora de conversiones",
  ],
  authors: [{ name: "ConversorTotal" }],
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
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "ConversorTotal",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://conversortotal.online",
    siteName: "ConversorTotal",
    title: "ConversorTotal - Conversor de Unidades y Monedas Online Gratis",
    description:
      "Convierte unidades de medida y monedas al instante. Conversor online gratuito de temperatura, peso, distancia, tallas, monedas y más. Resultados rápidos y precisos.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ConversorTotal - Conversor de Unidades Online",
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
    canonical: "https://conversortotal.online",
  },
  verification: {
    google: "google-adsense-verification-code",
  },
  generator: "v0.dev",
};

export const themeColor = [
  { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
  { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
];

export const viewport = "width=device-width, initial-scale=1, maximum-scale=1";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta
          name="google-site-verification"
          content="0SpVRbuIl2TlqT3vf9qiSxWHX18CfPH9E8z5arKppCA"
        />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "ConversorTotal",
              description:
                "Conversor online gratuito de unidades de medida y monedas",
              url: "https://conversortotal.online",
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
                "Conversor de talles de ropa",
                "Conversor de talles de zapatos",
                "Conversor de combustible",
                "Conversor de medidas de cocina",
                "Conversor de monedas",
                "Cotizaciones en tiempo real",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="container mx-auto px-4 py-8 flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
          <CookieBanner />
        </ThemeProvider>
        <Analytics />

        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1027418154196814"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
