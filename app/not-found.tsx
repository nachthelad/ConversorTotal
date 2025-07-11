"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center py-16">
      <Card className="max-w-md w-full shadow-lg">
        <CardHeader className="flex flex-col items-center gap-2">
          <AlertTriangle className="h-10 w-10 text-yellow-500" />
          <CardTitle className="text-2xl text-center">Página no encontrada</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-6">
          <p className="text-muted-foreground text-center">
            Lo sentimos, la página que buscas no existe o fue movida.
          </p>
          <Button asChild variant="default" size="lg">
            <Link href="/">Volver al inicio</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
} 