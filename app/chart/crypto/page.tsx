import ChartLayout from "@/components/ChartLayout";
import Link from "next/link";

export default function CryptoPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <Link href="/" className="inline-block mb-4 text-gray-400">
        ← Back
      </Link>

      <ChartLayout
        title="Crypto Markets"
        symbol="BINANCE:BTCUSDT"
      />
    </div>
  );
}
