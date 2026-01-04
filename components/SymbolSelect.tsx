"use client";

interface Props {
  symbols: { label: string; value: string }[];
  value: string;
  onChange: (v: string) => void;
}

export default function SymbolSelect({ symbols, value, onChange }: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="mb-4 px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white"
    >
      {symbols.map(s => (
        <option key={s.value} value={s.value}>
          {s.label}
        </option>
      ))}
    </select>
  );
}
