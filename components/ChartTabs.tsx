"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { name: "Stocks", href: "/charts/stocks" },
  { name: "Crypto", href: "/charts/crypto" },
  { name: "Gold", href: "/charts/gold" },
];

export default function ChartTabs() {
  const pathname = usePathname();

  return (
    <div className="flex gap-2 mb-6">
      {tabs.map(tab => {
        const active = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`px-4 py-2 rounded-lg text-sm font-medium
              ${active ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}
            `}
          >
            {tab.name}
          </Link>
        );
      })}
    </div>
  );
}
