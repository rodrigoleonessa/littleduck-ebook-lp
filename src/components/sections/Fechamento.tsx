import { fechamento, CHECKOUT_URL } from "@/lib/content";

const TERRA = "#C96D55";

function HeartOutline({ style }: { style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 60 54"
      width="60"
      height="54"
      fill="none"
      stroke={TERRA}
      strokeWidth="2"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ opacity: 0.35, pointerEvents: "none", ...style }}
    >
      <path d="M30 48 C 8 34 4 16 14 10 c 5 -3 10 0 16 8 c 6 -8 11 -11 16 -8 c 10 6 6 24 -16 38 z" />
      <path d="M30 42 C 14 32 12 20 18 16 c 3 -2 6 0 12 6 c 6 -6 9 -8 12 -6 c 6 4 2 16 -12 26 z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 2 L17 5 v5 c0 4.5 -3 7 -7 8.5 C6 19 3 16.5 3 12 V5 z" />
      <polyline points="7,10 9.5,12.5 13,8" />
    </svg>
  );
}

export default function Fechamento() {
  return (
    <section
      style={{
        backgroundColor: "var(--color-cream)",
        paddingTop: "3rem",
        paddingBottom: "3.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <HeartOutline
        style={{
          position: "absolute",
          top: "1.5rem",
          right: "1.25rem",
        }}
      />

      <div
        className="container"
        style={{
          maxWidth: "640px",
          margin: "0 auto",
          padding: "0 1.25rem",
          textAlign: "center",
        }}
      >
        {/* 3-line headline */}
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.625rem, 5.5vw, 2.375rem)",
            fontWeight: 700,
            color: "#1F1B17",
            lineHeight: 1.3,
            marginBottom: "2rem",
          }}
        >
          {fechamento.lines.map((line, i) => (
            <span key={i} style={{ display: "block" }}>{line}</span>
          ))}
        </h2>

        {/* CTA button */}
        <a
          href={CHECKOUT_URL}
          style={{
            display: "block",
            width: "100%",
            padding: "1.125rem 1.5rem",
            backgroundColor: TERRA,
            color: "#FFFFFF",
            fontFamily: "var(--font-sans)",
            fontSize: "1rem",
            fontWeight: 800,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            textDecoration: "none",
            borderRadius: "999px",
            textAlign: "center",
            boxShadow: "0 4px 16px rgba(201,109,85,0.35)",
            marginBottom: "1.5rem",
          }}
        >
          {fechamento.cta}
        </a>

        {/* Trust badges */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          {fechamento.trust.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
                color: "var(--color-text-muted)",
                fontSize: "0.8125rem",
                fontFamily: "var(--font-sans)",
              }}
            >
              <ShieldIcon />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
