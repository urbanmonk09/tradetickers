"use client";

import { useState, useEffect } from "react";
import TradingViewWidget from "@/components/TradingViewWidget";
import Link from "next/link";

const ChartPage = () => {
  const [chartHeight, setChartHeight] = useState(600);

  // Dynamically adjust chart height to fill viewport
  useEffect(() => {
    const updateHeight = () => {
      const availableHeight = window.innerHeight - 160; // subtract header/back button padding
      setChartHeight(availableHeight > 400 ? availableHeight : 400); // min height 400
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Back button */}
      <Link
        href="/"
        className="inline-block mb-6 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white font-medium"
      >
        ← Back to Home
      </Link>

      <h1 className="text-2xl font-semibold mb-6">
        Advanced Stock Chart
      </h1>

      <TradingViewWidget
        title="TradingView Chart"
        scriptUrl="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js"
        config={{
          symbol: "NSE:RELIANCE",
          interval: "15",
          timezone: "Asia/Kolkata",
          theme: "dark",
          style: "1",
          locale: "en",
          allow_symbol_change: true,
          withdateranges: true,
          hide_side_toolbar: false,
          details: true,
          hotlist: true,
          calendar: true,
        }}
        height={chartHeight} // dynamically updated height
        className="w-full rounded-xl border border-gray-800"
      />
    </div>
  );
};

export default ChartPage;
