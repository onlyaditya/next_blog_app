"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveBlog } from "@/lib/storage";

export default function AddBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    saveBlog({ title, content });
    router.push("/blog");
  };

  const containerStyle = {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
  };

  const headingStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "16px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  };

  const textareaStyle = {
    ...inputStyle,
    height: "150px",
    resize: "vertical",
  };

  const buttonStyle = {
    padding: "12px 20px",
    backgroundColor: "#0070f3",
    color: "white",
    fontSize: "16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Add a New Blog</h1>
      <form onSubmit={handleSubmit}>
        <input
          style={inputStyle}
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          style={textareaStyle}
          placeholder="Write your content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit" style={buttonStyle}>
          Submit Blog
        </button>
      </form>
    </div>
  );
}
