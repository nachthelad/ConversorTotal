import { Zap, Globe, Calculator } from "lucide-react";

export function FeaturesSection() {
  return (
    <div className="bg-muted/30 rounded-lg p-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">
        ¿Por qué elegir ConversorTotal?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center space-y-3">
          <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Zap className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold">Conversión Instantánea</h3>
          <p className="text-sm text-muted-foreground">
            <strong>Resultados al instante</strong> mientras escribes, sin
            esperas ni retrasos. Tecnología optimizada para velocidad.
          </p>
        </div>
        <div className="text-center space-y-3">
          <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Globe className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold">Datos Actualizados</h3>
          <p className="text-sm text-muted-foreground">
            <strong>Cotizaciones de monedas en tiempo real</strong> y fórmulas
            matemáticas precisas para todas las conversiones.
          </p>
        </div>
        <div className="text-center space-y-3">
          <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Calculator className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold">Fácil de Usar</h3>
          <p className="text-sm text-muted-foreground">
            <strong>Interfaz intuitiva</strong>, copia resultados y comparte por
            WhatsApp fácilmente. Sin registros necesarios.
          </p>
        </div>
      </div>
    </div>
  );
}
