"use client"

import { useState } from "react"
import { Footprints } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Copy, Share, Check } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const shoeSizes = {
  men: {
    US: ["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
    EU: ["39", "39.5", "40", "40.5", "41", "41.5", "42", "42.5", "43", "43.5", "44", "44.5", "45"],
    UK: ["5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5"],
  },
  women: {
    US: ["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11"],
    EU: ["35", "35.5", "36", "36.5", "37", "37.5", "38", "38.5", "39", "39.5", "40", "40.5", "41"],
    UK: ["2.5", "3", "3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5"],
  },
}

export function ShoeSizeConverter() {
  const [gender, setGender] = useState<"men" | "women">("men")
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedRegion, setSelectedRegion] = useState<"US" | "EU" | "UK">("US")
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const { toast } = useToast()

  const getEquivalentSizes = () => {
    if (!selectedSize) return { US: "", EU: "", UK: "" }

    const sizes = shoeSizes[gender]
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
    const message = `🔄 Conversión de Talles de Zapatillas (${gender === "men" ? "Hombre" : "Mujer"}):\nUS: ${sizes.US} | EU: ${sizes.EU} | UK: ${sizes.UK}\n\n✨ Convertido con ConversorTotal`

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
    const message = `Talles de Zapatillas (${gender === "men" ? "Hombre" : "Mujer"}): US: ${sizes.US} | EU: ${sizes.EU} | UK: ${sizes.UK}`
    const whatsappMessage = `🔄 Conversión de Talles de Zapatillas:\n${message}\n\n✨ Convertido con ConversorTotal`
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center space-x-2 text-lg">
          <Footprints className="h-5 w-5 text-emerald-500" />
          <span>Talles de Zapatillas</span>
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
              {shoeSizes[gender][selectedRegion].map((size) => (
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
