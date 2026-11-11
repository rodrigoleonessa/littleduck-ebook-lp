import { identificacao } from "@/lib/content";
import CtaButton from "@/components/ui/CtaButton";

const TERRA = "#C96D55";

function Butterfly({
  size = 16,
  rotate = 0,
  opacity = 0.5,
  style,
}: {
  size?: number;
  rotate?: number;
  opacity?: number;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 22"
      width={size}
      height={(size * 22) / 24}
      fill="none"
      stroke={TERRA}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{
        opacity,
        transform: `rotate(${rotate}deg)`,
        pointerEvents: "none",
        ...style,
      }}
    >
      <path d="M12 11 c -3 -6 -10 -7 -10 -2 c 0 4 5 7 10 2 z" fill={TERRA} fillOpacity="0.18" />
      <path d="M12 11 c 3 -6 10 -7 10 -2 c 0 4 -5 7 -10 2 z" fill={TERRA} fillOpacity="0.18" />
      <path d="M12 11 c -3 4 -6 6 -8 4 c -1 -2 2 -5 8 -4 z" fill={TERRA} fillOpacity="0.12" />
      <path d="M12 11 c 3 4 6 6 8 4 c 1 -2 -2 -5 -8 -4 z" fill={TERRA} fillOpacity="0.12" />
      <line x1="12" y1="6" x2="12" y2="17" />
      <path d="M11 6 q -1 -3 -2 -4 M13 6 q 1 -3 2 -4" />
    </svg>
  );
}

function HandHeart({ size = 36, rotate = 0, style }: { size?: number; rotate?: number; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 40 36"
      width={size}
      height={size * 0.9}
      fill="none"
      stroke={TERRA}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ transform: `rotate(${rotate}deg)`, ...style }}
    >
      <path d="M20 30 C 6 22 4 12 11 8 c 4 -2 7 1 9 4 c 2 -3 5 -6 9 -4 c 7 4 5 14 -9 22 z" />
    </svg>
  );
}

export default function Identificacao() {
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
      {/* Scattered butterflies */}
      <Butterfly size={20} rotate={-15} opacity={0.4} style={{ position: "absolute", top: "5rem", left: "1rem" }} />
      <Butterfly size={14} rotate={20} opacity={0.35} style={{ position: "absolute", top: "8rem", right: "1.5rem" }} />
      <Butterfly size={18} rotate={5} opacity={0.3} style={{ position: "absolute", top: "16rem", left: "45%" }} />
      <Butterfly size={16} rotate={-10} opacity={0.4} style={{ position: "absolute", bottom: "10rem", left: "2rem" }} />
      <Butterfly size={14} rotate={25} opacity={0.35} style={{ position: "absolute", bottom: "8rem", right: "2rem" }} />
      <Butterfly size={18} rotate={-25} opacity={0.3} style={{ position: "absolute", top: "22rem", right: "1rem" }} />

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "640px",
          margin: "0 auto",
          padding: "0 1.25rem",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.5rem, 5vw, 2rem)",
            fontWeight: 700,
            color: "#1F1B17",
            textAlign: "center",
            lineHeight: 1.25,
            marginBottom: "2rem",
          }}
        >
          {identificacao.headline}
        </h2>

        {/* Thought cards grid */}
        <div
          className="thoughts-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "0.875rem",
            marginBottom: "2.5rem",
          }}
        >
          {identificacao.thoughts.map((thought, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#F4E5D2",
                borderRadius: "14px",
                padding: "1rem 1.125rem",
                fontSize: "0.875rem",
                color: "#3A3631",
                lineHeight: 1.45,
                textAlign: "center",
                boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                fontWeight: 500,
              }}
            >
              &ldquo;{thought}&rdquo;
            </div>
          ))}
        </div>

        {/* Conclusion lines */}
        <div style={{ position: "relative", marginBottom: "2rem", textAlign: "center" }}>
          <HandHeart
            size={36}
            rotate={-15}
            style={{
              position: "absolute",
              left: "0.5rem",
              top: "1.6rem",
              opacity: 0.9,
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.0625rem",
              color: "#3A3631",
              marginBottom: "0.5rem",
              lineHeight: 1.4,
            }}
          >
            {identificacao.problem}
          </p>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.125rem",
              color: "#1F1B17",
              fontWeight: 700,
              lineHeight: 1.4,
            }}
          >
            {identificacao.solution}
          </p>
        </div>

        {/* CTA */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CtaButton
            text={identificacao.cta}
            className="cta-btn-pain"
            style={
              {
                width: "100%",
                maxWidth: "520px",
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

      <style>{`
        @media (max-width: 480px) {
          .thoughts-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 768px) {
          .thoughts-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
