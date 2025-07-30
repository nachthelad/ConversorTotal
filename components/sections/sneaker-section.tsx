import Link from "next/link";
import { Footprints } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SneakerSection() {
  return (
    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8 max-w-6xl mx-auto">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <Footprints className="h-8 w-8 text-primary" />
          </div>
        </div>
        <h2 className="text-3xl font-bold">Especial para Sneakerheads 👟</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          ¿Eres fanático de las zapatillas? Nuestro{" "}
          <strong>conversor de talles de zapatillas</strong> es perfecto para
          compras internacionales de Nike, Adidas, Jordan y más.{" "}
          <strong>Encuentra tu talla exacta</strong> y evita devoluciones.
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
  );
}
