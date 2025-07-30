import {
  Ruler,
  Thermometer,
  Scale,
  MapPin,
  Square,
  Gauge,
  Activity,
  Zap,
  Power,
  Footprints,
  Shirt,
  Fuel,
  ChefHat,
  DollarSign,
  Globe,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ComprehensiveOverview() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">
          Conversor de Unidades Online - La Herramienta Más Completa
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          <strong>ConversorTotal</strong> es el conversor de unidades más
          completo y fácil de usar en español. Ofrecemos{" "}
          <strong>diferentes de conversores</strong> que cubren todas tus
          necesidades diarias.
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
                <div className="text-sm text-muted-foreground">
                  Celsius ↔ Fahrenheit
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
              <Scale className="h-5 w-5 text-purple-500" />
              <div>
                <div className="font-medium">Peso y Masa</div>
                <div className="text-sm text-muted-foreground">
                  Kilogramos ↔ Libras
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
              <MapPin className="h-5 w-5 text-blue-500" />
              <div>
                <div className="font-medium">Distancia</div>
                <div className="text-sm text-muted-foreground">
                  Kilómetros ↔ Millas
                </div>
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
                <div className="text-sm text-muted-foreground">
                  Calorías ↔ Joules
                </div>
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
                <div className="text-sm text-muted-foreground">
                  US ↔ EU ↔ UK
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
              <Shirt className="h-5 w-5 text-teal-500" />
              <div>
                <div className="font-medium">Talles de Ropa</div>
                <div className="text-sm text-muted-foreground">
                  US ↔ EU ↔ UK
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
              <Fuel className="h-5 w-5 text-red-500" />
              <div>
                <div className="font-medium">Combustible</div>
                <div className="text-sm text-muted-foreground">
                  L/100km ↔ MPG
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
              <ChefHat className="h-5 w-5 text-rose-500" />
              <div>
                <div className="font-medium">Cocina</div>
                <div className="text-sm text-muted-foreground">
                  Cucharadas ↔ ml
                </div>
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
            Cotizaciones actualizadas en tiempo real desde Argentina,
            incluyendo:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <DollarSign className="h-4 w-4 text-green-500" />
                <span className="font-medium">
                  Dólar Oficial, Blue, Bolsa y Cripto
                </span>
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
                <div className="text-sm text-muted-foreground">
                  Sin registros ni pagos
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium">Rápido</div>
                <div className="text-sm text-muted-foreground">
                  Resultados instantáneos
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium">Preciso</div>
                <div className="text-sm text-muted-foreground">
                  Fórmulas matemáticas exactas
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium">Completo</div>
                <div className="text-sm text-muted-foreground">
                  Conversores de todo tipo
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium">Fácil</div>
                <div className="text-sm text-muted-foreground">
                  Interfaz intuitiva
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium">Móvil</div>
                <div className="text-sm text-muted-foreground">
                  Optimizado para celulares
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
