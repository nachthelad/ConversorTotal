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
                "name": "¿Cómo convierto kilogramos a libras?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ingresa el valor en kilogramos, selecciona 'libras' como unidad de destino y obtendrás el resultado al instante."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cuántos gramos hay en un kilogramo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Un kilogramo equivale a 1.000 gramos."
                }
              },
              {
                "@type": "Question",
                "name": "¿Puedo convertir libras a gramos?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, selecciona 'libras' como unidad de origen y 'gramos' como destino para obtener la conversión."
                }
              },
              {
                "@type": "Question",
                "name": "¿El conversor de peso es gratuito?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, puedes usarlo sin límites y sin registrarte."
                }
              },
              {
                "@type": "Question",
                "name": "¿Sirve para recetas y dietas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, es ideal para calcular ingredientes en recetas y para seguimiento de peso en dietas."
                }
              }
            ]
          }),
        }}
      />
    </>
  );
} 