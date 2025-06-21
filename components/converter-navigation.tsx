"use client"
import Link from "next/link"

const converters = [
  { id: "longitud", name: "Longitud", icon: "📏" },
  { id: "peso", name: "Peso", icon: "⚖️" },
  { id: "temperatura", name: "Temperatura", icon: "🌡️" },
  { id: "volumen", name: "Volumen", icon: "🥤" },
  { id: "area", name: "Área", icon: "📐" },
  { id: "velocidad", name: "Velocidad", icon: "🚗" },
  { id: "tiempo", name: "Tiempo", icon: "⏰" },
  { id: "tallas-ropa", name: "Tallas Ropa", icon: "👕" },
  { id: "tallas-zapatos", name: "Tallas Zapatos", icon: "👟" },
]

const ConverterNavigation = () => {
  return (
    <nav>
      <ul>
        {converters.map((converter) => (
          <li key={converter.id}>
            <Link href={`/converter/${converter.id}`}>
              <a>
                {converter.icon} {converter.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        nav {
          padding: 20px;
          background-color: #f0f0f0;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        li {
          margin-bottom: 5px;
        }

        a {
          display: block;
          padding: 10px 15px;
          background-color: #fff;
          border: 1px solid #ccc;
          border-radius: 5px;
          text-decoration: none;
          color: #333;
          transition: background-color 0.3s ease;
        }

        a:hover {
          background-color: #e0e0e0;
        }
      `}</style>
    </nav>
  )
}

export default ConverterNavigation
