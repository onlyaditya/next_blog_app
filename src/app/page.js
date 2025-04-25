"use client";

import Link from "next/link";

export default function Home() {
  const containerStyle = {
    maxWidth: "800px",
    margin: "60px auto",
    padding: "20px",
    textAlign: "center",
    fontFamily: "sans-serif",
  };

  const headingStyle = {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#222",
  };

  const subtitleStyle = {
    fontSize: "18px",
    color: "#555",
    marginBottom: "30px",
    lineHeight: "1.6",
  };

  const buttonStyle = {
    display: "inline-block",
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: "#0070f3",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "6px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    transition: "background 0.2s ease-in-out",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to Blogify ✍️</h1>
      <p style={subtitleStyle}>
        Share your thoughts, experiences, and ideas with the world — all through
        code.
        <br />
        Create, publish, and explore blogs built entirely with{" "}
        <strong>Next.js App Router</strong> and <strong>localStorage</strong>.
        <br />
        No backend. No database. Just you and your words.
      </p>
      <Link href="/blog" style={buttonStyle}>
        Explore Blogs
      </Link>
    </div>
  );
}
