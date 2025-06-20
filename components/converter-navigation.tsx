"use client"

import { Button } from "@/components/ui/button"
import { ChevronUp } from "lucide-react"
import { useEffect, useState } from "react"

const converters = [
  { id: "temperatura", name: "Temperatura", icon: "🌡️" },
  { id: "distancia", name: "Distancia", icon: "📏" },
  { id: "volumen", name: "Volumen", icon: "💧" },
  { id: "tiempo", name: "Tiempo", icon: "⏰" },
  { id: "peso", name: "Peso", icon: "⚖️" },
  { id: "area", name: "Área", icon: "📐" },
  { id: "velocidad", name: "Velocidad", icon: "🏃" },
  { id: "presion", name: "Presión", icon: "🔧" },
  { id: "energia", name: "Energía", icon: "⚡" },
  { id: "potencia", name: "Potencia", icon: "🔋" },
  { id: "tallas-ropa", name: "Tallas Ropa", icon: "👕" },
  { id: "tallas-zapatos", name: "Tallas Zapatillas", icon: "👟" },
  { id: "combustible", name: "Combustible", icon: "⛽" },
  { id: "cocina", name: "Cocina", icon: "👨‍🍳" },
]

export function ConverterNavigation() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToConverter = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* Navigation Menu */}
      <div className="bg-muted/30 rounded-lg p-4 mb-8">
        <h3 className="text-lg font-semibold mb-4 text-center">Ir a Conversor:</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
          {converters.map((converter) => (
            <Button
              key={converter.id}
              variant="ghost"
              size="sm"
              onClick={() => scrollToConverter(converter.id)}
              className="flex flex-col items-center space-y-1 h-auto py-2 px-2 text-xs hover:bg-primary/10"
            >
              <span className="text-lg">{converter.icon}</span>
              <span className="text-center leading-tight">{converter.name}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg"
          title="Volver arriba"
        >
          <ChevronUp className="h-4 w-4" />
        </Button>
      )}
    </>
  )
}
