"use client";

import { useEffect, useRef } from "react";

const useTradingViewWidgets = (
  scriptUrl: string,
  config: Record<string, unknown>,
  height: number = 600
) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = "";

    // 🔥 REQUIRED FOR ADVANCED CHART
    const containerId = "tv_chart_container";

    const widgetDiv = document.createElement("div");
    widgetDiv.id = containerId; // ✅ IMPORTANT
    widgetDiv.className = "tradingview-widget-container__widget";
    widgetDiv.style.width = "100%";
    widgetDiv.style.height = `${height}px`;

    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    script.type = "text/javascript";

    script.innerHTML = JSON.stringify({
      ...config,
      container_id: containerId, // ✅ MUST MATCH div id
    });

    containerRef.current.appendChild(widgetDiv);
    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [scriptUrl, config, height]);

  return containerRef;
};

export default useTradingViewWidgets;
