import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <div className="text-center space-y-4 py-8">
      <h2 className="text-2xl font-semibold">¿Listo para convertir?</h2>
      <p className="text-muted-foreground">
        Elige el tipo de conversión que necesitas y comienza a convertir al
        instante.
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
  );
}
