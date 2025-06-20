"use client"

import { useEffect } from "react"

export function AdSenseVerification() {
  useEffect(() => {
    // Verificar que AdSense se cargue correctamente
    const checkAdSense = () => {
      if (typeof window !== "undefined") {
        // @ts-ignore
        if (window.adsbygoogle) {
          console.log("✅ AdSense cargado correctamente")
          // @ts-ignore
          console.log("AdSense queue length:", window.adsbygoogle.length)
        } else {
          console.log("❌ AdSense no detectado")
        }
      }
    }

    // Verificar inmediatamente
    checkAdSense()

    // Verificar después de 3 segundos
    const timer = setTimeout(checkAdSense, 3000)

    return () => clearTimeout(timer)
  }, [])

  return null // Este componente no renderiza nada visible
}
