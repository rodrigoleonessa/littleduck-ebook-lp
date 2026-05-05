import { CHECKOUT_URL } from "@/lib/content";

export default function Navbar() {
  return (
    <header
      style={{
        position: "fixed",
        top: "12px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 50,
        width: "92vw",
        maxWidth: "820px",
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "rgba(247,239,226,0.92)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid var(--color-border)",
          borderRadius: "9999px",
          padding: "0.625rem 1.25rem",
          boxShadow: "0 2px 16px rgba(60,40,20,0.1)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 700,
            fontSize: "1.125rem",
            color: "var(--color-green)",
            letterSpacing: "-0.01em",
          }}
        >
          Little Duck
        </span>

        <a
          href="#o-que-vem"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.8125rem",
            fontWeight: 600,
            color: "var(--color-text-muted)",
            textDecoration: "none",
            display: "none",
          }}
          className="md:inline"
        >
          O que vem no pack
        </a>

        <a
          href={CHECKOUT_URL}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.8125rem",
            fontWeight: 700,
            color: "white",
            backgroundColor: "var(--color-green)",
            padding: "0.45rem 1.125rem",
            borderRadius: "9999px",
            textDecoration: "none",
            letterSpacing: "0.04em",
            transition: "background-color 200ms",
            whiteSpace: "nowrap",
          }}
        >
          Acessar por R$37
        </a>
      </nav>
    </header>
  );
}
