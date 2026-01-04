
"use client";

import React, { memo } from "react";
import useTradingViewWidgets from "@/hooks/useTradingViewWidgets";

interface TradingViewWidgetProps {
  title?: string;
  scriptUrl: string;
  config: Record<string, unknown>;
  height?: number;
  className?: string;
}

const TradingViewWidget = ({
  title,
  scriptUrl,
  config,
  height = 600,
  className,
}: TradingViewWidgetProps) => {
  // ✅ Hook now fully owns widget creation
  const containerRef = useTradingViewWidgets(scriptUrl, config, height);

  return (
    <div className="w-full">
      {title && (
        <h3 className="font-semibold text-2xl text-gray-100 mb-4">
          {title}
        </h3>
      )}

      {/* ✅ This div is ONLY a container */}
      <div
        ref={containerRef}
        className={`tradingview-widget-container ${className ?? ""}`}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default memo(TradingViewWidget);
