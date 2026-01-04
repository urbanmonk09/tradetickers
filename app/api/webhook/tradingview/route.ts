import { NextResponse } from "next/server";

let alertsStore: any[] = [];

export async function POST(req: Request) {
  try {
    const data = await req.json();

    alertsStore.unshift({
      symbol: data.symbol,
      signal: data.signal,
      price: Number(data.price),
      time: new Date(Number(data.time)).toISOString(),
    });

    // keep last 50 alerts
    alertsStore = alertsStore.slice(0, 50);

    return NextResponse.json({ status: "success" });
  } catch (err) {
    return NextResponse.json({ status: "error" }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json(alertsStore);
}
