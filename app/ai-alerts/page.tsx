"use client";

import { useEffect, useState } from "react";
import { POPULAR_STOCK_SYMBOLS } from "@/lib/constants";
import Link from "next/link";

interface Alert {
  symbol: string;        // e.g. "NSE:RELIANCE"
  signal: "BUY" | "SELL";
  price: number;
  time: string;
}

const AiAlertsPage = () => {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const res = await fetch("/api/webhook/tradingview");
        const data: Alert[] = await res.json();

        // ✅ Filter only POPULAR_STOCK_SYMBOLS
        const filtered = data.filter(a =>
          POPULAR_STOCK_SYMBOLS.includes(
            a.symbol.replace("NSE:", "").replace("NASDAQ:", "").replace("NYSE:", "")
          )
        );

        setAlerts(filtered);
      } catch (err) {
        console.error("Failed to fetch alerts", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAlerts();
    const interval = setInterval(fetchAlerts, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen p-6 bg-black text-white">
      {/* Back button */}
      <Link
        href="/"
        className="inline-block mb-6 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white font-medium"
      >
        ← Back to Home
      </Link>

      <h1 className="text-2xl font-semibold mb-2">
        AI Trade Alerts (SMC + Fibonacci)
      </h1>

      <p className="text-sm text-gray-400 mb-6">
        Live TradingView signals filtered by popular stocks
      </p>

      {loading && (
        <p className="text-gray-500">Waiting for TradingView signals…</p>
      )}

      {!loading && alerts.length === 0 && (
        <p className="text-gray-500">
          No active alerts for popular stocks right now.
        </p>
      )}

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {alerts.map((a, index) => (
          <div
            key={index}
            className={`border rounded-lg p-4 transition ${
              a.signal === "BUY"
                ? "border-green-500 bg-green-900/20"
                : "border-red-500 bg-red-900/20"
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg">
                {a.symbol.replace("NSE:", "")}
              </span>

              <span
                className={`text-sm font-semibold px-2 py-1 rounded ${
                  a.signal === "BUY"
                    ? "bg-green-600 text-white"
                    : "bg-red-600 text-white"
                }`}
              >
                {a.signal}
              </span>
            </div>

            <div className="text-sm text-gray-400 mt-3">
              <div>Price: <span className="text-white">{a.price}</span></div>
              <div>
                Time:{" "}
                <span className="text-white">
                  {new Date(a.time).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiAlertsPage;
