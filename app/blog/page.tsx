"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { POPULAR_STOCK_SYMBOLS } from "@/lib/constants";
import { generateBlogPosts, BlogPost, Alert } from "@/lib/blog";

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const res = await fetch("/api/webhook/tradingview");
        const data: Alert[] = await res.json();

        // ✅ Filter only popular stock symbols
        const filtered = data.filter(a =>
          POPULAR_STOCK_SYMBOLS.includes(
            a.symbol.replace("NSE:", "").replace("NASDAQ:", "").replace("NYSE:", "")
          )
        );

        setAlerts(filtered);

        // Generate blog posts with optional signals
        const generatedPosts = generateBlogPosts(filtered);
        setPosts(generatedPosts);
      } catch (err) {
        console.error("Failed to fetch alerts", err);
        setPosts(generateBlogPosts()); // fallback without alerts
      } finally {
        setLoading(false);
      }
    };

    fetchAlerts();

    const interval = setInterval(fetchAlerts, 60000); // refresh every 60s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen p-6 bg-black text-white">
      <Link
        href="/"
        className="inline-block mb-6 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded transition"
      >
        ← Return Home
      </Link>

      <h1 className="text-3xl font-bold mb-4">AI Stock Market Blog</h1>
      <p className="text-gray-400 mb-6">
        AI-generated insights for popular stocks using SMC + Fibonacci.
      </p>

      {loading && <p className="text-gray-500">Loading blog posts…</p>}

      {!loading && posts.length === 0 && (
        <p className="text-gray-500">No blog posts available right now.</p>
      )}

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className={`border rounded-lg p-4 transition ${
              post.signal === "BUY"
                ? "border-green-500 bg-green-900/20"
                : post.signal === "SELL"
                ? "border-red-500 bg-red-900/20"
                : "border-gray-700 bg-gray-900/20"
            }`}
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">{post.title}</h2>
              {post.signal && (
                <span
                  className={`text-sm font-bold px-2 py-1 rounded ${
                    post.signal === "BUY"
                      ? "bg-green-600 text-white"
                      : "bg-red-600 text-white"
                  }`}
                >
                  {post.signal}
                </span>
              )}
            </div>

            <p className="text-gray-300 text-sm mb-2">{post.content}</p>
            <p className="text-gray-500 text-xs">Date: {post.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
