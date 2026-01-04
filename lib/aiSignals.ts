export type TradeSignal = {
  symbol: string;
  price: number;
  signal: "BUY" | "SELL" | "WAIT";
  reason: string;
};

export function generateAiSignal(symbol: string): TradeSignal {
  // Dummy market data (later from API)
  const price = Math.random() * 1000;

  // Fake SMC + Fibonacci logic (v1)
  if (price < 300) {
    return {
      symbol,
      price: Number(price.toFixed(2)),
      signal: "BUY",
      reason: "Price near demand zone + 61.8% Fibonacci retracement",
    };
  }

  if (price > 700) {
    return {
      symbol,
      price: Number(price.toFixed(2)),
      signal: "SELL",
      reason: "Liquidity grab near supply zone + Fibonacci extension",
    };
  }

  return {
    symbol,
    price: Number(price.toFixed(2)),
    signal: "WAIT",
    reason: "Market in consolidation (SMC range)",
  };
}
