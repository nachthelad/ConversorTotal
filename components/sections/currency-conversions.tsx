import Link from "next/link";
import { TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuickCurrencyConverters } from "@/components/converters/quick-currency-converters";

export function CurrencyConversions() {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">
        Conversiones de Monedas Más Populares
      </h2>
      <p className="text-center text-muted-foreground mb-6">
        Convierte las monedas más buscadas con cotizaciones actualizadas desde
        Argentina
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
  );
}
