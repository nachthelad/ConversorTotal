import { useState, useEffect } from "react"

export function useUsdEurRate() {
  const [rate, setRate] = useState<number | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchRate = async () => {
    setLoading(true)
    try {
      const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD")
      const data = await response.json()
      if (data.rates && data.rates.EUR) {
        setRate(data.rates.EUR)
        setLastUpdated(new Date())
      } else {
        setRate(0.85)
        setLastUpdated(new Date())
      }
    } catch {
      setRate(0.85)
      setLastUpdated(new Date())
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRate()
    const interval = setInterval(fetchRate, 3 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  return { rate, lastUpdated, loading }
} 