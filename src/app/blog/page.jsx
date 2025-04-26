"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getBlogs } from "@/lib/storage";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://blogs-app-backend-itdk.onrender.com/api/blogs")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch blogs");
        return res.json();
      })
      .then((data) => setBlogs(data))
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setBlogs([]);
      });
  }, []);

  const containerStyle = {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "20px",
  };

  const headingStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "30px",
    textAlign: "center",
  };

  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    marginBottom: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#333",
  };

  const contentStyle = {
    fontSize: "15px",
    color: "#555",
    marginBottom: "10px",
  };

  const linkStyle = {
    color: "#0070f3",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "14px",
  };

  const emptyStyle = {
    textAlign: "center",
    color: "#999",
    fontSize: "16px",
    marginTop: "40px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>All Blogs</h1>

      {blogs.length === 0 ? (
        <p style={emptyStyle}>
          No blogs added yet.{" "}
          <Link href="/add" style={linkStyle}>
            Add one?
          </Link>
        </p>
      ) : (
        blogs.map((blog) => (
          <div key={blog.id} style={cardStyle}>
            <h2 style={titleStyle}>{blog.title}</h2>
            <p style={contentStyle}>
              {blog.content.length > 150
                ? blog.content.slice(0, 150) + "..."
                : blog.content}
            </p>
            <Link href={`/blog/${blog._id}`} style={linkStyle}>
              Read more →
            </Link>
          </div>
        ))
      )}
    </div>
  );
}
