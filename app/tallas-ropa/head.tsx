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
                "name": "¿Cómo convierto mi talla de ropa de US a EU?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Selecciona tu talla en el sistema US y el conversor te mostrará la equivalencia en EU y UK."
                }
              },
              {
                "@type": "Question",
                "name": "¿Las talles de hombre y mujer son iguales?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, las tallas varían según el género y la prenda. Consulta siempre la guía específica."
                }
              },
              {
                "@type": "Question",
                "name": "¿Sirve para todas las marcas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, incluye Zara, H&M, Gap, Old Navy, ASOS y más."
                }
              },
              {
                "@type": "Question",
                "name": "¿El conversor es gratuito?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, puedes usarlo sin límites y sin registrarte."
                }
              },
              {
                "@type": "Question",
                "name": "¿Qué hago si estoy entre dos tallas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Se recomienda elegir la talla más grande o consultar la política de cambios de la tienda."
                }
              }
            ]
          }),
        }}
      />
    </>
  );
} 