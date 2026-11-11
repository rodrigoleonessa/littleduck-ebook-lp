import { valorDenso } from "@/lib/content";
import CtaButton from "@/components/ui/CtaButton";

const TERRA = "#C96D55";
const GOLD = "#B88A41";
const GREEN = "#2F6848";

const GUARANTEE_ICONS = [
  /* leaf - acesso imediato */
  <svg key="leaf" viewBox="0 0 28 28" width="22" height="22" fill="none" stroke={GREEN} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 24 V12" />
    <path d="M14 18 q -7 -3 -8 -10 q 7 0 8 7" />
    <path d="M14 16 q 7 -3 8 -10 q -7 0 -8 7" />
  </svg>,
  /* clock - acesso vitalicio */
  <svg key="clock" viewBox="0 0 28 28" width="22" height="22" fill="none" stroke={GREEN} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="14" cy="14" r="10" />
    <line x1="14" y1="14" x2="14" y2="9" />
    <line x1="14" y1="14" x2="18" y2="16" />
  </svg>,
  /* shield - 7 dias */
  <svg key="shield" viewBox="0 0 28 28" width="22" height="22" fill="none" stroke={GREEN} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 4 L23 8 v6 c 0 6 -4 9 -9 11 c -5 -2 -9 -5 -9 -11 V8 z" />
    <polyline points="10,14 13,17 18,11" />
  </svg>,
];

function LeafBranch({ style }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 80 140" width="80" height="140" fill="none" aria-hidden="true" style={{ pointerEvents: "none", ...style }}>
      <path d="M40 130 Q42 60 30 10" stroke={GOLD} strokeWidth="1.4" fill="none" />
      <path d="M32 30 Q14 28 6 42 Q22 50 32 38 Z" fill={GOLD} fillOpacity="0.55" />
      <path d="M36 50 Q56 48 64 60 Q44 66 36 56 Z" fill={GOLD} fillOpacity="0.55" />
      <path d="M34 70 Q14 68 8 82 Q24 88 34 76 Z" fill={GOLD} fillOpacity="0.5" />
      <path d="M38 92 Q58 90 68 102 Q48 108 38 98 Z" fill={GOLD} fillOpacity="0.5" />
      <path d="M36 112 Q20 110 14 122 Q28 128 36 118 Z" fill={GOLD} fillOpacity="0.45" />
    </svg>
  );
}

export default function ValorDenso() {
  return (
    <section
      id="comprar"
      style={{
        backgroundColor: "var(--color-cream)",
        paddingTop: "3rem",
        paddingBottom: "3rem",
        scrollMarginTop: "6rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <LeafBranch style={{ position: "absolute", right: "-15px", top: "1rem", opacity: 0.85 }} />
      <LeafBranch
        style={{
          position: "absolute",
          left: "-20px",
          bottom: "-2rem",
          opacity: 0.4,
          transform: "scaleX(-1) rotate(15deg)",
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
            fontSize: "clamp(1.375rem, 4.5vw, 1.875rem)",
            fontWeight: 700,
            color: "#1F1B17",
            lineHeight: 1.3,
            marginBottom: "2rem",
            maxWidth: "480px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {valorDenso.headline}
        </h2>

        {/* Price block */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.25rem",
            marginBottom: "1.5rem",
            flexWrap: "nowrap",
          }}
        >
          {/* DE */}
          <div style={{ textAlign: "center", flexShrink: 0 }}>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                color: "#1F1B17",
                marginBottom: "0.4rem",
              }}
            >
              DE
            </p>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.5rem, 5vw, 2rem)",
                fontWeight: 700,
                color: "#1F1B17",
                textDecoration: "line-through",
                textDecorationThickness: "2px",
                textDecorationColor: "#1F1B17",
                lineHeight: 1,
              }}
            >
              {valorDenso.priceFrom}
            </p>
          </div>

          {/* Arrow */}
          <svg
            viewBox="0 0 40 20"
            width="40"
            height="20"
            fill="none"
            stroke={TERRA}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ flexShrink: 0 }}
            aria-hidden="true"
          >
            <line x1="2" y1="10" x2="34" y2="10" />
            <polyline points="28,4 36,10 28,16" />
          </svg>

          {/* POR APENAS */}
          <div style={{ textAlign: "center", flexShrink: 0 }}>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                color: "#1F1B17",
                marginBottom: "0.2rem",
              }}
            >
              POR APENAS
            </p>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.5rem, 9vw, 3.75rem)",
                fontWeight: 900,
                color: TERRA,
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              {valorDenso.priceTo}
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                color: "var(--color-text-muted)",
                marginTop: "0.4rem",
              }}
            >
              {valorDenso.subPrice}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
          <CtaButton
            text={valorDenso.cta}
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

        {/* Guarantees row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0.75rem",
            justifyItems: "center",
          }}
          className="guarantees-grid"
        >
          {valorDenso.guarantees.map((text, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.4rem",
                textAlign: "center",
                maxWidth: "120px",
              }}
            >
              {GUARANTEE_ICONS[i]}
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: "#1F1B17",
                  lineHeight: 1.35,
                }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 420px) {
          .guarantees-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          .guarantees-grid > div {
            flex-direction: row !important;
            max-width: none !important;
            text-align: left !important;
            gap: 0.75rem !important;
          }
          .guarantees-grid > div p {
            text-align: left !important;
          }
        }
      `}</style>
    </section>
  );
}
