"use client";

import { useEffect, useState } from "react";
import TradingViewWidget from "@/components/TradingViewWidget";

interface ChartLayoutProps {
  symbol: string;
  title: string;
}

export default function ChartLayout({ symbol, title }: ChartLayoutProps) {
  const [chartHeight, setChartHeight] = useState(700);

  useEffect(() => {
    const updateHeight = () => {
      const h = window.innerHeight - 240;
      setChartHeight(Math.max(h, 500));
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">{title}</h1>

      <TradingViewWidget
        key={`${symbol}-${chartHeight}`}
        scriptUrl="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js"
        config={{
          symbol,
          interval: "15",
          timezone: "Asia/Kolkata",
          theme: "dark",
          locale: "en",
          allow_symbol_change: false,
          width: "100%",
          height: chartHeight,
        }}
        className="w-full border border-gray-800 rounded-xl"
      />
    </>
  );
}
