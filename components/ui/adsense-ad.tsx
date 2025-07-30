"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";

interface AdSenseAdProps {
  adSlot: string;
  adFormat?: "auto" | "fluid" | "rectangle" | "banner";
  className?: string;
  style?: React.CSSProperties;
}

export function AdSenseAd({
  adSlot,
  adFormat = "auto",
  className,
  style,
}: AdSenseAdProps) {
  useEffect(() => {
    try {
      // @ts-ignore - AdSense global
      if (typeof window !== "undefined" && window.adsbygoogle) {
        // @ts-ignore - AdSense global
        window.adsbygoogle = window.adsbygoogle || [];
        // @ts-ignore - AdSense global
        window.adsbygoogle.push({});
      }
    } catch (error) {
      console.warn("AdSense error:", error);
    }
  }, [adSlot]);

  return (
    <div className={cn("ad-container my-8", className)} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1027418154196814"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
}

// Componentes predefinidos para diferentes tipos de anuncios
export function AdSenseBanner() {
  return (
    <AdSenseAd
      adSlot="1234567890" // Reemplazar con tu ad slot real
      adFormat="banner"
      className="my-4"
    />
  );
}

export function AdSenseRectangle() {
  return (
    <AdSenseAd
      adSlot="0987654321" // Reemplazar con tu ad slot real
      adFormat="rectangle"
      className="my-6"
    />
  );
}

export function AdSenseFluid() {
  return (
    <AdSenseAd
      adSlot="1122334455" // Reemplazar con tu ad slot real
      adFormat="fluid"
      className="my-8"
    />
  );
}
