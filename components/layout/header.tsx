"use client";

import {
  Moon,
  Sun,
  ChevronDown,
  Thermometer,
  Scale,
  Ruler,
  Shirt,
  Footprints,
  DollarSign,
  Database,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileMenu } from "./mobile-menu";
import Image from "next/image";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 relative">
                <Image
                  src="/favicon-32x32.png"
                  alt="ConversorTotal Logo"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
              </div>
              <span className="font-semibold text-lg">ConversorTotal</span>
            </Link>
          </div>
          <div className="w-10 h-10" />
        </div>
      </header>
    );
  }

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 relative">
              <Image
                src="/favicon-32x32.png"
                alt="ConversorTotal Logo"
                width={32}
                height={32}
                className="rounded-lg"
                priority
              />
            </div>
            <span className="font-semibold text-lg">ConversorTotal</span>
          </Link>

          {/* Desktop Navigation - Botones directos para conversores populares */}
          <div className="hidden lg:flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className={`h-8 px-3 ${
                pathname === "/conversor-temperatura"
                  ? "bg-primary text-primary-foreground"
                  : ""
              }`}
            >
              <Link href="/conversor-temperatura">
                <Thermometer className="h-4 w-4 mr-1" />
                Temperatura
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className={`h-8 px-3 ${
                pathname === "/conversor-peso"
                  ? "bg-primary text-primary-foreground"
                  : ""
              }`}
            >
              <Link href="/conversor-peso">
                <Scale className="h-4 w-4 mr-1" />
                Peso
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className={`h-8 px-3 ${
                pathname === "/conversor-distancia"
                  ? "bg-primary text-primary-foreground"
                  : ""
              }`}
            >
              <Link href="/conversor-distancia">
                <Ruler className="h-4 w-4 mr-1" />
                Distancia
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className={`h-8 px-3 ${
                pathname === "/monedas"
                  ? "bg-primary text-primary-foreground"
                  : ""
              }`}
            >
              <Link href="/monedas">
                <DollarSign className="h-4 w-4 mr-1" />
                Monedas
              </Link>
            </Button>
          </div>

          {/* Dropdown para todos los conversores - Hover enabled */}
          <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="sm:flex hidden items-center space-x-1 h-9 px-3"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <span>Más Conversores</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-64"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <div className="px-3 py-1 text-xs text-muted-foreground font-semibold">
                Unidades
              </div>
              <DropdownMenuItem asChild>
                <Link href="/conversor-temperatura">
                  <Thermometer className="h-4 w-4 mr-2" />
                  Temperatura
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/conversor-peso">
                  <Scale className="h-4 w-4 mr-2" />
                  Peso
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/conversor-distancia">
                  <Ruler className="h-4 w-4 mr-2" />
                  Distancia
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/conversor-almacenamiento">
                  <Database className="h-4 w-4 mr-2" />
                  Almacenamiento
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <div className="px-3 py-1 text-xs text-muted-foreground font-semibold">
                Tallas
              </div>
              <DropdownMenuItem asChild>
                <Link href="/tallas-ropa">
                  <Shirt className="h-4 w-4 mr-2" />
                  Talles de Ropa
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/tallas-zapatillas">
                  <Footprints className="h-4 w-4 mr-2" />
                  Talles de Zapatillas
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <div className="px-3 py-1 text-xs text-muted-foreground font-semibold">
                Monedas
              </div>
              <DropdownMenuItem asChild>
                <Link href="/monedas">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Conversor de Monedas
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
            title={
              theme === "dark"
                ? "Cambiar a modo claro"
                : "Cambiar a modo oscuro"
            }
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
  );
}
