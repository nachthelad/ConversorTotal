import { Ruler, MapPin, Scale, Droplets, Thermometer, Square, Gauge, Clock, Activity, Zap, Power, Fuel, ChefHat, Database } from "lucide-react"
import type { ReactNode } from "react"

// Presets de conversiones rápidas para cada categoría de unidades
// El campo icon es el nombre del icono de lucide-react a usar, para ser renderizado dinámicamente en el componente

export interface UnitPreset {
  from: string
  to: string
  label: string
  icon: string // nombre del icono de lucide-react
}

export const lengthPresets: UnitPreset[] = [
  { from: "in", to: "cm", label: "in → cm", icon: "Ruler" },
  { from: "cm", to: "in", label: "cm → in", icon: "Ruler" },
  { from: "km", to: "mi", label: "km → mi", icon: "MapPin" },
  { from: "mi", to: "km", label: "mi → km", icon: "MapPin" },
  { from: "m", to: "ft", label: "m → ft", icon: "Ruler" },
]

export const weightPresets: UnitPreset[] = [
  { from: "kg", to: "lb", label: "kg → lb", icon: "Scale" },
  { from: "lb", to: "kg", label: "lb → kg", icon: "Scale" },
  { from: "g", to: "oz", label: "g → oz", icon: "Scale" },
  { from: "oz", to: "g", label: "oz → g", icon: "Scale" },
  { from: "t", to: "kg", label: "t → kg", icon: "Scale" },
]

export const volumePresets: UnitPreset[] = [
  { from: "l", to: "ml", label: "L → ml", icon: "Droplets" },
  { from: "ml", to: "l", label: "ml → L", icon: "Droplets" },
  { from: "l", to: "gal", label: "L → gal", icon: "Droplets" },
  { from: "gal", to: "l", label: "gal → L", icon: "Droplets" },
  { from: "cup", to: "ml", label: "cup → ml", icon: "Droplets" },
]

export const temperaturePresets: UnitPreset[] = [
  { from: "c", to: "f", label: "°C → °F", icon: "Thermometer" },
  { from: "f", to: "c", label: "°F → °C", icon: "Thermometer" },
  { from: "c", to: "k", label: "°C → K", icon: "Thermometer" },
  { from: "k", to: "c", label: "K → °C", icon: "Thermometer" },
  { from: "f", to: "k", label: "°F → K", icon: "Thermometer" },
]

export const areaPresets: UnitPreset[] = [
  { from: "m2", to: "ft2", label: "m² → ft²", icon: "Square" },
  { from: "ft2", to: "m2", label: "ft² → m²", icon: "Square" },
  { from: "km2", to: "hectare", label: "km² → ha", icon: "Square" },
  { from: "acre", to: "m2", label: "acre → m²", icon: "Square" },
  { from: "cm2", to: "in2", label: "cm² → in²", icon: "Square" },
]

export const speedPresets: UnitPreset[] = [
  { from: "kmh", to: "mph", label: "km/h → mph", icon: "Gauge" },
  { from: "mph", to: "kmh", label: "mph → km/h", icon: "Gauge" },
  { from: "ms", to: "kmh", label: "m/s → km/h", icon: "Gauge" },
  { from: "kn", to: "kmh", label: "kn → km/h", icon: "Gauge" },
  { from: "fts", to: "ms", label: "ft/s → m/s", icon: "Gauge" },
]

export const timePresets: UnitPreset[] = [
  { from: "h", to: "min", label: "h → min", icon: "Clock" },
  { from: "min", to: "s", label: "min → s", icon: "Clock" },
  { from: "d", to: "h", label: "d → h", icon: "Clock" },
  { from: "w", to: "d", label: "sem → d", icon: "Clock" },
  { from: "year", to: "month", label: "año → mes", icon: "Clock" },
]

export const pressurePresets: UnitPreset[] = [
  { from: "pa", to: "kpa", label: "Pa → kPa", icon: "Activity" },
  { from: "bar", to: "psi", label: "bar → PSI", icon: "Activity" },
  { from: "atm", to: "mmhg", label: "atm → mmHg", icon: "Activity" },
  { from: "inhg", to: "mmhg", label: "inHg → mmHg", icon: "Activity" },
  { from: "psi", to: "kpa", label: "PSI → kPa", icon: "Activity" },
]

export const energyPresets: UnitPreset[] = [
  { from: "j", to: "cal", label: "J → cal", icon: "Zap" },
  { from: "cal", to: "j", label: "cal → J", icon: "Zap" },
  { from: "kcal", to: "kj", label: "kcal → kJ", icon: "Zap" },
  { from: "wh", to: "kwh", label: "Wh → kWh", icon: "Zap" },
  { from: "btu", to: "j", label: "BTU → J", icon: "Zap" },
]

export const powerPresets: UnitPreset[] = [
  { from: "w", to: "kw", label: "W → kW", icon: "Power" },
  { from: "kw", to: "w", label: "kW → W", icon: "Power" },
  { from: "w", to: "hp", label: "W → HP", icon: "Power" },
  { from: "hp", to: "w", label: "HP → W", icon: "Power" },
  { from: "ps", to: "kw", label: "PS → kW", icon: "Power" },
]

export const fuelPresets: UnitPreset[] = [
  { from: "l100km", to: "mpg_us", label: "L/100km → MPG (US)", icon: "Fuel" },
  { from: "mpg_us", to: "l100km", label: "MPG (US) → L/100km", icon: "Fuel" },
  { from: "l100km", to: "kmpl", label: "L/100km → km/L", icon: "Fuel" },
  { from: "mpg_uk", to: "l100km", label: "MPG (UK) → L/100km", icon: "Fuel" },
  { from: "kmpl", to: "mpg_us", label: "km/L → MPG (US)", icon: "Fuel" },
]

export const cookingPresets: UnitPreset[] = [
  { from: "ml", to: "tsp", label: "ml → cdta", icon: "ChefHat" },
  { from: "tsp", to: "ml", label: "cdta → ml", icon: "ChefHat" },
  { from: "cup_us", to: "ml", label: "cup → ml", icon: "ChefHat" },
  { from: "ml", to: "cup_us", label: "ml → cup", icon: "ChefHat" },
  { from: "tbsp", to: "ml", label: "cda → ml", icon: "ChefHat" },
]

export const storagePresets: UnitPreset[] = [
  { from: "b", to: "kb", label: "B → KB", icon: "Database" },
  { from: "kb", to: "mb", label: "KB → MB", icon: "Database" },
  { from: "mb", to: "gb", label: "MB → GB", icon: "Database" },
  { from: "gb", to: "tb", label: "GB → TB", icon: "Database" },
  { from: "tb", to: "gb", label: "TB → GB", icon: "Database" },
]

export const presetsByCategory: Record<string, UnitPreset[]> = {
  length: lengthPresets,
  weight: weightPresets,
  volume: volumePresets,
  temperature: temperaturePresets,
  area: areaPresets,
  speed: speedPresets,
  time: timePresets,
  pressure: pressurePresets,
  energy: energyPresets,
  power: powerPresets,
  fuel: fuelPresets,
  cooking: cookingPresets,
  storage: storagePresets,
} 