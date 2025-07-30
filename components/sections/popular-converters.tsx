import Link from "next/link";
import { Scale, Footprints, Shirt } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PopularConverters() {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">
        Conversores de Unidades Más Populares
      </h2>
      <p className="text-center text-muted-foreground mb-6">
        Acceso rápido a los conversores de unidades más utilizados en Argentina.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <Button
          asChild
          variant="outline"
          className="h-auto p-4 flex flex-col space-y-2"
        >
          <Link href="/conversor-temperatura">
            <div className="w-8 h-8 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
              <span className="text-lg">🌡️</span>
            </div>
            <span className="text-xs text-center">Temperatura</span>
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="h-auto p-4 flex flex-col space-y-2"
        >
          <Link href="/conversor-peso">
            <Scale className="h-6 w-6" />
            <span className="text-xs text-center">Peso</span>
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="h-auto p-4 flex flex-col space-y-2"
        >
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
            <span className="text-xs text-center font-semibold">
              Tallas Zapatillas
            </span>
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="h-auto p-4 flex flex-col space-y-2"
        >
          <Link href="/tallas-ropa">
            <Shirt className="h-6 w-6" />
            <span className="text-xs text-center">Tallas Ropa</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
