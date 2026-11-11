import { produto } from "@/lib/content";
import CtaButton from "@/components/ui/CtaButton";

function PlantPot({ style }: { style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 140 200"
      width="140"
      height="200"
      fill="none"
      aria-hidden="true"
      style={{ pointerEvents: "none", ...style }}
    >
      {/* Long leaves */}
      <path d="M70 130 q -10 -50 -22 -85 q 8 30 14 85 z" fill="#7A9367" />
      <path d="M70 130 q -3 -65 0 -110 q 5 60 4 110 z" fill="#8FAA77" />
      <path d="M70 130 q 5 -60 18 -100 q -4 50 -12 100 z" fill="#9DB87F" />
      <path d="M70 130 q 12 -45 28 -75 q -8 35 -22 75 z" fill="#A8C089" />
      <path d="M70 130 q 18 -35 32 -55 q -10 25 -24 55 z" fill="#7A9367" />
      <path d="M70 130 q -18 -30 -32 -50 q 10 22 24 50 z" fill="#8FAA77" />
      {/* Pot */}
      <path d="M50 130 L 90 130 L 95 175 q -25 8 -50 0 z" fill="#F2EDE3" stroke="#D4C4A4" strokeWidth="1" />
      <ellipse cx="70" cy="132" rx="20" ry="3.5" fill="#E5DCC9" />
      <ellipse cx="70" cy="132" rx="18" ry="2.5" fill="#3D2E1F" opacity="0.4" />
    </svg>
  );
}

export default function Produto() {
  return (
    <section
      style={{
        backgroundColor: "var(--color-cream)",
        paddingTop: "3rem",
        paddingBottom: "3rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative plant right */}
      <PlantPot
        style={{
          position: "absolute",
          right: "-30px",
          bottom: "1.5rem",
          width: "150px",
          height: "auto",
          opacity: 0.95,
          zIndex: 0,
        }}
      />

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "640px",
          margin: "0 auto",
          padding: "0 1.25rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.625rem, 5.5vw, 2.25rem)",
            fontWeight: 700,
            color: "#1F1B17",
            lineHeight: 1.2,
            marginBottom: "1.25rem",
          }}
        >
          {produto.headline}
        </h2>

        <p
          style={{
            fontSize: "1rem",
            color: "var(--color-text-body)",
            lineHeight: 1.7,
            marginBottom: "1.75rem",
          }}
        >
          {produto.sub}
        </p>

        {/* Big idea box */}
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.7)",
            border: "1px solid rgba(184,138,65,0.18)",
            borderRadius: "20px",
            padding: "1.5rem 1.25rem",
            marginBottom: "1.75rem",
            boxShadow: "0 4px 18px rgba(0,0,0,0.04)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.0625rem",
              fontWeight: 700,
              color: "#1F1B17",
              marginBottom: "0.5rem",
              lineHeight: 1.4,
            }}
          >
            {produto.bigIdea1}
          </p>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.0625rem",
              fontWeight: 700,
              color: "#1F1B17",
              lineHeight: 1.4,
            }}
          >
            {produto.bigIdea2}
          </p>
        </div>

        <p
          style={{
            fontSize: "1rem",
            color: "var(--color-text-body)",
            lineHeight: 1.7,
            marginBottom: "1.75rem",
          }}
        >
          {produto.body}
        </p>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <CtaButton
            text={produto.cta}
            style={
              {
                width: "100%",
                maxWidth: "440px",
                fontSize: "0.9375rem",
                padding: "1.125rem 1.25rem",
                borderRadius: "999px",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                fontWeight: 700,
              } as React.CSSProperties
            }
          />
        </div>
      </div>
    </section>
  );
}
