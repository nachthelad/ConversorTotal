import Link from "next/link"
import {
  Calculator,
  DollarSign,
  Ruler,
  TrendingUp,
  Zap,
  Globe,
  Scale,
  Footprints,
  Gauge,
  Shirt,
  Thermometer,
  MapPin,
  Square,
  Activity,
  Power,
  Fuel,
  ChefHat,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { QuickCurrencyConverters } from "@/components/quick-currency-converters"
import { Metadata } from "next"

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6 max-[360px]:px-4">
        <h1 className="text-5xl font-bold tracking-tight text-foreground max-[360px]:text-3xl">
          <span className="text-primary">Conversor Online Gratuito</span> 
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          La herramienta más completa para <strong>convertir unidades de medida y monedas</strong> de forma rápida,
          precisa y gratuita. Sin registros, sin complicaciones. <strong>Resultados instantáneos</strong> para todas tus
          conversiones.
        </p>
      </div>

      {/* Espacio para Auto Ads */}
      <div className="min-h-[90px] flex items-center justify-center">
        {/* Auto Ads aparecerán aquí cuando Google apruebe el sitio */}
      </div>

      {/* Main Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 flex flex-col">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Ruler className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <CardTitle className="text-2xl">Convertir Unidades</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4 flex-1 flex flex-col">
            <p className="text-muted-foreground">
              <strong>Todos los conversores de unidades</strong> que necesitas en un solo lugar:
            </p>
            <ul className="text-sm text-muted-foreground space-y-1 flex-1">
              <li>
                🌡️ <strong>Temperatura:</strong> Celsius ↔ Fahrenheit ↔ Kelvin
              </li>
              <li>
                ⚖️ <strong>Peso:</strong> Miligramos ↔ Kilogramos ↔ Libras ↔ Toneladas
              </li>
              <li>
                📏 <strong>Distancia:</strong> Milímetros ↔ Kilómetros ↔ Millas
              </li>
              <li>
                💾 <strong>Almacenamiento:</strong> Bytes ↔ KB ↔ MB ↔ GB ↔ TB
              </li>
              <li>
                👟 <strong>Tallas Zapatillas:</strong> US ↔ EU ↔ UK
              </li>
            </ul>
            <div className="mt-auto">
              <Button asChild className="w-full" size="lg">
                <Link href="/unidades">
                  Ver Todos los Conversores
                  <Calculator className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 flex flex-col">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <DollarSign className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <CardTitle className="text-2xl">Convertir Monedas</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4 flex-1 flex flex-col">
            <p className="text-muted-foreground">
              <strong>Cotizaciones actualizadas en tiempo real</strong> desde Argentina con DolarAPI.com
            </p>
            <ul className="text-sm text-muted-foreground space-y-1 flex-1">
              <li>
                💵 <strong>Dólares:</strong> Oficial, Blue, Bolsa, Cripto
              </li>
              <li>
                💶 <strong>Euro, Real, Peso Chileno</strong>
              </li>
              <li>
                💱 <strong>Peso Uruguayo</strong>
              </li>
              <li>
                🔄 <strong>Actualización automática</strong>
              </li>
            </ul>
            <div className="mt-auto">
              <Button asChild className="w-full" size="lg">
                <Link href="/monedas">
                  Ver Cotizaciones
                  <TrendingUp className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Access to Popular Converters */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Conversores de Unidades Más Populares</h2>
        <p className="text-center text-muted-foreground mb-6">
          Acceso rápido a los conversores de unidades más utilizados en Argentina.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <Button asChild variant="outline" className="h-auto p-4 flex flex-col space-y-2">
            <Link href="/conversor-temperatura">
              <div className="w-8 h-8 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
                <span className="text-lg">🌡️</span>
              </div>
              <span className="text-xs text-center">Temperatura</span>
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-auto p-4 flex flex-col space-y-2">
            <Link href="/conversor-peso">
              <Scale className="h-6 w-6" />
              <span className="text-xs text-center">Peso</span>
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-auto p-4 flex flex-col space-y-2">
            <Link href="/conversor-distancia">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                <span className="text-lg">📏</span>
              </div>
              <span className="text-xs text-center">Distancia</span>
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-auto p-4 flex flex-col space-y-2 "
          >
            <Link href="/tallas-zapatillas">
              <Footprints className="h-6 w-6 text-primary" />
              <span className="text-xs text-center font-semibold">Tallas Zapatillas</span>
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-auto p-4 flex flex-col space-y-2">
            <Link href="/tallas-ropa">
              <Shirt className="h-6 w-6" />
              <span className="text-xs text-center">Tallas Ropa</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Popular Currency Conversions */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Conversiones de Monedas Más Populares</h2>
        <p className="text-center text-muted-foreground mb-6">
          Convierte las monedas más buscadas con cotizaciones actualizadas desde Argentina
        </p>
        <QuickCurrencyConverters />
        <div className="text-center mt-6">
          <Button asChild variant="outline">
            <Link href="/monedas">
              Ver Todas las Cotizaciones
              <TrendingUp className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Espacio para Auto Ads - Formato más grande */}
      <div className="min-h-[250px] flex items-center justify-center">
        {/* Google Auto Ads puede usar este espacio para anuncios más grandes */}
      </div>

      {/* Features Section */}
      <div className="bg-muted/30 rounded-lg p-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">¿Por qué elegir ConversorTotal?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center space-y-3">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold">Conversión Instantánea</h3>
            <p className="text-sm text-muted-foreground">
              <strong>Resultados al instante</strong> mientras escribes, sin esperas ni retrasos. Tecnología optimizada
              para velocidad.
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold">Datos Actualizados</h3>
            <p className="text-sm text-muted-foreground">
              <strong>Cotizaciones de monedas en tiempo real</strong> y fórmulas matemáticas precisas para todas las
              conversiones.
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Calculator className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold">Fácil de Usar</h3>
            <p className="text-sm text-muted-foreground">
              <strong>Interfaz intuitiva</strong>, copia resultados y comparte por WhatsApp fácilmente. Sin registros
              necesarios.
            </p>
          </div>
        </div>
      </div>

      {/* Sneaker Culture Section */}
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8 max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Footprints className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl font-bold">Especial para Sneakerheads 👟</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Eres fanático de las zapatillas? Nuestro <strong>conversor de tallas de zapatillas</strong> es perfecto
            para compras internacionales de Nike, Adidas, Jordan y más. <strong>Encuentra tu talla exacta</strong> y
            evita devoluciones.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/50 dark:bg-black/20 p-3 rounded-lg">
              <div className="font-semibold">Nike & Jordan</div>
              <div className="text-muted-foreground">Tallas US</div>
            </div>
            <div className="bg-white/50 dark:bg-black/20 p-3 rounded-lg">
              <div className="font-semibold">Adidas & Yeezy</div>
              <div className="text-muted-foreground">Tallas EU</div>
            </div>
            <div className="bg-white/50 dark:bg-black/20 p-3 rounded-lg">
              <div className="font-semibold">New Balance</div>
              <div className="text-muted-foreground">Tallas US</div>
            </div>
            <div className="bg-white/50 dark:bg-black/20 p-3 rounded-lg">
              <div className="font-semibold">Marcas EU</div>
              <div className="text-muted-foreground">Tallas EU</div>
            </div>
          </div>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/tallas-zapatillas">
              Convertir Talles de Zapatillas
              <Footprints className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Comprehensive Converter Overview - Redesigned */}
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Conversor de Unidades Online - La Herramienta Más Completa</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            <strong>ConversorTotal</strong> es el conversor de unidades más completo y fácil de usar en español.
            Ofrecemos <strong>14 tipos diferentes de conversores</strong> que cubren todas tus necesidades diarias.
          </p>
        </div>

        {/* Physical Measurements */}
        <Card className="p-6">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-2 text-xl">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                <Ruler className="h-5 w-5 text-blue-600" />
              </div>
              <span>Conversores de Medidas Físicas</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                <Thermometer className="h-5 w-5 text-red-500" />
                <div>
                  <div className="font-medium">Temperatura</div>
                  <div className="text-sm text-muted-foreground">Celsius ↔ Fahrenheit</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                <Scale className="h-5 w-5 text-purple-500" />
                <div>
                  <div className="font-medium">Peso y Masa</div>
                  <div className="text-sm text-muted-foreground">Kilogramos ↔ Libras</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                <MapPin className="h-5 w-5 text-blue-500" />
                <div>
                  <div className="font-medium">Distancia</div>
                  <div className="text-sm text-muted-foreground">Kilómetros ↔ Millas</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                <Square className="h-5 w-5 text-orange-500" />
                <div>
                  <div className="font-medium">Área</div>
                  <div className="text-sm text-muted-foreground">m² ↔ ft²</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                <Gauge className="h-5 w-5 text-yellow-500" />
                <div>
                  <div className="font-medium">Velocidad</div>
                  <div className="text-sm text-muted-foreground">Km/h ↔ mph</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                <Activity className="h-5 w-5 text-pink-500" />
                <div>
                  <div className="font-medium">Presión</div>
                  <div className="text-sm text-muted-foreground">Bar ↔ PSI</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                <Zap className="h-5 w-5 text-amber-500" />
                <div>
                  <div className="font-medium">Energía</div>
                  <div className="text-sm text-muted-foreground">Calorías ↔ Joules</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                <Power className="h-5 w-5 text-indigo-500" />
                <div>
                  <div className="font-medium">Potencia</div>
                  <div className="text-sm text-muted-foreground">HP ↔ kW</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Specialized Converters */}
        <Card className="p-6">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-2 text-xl">
              <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/20 rounded-full flex items-center justify-center">
                <Footprints className="h-5 w-5 text-emerald-600" />
              </div>
              <span>Conversores Especializados</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                <Footprints className="h-5 w-5 text-emerald-500" />
                <div>
                  <div className="font-medium">Tallas Zapatillas</div>
                  <div className="text-sm text-muted-foreground">US ↔ EU ↔ UK</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                <Shirt className="h-5 w-5 text-teal-500" />
                <div>
                  <div className="font-medium">Tallas de Ropa</div>
                  <div className="text-sm text-muted-foreground">US ↔ EU ↔ UK</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                <Fuel className="h-5 w-5 text-red-500" />
                <div>
                  <div className="font-medium">Combustible</div>
                  <div className="text-sm text-muted-foreground">L/100km ↔ MPG</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                <ChefHat className="h-5 w-5 text-rose-500" />
                <div>
                  <div className="font-medium">Cocina</div>
                  <div className="text-sm text-muted-foreground">Cucharadas ↔ ml</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Currency Converter */}
        <Card className="p-6">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-2 text-xl">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-green-600" />
              </div>
              <span>Conversor de Monedas</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Cotizaciones actualizadas en tiempo real desde Argentina, incluyendo:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4 text-green-500" />
                  <span className="font-medium">Dólar Oficial, Blue, Bolsa y Cripto</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-500">€</span>
                  <span className="font-medium">Euro, Real Brasilero</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-500">$</span>
                  <span className="font-medium">Peso Chileno y Uruguayo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4 text-blue-500" />
                  <span className="font-medium">USD ↔ EUR Internacional</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Advantages */}
        <Card className="p-6 bg-primary/5 border-primary/20">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-2 text-xl">
              <CheckCircle className="h-6 w-6 text-primary" />
              <span>Ventajas de ConversorTotal</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium">Gratuito</div>
                  <div className="text-sm text-muted-foreground">Sin registros ni pagos</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium">Rápido</div>
                  <div className="text-sm text-muted-foreground">Resultados instantáneos</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium">Preciso</div>
                  <div className="text-sm text-muted-foreground">Fórmulas matemáticas exactas</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium">Completo</div>
                  <div className="text-sm text-muted-foreground">14 tipos de conversores</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium">Fácil</div>
                  <div className="text-sm text-muted-foreground">Interfaz intuitiva</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium">Móvil</div>
                  <div className="text-sm text-muted-foreground">Optimizado para celulares</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="text-center space-y-4 py-8">
        <h2 className="text-2xl font-semibold">¿Listo para convertir?</h2>
        <p className="text-muted-foreground">
          Elige el tipo de conversión que necesitas y comienza a convertir al instante.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="default">
            <Link href="/unidades">Convertir Unidades</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/monedas">Convertir Monedas</Link>
          </Button>
        </div>
      </div>

      {/* Espacio final para Auto Ads */}
      <div className="min-h-[90px] flex items-center justify-center">{/* Auto Ads aparecerán aquí */}</div>

      {/* FAQ SEO Section */}
      <div className="max-w-3xl mx-auto mt-12">
        <h2 className="text-2xl font-bold mb-4">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">¿Cómo convierto metros a centímetros?</h3>
            <p>Solo ingresa el valor en metros, selecciona "centímetros" como unidad de destino y obtendrás el resultado al instante.</p>
          </div>
          <div>
            <h3 className="font-semibold">¿Puedo convertir monedas como dólar a peso argentino?</h3>
            <p>Sí, nuestro conversor de monedas te permite convertir entre dólar, euro, peso argentino y muchas otras monedas con cotizaciones actualizadas.</p>
          </div>
          <div>
            <h3 className="font-semibold">¿El uso del conversor es gratuito?</h3>
            <p>Sí, todas las herramientas de ConversorTotal son 100% gratuitas y no requieren registro.</p>
          </div>
          <div>
            <h3 className="font-semibold">¿Puedo usar el conversor desde el celular?</h3>
            <p>Sí, el sitio está optimizado para dispositivos móviles y computadoras.</p>
          </div>
          <div>
            <h3 className="font-semibold">¿Qué tipos de unidades puedo convertir?</h3>
            <p>Puedes convertir temperatura, peso, distancia, área, volumen, velocidad, tallas de ropa y zapatillas, almacenamiento digital y monedas.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: "Conversor de Unidades y Monedas Online Gratis – ConversorTotal",
  description: "Convierte unidades de medida y monedas al instante. Conversor online gratuito de temperatura, peso, distancia, tallas, monedas y más. Resultados rápidos y precisos.",
  keywords: [
    "conversor online",
    "convertir unidades",
    "convertir monedas",
    "conversor de temperatura",
    "conversor de peso",
    "conversor de distancia",
    "convertir mts a cm",
    "convertir kg a libras",
    "convertir dólares a pesos",
    "calculadora de conversiones",
    "conversor total"
  ],
  alternates: {
    canonical: "https://conversortotal.online",
  },
  openGraph: {
    title: "Conversor de Unidades y Monedas Online Gratis – ConversorTotal",
    description: "Convierte unidades y monedas al instante. Herramienta online gratuita, rápida y precisa.",
    url: "https://conversortotal.online",
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
    title: "Conversor de Unidades y Monedas Online Gratis",
    description: "Convierte unidades y monedas al instante. Gratis y sin registros.",
    images: ["/og-image.png"],
    creator: "ConversorTotal",
  },
}
