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

    fetch(
      `${"https://blogs-app-backend-itdk.onrender.com/api/blogs"}/${params.id}`
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch blog");
        return res.json();
      })
      .then((data) => {
        console.log(data);

        setBlog(data);
      })
      .catch((err) => {
        console.error("Error fetching blog:", err);
        setBlog(null);
      });
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
