import { useFlexibleCurrencyConverter } from "@/hooks/use-flexible-currency-converter"
import { Banknote, Clock, Copy, Share } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useShareConversion } from "@/hooks/use-share-conversion"

interface FlexibleCurrencyConverterProps {
  monedaOrigen: string
  monedaDestino: string
  nombreOrigen: string
  nombreDestino: string
  simboloOrigen: string
  simboloDestino: string
  cotizacion: number
  fecha: string
  fuente?: string
}

export function FlexibleCurrencyConverter({
  monedaOrigen,
  monedaDestino,
  nombreOrigen,
  nombreDestino,
  simboloOrigen,
  simboloDestino,
  cotizacion,
  fecha,
  fuente,
}: FlexibleCurrencyConverterProps) {
  const {
    valorOrigen,
    setValorOrigen,
    valorDestino,
    setValorDestino,
    handleOrigenChange,
    handleDestinoChange,
  } = useFlexibleCurrencyConverter({ cotizacion })
  const { copyToClipboard, shareToWhatsApp, copiedField } = useShareConversion({
    nombreOrigen,
    nombreDestino,
    simboloOrigen,
    simboloDestino,
    cotizacion,
  })
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      return date.toLocaleString("es-AR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    } catch {
      return "Fecha no disponible"
    }
  }
  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <CardTitle className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between text-lg w-full">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
            <span className="font-semibold">{nombreOrigen}</span>
            <span className="hidden sm:inline text-sm text-muted-foreground">→</span>
            <span className="font-semibold sm:ml-0">{nombreDestino}</span>
          </div>
          <div className="text-sm text-muted-foreground mt-1 sm:mt-0">{cotizacion.toFixed(2)}</div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col items-center space-y-2">
          <Label htmlFor="origen" className="text-sm font-medium">
            {nombreOrigen} ({simboloOrigen})
          </Label>
          <Input
            id="origen"
            type="number"
            value={valorOrigen}
            onChange={(e) => handleOrigenChange(e.target.value)}
            placeholder={`Ingresa cantidad en ${simboloOrigen}`}
            className="max-w-xs w-90"
            min="0"
            step="0.01"
          />
          <Label htmlFor="destino" className="text-sm font-medium mt-4">
            {nombreDestino} ({simboloDestino})
          </Label>
          <Input
            id="destino"
            type="number"
            value={valorDestino}
            onChange={(e) => handleDestinoChange(e.target.value)}
            placeholder={`Ingresa cantidad en ${simboloDestino}`}
            className="max-w-xs w-90"
            min="0"
            step="0.01"
          />
          <div className="flex gap-2 mt-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => copyToClipboard(valorDestino, simboloDestino, valorOrigen, simboloOrigen, "field2")}
            disabled={!valorOrigen || valorOrigen === "0" || !valorDestino || valorDestino === "0"}
            className="text-muted-foreground hover:text-primary"
            title="Copiar resultado"
          >
            <Copy className={copiedField === "field2" ? "h-4 w-4 text-primary" : "h-4 w-4"} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => shareToWhatsApp(valorDestino, simboloDestino, valorOrigen, simboloOrigen)}
            disabled={!valorOrigen || valorOrigen === "0" || !valorDestino || valorDestino === "0"}
            className="text-muted-foreground hover:text-primary"
            title="Compartir por WhatsApp"
          >
            <Share className="h-4 w-4" />
          </Button>
        </div>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-2 bg-primary/10 px-3 py-2 rounded-md">
          <span className="flex items-center text-xs text-muted-foreground">
            <Banknote className="inline h-4 w-4 mr-1 text-primary" />
            Cotización: <span className="ml-1 font-medium text-foreground">{cotizacion.toFixed(2)}</span>
          </span>
          <span className="flex items-center text-xs text-muted-foreground">
            <Clock className="inline h-4 w-4 mr-1 text-primary" />
            Actualizado: <span className="ml-1">{formatDate(fecha)}</span>
          </span>
          {fuente && (
            <span className="flex items-center text-xs text-muted-foreground/70">
              Fuente: {fuente}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  )
} 