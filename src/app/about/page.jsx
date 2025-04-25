"use client";

export default function About() {
  const containerStyle = {
    maxWidth: "800px",
    margin: "60px auto",
    padding: "20px",
    fontFamily: "sans-serif",
    lineHeight: "1.7",
    color: "#333",
  };

  const headingStyle = {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
  };

  const paragraphStyle = {
    fontSize: "16px",
    marginBottom: "20px",
  };

  const highlightStyle = {
    fontWeight: "bold",
    color: "#0070f3",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>About This Blog App</h1>

      <p style={paragraphStyle}>
        This is a simple yet powerful blog platform built using{" "}
        <span style={highlightStyle}>Next.js App Router</span>. It’s designed as
        a hands-on learning project to help students and developers understand
        how modern web applications are structured and built.
      </p>

      <p style={paragraphStyle}>
        Unlike traditional blog apps that rely on a backend or database, this
        project uses <span style={highlightStyle}>localStorage</span> to store
        blog posts directly in your browser — making it lightweight, fast, and
        easy to build.
      </p>

      <p style={paragraphStyle}>
        Through this app, you'll get to explore:
        <ul>
          <li>🛠️ Routing and Dynamic Pages in Next.js</li>
          <li>💾 Client-side Storage with localStorage</li>
          <li>🧠 State & Form Management</li>
          <li>🎨 UI Structure using inline CSS</li>
          <li>🚀 Deploying your app with Vercel</li>
        </ul>
      </p>

      <p style={paragraphStyle}>
        Whether you're just starting with web development or looking to
        strengthen your Next.js skills, this project is a great way to learn by
        doing.
      </p>

      <p style={paragraphStyle}>Happy coding! 💻✨</p>
    </div>
  );
}
