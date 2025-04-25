"use client";

import { useEffect, useState } from "react";
import { getBlogs } from "@/lib/storage";

export default function BlogDetail({ params }) {
  const [blog, setBlog] = useState(null);
  const [blogId, setBlogId] = useState(null);

  useEffect(() => {
    if (params?.id) {
      setBlogId(params.id);
    }
  }, [params]);

  useEffect(() => {
    if (!blogId) return;
    const blogs = getBlogs();
    const match = blogs.find((b) => b.id === blogId);
    setBlog(match);
  }, [blogId]);

  if (!blog) {
    return (
      <div
        style={{
          padding: "40px",
          textAlign: "center",
          fontSize: "18px",
          color: "#888",
        }}
      >
        Blog not found 😕
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", padding: "20px" }}>
      <h1
        style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}
      >
        {blog.title}
      </h1>
      <p style={{ fontSize: "16px", whiteSpace: "pre-wrap" }}>{blog.content}</p>
    </div>
  );
}
