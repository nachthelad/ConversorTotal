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
                "name": "¿Cómo convierto de MB a GB?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ingresa el valor en MB, selecciona 'GB' como unidad de destino y obtendrás el resultado automáticamente."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cuántos bytes hay en un kilobyte?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Un kilobyte (KB) equivale a 1.024 bytes en informática."
                }
              },
              {
                "@type": "Question",
                "name": "¿Puedo convertir entre cualquier unidad de almacenamiento digital?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, puedes convertir entre bytes, KB, MB, GB, TB y más usando el conversor flexible."
                }
              },
              {
                "@type": "Question",
                "name": "¿El conversor de almacenamiento es gratuito?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, puedes usarlo sin límites y sin registrarte."
                }
              },
              {
                "@type": "Question",
                "name": "¿Sirve para calcular espacio en la nube o discos externos?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, es ideal para planificar espacio en la nube, discos externos, transferencias de archivos y más."
                }
              }
            ]
          }),
        }}
      />
    </>
  );
} 