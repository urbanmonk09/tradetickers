type Props = {
  symbol: string;
  price: number;
  signal: "BUY" | "SELL" | "WAIT";
  reason: string;
};

export default function AiSignalCard({
  symbol,
  price,
  signal,
  reason,
}: Props) {
  const color =
    signal === "BUY"
      ? "bg-green-600"
      : signal === "SELL"
      ? "bg-red-600"
      : "bg-yellow-600";

  return (
    <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{symbol}</h3>
        <span className={`px-3 py-1 rounded text-sm ${color}`}>
          {signal}
        </span>
      </div>

      <p className="text-sm text-zinc-400">Price: ₹{price}</p>
      <p className="text-sm mt-2">{reason}</p>
    </div>
  );
}
