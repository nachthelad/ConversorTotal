"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { DollarSign, Euro } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Copy, Share, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface QuickConverterProps {
  title: string;
  icon: React.ReactNode;
  fromCurrency: string;
  toCurrency: string;
  rate: number;
}

function QuickConverter({
  title,
  icon,
  fromCurrency,
  toCurrency,
  rate,
}: QuickConverterProps) {
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const { toast } = useToast();

  const handleFromAmountChange = (value: string) => {
    setFromAmount(value);
    if (value === "") {
      setToAmount("");
      return;
    }
    const numValue = Number.parseFloat(value);
    if (!isNaN(numValue) && numValue >= 0) {
      setToAmount((numValue * rate).toFixed(2));
    }
  };

  const copyToClipboard = async () => {
    if (!fromAmount || fromAmount === "0" || !toAmount || toAmount === "0")
      return;

    const message = `🔄 ${title}:\n${fromAmount} ${fromCurrency} = ${toAmount} ${toCurrency}\nCotización: ${rate.toFixed(
      2
    )}\n\n✨ Convertido con ConversorTotal`;

    try {
      await navigator.clipboard.writeText(message);
      setCopiedField("copy");
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
    if (!fromAmount || fromAmount === "0" || !toAmount || toAmount === "0")
      return;

    const message = `${fromAmount} ${fromCurrency} = ${toAmount} ${toCurrency}`;
    const whatsappMessage = `🔄 ${title}:\n${message}\nCotización: ${rate.toFixed(
      2
    )}\n\n✨ Convertido con ConversorTotal`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between text-base">
          <div className="flex items-center space-x-2">
            {icon}
            <span className="text-sm">{title}</span>
          </div>
          <div className="text-sm text-muted-foreground">{rate}</div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex space-x-2">
            <Input
              type="number"
              value={fromAmount}
              onChange={(e) => handleFromAmountChange(e.target.value)}
              placeholder={`${fromCurrency}`}
              className="flex-1 text-sm"
              min="0"
              step="0.01"
            />
            <div className="flex items-center px-3 bg-muted rounded-md text-sm text-muted-foreground min-w-[80px] justify-center">
              {toAmount || "0.00"} {toCurrency}
            </div>
          </div>
        </div>

        {fromAmount && toAmount && (
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={copyToClipboard}
              className="flex items-center space-x-1 flex-1"
            >
              {copiedField === "copy" ? (
                <Check className="h-3 w-3" />
              ) : (
                <Copy className="h-3 w-3" />
              )}
              <span className="text-xs">Copiar</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={shareToWhatsApp}
              className="flex items-center space-x-1 flex-1"
            >
              <Share className="h-3 w-3" />
              <span className="text-xs">Compartir</span>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

interface ExchangeRate {
  moneda: string;
  casa: string;
  nombre: string;
  compra: number;
  venta: number;
  fechaActualizacion: string;
}

export function QuickCurrencyConverters() {
  const [exchangeRates, setExchangeRates] = useState<ExchangeRate[]>([]);
  const [eurUsdRate, setEurUsdRate] = useState<number>(1.08);
  const [loading, setLoading] = useState(true);

  // Datos de fallback
  const fallbackRates: ExchangeRate[] = [
    {
      moneda: "USD",
      casa: "blue",
      nombre: "Dólar Blue",
      compra: 1020.0,
      venta: 1040.0,
      fechaActualizacion: new Date().toISOString(),
    },
    {
      moneda: "USD",
      casa: "cripto",
      nombre: "Dólar Cripto",
      compra: 1030.0,
      venta: 1050.0,
      fechaActualizacion: new Date().toISOString(),
    },
    {
      moneda: "EUR",
      casa: "",
      nombre: "Euro",
      compra: 1100.0,
      venta: 1120.0,
      fechaActualizacion: new Date().toISOString(),
    },
  ];

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch("/api/cotizaciones", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) throw new Error("Error fetching rates");
        const result = await response.json();
        const rates: ExchangeRate[] = result.data;
        const eurUsdRateApi = result.eurUsdRate;

        // Buscar los rates que necesitas
        const blue =
          rates.find((r) => r.casa === "blue" && r.moneda === "USD") ||
          fallbackRates[0];
        const cripto =
          rates.find((r) => r.casa === "cripto" && r.moneda === "USD") ||
          fallbackRates[1];
        const euro = rates.find((r) => r.moneda === "EUR") || fallbackRates[2];
        setExchangeRates([blue, cripto, euro]);

        setEurUsdRate(typeof eurUsdRateApi === "number" ? eurUsdRateApi : 1.08);
      } catch {
        setExchangeRates(fallbackRates);
        setEurUsdRate(1.08);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader className="pb-3">
              <div className="h-4 bg-muted rounded w-3/4"></div>
            </CardHeader>
            <CardContent>
              <div className="h-8 bg-muted rounded mb-2"></div>
              <div className="h-6 bg-muted rounded"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <QuickConverter
        title="Blue a Pesos"
        icon={<DollarSign className="h-4 w-4 text-green-600" />}
        fromCurrency="USD"
        toCurrency="ARS"
        rate={Number(exchangeRates[0]?.venta || 1040)}
      />
      <QuickConverter
        title="Cripto a Pesos"
        icon={<DollarSign className="h-4 w-4 text-orange-600" />}
        fromCurrency="USD"
        toCurrency="ARS"
        rate={Number(exchangeRates[1]?.venta || 1050)}
      />
      <QuickConverter
        title="Euro a Pesos"
        icon={<Euro className="h-4 w-4 text-blue-600" />}
        fromCurrency="EUR"
        toCurrency="ARS"
        rate={Number(exchangeRates[2]?.venta.toFixed(2) || 1120)}
      />
      <QuickConverter
        title="Euro a Dólar"
        icon={
          <div className="flex items-center">
            <Euro className="h-3 w-3 text-blue-600" />
            <span className="mx-1 text-xs">→</span>
            <DollarSign className="h-3 w-3 text-green-600" />
          </div>
        }
        fromCurrency="EUR"
        toCurrency="USD"
        rate={Number(eurUsdRate)}
      />
    </div>
  );
}
