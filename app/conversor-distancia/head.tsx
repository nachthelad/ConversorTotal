export default function Head() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Cómo convierto kilómetros a millas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ingresa el valor en kilómetros, selecciona 'millas' como unidad de destino y obtendrás el resultado automáticamente."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cuántos metros hay en un kilómetro?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Un kilómetro equivale a 1.000 metros."
                }
              },
              {
                "@type": "Question",
                "name": "¿Puedo convertir millas a metros?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, selecciona 'millas' como unidad de origen y 'metros' como destino para obtener la conversión."
                }
              },
              {
                "@type": "Question",
                "name": "¿El conversor de distancia es gratuito?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, puedes usarlo sin límites y sin registrarte."
                }
              },
              {
                "@type": "Question",
                "name": "¿Sirve para convertir distancias para deportes o viajes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, es ideal para calcular distancias en carreras, rutas de viaje, navegación y más."
                }
              }
            ]
          }),
        }}
      />
    </>
  );
} 