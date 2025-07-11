import Link from "next/link"
import { Github, Linkedin, ExternalLink, Mail, FileText } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 relative">
                <Image
                  src="/favicon-32x32.png"
                  alt="ConversorTotal Logo"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
              </div>
              <span className="font-bold text-lg">ConversorTotal</span>
            </div>
            <p className="text-sm text-muted-foreground">
              La herramienta más completa para convertir unidades, monedas y tallas. Rápido, preciso y siempre
              actualizado.
            </p>
          </div>

          {/* Converters */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider">Conversores</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/conversor-temperatura"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Temperatura
                </Link>
              </li>
              <li>
                <Link href="/conversor-peso" className="text-muted-foreground hover:text-foreground transition-colors">
                  Peso
                </Link>
              </li>
              <li>
                <Link
                  href="/conversor-distancia"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Distancia
                </Link>
              </li>
              <li>
                <Link href="/monedas" className="text-muted-foreground hover:text-foreground transition-colors">
                  Monedas
                </Link>
              </li>
              <li>
                <Link
                  href="/conversor-almacenamiento"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Almacenamiento Digital
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/terminos-y-condiciones"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-1"
                >
                  <FileText className="h-3 w-3" />
                  <span>Términos y Condiciones</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-1"
                >
                  <Mail className="h-3 w-3" />
                  <span>Contacto</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider">Síguenos</h3>
            <div className="flex items-center space-x-3">
              <Link
                href="https://github.com/nachthelad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted/50 rounded-full"
                title="GitHub"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/ignacio-ventura/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted/50 rounded-full"
                title="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
            <div className="text-xs text-muted-foreground">
              <p>Powered by</p>
              <Link
                href="https://nachthelad.com.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:text-primary transition-colors flex items-center space-x-1 group"
              >
                <span>nachthelad</span>
                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2024 ConversorTotal. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
