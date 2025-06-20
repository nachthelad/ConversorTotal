"use client"

import { Moon, Sun, Calculator, ChevronDown } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MobileMenu } from "./mobile-menu"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link href="/" className="flex items-center space-x-2">
            <Calculator className="h-6 w-6 text-primary" />
            <span className="font-semibold text-lg">ConversorTotal</span>
          </Link>

          {/* Desktop Navigation - Visible en pantallas grandes */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="sm:flex hidden items-center space-x-1 h-9 px-3">
                <span>Conversores</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem asChild>
                <Link
                  href="/unidades"
                  className={`w-full cursor-pointer ${pathname === "/unidades" ? "bg-accent" : ""}`}
                >
                  De Unidades
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/monedas" className={`w-full cursor-pointer ${pathname === "/monedas" ? "bg-accent" : ""}`}>
                  De Monedas
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center space-x-2">
          {/* Desktop Theme Toggle - Visible en pantallas grandes */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="sm:flex hidden h-10 w-10"
            title={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Cambiar tema</span>
          </Button>

          {/* Mobile Menu - Visible en 640px o menos */}
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
