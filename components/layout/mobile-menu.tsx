"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Menu,
  Sun,
  Moon,
  Ruler,
  DollarSign,
  Thermometer,
  Scale,
  Database,
  Shirt,
  Footprints,
} from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="h-10 w-10 sm:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72">
        <SheetHeader>
          <SheetTitle className="flex items-center space-x-2">
            <div className="w-6 h-6 relative">
              <Image
                src="/favicon-32x32.png"
                alt="ConversorTotal Logo"
                width={24}
                height={24}
                className="rounded"
              />
            </div>
            <span>ConversorTotal</span>
          </SheetTitle>
        </SheetHeader>
        <div className="mt-6 space-y-4">
          {/* Unidades Section */}
          <div className="space-y-2">
            <div className="px-3 py-1 text-xs text-muted-foreground font-semibold">
              Unidades
            </div>
            <Link
              href="/conversor-temperatura"
              onClick={() => setOpen(false)}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                pathname === "/conversor-temperatura"
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent"
              }`}
            >
              <Thermometer className="h-5 w-5" />
              <span>Temperatura</span>
            </Link>
            <Link
              href="/conversor-peso"
              onClick={() => setOpen(false)}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                pathname === "/conversor-peso"
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent"
              }`}
            >
              <Scale className="h-5 w-5" />
              <span>Peso</span>
            </Link>
            <Link
              href="/conversor-distancia"
              onClick={() => setOpen(false)}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                pathname === "/conversor-distancia"
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent"
              }`}
            >
              <Ruler className="h-5 w-5" />
              <span>Distancia</span>
            </Link>
            <Link
              href="/conversor-almacenamiento"
              onClick={() => setOpen(false)}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                pathname === "/conversor-almacenamiento"
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent"
              }`}
            >
              <Database className="h-5 w-5" />
              <span>Almacenamiento</span>
            </Link>
          </div>

          {/* Tallas Section */}
          <div className="space-y-2">
            <div className="px-3 py-1 text-xs text-muted-foreground font-semibold">
              Tallas
            </div>
            <Link
              href="/tallas-ropa"
              onClick={() => setOpen(false)}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                pathname === "/tallas-ropa"
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent"
              }`}
            >
              <Shirt className="h-5 w-5" />
              <span>Talles de Ropa</span>
            </Link>
            <Link
              href="/tallas-zapatillas"
              onClick={() => setOpen(false)}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                pathname === "/tallas-zapatillas"
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent"
              }`}
            >
              <Footprints className="h-5 w-5" />
              <span>Talles de Zapatillas</span>
            </Link>
          </div>

          {/* Monedas Section */}
          <div className="space-y-2">
            <div className="px-3 py-1 text-xs text-muted-foreground font-semibold">
              Monedas
            </div>
            <Link
              href="/monedas"
              onClick={() => setOpen(false)}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                pathname === "/monedas"
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent"
              }`}
            >
              <DollarSign className="h-5 w-5" />
              <span>Conversor de Monedas</span>
            </Link>
          </div>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
              setOpen(false);
            }}
            className="w-full justify-start space-x-3 p-3 h-auto"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="ml-2">
              {theme === "dark" ? "Modo Claro" : "Modo Oscuro"}
            </span>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
