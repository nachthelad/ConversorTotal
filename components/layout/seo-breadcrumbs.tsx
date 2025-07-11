import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import React from "react"

export interface BreadcrumbItem {
  label: string
  href: string
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  separator?: React.ReactNode
  homeIcon?: React.ReactNode
  homeLabel?: string
  renderCurrent?: (item: BreadcrumbItem) => React.ReactNode
  className?: string
}

export function Breadcrumbs({
  items,
  separator = <ChevronRight className="h-4 w-4" />,
  homeIcon = <Home className="h-4 w-4" />,
  homeLabel = "Inicio",
  renderCurrent,
  className = "mb-6",
}: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
        <li>
          <Link
            href="/"
            className="flex items-center hover:text-foreground transition-colors"
            aria-label={homeLabel}
            title={homeLabel}
          >
            {homeIcon}
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center space-x-2">
            {separator}
            {index === items.length - 1 ? (
              renderCurrent ? (
                renderCurrent(item)
              ) : (
                <span className="font-medium text-foreground">{item.label}</span>
              )
            ) : (
              <Link href={item.href} className="hover:text-foreground transition-colors">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

// Exporta también con el nombre anterior para compatibilidad
export { Breadcrumbs as SEOBreadcrumbs }
