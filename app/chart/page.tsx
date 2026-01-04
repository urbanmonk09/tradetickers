import Link from "next/link";

export default function ChartsLandingPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Charts</h1>

      <div className="grid gap-4 max-w-md">
        <Link
          href="/chart/stocks"
          className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700"
        >
          📈 Stocks (NSE)
        </Link>

        <Link
          href="/chart/crypto/"
          className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700"
        >
          ₿ Crypto (Binance)
        </Link>

        <Link
          href="/chart/gold/"
          className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700"
        >
          🪙 Gold (MCX / COMEX)
        </Link>
      </div>
    </div>
  );
}
