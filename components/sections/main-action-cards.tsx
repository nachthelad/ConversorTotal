import Link from "next/link";
import { Calculator, DollarSign, Ruler, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function MainActionCards() {
  return (
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
            <strong>Todos los conversores de unidades</strong> que necesitas en
            un solo lugar:
          </p>
          <ul className="text-sm text-muted-foreground space-y-1 flex-1">
            <li>
              🌡️ <strong>Temperatura:</strong> Celsius ↔ Fahrenheit ↔ Kelvin
            </li>
            <li>
              ⚖️ <strong>Peso:</strong> Miligramos ↔ Kilogramos ↔ Libras ↔
              Toneladas
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
            <strong>Cotizaciones actualizadas en tiempo real</strong> desde
            Argentina con DolarAPI.com
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
  );
}
