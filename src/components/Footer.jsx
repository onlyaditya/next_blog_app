export default function Footer() {
  return (
    <footer
      style={{
        position: "fixed", // 🔒 Fix it to the viewport
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
        padding: "15px",
        fontSize: "14px",
        color: "#555",
        boxShadow: "0 -1px 5px rgba(0,0,0,0.1)",
      }}
    >
      <p>&copy; {new Date().getFullYear()} My Blog App. All rights reserved.</p>
      <p style={{ marginTop: "5px" }}>
        Built with ❤️ using Next.js App Router.
      </p>
    </footer>
  );
}
