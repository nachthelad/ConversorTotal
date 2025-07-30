"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cookie, X, Check, XCircle } from "lucide-react";
import Link from "next/link";

interface CookieConsent {
  analytics: boolean;
  advertising: boolean;
  necessary: boolean;
}

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Verificar si ya se ha dado consentimiento
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const consent: CookieConsent = {
      analytics: true,
      advertising: true,
      necessary: true,
    };
    localStorage.setItem("cookie-consent", JSON.stringify(consent));
    setShowBanner(false);

    // Habilitar Google Analytics y AdSense
    if (typeof window !== "undefined") {
      // Habilitar gtag
      window.gtag?.("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
      });
    }
  };

  const handleAcceptNecessary = () => {
    const consent: CookieConsent = {
      analytics: false,
      advertising: false,
      necessary: true,
    };
    localStorage.setItem("cookie-consent", JSON.stringify(consent));
    setShowBanner(false);

    // Solo habilitar cookies necesarias
    if (typeof window !== "undefined") {
      window.gtag?.("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
      });
    }
  };

  const handleRejectAll = () => {
    const consent: CookieConsent = {
      analytics: false,
      advertising: false,
      necessary: true,
    };
    localStorage.setItem("cookie-consent", JSON.stringify(consent));
    setShowBanner(false);

    // Denegar todas las cookies excepto las necesarias
    if (typeof window !== "undefined") {
      window.gtag?.("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
      });
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t">
      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Cookie className="h-6 w-6 text-primary" />
            </div>

            <div className="flex-1 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold">
                    Configuración de Cookies
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Utilizamos cookies para mejorar tu experiencia y mostrar
                    anuncios relevantes. Algunas cookies son necesarias para el
                    funcionamiento del sitio.
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowBanner(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {showDetails && (
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="font-medium">Cookies Necesarias:</span>
                    <span className="text-muted-foreground">
                      Siempre activas para el funcionamiento básico
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-blue-600" />
                    <span className="font-medium">Cookies de Análisis:</span>
                    <span className="text-muted-foreground">
                      Para mejorar el sitio web
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-orange-600" />
                    <span className="font-medium">
                      Cookies de Publicidad (Google AdSense):
                    </span>
                    <span className="text-muted-foreground">
                      Para mostrar anuncios relevantes
                    </span>
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-2">
                <Button onClick={handleAcceptAll} className="flex-1">
                  <Check className="h-4 w-4 mr-2" />
                  Aceptar Todas
                </Button>
                <Button
                  onClick={handleAcceptNecessary}
                  variant="outline"
                  className="flex-1"
                >
                  Solo Necesarias
                </Button>
                <Button
                  onClick={handleRejectAll}
                  variant="outline"
                  className="flex-1"
                >
                  <XCircle className="h-4 w-4 mr-2" />
                  Rechazar Todas
                </Button>
              </div>

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="hover:text-foreground underline"
                >
                  {showDetails ? "Ocultar detalles" : "Ver detalles"}
                </button>
                <Link
                  href="/politica-cookies"
                  className="hover:text-foreground underline"
                >
                  Política de Cookies
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
