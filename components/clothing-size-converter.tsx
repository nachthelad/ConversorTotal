"use client"

import { useState } from "react"
import { Shirt } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Copy, Share, Check } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const clothingSizes = {
  men: {
    US: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    EU: ["44", "46", "48", "50", "52", "54", "56"],
    UK: ["32", "34", "36", "38", "40", "42", "44"],
  },
  women: {
    US: ["XS", "S", "M", "L", "XL", "XXL"],
    EU: ["32", "34", "36", "38", "40", "42"],
    UK: ["6", "8", "10", "12", "14", "16"],
  },
}

export function ClothingSizeConverter() {
  const [gender, setGender] = useState<"men" | "women">("men")
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedRegion, setSelectedRegion] = useState<"US" | "EU" | "UK">("US")
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const { toast } = useToast()

  const getEquivalentSizes = () => {
    if (!selectedSize) return { US: "", EU: "", UK: "" }

    const sizes = clothingSizes[gender]
    const index = sizes[selectedRegion].indexOf(selectedSize)

    if (index === -1) return { US: "", EU: "", UK: "" }

    return {
      US: sizes.US[index] || "",
      EU: sizes.EU[index] || "",
      UK: sizes.UK[index] || "",
    }
  }

  const equivalentSizes = getEquivalentSizes()

  const copyToClipboard = async (region: string) => {
    const sizes = getEquivalentSizes()
    const message = `🔄 Conversión de Tallas de Ropa (${gender === "men" ? "Hombre" : "Mujer"}):\nUS: ${sizes.US} | EU: ${sizes.EU} | UK: ${sizes.UK}\n\n✨ Convertido con ConversorTotal`

    try {
      await navigator.clipboard.writeText(message)
      setCopiedField(region)
      toast({
        description: "Copiado al portapapeles",
      })
      setTimeout(() => setCopiedField(null), 2000)
    } catch (err) {
      toast({
        description: "Error al copiar al portapapeles",
        variant: "destructive",
      })
    }
  }

  const shareToWhatsApp = () => {
    const sizes = getEquivalentSizes()
    const message = `Tallas de Ropa (${gender === "men" ? "Hombre" : "Mujer"}): US: ${sizes.US} | EU: ${sizes.EU} | UK: ${sizes.UK}`
    const whatsappMessage = `🔄 Conversión de Tallas:\n${message}\n\n✨ Convertido con ConversorTotal`
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center space-x-2 text-lg">
          <Shirt className="h-5 w-5 text-teal-500" />
          <span>Tallas de Ropa</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Género</label>
            <Select value={gender} onValueChange={(value: "men" | "women") => setGender(value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="men">Hombre</SelectItem>
                <SelectItem value="women">Mujer</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Región</label>
            <Select value={selectedRegion} onValueChange={(value: "US" | "EU" | "UK") => setSelectedRegion(value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="US">Estados Unidos</SelectItem>
                <SelectItem value="EU">Europa</SelectItem>
                <SelectItem value="UK">Reino Unido</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Talla</label>
          <Select value={selectedSize} onValueChange={setSelectedSize}>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona una talla" />
            </SelectTrigger>
            <SelectContent>
              {clothingSizes[gender][selectedRegion].map((size) => (
                <SelectItem key={size} value={size}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {selectedSize && (
          <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
            <h4 className="font-medium">Equivalencias:</h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-sm text-muted-foreground">US</p>
                <p className="font-semibold">{equivalentSizes.US}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">EU</p>
                <p className="font-semibold">{equivalentSizes.EU}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">UK</p>
                <p className="font-semibold">{equivalentSizes.UK}</p>
              </div>
            </div>
            <div className="flex space-x-2 justify-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard("all")}
                className="flex items-center space-x-1"
              >
                {copiedField === "all" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                <span>Copiar</span>
              </Button>
              <Button variant="outline" size="sm" onClick={shareToWhatsApp} className="flex items-center space-x-1">
                <Share className="h-4 w-4" />
                <span>Compartir</span>
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
