import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

interface UseShareConversionProps {
  nombreOrigen: string
  nombreDestino: string
  simboloOrigen: string
  simboloDestino: string
  cotizacion: number
}

export function useShareConversion({ nombreOrigen, nombreDestino, simboloOrigen, simboloDestino, cotizacion }: UseShareConversionProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const { toast } = useToast()

  const copyToClipboard = async (
    fromValue: string,
    fromUnit: string,
    toValue: string,
    toUnit: string,
    field: string,
  ) => {
    if (!fromValue || fromValue === "0" || !toValue || toValue === "0") return
    const title = `${nombreOrigen} → ${nombreDestino}`
    const message = `🔄 Conversión de ${title}:\n${fromValue} ${fromUnit} es igual a ${toValue} ${toUnit}\nCotización: 1 ${simboloOrigen} = ${cotizacion} ${simboloDestino}\n\n✨ Convertido con ConversorTotal`
    try {
      await navigator.clipboard.writeText(message)
      setCopiedField(field)
      toast({ description: "Copiado al portapapeles" })
      setTimeout(() => setCopiedField(null), 2000)
    } catch (err) {
      toast({ description: "Error al copiar al portapapeles", variant: "destructive" })
    }
  }

  const shareToWhatsApp = (fromValue: string, fromUnit: string, toValue: string, toUnit: string) => {
    if (!fromValue || fromValue === "0" || !toValue || toValue === "0") return
    const title = `${nombreOrigen} → ${nombreDestino}`
    const message = `${fromValue} ${fromUnit} es igual a ${toValue} ${toUnit}`
    const whatsappMessage = `🔄 Conversión de ${title}:\n${message}\nCotización: 1 ${simboloOrigen} = ${cotizacion} ${simboloDestino}\n\n✨ Convertido con ConversorTotal`
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return { copyToClipboard, shareToWhatsApp, copiedField }
} 