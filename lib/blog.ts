import { POPULAR_STOCK_SYMBOLS } from "./constants";

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  signal?: "BUY" | "SELL"; // Optional: link to AI alert
}

export interface Alert {
  symbol: string;        // e.g. "NSE:RELIANCE"
  signal: "BUY" | "SELL";
}

/**
 * Generate AI-style stock insights dynamically
 * @param alerts Optional array of live alerts to mark posts with BUY/SELL
 */
export const generateBlogPosts = (alerts?: Alert[]): BlogPost[] => {
  const today = new Date();

  return POPULAR_STOCK_SYMBOLS.filter(s => !s.includes("USD")).slice(0, 20).map((symbol, index) => {
    const id = symbol.toLowerCase();
    const date = new Date(today.getTime() - index * 86400000).toISOString().split("T")[0]; // today, yesterday...

    // Check if a live alert exists for this symbol
    const alert = alerts?.find(a => a.symbol.replace(/(NSE:|NASDAQ:|NYSE:)/, "") === symbol);

    return {
      id,
      title: `${symbol} Market Insight`,
      content: `AI analysis for ${symbol} shows key levels, trend direction, and potential trade opportunities. Using SMC + Fibonacci, ${symbol} may see a breakout or retracement in the coming sessions. Traders should watch for volume, support/resistance zones, and momentum indicators to confirm entries and exits.`,
      date,
      signal: alert?.signal, // attach BUY/SELL if available
    };
  });
};
