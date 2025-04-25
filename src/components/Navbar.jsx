"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navStyle = {
    backgroundColor: "#000",
    color: "#fff",
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const linkStyle = (path) => ({
    color: pathname === path ? "#60a5fa" : "#fff",
    fontWeight: pathname === path ? "bold" : "normal",
    textDecoration: "none",
    marginLeft: "20px",
  });

  return (
    <nav style={navStyle}>
      <h1 style={{ margin: 0 }}>📝 My Blog</h1>
      <div>
        <Link href="/" style={linkStyle("/")}>
          Home
        </Link>
        <Link href="/blog" style={linkStyle("/blog")}>
          Blogs
        </Link>
        <Link href="/add" style={linkStyle("/add")}>
          Add Blog
        </Link>
        <Link href="/about" style={linkStyle("/about")}>
          About
        </Link>
      </div>
    </nav>
  );
}
