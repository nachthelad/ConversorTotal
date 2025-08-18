"use client";

import { useState } from "react";
import { Footprints } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Copy, Share, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Tabla base provista (CM, AR, UK, EU, US) - Hombres
const sizeTableMen = [
  { CM: "23", AR: "35", UK: "3.5", EU: "36", US: "4" },
  { CM: "23.5", AR: "35.5", UK: "4", EU: "37", US: "4.5" },
  { CM: "23.5", AR: "36", UK: "4.5", EU: "37.5", US: "5" },
  { CM: "24", AR: "36.5", UK: "5", EU: "38", US: "5.5" },
  { CM: "24", AR: "37", UK: "5.5", EU: "38.5", US: "6" },
  { CM: "24.5", AR: "38", UK: "6", EU: "39", US: "6.5" },
  { CM: "25", AR: "39", UK: "6", EU: "40", US: "7" },
  { CM: "25.5", AR: "39.5", UK: "6.5", EU: "40.5", US: "7.5" },
  { CM: "26", AR: "40", UK: "7", EU: "41", US: "8" },
  { CM: "26.5", AR: "41", UK: "7.5", EU: "42", US: "8.5" },
  { CM: "27", AR: "41.5", UK: "8", EU: "42.5", US: "9" },
  { CM: "27.5", AR: "42", UK: "8.5", EU: "43", US: "9.5" },
  { CM: "28", AR: "43", UK: "9", EU: "44", US: "10" },
  { CM: "28.5", AR: "43.5", UK: "9.5", EU: "44.5", US: "10.5" },
  { CM: "29", AR: "44", UK: "10", EU: "45", US: "11" },
  { CM: "29.5", AR: "44.5", UK: "10.5", EU: "45.5", US: "11.5" },
  { CM: "30", AR: "45", UK: "11", EU: "46", US: "12" },
  { CM: "30.5", AR: "45.5", UK: "11.5", EU: "46.5", US: "12.5" },
  { CM: "31", AR: "46", UK: "12", EU: "47", US: "13" },
];

// Tabla base provista (CM, AR, UK, EU, US) - Mujeres
const sizeTableWomen = [
  { CM: "22", AR: "35", UK: "2.5", EU: "35.5", US: "5" },
  { CM: "22.5", AR: "35.5", UK: "3", EU: "36", US: "5.5" },
  { CM: "23", AR: "36", UK: "3.5", EU: "36.5", US: "6" },
  { CM: "23.5", AR: "36.5", UK: "4", EU: "37", US: "6.5" },
  { CM: "24", AR: "37", UK: "4.5", EU: "37.5", US: "7" },
  { CM: "24.5", AR: "37.5", UK: "5", EU: "38", US: "7.5" },
  { CM: "25", AR: "38", UK: "5.5", EU: "38.5", US: "8" },
  { CM: "25.5", AR: "38.5", UK: "6", EU: "39", US: "8.5" },
  { CM: "26", AR: "39", UK: "6.5", EU: "39.5", US: "9" },
  { CM: "26.5", AR: "39.5", UK: "7", EU: "40", US: "9.5" },
  { CM: "27", AR: "40", UK: "7.5", EU: "40.5", US: "10" },
];

export function ShoeSizeConverter() {
  const [gender, setGender] = useState<"men" | "women">("men");
  const [selectedIndex, setSelectedIndex] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<
    "US" | "EU" | "UK" | "AR" | "CM"
  >("US");
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const { toast } = useToast();

  const getEquivalentSizes = () => {
    if (selectedIndex === "") return { US: "", EU: "", UK: "", AR: "", CM: "" };
    const index = Number(selectedIndex);
    const table = gender === "men" ? sizeTableMen : sizeTableWomen;
    const row = table[index];
    if (!row) return { US: "", EU: "", UK: "", AR: "", CM: "" };
    return { US: row.US, EU: row.EU, UK: row.UK, AR: row.AR, CM: row.CM };
  };

  const equivalentSizes = getEquivalentSizes();

  const copyToClipboard = async (region: string) => {
    const sizes = getEquivalentSizes();
    const message = `🔄 Conversión de Talles de Zapatillas (${
      gender === "men" ? "Hombre" : "Mujer"
    }):\nUS: ${sizes.US} | EU: ${sizes.EU} | UK: ${sizes.UK} | AR: ${
      sizes.AR
    } | CM: ${sizes.CM} cm\n\n✨ Convertido con ConversorTotal`;

    try {
      await navigator.clipboard.writeText(message);
      setCopiedField(region);
      toast({
        description: "Copiado al portapapeles",
      });
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      toast({
        description: "Error al copiar al portapapeles",
        variant: "destructive",
      });
    }
  };

  const shareToWhatsApp = () => {
    const sizes = getEquivalentSizes();
    const message = `Talles de Zapatillas (${
      gender === "men" ? "Hombre" : "Mujer"
    }): US: ${sizes.US} | EU: ${sizes.EU} | UK: ${sizes.UK} | AR: ${
      sizes.AR
    } | CM: ${sizes.CM} cm`;
    const whatsappMessage = `🔄 Conversión de Talles de Zapatillas:\n${message}\n\n✨ Convertido con ConversorTotal`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

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
            <Select
              value={gender}
              onValueChange={(value: "men" | "women") => setGender(value)}
            >
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
            <Select
              value={selectedRegion}
              onValueChange={(value: "US" | "EU" | "UK" | "AR" | "CM") =>
                setSelectedRegion(value)
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="US">Estados Unidos</SelectItem>
                <SelectItem value="EU">Europa</SelectItem>
                <SelectItem value="UK">Reino Unido</SelectItem>
                <SelectItem value="AR">Argentina (AR)</SelectItem>
                <SelectItem value="CM">Centímetros (CM)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Talla</label>
          <Select value={selectedIndex} onValueChange={setSelectedIndex}>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona una talla" />
            </SelectTrigger>
            <SelectContent>
              {(gender === "men" ? sizeTableMen : sizeTableWomen).map(
                (row, i) => {
                  const label =
                    selectedRegion === "CM"
                      ? `${row.CM} cm`
                      : (row as any)[selectedRegion];
                  return (
                    <SelectItem
                      key={`${selectedRegion}-${i}`}
                      value={String(i)}
                    >
                      {label}
                    </SelectItem>
                  );
                }
              )}
            </SelectContent>
          </Select>
        </div>

        {selectedIndex && (
          <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
            <h4 className="font-medium">Equivalencias:</h4>
            <div className="grid grid-cols-5 gap-4 text-center">
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
              <div>
                <p className="text-sm text-muted-foreground">AR</p>
                <p className="font-semibold">{equivalentSizes.AR}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">CM</p>
                <p className="font-semibold">{equivalentSizes.CM} cm</p>
              </div>
            </div>
            <div className="flex space-x-2 justify-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard("all")}
                className="flex items-center space-x-1"
              >
                {copiedField === "all" ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                <span>Copiar</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={shareToWhatsApp}
                className="flex items-center space-x-1"
              >
                <Share className="h-4 w-4" />
                <span>Compartir</span>
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
