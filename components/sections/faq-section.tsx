export function FAQSection() {
  return (
    <div className="max-w-3xl mx-auto mt-12">
      <h2 className="text-2xl font-bold mb-4">Preguntas Frecuentes</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">
            ¿Cómo convierto metros a centímetros?
          </h3>
          <p>
            Solo ingresa el valor en metros, selecciona "centímetros" como
            unidad de destino y obtendrás el resultado al instante.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">
            ¿Puedo convertir monedas como dólar a peso argentino?
          </h3>
          <p>
            Sí, nuestro conversor de monedas te permite convertir entre dólar,
            euro, peso argentino y muchas otras monedas con cotizaciones
            actualizadas.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">¿El uso del conversor es gratuito?</h3>
          <p>
            Sí, todas las herramientas de ConversorTotal son 100% gratuitas y no
            requieren registro.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">
            ¿Puedo usar el conversor desde el celular?
          </h3>
          <p>
            Sí, el sitio está optimizado para dispositivos móviles y
            computadoras.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">
            ¿Qué tipos de unidades puedo convertir?
          </h3>
          <p>
            Puedes convertir temperatura, peso, distancia, área, volumen,
            velocidad, talles de ropa y zapatillas, almacenamiento digital y
            monedas.
          </p>
        </div>
      </div>
    </div>
  );
}
