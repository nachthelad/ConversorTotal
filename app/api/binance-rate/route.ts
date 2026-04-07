import { NextResponse } from "next/server";

async function fetchBinanceP2PPrice(tradeType: "SELL" | "BUY"): Promise<number> {
  const res = await fetch(
    "https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fiat: "ARS",
        page: 1,
        rows: 10,
        tradeType,
        asset: "USDT",
        countries: [],
        additionalKycVerifyFilter: 0,
        classifies: ["mass", "profession", "fiat_trade"],
        filterType: "all",
        followed: false,
        payTypes: [],
        periods: [],
        proMerchantAds: false,
        publisherType: "merchant",
        shieldMerchantAds: false,
        tradedWith: false,
      }),
      next: { revalidate: 300 },
    }
  );

  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  const data = await res.json();
  // Saltear Promoted Ads (privilegeDesc !== null) y tomar el primero real
  const ad = (data?.data ?? []).find((item: any) => !item.privilegeDesc);
  const price = parseFloat(ad?.adv?.price ?? "0");
  if (!price) throw new Error("No price found");
  return price;
}

export async function GET() {
  const [sellResult, buyResult] = await Promise.allSettled([
    fetchBinanceP2PPrice("SELL"),
    fetchBinanceP2PPrice("BUY"),
  ]);

  const compra =
    sellResult.status === "fulfilled" ? sellResult.value : null;
  const venta =
    buyResult.status === "fulfilled" ? buyResult.value : null;

  if (compra === null && venta === null) {
    return NextResponse.json({ error: "No data" }, { status: 502 });
  }

  return NextResponse.json({
    compra,
    venta,
    updatedAt: new Date().toISOString(),
  });
}
