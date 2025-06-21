export interface Unit {
  name: string
  factor: number
}

export interface UnitCategory {
  name: string
  baseUnit: string
  units: { [key: string]: Unit }
}

export const LENGTH_UNITS: UnitCategory = {
  name: "Longitud",
  baseUnit: "m",
  units: {
    mm: { name: "Milímetros", factor: 0.001 },
    cm: { name: "Centímetros", factor: 0.01 },
    m: { name: "Metros", factor: 1 },
    km: { name: "Kilómetros", factor: 1000 },
    in: { name: "Pulgadas", factor: 0.0254 },
    ft: { name: "Pies", factor: 0.3048 },
    yd: { name: "Yardas", factor: 0.9144 },
    mi: { name: "Millas", factor: 1609.34 },
  },
}

export const WEIGHT_UNITS: UnitCategory = {
  name: "Peso",
  baseUnit: "kg",
  units: {
    mg: { name: "Miligramos", factor: 0.000001 },
    g: { name: "Gramos", factor: 0.001 },
    kg: { name: "Kilogramos", factor: 1 },
    toneladas: { name: "Toneladas", factor: 1000 },
    oz: { name: "Onzas", factor: 0.0283495 },
    lb: { name: "Libras", factor: 0.453592 },
  },
}

export const VOLUME_UNITS: UnitCategory = {
  name: "Volumen",
  baseUnit: "m³",
  units: {
    "mm³": { name: "Milímetros cúbicos", factor: 0.000000000001 },
    "cm³": { name: "Centímetros cúbicos", factor: 0.000001 },
    "m³": { name: "Metros cúbicos", factor: 1 },
    L: { name: "Litros", factor: 0.001 },
    mL: { name: "Mililitros", factor: 0.000001 },
    "in³": { name: "Pulgadas cúbicas", factor: 0.000016387 },
    "ft³": { name: "Pies cúbicos", factor: 0.0283168 },
    gal: { name: "Galones", factor: 0.00378541 },
  },
}

export const AREA_UNITS: UnitCategory = {
  name: "Área",
  baseUnit: "m²",
  units: {
    "mm²": { name: "Milímetros cuadrados", factor: 0.000001 },
    "cm²": { name: "Centímetros cuadrados", factor: 0.0001 },
    "m²": { name: "Metros cuadrados", factor: 1 },
    "km²": { name: "Kilómetros cuadrados", factor: 1000000 },
    "in²": { name: "Pulgadas cuadradas", factor: 0.00064516 },
    "ft²": { name: "Pies cuadrados", factor: 0.092903 },
    "yd²": { name: "Yardas cuadradas", factor: 0.836127 },
    acres: { name: "Acres", factor: 4046.86 },
    hectáreas: { name: "Hectáreas", factor: 10000 },
  },
}

export const SPEED_UNITS: UnitCategory = {
  name: "Velocidad",
  baseUnit: "m/s",
  units: {
    "m/s": { name: "Metros por segundo", factor: 1 },
    "km/h": { name: "Kilómetros por hora", factor: 0.277778 },
    mph: { name: "Millas por hora", factor: 0.44704 },
    "ft/s": { name: "Pies por segundo", factor: 0.3048 },
    nudos: { name: "Nudos", factor: 0.514444 },
  },
}

export const TIME_UNITS: UnitCategory = {
  name: "Tiempo",
  baseUnit: "segundos",
  units: {
    milisegundos: { name: "Milisegundos", factor: 0.001 },
    segundos: { name: "Segundos", factor: 1 },
    minutos: { name: "Minutos", factor: 60 },
    horas: { name: "Horas", factor: 3600 },
    días: { name: "Días", factor: 86400 },
    semanas: { name: "Semanas", factor: 604800 },
    meses: { name: "Meses", factor: 2629746 },
    años: { name: "Años", factor: 31556952 },
  },
}
