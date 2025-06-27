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
                "name": "¿Cómo convierto Celsius a Fahrenheit?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ingresa el valor en Celsius, selecciona 'Fahrenheit' como unidad de destino y obtendrás el resultado al instante."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cuál es la fórmula para convertir Fahrenheit a Celsius?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "La fórmula es: °C = (°F - 32) × 5/9."
                }
              },
              {
                "@type": "Question",
                "name": "¿Puedo convertir Kelvin a Celsius?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, selecciona 'Kelvin' como unidad de origen y 'Celsius' como destino para obtener la conversión."
                }
              },
              {
                "@type": "Question",
                "name": "¿El conversor de temperatura es gratuito?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, puedes usarlo sin límites y sin registrarte."
                }
              },
              {
                "@type": "Question",
                "name": "¿Sirve para recetas y ciencia?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, es ideal para cocina, ciencia, clima y uso diario."
                }
              }
            ]
          }),
        }}
      />
    </>
  );
} 