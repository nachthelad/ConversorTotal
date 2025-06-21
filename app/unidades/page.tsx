import { ConversionTest } from "@/components/conversion-test"

export default function UnidadesPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Unidades Page</h1>
      <p>This is the unidades page content.</p>

      {/* Test de conversiones - temporal */}
      <div className="mt-8">
        <ConversionTest />
      </div>
    </div>
  )
}
