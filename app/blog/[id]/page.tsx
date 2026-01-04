"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { generateBlogPosts } from "@/lib/blog";

const BlogPostPage = () => {
  const params = useParams();
  const router = useRouter();
  const blogPosts = generateBlogPosts();
  const post = blogPosts.find(p => p.id === params.id);

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white p-6">
        <Link
          href="/blog"
          className="inline-block mb-6 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white font-medium"
        >
          ← Back to Blog
        </Link>
        <p>Post not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <Link
        href="/blog"
        className="inline-block mb-6 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white font-medium"
      >
        ← Back to Blog
      </Link>

      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-6">{post.date}</p>
      <p className="text-gray-300 whitespace-pre-line">{post.content}</p>
    </div>
  );
};

export default BlogPostPage;
