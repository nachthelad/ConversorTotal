export interface Unit {
  id: string
  name: string
  symbol: string
  factor: number // Factor de conversión a la unidad base
}

export interface UnitCategory {
  id: string
  name: string
  baseUnit: string
  units: Unit[]
}

// Peso - Unidad base: gramos
export const weightUnits: UnitCategory = {
  id: "weight",
  name: "Peso",
  baseUnit: "gramos",
  units: [
    { id: "mg", name: "Miligramos", symbol: "mg", factor: 0.001 },
    { id: "g", name: "Gramos", symbol: "g", factor: 1 },
    { id: "kg", name: "Kilogramos", symbol: "kg", factor: 1000 },
    { id: "oz", name: "Onzas", symbol: "oz", factor: 28.3495 },
    { id: "lb", name: "Libras", symbol: "lb", factor: 453.592 },
    { id: "t", name: "Toneladas", symbol: "t", factor: 1000000 },
  ],
}

// Longitud - Unidad base: metros
export const lengthUnits: UnitCategory = {
  id: "length",
  name: "Longitud",
  baseUnit: "metros",
  units: [
    { id: "mm", name: "Milímetros", symbol: "mm", factor: 0.001 },
    { id: "cm", name: "Centímetros", symbol: "cm", factor: 0.01 },
    { id: "m", name: "Metros", symbol: "m", factor: 1 },
    { id: "km", name: "Kilómetros", symbol: "km", factor: 1000 },
    { id: "in", name: "Pulgadas", symbol: "in", factor: 0.0254 },
    { id: "ft", name: "Pies", symbol: "ft", factor: 0.3048 },
    { id: "yd", name: "Yardas", symbol: "yd", factor: 0.9144 },
    { id: "mi", name: "Millas", symbol: "mi", factor: 1609.34 },
  ],
}

// Volumen - Unidad base: litros
export const volumeUnits: UnitCategory = {
  id: "volume",
  name: "Volumen",
  baseUnit: "litros",
  units: [
    { id: "ml", name: "Mililitros", symbol: "ml", factor: 0.001 },
    { id: "l", name: "Litros", symbol: "L", factor: 1 },
    { id: "fl_oz", name: "Onzas fluidas", symbol: "fl oz", factor: 0.0295735 },
    { id: "cup", name: "Tazas", symbol: "cup", factor: 0.236588 },
    { id: "pt", name: "Pintas", symbol: "pt", factor: 0.473176 },
    { id: "qt", name: "Cuartos", symbol: "qt", factor: 0.946353 },
    { id: "gal", name: "Galones", symbol: "gal", factor: 3.78541 },
  ],
}

// Temperatura - Requiere conversiones especiales
export const temperatureUnits: UnitCategory = {
  id: "temperature",
  name: "Temperatura",
  baseUnit: "celsius",
  units: [
    { id: "c", name: "Celsius", symbol: "°C", factor: 1 },
    { id: "f", name: "Fahrenheit", symbol: "°F", factor: 1 },
    { id: "k", name: "Kelvin", symbol: "K", factor: 1 },
  ],
}

// Área - Unidad base: metros cuadrados
export const areaUnits: UnitCategory = {
  id: "area",
  name: "Área",
  baseUnit: "metros cuadrados",
  units: [
    { id: "mm2", name: "Milímetros cuadrados", symbol: "mm²", factor: 0.000001 },
    { id: "cm2", name: "Centímetros cuadrados", symbol: "cm²", factor: 0.0001 },
    { id: "m2", name: "Metros cuadrados", symbol: "m²", factor: 1 },
    { id: "km2", name: "Kilómetros cuadrados", symbol: "km²", factor: 1000000 },
    { id: "in2", name: "Pulgadas cuadradas", symbol: "in²", factor: 0.00064516 },
    { id: "ft2", name: "Pies cuadrados", symbol: "ft²", factor: 0.092903 },
    { id: "yd2", name: "Yardas cuadradas", symbol: "yd²", factor: 0.836127 },
    { id: "acre", name: "Acres", symbol: "acre", factor: 4046.86 },
    { id: "hectare", name: "Hectáreas", symbol: "ha", factor: 10000 },
  ],
}

// Velocidad - Unidad base: metros por segundo
export const speedUnits: UnitCategory = {
  id: "speed",
  name: "Velocidad",
  baseUnit: "metros por segundo",
  units: [
    { id: "ms", name: "Metros por segundo", symbol: "m/s", factor: 1 },
    { id: "kmh", name: "Kilómetros por hora", symbol: "km/h", factor: 0.277778 },
    { id: "mph", name: "Millas por hora", symbol: "mph", factor: 0.44704 },
    { id: "kn", name: "Nudos", symbol: "kn", factor: 0.514444 },
    { id: "fts", name: "Pies por segundo", symbol: "ft/s", factor: 0.3048 },
  ],
}

// Tiempo - Unidad base: segundos
export const timeUnits: UnitCategory = {
  id: "time",
  name: "Tiempo",
  baseUnit: "segundos",
  units: [
    { id: "ms", name: "Milisegundos", symbol: "ms", factor: 0.001 },
    { id: "s", name: "Segundos", symbol: "s", factor: 1 },
    { id: "min", name: "Minutos", symbol: "min", factor: 60 },
    { id: "h", name: "Horas", symbol: "h", factor: 3600 },
    { id: "d", name: "Días", symbol: "d", factor: 86400 },
    { id: "w", name: "Semanas", symbol: "sem", factor: 604800 },
    { id: "month", name: "Meses", symbol: "mes", factor: 2629746 },
    { id: "year", name: "Años", symbol: "año", factor: 31556952 },
  ],
}

// Presión - Unidad base: Pascal
export const pressureUnits: UnitCategory = {
  id: "pressure",
  name: "Presión",
  baseUnit: "pascal",
  units: [
    { id: "pa", name: "Pascal", symbol: "Pa", factor: 1 },
    { id: "kpa", name: "Kilopascal", symbol: "kPa", factor: 1000 },
    { id: "bar", name: "Bar", symbol: "bar", factor: 100000 },
    { id: "psi", name: "Libras por pulgada cuadrada", symbol: "PSI", factor: 6894.76 },
    { id: "atm", name: "Atmósferas", symbol: "atm", factor: 101325 },
    { id: "mmhg", name: "Milímetros de mercurio", symbol: "mmHg", factor: 133.322 },
    { id: "inhg", name: "Pulgadas de mercurio", symbol: "inHg", factor: 3386.39 },
  ],
}

// Energía - Unidad base: Joules
export const energyUnits: UnitCategory = {
  id: "energy",
  name: "Energía",
  baseUnit: "joules",
  units: [
    { id: "j", name: "Joules", symbol: "J", factor: 1 },
    { id: "kj", name: "Kilojoules", symbol: "kJ", factor: 1000 },
    { id: "cal", name: "Calorías", symbol: "cal", factor: 4.184 },
    { id: "kcal", name: "Kilocalorías", symbol: "kcal", factor: 4184 },
    { id: "wh", name: "Vatios-hora", symbol: "Wh", factor: 3600 },
    { id: "kwh", name: "Kilovatios-hora", symbol: "kWh", factor: 3600000 },
    { id: "btu", name: "BTU", symbol: "BTU", factor: 1055.06 },
  ],
}

// Potencia - Unidad base: Watts
export const powerUnits: UnitCategory = {
  id: "power",
  name: "Potencia",
  baseUnit: "watts",
  units: [
    { id: "w", name: "Watts", symbol: "W", factor: 1 },
    { id: "kw", name: "Kilowatts", symbol: "kW", factor: 1000 },
    { id: "hp", name: "Caballos de fuerza", symbol: "HP", factor: 745.7 },
    { id: "ps", name: "Caballos de vapor", symbol: "PS", factor: 735.5 },
    { id: "btu_h", name: "BTU por hora", symbol: "BTU/h", factor: 0.293071 },
  ],
}

// Consumo de combustible - Unidad base: litros por 100 km
export const fuelConsumptionUnits: UnitCategory = {
  id: "fuel",
  name: "Consumo de Combustible",
  baseUnit: "litros por 100 km",
  units: [
    { id: "l100km", name: "Litros por 100 km", symbol: "L/100km", factor: 1 },
    { id: "mpg_us", name: "Millas por galón (US)", symbol: "MPG (US)", factor: 235.214 }, // Conversión especial
    { id: "mpg_uk", name: "Millas por galón (UK)", symbol: "MPG (UK)", factor: 282.481 }, // Conversión especial
    { id: "kmpl", name: "Kilómetros por litro", symbol: "km/L", factor: 100 }, // Conversión especial
  ],
}

// Medidas de cocina - Unidad base: mililitros
export const cookingUnits: UnitCategory = {
  id: "cooking",
  name: "Medidas de Cocina",
  baseUnit: "mililitros",
  units: [
    { id: "ml", name: "Mililitros", symbol: "ml", factor: 1 },
    { id: "tsp", name: "Cucharaditas", symbol: "cdta", factor: 4.92892 },
    { id: "tbsp", name: "Cucharadas", symbol: "cda", factor: 14.7868 },
    { id: "fl_oz", name: "Onzas fluidas", symbol: "fl oz", factor: 29.5735 },
    { id: "cup_us", name: "Tazas (US)", symbol: "cup", factor: 236.588 },
    { id: "cup_metric", name: "Tazas métricas", symbol: "taza", factor: 250 },
    { id: "pint", name: "Pintas", symbol: "pt", factor: 473.176 },
    { id: "quart", name: "Cuartos", symbol: "qt", factor: 946.353 },
  ],
}

// Almacenamiento digital - Unidad base: Bytes
export const storageUnits: UnitCategory = {
  id: "storage",
  name: "Almacenamiento Digital",
  baseUnit: "bytes",
  units: [
    { id: "B", name: "Bytes", symbol: "B", factor: 1 },
    { id: "KB", name: "Kilobytes", symbol: "KB", factor: 1024 },
    { id: "MB", name: "Megabytes", symbol: "MB", factor: 1024 ** 2 },
    { id: "GB", name: "Gigabytes", symbol: "GB", factor: 1024 ** 3 },
    { id: "TB", name: "Terabytes", symbol: "TB", factor: 1024 ** 4 },
    { id: "PB", name: "Petabytes", symbol: "PB", factor: 1024 ** 5 },
    { id: "EB", name: "Exabytes", symbol: "EB", factor: 1024 ** 6 },
    { id: "ZB", name: "Zettabytes", symbol: "ZB", factor: 1024 ** 7 },
    { id: "YB", name: "Yottabytes", symbol: "YB", factor: 1024 ** 8 },
  ],
}

// Función para convertir entre unidades
export function convertUnits(value: number, fromUnit: Unit, toUnit: Unit, category: UnitCategory): number {
  // Casos especiales para temperatura
  if (category.id === "temperature") {
    return convertTemperature(value, fromUnit.id, toUnit.id)
  }

  // Casos especiales para consumo de combustible
  if (category.id === "fuel") {
    return convertFuelConsumption(value, fromUnit.id, toUnit.id)
  }

  // Conversión estándar: valor → unidad base → unidad destino
  const baseValue = value * fromUnit.factor
  return baseValue / toUnit.factor
}

// Conversiones especiales para temperatura
function convertTemperature(value: number, fromId: string, toId: string): number {
  // Primero convertir todo a Celsius
  let celsius: number

  switch (fromId) {
    case "c":
      celsius = value
      break
    case "f":
      celsius = ((value - 32) * 5) / 9
      break
    case "k":
      celsius = value - 273.15
      break
    default:
      celsius = value
  }

  // Luego convertir de Celsius a la unidad destino
  switch (toId) {
    case "c":
      return celsius
    case "f":
      return (celsius * 9) / 5 + 32
    case "k":
      return celsius + 273.15
    default:
      return celsius
  }
}

// Conversiones especiales para consumo de combustible
function convertFuelConsumption(value: number, fromId: string, toId: string): number {
  // Convertir todo a L/100km primero
  let l100km: number

  switch (fromId) {
    case "l100km":
      l100km = value
      break
    case "mpg_us":
      l100km = 235.214 / value
      break
    case "mpg_uk":
      l100km = 282.481 / value
      break
    case "kmpl":
      l100km = 100 / value
      break
    default:
      l100km = value
  }

  // Luego convertir de L/100km a la unidad destino
  switch (toId) {
    case "l100km":
      return l100km
    case "mpg_us":
      return 235.214 / l100km
    case "mpg_uk":
      return 282.481 / l100km
    case "kmpl":
      return 100 / l100km
    default:
      return l100km
  }
}
